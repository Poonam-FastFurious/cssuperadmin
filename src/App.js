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
import AddProduct from "./Componnets/Product/AddProduct";
import StockOut from "./Componnets/Product/StockOut";
import Category from "./Componnets/Category/Category";
import OrderList from "./Componnets/Order/OrderList";
import Transaction from "./Componnets/Transaction/Transaction";
import OrderDetail from "./Componnets/Order/OrderDetail";
import Customer from "./Componnets/Customer/Customer";
import Banner from "./Componnets/GenralSetting/Banner";
import Tax from "./Componnets/GenralSetting/Tax";
import Team from "./Componnets/Team/Team";
import Profile from "./Componnets/SiteSetting/Profile";
import Coupon from "./Componnets/GenralSetting/Coupon";
import Shipping from "./Componnets/GenralSetting/ShipingCharg";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/Admin/login" element={<Login />} />
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
            <Route path="/AddProduct" element={<AddProduct />}></Route>
            <Route path="/Stockout" element={<StockOut />}></Route>
            <Route path="/Categories" element={<Category />}></Route>
            <Route path="/Order" element={<OrderList />}></Route>
            <Route path="/orderdetail" element={<OrderDetail />}></Route>
            <Route path="/transaction" element={<Transaction />}></Route>
            <Route path="/customer" element={<Customer />}></Route>
            <Route path="/banner" element={<Banner />}></Route>
            <Route path="/Tax" element={<Tax />}></Route>
            <Route path="/team" element={<Team />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/Coupon" element={<Coupon />}></Route>
            <Route path="/Shipping" element={<Shipping />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
