import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";

import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import RestaurantList from "./components/RestaurantList";
import Footer from "./components/footer";


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
