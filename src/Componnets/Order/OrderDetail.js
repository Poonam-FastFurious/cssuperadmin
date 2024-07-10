import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Baseurl } from "../../config";

function OrderDetail() {
  const [orderData, setOrderData] = useState("");

  const { id } = useParams();
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(
          `${Baseurl}/api/v1/order/singleorder/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setOrderData(data.data);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    fetchOrder();
  }, [id]);
  console.log("orderdatafff", orderData);

  if (!orderData) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Order Details</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="#">Proven Ro</Link>
                      </li>
                      <li className="breadcrumb-item active">Order Details</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-9">
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex align-items-center">
                      <h5 className="card-title flex-grow-1 mb-0">
                        Order #{orderData.orderID}
                      </h5>
                      <div className="flex-shrink-0">
                        <Link to="#" className="btn btn-success btn-sm">
                          <i className="ri-download-2-fill align-middle me-1"></i>
                          Invoice
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive table-card">
                      <table className="table table-nowrap align-middle table-borderless mb-0">
                        <thead className="table-light text-muted">
                          <tr>
                            <th scope="col">Product Details</th>
                            <th scope="col">Item Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Rating</th>
                            <th scope="col" className="text-end">
                              Total Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {orderData.products.map((product, index) => (
                            <tr key={index}>
                              <td>
                                <div className="d-flex">
                                  <div className="flex-shrink-0 avatar-md bg-light rounded p-1">
                                    {product.product &&
                                    product.product.image ? (
                                      <img
                                        src={product.product.image}
                                        alt=""
                                        className="img-fluid d-block"
                                      />
                                    ) : (
                                      <div>No Image Available</div>
                                    )}
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <h5 className="fs-15">
                                      <Link to="#" className="link-primary">
                                        {product.product
                                          ? product.product.name
                                          : "Product Not Found"}
                                      </Link>
                                    </h5>
                                    {product.product &&
                                      product.product.attributes.map(
                                        (attribute, index) => (
                                          <p
                                            key={index}
                                            className="text-muted mb-0"
                                          >
                                            {attribute.attributeName}:{" "}
                                            <span className="fw-medium">
                                              {attribute.attributeValue}
                                            </span>
                                          </p>
                                        )
                                      )}
                                  </div>
                                </div>
                              </td>
                              <td>Rs{product.price.toFixed(2)}</td>
                              <td>{product.quantity}</td>
                              <td>
                                {product.product ? (
                                  <div className="text-warning fs-15">
                                    {Array.from(
                                      {
                                        length: Math.floor(
                                          product.product.rating
                                        ),
                                      },
                                      (_, i) => (
                                        <i key={i} className="ri-star-fill"></i>
                                      )
                                    )}
                                    {product.product.rating % 1 !== 0 && (
                                      <i className="ri-star-half-fill"></i>
                                    )}
                                  </div>
                                ) : (
                                  <div>No Rating</div>
                                )}
                              </td>
                              <td className="fw-medium text-end">
                                Rs
                                {(product.price * product.quantity).toFixed(2)}
                              </td>
                            </tr>
                          ))}
                          <tr className="border-top border-top-dashed">
                            <td colSpan="3"></td>
                            <td colSpan="2" className="fw-medium p-0">
                              <table className="table table-borderless mb-0">
                                <tbody>
                                  <tr>
                                    <td>Sub Total :</td>
                                    <td className="text-end">
                                      Rs{orderData.totalAmount.toFixed(2)}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      Discount{" "}
                                      <span className="text-muted">
                                        (PROVEN15)
                                      </span>{" "}
                                      :
                                    </td>
                                    <td className="text-end">-Rs53.99</td>
                                  </tr>
                                  <tr>
                                    <td>Shipping Charge :</td>
                                    <td className="text-end">Rs65.00</td>
                                  </tr>
                                  <tr>
                                    <td>Estimated Tax :</td>
                                    <td className="text-end">Rs44.99</td>
                                  </tr>
                                  <tr className="border-top border-top-dashed">
                                    <th scope="row">Total (USD) :</th>
                                    <th className="text-end">
                                      Rs{orderData.totalAmount.toFixed(2)}
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <div className="d-sm-flex align-items-center">
                      <h5 className="card-title flex-grow-1 mb-0">
                        Order Status
                      </h5>
                      <div className="flex-shrink-0 mt-2 mt-sm-0"></div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="profile-timeline">
                      <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item border-0">
                          <div className="accordion-header" id="headingOne">
                            <Link
                              className="accordion-button p-2 shadow-none"
                              data-bs-toggle="collapse"
                              to="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 avatar-xs">
                                  <div className="avatar-title bg-success rounded-circle">
                                    <i className="ri-shopping-bag-line"></i>
                                  </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h6 className="fs-15 mb-0 fw-semibold">
                                    Order Placed -
                                    <span className="fw-normal">
                                      {new Date(
                                        orderData.createdAt
                                      ).toLocaleDateString("en-US", {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                      })}
                                    </span>
                                  </h6>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body ms-2 ps-5 pt-0">
                              <h6 className="mb-1">
                                An order has been placed.
                              </h6>
                              {new Date(orderData.createdAt).toLocaleString(
                                "en-US",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  hour12: true,
                                }
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-0">
                          <div className="accordion-header" id="headingTwo">
                            <Link
                              className="accordion-button p-2 shadow-none"
                              data-bs-toggle="collapse"
                              to="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 avatar-xs">
                                  <div className="avatar-title bg-success rounded-circle">
                                    <i className="mdi mdi-gift-outline"></i>
                                  </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h6 className="fs-15 mb-1 fw-semibold">
                                    Packed -{" "}
                                    <span className="fw-normal">
                                      Thu, 16 Dec 2024
                                    </span>
                                  </h6>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body ms-2 ps-5 pt-0">
                              <h6 className="mb-1">
                                Your Item has been picked up by courier partner
                              </h6>
                              <p className="text-muted mb-0">
                                Fri, 17 Dec 2024 - 9:45AM
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-0">
                          <div className="accordion-header" id="headingThree">
                            <Link
                              className="accordion-button p-2 shadow-none"
                              data-bs-toggle="collapse"
                              to="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 avatar-xs">
                                  <div className="avatar-title bg-success rounded-circle">
                                    <i className="ri-truck-line"></i>
                                  </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h6 className="fs-15 mb-1 fw-semibold">
                                    Shipping -{" "}
                                    <span className="fw-normal">
                                      Thu, 16 Dec 2024
                                    </span>
                                  </h6>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body ms-2 ps-5 pt-0">
                              <h6 className="fs-14">
                                RQK Logistics - MFDS1400457854
                              </h6>
                              <h6 className="mb-1">
                                Your item has been shipped.
                              </h6>
                              <p className="text-muted mb-0">
                                Sat, 18 Dec 2024 - 4.54PM
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-0">
                          <div className="accordion-header" id="headingFour">
                            <Link
                              className="accordion-button p-2 shadow-none"
                              data-bs-toggle="collapse"
                              to="#collapseFour"
                              aria-expanded="false"
                            >
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 avatar-xs">
                                  <div className="avatar-title bg-light text-success rounded-circle">
                                    <i className="ri-takeaway-fill"></i>
                                  </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h6 className="fs-14 mb-0 fw-semibold">
                                    Out For Delivery
                                  </h6>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="accordion-item border-0">
                          <div className="accordion-header" id="headingFive">
                            <Link
                              className="accordion-button p-2 shadow-none"
                              data-bs-toggle="collapse"
                              to="#collapseFile"
                              aria-expanded="false"
                            >
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 avatar-xs">
                                  <div className="avatar-title bg-light text-success rounded-circle">
                                    <i className="mdi mdi-package-variant"></i>
                                  </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h6 className="fs-14 mb-0 fw-semibold">
                                    Delivered
                                  </h6>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3">
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex">
                      <h5 className="card-title flex-grow-1 mb-0">
                        <i className="mdi mdi-truck-fast-outline align-middle me-1 text-muted"></i>{" "}
                        Logistics Details
                      </h5>
                      <div className="flex-shrink-0">
                        <Link
                          to="#;"
                          className="badge bg-primary-subtle text-primary fs-11"
                        >
                          Track Order
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="https://media1.giphy.com/media/QxkMQ5sGmvoFr8YlR9/giphy.gif?cid=6c09b952txamu8xuoavh9yysf6qf5837cj8yc5kd4xojja2l&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
                        trigger="loop"
                        colors="primary:#405189,secondary:#0ab39c"
                        style={{ width: "180px", height: "120px" }}
                        alt=""
                      ></img>
                      <h5 className="fs-16 mt-2">RQK Logistics</h5>
                      <p className="text-muted mb-0">ID: MFDS1400457854</p>
                      <p className="text-muted mb-0">
                        Payment Mode : Debit Card
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <div className="d-flex">
                      <h5 className="card-title flex-grow-1 mb-0">
                        Customer Details
                      </h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled mb-0 vstack gap-3">
                      <li>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"
                              alt=""
                              className="avatar-sm rounded"
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="fs-14 mb-1">
                              {orderData.customer.fullName}
                            </h6>
                            <p className="text-muted mb-0">Customer</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <i className="ri-mail-line me-2 align-middle text-muted fs-16"></i>
                        {orderData.customer.email}
                      </li>
                      <li>
                        <i className="ri-phone-line me-2 align-middle text-muted fs-16"></i>
                        {orderData.customer.email
                          ? "9876543210"
                          : orderData.customer.number}
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">
                      <i className="ri-map-pin-line align-middle me-1 text-muted"></i>{" "}
                      Billing Address
                    </h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled vstack gap-2 fs-13 mb-0">
                      <li className="fw-medium fs-14">
                        {orderData.customer.fullName}
                      </li>
                      <li>+(256) 245451 451</li>
                      <li>2186 Joyce Street Rocky Mount</li>
                      <li>New York - 25645</li>
                      <li>United States</li>
                    </ul>
                  </div>
                </div> */}

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">
                      <i className="ri-map-pin-line align-middle me-1 text-muted"></i>{" "}
                      Shipping Address
                    </h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled vstack gap-2 fs-13 mb-0">
                      <li className="fw-medium fs-14">Joseph Parker</li>
                      <li>+(256) 245451 451</li>
                      <li>2186 Joyce Street Rocky Mount</li>
                      <li>California - 24567</li>
                      <li>United States</li>
                    </ul>
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

export default OrderDetail;
