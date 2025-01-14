import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "@/pages/Home";
import Basket from "@/pages/Basket";
import { urls } from "@/shared/urls";
import Layout from "@/shared/layout";
import { allRequest } from "./shared/api";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <React.Fragment>
        <Route path={urls.HOME} element={<Layout />}>
          <Route
            path={urls.HOME}
            loader={allRequest.GET_PRODUCT}
            element={<Home />}
          />
          <Route path={urls.BASKET} element={<Basket />} />
        </Route>
      </React.Fragment>
    )
  );
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
