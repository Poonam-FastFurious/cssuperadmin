import "./App.css";

import "../src/assets/images/favicon.ico";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/icons.min.css";
import "../src/assets/css/app.min.css";
import "../src/assets/css/custom.min.css";
import Home from "./Componnets/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./Componnets/Authentication/Login";
import Listproduct from "./Componnets/Product/Listproduct";
import Header from "./Componnets/Header";
// import AddProduct from "./Componnets/Product/AddProduct";
import Category from "./Componnets/Category/Category";
// import OrderList from "./Componnets/Order/OrderList";
import Transaction from "./Componnets/Transaction/Transaction";
import OrderDetail from "./Componnets/Order/OrderDetail";
import Customer from "./Componnets/Customer/Customer";
import Banner from "./Componnets/GenralSetting/Banners/Banner";
import Profile from "./Componnets/SiteSetting/Profile";
import Coupon from "./Componnets/GenralSetting/Coupon";
import Shipping from "./Componnets/GenralSetting/ShipingCharg";
import Section2 from "./Componnets/GenralSetting/Banners/Section2";
import Section3 from "./Componnets/GenralSetting/Banners/Section3";
import Section4 from "./Componnets/GenralSetting/Banners/Section4";
import Sliderlist from "./Componnets/GenralSetting/Slider/Sliderlist";
import Addslider from "./Componnets/GenralSetting/Slider/AddSlider";
import Faq from "./Componnets/GenralSetting/Faq";
import PrivacyPolicy from "./Componnets/GenralSetting/Privacypolicy";
import Termsandcondition from "./Componnets/GenralSetting/Termandcondition";
import ReturnPolicy from "./Componnets/GenralSetting/ReturnPolicy";
import ProductDetail from "./Componnets/Product/ProductDetail";
import Testimonial from "./Componnets/GenralSetting/Testimonial";
import EditProduct from "./Componnets/Product/EditProduct";
import EditSlider from "./Componnets/GenralSetting/Slider/EditSlider";
import Lockscreen from "./Componnets/SiteSetting/Lockscreen";
import ForgotPassword from "./Componnets/Authentication/ForgotPassword";
import Resetpassword from "./Componnets/Authentication/Resetpassword";
import StockList from "./Componnets/GenralSetting/Inventry/StockList";
import Return from "./Componnets/GenralSetting/Inventry/Return";
import Salesreport from "./Componnets/Reports/Salesreport";
import Productreports from "./Componnets/Reports/Productreports";
import PaymentsReport from "./Componnets/Reports/PaymentsReport";
import Addvendor from "./Componnets/Vendor/Addvendor";
import VendorList from "./Componnets/Vendor/VendorList";
import VenderDetails from "./Componnets/Vendor/VenderDetails";
import VendorPayments from "./Componnets/Vendor/VendorPayments";
import SubCategory from "./Componnets/Category/SubCategory";
// import HeaderCategory from "./Componnets/Category/HeaderCategory";
import State from "./Componnets/Category/State";
import RequestProduct from "./Componnets/Product/RequestProduct";
import ProcessingOrder from "./Componnets/Order/ProcessingOrder";
import Canceled from "./Componnets/Order/Canceled";
import Deliverd from "./Componnets/Order/Deliverd";
import AllOrder from "./Componnets/Order/AllOrder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/Admin/login" element={<Login />} />
            <Route path="/Lock" element={<Lockscreen />}></Route>
            <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
            <Route
              path="/reset_password/:id/:token"
              element={<Resetpassword />}
            ></Route>
          </Route>
          <Route
            element={
              <>
                <Header /> <Outlet />
              </>
            }
          >
            <Route path="/" element={<Home />}></Route>
            <Route path="/Product" element={<Listproduct />}></Route>
            <Route path="/RequestProduct" element={<RequestProduct />}></Route>
            <Route path="/Product/:id" element={<ProductDetail />} />
            <Route path="/EditProduct/:id" element={<EditProduct />} />
            {/* <Route path="/AddProduct" element={<AddProduct />}></Route> */}
            <Route path="/Categories" element={<Category />}></Route>
            <Route path="/State" element={<State />}></Route>
            <Route path="/SubCategory" element={<SubCategory />}></Route>
            {/* <Route path="/headercategory" element={<HeaderCategory />}></Route> */}
            <Route path="/Order" element={<AllOrder />}></Route>
            <Route path="/Processing" element={<ProcessingOrder />}></Route>
            <Route path="/Cancelled" element={<Canceled />}></Route>
            <Route path="/Delivered" element={<Deliverd />}></Route>
            <Route path="/order/:id" element={<OrderDetail />}></Route>
            <Route path="/Processing/:id" element={<OrderDetail />}></Route>
            <Route path="/Cancelled/:id" element={<OrderDetail />}></Route>
            <Route path="/Delivered/:id" element={<OrderDetail />}></Route>
            <Route path="/transaction" element={<Transaction />}></Route>
            <Route path="/customer" element={<Customer />}></Route>
            <Route path="/banner" element={<Banner />}></Route>
            <Route path="/Slider" element={<Sliderlist />}></Route>
            <Route path="/addslider" element={<Addslider />}></Route>
            <Route path="/edit/:id" element={<EditSlider />}></Route>
            <Route path="/bannersection2" element={<Section2 />}></Route>
            <Route path="/bannersection3" element={<Section3 />}></Route>
            <Route path="/bannersection4" element={<Section4 />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/Coupon" element={<Coupon />}></Route>
            <Route path="/pages-faqs" element={<Faq />}></Route>
            <Route path="/ReturnPolicy" element={<ReturnPolicy />}></Route>
            <Route path="/StockList" element={<StockList />}></Route>
            <Route path="/Returns" element={<Return />}></Route>
            <Route path="/salesreport" element={<Salesreport />}></Route>
            <Route path="/Productreport" element={<Productreports />}></Route>
            <Route path="/paymetsreport" element={<PaymentsReport />}></Route>
            <Route path="/Addvendor" element={<Addvendor />}></Route>
            <Route path="/allvendor" element={<VendorList />}></Route>
            <Route
              path="/VendorDetails/:id"
              element={<VenderDetails />}
            ></Route>
            <Route path="/Payments" element={<VendorPayments />}></Route>
            <Route path="/Testimonial" element={<Testimonial />}></Route>
            <Route
              path="/pages-term-conditions"
              element={<Termsandcondition />}
            ></Route>
            <Route
              path="/pages-privacy-policy"
              element={<PrivacyPolicy />}
            ></Route>
            <Route path="/Shipping" element={<Shipping />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
