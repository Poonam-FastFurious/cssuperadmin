import React, { useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { MdDescription } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Baseurl } from "../../config";

function ReturnPolicy() {
  const [returnPolicyData, setReturnPolicyData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch(Baseurl + "/api/v1/Returnpolicy/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ReturnPolicy: returnPolicyData }),
      });

      if (response.ok) {
        // Return policy added successfully
        toast.success("Return policy added successfully");
      } else {
        // Handle error response
        toast.error("Failed to add return policy");
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("An error occurred");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* Your existing JSX code */}
            <CKEditor
              editor={ClassicEditor}
              data={MdDescription}
              onChange={(event, editor) =>
                setReturnPolicyData(editor.getData())
              }
            />
            <button
              type="button"
              className={`btn btn-info ${loading ? "disabled" : ""}`}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <div
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <i className="ri-file-download-line align-bottom me-1"></i>
              )}
              Add Return Policy
            </button>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReturnPolicy;
