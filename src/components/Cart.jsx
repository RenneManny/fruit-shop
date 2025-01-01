import React from 'react'

function Cart() {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    {/* Cart Table */}
                    <div className="col-lg-8 col-md-12">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead className="table-light">
                                    <tr>
                                        <th>Remove</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center">
                                            <button className="btn btn-danger btn-sm">
                                                <i className="far fa-window-close" />
                                            </button>
                                        </td>
                                        <td className="text-center">
                                            <img
                                                src="https://cdn.pixabay.com/photo/2023/07/24/07/24/flower-wallpaper-8146421_1280.png"
                                                alt="Product"
                                                className="img-fluid"
                                                style={{ width: "40px",height:"60px" }}
                                            />
                                        </td>
                                        <td>Product Name</td>
                                        <td>₹ 500</td>
                                        <td>
                                            <div className="input-group">
                                                <button className="btn btn-outline-secondary btn-sm">
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    className="form-control text-center"
                                                    defaultValue={1}
                                                    style={{ maxWidth: 50 }}
                                                />
                                                <button className="btn btn-outline-secondary btn-sm">
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td>₹ 500</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={6} className="text-center text-muted">
                                            Cart is empty
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Total Section */}
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Cart Totals</h5>
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
                                            <td>
                                                <strong>Total</strong>
                                            </td>
                                            <td>
                                                <strong>₹ 520</strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="/Checkout" className="btn btn-primary w-100">
                                    Check Out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Cart