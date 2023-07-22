import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/header";
import Store from "./Components/Store/Store";
import Footer from "./Components/Footer/Footer";
import CartProvider from "./Context/CartProvider";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Header />
      <main>
        <Store />
      </main>

      <Footer />
    </CartProvider>
  );
}

export default App;
