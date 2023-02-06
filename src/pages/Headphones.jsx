import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Loading from "../components/Loading";
import Person from "../components/Person";
import { useDataContext } from "../DataContext";
export default function Headphones() {
  const data = useDataContext();
  const { products, isLoading } = data;
  if (!isLoading) {
    const categoryProducts = products.products.map((product) => {
      if (product.category === "headphones") {
        return product;
      }
    });
  }

  return (
    <section className="headphones">
      <Head title={"HEADPHONES"} />
      <div className="container">
        <div className="products">{/* {isLoading?<Loading/>:} */}</div>
      </div>
    </section>
  );
}
