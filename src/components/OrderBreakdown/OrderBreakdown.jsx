import "./OrderBreakdown.css";

function OrderBreakdown() {
  return (
    <div className="order-breakdown">

      <div className="order-breakdown-header">
        <h3>Order Breakdown</h3>
      </div>

      <div className="table-wrapper">

        <table className="breakdown-table">

          <thead>
            <tr>
              <th>Material</th>
              <th>Requested quantity</th>
              <th>Scheduled quantity</th>
              <th>Confirmed quantity</th>
              <th>Extra quantity</th>
              <th>UOM</th>
              <th>Timestamp</th>
              <th className="status-head"><span>Status</span></th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>AL33R-TR75-2440mmx1220mm</td>
              <td className="qty-column">10</td>
              <td className="qty-column">10</td>
              <td className="qty-column">--</td>
              <td className="qty-column">--</td>
              <td>Pieces</td>
              <td><b>31th, Jan 2026</b> <br /> 10:20 am</td>
              <td className="status-pending">
                <span>Pending</span>
              </td>
            </tr>

            <tr>
              <td>IH-Paint-SDP_AD52_Test</td>
              <td className="qty-column">04</td>
              <td className="qty-column">04</td>
              <td className="qty-column">--</td>
              <td className="qty-column">--</td>
              <td>Liter</td>
              <td><b>31th, Jan 2026</b> <br />11:00 am</td>
              <td className="status-pending">
                <span>Pending</span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default OrderBreakdown;