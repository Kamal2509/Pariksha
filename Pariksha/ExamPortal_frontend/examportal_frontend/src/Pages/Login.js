import React, { useEffect, useState } from 'react'
import axios from "axios"
import loginpic from '../Assets/Icons/loginuser.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Axios from 'axios'
export const Login = () => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();
  const logindata = {
    username: username,
    password: password
  };
  var token;
  var user = 'Kamal';
  var token = localStorage.getItem('token')

 
  async function submitdata(event) {
    event.preventDefault();
    try {
      var Data = await axios.post("/login", logindata);
      token = Data.data.tokenString;
      if (token != undefined) {
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
       // alert(`Welcome ${username}`);
      }
      else {
        alert("User not exist, check your credentials")
      }
      loginuser(token);
      getCurrentUser()
      // user = await axios.get("/login");

      //redirect...ADMIN:admin dashboard
      console.log(localStorage.getItem('userRole') === 'Admin')
      
      //console.log(localStorage.getItem('user').authorities[0].authority)
      //redirect...Normal:normal dashboard
      // console.log(getCurrentUser(token));
    } catch (err) {
      alert("user not exist !!");
      setusername("");
      setpassword("")
    }

  }

  //Login user :set token in local storage
  function loginuser(token) {
    localStorage.setItem('token', token);
    return true;
  }

  // user is logged in or not
  function isLogin() {
    let tokenstr = localStorage.getItem("token");
    if (tokenstr == undefined || tokenstr == "" || tokenstr == null) {
      return false;
    }
    else {
      return true;
    }
  }

  //to get current user
  async function getCurrentUser() {
    user = await axios.get("/currentUser");
    localStorage.setItem('username', user.data.username);
    localStorage.setItem('userRole', user.data.authorities[0].authority);
    if (user.data.authorities[0].authority === 'Admin') {
      navigate("/admin")
    }
    else if (user.data.authorities[0].authority === 'Normal') {
      navigate("userProfile")
    }
    //console.log(user.data.authorities[0].authority);
    //return user;
  }

  // logout user
  function logout(params) {
    localStorage.removeItem('token');
    return true;
  }

  //get token from local storage
  function gettoken() {
    return localStorage.getItem('token');
  }



  return (
    <section className="bg-gray-50 dark:bg-gray-900 max-w-screen-2xl flex flex-wrap items-center justify-center mx-auto px-6 py-4 text-justify">
      <div className="flex flex-col items-center  px-6 py-6 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mt-20 mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          <img className="w-10 h-10 mr-2" src={loginpic} alt="logo" />
          Sign in Here!!
        </div>

        <div className="w-full bg-white  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

            <form className="space-y-4 md:space-y-6" onSubmit={(e) => submitdata(e)}>
              <div>
                <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input type="username" name="username" id="username" value={username} onChange={(e) => setusername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <NavLink to='/signup' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
