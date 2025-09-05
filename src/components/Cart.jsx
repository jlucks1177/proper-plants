import CartItem from "./CartItem";

export default function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <ul className="cart-list">
      {cart.map((plant) => (
        <CartItem
          key={plant.id}
          plant={plant}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </ul>
  );
}
