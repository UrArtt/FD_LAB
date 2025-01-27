import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products?_limit=3');
        if (!response.ok) throw new Error('Błąd pobierania danych');
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

  if (isLoading) return <div className="loading">Ładowanie...</div>;
  if (error) return <div className="error">Błąd: {error}</div>;

  return (
    <div className="home-container">
      <div className="home-hero-section">
        <h1>Shoppen</h1>
      </div>

      <div className="home-featured-products-section">
        <h2>Featured Products</h2>
        <div className="home-product-list">
          {featuredProducts.map((product, index) => (
            <div className="home-product-card" key={product.id}>
              <img
                className="home-product-image"
                src={product.image}
                alt={product.name}
              />
              <div className="home-product-details">
                <h3>{product.name}</h3>
                <p className="home-product-price">
                  {product.price}
                </p>
                <Link to={`/Page${index + 1}`} className="home-view-details"> View Details </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
