import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Signup } from "../Pages/Signup"
import { Login } from "../Pages/Login"
import { PageNotFound } from "../Pages/PageNotFound"
import { Dashboard } from "../Pages/AdminPages/Dashboard"
import { UserProfile } from "../Pages/UserPages/UserProfile"


export const AllRoutes = () => {
    return (
        <main className="max-w-screen-2xl flex flex-wrap items-center justify-center mx-auto px-6 py-4 text-justify">
            <Routes>

                <Route path="/" element={<Home />}></Route>
                <Route path="signup" element={<Signup />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="login/dashboard" element={<Dashboard />}></Route>
                <Route path="login/userProfile" element={<UserProfile />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>

            </Routes>
        </main>
    )
}
