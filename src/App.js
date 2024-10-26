import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";

import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import RestaurantList from "./components/Restaurants/RestaurantList";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
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
        path: "/restaurants",
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
