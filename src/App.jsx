import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/Menu/Menu";
import Cart from "./features/Cart/Cart";
import Order, { loader as OrderLoader } from "./features/Order/Order";
import CreateOrder, {
  action as createOrderAction,
} from "./features/Order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import {action as updateOrderAction} from "./features/Order/UpdateOrder"

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        { path: "/cart", element: <Cart /> },
        {
          path: "/order/new",
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
          loader: OrderLoader,
          errorElement: <Error />,
          action: updateOrderAction
        },
      ],
    },
  ]);

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  );
}

export default App;
