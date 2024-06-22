/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Baseurl } from "../config";

function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [ordersCount, setOrdersCount] = useState(0);
  const [user, setUser] = useState([]);
  const [usercount, setusercount] = useState(0);
  const [fetching, setFetching] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch the products from the API
    fetch(Baseurl + "/api/v1/Product/products")
      .then((responce) => responce.json())
      .then((data) => setProducts(data.data));
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setFetching(true);

        //order fetch
        const response = await fetch(
          "https://ssagriculturebackend.onrender.com/api/v1/order/allorder"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setOrders(data.data);
        setOrdersCount(data.data.length);
        //userfetch
        const responseuser = await fetch(Baseurl + "/api/v1/user/alluser");
        if (!responseuser.ok) {
          throw new Error(`HTTP error! status: ${responseuser.status}`);
        }
        const user = await responseuser.json();
        setUser(user.data);
        setusercount(user.data.length);
      } catch (err) {
        throw (new Error("data not fetch "), err);
      } finally {
        setFetching(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="h-100">
                  <div className="row mb-3 pb-1">
                    <div className="col-12">
                      <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                        <div className="flex-grow-1">
                          <h4 className="fs-16 mb-1">Good Morning, Admin!</h4>
                          <p className="text-muted mb-0">
                            Here's what's happening with your store today.
                          </p>
                        </div>
                        <div className="mt-3 mt-lg-0">
                          <form>
                            <div className="row g-3 mb-0 align-items-center">
                              <div className="col-sm-auto">
                                <div className="input-group">
                                  <input
                                    type="text"
                                    className="form-control border-0 dash-filter-picker shadow"
                                    data-provider="flatpickr"
                                    data-range-date="true"
                                    data-date-format="d M, Y"
                                    data-deafult-date="01 Jan 2022 to 31 Jan 2022"
                                  />
                                  <div className="input-group-text bg-primary border-primary text-white">
                                    <i className="ri-calendar-2-line"></i>
                                  </div>
                                </div>
                              </div>

                              <div className="col-auto">
                                <button
                                  type="button"
                                  className="btn btn-soft-info btn-icon waves-effect waves-light layout-rightside-btn"
                                >
                                  <i className="ri-pulse-line"></i>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-3 col-md-6">
                      <div className="card card-animate">
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1 overflow-hidden">
                              <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                Total Sales
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <h5 className="text-success fs-14 mb-0">
                                <i className="ri-arrow-right-up-line fs-13 align-middle"></i>
                                +16.24 %
                              </h5>
                            </div>
                          </div>
                          <div className="d-flex align-items-end justify-content-between mt-4">
                            <div>
                              <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                <span
                                  className="counter-value"
                                  data-target="559.25"
                                >
                                  0
                                </span>
                                k
                              </h4>
                              <Link to="" className="text-decoration-underline">
                                View net earnings
                              </Link>
                            </div>
                            <div className="avatar-sm flex-shrink-0">
                              <span className="avatar-title bg-success-subtle rounded fs-3">
                                <i className="bx bx-dollar-circle text-success"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                      <div className="card card-animate">
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1 overflow-hidden">
                              <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                Orders
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <h5 className="text-danger fs-14 mb-0">
                                <i className="ri-arrow-right-down-line fs-13 align-middle"></i>
                                -3.57 %
                              </h5>
                            </div>
                          </div>
                          <div className="d-flex align-items-end justify-content-between mt-4">
                            <div>
                              <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                <span
                                  className="counter-value"
                                  data-target="36894"
                                >
                                  {ordersCount}
                                </span>
                              </h4>
                              <Link to="" className="text-decoration-underline">
                                View all orders
                              </Link>
                            </div>
                            <div className="avatar-sm flex-shrink-0">
                              <span className="avatar-title bg-info-subtle rounded fs-3">
                                <i className="bx bx-shopping-bag text-info"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                      <div className="card card-animate">
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1 overflow-hidden">
                              <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                Customers
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <h5 className="text-success fs-14 mb-0">
                                <i className="ri-arrow-right-up-line fs-13 align-middle"></i>
                                +29.08 %
                              </h5>
                            </div>
                          </div>
                          <div className="d-flex align-items-end justify-content-between mt-4">
                            <div>
                              <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                <span
                                  className="counter-value"
                                  data-target="183.35"
                                >
                                  {usercount}
                                </span>
                                M
                              </h4>
                              <Link to="" className="text-decoration-underline">
                                See details
                              </Link>
                            </div>
                            <div className="avatar-sm flex-shrink-0">
                              <span className="avatar-title bg-warning-subtle rounded fs-3">
                                <i className="bx bx-user-circle text-warning"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                      <div className="card card-animate">
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1 overflow-hidden">
                              <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                My Balance
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <h5 className="text-muted fs-14 mb-0">+0.00 %</h5>
                            </div>
                          </div>
                          <div className="d-flex align-items-end justify-content-between mt-4">
                            <div>
                              <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                $
                                <span
                                  className="counter-value"
                                  data-target="165.89"
                                >
                                  0
                                </span>
                                k
                              </h4>
                              <Link to="" className="text-decoration-underline">
                                Withdraw money
                              </Link>
                            </div>
                            <div className="avatar-sm flex-shrink-0">
                              <span className="avatar-title bg-primary-subtle rounded fs-3">
                                <i className="bx bx-wallet text-primary"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-8">
                      <div className="card">
                        <div className="card-header border-0 align-items-center d-flex">
                          <h4 className="card-title mb-0 flex-grow-1">
                            Recent Order
                          </h4>
                          <div>
                            <button
                              type="button"
                              className="btn btn-soft-secondary btn-sm"
                            >
                              ALL
                            </button>
                            <button
                              type="button"
                              className="btn btn-soft-secondary btn-sm"
                            >
                              1M
                            </button>
                            <button
                              type="button"
                              className="btn btn-soft-secondary btn-sm"
                            >
                              6M
                            </button>
                            <button
                              type="button"
                              className="btn btn-soft-primary btn-sm"
                            >
                              1Y
                            </button>
                          </div>
                        </div>

                        <div className="card-header p-0 border-0 bg-light-subtle">
                          <div className="row g-0 text-center">
                            <div className="col-6 col-sm-3">
                              <div className="p-3 border border-dashed border-start-0">
                                <h5 className="mb-1">
                                  <span
                                    className="counter-value"
                                    data-target="7585"
                                  >
                                    0
                                  </span>
                                </h5>
                                <p className="text-muted mb-0">Orders</p>
                              </div>
                            </div>

                            <div className="col-6 col-sm-3">
                              <div className="p-3 border border-dashed border-start-0">
                                <h5 className="mb-1">
                                  $
                                  <span
                                    className="counter-value"
                                    data-target="22.89"
                                  >
                                    0
                                  </span>
                                  k
                                </h5>
                                <p className="text-muted mb-0">Earnings</p>
                              </div>
                            </div>

                            <div className="col-6 col-sm-3">
                              <div className="p-3 border border-dashed border-start-0">
                                <h5 className="mb-1">
                                  <span
                                    className="counter-value"
                                    data-target="367"
                                  >
                                    0
                                  </span>
                                </h5>
                                <p className="text-muted mb-0">Refunds</p>
                              </div>
                            </div>

                            <div className="col-6 col-sm-3">
                              <div className="p-3 border border-dashed border-start-0 border-end-0">
                                <h5 className="mb-1 text-success">
                                  <span
                                    className="counter-value"
                                    data-target="18.92"
                                  >
                                    0
                                  </span>
                                  %
                                </h5>
                                <p className="text-muted mb-0">
                                  Conversation Ratio
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card-body">
                          <div className="table-responsive table-card">
                            <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                              <thead className="text-muted table-light">
                                <tr>
                                  <th scope="col">Order ID</th>
                                  <th scope="col">Customer</th>
                                  <th scope="col">Product</th>
                                  <th scope="col">Amount</th>

                                  <th scope="col">Status</th>
                                  <th scope="col">Rating</th>
                                </tr>
                              </thead>
                              <tbody>
                                {orders.slice(0, 6).map((order) => (
                                  <tr key={order.id}>
                                    <td>
                                      <Link
                                        to="/apps-ecommerce-order-details"
                                        className="fw-medium link-primary"
                                      >
                                        #{order.orderID}
                                      </Link>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                          <img
                                            src=""
                                            alt=""
                                            className="avatar-xs rounded-circle"
                                          />
                                        </div>
                                        <div className="flex-grow-1">name</div>
                                      </div>
                                    </td>
                                    <td>{order.products[0].product}</td>
                                    <td>
                                      <span className="text-success">
                                        Rs{order.totalAmount}
                                      </span>
                                    </td>
                                    <td>
                                      <span
                                        className={`badge ${
                                          order.paymentStatus === "Paid"
                                            ? "bg-success-subtle text-success"
                                            : order.paymentStatus === "Pending"
                                            ? "bg-warning-subtle text-warning"
                                            : "bg-danger-subtle text-danger"
                                        }`}
                                      >
                                        {order.status}
                                      </span>
                                    </td>
                                    <td>
                                      <h5 className="fs-14 fw-medium mb-0">
                                        {order.rating}
                                        <span className="text-muted fs-11 ms-1">
                                          ({order.votes} votes)
                                        </span>
                                      </h5>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4">
                      <div className="card card-height-100">
                        <div className="card-header align-items-center d-flex">
                          <h4 className="card-title mb-0 flex-grow-1">
                            Sales by Product
                          </h4>
                          <div className="flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-soft-primary btn-sm"
                            ></button>
                          </div>
                        </div>

                        <div className="card-body">
                          <div
                            id="sales-by-locations"
                            data-colors='["--vz-light", "--vz-success", "--vz-primary"]'
                            style={{ height: "269px" }}
                            dir="ltr"
                          ></div>

                          <div className="px-2 py-2 mt-1">
                            <p className="mb-1">
                              best category name{" "}
                              <span className="float-end">75%</span>
                            </p>
                            <div
                              className="progress mt-2"
                              style={{ height: "6px" }}
                            >
                              <div
                                className="progress-bar progress-bar-striped bg-primary"
                                role="progressbar"
                                style={{ width: "75%" }}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="75"
                              ></div>
                            </div>

                            <p className="mt-3 mb-1">
                              Greenland <span className="float-end">47%</span>
                            </p>
                            <div
                              className="progress mt-2"
                              style={{ height: "6px" }}
                            >
                              <div
                                className="progress-bar progress-bar-striped bg-primary"
                                role="progressbar"
                                style={{ width: "47%" }}
                                aria-valuenow="47"
                                aria-valuemin="0"
                                aria-valuemax="47"
                              ></div>
                            </div>

                            <p className="mt-3 mb-1">
                              Russia <span className="float-end">82%</span>
                            </p>
                            <div
                              className="progress mt-2"
                              style={{ height: "6px" }}
                            >
                              <div
                                className="progress-bar progress-bar-striped bg-primary"
                                role="progressbar"
                                style={{ width: "82%" }}
                                aria-valuenow="82"
                                aria-valuemin="0"
                                aria-valuemax="82"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-6">
                      <div className="card">
                        <div className="card-header align-items-center d-flex">
                          <h4 className="card-title mb-0 flex-grow-1">
                            Best Selling Products
                          </h4>
                          <div className="flex-shrink-0">
                            <div className="dropdown card-header-dropdown">
                              <Link
                                className="text-reset dropdown-btn"
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="fw-semibold text-uppercase fs-12">
                                  Sort by:
                                </span>
                                <span className="text-muted">
                                  Today
                                  <i className="mdi mdi-chevron-down ms-1"></i>
                                </span>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end">
                                <Link className="dropdown-item" to="#">
                                  Today
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Yesterday
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Last 7 Days
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Last 30 Days
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  This Month
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Last Month
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card-body">
                          <div className="table-responsive table-card">
                            <table className="table table-hover table-centered align-middle table-nowrap mb-0">
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="avatar-sm bg-light rounded p-1 me-2">
                                        <img
                                          src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                                          alt=""
                                          className="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 className="fs-14 my-1">
                                          <Link
                                            to="apps-ecommerce-product-details"
                                            className="text-reset"
                                          >
                                            Branded T-Shirts
                                          </Link>
                                        </h5>
                                        <span className="text-muted">
                                          24 Apr 2021
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      $29.00
                                    </h5>
                                    <span className="text-muted">Price</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">62</h5>
                                    <span className="text-muted">Orders</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      510
                                    </h5>
                                    <span className="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      $1,798
                                    </h5>
                                    <span className="text-muted">Amount</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="avatar-sm bg-light rounded p-1 me-2">
                                        <img
                                          src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                                          alt=""
                                          className="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 className="fs-14 my-1">
                                          <Link
                                            to="apps-ecommerce-product-details"
                                            className="text-reset"
                                          >
                                            Bentwood Chair
                                          </Link>
                                        </h5>
                                        <span className="text-muted">
                                          19 Mar 2021
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      $85.20
                                    </h5>
                                    <span className="text-muted">Price</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">35</h5>
                                    <span className="text-muted">Orders</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      <span className="badge bg-danger-subtle text-danger">
                                        Out of stock
                                      </span>
                                    </h5>
                                    <span className="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      $2982
                                    </h5>
                                    <span className="text-muted">Amount</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="avatar-sm bg-light rounded p-1 me-2">
                                        <img
                                          src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                                          alt=""
                                          className="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 className="fs-14 my-1">
                                          <Link
                                            to="apps-ecommerce-product-details"
                                            className="text-reset"
                                          >
                                            Bentwood Chair
                                          </Link>
                                        </h5>
                                        <span className="text-muted">
                                          19 Mar 2021
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      $85.20
                                    </h5>
                                    <span className="text-muted">Price</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">35</h5>
                                    <span className="text-muted">Orders</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      <span className="badge bg-danger-subtle text-danger">
                                        Out of stock
                                      </span>
                                    </h5>
                                    <span className="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      $2982
                                    </h5>
                                    <span className="text-muted">Amount</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="avatar-sm bg-light rounded p-1 me-2">
                                        <img
                                          src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                                          alt=""
                                          className="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 className="fs-14 my-1">
                                          <Link
                                            to="apps-ecommerce-product-details"
                                            className="text-reset"
                                          >
                                            Borosil Paper Cup
                                          </Link>
                                        </h5>
                                        <span className="text-muted">
                                          01 Mar 2021
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      $14.00
                                    </h5>
                                    <span className="text-muted">Price</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">80</h5>
                                    <span className="text-muted">Orders</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      749
                                    </h5>
                                    <span className="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      $1120
                                    </h5>
                                    <span className="text-muted">Amount</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="avatar-sm bg-light rounded p-1 me-2">
                                        <img
                                          src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                                          alt=""
                                          className="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 className="fs-14 my-1">
                                          <Link
                                            to="apps-ecommerce-product-details"
                                            className="text-reset"
                                          >
                                            One Seater Sofa
                                          </Link>
                                        </h5>
                                        <span className="text-muted">
                                          11 Feb 2021
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      $127.50
                                    </h5>
                                    <span className="text-muted">Price</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">56</h5>
                                    <span className="text-muted">Orders</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      <span className="badge bg-danger-subtle text-danger">
                                        Out of stock
                                      </span>
                                    </h5>
                                    <span className="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      $7140
                                    </h5>
                                    <span className="text-muted">Amount</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="avatar-sm bg-light rounded p-1 me-2">
                                        <img
                                          src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                                          alt=""
                                          className="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 className="fs-14 my-1">
                                          <Link
                                            to="apps-ecommerce-product-details"
                                            className="text-reset"
                                          >
                                            Stillbird Helmet
                                          </Link>
                                        </h5>
                                        <span className="text-muted">
                                          17 Jan 2021
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      $54
                                    </h5>
                                    <span className="text-muted">Price</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">74</h5>
                                    <span className="text-muted">Orders</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      805
                                    </h5>
                                    <span className="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 my-1 fw-normal">
                                      $3996
                                    </h5>
                                    <span className="text-muted">Amount</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="card card-height-100">
                        <div className="card-header align-items-center d-flex">
                          <h4 className="card-title mb-0 flex-grow-1">
                            Top 5 Customer
                          </h4>
                        </div>

                        <div className="card-body">
                          <div className="table-responsive table-card">
                            <table className="table table-centered table-hover align-middle table-nowrap mb-0">
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="flex-shrink-0 me-2">
                                        <img
                                          src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                                          alt=""
                                          className="avatar-sm p-2"
                                        />
                                      </div>
                                      <div>
                                        <h5 className="fs-14 my-1 fw-medium">
                                          <Link
                                            to="apps-ecommerce-seller-details"
                                            className="text-reset"
                                          >
                                            iTest Factory
                                          </Link>
                                        </h5>
                                        <span className="text-muted">
                                          Oliver Tyler
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="text-muted">
                                      Bags and Wallets
                                    </span>
                                  </td>
                                  <td>
                                    <p className="mb-0">8547</p>
                                    <span className="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <span className="text-muted">$541200</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 mb-0">
                                      32%
                                      <i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                                    </h5>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="flex-shrink-0 me-2">
                                        <img
                                          src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                                          alt=""
                                          className="avatar-sm p-2"
                                        />
                                      </div>
                                      <div className="flex-grow-1">
                                        <h5 className="fs-14 my-1 fw-medium">
                                          <Link
                                            to="apps-ecommerce-seller-details"
                                            className="text-reset"
                                          >
                                            Digitech Galaxy
                                          </Link>
                                        </h5>
                                        <span className="text-muted">
                                          John Roberts
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="text-muted">Watches</span>
                                  </td>
                                  <td>
                                    <p className="mb-0">895</p>
                                    <span className="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <span className="text-muted">$75030</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 mb-0">
                                      79%
                                      <i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                                    </h5>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="flex-shrink-0 me-2">
                                        <img
                                          src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                                          alt=""
                                          className="avatar-sm p-2"
                                        />
                                      </div>
                                      <div className="flex-gow-1">
                                        <h5 className="fs-14 my-1 fw-medium">
                                          <Link
                                            to="apps-ecommerce-seller-details"
                                            className="text-reset"
                                          >
                                            Nesta Technologies
                                          </Link>
                                        </h5>
                                        <span className="text-muted">
                                          Harley Fuller
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="text-muted">
                                      Bike Accessories
                                    </span>
                                  </td>
                                  <td>
                                    <p className="mb-0">3470</p>
                                    <span className="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <span className="text-muted">$45600</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 mb-0">
                                      90%
                                      <i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                                    </h5>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="flex-shrink-0 me-2">
                                        <img
                                          src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                                          alt=""
                                          className="avatar-sm p-2"
                                        />
                                      </div>
                                      <div className="flex-grow-1">
                                        <h5 className="fs-14 my-1 fw-medium">
                                          <Link
                                            to="apps-ecommerce-seller-details"
                                            className="text-reset"
                                          >
                                            Zoetic Fashion
                                          </Link>
                                        </h5>
                                        <span className="text-muted">
                                          James Bowen
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="text-muted">Clothes</span>
                                  </td>
                                  <td>
                                    <p className="mb-0">5488</p>
                                    <span className="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <span className="text-muted">$29456</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 mb-0">
                                      40%
                                      <i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                                    </h5>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="flex-shrink-0 me-2">
                                        <img
                                          src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                                          alt=""
                                          className="avatar-sm p-2"
                                        />
                                      </div>
                                      <div className="flex-grow-1">
                                        <h5 className="fs-14 my-1 fw-medium">
                                          <Link
                                            to="apps-ecommerce-seller-details"
                                            className="text-reset"
                                          >
                                            Meta4Systems
                                          </Link>
                                        </h5>
                                        <span className="text-muted">
                                          Zoe Dennis
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="text-muted">
                                      Furniture
                                    </span>
                                  </td>
                                  <td>
                                    <p className="mb-0">4100</p>
                                    <span className="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <span className="text-muted">$11260</span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 mb-0">
                                      57%
                                      <i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                                    </h5>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-4">
                      <div className="card card-height-100">
                        <div className="card-header align-items-center d-flex">
                          <h4 className="card-title mb-0 flex-grow-1">
                            Store Visits by Source
                          </h4>
                        </div>

                        <div className="card-body">
                          <div
                            id="store-visits-source"
                            data-colors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
                            className="apex-charts"
                            dir="ltr"
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-8">
                      <div className="card">
                        <div className="card-header align-items-center d-flex">
                          <h4 className="card-title mb-0 flex-grow-1">
                            Recent User
                          </h4>
                        </div>

                        <div className="card-body">
                          <div className="table-responsive table-card">
                            <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                              <thead className="text-muted table-light">
                                <tr>
                                  <th scope="col">Order ID</th>
                                  <th scope="col">Customer</th>
                                  <th scope="col">Product</th>
                                  <th scope="col">Amount</th>
                                  <th scope="col">Vendor</th>
                                  <th scope="col">Status</th>
                                  <th scope="col">Rating</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <Link
                                      to="apps-ecommerce-order-details"
                                      className="fw-medium link-primary"
                                    >
                                      #VZ2112
                                    </Link>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="flex-shrink-0 me-2">
                                        <img
                                          src="https://themesbrand.com/velzon/html/master/assets/images/users/avatar-1.jpg"
                                          alt=""
                                          className="avatar-xs rounded-circle"
                                        />
                                      </div>
                                      <div className="flex-grow-1">
                                        Alex Smith
                                      </div>
                                    </div>
                                  </td>
                                  <td>Clothes</td>
                                  <td>
                                    <span className="text-success">
                                      $109.00
                                    </span>
                                  </td>
                                  <td>Zoetic Fashion</td>
                                  <td>
                                    <span className="badge bg-success-subtle text-success">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 fw-medium mb-0">
                                      5.0
                                      <span className="text-muted fs-11 ms-1">
                                        (61 votes)
                                      </span>
                                    </h5>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <Link
                                      to="apps-ecommerce-order-details"
                                      className="fw-medium link-primary"
                                    >
                                      #VZ2111
                                    </Link>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="flex-shrink-0 me-2">
                                        <img
                                          src="https://themesbrand.com/velzon/html/master/assets/images/users/avatar-2.jpg"
                                          alt=""
                                          className="avatar-xs rounded-circle"
                                        />
                                      </div>
                                      <div className="flex-grow-1">
                                        Jansh Brown
                                      </div>
                                    </div>
                                  </td>
                                  <td>Kitchen Storage</td>
                                  <td>
                                    <span className="text-success">
                                      $149.00
                                    </span>
                                  </td>
                                  <td>Micro Design</td>
                                  <td>
                                    <span className="badge bg-warning-subtle text-warning">
                                      Pending
                                    </span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 fw-medium mb-0">
                                      4.5
                                      <span className="text-muted fs-11 ms-1">
                                        (61 votes)
                                      </span>
                                    </h5>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <Link
                                      to="apps-ecommerce-order-details"
                                      className="fw-medium link-primary"
                                    >
                                      #VZ2109
                                    </Link>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="flex-shrink-0 me-2">
                                        <img
                                          src="https://themesbrand.com/velzon/html/master/assets/images/users/avatar-3.jpg"
                                          alt=""
                                          className="avatar-xs rounded-circle"
                                        />
                                      </div>
                                      <div className="flex-grow-1">
                                        Ayaan Bowen
                                      </div>
                                    </div>
                                  </td>
                                  <td>Bike Accessories</td>
                                  <td>
                                    <span className="text-success">
                                      $215.00
                                    </span>
                                  </td>
                                  <td>Nesta Technologies</td>
                                  <td>
                                    <span className="badge bg-success-subtle text-success">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 fw-medium mb-0">
                                      4.9
                                      <span className="text-muted fs-11 ms-1">
                                        (89 votes)
                                      </span>
                                    </h5>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <Link
                                      to="apps-ecommerce-order-details"
                                      className="fw-medium link-primary"
                                    >
                                      #VZ2108
                                    </Link>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="flex-shrink-0 me-2">
                                        <img
                                          src="https://themesbrand.com/velzon/html/master/assets/images/users/avatar-4.jpg"
                                          alt=""
                                          className="avatar-xs rounded-circle"
                                        />
                                      </div>
                                      <div className="flex-grow-1">
                                        Prezy Mark
                                      </div>
                                    </div>
                                  </td>
                                  <td>Furniture</td>
                                  <td>
                                    <span className="text-success">
                                      $199.00
                                    </span>
                                  </td>
                                  <td>Syntyce Solutions</td>
                                  <td>
                                    <span className="badge bg-danger-subtle text-danger">
                                      Unpaid
                                    </span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 fw-medium mb-0">
                                      4.3
                                      <span className="text-muted fs-11 ms-1">
                                        (47 votes)
                                      </span>
                                    </h5>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <Link
                                      to="apps-ecommerce-order-details"
                                      className="fw-medium link-primary"
                                    >
                                      #VZ2107
                                    </Link>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="flex-shrink-0 me-2">
                                        <img
                                          src="https://themesbrand.com/velzon/html/master/assets/images/users/avatar-6.jpg"
                                          alt=""
                                          className="avatar-xs rounded-circle"
                                        />
                                      </div>
                                      <div className="flex-grow-1">
                                        Vihan Hudda
                                      </div>
                                    </div>
                                  </td>
                                  <td>Bags and Wallets</td>
                                  <td>
                                    <span className="text-success">
                                      $330.00
                                    </span>
                                  </td>
                                  <td>iTest Factory</td>
                                  <td>
                                    <span className="badge bg-success-subtle text-success">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <h5 className="fs-14 fw-medium mb-0">
                                      4.7
                                      <span className="text-muted fs-11 ms-1">
                                        (161 votes)
                                      </span>
                                    </h5>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
