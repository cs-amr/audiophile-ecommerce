import Head from "../components/Head";
import { useFetchProducts } from "../hooks/useFetchProducts";

export default function Headphones() {
  const productsState = useFetchProducts("headphones");
  return (
    <section className="headphones">
      <Head title={"HEADPHONES"} />
      <div className="container">
        <div className="products">{productsState}</div>
      </div>
    </section>
  );
}
