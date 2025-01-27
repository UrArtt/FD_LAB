import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate(); // Tworzymy instancję navigate

  // Funkcja do obliczania łącznej ceny
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity, 0
    );
  };

  // Funkcja do usuwania produktu z koszyka
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Zapisz do localStorage
  };

  // Funkcja do zmiany ilości produktu w koszyku
  const updateQuantity = (id, action) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        // Jeśli akcja to '-' i ilość jest 1, usuwamy produkt
        if (action === '-' && item.quantity === 1) {
          removeItem(id);
          return null; // Zwracamy null, ponieważ produkt zostanie usunięty
        }
        // Jeśli akcja to '-' i ilość > 1, zmniejszamy ilość o 1
        if (action === '-' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        // Jeśli akcja to '+', zwiększamy ilość o 1
        if (action === '+') {
          return { ...item, quantity: item.quantity + 1 };
        }
      }
      return item; // Zwracamy produkt bez zmian, jeśli nie pasuje do id
    }).filter(item => item !== null); // Usuwamy null (produkt usunięty)

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Zapisz do localStorage
  };

  const handleCheckout = () => {
    navigate("/Order"); // Przekierowuje na stronę Order
  };

  return (
    <div className="cart-container">
      <div className="cart-summary">
        <div className="summary-title">Podsumowanie Koszyka</div>
        {cartItems.length === 0 ? (
          <div className="empty-cart-message">Twój koszyk jest pusty.</div>
        ) : (
          <div className="summary-items">
            {cartItems.map((item) => (
              <div className="item" key={item.id}>
                <div className="item-name">{item.name}</div>
                <div className="item-price">${(item.price * item.quantity).toFixed(2)}</div>
                <div className="item-quantity">
                  <button
                    onClick={() => updateQuantity(item.id, '-')}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, '+')}
                  >
                    +
                  </button>
                </div>
                <div className="item-remove">
                  <button onClick={() => removeItem(item.id)}>Usuń</button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="summary-footer">
          <div className="total">
            <span>Łącznie: ${calculateTotal().toFixed(2)}</span>
          </div>
          <button
            className="checkout-button"
            disabled={cartItems.length === 0}
            onClick={handleCheckout}>
            Przejdź do płatności
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
