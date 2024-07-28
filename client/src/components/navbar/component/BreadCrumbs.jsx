import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-gray-700">
      <ol className="flex space-x-2">
        <li>
          <Link to="/dashboard" className="text-blue-600 hover:text-blue-800">
            HOME
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const href = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={href} className="flex items-center space-x-2">
              <span>&gt;</span>
              {isLast && <span className="text-gray-500">{value}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
