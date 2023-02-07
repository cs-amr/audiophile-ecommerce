import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import CategoryProduct from "../components/CategoryProduct";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Person from "../components/Person";
import { useDataContext } from "../DataContext";
export default function Speakers() {
  const data = useDataContext();
  const { products, isLoading } = data;
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      const categoryProducts = products.products.filter((product) => {
        if (product.category === "speakers") {
          return product;
        }
      });
      const productList = categoryProducts.map((product, index) => {
        return <CategoryProduct product={product} key={index} />;
      });
      setProductsState(productList);
    }
  }, []);
  return (
    <div className="speakers">
      <Head title={"SPEAKERS"} />
      <div className="products">{productsState}</div>
    </div>
  );
}
