import "./sidebar.css";
import { BsFileEarmarkText } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-row">
        <div className="sidebar-item">
          <label>Order Number</label>
          <p>OD-1591</p>
        </div>

        <div className="sidebar-item">
          <label>Material</label>
          <p>AL3C-AD01</p>
        </div>
      </div>

      <div className="sidebar-row">
        <div className="sidebar-item">
          <label>Total Quantity</label>
          <p>14</p>
        </div>

        <div className="sidebar-item">
          <label>Sales organization</label>
          <p>ZMFG - ALPL MFG. <br /> SALE ORG. </p>
        </div>
      </div>

      <div className="sidebar-row">
        <div className="sidebar-item">
          <label>Sales Document Type</label>
          <p>ZTSR - Service Sale W Mater</p>
        </div>

        <div className="sidebar-item">
          <label>Plant</label>
          <p>2800 - Mumbai Branch</p>
        </div>
      </div>

      <div className="sidebar-row">
        <div className="sidebar-item">
          <label>Delivery Date</label>
          <p>12th, Feb 2026</p>
        </div>

        <div className="sidebar-item">
          <label>Status</label>
          <div className="process-header">
            <span className="status-dot"></span>
            <span>In Process</span>
          </div>
        </div>
      </div>

      <div className="process-section">

        <div className="timeline-wrapper">

          <div className="timeline-card">
            <div className="timeline-left">

              <div className="timeline-circle">
                <BsFileEarmarkText />
              </div>

            </div>

            <div className="timeline-content">
              <div className="document-number">In progress | <span>PO-1120</span></div>

              <div className="document-title">
                Production Order Created
              </div>

              <div className="document-date">
               <b>31 Jan 2026</b> | 11:10 AM
              </div>
            </div>
          </div>

          <div className="timeline-card">
            <div className="timeline-left">

              <div className="timeline-circle">
                <BsFileEarmarkText />
              </div>

            </div>

            <div className="timeline-content">
              <div className="document-number">In progress | <span>SO-1754</span></div>

              <div className="document-title">
                Sales Order Created
              </div>

              <div className="document-date">
                <b>31 Jan 2026 </b>| 11:15 AM
              </div>
            </div>
          </div>

          <div className="timeline-card">
            <div className="timeline-left">

              <div className="timeline-circle">
                <BsFileEarmarkText />
              </div>

            </div>

            <div className="timeline-content">
              <div className="document-number">In progress | <span>STO-1250</span></div>

              <div className="document-title">
                Stock Transfer Order Created
              </div>

              <div className="document-date">
                <b>31 Jan 2026 </b> | 11:20 AM
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;