/* eslint-disable react/prop-types */
import { useState } from "react";

const getColor = (title) => {
  switch (title) {
    case "Not Started":
      return "bg-red-400";
    case "In Progress":
      return "bg-yellow-500";
    case "Completed":
      return "bg-green-500";
    default:
      return "bg-base-200";
  }
};

export const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const colorClass = getColor(title);

  return (
    <div className="collapse collapse-plus bg-base-200">
      <input
        type="radio"
        name="my-accordion-3"
        id="accordion-toggle"
        className="hidden"
        checked={isOpen}
        onChange={handleToggle}
      />
      <div
        className={`collapse-title text-xl font-medium cursor-pointer ${colorClass}`}
        onClick={handleToggle}
      >
        {title}
      </div>
      <div
        className={`collapse-content overflow-y-auto transition-all duration-300 ease-out p-4 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {children ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {children}
          </div>
        ) : (
          "No Task Available"
        )}
      </div>
    </div>
  );
};

export default Accordion;
