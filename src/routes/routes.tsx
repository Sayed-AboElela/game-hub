import App from "@/App";
import GameDetailsPage from "@/pages/GameDetailsPage";
import HomePage from "@/pages/HomePage";
import Layout from "@/pages/Layout";
import { Route, Routes } from "react-router";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="games/:id" element={<GameDetailsPage />} />
            </Route>
        </Routes>
    )
}
export default Routers;