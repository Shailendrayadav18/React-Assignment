import "./topNavbar.css";
import { TbGridDots } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

function TopNavbar() {
  return (
    <nav className="top-navbar">
      <div className="navbar-left">
        <button className="menu-btn">
          <TbGridDots></TbGridDots>
        </button>
      </div>

      <div className="navbar-center">
        <div className="logo-section">
          <span className="logo-text">Aludecor</span>
        </div>
      </div>

      <div className="navbar-right">
        <button className="nav-icon">
          <IoSearchOutline></IoSearchOutline>
        </button>
        
        <button className="nav-icon notification">
          <IoNotificationsOutline></IoNotificationsOutline>
        </button>

        <button className="nav-icon">
          <IoCalendarOutline></IoCalendarOutline>
        </button>

        <button className="nav-icon">
          <IoSettingsOutline></IoSettingsOutline>
        </button>
        
        <div className="profile">
         <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;