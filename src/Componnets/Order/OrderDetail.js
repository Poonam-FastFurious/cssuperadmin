import React from "react";
import { Link } from "react-router-dom";

function OrderDetail() {
  return (
    <>
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0">Order Details</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <Link to="#">Proven Ro</Link>
                      </li>
                      <li class="breadcrumb-item active">Order Details</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xl-9">
                <div class="card">
                  <div class="card-header">
                    <div class="d-flex align-items-center">
                      <h5 class="card-title flex-grow-1 mb-0">Order #VL2667</h5>
                      <div class="flex-shrink-0">
                        <Link to="#" class="btn btn-success btn-sm">
                          <i class="ri-download-2-fill align-middle me-1"></i>
                          Invoice
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive table-card">
                      <table class="table table-nowrap align-middle table-borderless mb-0">
                        <thead class="table-light text-muted">
                          <tr>
                            <th scope="col">Product Details</th>
                            <th scope="col">Item Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Rating</th>
                            <th scope="col" class="text-end">
                              Total Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="d-flex">
                                <div class="flex-shrink-0 avatar-md bg-light rounded p-1">
                                  <img
                                    src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                                    alt=""
                                    class="img-fluid d-block"
                                  />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                  <h5 class="fs-15">
                                    <Link to="#" class="link-primary">
                                      Domestic Ro
                                    </Link>
                                  </h5>
                                  <p class="text-muted mb-0">
                                    Color: <span class="fw-medium">Pink</span>
                                  </p>
                                  <p class="text-muted mb-0">
                                    Size: <span class="fw-medium">M</span>
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>Rs119.99</td>
                            <td>02</td>
                            <td>
                              <div class="text-warning fs-15">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-half-fill"></i>
                              </div>
                            </td>
                            <td class="fw-medium text-end">Rs239.98</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex">
                                <div class="flex-shrink-0 avatar-md bg-light rounded p-1">
                                  <img
                                    src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                                    alt=""
                                    class="img-fluid d-block"
                                  />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                  <h5 class="fs-15">
                                    <Link to="#" class="link-primary">
                                      Domestic Ro
                                    </Link>
                                  </h5>
                                  <p class="text-muted mb-0">
                                    Color: <span class="fw-medium">Pink</span>
                                  </p>
                                  <p class="text-muted mb-0">
                                    Size: <span class="fw-medium">M</span>
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>Rs119.99</td>
                            <td>02</td>
                            <td>
                              <div class="text-warning fs-15">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-half-fill"></i>
                              </div>
                            </td>
                            <td class="fw-medium text-end">Rs239.98</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex">
                                <div class="flex-shrink-0 avatar-md bg-light rounded p-1">
                                  <img
                                    src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                                    alt=""
                                    class="img-fluid d-block"
                                  />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                  <h5 class="fs-15">
                                    <Link to="#" class="link-primary">
                                      Domestic Ro
                                    </Link>
                                  </h5>
                                  <p class="text-muted mb-0">
                                    Color: <span class="fw-medium">Pink</span>
                                  </p>
                                  <p class="text-muted mb-0">
                                    Size: <span class="fw-medium">M</span>
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>Rs119.99</td>
                            <td>02</td>
                            <td>
                              <div class="text-warning fs-15">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-half-fill"></i>
                              </div>
                            </td>
                            <td class="fw-medium text-end">Rs239.98</td>
                          </tr>
                          <tr class="border-top border-top-dashed">
                            <td colspan="3"></td>
                            <td colspan="2" class="fw-medium p-0">
                              <table class="table table-borderless mb-0">
                                <tbody>
                                  <tr>
                                    <td>Sub Total :</td>
                                    <td class="text-end">Rs359.96</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      Discount{" "}
                                      <span class="text-muted">(VELZON15)</span>{" "}
                                      : :
                                    </td>
                                    <td class="text-end">-Rs53.99</td>
                                  </tr>
                                  <tr>
                                    <td>Shipping Charge :</td>
                                    <td class="text-end">Rs65.00</td>
                                  </tr>
                                  <tr>
                                    <td>Estimated Tax :</td>
                                    <td class="text-end">Rs44.99</td>
                                  </tr>
                                  <tr class="border-top border-top-dashed">
                                    <th scope="row">Total (USD) :</th>
                                    <th class="text-end">Rs415.96</th>
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

                <div class="card">
                  <div class="card-header">
                    <div class="d-sm-flex align-items-center">
                      <h5 class="card-title flex-grow-1 mb-0">Order Status</h5>
                      <div class="flex-shrink-0 mt-2 mt-sm-0"></div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="profile-timeline">
                      <div
                        class="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div class="accordion-item border-0">
                          <div class="accordion-header" id="headingOne">
                            <Link
                              class="accordion-button p-2 shadow-none"
                              data-bs-toggle="collapse"
                              to="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 avatar-xs">
                                  <div class="avatar-title bg-success rounded-circle">
                                    <i class="ri-shopping-bag-line"></i>
                                  </div>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                  <h6 class="fs-15 mb-0 fw-semibold">
                                    Order Placed -{" "}
                                    <span class="fw-normal">
                                      Wed, 15 Dec 2024
                                    </span>
                                  </h6>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body ms-2 ps-5 pt-0">
                              <h6 class="mb-1">An order has been placed.</h6>
                              <p class="text-muted">
                                Wed, 15 Dec 2024 - 05:34PM
                              </p>

                              <h6 class="mb-1">
                                Seller has processed your order.
                              </h6>
                              <p class="text-muted mb-0">
                                Thu, 16 Dec 2024 - 5:48AM
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item border-0">
                          <div class="accordion-header" id="headingTwo">
                            <Link
                              class="accordion-button p-2 shadow-none"
                              data-bs-toggle="collapse"
                              to="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 avatar-xs">
                                  <div class="avatar-title bg-success rounded-circle">
                                    <i class="mdi mdi-gift-outline"></i>
                                  </div>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                  <h6 class="fs-15 mb-1 fw-semibold">
                                    Packed -{" "}
                                    <span class="fw-normal">
                                      Thu, 16 Dec 2024
                                    </span>
                                  </h6>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div
                            id="collapseTwo"
                            class="accordion-collapse collapse show"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body ms-2 ps-5 pt-0">
                              <h6 class="mb-1">
                                Your Item has been picked up by courier partner
                              </h6>
                              <p class="text-muted mb-0">
                                Fri, 17 Dec 2024 - 9:45AM
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item border-0">
                          <div class="accordion-header" id="headingThree">
                            <Link
                              class="accordion-button p-2 shadow-none"
                              data-bs-toggle="collapse"
                              to="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 avatar-xs">
                                  <div class="avatar-title bg-success rounded-circle">
                                    <i class="ri-truck-line"></i>
                                  </div>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                  <h6 class="fs-15 mb-1 fw-semibold">
                                    Shipping -{" "}
                                    <span class="fw-normal">
                                      Thu, 16 Dec 2024
                                    </span>
                                  </h6>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div
                            id="collapseThree"
                            class="accordion-collapse collapse show"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body ms-2 ps-5 pt-0">
                              <h6 class="fs-14">
                                RQK Logistics - MFDS1400457854
                              </h6>
                              <h6 class="mb-1">Your item has been shipped.</h6>
                              <p class="text-muted mb-0">
                                Sat, 18 Dec 2024 - 4.54PM
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item border-0">
                          <div class="accordion-header" id="headingFour">
                            <Link
                              class="accordion-button p-2 shadow-none"
                              data-bs-toggle="collapse"
                              to="#collapseFour"
                              aria-expanded="false"
                            >
                              <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 avatar-xs">
                                  <div class="avatar-title bg-light text-success rounded-circle">
                                    <i class="ri-takeaway-fill"></i>
                                  </div>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                  <h6 class="fs-14 mb-0 fw-semibold">
                                    Out For Delivery
                                  </h6>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div class="accordion-item border-0">
                          <div class="accordion-header" id="headingFive">
                            <Link
                              class="accordion-button p-2 shadow-none"
                              data-bs-toggle="collapse"
                              to="#collapseFile"
                              aria-expanded="false"
                            >
                              <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 avatar-xs">
                                  <div class="avatar-title bg-light text-success rounded-circle">
                                    <i class="mdi mdi-package-variant"></i>
                                  </div>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                  <h6 class="fs-14 mb-0 fw-semibold">
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

              <div class="col-xl-3">
                <div class="card">
                  <div class="card-header">
                    <div class="d-flex">
                      <h5 class="card-title flex-grow-1 mb-0">
                        <i class="mdi mdi-truck-fast-outline align-middle me-1 text-muted"></i>{" "}
                        Logistics Details
                      </h5>
                      <div class="flex-shrink-0">
                        <Link
                          to="#;"
                          class="badge bg-primary-subtle text-primary fs-11"
                        >
                          Track Order
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="text-center">
                      <img
                        src="https://media1.giphy.com/media/QxkMQ5sGmvoFr8YlR9/giphy.gif?cid=6c09b952txamu8xuoavh9yysf6qf5837cj8yc5kd4xojja2l&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
                        trigger="loop"
                        colors="primary:#405189,secondary:#0ab39c"
                        style={{ width: "180px", height: "120px" }}
                        alt=""
                      ></img>
                      <h5 class="fs-16 mt-2">RQK Logistics</h5>
                      <p class="text-muted mb-0">ID: MFDS1400457854</p>
                      <p class="text-muted mb-0">Payment Mode : Debit Card</p>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">
                    <div class="d-flex">
                      <h5 class="card-title flex-grow-1 mb-0">
                        Customer Details
                      </h5>
                      <div class="flex-shrink-0">
                        <Link to="#;" class="link-secondary">
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mb-0 vstack gap-3">
                      <li>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"
                              alt=""
                              class="avatar-sm rounded"
                            />
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h6 class="fs-14 mb-1">Joseph Parkers</h6>
                            <p class="text-muted mb-0">Customer</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <i class="ri-mail-line me-2 align-middle text-muted fs-16"></i>
                        josephparker@gmail.com
                      </li>
                      <li>
                        <i class="ri-phone-line me-2 align-middle text-muted fs-16"></i>
                        +(256) 245451 441
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">
                    <h5 class="card-title mb-0">
                      <i class="ri-map-pin-line align-middle me-1 text-muted"></i>{" "}
                      Billing Address
                    </h5>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled vstack gap-2 fs-13 mb-0">
                      <li class="fw-medium fs-14">Joseph Parker</li>
                      <li>+(256) 245451 451</li>
                      <li>2186 Joyce Street Rocky Mount</li>
                      <li>New York - 25645</li>
                      <li>United States</li>
                    </ul>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">
                    <h5 class="card-title mb-0">
                      <i class="ri-map-pin-line align-middle me-1 text-muted"></i>{" "}
                      Shipping Address
                    </h5>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled vstack gap-2 fs-13 mb-0">
                      <li class="fw-medium fs-14">Joseph Parker</li>
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
