import "./CustomerDetail.css";
function CustomerDetail() {
  return (
    <div className="customer-detail">

      <div className="customer-detail-header">
        <h3>Customer Detail</h3>
      </div>

      <div className="customer-detail-content">

        <div className="customer-grid">

          <div className="customer-item">
            <label>Customer Reference</label>
            <p>OD-1591</p>
          </div>

          <div className="customer-item">
            <label>Order Created Date</label>
            <p>31th, Jan 2026</p>
          </div>

          <div className="customer-item">
            <label>Requested Delivery Date</label>
            <p>12th, Feb 2026</p>
          </div>

          <div className="customer-item">
            <label>Sold To</label>
            <p>Adhityaa Enterprises</p>
          </div>

          <div className="customer-item">
            <label>Ship to</label>
            <p>--</p>
          </div>

          <div className="customer-item">
            <label>Billing Address</label>
            <p>
              Adhityaa Enterprises, 400079
            </p>
          </div>

          <div className="customer-item">
            <label>Shipping Address</label>
            <p>
              India, North-East, Tripura, Dhalai, Dhalai, Andheri, 400612.
            </p>
          </div>

          <div className="customer-item">
            <label>Remarks</label>
            <p>--</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default CustomerDetail;