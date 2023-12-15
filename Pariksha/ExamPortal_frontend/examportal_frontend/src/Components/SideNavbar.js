import { faArrowRightFromBracket, faCirclePlus, faGreaterThan, faHouse, faLessThan, faLightbulb, faList, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const SideNavbar = () => {

    const [show, setshow] = useState(true)
   // console.log(show)
    return (
        <>
            {/* <!-- drawer init and show --> */}
            {show && <div className="fixed top-20 left-60 text-center z-50">
                <button onClick={() => setshow(!show)} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-white bg-primary-300  outline-black hover:text-white hover:bg-primary-700  rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"  >
                <FontAwesomeIcon icon={faLessThan} />
                    <span className="sr-only">Close menu</span>
                </button>
            </div>}
            {!show && <div className="fixed top-20 left-20 text-center z-50 ">
                <button onClick={() => setshow(!show)} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-white bg-primary-300  outline-black hover:text-white hover:bg-primary-700 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"  >
                <FontAwesomeIcon icon={faGreaterThan} />
                    <span className="sr-only">Close menu</span>
                </button>
            </div>}
            {/* <!-- drawer component --> */}

            {show && <div className="fixed top-16 mt-2 left-0 z-40 w-64 h-screen p-4  overflow-y-auto  bg-white dark:bg-gray-800"  >
                <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>

                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <NavLink to={"/admin"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FontAwesomeIcon icon={faHouse} />
                                <span className="ms-3">Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin/profile"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FontAwesomeIcon icon={faUser} />
                                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                                {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/profile"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FontAwesomeIcon icon={faList} />
                                <span className="flex-1 ms-3 whitespace-nowrap">Categories</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                            </NavLink>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FontAwesomeIcon icon={faCirclePlus} />
                                <span className="flex-1 ms-3 whitespace-nowrap">Add Categories</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FontAwesomeIcon icon={faLightbulb} />
                                <span className="flex-1 ms-3 whitespace-nowrap">Quizzes</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FontAwesomeIcon icon={faPlus} />
                                <span className="flex-1 ms-3 whitespace-nowrap"> Add Quiz</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>}

        </>
    )
}

