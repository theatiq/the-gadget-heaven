import React from "react";

const Cart = ({ gadget, handleRemove }) => {
  return (
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
            handleRemove(gadget.product_id);
          }}
          className="btn btn-primary"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cart;
