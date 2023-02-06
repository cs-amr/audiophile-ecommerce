import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Person from "../components/Person";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Navbar />
      <Outlet />
      <Person />
      <Footer />
    </div>
  );
}
