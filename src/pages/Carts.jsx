import React, { useEffect, useState } from "react";
import { getAllCarts, removeCart } from "../utils/uutility";
import Cart from "../pages/Cart";

const Carts = () => {
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    const carts = getAllCarts();
    setGadgets(carts);
  }, []);

  const handleRemove = (id) => {
    removeCart(id);
    const carts = getAllCarts();
    setGadgets(carts);
  };

  return (
    <div>
      <div className="flex justify-between my-5">
        <h1 className="text-xl font-bold">Cart</h1>
        <div className="flex justify-between items-center gap-5">
          <p className="text-xl font-bold">
            Total Cost:{" "}
            {gadgets.reduce((a, b) => {
              return a + b.price;
            }, 0)}{" "}
          </p>
          <button className="btn border border-purple-600 rounded-3xl w-[150px]">
            Sort by Price
          </button>
          <button className="btn border bg-purple-500 text-white rounded-3xl w-[120px]">
            Purchase
          </button>
        </div>
      </div>
      {/* Cards */}

      {gadgets.map((gadget) => (
        <Cart handleRemove={handleRemove} gadget={gadget}></Cart>
      ))}
    </div>
  );
};

export default Carts;
