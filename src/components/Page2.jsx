import React, { useEffect, useState } from "react";
import "./Page2.css";

const Page2 = ({ addToCart, cartItems }) => {
  const [product, setProduct] = useState(null); // Stan dla jednego produktu
  const [loading, setLoading] = useState(true); // Stan ładowania
  const [error, setError] = useState(null); // Stan błędu

  // Pobieranie danych z JSON Server
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("http://localhost:3000/products"); // Adres JSON Server
        if (!response.ok) {
          throw new Error("Błąd podczas pobierania danych z JSON Server");
        }
        const data = await response.json();

        // Znajdź produkt o konkretnym ID (np. "2")
        const selectedProduct = data.find((item) => item.id === "2");
        setProduct(selectedProduct);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  // Funkcja dodawania produktu do koszyka
  const addToCartHandler = () => {
    addToCart(product);
    alert(`Dodano produkt "${product.name}" do koszyka.`);
  };

  if (loading) {
    return <div>Ładowanie...</div>;
  }

  if (error) {
    return <div>Błąd: {error}</div>;
  }

  if (!product) {
    return <div>Nie znaleziono produktu.</div>;
  }

  return (
    <div className="page1-container">
      <div className="page1-main">
        {/* Sekcja produktu */}
        <div className="page1-product-section">
          <div className="page1-product-image">
            <img
              src={product.image}
              alt={product.name}
              className="page1-product-placeholder"
            />
          </div>
          <div className="page1-product-details">
            <h1 className="page1-product-title">{product.name}</h1>
            <p className="page1-product-description">{product.description}</p>
            <div className="page1-product-specifications">
              <h2 className="page1-specifications-title">Specyfikacje</h2>
              <ul>
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
              <div className="page1-product-price">${product.price}</div>
            </div>
            <button
              className="page1-add-to-cart"
              onClick={addToCartHandler} // Dodanie produktu do koszyka
            >
              Dodaj do koszyka
            </button>
          </div>
        </div>
        {/* Sekcja opinii */}
        <div className="page1-reviews-section">
          <h2 className="page1-reviews-title">Opinie</h2>
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <div key={index} className="page1-review">
                <span className="page1-review-author">{review.author}</span>
                <div className="page1-review-rating">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <span key={starIndex} className="star">⭐</span>
                  ))}
                </div>
                <p className="page1-review-text">{review.text}</p>
              </div>
            ))
          ) : (
            <p className="page1-no-reviews">Brak opinii</p>
          )}
        </div>
        {/* Wyświetlanie koszyka */}
        <div className="page1-cart-section">
          <h2 className="page1-cart-title">Koszyk</h2>
          {cartItems.length > 0 ? (
            <ul className="page1-cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="page1-cart-item">
                  {item.name} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          ) : (
            <p className="page1-cart-empty">Koszyk jest pusty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page2;
