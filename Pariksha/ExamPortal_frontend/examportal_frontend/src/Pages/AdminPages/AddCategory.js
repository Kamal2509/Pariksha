import React, { useState } from 'react'
import { SideNavbar } from '../../Components/SideNavbar'
import axios from 'axios';

export const AddCategory = () => {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");

    async function submit(event) {
        event.preventDefault();
        try {
            await axios.post("/category/",
                {
                    title: title,
                    description: description,

                });

            settitle("");
            setdescription("");

        }
        catch (err) {
            alert("Somethinfg Went Wrong !!",err);
        }
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-w-full max-w-screen-2xl  mx-auto  text-justify min-h-screen">
            <SideNavbar />
            <div className='max-w-6xl mx-auto p-4 text-2xl font-bold bg-white border text-gray-700 dark:text-white' >
                Add Category
                {/* <hr className='mt-2' /> */}
                <form onSubmit={(e) => submit(e)}>
                    <input name='title'  type='text'  value={title} onChange={(event)=>{settitle(event.target.value)}}  className='mt-10 block w-3/4  mx-auto text-xl font-medium border border-primary-300 rounded-md py-1 px-4 shadow-sm focus:outline-none focus:border-primary-500 focus:ring-primary-500 focus:ring-1 placeholder:text-gray-300' placeholder='Enter Category Title here' required/>

                    <textarea name="description" rows="10"  value={description} onChange={(event)=>{setdescription(event.target.value)}} className=" mt-6 block w-3/4  mx-auto px-4  py-2 text-xl font-normal text-gray-900  border-primary-300 rounded-lg border  focus:ring-primary-500 focus:ring-1 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-gray-300" placeholder="Write Category description here..." required/>

                    <div className=' mt-4 flex items-center justify-center'>
                        <button type="submit" className="text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add New category</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
