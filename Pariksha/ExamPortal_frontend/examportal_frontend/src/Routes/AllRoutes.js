import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Signup } from "../Pages/Signup"
import { Login } from "../Pages/Login"
import { PageNotFound } from "../Pages/PageNotFound"
import { Dashboard } from "../Pages/AdminPages/Dashboard"
import { Profile } from "../Pages/Profile"
import { Categories } from "../Pages/AdminPages/Categories"
import { AddCategory } from "../Pages/AdminPages/AddCategory"
import { Quizzes } from "../Pages/AdminPages/Quizzes"
import { AddQuiz } from "../Pages/AdminPages/AddQuiz"


export const AllRoutes = () => {
    return (
        <main className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto min-h-screen">
            <Routes>

                <Route path="/" element={<Home />}></Route>
                <Route path="signup" element={<Signup />}></Route>
                <Route path="login" element={<Login />}></Route>
            
                <Route path="/admin/" element={<Dashboard />}></Route>
                <Route path="/admin/profile" element={<Profile />}></Route>
                <Route path="/admin/categories" element={<Categories />}></Route>
                <Route path="/admin/addCategory" element={<AddCategory />}></Route>
                <Route path="/admin/quizzes" element={<Quizzes />}></Route>
                <Route path="/admin/addQuiz" element={<AddQuiz />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>

            </Routes>
        </main>
    )
}
