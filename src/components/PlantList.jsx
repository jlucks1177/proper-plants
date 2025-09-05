import PlantItem from "./PlantItem";

export default function PlantList({ plants, addToCart }) {
  return (
    <ul className="plant-list">
      {plants.map((plant) => (
        <PlantItem key={plant.id} plant={plant} addToCart={addToCart} />
      ))}
    </ul>
  );
}
