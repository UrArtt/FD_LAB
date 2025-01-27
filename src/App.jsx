import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import NotFound from "./components/NotFound";
import Order from "./components/Order"
import "./App.css";

const App = () => {
  // Inicjalizacja koszyka z localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Funkcja do dodawania produktu do koszyka
  const addToCart = (product) => {
    // Sprawdzamy, czy produkt jest już w koszyku
    const existingItem = cartItems.find((item) => item.id === product.id);

    let updatedCart;
    if (existingItem) {
      // Jeśli produkt już jest, zwiększamy ilość
      updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Jeśli produktu nie ma, dodajemy go do koszyka
      updatedCart = [
        ...cartItems,
        { ...product, quantity: 1 }, // Dodajemy produkt z ilością 1
      ];
    }

    // Ustawiamy nowy stan koszyka i zapisujemy do localStorage
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Router>
      <div className="container">
        <header className="header">
          <nav className="nav">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/Shop" className="nav-item">Shop</Link>
            <Link to="/Cart" className="nav-item">Cart ({cartItems.length})</Link>
            <Link to="/Contact" className="nav-item">Contact</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Order" element={<Order cartItems={cartItems} />} />
          <Route
            path="/Cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/Page1"
            element={<Page1 addToCart={addToCart} cartItems={cartItems} />}
          />
          <Route
            path="/Page2"
            element={<Page2 addToCart={addToCart} cartItems={cartItems} />}
          />
          <Route
            path="/Page3"
            element={<Page3 addToCart={addToCart} cartItems={cartItems} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="footer">
          <p>© 2023 Shoppen. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
