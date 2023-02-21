import React, { useEffect, useState } from "react";
import Form from "../components/Form";

export default function Checkout() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchData() {
    const res = await fetch("../products.json");
    const data = await res.json();
    setIsLoading(false);
    setProducts(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="checkout">
      <main className="container">
        {!isLoading && <Form products={products} />}
      </main>
    </div>
  );
}
