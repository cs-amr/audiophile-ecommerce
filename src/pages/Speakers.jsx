import Head from "../components/Head";

import { useFetchProducts } from "../hooks/useFetchProducts";
export default function Speakers() {
  const productsState = useFetchProducts("speakers");
  return (
    <div className="speakers">
      <Head title={"SPEAKERS"} />
      <div className="products">{productsState}</div>
    </div>
  );
}
