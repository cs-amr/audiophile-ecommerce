import React from "react";
import Categories from "../components/Categories";
import Landing from "../components/Landing";
import Products from "../components/Products";

export default function Home() {
  return (
    <>
      <Landing />
      <Categories />
      <Products />
    </>
  );
}
