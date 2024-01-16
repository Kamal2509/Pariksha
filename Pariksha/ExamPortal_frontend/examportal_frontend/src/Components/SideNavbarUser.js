import { faArrowRightFromBracket, faCirclePlus, faGreaterThan, faHouse, faLessThan, faLightbulb, faList, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const SideNavbarUser = () => {
    const [show, setshow] = useState(true)
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
        async function getCategories() {
            try {
                const response = await axios.get("/category/");
                setCategories(response.data);
               // console.log(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }

        };
        getCategories();
    }, [])

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
                            <NavLink to={"/user"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FontAwesomeIcon icon={faHouse} />
                                <span className="ms-3">Home</span>
                            </NavLink>
                        </li>
                        
                        
                            {
                                  categories.map(item => (
                                    <li>
                                    <NavLink to={"/"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <FontAwesomeIcon icon={faLightbulb} />
                                        <span className="flex-1 ms-3 whitespace-nowrap">{item.title}</span>
                                        </NavLink>
                                </li>
                                  ))
                            }
                       
                       
                        <li>
                        <NavLink to={"/admin/addCategory"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                                </NavLink>
                        </li>

                    </ul>
                </div>
            </div>}

        </>
    )
}

