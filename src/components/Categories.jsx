import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col justify-between mt-20">
      {categories.map((category) => (
        <NavLink to={`./category/${category.category}`}>
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
