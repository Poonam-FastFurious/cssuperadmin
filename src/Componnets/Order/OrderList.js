import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function OrderList() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Orders</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="#">Proven Ro</Link>
                      </li>
                      <li className="breadcrumb-item active">Orders</li>
                    </ol>
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
                          Total Orders
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
                          <span className="counter-value" data-target="559.25">
                            0
                          </span>
                          k
                        </h4>
                        <Link
                          to=""
                          className="text-decoration-underline"
                          style={{ visibility: "hidden" }}
                        >
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
                          Processing
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
                          <span className="counter-value" data-target="36894">
                            0
                          </span>
                        </h4>
                        <Link
                          to=""
                          className="text-decoration-underline"
                          style={{ visibility: "hidden" }}
                        >
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
                          Completed
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
                          <span className="counter-value" data-target="183.35">
                            0
                          </span>
                          M
                        </h4>
                        <Link
                          to=""
                          className="text-decoration-underline"
                          style={{ visibility: "hidden" }}
                        >
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
                          Cancelled
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
                          <span className="counter-value" data-target="165.89">
                            0
                          </span>
                          k
                        </h4>
                        <Link
                          to=""
                          className="text-decoration-underline"
                          style={{ visibility: "hidden" }}
                        >
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
              <div className="col-lg-12">
                <div className="card" id="orderList">
                  <div className="card-header border-0">
                    <div className="row align-items-center gy-3">
                      <div className="col-sm">
                        <h5 className="card-title mb-0">Order History</h5>
                      </div>
                      <div className="col-sm-auto">
                        <div className="d-flex gap-1 flex-wrap">
                          <button type="button" className="btn btn-info">
                            <i className="ri-file-download-line align-bottom me-1"></i>
                            Import
                          </button>
                          <button
                            className="btn btn-soft-danger"
                            id="remove-actions"
                          >
                            <i className="ri-delete-bin-2-line"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body border border-dashed border-end-0 border-start-0">
                    <form>
                      <div className="row g-3">
                        <div className="col-xxl-5 col-sm-6">
                          <div className="search-box">
                            <input
                              type="text"
                              className="form-control search"
                              placeholder="Search for order ID, customer, order status or something..."
                            />
                            <i className="ri-search-line search-icon"></i>
                          </div>
                        </div>

                        <div className="col-xxl-2 col-sm-6">
                          <div>
                            <input
                              type="date"
                              data-provider="flatpickr"
                              data-date-format="d M, Y"
                              data-multiple-date="true"
                              className="form-control"
                              data-range-date="true"
                              id="demo-datepicker"
                              placeholder="Select date"
                            />
                          </div>
                        </div>

                        <div className="col-xxl-2 col-sm-4">
                          <div>
                            <select
                              className="form-control"
                              data-choices=""
                              data-choices-search-false=""
                              name="choices-single-default"
                              id="idStatus"
                            >
                              <option value="">Status</option>
                              <option value="all" selected="">
                                All
                              </option>
                              <option value="Pending">Pending</option>
                              <option value="Inprogress">Processing</option>
                              <option value="Cancelled">Cancelled</option>
                              <option value="Pickups">Shipped</option>
                              <option value="Returns">Delivered</option>
                              <option value="Delivered">Cancelled</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-xxl-2 col-sm-4">
                          <div>
                            <select
                              className="form-control"
                              data-choices=""
                              data-choices-search-false=""
                              name="choices-single-default"
                              id="idPayment"
                            >
                              <option value="">Select Payment</option>
                              <option value="all" selected="">
                                All
                              </option>
                              <option value="Mastercard">Credit Card</option>
                              <option value="Paypal">Paypal</option>
                              <option value="Visa">Bank Transfer</option>
                              <option value="COD">COD</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-xxl-1 col-sm-4">
                          <div>
                            <button
                              type="button"
                              className="btn btn-primary w-100"
                            >
                              <i className="ri-equalizer-fill me-1 align-bottom"></i>
                              Filters
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-body pt-0">
                    <div>
                      <ul
                        className="nav nav-tabs nav-tabs-custom nav-success mb-3"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <Link
                            className="nav-link active All py-3"
                            data-bs-toggle="tab"
                            id="All"
                            to="#home1"
                            role="tab"
                            aria-selected="true"
                          >
                            <i className="ri-store-2-fill me-1 align-bottom"></i>
                            All Orders
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link py-3 Delivered"
                            data-bs-toggle="tab"
                            id="Delivered"
                            to="#delivered"
                            role="tab"
                            aria-selected="false"
                          >
                            <i className="ri-checkbox-circle-line me-1 align-bottom"></i>
                            Delivered
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link py-3 Pickups"
                            data-bs-toggle="tab"
                            id="Pickups"
                            to="#pickups"
                            role="tab"
                            aria-selected="false"
                          >
                            <i className="ri-truck-line me-1 align-bottom"></i>
                            Pickups
                            <span className="badge bg-danger align-middle ms-1">
                              2
                            </span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link py-3 Cancelled"
                            data-bs-toggle="tab"
                            id="Cancelled"
                            to="#cancelled"
                            role="tab"
                            aria-selected="false"
                          >
                            <i className="ri-close-circle-line me-1 align-bottom"></i>
                            Cancelled
                          </Link>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="home1"
                          role="tabpanel"
                        >
                          <div className="table-responsive table-card mb-1">
                            <table className="table table-nowrap align-middle">
                              <thead className="text-muted table-light">
                                <tr className="text-uppercase">
                                  <th scope="col" style={{ width: "25px" }}>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="checkAll"
                                        value="option"
                                      />
                                    </div>
                                  </th>
                                  <th className="sort" data-sort="id">
                                    Order ID
                                  </th>
                                  <th
                                    className="sort"
                                    data-sort="customer_name"
                                  >
                                    Customer
                                  </th>
                                  <th className="sort" data-sort="product_name">
                                    Product
                                  </th>
                                  <th className="sort" data-sort="date">
                                    Order Date
                                  </th>
                                  <th className="sort" data-sort="amount">
                                    Amount
                                  </th>
                                  <th className="sort" data-sort="payment">
                                    Payment Method
                                  </th>
                                  <th className="sort" data-sort="status">
                                    Delivery Status
                                  </th>
                                  <th className="sort" data-sort="city">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="list form-check-all">
                                <tr>
                                  <th scope="row">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="checkAll"
                                        value="option1"
                                      />
                                    </div>
                                  </th>
                                  <td className="id">
                                    <Link
                                      to="/orderdetail"
                                      className="fw-medium link-primary"
                                    >
                                      OrderId
                                    </Link>
                                  </td>
                                  <td className="customer_name">Customer</td>
                                  <td className="product_name"></td>
                                  <td className="date"></td>
                                  <td className="amount"></td>
                                  <td className="payment"></td>
                                  <td className="status">
                                    <span className="badge bg-warning-subtle text-warning text-uppercase"></span>
                                  </td>
                                  <td>
                                    <ul className="list-inline hstack gap-2 mb-0">
                                      <li
                                        className="list-inline-item"
                                        data-bs-toggle="tooltip"
                                        data-bs-trigger="hover"
                                        data-bs-placement="top"
                                        title="View"
                                      >
                                        <Link
                                          to={""}
                                          className="text-primary d-inline-block"
                                        >
                                          <i className="ri-eye-fill fs-16"></i>
                                        </Link>
                                      </li>
                                      <li
                                        className="list-inline-item edit"
                                        data-bs-toggle="tooltip"
                                        data-bs-trigger="hover"
                                        data-bs-placement="top"
                                        title="Edit"
                                      >
                                        <Link
                                          to="#showModal"
                                          data-bs-toggle="modal"
                                          className="text-primary d-inline-block edit-item-btn"
                                        >
                                          <i className="ri-pencil-fill fs-16"></i>
                                        </Link>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <div className="noresult">
                              <div className="text-center">
                                <lord-icon
                                  src="../../../msoeawqm.json"
                                  trigger="loop"
                                  colors="primary:#121331,secondary:#08a88a"
                                  style={{ width: "75px", height: "75px" }}
                                ></lord-icon>
                                <h5 className="mt-2">Sorry! No Result Found</h5>
                                <p className="text-muted mb-0">
                                  We've searched more than 150+ customers. We
                                  did not find any customer for your search.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="delivered"
                          role="tabpanel"
                        >
                          <div className="table-responsive table-card mb-1">
                            <table className="table table-nowrap align-middle">
                              <thead className="text-muted table-light">
                                <tr className="text-uppercase">
                                  <th scope="col" style={{ width: "25px" }}>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="checkAll"
                                        value="option"
                                      />
                                    </div>
                                  </th>
                                  <th className="sort" data-sort="id">
                                    Order ID
                                  </th>
                                  <th
                                    className="sort"
                                    data-sort="customer_name"
                                  >
                                    Customer
                                  </th>
                                  <th className="sort" data-sort="product_name">
                                    Product
                                  </th>
                                  <th className="sort" data-sort="date">
                                    Order Date
                                  </th>
                                  <th className="sort" data-sort="amount">
                                    Amount
                                  </th>
                                  <th className="sort" data-sort="payment">
                                    Payment Method
                                  </th>
                                  <th className="sort" data-sort="status">
                                    Delivery Status
                                  </th>
                                  <th className="sort" data-sort="city">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="list form-check-all">
                                <tr>
                                  <th scope="row">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="checkAllCancelled"
                                        value="option1"
                                      />
                                    </div>
                                  </th>
                                  <td className="id">
                                    <Link
                                      to={""}
                                      className="fw-medium link-primary"
                                    ></Link>
                                  </td>
                                  <td className="customer_name"></td>
                                  <td className="product_name"></td>
                                  <td className="date"></td>
                                  <td className="amount"></td>
                                  <td className="payment"></td>
                                  <td className="status">
                                    <span className="badge bg-warning-subtle text-warning text-uppercase"></span>
                                  </td>
                                  <td>
                                    <ul className="list-inline hstack gap-2 mb-0">
                                      <li
                                        className="list-inline-item"
                                        data-bs-toggle="tooltip"
                                        data-bs-trigger="hover"
                                        data-bs-placement="top"
                                        title="View"
                                      >
                                        <Link
                                          to={""}
                                          className="text-primary d-inline-block"
                                        >
                                          <i className="ri-eye-fill fs-16"></i>
                                        </Link>
                                      </li>
                                      <li
                                        className="list-inline-item edit"
                                        data-bs-toggle="tooltip"
                                        data-bs-trigger="hover"
                                        data-bs-placement="top"
                                        title="Edit"
                                      >
                                        <Link
                                          to="#showModal"
                                          data-bs-toggle="modal"
                                          className="text-primary d-inline-block edit-item-btn"
                                        >
                                          <i className="ri-pencil-fill fs-16"></i>
                                        </Link>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <div className="noresult">
                              <div className="text-center">
                                <lord-icon
                                  src="../../../msoeawqm.json"
                                  trigger="loop"
                                  colors="primary:#121331,secondary:#08a88a"
                                  style={{ width: "75px", height: "75px" }}
                                ></lord-icon>
                                <h5 className="mt-2">Sorry! No Result Found</h5>
                                <p className="text-muted mb-0">
                                  We've searched more than 150+ customers. We
                                  did not find any customer for your search.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pickups"
                          role="tabpanel"
                        >
                          {/* Pickups Orders Content */}
                          <div className="table-responsive table-card mb-1">
                            <table className="table table-nowrap align-middle">
                              <thead className="text-muted table-light">
                                <tr className="text-uppercase">
                                  <th scope="col" style={{ width: "25px" }}>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="checkAll"
                                        value="option"
                                      />
                                    </div>
                                  </th>
                                  <th className="sort" data-sort="id">
                                    Order ID
                                  </th>
                                  <th
                                    className="sort"
                                    data-sort="customer_name"
                                  >
                                    Customer
                                  </th>
                                  <th className="sort" data-sort="product_name">
                                    Product
                                  </th>
                                  <th className="sort" data-sort="date">
                                    Order Date
                                  </th>
                                  <th className="sort" data-sort="amount">
                                    Amount
                                  </th>
                                  <th className="sort" data-sort="payment">
                                    Payment Method
                                  </th>
                                  <th className="sort" data-sort="status">
                                    Delivery Status
                                  </th>
                                  <th className="sort" data-sort="city">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="list form-check-all">
                                <tr>
                                  <th scope="row">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="checkAllCancelled"
                                        value="option1"
                                      />
                                    </div>
                                  </th>
                                  <td className="id">
                                    <Link
                                      to={""}
                                      className="fw-medium link-primary"
                                    ></Link>
                                  </td>
                                  <td className="customer_name"></td>
                                  <td className="product_name"></td>
                                  <td className="date"></td>
                                  <td className="amount"></td>
                                  <td className="payment"></td>
                                  <td className="status">
                                    <span className="badge bg-warning-subtle text-warning text-uppercase"></span>
                                  </td>
                                  <td>
                                    <ul className="list-inline hstack gap-2 mb-0">
                                      <li
                                        className="list-inline-item"
                                        data-bs-toggle="tooltip"
                                        data-bs-trigger="hover"
                                        data-bs-placement="top"
                                        title="View"
                                      >
                                        <Link className="text-primary d-inline-block">
                                          <i className="ri-eye-fill fs-16"></i>
                                        </Link>
                                      </li>
                                      <li
                                        className="list-inline-item edit"
                                        data-bs-toggle="tooltip"
                                        data-bs-trigger="hover"
                                        data-bs-placement="top"
                                        title="Edit"
                                      >
                                        <Link
                                          to="#showModal"
                                          data-bs-toggle="modal"
                                          className="text-primary d-inline-block edit-item-btn"
                                        >
                                          <i className="ri-pencil-fill fs-16"></i>
                                        </Link>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <div className="noresult">
                              <div className="text-center">
                                <lord-icon
                                  src="../../../msoeawqm.json"
                                  trigger="loop"
                                  colors="primary:#121331,secondary:#08a88a"
                                  style={{ width: "75px", height: "75px" }}
                                ></lord-icon>
                                <h5 className="mt-2">Sorry! No Result Found</h5>
                                <p className="text-muted mb-0">
                                  We've searched more than 150+ customers. We
                                  did not find any customer for your search.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="cancelled"
                          role="tabpanel"
                        >
                          {/* Cancelled Orders Content */}
                          <div className="table-responsive table-card mb-1">
                            <table className="table table-nowrap align-middle">
                              <thead className="text-muted table-light">
                                <tr className="text-uppercase">
                                  <th scope="col" style={{ width: "25px" }}>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="checkAll"
                                        value="option"
                                      />
                                    </div>
                                  </th>
                                  <th className="sort" data-sort="id">
                                    Order ID
                                  </th>
                                  <th
                                    className="sort"
                                    data-sort="customer_name"
                                  >
                                    Customer
                                  </th>
                                  <th className="sort" data-sort="product_name">
                                    Product
                                  </th>
                                  <th className="sort" data-sort="date">
                                    Order Date
                                  </th>
                                  <th className="sort" data-sort="amount">
                                    Amount
                                  </th>
                                  <th className="sort" data-sort="payment">
                                    Payment Method
                                  </th>
                                  <th className="sort" data-sort="status">
                                    Delivery Status
                                  </th>
                                  <th className="sort" data-sort="city">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="list form-check-all">
                                <tr>
                                  <th scope="row">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="checkAllCancelled"
                                        value="option1"
                                      />
                                    </div>
                                  </th>
                                  <td className="id">
                                    <Link className="fw-medium link-primary"></Link>
                                  </td>
                                  <td className="customer_name"></td>
                                  <td className="product_name"></td>
                                  <td className="date"></td>
                                  <td className="amount"></td>
                                  <td className="payment"></td>
                                  <td className="status">
                                    <span className="badge bg-warning-subtle text-warning text-uppercase"></span>
                                  </td>
                                  <td>
                                    <ul className="list-inline hstack gap-2 mb-0">
                                      <li
                                        className="list-inline-item"
                                        data-bs-toggle="tooltip"
                                        data-bs-trigger="hover"
                                        data-bs-placement="top"
                                        title="View"
                                      >
                                        <Link className="text-primary d-inline-block">
                                          <i className="ri-eye-fill fs-16"></i>
                                        </Link>
                                      </li>
                                      <li
                                        className="list-inline-item edit"
                                        data-bs-toggle="tooltip"
                                        data-bs-trigger="hover"
                                        data-bs-placement="top"
                                        title="Edit"
                                      >
                                        <Link
                                          to="#showModal"
                                          data-bs-toggle="modal"
                                          className="text-primary d-inline-block edit-item-btn"
                                        >
                                          <i className="ri-pencil-fill fs-16"></i>
                                        </Link>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <div className="noresult">
                              <div className="text-center">
                                <lord-icon
                                  src="../../../msoeawqm.json"
                                  trigger="loop"
                                  colors="primary:#121331,secondary:#08a88a"
                                  style={{ width: "75px", height: "75px" }}
                                ></lord-icon>
                                <h5 className="mt-2">Sorry! No Result Found</h5>
                                <p className="text-muted mb-0">
                                  We've searched more than 150+ customers. We
                                  did not find any customer for your search.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id="showModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header bg-light p-3">
                            <h5 className="modal-title" id="exampleModalLabel">
                              &nbsp;
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              id="close-modal"
                            ></button>
                          </div>
                          <form className="tablelist-form" autoComplete="off">
                            <div className="modal-body">
                              <input type="hidden" id="id-field" />

                              <div>
                                <label
                                  htmlFor="delivered-status"
                                  className="form-label"
                                >
                                  Delivery Status
                                </label>
                                <select
                                  className="form-control"
                                  data-trigger=""
                                  name="delivered-status"
                                  required=""
                                  id="delivered-status"
                                >
                                  <option value="Pending">Pending</option>
                                  <option value="Processing">Processing</option>
                                  <option value="Cancelled">Cancelled</option>
                                  <option value="Shipped">Shipped</option>
                                  <option value="Delivered">Delivered</option>
                                  <option value="Cancelled">Cancelled</option>
                                </select>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  type="button"
                                  className="btn btn-light"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>

                                <button
                                  type="button"
                                  className="btn btn-success"
                                  id="edit-btn"
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div
          class="modal fade zoomIn"
          id="deleteRecordModal"
          tabindex="-1"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="btn-close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mt-2 text-center">
                  <RiDeleteBin6Line style={{ width: "100%" }} />
                  <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                    <h4>Are you Sure ?</h4>
                    <p class="text-muted mx-4 mb-0">
                      Are you Sure You want to Remove this Record ?
                    </p>
                  </div>
                </div>
                <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                  <button
                    type="button"
                    class="btn w-sm btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn w-sm btn-danger"
                    id="delete-record"
                  >
                    Yes, Delete It!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="showModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header bg-light p-3">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add category
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="close-modal"
                ></button>
              </div>
              <form class="tablelist-form" autocomplete="off">
                <div class="modal-body">
                  <div class="mb-3" id="modal-id" style={{ display: "none" }}>
                    <label for="id-field" class="form-label">
                      ID
                    </label>
                    <input
                      type="text"
                      id="id-field"
                      class="form-control"
                      placeholder="ID"
                      readonly=""
                    />
                  </div>

                  <div class="mb-3">
                    <label for="customername-field" class="form-label">
                      Banner Title
                    </label>
                    <input
                      type="text"
                      id="customername-field"
                      class="form-control"
                      placeholder="Enter Title"
                      required=""
                    />
                    <div class="invalid-feedback">Please enter a Title</div>
                  </div>

                  <div class="mb-3">
                    <label for="email-field" class="form-label">
                      Link
                    </label>
                    <input
                      type="email"
                      id="email-field"
                      class="form-control"
                      placeholder="Enter Link"
                      required=""
                    />
                    <div class="invalid-feedback">Please enter an Link.</div>
                  </div>

                  <div class="mb-3">
                    <label for="phone-field" class="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      id="phone-field"
                      class="form-control"
                      placeholder="Enter Phone no."
                      required=""
                    />
                    <div class="invalid-feedback">Please enter a phone.</div>
                  </div>

                  <div class="mb-3">
                    <label for="date-field" class="form-label">
                      Place
                    </label>
                    <select
                      class="form-control"
                      data-trigger=""
                      name="status-field"
                      id="status-field"
                      required=""
                    >
                      <option value="">Home </option>
                      <option value="Active">Offer</option>
                      <option value="Block">Block</option>
                    </select>
                    <div class="invalid-feedback">Please select a date.</div>
                  </div>

                  <div>
                    <label for="status-field" class="form-label">
                      Status
                    </label>
                    <select
                      class="form-control"
                      data-trigger=""
                      name="status-field"
                      id="status-field"
                      required=""
                    >
                      <option value="">Status</option>
                      <option value="Active">Active</option>
                      <option value="Block">Block</option>
                    </select>
                  </div>
                </div>
                <div class="modal-footer">
                  <div class="hstack gap-2 justify-content-end">
                    <button
                      type="button"
                      class="btn btn-light"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" class="btn btn-success" id="add-btn">
                      Add Customer
                    </button>
                    <button type="button" class="btn btn-success" id="edit-btn">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderList;
