export default function PlantItem({ plant, addToCart }) {
  return (
    <li className="plant-item" key={plant.id}>
      <span className="plant-img">{plant.image}</span>
      <strong>{plant.name}</strong>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </li>
  );
}
