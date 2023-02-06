import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const DataContext = createContext();
export default function DataProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      try {
        fetch("src/products.json")
          .then((response) => response.json())
          .then((result) => setProducts(result))
          .then((res) => setIsLoading(false));
      } catch {
        console.error("An error occured");
      }
    };
    fetchProducts();
  }, []);

  return (
    <DataContext.Provider value={{ products, isLoading }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const context = useContext(DataContext);

  return context;
}
