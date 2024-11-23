import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";

import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import RestaurantList from "./components/Restaurants/RestaurantList";
import Footer from "./components/Footer/Footer";
import RestaurantMenu from "./components/Restaurants/RestaurantMenu";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import appStore from "./app/store";

//only when grocery is invoke ,callback function called
const Grocery = lazy(()=> import("./components/Grocery/Grocery") )//lazy function
const App = () => {
  return (
    
    <div>
      <Provider store={appStore}>
      <ThemeProvider>
        
      <Navbar />
      <Outlet />
      <Footer />
      </ThemeProvider>
      </Provider>
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
        element: (
          <>
            <HeroSection />
            <RestaurantList />
          </>
        ),
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
        element: <RestaurantMenu/>,
      },
      {
        path: "grocery",
        element: <Suspense fallback={<div>Loading...</div>}><Grocery businessName= "Bala Grocery Service" /></Suspense>,//replace with loading untoll grocery is loading
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
