import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const Layout = () => {
  return (
    <div className="bg-[#000000] h-screen flex">
      <div className="w-[320px] px-10 py-7 overflow-y-hidden">
        // border-r-2 border-[#FFFFFF33]
        <Menu />
      </div>

      <div className="flex-1 overflow-y-auto">
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </div>
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
