import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="flex justify-between my-5">
        <h1 className="text-xl font-bold">Cart</h1>
        <div className="flex justify-between items-center gap-5">
          <p className="text-xl font-bold">Total Cost: </p>
          <button className="btn border border-purple-600 rounded-3xl w-[150px]">
            Sort by Price
          </button>
          <button className="btn border bg-purple-500 text-white rounded-3xl w-[120px]">
            Purchase
          </button>
        </div>
      </div>
      {/* Cards */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
