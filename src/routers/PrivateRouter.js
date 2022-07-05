import { Route, Routes } from "react-router-dom"
import { Car } from "../components/auth/Car"
import { Profile } from "../components/auth/Profile"
import { AuthRouter } from "./AuthRouter"

export const PrivateRouter = () => {
    <Routes>
        <Route path="/profile" element={ <AuthRouter><Profile /></AuthRouter> } />
        <Route path="/mycar" element={ <AuthRouter><Car /></AuthRouter> } />
    </Routes>
}