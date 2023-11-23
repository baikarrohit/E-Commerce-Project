import CartProvider from "./Context/CartProvider";
import RootLayout from "./Components/Layout/Root";
import AuthContext from "./Context/auth-context";
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useContext } from "react";
import PumaTshirt1 from "./Assets/Clothes/puma-tshirt1.jpg";
import PumaTshirt2 from "./Assets/Clothes/puma-tshirt2.jpg";
import PoloTshirt1 from "./Assets/Clothes/polo-tshirt1.jpg";
import PoloTshirt2 from "./Assets/Clothes/polo-tshirt2.jpg";
import BaggyFitTshirt1 from "./Assets/Clothes/baggyfit-tshirt1.jpg";
import BaggyFitTshirt2 from "./Assets/Clothes/baggyfit-tshirt2.jpg";
import VeirdoCottontshirt1 from "./Assets/Clothes/veirdoCottonTshirt1.jpg";
import VeirdoCottontshirt2 from "./Assets/Clothes/veirdoCottonTshirt2.jpg";
import PeterEnglandJeans1 from "./Assets/Clothes/peterEnglandJeans1.jpg";
import PeterEnglandJeans2 from "./Assets/Clothes/peterEnglandJeans2.jpg";
import LevisJeans1 from "./Assets/Clothes/Levis-Jeans1.jpg";
import LevisJeans2 from "./Assets/Clothes/levis-jeans2.jpg";

// Lazy load components
const Home = lazy(() => import("./Components/Home/Home"));
const Store = lazy(() => import("./Components/Store/Store"));
const About = lazy(() => import("./Components/About/About"));
const Login = lazy(() => import("./Components/Login/Login"));
const ContactUS = lazy(() => import("./Components/Contact/ContactUS"));
const Product = lazy(() => import("./Components/Store/Product"));

const productsArr = [
  {
    id: "1",
    title: "Round neck T-Shirt",
    price: 669,
    brand: "Puma",
    imageUrl: [PumaTshirt1, PumaTshirt2],

    des: "Manufacturer :  Puma, ASIN  :  B0B9B6ZWXZ, Item model number  :  67652358, Country of Origin  :  India, Department  :  Men, Manufacturer  :  Puma, Packer  :  Puma Sports India, Net Quantity  :  1.00 count, Generic Name  :  T-Shirt",
  },

  {
    id: "2",
    title: "Striped Polo T-Shirt",
    price: 500,
    brand: "U.S. Polo",
    imageUrl: [PoloTshirt1, PoloTshirt2],
    des: "Manufacturer  :  Allen Solly, ASIN  :  B08KTWG4VH, Item model number  :  ASKPQRGFW82524, Country of Origin  :  India, Department  :  Men, Packer  :  Aditya Birla Fashion and Retail Limited, Net Quantity  :  1 count, Generic Name  :  Polo",
  },

  {
    id: "3",
    title: "Printed T-Shirt",
    price: 359,
    brand: "Levi's",
    imageUrl: [BaggyFitTshirt1, BaggyFitTshirt2],
    des: "Manufacturer  :  Awesomefab Shopping Pvt Ltd, ASIN  :  B0BTW1G68X, Item model number  :  OS_100_FRGORGNL_SW_M, Country of Origin  :  India, Department  :  Men, Generic Name  :  T-Shirt",
  },

  {
    id: "4",
    title: "Cotton T-Shirt",
    price: 300,
    brand: "Crastic",
    imageUrl: [VeirdoCottontshirt1, VeirdoCottontshirt2],
    des: "Manufacturer  :  Veirdo, ASIN  :  B09CV2GDDH, Item model number  :  MEN_UNI_100_OSCOW_L, Country of Origin  :  India, Department  :  Unisex-adult, Importer  :  Awesome Fab Shopping Pvt Ltd, Net Quantity  :  1.00 count, Generic Name  :  T-Shirt",
  },
  {
    id: "5",
    title: "Dark blue Jeans",
    price: 880,
    brand: "Peter England",
    imageUrl: [PeterEnglandJeans1, PeterEnglandJeans2],
    des: "Manufacturer  :  ABFRL, ASIN  :  B0BKQ8M965, Item model number  :  PJDNPSKP929007, Country of Origin  :  India, Department  :  Men, Generic Name  :  Jeans",
  },
  {
    id: "6",
    title: "Slim black Jeans",
    price: 999,
    brand: "Levi's",
    imageUrl: [LevisJeans1, LevisJeans2],
    des: "Manufacturer  :  ABFRL, ASIN  :  B09MJJVB9F, Item model number  :  ALDNVSKFK62082, Country of Origin  :  India, Department  :  Men, Generic Name  :  Jeans",
  },
];

function App() {
  const authCtx = useContext(AuthContext);
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <RootLayout />,
  //     children: [
  //       { path: "/", element: <Home /> },
  //       { path: "/store", element: <Store /> },
  //       { path: "/about", element: <About /> },
  //       {path: "/contact",element:<ContactUS/>}
  //     ],
  //   },
  // ]);

  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="store"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                {authCtx.isLoggedIn ? (
                  <Store productsArr={productsArr} />
                ) : (
                  <Navigate to="/login" />
                )}
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <ContactUS />
              </Suspense>
            }
          />
          <Route
            path="store/:productId"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Product productsArr={productsArr} />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
