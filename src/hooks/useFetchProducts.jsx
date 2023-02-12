import { useEffect, useState } from "react";
import CategoryProduct from "../components/CategoryProduct";
import { useDataContext } from "../Context/DataContext";

export function useFetchProducts(productCategory) {
  const data = useDataContext();
  const { products, isLoading } = data;
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      const categoryProducts = products.products.filter((product) => {
        if (product.category === productCategory) {
          return product;
        }
      });
      const productList = categoryProducts.map((product, index) => {
        return <CategoryProduct product={product} key={index} />;
      });
      setProductsState(productList);
    }
  }, [isLoading]);
  return productsState;
}
