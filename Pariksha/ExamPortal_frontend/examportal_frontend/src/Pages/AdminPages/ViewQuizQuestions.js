import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SideNavbar } from '../../Components/SideNavbar'

export const ViewQuizQuestions = () => {
    const { data } = useParams();
    const [Questions, setQuestions] = useState([]);
    console.log(data)
    useEffect(() => {
        async function getQuizQues() {
            try {
                const response = await axios.get(`/question/quiz/${data}`);
                setQuestions(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching quizzes:', error);
            }

        };
        getQuizQues();
    }, [])
    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-w-full max-w-screen-2xl  mx-auto  text-justify min-h-screen">
            <SideNavbar />
            <div className='max-w-4xl mx-auto p-4 text-2xl font-bold ' >
                <div className="p-2 text-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-between ">
                    <div>Questions of Quiz</div>
                    <div>
                        <button type="submit" className="text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Question</button>
                    </div>
                </div>

                {Questions.map(item => (
                    <div key={item.quesid} className=" mt-2 p-6 text-base bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    </div>
                ))}
            </div>

        </section >
    )
}
