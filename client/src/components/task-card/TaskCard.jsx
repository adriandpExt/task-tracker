/* eslint-disable react/prop-types */
export const TaskCard = ({ title, description }) => {
  return (
    <div className="grid grid-cols-4 p-3 rounded-md border-b-2 bg-white">
      <p className="col-span-1">{title}</p>
      <p className="col-span-2 overflow-hidden h-20">{description}</p>
      <div className="space-x-4 flex justify-end items-center">
        <div className="dropdown dropdown-right">
          <div tabIndex={0} role="button" className="btn m-1">
            Status
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Open</a>
            </li>
            <li>
              <a>In Progress</a>
            </li>
            <li>
              <a>Done</a>
            </li>
            <li>
              <a>Backlogs</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-warning w-20">edit</button>
        <button className="btn btn-error w-20">delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
