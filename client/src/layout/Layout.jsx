/* eslint-disable react/prop-types */
import Navbar from "../components/navbar/Navbar";

import { useAuth } from "~/hooks/useAuth";

const Layout = ({ children }) => {
  const { email } = useAuth();

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
        {children}
      </main>
    </>
  );
};

export default Layout;
