import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]); // Stan koszyka

  // Funkcja dodająca produkt do koszyka
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      if (itemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1; // Zwiększa ilość produktu
        return updatedItems;
      }
      return [...prevItems, { ...product, quantity: 1 }]; // Dodaje nowy produkt
    });
  };

  return (
    <Router>
      <div className="container">
        <header className="header">
          <nav className="nav">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/Shop" className="nav-item">Shop</Link>
            <Link to="/Cart" className="nav-item">Cart</Link>
            <Link to="/Contact" className="nav-item">Contact</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/Cart"
            element={<Cart cartItems={cartItems} />}
          />
          <Route
            path="/Page1"
            element={<Page1 addToCart={addToCart} cartItems={cartItems} />}
          />
          <Route
            path="/Page2"
            element={<Page2 addToCart={addToCart} cartItems={cartItems} />}
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
