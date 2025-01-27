import React, { useState } from "react";
import "./Order.css";

const Order = ({ cartItems }) => {
  // Stan do przechowywania danych formularza
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: ""
  });

  // Funkcja do obsługi zmiany wartości w polach formularza
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Obliczanie subtotalu (suma cen wszystkich produktów)
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Stała opłata za przesyłkę
  const shipping = 10.00;

  // Obliczanie całkowitej kwoty (subtotal + shipping)
  const total = subtotal + shipping;

  // Funkcja do obsługi kliknięcia przycisku "Submit Order"
  const handleSubmitOrder = () => {
    // Sprawdzamy, czy wszystkie pola są wypełnione
    const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== "");

    if (allFieldsFilled) {
      alert("Złożono zamówienie!");
    } else {
      alert("Proszę wypełnić wszystkie pola.");
    }
  };

  // Funkcja do sprawdzenia, czy formularz jest wypełniony
  const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

  console.log("Form Data:", formData);  // Dodajemy logi dla debugowania

  return (
    <div className="order-container">
      <div className="order-process">
        <div className="order-summary">
          <div className="order-title">Order Summary</div>
          <div className="order-details">
            <div className="order-row">
              <span className="label">Subtotal</span>
              <span className="value">${subtotal.toFixed(2)}</span>
            </div>
            <div className="order-row">
              <span className="label">Shipping</span>
              <span className="value">${shipping.toFixed(2)}</span>
            </div>
            <div className="order-row total">
              <span className="label">Total</span>
              <span className="value">${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="submit-order">
            <button
              className="submit-btn"
              onClick={handleSubmitOrder}
              disabled={!isFormValid} // Zablokowanie przycisku, jeśli formularz jest niepełny
            >
              Submit Order
            </button>
          </div>
        </div>
        <div className="order-shipping-info">
          <div className="order-shipping-title">Shipping Information</div>
          <div className="order-input-fields">
            <div className="input-row">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-row">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-row">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-row">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-row">
              <label>Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
