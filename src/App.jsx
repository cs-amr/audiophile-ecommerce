import { RouterProvider } from "react-router-dom";
import "./App.css";
import DataProvider from "./DataContext";
import { router } from "./routes";

function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
