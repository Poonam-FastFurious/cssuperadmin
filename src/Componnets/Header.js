import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { Baseurl } from "../config";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModaldelete = () => {
    setShowModal(false);
  };
  const handleConfirmLogout = async () => {
    try {
      // Make an API call to logout
      await fetch(Baseurl + "/api/v1/admin/logout", {
        method: "POST",
        // Include cookies in the request
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Clear local storage
      localStorage.clear();

      // Clear cookies
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });

      // Redirect to the login page or home page
      window.location.href = "/admin/login";
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/Admin/Login");
    }
  });
  return (
    <>
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="layout-width">
            <div className="navbar-header">
              <div className="d-flex">
                <div className="navbar-brand-box horizontal-logo">
                  <Link to="/" className="logo logo-dark">
                    <span className="logo-sm">
                      <img
                        src="https://provenonline.in/wp-content/uploads/2023/04/Untitled-design-6.png"
                        alt=""
                        height="40"
                      />
                    </span>
                    <span className="logo-lg d-none">
                      <img
                        src="https://provenonline.in/wp-content/uploads/2023/04/Untitled-design-6.png"
                        alt=""
                        height="40"
                      />
                    </span>
                  </Link>

                  <Link to="/" className="logo logo-light">
                    <span className="logo-sm">
                      <img
                        src="https://provenonline.in/wp-content/uploads/2023/04/Untitled-design-6.png"
                        alt=""
                        height="40"
                      />
                    </span>
                    <span className="logo-lg">
                      <img
                        src="https://provenonline.in/wp-content/uploads/2023/04/Untitled-design-6.png"
                        alt=""
                        height="40"
                      />
                    </span>
                  </Link>
                </div>

                <button
                  type="button"
                  className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                  id="topnav-hamburger-icon"
                >
                  <span className="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </button>

                <form className="app-search d-none d-md-block">
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      autoComplete="off"
                      id="search-options"
                    />
                    <span className="mdi mdi-magnify search-widget-icon"></span>
                    <span
                      className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
                      id="search-close-options"
                    ></span>
                  </div>
                  <div
                    className="dropdown-menu dropdown-menu-lg"
                    id="search-dropdown"
                  >
                    <div data-simplebar="" style={{ maxHeight: "320px" }}>
                      <div className="dropdown-header">
                        <h6 className="text-overflow text-muted mb-0 text-uppercase">
                          Recent Searches
                        </h6>
                      </div>

                      <div className="dropdown-item bg-transparent text-wrap">
                        <Link
                          to="/"
                          className="btn btn-soft-secondary btn-sm rounded-pill"
                        >
                          how to setup <i className="mdi mdi-magnify ms-1"></i>
                        </Link>
                        <Link
                          to="/"
                          className="btn btn-soft-secondary btn-sm rounded-pill"
                        >
                          buttons <i className="mdi mdi-magnify ms-1"></i>
                        </Link>
                      </div>

                      <div className="dropdown-header mt-2">
                        <h6 className="text-overflow text-muted mb-1 text-uppercase">
                          Pages
                        </h6>
                      </div>

                      <Link to="#" className="dropdown-item notify-item">
                        <i className="ri-bubble-chart-line align-middle fs-18 text-muted me-2"></i>
                        <span>Analytics Dashboard</span>
                      </Link>

                      <Link to="#" className="dropdown-item notify-item">
                        <i className="ri-lifebuoy-line align-middle fs-18 text-muted me-2"></i>
                        <span>Help Center</span>
                      </Link>

                      <Link to="#" className="dropdown-item notify-item">
                        <i className="ri-user-settings-line align-middle fs-18 text-muted me-2"></i>
                        <span>My account settings</span>
                      </Link>

                      <div className="dropdown-header mt-2">
                        <h6 className="text-overflow text-muted mb-2 text-uppercase">
                          Members
                        </h6>
                      </div>

                      <div className="notification-list">
                        <Link to="#" className="dropdown-item notify-item py-2">
                          <div className="d-flex">
                            <img
                              src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-2.jpg"
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-grow-1">
                              <h6 className="m-0">Angela Bernier</h6>
                              <span className="fs-11 mb-0 text-muted">
                                Manager
                              </span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="dropdown-item notify-item py-2">
                          <div className="d-flex">
                            <img
                              src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-3.jpg"
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-grow-1">
                              <h6 className="m-0">David Grasso</h6>
                              <span className="fs-11 mb-0 text-muted">
                                Web Designer
                              </span>
                            </div>
                          </div>
                        </Link>

                        <Link to="#" className="dropdown-item notify-item py-2">
                          <div className="d-flex">
                            <img
                              src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-5.jpg"
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-grow-1">
                              <h6 className="m-0">Mike Bunch</h6>
                              <span className="fs-11 mb-0 text-muted">
                                React Developer
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="text-center pt-3 pb-1">
                      <Link
                        to="/pages-search-results"
                        className="btn btn-primary btn-sm"
                      >
                        View All Results
                        <i className="ri-arrow-right-line ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>

              <div className="d-flex align-items-center">
                <div className="dropdown d-md-none topbar-head-dropdown header-item">
                  <button
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                    id="page-header-search-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bx bx-search fs-22"></i>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                    aria-labelledby="page-header-search-dropdown"
                  >
                    <form className="p-3">
                      <div className="form-group m-0">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search ..."
                            aria-label="Recipient's username"
                          />
                          <button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="dropdown ms-1 topbar-head-dropdown header-item">
                  <button
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      id="header-lang-img"
                      src="https://themesbrand.com/velzon/html/default/assets/images/flags/us.svg"
                      alt="Header Language"
                      height="20"
                      className="rounded"
                    />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link
                      to="#"
                      className="dropdown-item notify-item language py-2"
                      data-lang="en"
                      title="English"
                    >
                      <img
                        src="https://themesbrand.com/velzon/html/default/assets/images/flags/us.svg"
                        alt="user-images"
                        className="me-2 rounded"
                        height="18"
                      />
                      <span className="align-middle">English</span>
                    </Link>
                  </div>
                </div>

                <div className="dropdown topbar-head-dropdown ms-1 header-item">
                  <button
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bx bx-category-alt fs-22"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-lg p-0 dropdown-menu-end">
                    <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="m-0 fw-semibold fs-15"> Web Apps </h6>
                        </div>
                        <div className="col-auto">
                          <Link to="/#!" className="btn btn-sm btn-soft-info">
                            View All Apps
                            <i className="ri-arrow-right-s-line align-middle"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="p-2">
                      <div className="row g-0">
                        <div className="col">
                          <Link className="dropdown-icon-item" to="/#!">
                            <img
                              src="https://themesbrand.com/velzon/html/default/assets/images/brands/github.png"
                              alt="Github"
                            />
                            <span>GitHub</span>
                          </Link>
                        </div>
                        <div className="col">
                          <Link className="dropdown-icon-item" to="/#!">
                            <img
                              src="https://themesbrand.com/velzon/html/default/assets/images/brands/bitbucket.png"
                              alt="bitbucket"
                            />
                            <span>Bitbucket</span>
                          </Link>
                        </div>
                        <div className="col">
                          <Link className="dropdown-icon-item" to="/#!">
                            <img
                              src="https://themesbrand.com/velzon/html/default/assets/images/brands/dribbble.png"
                              alt="dribbble"
                            />
                            <span>Dribbble</span>
                          </Link>
                        </div>
                      </div>

                      <div className="row g-0">
                        <div className="col">
                          <Link className="dropdown-icon-item" to="/#!">
                            <img
                              src="https://themesbrand.com/velzon/html/default/assets/images/brands/dropbox.png"
                              alt="dropbox"
                            />
                            <span>Dropbox</span>
                          </Link>
                        </div>
                        <div className="col">
                          <Link className="dropdown-icon-item" to="/#!">
                            <img
                              src="https://themesbrand.com/velzon/html/default/assets/images/brands/mail_chimp.png"
                              alt="mail_chimp"
                            />
                            <span>Mail Chimp</span>
                          </Link>
                        </div>
                        <div className="col">
                          <Link className="dropdown-icon-item" to="/#!">
                            <img
                              src="https://themesbrand.com/velzon/html/default/assets/images/brands/slack.png"
                              alt="slack"
                            />
                            <span>Slack</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="dropdown topbar-head-dropdown ms-1 header-item"
                  id="notificationDropdown"
                >
                  <button
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                    id="page-header-notifications-dropdown"
                  >
                    <i className="bx bx-bell fs-22"></i>
                    <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">
                      3<span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </div>

                <div className="dropdown ms-sm-3 header-item topbar-user">
                  <button
                    type="button"
                    className="btn"
                    id="page-header-user-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="d-flex align-items-center">
                      <img
                        className="rounded-circle header-profile-user"
                        src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
                        alt="Header Avatar"
                      />
                      <span className="text-start ms-xl-2">
                        <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                          Admin
                        </span>
                        <span className="d-none d-xl-block ms-1 fs-12 user-name-sub-text">
                          Admin
                        </span>
                      </span>
                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <h6 className="dropdown-header">Welcome Admin</h6>
                    <Link className="dropdown-item" to="/Profile">
                      <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
                      <span className="align-middle">Profile</span>
                    </Link>
                    <Link className="dropdown-item" to="/Chat">
                      <i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i>
                      <span className="align-middle">Messages</span>
                    </Link>

                    <Link className="dropdown-item" to="/pages-faqs">
                      <i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i>
                      <span className="align-middle">Help</span>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/pages-profile">
                      <i className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i>
                      <span className="align-middle">
                        Balance : <b>$5971.67</b>
                      </span>
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/pages-profile-settings"
                    >
                      <span className="badge bg-success-subtle text-success mt-1 float-end">
                        New
                      </span>
                      <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i>
                      <span className="align-middle">Settings</span>
                    </Link>
                    <Link className="dropdown-item" to="/auth-lockscreen-basic">
                      <i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i>
                      <span className="align-middle">Lock screen</span>
                    </Link>
                    <Link className="dropdown-item" onClick={handleShowModal}>
                      <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>
                      <span className="align-middle" data-key="t-logout">
                        Logout
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="app-menu navbar-menu" style={{ overflowY: "auto" }}>
          <div className="navbar-brand-box">
            <Link to="/" className="logo logo-dark">
              <span className="logo-sm">
                <img
                  src="https://provenonline.in/wp-content/uploads/2023/04/Untitled-design-6.png"
                  alt=""
                  height="40"
                />
              </span>
              <span className="logo-lg">
                <img
                  src="https://provenonline.in/wp-content/uploads/2023/04/Untitled-design-6.png"
                  alt=""
                  height="40"
                />
              </span>
            </Link>

            <Link to="/" className="logo logo-light">
              <span className="logo-sm">
                <img
                  src="https://provenonline.in/wp-content/uploads/2023/04/Untitled-design-6.png"
                  alt=""
                  height="50"
                />
              </span>
              <span className="logo-lg">
                <img
                  src="https://provenonline.in/wp-content/uploads/2023/04/Untitled-design-6.png"
                  alt=""
                  height="50"
                />
              </span>
            </Link>
            <button
              type="button"
              className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
              id="vertical-hover"
            >
              <i className="ri-record-circle-line"></i>
            </button>
          </div>

          <div id="scrollbar">
            <div className="container-fluid">
              <div id="two-column-menu"></div>
              <ul className="navbar-nav" id="navbar-nav">
                <li className="menu-title">
                  <span data-key="t-menu">Menu</span>
                </li>
                <li className="nav-item">
                  <div className="nav-link menu-link">
                    <i className="ri-dashboard-2-line"></i>

                    <Link to="/">Dashboards</Link>
                  </div>
                  <div
                    className="collapse menu-dropdown"
                    id="sidebarDashboards"
                  ></div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link menu-link"
                    to="/#sidebarApps"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarApps"
                  >
                    <i className="ri-apps-2-line"></i>
                    <span data-key="t-apps">Manage Product</span>
                  </Link>
                  <div className="collapse menu-dropdown" id="sidebarApps">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <Link
                          to="/Product"
                          className="nav-link"
                          data-key="t-chat"
                        >
                          All Product
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/AddProduct"
                          className="nav-link"
                          data-key="t-chat"
                        >
                          Add Product
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/Stockout"
                          className="nav-link"
                          data-key="t-chat"
                        >
                          Stock Out Products
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/review"
                          className="nav-link"
                          data-key="t-chat"
                        >
                          Products Reviews
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link menu-link"
                    to="/#sidebarLayouts"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarLayouts"
                  >
                    <i className="ri-layout-3-line"></i>
                    <span data-key="t-layouts">Manage Categories</span>
                  </Link>
                  <div className="collapse menu-dropdown" id="sidebarLayouts">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <Link
                          to="/Categories"
                          className="nav-link"
                          data-key="t-horizontal"
                        >
                          Categories
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/Order" className="nav-link menu-link">
                    <i className="ri-layout-3-line"></i>
                    <span>Manage Order</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/transaction" className="nav-link menu-link">
                    <i className="ri-layout-3-line"></i>
                    <span>Transaction</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/customer" className="nav-link menu-link">
                    <i className="ri-layout-3-line"></i>
                    <span>Customer</span>
                  </Link>
                </li>
                <li className="menu-title">
                  <i className="ri-more-fill"></i>
                  <span data-key="t-pages">Setting</span>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link menu-link"
                    to="/#sidebarAuth"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarAuth"
                  >
                    <i className="ri-account-circle-line"></i>
                    <span data-key="t-authentication">Setting</span>
                  </Link>
                  <div className="collapse menu-dropdown" id="sidebarAuth">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <Link to="/tax" className="nav-link">
                          Taxes
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/Coupon" className="nav-link">
                          Coupons
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/Shipping" className="nav-link">
                          Delivery Charge
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link menu-link"
                    to="/#sidebarLanding"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarLanding"
                  >
                    <i className="ri-rocket-line"></i>
                    <span data-key="t-landing">Banner</span>
                  </Link>
                  <div className="collapse menu-dropdown" id="sidebarLanding">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <Link
                          to="/Banner"
                          className="nav-link"
                          data-key="t-nft-landing"
                        >
                          Banner
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link menu-link"
                    to="/#sidebarAdvanceUI"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarAdvanceUI"
                  >
                    <i className="ri-stack-line"></i>
                    <span data-key="t-advance-ui">Manage Team</span>
                  </Link>
                  <div className="collapse menu-dropdown" id="sidebarAdvanceUI">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <Link
                          to="/team"
                          className="nav-link"
                          data-key="t-sweet-alerts"
                        >
                          Team
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="menu-title">
                  <i className="ri-more-fill"></i>
                  <span data-key="t-components">Components</span>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link menu-link"
                    to="/#sidebarPages"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarPages"
                  >
                    <i className="ri-pages-line"></i>
                    <span data-key="t-pages">Manage Site</span>
                  </Link>
                  <div className="collapse menu-dropdown" id="sidebarPages">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <Link
                          to="/Profile"
                          className="nav-link"
                          data-key="t-team"
                        >
                          Profile
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/pages-faqs"
                          className="nav-link"
                          data-key="t-faqs"
                        >
                          FAQs
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/Profile"
                          className="nav-link"
                          data-key="t-sitemap"
                        >
                          Change Password
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/pages-privacy-policy"
                          className="nav-link"
                          data-key="t-privacy-policy"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/pages-term-conditions"
                          className="nav-link"
                          data-key="t-term-conditions"
                        >
                          Term & Conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link menu-link"
                    to="/#sidebarAdvanceUI"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarAdvanceUI"
                  >
                    <i className="ri-stack-line"></i>
                    <span data-key="t-advance-ui">Manage Bloges</span>
                  </Link>
                  <div className="collapse menu-dropdown" id="sidebarAdvanceUI">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <Link
                          to="/advance-ui-sweetalerts"
                          className="nav-link"
                          data-key="t-sweet-alerts"
                        >
                          Bloges
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {showModal && (
          <div
            className="modal fade show"
            style={{
              display: "block",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCloseModaldelete}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mt-2 text-center">
                    <RiDeleteBin6Line style={{ width: "100%" }} />
                    <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                      <h4>Are you Sure ?</h4>
                      <p className="text-muted mx-4 mb-0">
                        Are you Sure You want to Remove this Record ?
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                    <button
                      type="button"
                      className="btn w-sm btn-light"
                      onClick={handleCloseModaldelete}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn w-sm btn-danger"
                      onClick={handleConfirmLogout}
                    >
                      Yes, Logout!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
