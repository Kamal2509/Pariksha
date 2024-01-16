import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SideNavbar } from '../../Components/SideNavbar'

export const ViewQuizQuestions = () => {
    const { data } = useParams();
    const[updateui, setupdateui]=useState(false);
    const [Questions, setQuestions] = useState([]);
    const navigate = useNavigate();
    // console.log(data)
    async function getQuizQues() {
        try {
            const response = await axios.get(`/question/quiz/${data}`);
            setQuestions(response.data);
            console.log("2");
        } catch (error) {
            console.error('Error fetching Questions:', error);
        }

    };
    useEffect(() => {
       
        getQuizQues();
    }, [updateui])
    function AddQuestion(event) {
        try {

            // console.log(quizid);
            navigate(`/admin/addQuestion/${encodeURIComponent(data)}`)

        } catch (error) {
            console.error('error add question quiz', error)
        }
    }
     async function DeleteQuestion(event) {
        try {
            const response =await axios.delete(`/question/${event.target.id}`);
            setupdateui(!updateui);
            console.log("1");
        } catch (error) {
            console.error('Error fetching quizzes:', error);
        }
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-w-full max-w-screen-2xl  mx-auto  text-justify min-h-screen">
            <SideNavbar />
            <div className='max-w-4xl mx-auto p-4 text-2xl font-bold ' >
                <div className="p-2 text-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-between ">
                    <div>Questions of Quiz</div>
                    <div>
                        <button type="submit" onClick={AddQuestion} className="text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Question</button>
                    </div>
                </div>

                {Questions.map(item => (
                    <div key={item.quesid} className=" mt-2 px-6 py-3 text-base bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        Q1). <span className='font-normal'>{item.content}</span>
                        <div className="p-3 text-sm line" >

                            <div className='mb-2 '>
                                1). <span className='font-normal'>{item.option1}</span>
                            </div>
                            <div className='mb-2'>
                                2). <span className='font-normal'>{item.option2}</span>
                            </div>

                            <div className='mb-2'>
                                3). <span className='font-normal'>{item.option3}</span>
                            </div>
                            <div >
                                4). <span className='font-normal'>{item.option4}</span>
                            </div>
                        </div>
                        <div>
                            Answer: <span className=' text-sm font-normal'>{item.answer}</span>
                        </div>
                        <div className='mt-3'>
                        <button id={item.quesid} type="button"  className="text-blue-700 hover:text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Update</button>

                        <button id={item.quesid}  type="button" onClick={DeleteQuestion} className="text-red-700 hover:text-white  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
                        </div>
                    </div>
                ))}
            </div>

        </section >
    )
}
