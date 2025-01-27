import React from "react";
import "./Page1.css";

const Page3 = () => {
  return (
    <div className="page1-container">
    {/* Main Content */}
    <div className="page1-main">
    {/* Product Section */}
    <div className="page1-product-section">
    <div className="page1-product-image">
    <div className="page1-product-placeholder"></div>
    </div>
    <div className="page1-product-details">
    <h1 className="page1-product-title">Product Name</h1>
    <p className="page1-product-description">
    This is a detailed description of the product. It highlights the features
and benefits of the product, providing all necessary information to the
customer.
    </p>
    <div className="page1-product-specifications">
    <h2 className="page1-specifications-title">Specifications</h2>
    <ul>
    <li>Specification 1</li>
    <li>Specification 2</li>
    <li>Specification 3</li>
    </ul>
    <div className="page1-product-price">$49.99</div>
    </div>
    <button className="page1-add-to-cart">Add to Cart</button>
    </div>
    </div>

    {/* Reviews Section */}
    <div className="page1-reviews-section">
    <h2 className="page1-reviews-title">Reviews</h2>
    <div className="page1-review">
    <span className="page1-review-author">User 1</span>
    <p className="page1-review-text">Great product! Highly recommend.</p>
    </div>
    <div className="page1-review">
    <span className="page1-review-author">User 2</span>
    <p className="page1-review-text">Good quality and fast shipping.</p>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Page3;
