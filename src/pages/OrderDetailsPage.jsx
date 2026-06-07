import TopNavbar from "../components/TopNavbar/TopNavbar";
import LeftIconMenu from "../components/LeftIconMenu/LeftIconMenu";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Tabs from "../components/Tabs/Tabs";
import OrderDetail from "../components/OrderDetail/OrderDetail";
import OrderBreakdown from "../components/OrderBreakdown/OrderBreakdown";
import CustomerDetail from "../components/CustomerDetail/CustomerDetail";
import "./OrderDetailsPage.css";

function OrderDetailsPage() {
  return (
    <>
      <TopNavbar />

      <div className="dashboard-layout">

        <LeftIconMenu />

        <div className="content-area">

          <Header />

          <div className="body-section">

            <Sidebar />

            <div className="main-content">

              <Tabs />

              <OrderDetail />

              <OrderBreakdown />

              <CustomerDetail />

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default OrderDetailsPage;