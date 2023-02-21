import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Person from "../components/Person";
import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Person />
      <Footer />
    </div>
  );
}
