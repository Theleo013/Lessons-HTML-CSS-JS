import React from "react";
import "@/styles/base/reset.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { urls } from "@/shared/urls";
import Layout from "@/shared/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Campaigns from "./pages/Campaigns";
import GetInvoled from "./pages/GetInvoled";
import { ThemeProvider } from "./shared/context/ThemeContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <React.Fragment>
        <Route path={urls.HOME} element={<Layout />}>
          <Route path={urls.HOME} element={<Home />} />
          <Route path={urls.ABOUT_US} element={<About />} />
          <Route path={urls.CAMPAIGNS} element={<Campaigns />} />
          <Route path={urls.GET_INVOLVED} element={<GetInvoled />} />
          {/* <Route path={urls.CONTACT_US} element={}/> */}
        </Route>
      </React.Fragment>
    )
  );
  return (
    <React.Fragment>
      
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
