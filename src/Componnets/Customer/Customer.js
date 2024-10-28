import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Baseurl } from "../../config";
import { toast } from "react-toastify";
import ReusableTable from "../Molicule/Table";
import Noresult from "../Molicule/Noresult";
import Swal from "sweetalert2";

function Customer() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10); // Number of users per page
  const tableHeaders = [
    { content: "Name", className: "sort", dataSort: "name" },
    { content: "Email", className: "sort", dataSort: "email" },
    { content: "Mobile", className: "sort", dataSort: "mobile" },
    { content: "Date", className: "sort", dataSort: "date" },
    { content: "Status", className: "sort", dataSort: "status" },
    { content: "Action", className: "sort", dataSort: "action" },
  ];

  useEffect(() => {
    fetch(Baseurl + "/api/v1/user/alluser")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
        setFilteredUsers(data.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!fullName || !email || !password) {
  //     setError("Please fill out all fields.");
  //     return;
  //   }

  //   try {
  //     const response = await fetch(Baseurl + "/api/v1/user/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ fullName, email, password }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     console.log("Customer added:", data);

  //     // Reset form
  //     setFullName("");
  //     setEmail("");
  //     setPassword("");
  //     setError("");
  //     toast.success("Customer added successfully!");
  //     const modalElement = document.getElementById("showModal");
  //     const modal = window.bootstrap.Modal.getInstance(modalElement);
  //     modal.hide();
  //     setUsers([...users, data]);
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setError("Failed to add customer.");
  //   }
  // };
  const deleteCustomer = async (id) => {
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
      try {
        const response = await fetch(`${Baseurl}/api/v1/user/delete?id=${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          toast.success("Users deleted successfully!");
          setFilteredUsers(users.filter((address) => address._id !== id));
        } else {
          toast.error("Failed to delete Users.");
        }
      } catch (error) {
        console.error("Error deleting Users:", error);
        toast.error("An error occurred while deleting the Users.");
      }
    }
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value) {
      const filtered = users.filter(
        (user) =>
          user.fullName.toLowerCase().includes(e.target.value.toLowerCase()) ||
          user.email.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(currentUsers);
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Customers</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="">CharanSparsh</Link>
                      </li>
                      <li className="breadcrumb-item active">Customers</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card" id="customerList">
                  <div className="card-header border-bottom-dashed">
                    <div className="row g-4 align-items-center">
                      <div className="col-sm">
                        <div>
                          <h5 className="card-title mb-0">Customer List</h5>
                        </div>
                      </div>
                      <div className="col-sm-auto">
                        <div className="d-flex flex-wrap align-items-start gap-2">
                          <button
                            className="btn btn-soft-danger"
                            id="remove-actions"
                            onclick="deleteMultiple()"
                          >
                            <i className="ri-delete-bin-2-line"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body border-bottom-dashed border-bottom">
                    <form>
                      <div className="row g-3">
                        <div className="col-xl-6">
                          <div className="search-box">
                            <input
                              type="text"
                              className="form-control search"
                              placeholder="Search for customer, email, phone, status or something..."
                              value={search}
                              onChange={handleSearch}
                            />
                            <i className="ri-search-line search-icon"></i>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-body">
                    <div>
                      <div className="table-responsive table-card mb-1">
                        <ReusableTable
                          headers={tableHeaders}
                          rows={currentUsers.map((user) => [
                            {
                              content: (
                                <a
                                  href="apps-ecommerce-order-details.html"
                                  className="fw-medium link-primary"
                                >
                                  {user.fullName}
                                </a>
                              ),
                              className: "name",
                            },
                            { content: user.email, className: "email" },
                            {
                              content: user.mobile || "N/A",
                              className: "mobile",
                            }, // Replace with actual mobile if applicable
                            {
                              content: new Date(
                                user.createdAt
                              ).toLocaleDateString(),
                              className: "date",
                            },
                            {
                              content: user.status || "Active",
                              className: "status",
                            },
                            {
                              content: (
                                <div style={{ display: "flex", gap: "4px" }}>
                                  {/* <button className="btn btn-primary btn-sm">
                                    Edit
                                  </button> */}
                                  <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteCustomer(user._id)}
                                  >
                                    Delete
                                  </button>
                                </div>
                              ),
                              className: "action",
                            },
                          ])}
                        />
                        {currentUsers.length === 0 && <Noresult />}
                      </div>
                      <div className="d-flex justify-content-end">
                        <div className="pagination-wrap hstack gap-2">
                          <Link
                            className={`page-item pagination-prev ${
                              currentPage === 1 && "disabled"
                            }`}
                            to="#"
                            onClick={() => paginate(currentPage - 1)}
                          >
                            Previous
                          </Link>
                          <ul className="pagination listjs-pagination mb-0">
                            {[...Array(totalPages)].map((_, index) => (
                              <li
                                key={index}
                                className={`page-item ${
                                  currentPage === index + 1 ? "active" : ""
                                }`}
                                onClick={() => paginate(index + 1)}
                              >
                                <Link className="page-link" to="#">
                                  {index + 1}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            className={`page-item pagination-next ${
                              currentPage === totalPages && "disabled"
                            }`}
                            to="#"
                            onClick={() => paginate(currentPage + 1)}
                          >
                            Next
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal for adding customer */}
          {/* <div
            className="modal fade"
            id="showModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add Customer
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    {error && <div className="text-danger mb-3">{error}</div>}
                    <button type="submit" className="btn btn-primary">
                      Add Customer
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Customer;
