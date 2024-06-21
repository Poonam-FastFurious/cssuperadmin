import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Baseurl } from "../../config";

function Customer() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(Baseurl + "/api/v1/user/alluser")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
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
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0">Customers</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <Link to="">Proven Ro</Link>
                      </li>
                      <li class="breadcrumb-item active">Customers</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="card" id="customerList">
                  <div class="card-header border-bottom-dashed">
                    <div class="row g-4 align-items-center">
                      <div class="col-sm">
                        <div>
                          <h5 class="card-title mb-0">Customer List</h5>
                        </div>
                      </div>
                      <div class="col-sm-auto">
                        <div class="d-flex flex-wrap align-items-start gap-2">
                          <button
                            class="btn btn-soft-danger"
                            id="remove-actions"
                            onclick="deleteMultiple()"
                          >
                            <i class="ri-delete-bin-2-line"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-success add-btn"
                            data-bs-toggle="modal"
                            id="create-btn"
                            data-bs-target="#showModal"
                          >
                            <i class="ri-add-line align-bottom me-1"></i> Add
                            Customer
                          </button>
                          <button type="button" class="btn btn-info">
                            <i class="ri-file-download-line align-bottom me-1"></i>{" "}
                            Import
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body border-bottom-dashed border-bottom">
                    <form>
                      <div class="row g-3">
                        <div class="col-xl-6">
                          <div class="search-box">
                            <input
                              type="text"
                              class="form-control search"
                              placeholder="Search for customer, email, phone, status or something..."
                            />
                            <i class="ri-search-line search-icon"></i>
                          </div>
                        </div>

                        <div class="col-xl-6">
                          <div class="row g-3">
                            <div class="col-sm-4">
                              <div class="">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="datepicker-range"
                                  data-provider="flatpickr"
                                  data-date-format="d M, Y"
                                  data-range-date="true"
                                  placeholder="Select date"
                                />
                              </div>
                            </div>

                            <div class="col-sm-4">
                              <div>
                                <select
                                  class="form-control"
                                  data-plugin="choices"
                                  data-choices=""
                                  data-choices-search-false=""
                                  name="choices-single-default"
                                  id="idStatus"
                                >
                                  <option value="">Status</option>
                                  <option value="all" selected="">
                                    All
                                  </option>
                                  <option value="Active">Active</option>
                                  <option value="Block">Block</option>
                                </select>
                              </div>
                            </div>

                            <div class="col-sm-4">
                              <div>
                                <button
                                  type="button"
                                  class="btn btn-primary w-100"
                                  onclick="SearchData();"
                                >
                                  <i class="ri-equalizer-fill me-2 align-bottom"></i>
                                  Filters
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="card-body">
                    <div>
                      <div class="table-responsive table-card mb-1">
                        <table class="table align-middle" id="customerTable">
                          <thead class="table-light text-muted">
                            <tr>
                              <th scope="col" style={{ width: "50px;" }}>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="checkAll"
                                    value="option"
                                  />
                                </div>
                              </th>

                              <th class="sort" data-sort="customer_name">
                                Customer
                              </th>
                              <th class="sort" data-sort="email">
                                Email
                              </th>
                              <th class="sort" data-sort="phone">
                                Phone
                              </th>
                              <th class="sort" data-sort="date">
                                Joining Date
                              </th>
                              <th class="sort" data-sort="status">
                                Status
                              </th>
                              <th class="sort" data-sort="action">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list form-check-all">
                            {users.map((user) => (
                              <tr key={user.id}>
                                <th scope="row">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="chk_child"
                                      value="option1"
                                    />
                                  </div>
                                </th>

                                <td className="customer_name">
                                  {user.fullName}
                                </td>
                                <td className="email">{user.email}</td>
                                <td className="phone">{user.phone}</td>
                                <td className="date">{user.createdAt}</td>
                                <td className="status">
                                  <span className="badge bg-success-subtle text-success text-uppercase">
                                    active
                                  </span>
                                </td>
                                <td>
                                  <ul className="list-inline hstack gap-2 mb-0">
                                    <li className="list-inline-item edit">
                                      <Link
                                        to={`#edit/${user.id}`}
                                        className="text-primary d-inline-block edit-item-btn"
                                      >
                                        <i className="ri-pencil-fill fs-16"></i>
                                      </Link>
                                    </li>
                                    <li className="list-inline-item">
                                      <button
                                        className="text-danger d-inline-block remove-item-btn"
                                        onClick={() => handleShowModal(user.id)}
                                      >
                                        <i className="ri-delete-bin-5-fill fs-16"></i>
                                      </button>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div class="noresult" style={{ display: "none" }}>
                          <div class="text-center">
                            <lord-icon
                              src="../../../msoeawqm.json"
                              trigger="loop"
                              colors="primary:#121331,secondary:#08a88a"
                              style={{ width: "75px", height: "75px" }}
                            ></lord-icon>
                            <h5 class="mt-2">Sorry! No Result Found</h5>
                            <p class="text-muted mb-0">
                              We've searched more than 150+ customer We did not
                              find any customer for you search.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex justify-content-end">
                        <div class="pagination-wrap hstack gap-2">
                          <Link
                            class="page-item pagination-prev disabled"
                            to="#"
                          >
                            Previous
                          </Link>
                          <ul class="pagination listjs-pagination mb-0"></ul>
                          <Link class="page-item pagination-next" to="#">
                            Next
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      class="modal fade"
                      id="showModal"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header bg-light p-3">
                            <h5 class="modal-title" id="exampleModalLabel">
                              customer
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              id="close-modal"
                            ></button>
                          </div>
                          <form class="tablelist-form" autocomplete="off">
                            <div class="modal-body">
                              <input type="hidden" id="id-field" />

                              <div
                                class="mb-3"
                                id="modal-id"
                                style={{ display: "none;" }}
                              >
                                <label for="id-field1" class="form-label">
                                  ID
                                </label>
                                <input
                                  type="text"
                                  id="id-field1"
                                  class="form-control"
                                  placeholder="ID"
                                  readonly=""
                                />
                              </div>

                              <div class="mb-3">
                                <label
                                  for="customername-field"
                                  class="form-label"
                                >
                                  Customer Name
                                </label>
                                <input
                                  type="text"
                                  id="customername-field"
                                  class="form-control"
                                  placeholder="Enter name"
                                  required=""
                                />
                                <div class="invalid-feedback">
                                  Please enter a customer name.
                                </div>
                              </div>

                              <div class="mb-3">
                                <label for="email-field" class="form-label">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  id="email-field"
                                  class="form-control"
                                  placeholder="Enter email"
                                  required=""
                                />
                                <div class="invalid-feedback">
                                  Please enter an email.
                                </div>
                              </div>

                              <div class="mb-3">
                                <label for="phone-field" class="form-label">
                                  Phone
                                </label>
                                <input
                                  type="text"
                                  id="phone-field"
                                  class="form-control"
                                  placeholder="Enter phone no."
                                  required=""
                                />
                                <div class="invalid-feedback">
                                  Please enter a phone.
                                </div>
                              </div>

                              <div class="mb-3">
                                <label for="date-field" class="form-label">
                                  Joining Date
                                </label>
                                <input
                                  type="date"
                                  id="date-field"
                                  class="form-control"
                                  data-provider="flatpickr"
                                  data-date-format="d M, Y"
                                  required=""
                                  placeholder="Select date"
                                />
                                <div class="invalid-feedback">
                                  Please select a date.
                                </div>
                              </div>

                              <div>
                                <label for="status-field" class="form-label">
                                  Status
                                </label>
                                <select
                                  class="form-control"
                                  data-choices=""
                                  data-choices-search-false=""
                                  name="status-field"
                                  id="status-field"
                                  required=""
                                >
                                  <option value="">Status</option>
                                  <option value="Active">Active</option>
                                  <option value="Block">Block</option>
                                </select>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <div class="hstack gap-2 justify-content-end">
                                <button
                                  type="button"
                                  class="btn btn-light"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="submit"
                                  class="btn btn-success"
                                  id="add-btn"
                                >
                                  Add Customer
                                </button>
                                {/* <!-- <button type="button" class="btn btn-success" id="edit-btn">Update</button> --> */}
                              </div>
                            </div>
                          </form>
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

export default Customer;
