import { Link } from "react-router-dom";
import { privateRoutes } from "../../routes/routeConfig";

const Dashboard = () => {
  return (
    <main className="h-full space-y-5">
      <p className="font-semibold text-lg">Your Dashboard</p>

      <div className="flex items-center gap-3">
        <section className="bg-slate-400 p-10 rounded-lg w-52">
          <ul className="text-md font-semibold space-y-3">
            {privateRoutes.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
