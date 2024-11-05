import React from "react";
import { getAllWishes, removeWish } from "../utils/uutility";
import { useState, useEffect } from "react";

const Wishlist = () => {
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    const wish = getAllWishes();
    setGadgets(wish);
  }, []);

  const handleRemoveWish = (id) => {
    removeWish(id);
    const wish = getAllWishes();
    setGadgets(wish);
  };
console.log("Wishlist: ", gadgets.length)
  return (
    <div>
      <div className="flex justify-between my-5">
        <h1 className="text-xl font-bold">Wishlist</h1>
      </div>
      {/* Cards */}

      {gadgets.map((gadget) => (
        <div className="">
          <img
            src={gadget.product_image}
            className="rounded-lg h-[100px] w-[150px] object-cover"
          />
          <div>
            <h1 className="text-5xl font-bold">{gadget.product_title}</h1>
            <p className="">{gadget.description}</p>
            <p className="">
              Price: $<span>{gadget.price}</span>
            </p>
            <button
              onClick={() => {
                handleRemoveWish(gadget.product_id);
              }}
              className="btn btn-primary"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
