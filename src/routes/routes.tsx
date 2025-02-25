import GameDetailsPage from "@/pages/GameDetailsPage";
import HomePage from "@/pages/HomePage";
import Layout from "@/pages/Layout";
import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorBoundary from "./ErrorBoundary";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "games/:id",
                element: <GameDetailsPage />,
            },
        ],
    },
]);

const Routers = () => {
    return <RouterProvider router={router} />;
};

export default Routers;