import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
  // Funkcja obliczająca łączną cenę
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
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
                <div className="item-price">${item.price.toFixed(2)}</div>
                <div className="item-quantity">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
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
          >
            Przejdź do płatności
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
