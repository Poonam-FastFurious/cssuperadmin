import React, { useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "../Molicule/Skelton";
import useFetchData from "../Molicule/DataFetchingComponent";
import { Baseurl } from "../../config";

function VendorList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const {
    data: vendorData = [], // Provide default empty array
    loading: vendorLoading,
    error: vendorError,
  } = useFetchData(Baseurl + "/api/v1/Vendor", "data");

  const {
    data: categoryData = [], // Provide default empty array
    loading: categoryLoading,
    error: categoryError,
  } = useFetchData(Baseurl + "/api/v1/category/allcategory", "data");

  // Handle category selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter vendors by selected category
  const filteredVendors =
    selectedCategory === "All"
      ? vendorData
      : vendorData.filter(
          (vendor) => vendor.storeCategory === selectedCategory
        );

  if (vendorLoading || categoryLoading) {
    return (
      <div className="container">
        {[...Array(8)].map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    );
  }

  if (vendorError || categoryError) {
    return <div>Error: {vendorError || categoryError}</div>;
  }

  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* Page Title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Vendor</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="#">Charansparsh</Link>
                      </li>
                      <li className="breadcrumb-item active">Vendor</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="card">
              <div className="card-header border-0 rounded">
                <div className="row g-2">
                  <div className="col-xl-3">
                    <div className="search-box">
                      <input
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        id="searchResultList"
                        placeholder="Search for Vendor name or something..."
                      />
                      <i className="ri-search-line search-icon"></i>
                    </div>
                  </div>

                  <div className="col-xxl-3 ms-auto">
                    <select
                      className="form-control"
                      id="category-select"
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                    >
                      <option value="All">All</option>
                      {categoryData.map((category) => (
                        <option
                          key={category._id}
                          value={category.categoriesTitle}
                        >
                          {category.categoriesTitle}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-lg-auto">
                    <div className="hstack gap-2">
                      <button type="button" className="btn btn-success">
                        <i className="ri-equalizer-fill me-1 align-bottom"></i>{" "}
                        Filters
                      </button>
                      <Link to="/Addvendor" className="btn btn-success">
                        <i className="ri-add-fill me-1 align-bottom"></i> Add
                        Vendor
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vendor List */}
            <div className="row mt-4 d-flex flex-wrap" id="seller-list">
              {filteredVendors.map((vendor) => (
                <div className="col-xl-3 col-lg-6" key={vendor._id}>
                  <div className="card ribbon-box right overflow-hidden">
                    <div className="card-body text-center p-4">
                      <div className="ribbon ribbon-info ribbon-shape trending-ribbon">
                        <i className="ri-flashlight-fill text-white align-bottom"></i>
                        <span className="trending-ribbon-text">
                          {vendor.storeCategory}
                        </span>
                      </div>

                      <img
                        src={
                          vendor.storeLogo ||
                          "https://themesbrand.com/velzon/html/master/assets/images/companies/img-1.png"
                        }
                        alt={vendor.storeName}
                        height="45"
                      />
                      <h5 className="mb-1 mt-4">
                        <Link
                          to={`/VendorDetails/${vendor._id}`}
                          className="link-primary"
                        >
                          {vendor.storeName}
                        </Link>
                      </h5>
                      <p className="text-muted mb-4">{vendor.name}</p>
                      <div className="row justify-content-center">
                        <div className="col-lg-8"></div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-lg-6 border-end-dashed border-end">
                          <h5>0</h5>
                          <span className="text-muted">Item Stock</span>
                        </div>
                        <div className="col-lg-6">
                          <h5>{vendor.totalAmount}</h5>
                          <span className="text-muted">Wallet Balance</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link
                          to={`/VendorDetails/${vendor._id}`}
                          className="btn btn-light w-100"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VendorList;
