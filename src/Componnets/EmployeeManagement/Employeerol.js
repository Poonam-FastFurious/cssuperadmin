import React from 'react';
import { Link } from 'react-router-dom';

function Employeerol() {
      return (
            <>
                  <div className="main-content">
                        <div className="page-content">
                              <div className="container-fluid">
                                    <div className="row">
                                          <div className="col-12">
                                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                                      <h4 className="mb-sm-0">Transactions</h4>

                                                      <div className="page-title-right">
                                                            <ol className="breadcrumb m-0">
                                                                  <li className="breadcrumb-item">
                                                                        <Link to="">Proven Ro</Link>
                                                                  </li>
                                                                  <li className="breadcrumb-item active">Transactions</li>
                                                            </ol>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="row">
                                          <div className="col-lg-12">
                                                <div className="card" id="orderList">
                                                      <div className="card-header border-0">
                                                            <div className="row align-items-center gy-3">
                                                                  <div className="col-sm">
                                                                        <h5 className="card-title mb-0">Transactions</h5>
                                                                  </div>
                                                                  <div className="col-sm-auto">
                                                                        <div className="d-flex gap-1 flex-wrap">
                                                                              <button type="button" className="btn btn-info">
                                                                                    <i className="ri-file-download-line align-bottom me-1"></i>
                                                                                    Import
                                                                              </button>
                                                                              <button className="btn btn-soft-danger" id="remove-actions">
                                                                                    <i className="ri-delete-bin-2-line"></i>
                                                                              </button>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>

                                                      <div className="container">
                                                            <div className="row">
                                                                  <div className="col-3 mb-3">
                                                                        <div className="form-check">
                                                                              <input className="form-check-input" type="checkbox" id="formCheck6" checked />
                                                                              <label className="form-check-label" htmlFor="formCheck6">
                                                                                    Checkbox Primary
                                                                              </label>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-3 mb-3">
                                                                        <div className="form-check form-check-secondary">
                                                                              <input className="form-check-input" type="checkbox" id="formCheck7" checked />
                                                                              <label className="form-check-label" htmlFor="formCheck7">
                                                                                    Checkbox Secondary
                                                                              </label>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-3 mb-3">
                                                                        <div className="form-check form-check-success">
                                                                              <input className="form-check-input" type="checkbox" id="formCheck8" checked />
                                                                              <label className="form-check-label" htmlFor="formCheck8">
                                                                                    Checkbox Success
                                                                              </label>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-3 mb-3">
                                                                        <div className="form-check form-check-warning">
                                                                              <input className="form-check-input" type="checkbox" id="formCheck9" checked />
                                                                              <label className="form-check-label" htmlFor="formCheck9">
                                                                                    Checkbox Warning
                                                                              </label>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="row">
                                                                  <div className="col-3 mb-3">
                                                                        <div className="form-check form-check-danger">
                                                                              <input className="form-check-input" type="checkbox" id="formCheck10" checked />
                                                                              <label className="form-check-label" htmlFor="formCheck10">
                                                                                    Checkbox Danger
                                                                              </label>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-3 mb-3">
                                                                        <div className="form-check form-check-info">
                                                                              <input className="form-check-input" type="checkbox" id="formCheck11" checked />
                                                                              <label className="form-check-label" htmlFor="formCheck11">
                                                                                    Checkbox Info
                                                                              </label>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-3 mb-3">
                                                                        <div className="form-check form-check-dark">
                                                                              <input className="form-check-input" type="checkbox" id="formCheck12" checked />
                                                                              <label className="form-check-label" htmlFor="formCheck12">
                                                                                    Checkbox Dark
                                                                              </label>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-3 mb-3">
                                                                        <div className="form-check form-check-outline form-check-primary">
                                                                              <input className="form-check-input" type="checkbox" id="formCheck13" checked />
                                                                              <label className="form-check-label" htmlFor="formCheck13">
                                                                                    Checkbox Outline Primary
                                                                              </label>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="row">
                                                                  <div className="col-3 mb-3">
                                                                        <div className="form-check form-check-outline form-check-secondary">
                                                                              <input className="form-check-input" type="checkbox" id="formCheck14" checked />
                                                                              <label className="form-check-label" htmlFor="formCheck14">
                                                                                    Checkbox Outline Secondary
                                                                              </label>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-3 mb-3">
                                                                        <div className="form-check form-check-outline form-check-success">
                                                                              <input className="form-check-input" type="checkbox" id="formCheck15" checked />
                                                                              <label className="form-check-label" htmlFor="formCheck15">
                                                                                    Checkbox Outline Success
                                                                              </label>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-3 mb-3">
                                                                        <div className="form-check form-check-outline form-check-warning">
                                                                              <input className="form-check-input" type="checkbox" id="formCheck16" checked />
                                                                              <label className="form-check-label" htmlFor="formCheck16">
                                                                                    Checkbox Outline Warning
                                                                              </label>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-3 mb-3">
                                                                        <div className="form-check form-check-outline form-check-danger">
                                                                              <input className="form-check-input" type="checkbox" id="formCheck17" checked />
                                                                              <label className="form-check-label" htmlFor="formCheck17">
                                                                                    Checkbox Outline Danger
                                                                              </label>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="row">
                                                                  <div className="col-3 mb-3">
                                                                        <div className="form-check form-check-outline form-check-info">
                                                                              <input className="form-check-input" type="checkbox" id="formCheck18" checked />
                                                                              <label className="form-check-label" htmlFor="formCheck18">
                                                                                    Checkbox Outline Info
                                                                              </label>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-3 mb-3">
                                                                        <div className="form-check form-check-outline form-check-dark">
                                                                              <input className="form-check-input" type="checkbox" id="formCheck19" checked />
                                                                              <label className="form-check-label" htmlFor="formCheck19">
                                                                                    Checkbox Outline Dark
                                                                              </label>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-3 mb-3">
                                                                        <div className="form-check form-check-outline form-check-light">
                                                                              <input className="form-check-input" type="checkbox" id="formCheck20" checked />
                                                                              <label className="form-check-label" htmlFor="formCheck20">
                                                                                    Checkbox Outline Light
                                                                              </label>
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

export default Employeerol;
