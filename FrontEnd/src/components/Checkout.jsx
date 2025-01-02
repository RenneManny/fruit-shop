import React from 'react';

function Checkout() {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          {/* Shipping Details Section */}
          <div className="col-lg-8 col-md-12">
            <h4 className="mb-4">Shipping Details</h4>
            <form>
              {/* Name and Email Fields Grouped in One Row */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter full name" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
              </div>

              {/* Address, City, State, Zip Code Fields Grouped in One Row */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="Enter address" />
                </div>
                <div className="col-md-3">
                  <label htmlFor="city" className="form-label">City</label>
                  <input type="text" className="form-control" id="city" placeholder="Enter city" />
                </div>
                <div className="col-md-3">
                  <label htmlFor="state" className="form-label">State</label>
                  <input type="text" className="form-control" id="state" placeholder="Enter state" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="zipCode" className="form-label">Zip Code</label>
                  <input type="text" className="form-control" id="zipCode" placeholder="Enter zip code" />
                </div>
              </div>

              {/* Payment Options (optional for now) */}
              <button type="submit" className="btn btn-primary w-50 mt-4">Confirm Order</button> {/* Button width changed */}
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                {/* Product List with Name and Image */}
                <div className="order-summary">
                  <div className="d-flex mb-3">
                    <img src="https://via.placeholder.com/50" alt="Product" className="img-fluid me-3" />
                    <div>
                      <h6>Product Name</h6>
                      <p>₹ 200</p>
                    </div>
                  </div>

                  <div className="d-flex mb-3">
                    <img src="https://via.placeholder.com/50" alt="Product" className="img-fluid me-3" />
                    <div>
                      <h6>Product Name 2</h6>
                      <p>₹ 300</p>
                    </div>
                  </div>
                  
                </div>

                {/* Order Details */}
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td>₹ 500</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>₹ 20</td>
                    </tr>
                    <tr>
                      <td><strong>Total</strong></td>
                      <td><strong>₹ 520</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
