import React, { useEffect, useRef, useState } from "react";
import Flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import ReusableTable from "../Molicule/Table";
import useFetchData from "../Molicule/DataFetchingComponent";
import Tableskelton from "../Molicule/Tableskelton";
import { Baseurl } from "../../config";
import Noresult from "../Molicule/Noresult";

function VendorPayments() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [dateRange, setDateRange] = useState([]);
  const { data, loading, error } = useFetchData(
    Baseurl + "/api/v1/Vendor/withdrawlall", // Corrected API endpoint
    "data"
  );

  const datepickerRef = useRef(null);

  useEffect(() => {
    if (datepickerRef.current) {
      Flatpickr(datepickerRef.current, {
        mode: "range",
        dateFormat: "d M, Y",
        onChange: (selectedDates) => {
          setDateRange(selectedDates);// Handle date changes
        },
      });
    }
  }, []);
  useEffect(() => {
    if (data) {
      let filtered = data.filter((withdrawal) => {
        // Search by account name or vendor
        const matchesSearch = search
          ? withdrawal.vendor.Account.toLowerCase().includes(
              search.toLowerCase()
            ) ||
            withdrawal.vendor.businessName
              .toLowerCase()
              .includes(search.toLowerCase())
          : true;

        // Filter by date range if selected
        const matchesDateRange =
          dateRange.length === 2
            ? new Date(withdrawal.date) >= dateRange[0] &&
              new Date(withdrawal.date) <= dateRange[1]
            : true;

        return matchesSearch && matchesDateRange;
      });
      setFilteredData(filtered);
    }
  }, [search, dateRange, data]);

  const withdrawals = filteredData || []; // Assuming the response contains a data array
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const tableHeaders = [
    {
      content: (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkAll"
            value="option"
          />
        </div>
      ),
      style: { width: "25px" },
    },
    {
      content: " Acc Holder  Name",
      className: "sort",
      dataSort: "account_name",
    },

    { content: "Account", className: "sort", dataSort: "account" },
    { content: "IFSC", className: "sort", dataSort: "branch" },
    { content: "VENDOR", className: "sort", dataSort: "category" },
    { content: "Amount", className: "sort", dataSort: "amount" },
    {
      content: "Payment Status",
      className: "sort",
      dataSort: "payment_status",
    },
    { content: "Approved By", className: "sort", dataSort: "approved_by" },
    { content: "Action", className: "sort", dataSort: "action" },
  ];

  const tableRows = withdrawals.map((withdrawal) => [
    {
      content: (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="checkAll"
            value={withdrawal.id} // Assuming each withdrawal has a unique id
          />
        </div>
      ),
    },
    { content: withdrawal.vendor.Account, className: "account_name" },
    { content: withdrawal.vendor.accountnumber, className: "account" },
    { content: withdrawal.vendor.ifsc, className: "branch" },
    { content: withdrawal.vendor.businessName, className: "bank_name" },
    { content: withdrawal.amount, className: "amount" },
    { content: withdrawal.status, className: "payment_status" },
    { content: withdrawal.approvedBy || "Admin", className: "approved_by" },
    {
      content: (
        <div className="d-flex gap-2">
          <button className="btn btn-success btn-sm">Edit</button>
          <button className="btn btn-danger btn-sm">Delete</button>
        </div>
      ),
      className: "action",
    },
  ]);

  if (loading) {
    return (
      <div className="container">
        {[...Array(8)].map((_, index) => (
          <Tableskelton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card" id="orderList">
                  <div className="card-header border-0">
                    <div className="row align-items-center gy-3">
                      <div className="col-sm">
                        <h5 className="card-title mb-0">Withdrawal Report</h5>
                      </div>
                      <div className="col-sm-auto">
                        <div className="d-flex gap-1 flex-wrap">
                          <button type="button" className="btn btn-info">
                            <i className="ri-file-download-line align-bottom me-1"></i>
                            Generate Report
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
                              placeholder="Search for account name, bank, status..."
                              value={search}
                              onChange={handleSearch}
                            />
                            <i className="ri-search-line search-icon"></i>
                          </div>
                        </div>

                        <div className="col-xxl-2 col-sm-6">
                          <div>
                            <input
                              type="text"
                              ref={datepickerRef}
                              className="form-control"
                              placeholder="Select date"
                            />
                          </div>
                        </div>

                        <div className="col-xxl-2 col-sm-4">
                          <div>
                            <select className="form-control" id="idStatus">
                              <option value="">Select Report </option>
                              <option value="all" selected>
                                Daily
                              </option>
                              <option value="Pending">Weekly</option>
                              <option value="Inprogress">Monthly</option>
                              <option value="Cancelled">Yearly</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-xxl-1 col-sm-4">
                          <div>
                            <button
                              type="button"
                              className="btn btn-success w-100"
                            >
                              <i className="ri-equalizer-fill me-1 align-bottom"></i>
                              Filters
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-body pt-0">
                    <div>
                      <ul
                        className="nav nav-tabs nav-tabs-custom nav-success mb-3"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active All py-3"
                            data-bs-toggle="tab"
                            id="All"
                            href="#home1"
                            role="tab"
                            aria-selected="true"
                          >
                            <i className="ri-store-2-fill me-1 align-bottom"></i>
                            All
                          </a>
                        </li>
                      </ul>

                      <div className="table-responsive table-card mb-1">
                        {withdrawals.length > 0 ? (
                          <div>
                            <ReusableTable
                              headers={tableHeaders}
                              rows={tableRows}
                            />
                          </div>
                        ) : (
                          <Noresult />
                        )}
                      </div>
                      <div className="d-flex justify-content-end">
                        <div className="pagination-wrap hstack gap-2">
                          <div className="page-item pagination-prev disabled">
                            Previous
                          </div>
                          <ul className="pagination listjs-pagination mb-0"></ul>
                          <div className="page-item pagination-next">Next</div>
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
    </>
  );
}

export default VendorPayments;
