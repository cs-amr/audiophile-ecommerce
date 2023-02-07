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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path=":id" element={<Product />} />
      <Route path="headphones" element={<Headphones />} />
      <Route path="speakers" element={<Speakers />} />
      <Route path="earphones" element={<Earphones />} />
    </Route>
  )
);
