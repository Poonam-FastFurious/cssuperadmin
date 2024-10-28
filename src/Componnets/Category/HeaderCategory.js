import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Baseurl } from "../../config";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function HeaderCategory() {
  const [subcategory, setSubcategory] = useState([]);
  const [category, setCategory] = useState([]);
  const [mainHeading, setmainHeading] = useState("");
  const [categoriesTitle, setCategoriesTitle] = useState("");
  const [status, setStatus] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [audio, setAudio] = useState("");
  const [loading, setLoading] = useState(false);
  // New state variables for editing
  const [searchTerm, setSearchTerm] = useState("");
  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        Baseurl + "/api/v1/category/allcategory"
      );
      setCategory(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  const fetchsubcategory = async () => {
    try {
      const response = await axios.get(Baseurl + "/api/v1/headercategory");
      setSubcategory(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  const clearForm = () => {
    setmainHeading(""); // Clear the state for categoriesTitle
    setContent(""); // Clear the state for link
    setStatus(""); // Clear the state for status
    setImage(null); // Clear the state for image
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Set the selected file as image
    } else {
      setImage(null); // Handle case where no file is selected
    }
  };

  const handelaudio = (e) => {
    setAudio(e.target.files[0]);
  };

  const handelsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("mainHeading", mainHeading);
    formData.append("content", content);
    formData.append("status", status);
    formData.append("categoriesTitle", categoriesTitle);
    if (image) {
      formData.append("image", image); // Append image only if it exists
    }
    formData.append("audio", audio);
    try {
      setLoading(true);
      const response = await fetch(Baseurl + "/api/v1/headercategory/add", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.success) {
        toast.success("Header category added successfully ", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            const modalElement = document.getElementById("showModal");
            const modal = window.bootstrap.Modal.getInstance(modalElement);
            modal.hide();
            clearForm();
            fetchsubcategory();
          },
        });
      } else {
        throw new Error("Subcategory upload failed");
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("category creation failed", {
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
      setLoading(false); // Set loading back to false after request completes
    }
  };
  useEffect(() => {
    fetchCategory();
    fetchsubcategory();
  }, []);
  const handleRemove = async (id) => {
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
          const response = await fetch(
            Baseurl + "/api/v1/headercategory/delete",
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ id }),
            }
          );

          if (response.ok) {
            toast.success("Header category deleted successfully!", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              onClose: () => {
                fetchsubcategory();
              },
            });
          } else {
            toast.error(response.statusText, "Failed to delete subcategory!");
            console.error("Error:", response.statusText);
          }
        } catch (error) {
          toast.error("Failed to delete subcategory!");
          console.error("There was an error deleting the subcategory:", error);
        }
      }
    });
  };

  return (
    <>
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0">Add Header Category</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <Link to="#">CharanSparsh</Link>
                      </li>
                      <li class="breadcrumb-item active">Add </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-body">
                    <div class="listjs-table" id="customerList">
                      <div class="row g-4 mb-3">
                        <div class="col-sm-auto">
                          <div>
                            <button
                              type="button"
                              class="btn btn-success add-btn"
                              data-bs-toggle="modal"
                              id="create-btn"
                              data-bs-target="#showModal"
                            >
                              <i class="ri-add-line align-bottom me-1"></i> Add
                            </button>
                          </div>
                        </div>
                        <div class="col-sm">
                          <div class="d-flex justify-content-sm-end">
                            <div class="search-box ms-2">
                              <input
                                type="text"
                                class="form-control search"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                              />
                              <i class="ri-search-line search-icon"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="table-responsive table-card mt-3 mb-1">
                        <table
                          class="table align-middle table-nowrap"
                          id="customerTable"
                        >
                          <thead class="table-light">
                            <tr>
                              <th class="sort" data-sort="customer_name">
                                Image
                              </th>
                              <th class="sort" data-sort="email">
                                Main Heading
                              </th>
                              <th class="sort" data-sort="email">
                                Header Category
                              </th>
                              <th class="sort" data-sort="date">
                                Content
                              </th>
                              <th class="sort" data-sort="date">
                                Audio
                              </th>

                              <th class="sort" data-sort="status">
                                Status
                              </th>
                              <th class="sort" data-sort="action">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody class="list form-check-all">
                            {subcategory.length > 0 ? (
                              subcategory.map((subcat, index) => (
                                <tr key={index}>
                                  <td class="email">
                                    <img
                                      className="avatar-xs rounded-circle"
                                      src={subcat.image}
                                      alt=""
                                    ></img>
                                  </td>
                                  <td class="phone">{subcat.mainHeading}</td>
                                  <td class="date">{subcat.categoriesTitle}</td>
                                  <td class="date">
                                    <span style={{ width: "150px" }}>
                                      {subcat.content}
                                    </span>
                                  </td>
                                  <td class="date">{subcat.audio}</td>
                                  <td class="status">
                                    <span class="badge bg-success-subtle text-success text-uppercase">
                                      {subcat.status}
                                    </span>
                                  </td>
                                  <td>
                                    <div class="d-flex gap-2">
                                      <div class="edit"></div>
                                      <div class="remove">
                                        <button
                                          class="btn btn-sm btn-danger remove-item-btn"
                                          onClick={() =>
                                            handleRemove(subcat._id)
                                          }
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
                                <td colSpan="6" class="text-center">
                                  <div class="noresult">
                                    <div class="text-center">
                                      <lord-icon
                                        src="../../../msoeawqm.json"
                                        trigger="loop"
                                        colors="primary:#121331,secondary:#08a88a"
                                        style={{
                                          width: "75px",
                                          height: "75px",
                                        }}
                                      ></lord-icon>
                                      <h5 class="mt-2">
                                        Sorry! No Result Found
                                      </h5>
                                      <p class="text-muted mb-0">
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
            class="modal fade"
            id="showModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header bg-light p-3">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add Header category
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
                  onSubmit={handelsubmit}
                >
                  <div class="modal-body">
                    <div class="mb-3" id="modal-id" style={{ display: "none" }}>
                      <label for="id-field" class="form-label">
                        ID
                      </label>
                      <input
                        type="text"
                        id="id-field"
                        class="form-control"
                        placeholder="ID"
                        readonly=""
                      />
                    </div>
                    <div className="mb-3">
                      <label for="status-field" class="form-label">
                        Header Category
                      </label>
                      <select
                        class="form-control"
                        data-trigger=""
                        name="status-field"
                        id="status-field"
                        required=""
                        onChange={(e) => setCategoriesTitle(e.target.value)}
                        value={categoriesTitle}
                      >
                        <option readonly>select Category</option>
                        {category.map((cat) => (
                          <option key={cat._id} value={cat.categoriesTitle}>
                            {cat.categoriesTitle}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="customername-field" class="form-label">
                        Header main Title
                      </label>
                      <input
                        type="text"
                        id="customername-field"
                        class="form-control"
                        placeholder="Enter Title"
                        required=""
                        onChange={(e) => setmainHeading(e.target.value)}
                        value={mainHeading}
                      />
                      <div class="invalid-feedback">Please enter a Title</div>
                    </div>

                    <div class="mb-3">
                      <label for="email-field" class="form-label">
                        Contents
                      </label>
                      <input
                        type="text"
                        id="email-field"
                        class="form-control"
                        placeholder="Enter Link"
                        required=""
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                      />
                      <div class="invalid-feedback">Please enter an Link.</div>
                    </div>

                    <div class="mb-3">
                      <label for="phone-field" class="form-label">
                        Image
                      </label>
                      <input
                        type="file"
                        id="phone-field"
                        class="form-control"
                        required
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                      <div class="invalid-feedback">Please enter a images</div>
                    </div>
                    <div class="mb-3">
                      <label for="phone-field" class="form-label">
                        Audio
                      </label>
                      <input
                        type="file"
                        id="phone-field"
                        class="form-control"
                        placeholder="Enter Phone no."
                        required
                        onChange={handelaudio}
                      />
                      <div class="invalid-feedback">Please enter a images</div>
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
                        required=""
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                      >
                        <option value="">Status</option>
                        <option value="active">Active</option>
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
                        Save
                      </button>
                    </div>
                    {loading && (
                      <div className="loader">
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    )}
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

export default HeaderCategory;
