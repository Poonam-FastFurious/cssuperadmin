import axios from "axios";
import React, { useEffect, useState } from "react";
import { Baseurl } from "../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Addvendor() {
  const [formData, setFormData] = useState({
    vendorType: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    storeName: "",
    storeCategory: "",
    address: "",
    pinCode: "",
    city: "",
    addressLine1: "",
    addressLine2: "",
    sellerLegalName: "",
    gstNumber: "",
    panNumber: "",
    panCardPhoto: null,
    gstCertificate: null,
    storeLogo: null,
    coverImage: null,
    accountHolderName: "",
    accountType: "",
    accountNumber: "",
    confirmAccountNumber: "",
    ifscCode: "",
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({
    storeLogo: "",
    coverImage: "",
  });

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(
          Baseurl + "/api/v1/category/allcategory"
        );
        setCategories(response.data.data || []); // Adjust based on your API response structure
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);
  const handleChange = (e) => {
    const { name, type, files } = e.target;

    // Define allowed image types and maximum file size (in bytes)
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (type === "file") {
      const selectedFiles = Array.from(files);
      let errorMessage = "";

      // Validate each selected file
      const invalidFiles = selectedFiles.filter((file) => {
        if (!allowedTypes.includes(file.type)) {
          errorMessage = `Invalid file type for ${file.name}. Only JPEG, PNG, and GIF are allowed.`;
          return true;
        }
        if (file.size > maxSize) {
          errorMessage = `File ${file.name} is too large. Max size is 5MB.`;
          return true;
        }
        return false;
      });

      // If any invalid files were found, update the error state and clear the input field
      if (invalidFiles.length > 0) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [name]: errorMessage,
        }));

        // Clear the input field
        e.target.value = "";
        return;
      } else {
        // Clear errors if the file is valid
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }

      setFormData((prevData) => ({
        ...prevData,
        [name]: files.length === 1 ? files[0] : files, // Handle single and multiple file inputs
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formDataToSend = new FormData(form);

    try {
      const response = await axios.post(
        Baseurl + "/api/v1/Vendor/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Vendor added successfully:", response.data);
      toast.success("Vendor added successfully!");

      // Redirect to "All Vendors" page
      navigate("/allvendor");
    } catch (error) {
      console.error("Error adding vendor:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0">Add Vendor</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="#;">Charansparsh</a>
                      </li>
                      <li class="breadcrumb-item active">Add Vendor </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <form
              id="createproduct-form"
              autocomplete="off"
              class="needs-validation "
              novalidate=""
              onSubmit={handleSubmit}
            >
              <div class="row">
                <div class="col-lg-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title mb-4">Vendor Resister </h5>
                      <div class="card-body">
                        <div class="tab-content">
                          <div class="tab-pane active">
                            <div class="mb-3">
                              <label
                                for="choices-publish-status-input"
                                class="form-label"
                              >
                                Resister as
                              </label>

                              <select
                                class="form-select"
                                id="choices-publish-status-input"
                                data-choices=""
                                data-choices-search-false=""
                                value={formData.vendorType}
                                onChange={handleChange}
                                name="vendorType"
                              >
                                <option value="Temple">Temple</option>
                                <option value="Vendor">Vendor</option>
                                <option value="Pandit">Pandit</option>
                                <option value="Tourist Guide">
                                  Tourist Guide
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="tab-content">
                          <div class="tab-pane active">
                            <div class="row">
                              <div class="col-lg-4">
                                <div class="mb-0">
                                  <label
                                    class="form-label"
                                    for="manufacturer-name-input"
                                  >
                                    Firstname
                                  </label>
                                  <input
                                    type="text"
                                    name="firstName"
                                    class="form-control"
                                    id="manufacturer-name-input"
                                    placeholder="Enter Firstname"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>
                              <div class="col-lg-4">
                                <div class="mb-0">
                                  <label
                                    class="form-label"
                                    for="manufacturer-brand-input"
                                  >
                                    Lastname
                                  </label>
                                  <input
                                    type="text"
                                    name="lastName"
                                    className="form-control"
                                    id="last-name"
                                    placeholder="Enter Lastname"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>
                              <div class="col-lg-4 col-sm-6">
                                <div class="mb-3">
                                  <label class="form-label" for="stocks-input">
                                    Mobile number
                                  </label>
                                  <input
                                    type="tel"
                                    name="mobileNumber"
                                    className="form-control"
                                    id="mobile-number"
                                    placeholder="Enter Mobile Number"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    required
                                  />
                                  <div class="invalid-feedback">
                                    Please Enter a product stocks.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="tab-content">
                          <div class="tab-pane active">
                            <div class="row">
                              <div class="col-lg-4">
                                <div class="mb-3">
                                  <label
                                    class="form-label"
                                    for="manufacturer-name-input"
                                  >
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>
                              <div class="col-lg-4">
                                <div class="mb-3">
                                  <label
                                    class="form-label"
                                    for="manufacturer-brand-input"
                                  >
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>
                              <div class="col-lg-4 col-sm-6">
                                <div class="mb-3">
                                  <label class="form-label" for="stocks-input">
                                    Confirm Password
                                  </label>
                                  <input
                                    type="password"
                                    name="confirmPassword"
                                    className="form-control"
                                    id="confirm-password"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                  />
                                  <div class="invalid-feedback">
                                    Please Enter a product stocks.
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
                <div className="col-lg-6">
                  <div class="card">
                    <div class="card-header">
                      <h5 class="card-title mb-0">Store Logo & Covers</h5>
                    </div>
                    <div class="card-body   gap-4">
                      <div class="mb-4">
                        <h5 class="fs-14 mb-1">Store Logo</h5>
                        <p class="text-muted">Add Store Logo </p>
                        <div class="text-center">
                          <div class="position-relative d-inline-block">
                            <div class="fallback ">
                              <input
                                type="file"
                                name="storeLogo"
                                accept="image/*"
                                onChange={handleChange}
                              />
                            </div>{" "}
                            {formErrors.storeLogo && (
                              <small className="text-danger">
                                {formErrors.storeLogo}
                              </small>
                            )}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 class="fs-14 mb-1">Cover Image</h5>
                        <p class="text-muted">Add Cover Image</p>
                        <div class="text-center">
                          <div class="position-relative d-inline-block">
                            <div class="fallback ">
                              <input
                                name="coverImage"
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleChange}
                              />
                            </div>
                            {formErrors.coverImage && (
                              <small className="text-danger">
                                {formErrors.coverImage}
                              </small>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row px-2">
                <div class="card">
                  <div class="card-header">
                    <ul
                      class="nav nav-tabs-custom card-header-tabs border-bottom-0"
                      role="tablist"
                    >
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          data-bs-toggle="tab"
                          href="#addproduct-general-info"
                          role="tab"
                        >
                          Store Information
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          data-bs-toggle="tab"
                          href="#addproduct-metadata"
                          role="tab"
                        >
                          Tax Details
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <div class="tab-content">
                      <div
                        class="tab-pane active"
                        id="addproduct-general-info"
                        role="tabpanel"
                      >
                        <div class="row">
                          <div class="col-lg-3 col-sm-6">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="manufacturer-name-input"
                              >
                                Bussiness Name
                              </label>
                              <input
                                type="text"
                                name="businessName"
                                className="form-control"
                                id="business-name"
                                placeholder="Enter Business Name"
                                value={formData.businessName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-lg-3 col-sm-6">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="manufacturer-brand-input"
                              >
                                Store Name
                              </label>
                              <input
                                type="text"
                                name="storeName"
                                className="form-control"
                                id="store-name"
                                placeholder="Enter Store Name"
                                value={formData.storeName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-lg-3 col-sm-6">
                            <div class="mb-3">
                              <label
                                for="choices-publish-status-input"
                                class="form-label"
                              >
                                Store Category
                              </label>

                              <select
                                class="form-select"
                                id="choices-publish-status-input"
                                data-choices=""
                                data-choices-search-false=""
                                value={formData.storeCategory}
                                onChange={handleChange}
                                name="storeCategory"
                              >
                                {categories.map((category) => (
                                  <option
                                    key={category._id}
                                    value={category.categoriesTitle}
                                  >
                                    {category.categoriesTitle}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div class="col-lg-3 col-sm-6">
                            <div class="mb-3">
                              <label class="form-label" for="stocks-input">
                                Address
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="stocks-input"
                                placeholder="Address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                              />
                              <div class="invalid-feedback">
                                Please Enter a product stocks.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-3 col-sm-6">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="product-price-input"
                              >
                                Pin Code
                              </label>
                              <div class="input-group has-validation mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="product-price-input"
                                  placeholder="Enter Pin Code "
                                  name="pinCode"
                                  value={formData.pinCode}
                                  onChange={handleChange}
                                  required
                                />
                                <div class="invalid-feedback">
                                  Please Enter a product price.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-3 col-sm-6">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="product-discount-input"
                              >
                                City
                              </label>
                              <div class="input-group mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="product-discount-input"
                                  placeholder="Enter City"
                                  aria-label="discount"
                                  aria-describedby="product-discount-addon"
                                  name="city"
                                  value={formData.city}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-3 col-sm-6">
                            <div class="mb-3">
                              <label class="form-label" for="orders-input">
                                Address Line 1
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="orders-input"
                                placeholder="  Address Line 1"
                                required=""
                              />
                              <div class="invalid-feedback">
                                Please Enter a product orders.
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-3 col-sm-6">
                            <div class="mb-3">
                              <label class="form-label" for="stocks-input">
                                Address Line 2
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="stocks-input"
                                placeholder=" Address Line 2"
                                required
                              />
                              <div class="invalid-feedback">
                                Please Enter a product stocks.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="tab-pane"
                        id="addproduct-metadata"
                        role="tabpanel"
                      >
                        <div class="row">
                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label class="form-label" for="meta-title-input">
                                Seller Leagal Name
                              </label>
                              <input
                                type="text"
                                name="sellerLegalName"
                                className="form-control"
                                id="seller-legal-name"
                                placeholder="Enter Seller Legal Name"
                                value={formData.sellerLegalName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="meta-keywords-input"
                              >
                                GST Number
                              </label>
                              <input
                                type="text"
                                name="gstNumber"
                                className="form-control"
                                id="gst-number"
                                placeholder="Enter GST Number"
                                value={formData.gstNumber}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="meta-keywords-input"
                              >
                                Pan Number*
                              </label>
                              <input
                                type="text"
                                name="panNumber"
                                className="form-control"
                                id="pan-number"
                                placeholder="Enter PAN Number"
                                value={formData.panNumber}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="meta-keywords-input"
                              >
                                Pan card photo
                              </label>
                              <input
                                type="file"
                                name="panCardPhoto"
                                className="form-control"
                                id="pan-card-photo"
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="meta-keywords-input"
                              >
                                GST Certificate
                              </label>
                              <input
                                type="file"
                                name="gstCertificate"
                                className="form-control"
                                id="gst-certificate"
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row px-2">
                <div class="card">
                  <div class="card-header">
                    <ul
                      class="nav nav-tabs-custom card-header-tabs border-bottom-0"
                      role="tablist"
                    >
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          href="#addproduct-general-info"
                        >
                          Bank Account Details
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <div class="tab-content">
                      <div
                        class="tab-pane active"
                        id="addproduct-general-info"
                        role="tabpanel"
                      >
                        <div class="row">
                          <div class="col-lg-3 col-sm-6">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="manufacturer-name-input"
                              >
                                Account Holder Name
                              </label>
                              <input
                                type="text"
                                name="accountHolderName"
                                className="form-control"
                                id="account-holder-name"
                                placeholder="Enter Account Holder Name"
                                value={formData.accountHolderName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-lg-3 col-sm-6">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="manufacturer-brand-input"
                              >
                                Account Type
                              </label>
                              <input
                                type="text"
                                name="accountType"
                                className="form-control"
                                id="account-type"
                                placeholder="Enter Account Type"
                                value={formData.accountType}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-lg-3 col-sm-6">
                            <div class="mb-3">
                              <label class="form-label" for="stocks-input">
                                Account Number
                              </label>
                              <input
                                type="text"
                                name="accountNumber"
                                className="form-control"
                                id="account-number"
                                placeholder="Enter Account Number"
                                value={formData.accountNumber}
                                onChange={handleChange}
                                required
                              />
                              <div class="invalid-feedback">
                                Please Enter a product stocks.
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-3 col-sm-6">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="product-price-input"
                              >
                                Confirm Account Number
                              </label>
                              <div class="input-group has-validation mb-3">
                                <input
                                  type="text"
                                  name="confirmAccountNumber"
                                  className="form-control"
                                  id="confirm-account-number"
                                  placeholder="Confirm Account Number"
                                  value={formData.confirmAccountNumber}
                                  onChange={handleChange}
                                  required
                                />
                                <div class="invalid-feedback">
                                  Please Enter Confirm AccountNumber
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-3 col-sm-6">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="product-discount-input"
                              >
                                IFSC Code 
                              </label>
                              <div class="input-group mb-3">
                                <input
                                  type="text"
                                  name="ifscCode"
                                  className="form-control"
                                  id="ifsc-code"
                                  placeholder="Enter IFSC Code"
                                  value={formData.ifscCode}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-start mb-3">
                <button type="submit" class="btn btn-success w-sm">
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addvendor;
