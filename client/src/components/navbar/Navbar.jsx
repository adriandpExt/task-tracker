/* eslint-disable react/prop-types */
import { useState } from "react";

import { SvgIcons } from "../svg-icons";

import { UserDropdown, Drawer } from "./component";

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className="navbar bg-blue-950 z-20">
        <div className="flex items-center flex-1">
          <a className="btn btn-ghost font-extrabold text-2xl text-white">
            Task Management
          </a>
        </div>

        <div className="hidden lg:flex items-center justify-evenly">
          {/* <Filter /> */}
          <UserDropdown />
        </div>

        <SvgIcons
          className="lg:hidden cursor-pointer text-white"
          name={"ic_menu"}
          style={{ height: 30 }}
          onClick={toggleDrawer}
        />
      </nav>

      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={toggleDrawer} />
    </>
  );
};

export default Navbar;
