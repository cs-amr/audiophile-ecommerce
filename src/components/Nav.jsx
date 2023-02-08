import React from "react";
import Categories from "./Categories";
export default function Nav({ navbarToggle }) {
  return (
    <nav className={navbarToggle ? "nav open" : "nav"}>
      <div className="container">
        <Categories />
      </div>
    </nav>
  );
}
