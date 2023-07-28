import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/header";
import Navbar from "../Navbar/Navbar";

const RootLayout = () => {
  return (
    <div style={{backgroundColor:'rgb(226, 233, 230)'}}>
      <Navbar />
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
