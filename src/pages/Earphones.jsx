import Head from "../components/Head";

import { useFetchProducts } from "../useFetchProducts";

export default function Earphones() {
  const productsState = useFetchProducts("earphones");

  return (
    <div className="earphones">
      <Head title={"EARPHONES"} />
      {productsState}
    </div>
  );
}
