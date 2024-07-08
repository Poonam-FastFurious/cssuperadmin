import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Baseurl } from "../../config";
import axios from "axios";

function StockOut() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(Baseurl + "/api/v1/Product/products");
        if (response.data.success) {
          setProducts(response.data.products);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  const filteredProducts = products.filter(
    (product) => product.stock.status === "out_of_stock"
  );
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Stock Out Products </h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="#">Proven Ro</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        StockOut Product
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane active"
              id="productnav-all"
              role="tabpanel"
            >
              <div className="table-responsive table-card">
                <table
                  className="table table-nowrap table-striped-columns mb-0"
                  style={{ backgroundColor: "white" }}
                >
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
                      <th scope="col">Product</th>
                      <th scope="col">Image</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Rating</th>
                      <th scope="col">Stock</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product, index) => (
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
                          <Link to="#" className="fw-semibold">
                            {product.name}
                            <br />
                            Category : {product.category}
                          </Link>
                        </td>
                        <td>
                          <img
                            src={product.thumbnail}
                            alt=""
                            style={{ width: "100px" }}
                          />
                        </td>
                        <td> Rs {product.price}</td>
                        <td>{product.visibility}</td>
                        <td>{product.rating}</td>
                        <td>
                          <span className="badge bg-success">
                            <p> {product.stock.quantity}</p>
                          </span>
                        </td>
                        <td>
                          <div className="hstack gap-3 flex-wrap ">
                            <Link to="#" className="link-success fs-15 m-2">
                              <i className="ri-edit-2-line"></i>
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
    </>
  );
}

export default StockOut;
