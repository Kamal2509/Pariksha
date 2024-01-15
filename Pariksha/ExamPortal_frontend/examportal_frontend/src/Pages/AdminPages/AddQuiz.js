import React, { useEffect, useState } from 'react'
import { SideNavbar } from '../../Components/SideNavbar'
import { NavLink } from 'react-router-dom'
import axios from 'axios';

export const AddQuiz = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [title, settitle] = useState();
    const [maxMarks, setmaxMarks] = useState();
    const [categorytype, setcategory] = useState("a");
    const [numberofQuestions, setnumberofQuestions] = useState();
    const [description, setdescription] = useState();
    const [status, setstatus]= useState(false);
    const handleDropdownToggle = () => {
        // Set a delay before toggling the dropdown state
        setTimeout(() => {
            setIsOpen(!isOpen);
        }, 100); // Adjust the delay time as needed
    };
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

    function setcatagorydata(event){
        
        setIsOpen(false);
        setcategory(event.target.id);
        // console.log(event.target.id)
    }

    async function submit(event) {
        event.preventDefault();
        try {
            await axios.post("/quiz/",
                {
                    title: title,
                    description: description,
                    maxMarks:maxMarks,
                    numberofQuestions:numberofQuestions,
                    active:status,
                    category:{
                        cid:categorytype
                    }
                });

            settitle("");
            setdescription("");
            setmaxMarks("");
            setnumberofQuestions("");
        }
        catch (err) {
            alert("Somethinfg Went Wrong !!",err);
        }
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-w-full max-w-screen-lg  mx-auto  text-justify min-h-screen">
            <SideNavbar />
            <form className='max-w-xl mx-auto p-4 text-xl font-bold bg-white border text-gray-700 dark:text-white' onSubmit={submit} >
                Add Quiz
                
                <input name='title' type='text' value={title} onChange={(event)=>{settitle(event.target.value)}} className='mt-10 block w-3/4  mx-auto text-lg font-medium border border-primary-300 rounded-md py-1 px-4 shadow-sm focus:outline-none focus:border-primary-500 focus:ring-primary-500 focus:ring-1 placeholder:text-gray-300' placeholder='Enter Category Title here' required />

                <textarea name="description" rows="4" value={description} onChange={(event)=>{setdescription(event.target.value)}} className=" mt-6 block w-3/4  mx-auto px-4  py-2 text-base font-normal text-gray-900  border-primary-300 rounded-lg border  focus:ring-primary-500 focus:ring-1 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-gray-300" placeholder="Write Category description here..." required />

                <div className='grid grid-cols-2 gap-4 mt-4 w-3/4  mx-auto '>
                    <input name='title' type='text' value={maxMarks} onChange={(event)=>{setmaxMarks(event.target.value)}} className='   text-base font-normal border border-primary-300 rounded-md py-1 px-4 shadow-sm focus:outline-none focus:border-primary-500 focus:ring-primary-500 focus:ring-1 placeholder:text-gray-300' placeholder='Maximum Marks' required />
                    <input name='title' type='text' value={numberofQuestions} onChange={(event)=>{setnumberofQuestions(event.target.value)}} className='  text-base font-normal border border-primary-300 rounded-md py-1 px-4 shadow-sm focus:outline-none focus:border-primary-500 focus:ring-primary-500 focus:ring-1 placeholder:text-gray-300' placeholder='Number of Questions' required />
                </div>
                <div className='mt-4 w-3/4  mx-autow-3/4  mx-auto'>
                    <label className="relative inline-flex items-center cursor-pointer ">
                        <input type="checkbox" value={status} onClick={()=>{setstatus(!status)}} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Publish Status</span>
                    </label>
                </div>
                <div className='w-3/4 mx-auto my-4 relative'>
                    <button id="dropdownDelayButton" type="button" onClick={handleDropdownToggle} className=" w-full  text-gray-900  bg-white border border-primary-300 hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center justify-between dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Category
                    
                        <svg class="w-2.5 h-2.5 ms-3 text-primary-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                       
                    </button>
                    {isOpen && (
                        <div className=" absolute z-1 w-full bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                {/* <li>
                               <NavLink to={""} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</NavLink>
                            </li> */}
                           { categories.map(item=> (
                             <li onClick={setcatagorydata}  id={item.cid} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              {item.title}
                             </li>
                            ))}
                               
                                {/* <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li> */}
                            </ul>
                        </div>
                    )}
                    {/* Dropdown menu  */}

                </div>
                <div className=' mt-10 flex items-center justify-center'>
                        <button type="submit" className="text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add New quiz</button>
                    </div>
            </form>
        </section>
    )
}
