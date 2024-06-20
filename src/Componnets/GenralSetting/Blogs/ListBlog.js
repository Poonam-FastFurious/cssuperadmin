import React, { useEffect, useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { Baseurl } from "../../../config";
import axios from "axios";

function ListBlog() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(Baseurl + "/api/v1/blog/allblogs");
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                          to="/Addblogs"
                          className="btn btn-success"
                          id="addproduct-btn"
                        >
                          <i className="ri-add-line align-bottom me-1"></i> Add
                          Bloges
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
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
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
          <div className="container-fluid">
            <div className="row">
              {filteredBlogs.map((blog, index) => (
                <div
                  key={index}
                  className="col-md-6 col-lg-4 mt-5 wow fadeInUp"
                  data-wow-delay=".2s"
                  style={{ visibility: "visible" }}
                >
                  <div className="blog-grid">
                    <div className="blog-grid-img position-relative">
                      <img alt="img" src={blog.thumbnail} />
                    </div>
                    <div className="blog-grid-text p-4">
                      <h3 className="h5 mb-3">
                        <a href="#!">{blog.title}</a>
                      </h3>
                      <p className="display-30">{blog.content}</p>
                      <div className="meta meta-style2">
                        <ul>
                          <li>
                            <a href="#!">
                              <i className="fas fa-calendar-alt"></i>{" "}
                              {new Date(blog.createdAt).toLocaleDateString()}
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="fas fa-user"></i> {blog.author}
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="fas fa-comments"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="row mt-6 wow fadeInUp"
              data-wow-delay=".6s"
              style={{ visibility: "visible" }}
            >
              <div className="col-12">
                <div className="pagination text-small text-uppercase text-extra-dark-gray">
                  <ul>
                    <li>
                      <a href="#!">
                        <i className="fas fa-long-arrow-alt-left me-1 d-none d-sm-inline-block"></i>{" "}
                        Prev
                      </a>
                    </li>
                    <li className="active">
                      <a href="#!">1</a>
                    </li>
                    <li>
                      <a href="#!">2</a>
                    </li>
                    <li>
                      <a href="#!">3</a>
                    </li>
                    <li>
                      <a href="#!">
                        Next
                        <i className="fas fa-long-arrow-alt-right ms-1 d-none d-sm-inline-block"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListBlog;
