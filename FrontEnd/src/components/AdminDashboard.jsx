import React from "react";
import UserTable from "./UserTable";

function AdminDashboard() {
  return (
    <>
      <section className="py-5">
        <div className="container-fluid">
          {/* Admin Dashboard Section */}
          <div className="row">
            {/* Dashboard Header */}
            <div className="col-12 mb-4">
              <h2 className="text-center text-primary">Admin Dashboard</h2>
            </div>
            {/* Dashboard Cards */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card shadow-lg border-light">
                <div className="card-body text-center py-4">
                  <h5 className="card-title">User Management</h5>
                  <p className="card-text">
                    View and manage user details, including profile updates and
                    status.
                  </p>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#userModal"
                  >
                    Manage Users
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card shadow-lg border-light">
                <div className="card-body text-center py-4">
                  <h5 className="card-title">Order Management</h5>
                  <p className="card-text">
                    View orders placed by customers, process them, and track
                    status.
                  </p>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#orderModal"
                  >
                    Manage Orders
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card shadow-lg border-light">
                <div className="card-body text-center py-4">
                  <h5 className="card-title">Contact Us Messages</h5>
                  <p className="card-text">
                    Review and respond to customer inquiries and feedback.
                  </p>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#contactModal"
                  >
                    View Messages
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card shadow-lg border-light">
                <div className="card-body text-center py-4">
                  <h5 className="card-title">Dashboard Overview</h5>
                  <p className="card-text">
                    Get insights into recent activities, orders, and other
                    stats.
                  </p>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#overviewModal"
                  >
                    View Overview
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* User Management Modal */}
          <div
            className="modal fade"
            id="userModal"
            tabIndex={-1}
            aria-labelledby="userModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="userModalLabel">
                    Manage Users
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body py-4">
                  <div className="list-group">
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <span>John Doe</span>
                      <div>
                        <button className="btn btn-info btn-sm">View</button>
                        <button className="btn btn-warning btn-sm">Edit</button>
                        <button className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <span>Jane Smith</span>
                      <div>
                        <button className="btn btn-info btn-sm">View</button>
                        <button className="btn btn-warning btn-sm">Edit</button>
                        <button className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </div>
                    </div>
                    {/* Add more users as necessary */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Management Modal */}
          <div
            className="modal fade"
            id="orderModal"
            tabIndex={-1}
            aria-labelledby="orderModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="orderModalLabel">
                    Manage Orders
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body py-4">
                  <div className="list-group">
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <span>Order #ORD12345</span>
                      <div>
                        <button className="btn btn-info btn-sm">View</button>
                        <button className="btn btn-success btn-sm">
                          Mark as Shipped
                        </button>
                        <button className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <span>Order #ORD12346</span>
                      <div>
                        <button className="btn btn-info btn-sm">View</button>
                        <button className="btn btn-success btn-sm">
                          Mark as Shipped
                        </button>
                        <button className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </div>
                    </div>
                    {/* Add more orders as necessary */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Messages Modal */}
          <div
            className="modal fade"
            id="contactModal"
            tabIndex={-1}
            aria-labelledby="contactModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="contactModalLabel">
                    Contact Us Messages
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body py-4">
                  <div className="list-group">
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <span>Michael Scott - "Can I get a discount?"</span>
                      <button className="btn btn-warning btn-sm">
                        Respond
                      </button>
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <span>Jim Halpert - "Where is my order?"</span>
                      <button className="btn btn-warning btn-sm">
                        Respond
                      </button>
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </div>
                    {/* Add more messages as necessary */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Modal */}
          <div
            className="modal fade"
            id="overviewModal"
            tabIndex={-1}
            aria-labelledby="overviewModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="overviewModalLabel">
                    Dashboard Overview
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body py-4">
                  <p>
                    Recent statistics and activities will be displayed here.
                  </p>
                  {/* Add content for the overview such as total users, orders, contact messages */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <UserTable /> */}
    </>
  );
}

export default AdminDashboard;
