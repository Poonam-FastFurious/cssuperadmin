/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Baseurl } from "../../config";
import Swal from "sweetalert2";

function State() {
  const [stateName, setStateName] = useState("");
  const [state, setState] = useState([]);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState("");
  const [editstate, seteditstate] = useState("");

  const [editStatus, setEditStatus] = useState("");

  const handleStateNameChange = (e) => {
    setStateName(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(Baseurl + "/api/v1/State/add", {
        State: stateName,
        status,
      });
      // Show success toast
      toast.success("State added successfully");
      setStateName("");
      setStatus("");
      setError(null);

      // Close modal
      const modalElement = document.querySelector("#showModal");
      const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    } catch (err) {
      setError("Failed to add state. Please try again.");
      if (err.response && err.response.data) {
        setError(
          err.response.data.message || "Failed to add state. Please try again."
        );
      }
      // Show error toast
      toast.error("Failed to add state. Please try again.");
    }
  };
  const fetchCategory = async () => {
    try {
      const response = await axios.get(Baseurl + "/api/v1/State");
      setState(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  const handleDelete = async (id) => {
    // Display confirmation dialog using SweetAlert 2
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this category!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            Baseurl + `/api/v1/State/delete/?id=${id}`
          );
          if (response.data.success) {
            // Using SweetAlert 2 for success message
            Swal.fire({
              icon: "success",
              title: "Category deleted successfully",
              timer: 1000,
              showConfirmButton: false,
            }).then(() => {
              // Reload the page or update state as needed
              fetchCategory();
            });
          } else {
            throw new Error(response.data.message); // Throw error with response message
          }
        } catch (error) {
          console.error("Error:", error.message);
          // Using SweetAlert 2 for error message
          Swal.fire({
            icon: "error",
            title: "Failed to delete category",
            text:
              error.response?.data?.message ||
              error.message ||
              "Failed to delete category",
          });
        }
      }
    });
  };
  const handleEditClick = (cat) => {
    setEditId(cat._id);
    seteditstate(cat.State);
    setEditStatus(cat.status);
  };
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: editId, // Pass the state ID
      State: editstate, // Pass the updated state name
      status: editStatus, // Pass the updated status
    };

    try {
      setLoading(true);
      const response = await axios.patch(
        Baseurl + "/api/v1/State/update",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast.success("State updated successfully", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            const modalElement = document.getElementById("editModal");
            const modal = window.bootstrap.Modal.getInstance(modalElement);
            modal.hide();
            fetchCategory();
          },
        });
      } else {
        throw new Error("State update failed");
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("State update failed", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 color-white">Add State</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="#">Charansparsh</Link>
                      </li>
                      <li className="breadcrumb-item">Add</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="listjs-table" id="customerList">
                      <div className="row g-4 mb-3">
                        <div className="col-sm-auto">
                          <div>
                            <button
                              type="button"
                              className="btn btn-success add-btn"
                              data-bs-toggle="modal"
                              id="create-btn"
                              data-bs-target="#showModal"
                            >
                              <i className="ri-add-line align-bottom me-1"></i>{" "}
                              Add
                            </button>
                          </div>
                        </div>
                        <div className="col-sm">
                          <div className="d-flex justify-content-sm-end">
                            <div className="search-box ms-2">
                              <input
                                type="text"
                                className="form-control search"
                                placeholder="Search..."
                              />
                              <i className="ri-search-line search-icon"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="table-responsive table-card mt-3 mb-1">
                        <table
                          className="table align-middle table-nowrap"
                          id="customerTable"
                        >
                          <thead className="table-light">
                            <tr>
                              <th>Sate</th>
                              <th>Status</th>

                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody className="list form-check-all">
                            {state.length > 0 ? (
                              state.map((item, index) => (
                                <tr key={index}>
                                  <td className="phone">{item.State}</td>
                                  <td className="status">
                                    <span className="badge bg-success-subtle text-success text-uppercase">
                                      {item.status}
                                    </span>
                                  </td>{" "}
                                  <td>
                                    <div className="d-flex gap-2">
                                      <div className="edit">
                                        <button
                                          className="btn btn-sm btn-success edit-item-btn"
                                          data-bs-toggle="modal"
                                          data-bs-target="#editModal"
                                          onClick={() => handleEditClick(item)}
                                        >
                                          Edit
                                        </button>
                                      </div>
                                      <div className="remove">
                                        <button
                                          className="btn btn-sm btn-danger remove-item-btn"
                                          onClick={() => handleDelete(item._id)}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="4" className="text-center">
                                  <div className="noresult">
                                    <div className="text-center">
                                      <lord-icon
                                        src="../../../msoeawqm.json"
                                        trigger="loop"
                                        colors="primary:#121331,secondary:#08a88a"
                                        style={{
                                          width: "75px",
                                          height: "75px",
                                        }}
                                      ></lord-icon>
                                      <h5 className="mt-2">
                                        Sorry! No Result Found
                                      </h5>
                                      <p className="text-muted mb-0">
                                        We've searched more than 150+ Orders We
                                        did not find any orders for you search.
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="showModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header bg-light p-3">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add State
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    id="close-modal"
                  ></button>
                </div>
                <form className="tablelist-form" onSubmit={handleSubmit}>
                  <div className="modal-body">
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mb-3">
                      <label
                        htmlFor="customername-field"
                        className="form-label"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="customername-field"
                        className="form-control"
                        placeholder="Enter State"
                        value={stateName}
                        onChange={handleStateNameChange}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a State
                      </div>
                    </div>
                    <div>
                      <label htmlFor="status-field" className="form-label">
                        Status
                      </label>
                      <select
                        className="form-control"
                        data-trigger=""
                        name="status-field"
                        id="status-field"
                        value={status}
                        onChange={handleStatusChange}
                        required
                      >
                        <option value="">Select Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="hstack gap-2 justify-content-end">
                      <button
                        type="button"
                        className="btn btn-light"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="btn btn-success"
                        id="add-btn"
                      >
                        Add State
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="editModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header bg-light p-3">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Upadte State
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    id="close-modal"
                  ></button>
                </div>
                <form
                  class="tablelist-form"
                  autocomplete="off"
                  onSubmit={handleEditSubmit}
                >
                  <div class="modal-body">
                    <div class="mb-3" id="modal-id">
                      <label for="id-field" class="form-label">
                        ID
                      </label>
                      <input
                        type="text"
                        id="id-field"
                        class="form-control"
                        placeholder="ID"
                        readonly=""
                        value={editId}
                      />
                    </div>

                    <div class="mb-3">
                      <label for="customername-field" class="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        id="customername-field"
                        class="form-control"
                        placeholder="Enter Title"
                        required
                        value={editstate}
                        onChange={(e) => seteditstate(e.target.value)}
                      />
                      <div class="invalid-feedback">Please enter a Title</div>
                    </div>

                    <div>
                      <label for="status-field" class="form-label">
                        Status
                      </label>
                      <select
                        class="form-control"
                        data-trigger=""
                        name="status-field"
                        id="status-field"
                        required
                        value={editStatus}
                        onChange={(e) => setEditStatus(e.target.value)}
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
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
                        id="edit-btn"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default State;
