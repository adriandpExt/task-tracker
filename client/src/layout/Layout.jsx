/* eslint-disable react/prop-types */
import BreadCrumbs from "../components/navbar/component/BreadCrumbs";
import Navbar from "../components/navbar/Navbar";

const Layout = ({ children }) => {
  const email = localStorage.getItem("email");

  const renderuser = () => {
    return (
      <p className="text-xl font-bold">
        WELCOME BACK <span style={{ fontWeight: 400 }}>{email}</span> !
      </p>
    );
  };
  return (
    <>
      <Navbar />

      <main className=" h-full w-full p-10 space-y-5 bg-gray-100">
        {renderuser()}
        <BreadCrumbs />
        {children}
      </main>
    </>
  );
};

export default Layout;
