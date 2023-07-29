import Store from "./Components/Store/Store";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import ContactUS from "./Components/Contact/ContactUS";
import CartProvider from "./Context/CartProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Components/Layout/Root";
import Product from "./Components/Store/Product";


const productsArr = [
  {
    title: "Album 1",
    price: 100,
    imageUrl: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    ],

    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },

  {
    title: "Album 2",
    price: 50,
    imageUrl: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    ],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },

  {
    title: "Album 3",
    price: 70,
    imageUrl: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    ],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },

  {
    title: "Album 4",
    price: 100,
    imageUrl: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    ],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },

];


function App() {
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="store" element={<Store productsArr={productsArr}/>} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<ContactUS />} />
            <Route
              path="store/:productId"
              element={<Product productsArr={productsArr} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
