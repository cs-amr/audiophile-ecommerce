import { Link } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";
import Categories from "./Categories";

export default function Landing() {
  return (
    <section className="landing">
      <div className="landing container">
        <span>NEW PRODUCT</span>
        <h2>XX99 Mark II Headphones</h2>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="headphones/xx99-mark-two-headphones" className="link">
          SEE PRODUCT
        </Link>
      </div>
    </section>
  );
}
