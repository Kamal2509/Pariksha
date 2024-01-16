import React, { useState } from 'react'
import { SideNavbar } from '../../Components/SideNavbar'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

export const AddQuestion = () => {
    const { data } = useParams();
    const [content, setcontent] = useState();
    const [option1, setoption1] = useState();
    const [option2, setoption2] = useState();
    const [option3, setoption3] = useState();
    const [option4, setoption4] = useState();
    const [image, setimage] = useState();
    const [answer, setanswer] = useState();

    async function submit(event) {
        event.preventDefault();
        try {
            await axios.post("/question/",
                {
                    content: content,
                    option1: option1,
                    option2: option2,
                    option3: option3,
                    option4: option4,
                    answer: answer,
                    quiz: {
                        qid: data
                    }
                });

            setcontent("");
            setoption1("");
            setoption2("");
            setoption3("");
            setoption4("");
            setanswer("");
        }
        catch (err) {
            alert("Somethinfg Went Wrong !!", err);
        }
    }
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-w-full max-w-screen-lg  mx-auto  text-justify min-h-screen">
            <SideNavbar />
            <form className='max-w-xl mx-auto p-4 text-xl font-bold bg-white border text-gray-700 dark:text-white' onSubmit={submit} >
                Add Question

                {/* <input name='title' type='text' value={title} onChange={(event)=>{settitle(event.target.value)}} className='mt-10 block w-3/4  mx-auto text-lg font-medium border border-primary-300 rounded-md py-1 px-4 shadow-sm focus:outline-none focus:border-primary-500 focus:ring-primary-500 focus:ring-1 placeholder:text-gray-300' placeholder='Enter Category Title here' required /> */}

                <textarea name="content" rows="4" value={content} onChange={(event) => { setcontent(event.target.value) }} className=" mt-6 block w-3/4  mx-auto px-4  py-2 text-base font-normal text-gray-900  border-primary-300 rounded-lg border  focus:ring-primary-500 focus:ring-1 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-gray-300" placeholder="Write Content of Question here..." required />
               
                <div className='grid grid-cols-2 gap-4 mt-4 w-3/4  mx-auto '>
                    <input name='title' type='text' value={option1} onChange={(event) => { setoption1(event.target.value) }} className='   text-base font-normal border border-primary-300 rounded-md py-1 px-4 shadow-sm focus:outline-none focus:border-primary-500 focus:ring-primary-500 focus:ring-1 placeholder:text-gray-300' placeholder='Option 1' required />
                    <input name='title' type='text' value={option2} onChange={(event) => { setoption2(event.target.value) }} className='  text-base font-normal border border-primary-300 rounded-md py-1 px-4 shadow-sm focus:outline-none focus:border-primary-500 focus:ring-primary-500 focus:ring-1 placeholder:text-gray-300' placeholder='Option 2' required />
                </div>
                <div className='grid grid-cols-2 gap-4 mt-4 w-3/4  mx-auto '>
                    <input name='title' type='text' value={option3} onChange={(event) => { setoption3(event.target.value) }} className='   text-base font-normal border border-primary-300 rounded-md py-1 px-4 shadow-sm focus:outline-none focus:border-primary-500 focus:ring-primary-500 focus:ring-1 placeholder:text-gray-300' placeholder='Option 3' required />
                    <input name='title' type='text' value={option4} onChange={(event) => { setoption4(event.target.value) }} className='  text-base font-normal border border-primary-300 rounded-md py-1 px-4 shadow-sm focus:outline-none focus:border-primary-500 focus:ring-primary-500 focus:ring-1 placeholder:text-gray-300' placeholder='Option 4' required />
                </div>
                <div className='grid grid-cols-1 mt-4 w-3/4  mx-auto'>
                    <input name='title' type='text' value={answer} onChange={(event) => { setanswer(event.target.value) }} className='  text-base font-normal border border-primary-300 rounded-md py-1 px-4 shadow-sm focus:outline-none focus:border-primary-500 focus:ring-primary-500 focus:ring-1 placeholder:text-gray-300' placeholder='Answer' required />

                </div>
                <div className='mt-4 w-3/4  mx-auto'>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="small_size">Select Image</label>
                    <input class=" block w-full mb- text-xs text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file" />
                </div>
                <div className=' mt-10 flex items-center justify-center'>
                    <button type="submit" className="text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Question</button>
                </div>

            </form>
        </section>
    )
}
