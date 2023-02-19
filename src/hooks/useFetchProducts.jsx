import { useEffect, useState } from "react";
import CategoryProduct from "../components/CategoryProduct";

export function useFetchProducts(productCategory) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [productsState, setProductsState] = useState([]);
  async function fetchProducts() {
    const res = await fetch("/public/products.json");
    const data = await res.json();
    setProducts(data);
    setIsLoading(false);
  }
  useEffect(() => {
    if (isLoading) {
      fetchProducts();
    }
  }, []);
  if (!isLoading) {
    const categoryProducts = products.products.filter((product) => {
      if (product.category === productCategory) {
        return product;
      }
    });
    const productList = categoryProducts?.map((product, index) => {
      return <CategoryProduct product={product} key={index} />;
    });
    return productList;
  }
}
