import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col justify-between mt-12 gap-5 border rounded-lg mr-10 py-3 px-10">
      <NavLink to={"/"}>
        <button className="btn bg-purple-300 rounded-2xl">All Products</button>
      </NavLink>
      {categories.map((category) => (
        <NavLink to={`./category/${category.category}`}>
          <button className="btn bg-purple-300 rounded-2xl">
            {category.category}
          </button>
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
