import "./OrderDetail.css";

function OrderDetail() {
  return (
    <div className="order-detail">

      <div className="order-detail-header">
        <h3>Order Detail</h3>
      </div>

      <div className="order-detail-content">

        <div className="order-detail-grid">

          <div className="detail-item">
            <label>Plant</label>
            <p>2800 - Mumbai Branch</p>
          </div>

          <div className="detail-item">
            <label>Sales District</label>
            <p>T11001 - Loknath_Mukherjee</p>
          </div>

          <div className="detail-item">
            <label>Distribution Channel</label>
            <p>11 - Aluwall_Dealer</p>
          </div>

          <div className="detail-item">
            <label>Sales Document Type</label>
            <p>ZTSR - Service Sale W Mater</p>
          </div>

          <div className="detail-item">
            <label>Sales Organisation</label>
            <p>ZMFG - ALPL MFG. SALE ORG.</p>
          </div>

          <div className="detail-item">
            <label>Division</label>
            <p>11 - ALUWALL</p>
          </div>

          <div className="detail-item">
            <label>Incoterm</label>
            <p>Delivered Duty Paid</p>
          </div>

          <div className="detail-item">
            <label>Payment Term</label>
            <p>20% Advance and rest before dis</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default OrderDetail;