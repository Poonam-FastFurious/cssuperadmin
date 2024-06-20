import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Notification() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  // const handleImageChange = (e) => {
  //   setImage(e.target.files[0]);
  // };

  const handelsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("details", details);
    formData.append("link", link);

    setLoading(true); // Start loader

    try {
      const response = await fetch(
        "https://ssagriculturebackend.onrender.com/api/v1/Banner/add",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.success) {
        toast.success("Banner uploaded successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            // Clear the form
            setTitle("");
            setImage("");

            setDetails("");
            setLink("");
            window.location.reload();
          },
        });
      } else {
        throw new Error("Banner upload failed");
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Banner upload failed", {
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
      setLoading(false); // Stop loader
    }
  };

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
                          className="btn"
                          id="addproduct-btn"
                        >
                          Send Notification
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="d-flex justify-content-sm-end">
                        <div className="search-box ms-2">
                          <Link
                            onClick={handleGoBack}
                            to="/add-product"
                            className="btn btn-success"
                            id="addproduct-btn"
                          >
                            <i className="align-bottom me-1"></i> Back
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "white" }}>
            <form
              onSubmit={handelsubmit}
              style={{
                paddingLeft: "50px",
                paddingRight: "50px",
                height: "100vh",
              }}
            >
              <div className="row" style={{ paddingTop: "10px" }}>
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Type </h4>
                    </div>

                    <div className="card-body">
                      <select
                        class="form-select mb-3"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">Product</option>
                        <option value="2">Genral</option>
                        <option value="3">Categories</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 col-lg-6">
                <label htmlFor="employeeName" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="employeeName"
                  placeholder="Enter employee name"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>
              <div className="mb-3 col-lg-6">
                <label htmlFor="details" className="form-label">
                  Details
                </label>
                <textarea
                  type="text"
                  className="form-control h-12"
                  id="details"
                  placeholder="Enter details"
                  onChange={(e) => setDetails(e.target.value)}
                  value={details}
                />
              </div>

              <div className="">
                <button type="submit" className="btn btn-success">
                  Send Notification
                </button>
              </div>
            </form>
            {loading && <span className="loader"></span>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
