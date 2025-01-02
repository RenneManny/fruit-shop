import React from "react";

function UserTable() {
  return (
    <>
      <section className="py-5">
        <div className="container-fluid">
          <div className="bg-white py-5 my-5 rounded-4 shadow-lg">
            <div className="container">
              <h2 className="text-primary text-center mb-4 font-weight-bold">
                User Details
              </h2>

              {/* User Table */}
              <div className="table-responsive">
                <div className="card border-0">
                  <div className="card-body">
                    <table className="table table-striped table-hover table-bordered text-center align-middle">
                      <thead className="table-primary">
                        <tr>
                          <th>#</th>
                          <th>Full Name</th>
                          <th>Email Address</th>
                          <th>Phone Number</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Example Row */}
                        <tr className="hover-bg-light">
                          <td>1</td>
                          <td>John Doe</td>
                          <td>johndoe@example.com</td>
                          <td>+91 9876543210</td>
                          <td>
                            <button className="btn btn-info btn-sm me-2 action-btn">
                              <i className="bi bi-eye"></i> View
                            </button>
                            <button className="btn btn-warning btn-sm me-2 action-btn">
                              <i className="bi bi-pencil"></i> Edit
                            </button>
                            <button className="btn btn-danger btn-sm action-btn">
                              <i className="bi bi-trash"></i> Delete
                            </button>
                          </td>
                        </tr>
                        {/* Repeat Rows as Needed */}
                        <tr className="hover-bg-light">
                          <td>2</td>
                          <td>Jane Smith</td>
                          <td>janesmith@example.com</td>
                          <td>+91 9876543220</td>
                          <td>
                            <button className="btn btn-info btn-sm me-2 action-btn">
                              <i className="bi bi-eye"></i> View
                            </button>
                            <button className="btn btn-warning btn-sm me-2 action-btn">
                              <i className="bi bi-pencil"></i> Edit
                            </button>
                            <button className="btn btn-danger btn-sm action-btn">
                              <i className="bi bi-trash"></i> Delete
                            </button>
                          </td>
                        </tr>
                        {/* More rows can go here */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hover-bg-light:hover {
          background-color: #f7f7f7;
        }
        .action-btn {
          font-weight: 600;
          transition: background-color 0.3s, transform 0.3s;
        }
        .action-btn:hover {
          transform: scale(1.05);
          background-color: rgba(0, 0, 0, 0.1);
        }
        .table th,
        .table td {
          padding: 12px 15px;
        }
        .table-primary {
          background: linear-gradient(45deg, #007bff, #6c757d);
          color: white;
          font-weight: bold;
        }
        .card-body {
          padding: 0;
        }
        .card {
          border-radius: 15px;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}

export default UserTable;
