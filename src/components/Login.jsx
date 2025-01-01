import React, { useState, useEffect } from 'react';

function Login() {
  const [showModal, setShowModal] = useState(true);  // Modal is shown by default

  useEffect(() => {
    // When the component mounts, show the modal
    setShowModal(true);
  }, []);

  return (
    <>
      {/* Introduction Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="section-title text-dark mb-4">
            <span className="text-primary">Welcome Back</span> to Your Account
          </h2>
          <p className="text-muted mb-5">
            Please log in to access your personalized dashboard and exclusive content.
          </p>
        </div>
      </section>

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? 'show' : ''}`}
        id="loginModal"
        tabIndex="-1"
        style={{ display: showModal ? 'block' : 'none' }}
        aria-labelledby="loginModalLabel"
        aria-hidden={!showModal}
      >
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '500px' }}>
          <div className="modal-content rounded-4 shadow-lg">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title" id="loginModalLabel">
                Login to Your Account
              </h5>
            </div>
            <div className="modal-body p-4">
              <form>
                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="form-label text-muted fw-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label htmlFor="password" className="form-label text-muted fw-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {/* Forgot Password Link */}
                <div className="mb-4 text-end">
                  <a href="#!" className="text-muted">
                    Forgot Password?
                  </a>
                </div>

                {/* Submit Button */}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-dark btn-lg">
                    Login
                  </button>
                </div>

                {/* Sign Up Prompt */}
                <div className="text-center mt-4">
                  <p className="text-muted mb-0">
                    Don't have an account?{' '}
                    <a href="#!" className="text-primary">
                      Sign Up
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0">&copy; 2025 Your Company. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Login;
