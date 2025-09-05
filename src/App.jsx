import PLANTS from "./data.js";
import PlantList from "./components/PlantList.jsx";
import Cart from "./components/Cart.jsx";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const plantExists = cart.find((i) => i.id === plant.id);
    if (plantExists) {
      setCart(
        cart.map((plants) =>
          plant.id === plants.id
            ? { ...plants, quantity: plantExists.quantity + 1 }
            : plants
        )
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (plant) => {
    setCart(
      cart
        .map((plants) =>
          plant.id === plants.id
            ? { ...plants, quantity: plants.quantity - 1 }
            : plants
        )
        .filter((plant) => plant.quantity > 0)
    );
  };

  return (
    <main>
      <section className="plants">
        <h2>Available Plants</h2>
        <PlantList plants={PLANTS} addToCart={addToCart} />
      </section>
      <section className="cart">
        <h2>Cart</h2>
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </section>
    </main>
  );
}
