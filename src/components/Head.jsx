import React from "react";

export default function Head({ title }) {
  return (
    <div className="head">
      <div className="container">
        <h2>{title}</h2>
      </div>
    </div>
  );
}
