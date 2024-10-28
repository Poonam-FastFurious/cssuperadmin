import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Baseurl } from "../../config";
import axios from "axios";

function VenderDetails() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vendor, setvendor] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(Baseurl + "/api/v1/Product/products");
        const sortedProducts = response.data.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        const vendorProducts = sortedProducts.filter(
          (product) => product.vendor.id === id
        );
        setProducts(vendorProducts);
        setFilteredProducts(vendorProducts);
      } catch (error) {
        setError("Error fetching products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  useEffect(() => {
    fetch(`${Baseurl}/api/v1/Vendor/vendor?id=${id}`)
      .then((responce) => responce.json())
      .then((data) => setvendor(data.message));
  }, [id]);
  const handleSearch = (query) => {
    setSearchQuery(query);

    const lowercasedQuery = query.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowercasedQuery) ||
        product.sku.toLowerCase().includes(lowercasedQuery) ||
        product.categories.toLowerCase().includes(lowercasedQuery)
    );

    setFilteredProducts(filtered);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${Baseurl}/api/v1/Product/delete?id=${id}`);
          // Remove deleted product from state
          setProducts(products.filter((product) => product._id !== id));
          setFilteredProducts(
            filteredProducts.filter((product) => product._id !== id)
          );
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting product:", error);
          setError("Error deleting product. Please try again later.");
          Swal.fire(
            "Error!",
            "There was a problem deleting the product.",
            "error"
          );
        }
      }
    });
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div className="alert alert-danger">{error}</div>;

  const options = {
    chart: {
      type: "line",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    colors: ["#405189", "#d68a32", "#008FFB"],
  };

  const series = [
    {
      name: "Order 1",
      data: [34, 44, 54, 21, 12, 43, 33],
    },
    {
      name: "sales 2",
      data: [43, 32, 33, 52, 13, 44, 32],
    },
    {
      name: "Return 2",
      data: [40, 28, 43, 62, 23, 44, 32],
    },
  ];
  return (
    <>
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0">Vendor Details</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="#;">CharanSparsh</a>
                      </li>
                      <li class="breadcrumb-item active">Vendor Details</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xxl-3">
                <div class="card">
                  <div class="card-body p-4">
                    <div>
                      <div class="flex-shrink-0 avatar-md mx-auto">
                        <div class="avatar-title bg-light rounded">
                          <img
                            src={
                              vendor.storeLogo ||
                              "https://themesbrand.com/velzon/html/master/assets/images/companies/img-1.png"
                            }
                            alt=""
                            height="50"
                          />
                        </div>
                      </div>
                      <div class="mt-4 text-center">
                        <h5 class="mb-1">{vendor.sellerLegalName}</h5>
                        <p class="text-muted">Since 2024</p>
                      </div>
                      <div class="table-responsive">
                        <table class="table mb-0 table-borderless">
                          <tbody>
                            <tr>
                              <th>
                                <span class="fw-medium">Owner Name</span>
                              </th>
                              <td>{vendor.firstName} </td>
                            </tr>
                            <tr>
                              <th>
                                <span class="fw-medium">Company Type</span>
                              </th>
                              <td>{vendor.storeCategory}</td>
                            </tr>
                            <tr>
                              <th>
                                <span class="fw-medium">Email</span>
                              </th>
                              <td>{vendor.email}</td>
                            </tr>
                            <tr>
                              <th>
                                <span class="fw-medium">Website</span>
                              </th>
                              <td>
                                <a href="#e" class="link-primary">
                                  charnsparsh.in
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span class="fw-medium">Contact No.</span>
                              </th>
                              <td>{vendor.mobileNumber}</td>
                            </tr>

                            <tr>
                              <th>
                                <span class="fw-medium">Location</span>
                              </th>
                              <td>Noida</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xxl-9">
                <div class="card">
                  <div class="card-header p-0 border-0 bg-light-subtle">
                    <div class="row g-0 text-center">
                      <div class="col-6 col-sm-3">
                        <div class="p-3 border border-dashed border-start-0">
                          <h5 class="mb-1">
                            <span class="counter-value" data-target="7585">
                              0
                            </span>
                          </h5>
                          <p class="text-muted mb-0">Orders</p>
                        </div>
                      </div>

                      <div class="col-6 col-sm-3">
                        <div class="p-3 border border-dashed border-start-0">
                          <h5 class="mb-1">
                            <span class="counter-value" data-target="22.89">
                              0
                            </span>
                          </h5>
                          <p class="text-muted mb-0">Earnings</p>
                        </div>
                      </div>

                      <div class="col-6 col-sm-3">
                        <div class="p-3 border border-dashed border-start-0">
                          <h5 class="mb-1">
                            <span class="counter-value" data-target="367">
                              0
                            </span>
                          </h5>
                          <p class="text-muted mb-0">Refunds</p>
                        </div>
                      </div>

                      <div class="col-6 col-sm-3">
                        <div class="p-3 border border-dashed border-start-0 border-end-0">
                          <h5 class="mb-1 text-success">
                            <span class="counter-value" data-target="18.92">
                              0
                            </span>
                            %
                          </h5>
                          <p class="text-muted mb-0">Conversation Ratio</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body p-0 pb-2">
                    <div>
                      <ReactApexChart
                        options={options}
                        series={series}
                        type="line"
                        height={350}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div>
                  <div className="card">
                    <div className="card-header border-0">
                      <div className="row g-4">
                        <div className="col-sm-auto">
                          <div>
                            <div>All Product</div>
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
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)} // Update search query
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
                                  {filteredProducts.length}{" "}
                                  {/* Display count of filtered products */}
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
                                  <th scope="col">Image</th>
                                  <th scope="col">Product Name</th>
                                  <th scope="col">Category</th>
                                  <th scope="col">Stock</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">Discount</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {filteredProducts.map((product) => (
                                  <tr key={product._id}>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                          <img
                                            src={product.image}
                                            alt={product.title}
                                            className="avatar-xs rounded-circle"
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <Link
                                        to={`/product/${product._id}`}
                                        className="fw-semibold text-truncate"
                                        title={product.title}
                                      >
                                        {product.title}
                                      </Link>
                                    </td>
                                    <td>{product.categories}</td>
                                    <td>{product.stocks}</td>
                                    <td>₹{product.price}</td>
                                    <td>{product.discount}</td>
                                    <td>
                                      <div className="hstack gap-3 flex-wrap">
                                        <Link
                                          to={`/editProduct/${product._id}`}
                                          className="link-success fs-15"
                                        >
                                          <i className="ri-edit-2-line"></i>
                                        </Link>
                                        <Link
                                          to="#;"
                                          className="link-danger fs-15"
                                          onClick={() =>
                                            handleDelete(product._id)
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

        <footer class="footer">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6">
                <script>document.write(new Date().getFullYear())</script> ©
                Velzon.
              </div>
              <div class="col-sm-6">
                <div class="text-sm-end d-none d-sm-block">
                  Design & Develop by Themesbrand
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default VenderDetails;
