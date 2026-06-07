import "./header.css";
import {
  FiPrinter,
  FiRefreshCw,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="breadcrumb-container">
          <span className="breadcrumb">
            Dashboard / Production Order / OD#-1001
          </span>
        </div>

        <div className="title-section">
          <h1>OD-1591</h1>

          <span className="status-badge">
            <FaCheckCircle className="status-icon" />
            In Process
          </span>
        </div>
      </div>

      <div className="header-right">
        <button className="icon-btn">
          <FiPrinter />
        </button>

        <button className="icon-btn">
          <FiRefreshCw />
        </button>

        <select className="status-dropdown">
          <option>Status</option>
        </select>

        <button className="action-btn">
          Action +
        </button>

        <button className="nav-btn">
          <FiChevronLeft />
        </button>

        <button className="nav-btn">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Header;