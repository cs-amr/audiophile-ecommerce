import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Person from "../components/Person";
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
