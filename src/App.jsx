import { RouterProvider } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./Context/CartContext";
import { router } from "./routes";

function App() {
  return (
    <DataProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </DataProvider>
  );
}

export default App;
