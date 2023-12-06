import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Signup } from "../Pages/Signup"
import { Login } from "../Pages/Login"
import { PageNotFound } from "../Pages/PageNotFound"


export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="signup" element={<Signup />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="*" element={<PageNotFound/>}></Route>
            </Routes>
        </div>
    )
}
