import React from "react";
import orders from "./orders";
import "./OnlineOrders.css";
function OnlineOrders() {
  const allOrders = orders.map((item) => (
    <div key={item.id} className="order-card">
      <img src={item.img} alt="" className="order-image" />
      <h4 className="order-name">{item.name}</h4>
      <div className="prices">
        <p className="item-price">Price :
          <strike>{item.price}</strike>
        </p>
        <p className="discounted-item-price">{item.discountedPrice}</p>
      </div>
      <div className="buttons">
        <button type="button" className="buy-button">
          Buy
        </button>
        <button type="button" className="add-button">
          Add to cart
        </button>
      </div>
    </div>
  ));
  return (
    <div className="orders-section">
      <div className="order-title">Coffee</div>
      <div className="all-orders">{allOrders}</div>
    </div>
  );
}

export default OnlineOrders;
