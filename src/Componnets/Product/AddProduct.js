import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { Baseurl } from "../../config";

function AddProduct() {
  const [category, setCategory] = useState([]);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    rating: "",
    shortDescription: "",
    visibility: "",
    tags: [],
    tax: "",
    hasAttributes: false,
    attributes: [],
    stockQuantity: "",
    stockStatus: "",
    categoryName: "",
  });
  const [attributes, setAttributes] = useState([
    { attributeName: "", attributeValue: "" },
  ]);
  const [image, setImage] = useState(null);
  const [thumbnail, setThumbnail] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    setProductData({
      ...productData,
      hasAttributes: event.target.checked,
    });
  };

  const handelimagechange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleThumbnailChange = (e) => {
    setThumbnail([...e.target.files]);
  };

  const handleCKEditorChange = (event, editor) => {
    const data = editor.getData();
    setProductData({
      ...productData,
      description: data,
    });
  };

  const handleAttributeChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAttributes = attributes.map((attribute, i) =>
      i === index ? { ...attribute, [name]: value } : attribute
    );
    setAttributes(updatedAttributes);
  };

  const addAttributeField = () => {
    setAttributes([...attributes, { attributeName: "", attributeValue: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("discount", productData.discount);
    formData.append("rating", productData.rating);
    formData.append("shortDescription", productData.shortDescription);
    formData.append("visibility", productData.visibility);
    formData.append("tags", JSON.stringify(productData.tags.split(",")));
    formData.append("tax", productData.tax);
    formData.append("hasAttributes", productData.hasAttributes);
    formData.append("attributes", JSON.stringify(attributes));
    formData.append("stockQuantity", productData.stockQuantity);
    formData.append("stockStatus", productData.stockStatus);
    formData.append("categoryName", productData.categoryName);
    if (image) formData.append("image", image);
    if (thumbnail) formData.append("thumbnail", thumbnail);

    // Log the formData for debugging purposes
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    setLoading(true);
    try {
      await axios.post(Baseurl + "/api/v1/product/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/Product");
    } catch (error) {
      console.error("There was an error creating the product!", error);
    } finally {
      setLoading(false); // Stop loader
    }
  };
  useEffect(() => {
    fetch(Baseurl + "/api/v1/category/allcategory")
      .then((response) => response.json())
      .then((jsonData) => setCategory(jsonData.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Create Product</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="#">Proven Ro</Link>
                      </li>
                      <li className="breadcrumb-item active">Create Product</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <form
              id="createproduct-form"
              autoComplete="off"
              className="needs-validation"
              noValidate=""
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-lg-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="product-title-input"
                        >
                          Product Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          name="name"
                          value={productData.name}
                          onChange={handleInputChange}
                        />
                        <div className="invalid-feedback">
                          Please Enter a product title.
                        </div>
                      </div>
                      <div>
                        <label>Product Description</label>
                        <CKEditor
                          editor={ClassicEditor}
                          data={productData.description}
                          onChange={handleCKEditorChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Product Gallery</h5>
                    </div>
                    <div className="card-body">
                      <div className="mb-4">
                        <h5 className="fs-14 mb-1">Product Image</h5>
                        <p className="text-muted">Add Product main Image.</p>
                        <div className="text-center">
                          <div className="position-relative d-inline-block">
                            <div className="position-absolute top-100 start-100 translate-middle">
                              <label
                                htmlFor="product-image-input"
                                className="mb-0"
                                data-bs-toggle="tooltip"
                                data-bs-placement="right"
                                title="Select Image"
                              >
                                <div className="avatar-xs">
                                  <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                    <i className="ri-image-fill"></i>
                                  </div>
                                </div>
                              </label>
                              <input
                                className="form-control d-none"
                                id="product-image-input"
                                type="file"
                                accept="image/png, image/gif, image/jpeg"
                                onChange={handelimagechange}
                              />
                            </div>

                            {image && (
                              <ul
                                className="list-unstyled mb-0"
                                id="dropzone-preview"
                              >
                                <li className="mt-2" id="dropzone-preview-list">
                                  <div className="border rounded">
                                    <div className="d-flex p-2">
                                      <div className="flex-shrink-0 me-3">
                                        <div className="avatar-sm bg-light rounded">
                                          <img
                                            src={URL.createObjectURL(image)}
                                            alt="Selected"
                                            style={{
                                              width: "300px",
                                              height: "auto",
                                            }}
                                            className="img-fluid rounded d-block"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex-grow-1">
                                        <div className="pt-1">
                                          <h5
                                            className="fs-14 mb-1"
                                            data-dz-name=""
                                          >
                                            &nbsp;
                                          </h5>
                                          <p
                                            className="fs-13 text-muted mb-0"
                                            data-dz-size=""
                                          ></p>
                                          <strong
                                            className="error text-danger"
                                            data-dz-errormessage=""
                                          ></strong>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h5 className="fs-14 mb-1">Product Thumbnail</h5>
                        <p className="text-muted">Add Product thumbnail.</p>
                        <div className="text-center">
                          <div className="position-relative d-inline-block">
                            <div className="position-absolute top-100 start-100 translate-middle">
                              <label
                                htmlFor="product-thumbnail-input"
                                className="mb-0"
                                data-bs-toggle="tooltip"
                                data-bs-placement="right"
                                title="Select Image"
                              >
                                <div className="avatar-xs">
                                  <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                    <i className="ri-image-fill"></i>
                                  </div>
                                </div>
                              </label>
                              <input
                                className="form-control d-none"
                                id="product-thumbnail-input"
                                type="file"
                                onChange={handleThumbnailChange}
                              />
                            </div>

                            {thumbnail.length > 0 && (
                              <ul
                                className="list-unstyled mb-0"
                                id="gallery-preview"
                              >
                                {thumbnail.map((image, index) => (
                                  <li
                                    key={index}
                                    className="mt-2"
                                    id="gallery-preview-list"
                                  >
                                    <div className="border rounded">
                                      <div className="d-flex p-2">
                                        <div className="flex-shrink-0 me-3">
                                          <div className="avatar-sm bg-light rounded">
                                            <img
                                              src={URL.createObjectURL(image)}
                                              alt="Selected"
                                              style={{
                                                width: "300px",
                                                height: "auto",
                                              }}
                                              className="img-fluid rounded d-block"
                                            />
                                          </div>
                                        </div>
                                        <div className="flex-grow-1">
                                          <div className="pt-1">
                                            <h5
                                              className="fs-14 mb-1"
                                              data-dz-name=""
                                            >
                                              &nbsp;
                                            </h5>
                                            <p
                                              className="fs-13 text-muted mb-0"
                                              data-dz-size=""
                                            ></p>
                                            <strong
                                              className="error text-danger"
                                              data-dz-errormessage=""
                                            ></strong>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header">
                      <ul
                        className="nav nav-tabs-custom card-header-tabs border-bottom-0"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            data-bs-toggle="tab"
                            to="#addproduct-general-info"
                            role="tab"
                          >
                            General Info
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body">
                      <div className="tab-content">
                        <div
                          className="tab-pane active"
                          id="addproduct-general-info"
                          role="tabpanel"
                        >
                          <div className="row">
                            <div className="col-lg-3 col-sm-6">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="stocks-input"
                                >
                                  Stocks
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="stocks-input"
                                  name="stockQuantity"
                                  value={productData.stockQuantity}
                                  onChange={handleInputChange}
                                  required=""
                                />
                                <div className="invalid-feedback">
                                  Please Enter a product stocks.
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-price-input"
                                >
                                  Price
                                </label>
                                <div className="input-group has-validation mb-3">
                                  <span
                                    className="input-group-text"
                                    id="product-price-addon"
                                  >
                                    Rs
                                  </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="product-price-input"
                                    name="price"
                                    value={productData.price}
                                    onChange={handleInputChange}
                                    placeholder="Enter price"
                                    aria-label="Price"
                                    aria-describedby="product-price-addon"
                                    required=""
                                  />
                                  <div className="invalid-feedback">
                                    Please Enter a product price.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-discount-input"
                                >
                                  Discount
                                </label>
                                <div className="input-group mb-3">
                                  <span
                                    className="input-group-text"
                                    id="product-discount-addon"
                                  >
                                    %
                                  </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="product-discount-input"
                                    name="discount"
                                    value={productData.discount}
                                    onChange={handleInputChange}
                                    placeholder="Enter discount"
                                    aria-label="discount"
                                    aria-describedby="product-discount-addon"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="orders-input"
                                >
                                  Rating
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="orders-input"
                                  name="rating"
                                  value={productData.rating}
                                  onChange={handleInputChange}
                                  placeholder="rating"
                                  required=""
                                />
                                <div className="invalid-feedback">
                                  Please Enter a product rating.
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="orders-input"
                                >
                                  Is item have Attribute
                                </label>
                                <div
                                  className="form-check mb-9"
                                  style={{ paddingTop: "10px" }}
                                >
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="formCheck6"
                                    checked={productData.hasAttributes}
                                    onChange={handleCheckboxChange}
                                  />
                                  <label
                                    className="form-check-label mb-90"
                                    htmlFor="formCheck6"
                                  >
                                    Checkbox Primary
                                  </label>
                                </div>
                                <div className="invalid-feedback">
                                  Please Enter a product orders.
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                              {productData.hasAttributes &&
                                attributes.map((attribute, index) => (
                                  <div className="d-flex gap-4 w" key={index}>
                                    <div className="mb-3">
                                      <label
                                        className="form-label"
                                        htmlFor={`attribute-input-${index}`}
                                      >
                                        Attribute
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id={`attribute-input-${index}`}
                                        name="attributeName"
                                        value={attribute.attributeName}
                                        onChange={(e) =>
                                          handleAttributeChange(index, e)
                                        }
                                        placeholder="Enter additional attribute"
                                      />
                                    </div>
                                    <div className="row">
                                      <div className="col">
                                        <div className="mb-3">
                                          <label
                                            className="form-label"
                                            htmlFor={`variation-input-${index}`}
                                          >
                                            Variation
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id={`variation-input-${index}`}
                                            name="attributeValue"
                                            value={attribute.attributeValue}
                                            onChange={(e) =>
                                              handleAttributeChange(index, e)
                                            }
                                            placeholder="Enter variation"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              {productData.hasAttributes && (
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={addAttributeField}
                                >
                                  Add Attribute
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-end mb-3">
                    <button type="submit" className="btn btn-success w-sm">
                      {loading && (
                        <span className="spinner-border spinner-border-sm me-1"></span>
                      )}
                      {loading ? "Loading..." : "Submit"}
                    </button>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Publish</h5>
                    </div>
                    <div className="card-body">
                      <div className="mb-3">
                        <label
                          htmlFor="choices-publish-status-input"
                          className="form-label"
                        >
                          Stock
                        </label>
                        <select
                          className="form-select"
                          id="choices-publish-status-input"
                          name="stockStatus"
                          value={productData.stockStatus}
                          onChange={handleInputChange}
                          data-choices=""
                          data-choices-search-false=""
                        >
                          <option>select </option>
                          <option value="in_stock">in_stock</option>
                          <option value="out_of_stock">out_of_stock</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="choices-publish-visibility-input"
                          className="form-label"
                        >
                          Visibility
                        </label>

                        <select
                          className="form-select"
                          id="choices-publish-visibility-input"
                          name="visibility"
                          value={productData.visibility}
                          onChange={handleInputChange}
                        >
                          <option>select </option>
                          <option value="active">active</option>
                          <option value="inactive">inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Product Categories</h5>
                    </div>
                    <div className="card-body">
                      <p className="text-muted mb-2">Select product category</p>
                      <select
                        className="form-select"
                        id="choices-category-input"
                        name="categoryName"
                        value={productData.categoryName}
                        onChange={handleInputChange}
                        data-choices=""
                        data-choices-search-false=""
                      >
                        <option>select </option>
                        {category.map((cat) => (
                          <option key={cat._id} value={cat.categoriesTitle}>
                            {cat.categoriesTitle}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Product Tags</h5>
                    </div>
                    <div className="card-body">
                      <div className="hstack gap-3 align-items-start">
                        <div className="flex-grow-1">
                          <input
                            className="form-control"
                            data-choices=""
                            data-choices-multiple-remove="true"
                            placeholder="Enter tags"
                            type="text"
                            name="tags"
                            value={productData.tags}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title mb-0">
                        Product Short Description
                      </h5>
                    </div>
                    <div className="card-body">
                      <p className="text-muted mb-2">
                        Add short description for product
                      </p>
                      <textarea
                        className="form-control"
                        placeholder="Must enter minimum of a 100 characters"
                        rows="3"
                        name="shortDescription"
                        value={productData.shortDescription}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
