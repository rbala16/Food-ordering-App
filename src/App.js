import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import RestaurantList from "./components/Restaurants/RestaurantList";
import Footer from "./components/Footer/Footer";
import RestaurantMenu from "./components/Restaurants/RestaurantMenu";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider, useDispatch, useSelector } from "react-redux";
import appStore from "./app/store";
import ThemeWrapper from "./components/ThemeWrapper";
import Cart from "./components/Cart/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { BsCart4 } from "react-icons/bs";

//only when grocery is invoke ,callback function called
const Grocery = lazy(() => import("./components/Grocery/Grocery")); //lazy function

const App = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const cartItems = useSelector((state) => state.cart.items);

  const handleToggleCart = () => {
    dispatch(toggleCart());
  };
  return (
    <div>
      =
      <ThemeProvider>
        <ThemeWrapper>
          <Navbar />
          {/* Cart Toggle Button */}
          <button
            onClick={handleToggleCart}
            className="fixed bottom-0 right-0 text-white bg-primary-color rounded-3xl lg:text-3xl text-2xl flex p-2 hover:bg-white"
          >
            <BsCart4 />
            <span className="text-xl">
              {" "}
              {cartItems.reduce(
                (total, item) => total + (item.quantity || 1),
                0
              )}
            </span>
          </button>

          {/* Global Cart Drawer */}
          {isCartOpen && <Cart />}
          <Outlet />
          <Footer />
        </ThemeWrapper>
      </ThemeProvider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "restaurants",
        element: <RestaurantList />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurantmenu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocery businessName="Bala Grocery Service" />
          </Suspense>
        ), //replace with loading untoll grocery is loading
      },

      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
