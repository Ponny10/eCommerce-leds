import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../components/home/HomeScreen"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={ <HomeScreen /> } />
            </Routes>
        </BrowserRouter>
    )
}
