import React from "react";
import { Link } from "react-router-dom";

function Sliderlist() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="col-xl-12 col-lg-8">
            <div>
              <div className="card">
                <div className="card-header border-0">
                  <div className="row g-4">
                    <div className="col-sm-auto">
                      <div>
                        <Link
                          to="/addslider"
                          className="btn btn-success"
                          id="addproduct-btn"
                        >
                          <i className="ri-add-line align-bottom me-1"></i> Add
                          Slider
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
                            placeholder="Search Categories..."
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mt-2"
            style={{ marginTop: "25px", backgroundColor: "white" }}
          >
            <table className="table  table-striped align-middle table-nowrap mb-0">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col"> Title</th>
                  <th scope="col"> Details</th>
                  <th scope="col"> Link</th>

                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr key={""}>
                  <th scope="row">
                    <img
                      style={{ maxWidth: "70px", maxHeight: "70px" }}
                      src=""
                      alt=""
                    />
                  </th>
                  <td>title</td>
                  <td>details</td>
                  <td>title</td>

                  <td>
                    <div className="hstack gap-3 flex-wrap">
                      <Link to="#" className="link-success fs-15">
                        <i className="ri-edit-2-line"></i>
                      </Link>
                      <Link to="#" className="link-danger fs-15">
                        <i className="ri-delete-bin-line"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sliderlist;
