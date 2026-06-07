import "./leftIconMenu.css";

import { RiHome5Line } from "react-icons/ri";
import { RiFileList3Line } from "react-icons/ri";
import { RiBarChartBoxLine } from "react-icons/ri";
import { RiStackLine } from "react-icons/ri";
import { RiShoppingBag3Line } from "react-icons/ri";
import { RiBuilding2Line } from "react-icons/ri";
import { RiSettings4Line } from "react-icons/ri";


import {
  HiChartBar,
} from "react-icons/hi";

function LeftIconMenu() {
  const menus = [
    <RiStackLine />,
    <RiBarChartBoxLine />,
    <RiBuilding2Line />,
    <RiShoppingBag3Line/>,
    <RiHome5Line />,
    <RiFileList3Line />,
    <HiChartBar />,
    <RiSettings4Line />,
  ];

  return (
    <div className="left-icon-menu">
      {menus.map((icon, index) => (
        <button
          key={index}
          className={index === 0 ? "menu-item active" : "menu-item"}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}

export default LeftIconMenu;