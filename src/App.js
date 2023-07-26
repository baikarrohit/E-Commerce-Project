
import Store from "./Components/Store/Store";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import ContactUS from "./Components/Contact/ContactUS";
import CartProvider from "./Context/CartProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/Layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      {path: "/contact",element:<ContactUS/>}
    ],
  },
]);

function App() {
  return <CartProvider>
    <RouterProvider router={router}/>
  </CartProvider>;
}

export default App;
