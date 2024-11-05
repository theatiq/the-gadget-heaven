import React, { useEffect, useState } from "react";
import { getAllCarts, removeCart } from "../utils/uutility";
import Cart from "../pages/Cart";
import Modal from "react-modal";
import payment from "../assets/Group.png";
import "../index.css";

Modal.setAppElement("#root");

const Carts = () => {
  const [gadgets, setGadgets] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const carts = getAllCarts();
    setGadgets(carts);
  }, []);

  const handleRemove = (id) => {
    removeCart(id);
    const carts = getAllCarts();
    setGadgets(carts);
  };

  const handleSort = () => {
    const sortedCart = [...gadgets].sort((a, b) => b.price - a.price);
    setGadgets(sortedCart);
  };
  console.log("Cart List: ", gadgets.length)

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="My Modal"
        className={"modal-box"}
        overlayClassName={"modal-overlay"}
      >
        <div className="flex flex-col items-center gap-2">
          <img src={payment} alt="paid" />
          <h3 className="text-3xl font-bold">Payment Successful</h3>
          <p className="text-xl">Thanks for Purchasing</p>
          <p className="text-xl">
            Total:${" "}
            {gadgets.reduce((a, b) => {
              return a + b.price;
            }, 0)}{" "}
          </p>
          <div className="modal-action">
            <button onClick={closeModal} className="btn w-full">
              Close
            </button>
          </div>
        </div>
      </Modal>
      <div className="flex justify-between my-5">
        <h1 className="text-xl font-bold">Cart</h1>
        <div className="flex justify-between items-center gap-5">
          <p className="text-xl font-bold">
            Total Cost:${" "}
            {gadgets.reduce((a, b) => {
              return a + b.price;
            }, 0)}{" "}
          </p>
          <button
            onClick={handleSort}
            className="btn border border-purple-600 rounded-3xl w-[150px]"
          >
            Sort by Price
          </button>
          <button
            onClick={openModal}
            className="btn border bg-purple-500 text-white rounded-3xl w-[120px]"
          >
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
