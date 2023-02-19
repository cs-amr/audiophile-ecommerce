import { RouterProvider } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./Context/CartContext";
import { router } from "./routes";

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
