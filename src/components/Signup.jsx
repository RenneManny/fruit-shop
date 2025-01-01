import React, { useState, useEffect } from 'react';

function Signup() {
  const [showModal, setShowModal] = useState(true);  // Modal is shown by default

  useEffect(() => {
    // When the component mounts, show the modal
    setShowModal(true);
  }, []);

  return (
    <>
      <section className="py-5">
        <div className="container text-center">
          <h2 className="section-title text-dark mb-4">
            <span className="text-primary">Join Us</span> Today!
          </h2>
          <p className="text-muted mb-5">
            Register to unlock exclusive benefits and features.
          </p>
        </div>
      </section>

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? 'show' : ''}`}
        id="signupModal"
        tabIndex="-1"
        style={{ display: showModal ? 'block' : 'none' }}
        aria-labelledby="signupModalLabel"
        aria-hidden={!showModal}
      >
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '450px' }}>
          <div className="modal-content rounded-4 shadow-lg">
            <div className="modal-header">
              <h5 className="modal-title" id="signupModalLabel">
                Create Your Account
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4">
              <form>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-muted fw-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    id="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
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
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-muted fw-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="password"
                    id="password"
                    placeholder="Create a strong password"
                    required
                  />
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label text-muted fw-medium">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Re-enter your password"
                    required
                  />
                </div>

                {/* Newsletter Subscription */}
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="subscribe"
                  />
                  <label className="form-check-label text-muted" htmlFor="subscribe">
                    Subscribe to our newsletter for updates
                  </label>
                </div>

                {/* Submit Button */}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-dark btn-lg">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;