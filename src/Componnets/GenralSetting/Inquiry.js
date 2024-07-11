import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function Inquiry() {
  // State to manage the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Function to handle showing the modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Inquiry</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="">Proven Ro</Link>
                      </li>
                      <li className="breadcrumb-item active">Inquiry</li>
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
                        <h5 className="card-title mb-0">Inquiry</h5>
                      </div>
                      <div className="col-sm-auto">
                        <div className="d-flex gap-1 flex-wrap">
                          <button
                            className="btn btn-soft-danger"
                            id="remove-actions"
                          >
                            <i className="ri-delete-bin-2-line"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="mt-2"
                    style={{ marginTop: "25px", backgroundColor: "white" }}
                  >
                    <table className="table table-striped align-middle table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Customer Email</th>
                          <th scope="col"> Transaction ID</th>
                          <th scope="col"> Order Status</th>
                          <th scope="col">Payment Status</th>
                          <th scope="col">Total Amount</th>

                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>user@gmail.com</td>
                          <td>$t1NCSPl7EG</td>
                          <td> Pending</td>
                          <td>Paid</td>
                          <td>115584</td>

                          <td>
                            <div className="hstack gap-3 flex-wrap">
                              <Link
                                className="link-danger fs-15"
                                onClick={handleShowModal}
                              >
                                <i className="ri-delete-bin-line"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>Basic Plan</td>
                          <td>$860</td>
                          <td>Nov 22, 2021</td>
                          <td>Nov 22, 2021</td>
                          <td>Nov 22, 2021</td>

                          <td>
                            <div className="hstack gap-3 flex-wrap">
                              <Link
                                className="link-danger fs-15"
                                onClick={handleShowModal}
                              >
                                <i className="ri-delete-bin-line"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td>Basic Plan</td>
                          <td>$860</td>
                          <td>Nov 22, 2021</td>
                          <td>Nov 22, 2021</td>
                          <td>Nov 22, 2021</td>

                          <td>
                            <div className="hstack gap-3 flex-wrap">
                              <Link
                                className="link-danger fs-15"
                                onClick={handleShowModal}
                              >
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
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
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
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                  <button type="button" className="btn w-sm btn-danger">
                    Yes, Delete It!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Inquiry;
