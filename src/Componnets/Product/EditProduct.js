import { Link, useNavigate, useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import axios from "axios";
import { Baseurl } from "../../config";
import { toast } from "react-toastify";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [productData, setProductData] = useState(null);
  const [attributes, setAttributes] = useState([]);
  const [description, setDescription] = useState("");
  useEffect(() => {
    fetch(Baseurl + "/api/v1/category/allcategory")
      .then((response) => response.json())
      .then((jsonData) => setCategory(jsonData.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    // Fetch product data
    axios
      .get(`${Baseurl}/api/v1/Product/product?id=${id}`)
      .then((response) => {
        if (response.data.success) {
          setProductData(response.data.data);
          setAttributes(response.data.data.attributes || []);
          setDescription(response.data.data.description || "");
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the product data!", error);
      });
  }, [id]);
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("id", productData._id);
    formData.append("name", event.target.name.value);
    formData.append("description", description);
    formData.append("stockQuantity", event.target.stockQuantity.value);
    formData.append("price", event.target.price.value);
    formData.append("discount", event.target.discount.value);
    formData.append("rating", event.target.rating.value); // Corrected from event.target.discount.rating
    formData.append("hasAttributes", event.target.hasAttributes.checked);
    formData.append("status", event.target.status.value);
    formData.append("visibility", event.target.visibility.value);
    formData.append("category", event.target.category.value);

    // Append attributes if hasAttributes is true
    if (event.target.hasAttributes.checked) {
      attributes.forEach((attribute, index) => {
        formData.append(
          `attributes[${index}].attributeName`,
          event.target[`attributeName-${index}`].value
        );
        formData.append(
          `attributes[${index}].attributeValue`,
          event.target[`attributeValue-${index}`].value
        );
      });
    }

    // Append images
    const imageInput = document.getElementById("product-image-input");
    if (imageInput.files.length > 0) {
      formData.append("image", imageInput.files[0]);
    }
    const thumbnailInput = document.getElementById("product-thumbnail-input");
    for (let i = 0; i < thumbnailInput.files.length; i++) {
      formData.append("thumbnail", thumbnailInput.files[i]);
    }

    axios
      .patch(Baseurl + "/api/v1/Product/update", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        if (response.data.success) {
          toast.success("Product Update  successfully ", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            onClose: () => {
              navigate("/Product");
            },
          });
        }
      })
      .catch((error) => {
        console.error("There was an error updating the product!", error);
      });
  };

  if (!productData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Edit Product</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="#">Proven Ro</Link>
                      </li>
                      <li className="breadcrumb-item active">Edit Product</li>
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
              onSubmit={handleFormSubmit}
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
                          Product ID
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="product-title-input"
                          name="id"
                          value={id}
                          readOnly
                        />
                        <div className="invalid-feedback">
                          Please Enter a product title.
                        </div>
                      </div>
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
                          defaultValue={productData.name}
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
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setDescription(data);
                          }}
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
                              />
                            </div>
                            {productData.image && (
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
                                            src={productData.image}
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
                                className="form-control  d-flex"
                                id="product-thumbnail-input"
                                type="file"
                                multiple
                              />
                            </div>
                          </div>
                        </div>
                        {productData.thumbnail.length > 0 && (
                          <ul
                            className="list-unstyled mb-0  d-flex"
                            id="gallery-preview"
                          >
                            {productData.thumbnail.map((file, index) => (
                              <li
                                key={index}
                                className="mt-2"
                                id="gallery-preview-list"
                              >
                                <div className="border rounded">
                                  <div className="d-flex p-2">
                                    <img
                                      src={file}
                                      alt={`Thumbnail ${index}`}
                                      style={{
                                        width: "100px",
                                        height: "auto",
                                      }}
                                    />
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
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
                                  defaultValue={productData.stock.quantity}
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
                                    placeholder="Enter price"
                                    defaultValue={productData.price}
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
                                    defaultValue={productData.discount}
                                    placeholder="Enter discount"
                                    aria-label="discount"
                                    aria-describedby="product-discount-addon"
                                    required=""
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
                                  type="text"
                                  className="form-control"
                                  id="product-discount-input"
                                  name="rating"
                                  defaultValue={productData.rating}
                                  placeholder="Enter discount"
                                  aria-label="rating"
                                  aria-describedby="product-discount-addon"
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
                                    type="checkbox"
                                    className="form-check-input"
                                    id="product-has-attributes-input"
                                    name="hasAttributes"
                                    defaultChecked={productData.hasAttributes}
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
                              {productData.hasAttributes && (
                                <div className="mb-3">
                                  <label className="form-label">
                                    Attributes
                                  </label>
                                  {attributes.map((attribute, index) => (
                                    <div key={index} className="mb-3">
                                      <div className="row">
                                        <div className="col-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            name={`attributeName-${index}`}
                                            defaultValue={
                                              attribute.attributeName
                                            }
                                            placeholder="Attribute Name"
                                          />
                                        </div>

                                        <div className="col-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            name={`attributeValue-${index}`}
                                            defaultValue={
                                              attribute.attributeValue
                                            }
                                            placeholder="Attribute Value"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-end mb-3">
                    <button type="submit" className="btn btn-success w-sm">
                      submit
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
                          Stock Status
                        </label>
                        <select
                          className="form-select"
                          id="choices-publish-status-input"
                          name="status"
                          defaultValue={productData.status}
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
                          defaultValue={productData.visibility}
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
                        name="category"
                        defaultValue={productData.category}
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
                            type="text"
                            className="form-control"
                            id="product-tags-input"
                            placeholder="Enter tags"
                            defaultValue={productData.tags.join(", ")}
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
                        defaultValue={productData.shortDescription}
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

export default EditProduct;
