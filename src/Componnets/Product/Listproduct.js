/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { Baseurl } from "../../config";

function Listproduct() {
  const [products, setProducts] = useState([]);
  const [activeProducts, setActiveProducts] = useState([]);
  const [inactiveProducts, setInactiveProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(Baseurl + "/api/v1/Product/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Set all products
        setProducts(data.products);

        // Filter products based on their status
        const activeProducts = data.products.filter(
          (product) => product.visibility === "active"
        );
        const inactiveProducts = data.products.filter(
          (product) => product.visibility === "inactive"
        );

        // Set the state for active and inactive products
        setActiveProducts(activeProducts);
        setInactiveProducts(inactiveProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filteredProducts);
  };

  const deleteProduct = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await fetch(`${Baseurl}/api/v1/Product/delete`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Update state after successful deletion
        setProducts(products.filter((product) => product._id !== id));
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      Swal.fire("Error!", "Failed to delete the product.", "error");
    }
  };
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = (searchTerm ? filteredProducts : products).slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(
    (searchTerm ? filteredProducts.length : products.length) / productsPerPage
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Products</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="#">Proven Ro</Link>
                      </li>
                      <li className="breadcrumb-item active">Products</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-8">
                <div>
                  <div className="card">
                    <div className="card-header border-0">
                      <div className="row g-4">
                        <div className="col-sm-auto">
                          <div>
                            <Link
                              to="/AddProduct"
                              className="btn btn-success"
                              id="addproduct-btn"
                            >
                              <i className="ri-add-line align-bottom me-1"></i>{" "}
                              Add Product
                            </Link>
                          </div>
                        </div>
                        <div className="col-sm">
                          <div className="d-flex justify-content-sm-end">
                            <div className="search-box ms-2">
                              <input
                                type="text"
                                className="form-control"
                                id="searchProductList"
                                placeholder="Search Products..."
                                value={searchTerm}
                                onChange={handleSearch}
                              />
                              <i className="ri-search-line search-icon"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-header">
                      <div className="row align-items-center">
                        <div className="col">
                          <ul
                            className="nav nav-tabs-custom card-header-tabs border-bottom-0"
                            role="tablist"
                          >
                            <li className="nav-item">
                              <Link
                                className="nav-link active fw-semibold"
                                data-bs-toggle="tab"
                                to="#productnav-all"
                                role="tab"
                              >
                                All
                                <span className="badge bg-danger-subtle text-danger align-middle rounded-pill ms-1">
                                  {products.length}
                                </span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link fw-semibold"
                                data-bs-toggle="tab"
                                to="#productnav-published"
                                role="tab"
                              >
                                Active
                                <span className="badge bg-danger-subtle text-danger align-middle rounded-pill ms-1">
                                  {activeProducts.length}
                                </span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link fw-semibold"
                                data-bs-toggle="tab"
                                to="#productnav-draft"
                                role="tab"
                              >
                                InActive
                                <span className="badge bg-danger-subtle text-danger align-middle rounded-pill ms-1">
                                  {inactiveProducts.length}
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-auto">
                          <div id="selection-element">
                            <div className="my-n1 d-flex align-items-center text-muted">
                              Select
                              <div
                                id="select-content"
                                className="text-body fw-semibold px-1"
                              ></div>
                              Result
                              <button
                                type="button"
                                className="btn btn-link link-danger p-0 ms-3"
                                data-bs-toggle="modal"
                                data-bs-target="#removeItemModal"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="tab-content text-muted">
                        <div
                          className="tab-pane active"
                          id="productnav-all"
                          role="tabpanel"
                        >
                          <div className="table-responsive table-card">
                            <table className="table table-nowrap table-striped-columns mb-0">
                              <thead className="table-light">
                                <tr>
                                  <th scope="col">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="cardtableCheck"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="cardtableCheck"
                                      ></label>
                                    </div>
                                  </th>
                                  <th scope="col">Image</th>
                                  <th scope="col">Product Name</th>
                                  <th scope="col">Category</th>
                                  <th scope="col">Stock</th>
                                  <th scope="col">Price</th>

                                  <th scope="col">Rating</th>
                                  <th scope="col">Status</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {currentProducts.map((product, index) => (
                                  <tr key={index}>
                                    <td>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="cardtableCheck04"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="cardtableCheck04"
                                        ></label>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                          <img
                                            src={product.image}
                                            alt=""
                                            className="avatar-xs rounded-circle"
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <Link
                                        to={`${product._id}`}
                                        className="fw-semibold"
                                      >
                                        {product.name}
                                      </Link>
                                    </td>
                                    <td>{product.category}</td>
                                    <td>{product.stock.quantity}</td>
                                    <td> ₹{product.price}</td>

                                    <td>{product.rating}</td>
                                    <td>
                                      <span className="badge bg-success">
                                        {product.visibility}
                                      </span>
                                    </td>
                                    <td>
                                      <div className="hstack gap-3 flex-wrap">
                                        <Link
                                          to={`/EditProduct/${product._id}`}
                                          className="link-success fs-15"
                                        >
                                          <i className="ri-edit-2-line"></i>
                                        </Link>
                                        <Link
                                          to="#;"
                                          className="link-danger fs-15"
                                          onClick={() =>
                                            deleteProduct(product._id)
                                          }
                                        >
                                          <i className="ri-delete-bin-line"></i>
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <nav className="mt-4">
                            <ul className="pagination ">
                              {Array.from({ length: totalPages }).map(
                                (_, index) => (
                                  <li
                                    key={index}
                                    className={`page-item ${
                                      currentPage === index + 1 ? "active" : ""
                                    }`}
                                  >
                                    <button
                                      className="page-link"
                                      onClick={() => paginate(index + 1)}
                                    >
                                      {index + 1}
                                    </button>
                                  </li>
                                )
                              )}
                            </ul>
                          </nav>
                        </div>

                        <div
                          className="tab-pane"
                          id="productnav-published"
                          role="tabpanel"
                        >
                          <div className="table-responsive table-card">
                            <table className="table table-nowrap table-striped-columns mb-0">
                              <thead className="table-light">
                                <tr>
                                  <th scope="col">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="cardtableCheck"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="cardtableCheck"
                                      ></label>
                                    </div>
                                  </th>
                                  <th scope="col">Image</th>
                                  <th scope="col">Product Name</th>
                                  <th scope="col">Category</th>
                                  <th scope="col">Stock</th>
                                  <th scope="col">Price</th>

                                  <th scope="col">Rating</th>
                                  <th scope="col">Status</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {activeProducts.map((product, index) => (
                                  <tr key={index}>
                                    <td>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="cardtableCheck04"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="cardtableCheck04"
                                        ></label>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                          <img
                                            src={product.image}
                                            alt=""
                                            className="avatar-xs rounded-circle"
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <Link
                                        to={`${product._id}`}
                                        className="fw-semibold"
                                      >
                                        {product.name}
                                      </Link>
                                    </td>
                                    <td>{product.category}</td>
                                    <td>{product.stock.quantity}</td>
                                    <td> ₹{product.price}</td>

                                    <td>{product.rating}</td>
                                    <td>
                                      <span className="badge bg-success">
                                        {product.visibility}
                                      </span>
                                    </td>
                                    <td>
                                      <div className="hstack gap-3 flex-wrap">
                                        <Link
                                          to={`/EditProduct/${product._id}`}
                                          className="link-success fs-15"
                                        >
                                          <i className="ri-edit-2-line"></i>
                                        </Link>
                                        <Link
                                          to="#;"
                                          className="link-danger fs-15"
                                          onClick={() =>
                                            deleteProduct(product._id)
                                          }
                                        >
                                          <i className="ri-delete-bin-line"></i>
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div
                          className="tab-pane"
                          id="productnav-draft"
                          role="tabpanel"
                        >
                          <div className="table-responsive table-card">
                            <table className="table table-nowrap table-striped-columns mb-0">
                              <thead className="table-light">
                                <tr>
                                  <th scope="col">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="cardtableCheck"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="cardtableCheck"
                                      ></label>
                                    </div>
                                  </th>
                                  <th scope="col">Image</th>
                                  <th scope="col">Product Name</th>
                                  <th scope="col">Category</th>
                                  <th scope="col">Stock</th>
                                  <th scope="col">Price</th>

                                  <th scope="col">Rating</th>
                                  <th scope="col">Status</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {inactiveProducts.map((product, index) => (
                                  <tr key={index}>
                                    <td>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="cardtableCheck04"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="cardtableCheck04"
                                        ></label>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                          <img
                                            src={product.image}
                                            alt=""
                                            className="avatar-xs rounded-circle"
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <Link
                                        to={`${product._id}`}
                                        className="fw-semibold"
                                      >
                                        {product.name}
                                      </Link>
                                    </td>
                                    <td>{product.category}</td>
                                    <td>{product.stock.quantity}</td>
                                    <td> ₹{product.price}</td>

                                    <td>{product.rating}</td>
                                    <td>
                                      <span className="badge bg-success">
                                        {product.visibility}
                                      </span>
                                    </td>
                                    <td>
                                      <div className="hstack gap-3 flex-wrap">
                                        <Link
                                          to={`/EditProduct/${product._id}`}
                                          className="link-success fs-15"
                                        >
                                          <i className="ri-edit-2-line"></i>
                                        </Link>
                                        <Link
                                          to="#;"
                                          className="link-danger fs-15"
                                          onClick={() =>
                                            deleteProduct(product._id)
                                          }
                                        >
                                          <i className="ri-delete-bin-line"></i>
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
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

export default Listproduct;
