export default function CartItem({ plant, addToCart, removeFromCart }) {
  return (
    <div className="cart-item" key={plant.id}>
      <span className="plant-info">
        {plant.image} {plant.name}
      </span>
      <div className="quatity-controls">
        <button onClick={() => removeFromCart(plant)}>-</button>
        <span className="quantity">Qty: {plant.quantity}</span>
        <button onClick={() => addToCart(plant)}>+</button>
      </div>
    </div>
  );
}
