import { Outlet } from "react-router-dom"

import {ContainerTheme } from "../theme/globalTheme"
import { Header } from "../components/Header"

export const LayoutRoutes = () => {

    return (
        <>
            <Header />
           
                <ContainerTheme>
                <Outlet/>     
                </ContainerTheme>
            

        </>
    )

}