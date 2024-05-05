import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Layout = () => {
  return (
    <div className="bg-[#000000] h-screen flex">
      {/* Sidebar */}
      <div
        className="w-64 h-full md:w-[320px] px-4 py-6 md:px-12
       md:py-10 overflow-hidden hidden lg:block"
      >
        <Menu />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-scroll">
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
