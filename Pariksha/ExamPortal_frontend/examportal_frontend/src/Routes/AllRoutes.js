import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Signup } from "../Pages/Signup"
import { Login } from "../Pages/Login"
import { PageNotFound } from "../Pages/PageNotFound"
import { Dashboard } from "../Pages/AdminPages/Dashboard"
import { Profile } from "../Pages/Profile"


export const AllRoutes = () => {
    return (
        <main >
            <Routes>

                <Route path="/" element={<Home />}></Route>
                <Route path="signup" element={<Signup />}></Route>
                <Route path="login" element={<Login />}></Route>
            
                <Route path="/admin/" element={<Dashboard />}></Route>
                <Route path="/admin/profile" element={<Profile />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>

            </Routes>
        </main>
    )
}
