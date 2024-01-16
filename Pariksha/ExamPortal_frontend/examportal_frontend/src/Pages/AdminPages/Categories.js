import React, { useEffect, useState } from 'react'
import { SideNavbar } from '../../Components/SideNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Categories = () => {
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



    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-w-full max-w-screen-2xl  mx-auto  text-justify min-h-screen">
            <SideNavbar />
            <div className='max-w-5xl mx-auto p-4 text-2xl font-bold bg-white border text-gray-700 dark:text-white' >
                All Categories
                <hr className='mt-2' />
                {
                    categories.map(item => (
                        <div className='flex m-2'>
                            <div className='flex items-center justify-center'>
                                <FontAwesomeIcon icon={faFolder} />
                            </div>
                            <div className='ml-4 text-base font-normal w-full'>
                                <div key={item.cid} className='text-xl '>
                                    {item.title}
                                </div>
                                <div>
                                    {item.description}
                                </div>
                                <hr className='mt-2' />
                            </div>
                        </div>
                    ))
                }
                <div className=' mt-4 flex items-center justify-center'>
                <button type="button" onClick={()=>{navigate("/admin/addCategory")}} className="text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add New category</button>
                </div>
                {/* </NavLink> */}
            </div>

        </section>
    )
}
