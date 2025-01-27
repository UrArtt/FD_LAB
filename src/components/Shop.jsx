import React, { useState, useEffect } from 'react';
import './Shop.css';
import ProductName from './ProductName';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setFeaturedProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="shop-container">
      <main className="shop-main">
        <h1 className="shop-title">Browse Products</h1>
        <div className="shop-products">
          {featuredProducts.map((product, index) => (
            <div className="shop-product-card" key={product.id}>
              <img
                className="shop-product-image"
                src={product.image}
                alt={product.name}
              />
               <div className="product-info-container">
              <ProductName name={product.name} price={product.price} />
              <Link
                to={`/Page${index + 1}`}  // Dynamiczny link na podstawie indeksu
                className="shop-view-details"
              >
                View Details
              </Link>
            </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shop;
