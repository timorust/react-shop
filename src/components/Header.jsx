import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {

	let total = 0
	props.orders.forEach((el) => total += Number.parseFloat(el.price))

	return (
    <div>
      {props.orders.map(el => (
			<Order key={el.id} item={el} onDelete={props.onDelete} />
			
		))}
			<p className="sum">Total: {new Intl.NumberFormat().format(total)}$</p>
    </div>
  );
}

const showNothing = () => {
	return (
    <div className="empty">
      <h2>Empty</h2>
    </div>
  );
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>

        <ul className="nav">
          <li>About</li>
          <li>Contact</li>
          <li>File</li>
        </ul>

        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-btn ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>

      <div className="presentation"></div>
    </header>
  );
}
