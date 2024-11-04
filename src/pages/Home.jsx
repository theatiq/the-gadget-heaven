import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
