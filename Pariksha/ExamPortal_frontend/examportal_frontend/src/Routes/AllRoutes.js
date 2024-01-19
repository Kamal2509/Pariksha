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
import { UpdateQuiz } from "../Pages/AdminPages/UpdateQuiz"
import { ViewQuizQuestions } from "../Pages/AdminPages/ViewQuizQuestions"
import { AddQuestion } from "../Pages/AdminPages/AddQuestion"
import { NormalUser } from "../Pages/UserPages/NormalUser"
import { StartQuiz } from "../Pages/UserPages/StartQuiz"
import { Quiz } from "../Pages/UserPages/Quiz"



export const AllRoutes = () => {
    return (
        <main className="max-w-screen-2xl min-h-screen">
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
                <Route path="/admin/updateQuiz/:data" element={<UpdateQuiz/>}></Route>
                <Route path="/admin/viewQuizQuestions/:data" element={<ViewQuizQuestions/>}></Route>
                <Route path="/admin/addQuestion/:data" element={<AddQuestion/>}></Route>
                <Route path="/user/:data" element={<NormalUser/>}></Route>
                <Route path="/user/start/:data" element={<StartQuiz/>}></Route>
                <Route path="/user/quiz/:data" element={<Quiz/>}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </main>
    )
}
