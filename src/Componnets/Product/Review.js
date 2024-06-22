import React, { useState } from "react";
import { Link } from "react-router-dom";

function Review() {
      const [searchTerm, setSearchTerm] = useState("");
      const [selectedDate, setSelectedDate] = useState("");

      // Dummy data for demonstration
      const reviews = [
            { id: 1, customerName: "user@gmail.com", productName: "Pending", rating: "$t1NCSPl7EG", date: "Nov 22, 2021" },
            { id: 2, customerName: "Basic Plan", productName: "$860", rating: "Nov 22, 2021", date: "Nov 22, 2021" },
            { id: 3, customerName: "Basic Plan", productName: "$860", rating: "Nov 22, 2021", date: "Nov 22, 2021" },
      ];

      // Filtered reviews based on search term and date
      const filteredReviews = reviews.filter(
            (review) =>
                  (searchTerm === "" ||
                        review.productName.toLowerCase().includes(searchTerm.toLowerCase())) &&
                  (selectedDate === "" || review.date === selectedDate)
      );

      const handleSearchChange = (event) => {
            setSearchTerm(event.target.value);
      };

      const handleDateChange = (event) => {
            setSelectedDate(event.target.value);
      };

      return (
            <>
                  <div className="main-content">
                        <div className="page-content">
                              <div className="container-fluid">
                                    <div className="row">
                                          <div className="col-12">
                                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                                      <h4 className="mb-sm-0">Review</h4>

                                                      <div className="page-title-right">
                                                            <ol className="breadcrumb m-0">
                                                                  <li className="breadcrumb-item">
                                                                        <Link to="">Proven Ro</Link>
                                                                  </li>
                                                                  <li className="breadcrumb-item active">Review</li>
                                                            </ol>
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
                                                                        <h5 className="card-title mb-0">Product Review</h5>
                                                                  </div>
                                                                  <div className="col-sm-auto">
                                                                        <div className="d-flex gap-1 flex-wrap">
                                                                              <button type="button" className="btn btn-info" style={{ visibility: "hidden" }}>
                                                                                    <i className="ri-file-download-line align-bottom me-1"></i>
                                                                                    Import
                                                                              </button>
                                                                              <button className="btn btn-soft-danger" id="remove-actions">
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
                                                                                          placeholder="Search for product name..."
                                                                                          value={searchTerm}
                                                                                          onChange={handleSearchChange}
                                                                                    />
                                                                                    <i className="ri-search-line search-icon"></i>
                                                                              </div>
                                                                        </div>

                                                                        <div className="col-xxl-2 col-sm-6">
                                                                              <div>
                                                                                    <input
                                                                                          type="date"
                                                                                          className="form-control"
                                                                                          value={selectedDate}
                                                                                          onChange={handleDateChange}
                                                                                    />
                                                                              </div>
                                                                        </div>

                                                                        <div className="col-xxl-1 col-sm-4">
                                                                              <div>
                                                                                    <button type="button" className="btn btn-primary w-100">
                                                                                          <i className="ri-equalizer-fill me-1 align-bottom"></i>
                                                                                          Filters
                                                                                    </button>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </form>
                                                      </div>
                                                      <div className="mt-2" style={{ marginTop: "25px", backgroundColor: "white" }}>
                                                            <table className="table table-striped align-middle table-nowrap mb-0">
                                                                  <thead>
                                                                        <tr>
                                                                              <th scope="col">Id</th>
                                                                              <th scope="col">Customer Name</th>
                                                                              <th scope="col">Rating</th>
                                                                              <th scope="col">Product Name</th>
                                                                              <th scope="col">Date Review</th>
                                                                              <th scope="col">Action</th>
                                                                        </tr>
                                                                  </thead>
                                                                  <tbody>
                                                                        {filteredReviews.map((review) => (
                                                                              <tr key={review.id}>
                                                                                    <td>{review.id}</td>
                                                                                    <td>{review.customerName}</td>
                                                                                    <td>{review.rating}</td>
                                                                                    <td>{review.productName}</td>
                                                                                    <td>{review.date}</td>
                                                                                    <td>
                                                                                          <div className="hstack gap-3 flex-wrap">
                                                                                                <Link className="link-danger fs-15">
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
            </>
      );
}

export default Review;
