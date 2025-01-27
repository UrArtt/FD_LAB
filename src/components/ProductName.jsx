import React from 'react';
import './ProductName.css';

const ProductName = ({ name, price, details }) => {
  return (
    <div className="product-info">
      <div className="product-name">{name}</div>
      <div className="product-price">{price}</div>
      <div className="product-details">{details}</div>
    </div>
  );
};

export default ProductName;
