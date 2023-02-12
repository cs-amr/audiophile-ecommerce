import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="headphones" element={<Headphones />} />
      <Route path="/headphones/:productId" element={<Product />} />
      <Route path="speakers" element={<Speakers />} />
      <Route path="/speakers/:productId" element={<Product />} />
      <Route path="earphones" element={<Earphones />} />
      <Route path="/earphones/:productId" element={<Product />} />
      <Route path="checkout" element={<Checkout />} />
    </Route>
  )
);
