import React from 'react'

function Bestselling() {
  return (
    <div>
      <section className="py-5 overflow-hidden">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <div className="section-header d-flex flex-wrap justify-content-between my-5">
          <h2 className="section-title">Best selling products</h2>
          <div className="d-flex align-items-center">
            <a href="#" className="btn-link text-decoration-none">
              View All Categories →
            </a>
            <div className="swiper-buttons">
              <button className="swiper-prev products-carousel-prev btn btn-primary">
                ❮
              </button>
              <button className="swiper-next products-carousel-next btn btn-primary">
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="products-carousel swiper">
          <div className="swiper-wrapper">
            <div className="product-item swiper-slide">
              <span className="badge bg-success position-absolute m-3">
                -15%
              </span>
              <a href="#" className="btn-wishlist">
                <svg width={24} height={24}>
                  <use xlinkHref="#heart" />
                </svg>
              </a>
              <figure>
                <a href="index.html" title="Product Title">
                  <img src="images/thumb-tomatoes.png" className="tab-image" />
                </a>
              </figure>
              <h3>Sunstar Fresh Melon Juice</h3>
              <span className="qty">1 Unit</span>
              <span className="rating">
                <svg width={24} height={24} className="text-primary">
                  <use xlinkHref="#star-solid" />
                </svg>{" "}
                4.5
              </span>
              <span className="price">$18.00</span>
              <div className="d-flex align-items-center justify-content-between">
                <div className="input-group product-qty">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-left-minus btn btn-danger btn-number"
                      data-type="minus"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#minus" />
                      </svg>
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control input-number"
                    defaultValue={1}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-right-plus btn btn-success btn-number"
                      data-type="plus"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#plus" />
                      </svg>
                    </button>
                  </span>
                </div>
                <a href="#" className="nav-link">
                  Add to Cart <iconify-icon icon="uil:shopping-cart" />
                </a>
              </div>
            </div>
            <div className="product-item swiper-slide">
              <span className="badge bg-success position-absolute m-3">
                -15%
              </span>
              <a href="#" className="btn-wishlist">
                <svg width={24} height={24}>
                  <use xlinkHref="#heart" />
                </svg>
              </a>
              <figure>
                <a href="index.html" title="Product Title">
                  <img
                    src="images/thumb-tomatoketchup.png"
                    className="tab-image"
                  />
                </a>
              </figure>
              <h3>Sunstar Fresh Melon Juice</h3>
              <span className="qty">1 Unit</span>
              <span className="rating">
                <svg width={24} height={24} className="text-primary">
                  <use xlinkHref="#star-solid" />
                </svg>{" "}
                4.5
              </span>
              <span className="price">$18.00</span>
              <div className="d-flex align-items-center justify-content-between">
                <div className="input-group product-qty">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-left-minus btn btn-danger btn-number"
                      data-type="minus"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#minus" />
                      </svg>
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control input-number"
                    defaultValue={1}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-right-plus btn btn-success btn-number"
                      data-type="plus"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#plus" />
                      </svg>
                    </button>
                  </span>
                </div>
                <a href="#" className="nav-link">
                  Add to Cart <iconify-icon icon="uil:shopping-cart" />
                </a>
              </div>
            </div>
            <div className="product-item swiper-slide">
              <span className="badge bg-success position-absolute m-3">
                -15%
              </span>
              <a href="#" className="btn-wishlist">
                <svg width={24} height={24}>
                  <use xlinkHref="#heart" />
                </svg>
              </a>
              <figure>
                <a href="index.html" title="Product Title">
                  <img src="images/thumb-bananas.png" className="tab-image" />
                </a>
              </figure>
              <h3>Sunstar Fresh Melon Juice</h3>
              <span className="qty">1 Unit</span>
              <span className="rating">
                <svg width={24} height={24} className="text-primary">
                  <use xlinkHref="#star-solid" />
                </svg>{" "}
                4.5
              </span>
              <span className="price">$18.00</span>
              <div className="d-flex align-items-center justify-content-between">
                <div className="input-group product-qty">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-left-minus btn btn-danger btn-number"
                      data-type="minus"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#minus" />
                      </svg>
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control input-number"
                    defaultValue={1}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-right-plus btn btn-success btn-number"
                      data-type="plus"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#plus" />
                      </svg>
                    </button>
                  </span>
                </div>
                <a href="#" className="nav-link">
                  Add to Cart <iconify-icon icon="uil:shopping-cart" />
                </a>
              </div>
            </div>
            <div className="product-item swiper-slide">
              <span className="badge bg-success position-absolute m-3">
                -15%
              </span>
              <a href="#" className="btn-wishlist">
                <svg width={24} height={24}>
                  <use xlinkHref="#heart" />
                </svg>
              </a>
              <figure>
                <a href="index.html" title="Product Title">
                  <img src="images/thumb-bananas.png" className="tab-image" />
                </a>
              </figure>
              <h3>Sunstar Fresh Melon Juice</h3>
              <span className="qty">1 Unit</span>
              <span className="rating">
                <svg width={24} height={24} className="text-primary">
                  <use xlinkHref="#star-solid" />
                </svg>{" "}
                4.5
              </span>
              <span className="price">$18.00</span>
              <div className="d-flex align-items-center justify-content-between">
                <div className="input-group product-qty">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-left-minus btn btn-danger btn-number"
                      data-type="minus"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#minus" />
                      </svg>
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control input-number"
                    defaultValue={1}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-right-plus btn btn-success btn-number"
                      data-type="plus"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#plus" />
                      </svg>
                    </button>
                  </span>
                </div>
                <a href="#" className="nav-link">
                  Add to Cart <iconify-icon icon="uil:shopping-cart" />
                </a>
              </div>
            </div>
            <div className="product-item swiper-slide">
              <a href="#" className="btn-wishlist">
                <svg width={24} height={24}>
                  <use xlinkHref="#heart" />
                </svg>
              </a>
              <figure>
                <a href="index.html" title="Product Title">
                  <img src="images/thumb-tomatoes.png" className="tab-image" />
                </a>
              </figure>
              <h3>Sunstar Fresh Melon Juice</h3>
              <span className="qty">1 Unit</span>
              <span className="rating">
                <svg width={24} height={24} className="text-primary">
                  <use xlinkHref="#star-solid" />
                </svg>{" "}
                4.5
              </span>
              <span className="price">$18.00</span>
              <div className="d-flex align-items-center justify-content-between">
                <div className="input-group product-qty">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-left-minus btn btn-danger btn-number"
                      data-type="minus"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#minus" />
                      </svg>
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control input-number"
                    defaultValue={1}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-right-plus btn btn-success btn-number"
                      data-type="plus"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#plus" />
                      </svg>
                    </button>
                  </span>
                </div>
                <a href="#" className="nav-link">
                  Add to Cart <iconify-icon icon="uil:shopping-cart" />
                </a>
              </div>
            </div>
            <div className="product-item swiper-slide">
              <a href="#" className="btn-wishlist">
                <svg width={24} height={24}>
                  <use xlinkHref="#heart" />
                </svg>
              </a>
              <figure>
                <a href="index.html" title="Product Title">
                  <img
                    src="images/thumb-tomatoketchup.png"
                    className="tab-image"
                  />
                </a>
              </figure>
              <h3>Sunstar Fresh Melon Juice</h3>
              <span className="qty">1 Unit</span>
              <span className="rating">
                <svg width={24} height={24} className="text-primary">
                  <use xlinkHref="#star-solid" />
                </svg>{" "}
                4.5
              </span>
              <span className="price">$18.00</span>
              <div className="d-flex align-items-center justify-content-between">
                <div className="input-group product-qty">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-left-minus btn btn-danger btn-number"
                      data-type="minus"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#minus" />
                      </svg>
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control input-number"
                    defaultValue={1}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-right-plus btn btn-success btn-number"
                      data-type="plus"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#plus" />
                      </svg>
                    </button>
                  </span>
                </div>
                <a href="#" className="nav-link">
                  Add to Cart <iconify-icon icon="uil:shopping-cart" />
                </a>
              </div>
            </div>
            <div className="product-item swiper-slide">
              <a href="#" className="btn-wishlist">
                <svg width={24} height={24}>
                  <use xlinkHref="#heart" />
                </svg>
              </a>
              <figure>
                <a href="index.html" title="Product Title">
                  <img src="images/thumb-bananas.png" className="tab-image" />
                </a>
              </figure>
              <h3>Sunstar Fresh Melon Juice</h3>
              <span className="qty">1 Unit</span>
              <span className="rating">
                <svg width={24} height={24} className="text-primary">
                  <use xlinkHref="#star-solid" />
                </svg>{" "}
                4.5
              </span>
              <span className="price">$18.00</span>
              <div className="d-flex align-items-center justify-content-between">
                <div className="input-group product-qty">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-left-minus btn btn-danger btn-number"
                      data-type="minus"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#minus" />
                      </svg>
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control input-number"
                    defaultValue={1}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-right-plus btn btn-success btn-number"
                      data-type="plus"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#plus" />
                      </svg>
                    </button>
                  </span>
                </div>
                <a href="#" className="nav-link">
                  Add to Cart <iconify-icon icon="uil:shopping-cart" />
                </a>
              </div>
            </div>
            <div className="product-item swiper-slide">
              <a href="#" className="btn-wishlist">
                <svg width={24} height={24}>
                  <use xlinkHref="#heart" />
                </svg>
              </a>
              <figure>
                <a href="index.html" title="Product Title">
                  <img src="images/thumb-bananas.png" className="tab-image" />
                </a>
              </figure>
              <h3>Sunstar Fresh Melon Juice</h3>
              <span className="qty">1 Unit</span>
              <span className="rating">
                <svg width={24} height={24} className="text-primary">
                  <use xlinkHref="#star-solid" />
                </svg>{" "}
                4.5
              </span>
              <span className="price">$18.00</span>
              <div className="d-flex align-items-center justify-content-between">
                <div className="input-group product-qty">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-left-minus btn btn-danger btn-number"
                      data-type="minus"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#minus" />
                      </svg>
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control input-number"
                    defaultValue={1}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-right-plus btn btn-success btn-number"
                      data-type="plus"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#plus" />
                      </svg>
                    </button>
                  </span>
                </div>
                <a href="#" className="nav-link">
                  Add to Cart <iconify-icon icon="uil:shopping-cart" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* / products-carousel */}
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Bestselling
