import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { LayoutRoutes } from "./Layout"
import { Veiculos } from "../pages/Veiculos"
import { Veiculo } from "../pages/Veiculo"

export const RoutesPersonalizadas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutRoutes />}>
                    <Route index element={<Home />} />
                    <Route path="/veiculos" element={<Veiculos />}/>
                    <Route path="/veiculo/:car/detail" element={<Veiculo />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}