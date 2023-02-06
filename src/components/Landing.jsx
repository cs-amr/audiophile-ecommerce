import { Link } from "react-router-dom";
import { useDataContext } from "../DataContext";
import Categories from "./Categories";

export default function Landing() {
  const data = useDataContext();
  // if (isLoading) {
  //   return <Loading />;
  // } else {
  //   // const { slug, name, image } = product[0];
  return (
    <section className="landing">
      <div className="landing container">
        {/* <Categories /> */}
        <span>NEW PRODUCT</span>
        <h2>XX99 Mark II Headphones</h2>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="/headphones" className="link">
          SEE PRODUCT
        </Link>
      </div>
    </section>
  );
}
