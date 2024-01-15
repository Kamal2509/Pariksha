import React, { useEffect, useState } from 'react'
import { SideNavbar } from '../../Components/SideNavbar'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const Quizzes = () => {

    const [quizzes, setquizzes] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function getQuizzes() {
            try {
                const response = await axios.get("/quiz/");
                setquizzes(response.data);
                // console.log(response.data);
            } catch (error) {
                console.error('Error fetching quizzes:', error);
            }

        };
        getQuizzes();
    }, [])

    function deleteQuiz(event) {
        // event.preventDefault();
        try {
            console.log(event.target.id)
            axios.delete(`/quiz/${event.target.id}`);
            // axios.delete(`/quiz/${event.target.id}`);
            // getQuizzes();
            // setCategories(response.data);
            // console.log(response.data);
        } catch (error) {
            console.error('Error deleting quiz:', error);
        }
    }
  
    function updateQuiz(event) {
        try {
            const quizid=event.target.id;
            // console.log(quizid);
            navigate(`/admin/updateQuiz/${encodeURIComponent(quizid)}`)
             
        } catch (error) {
            console.error('error updating quiz', error)
        }
    }
    function viewQuizques(event) {
        try {
            const quizid=event.target.id;
            // console.log(quizid);
            navigate(`/admin/viewQuizQuestions/${encodeURIComponent(quizid)}`)
             
        } catch (error) {
            console.error('error updating quiz', error)
        }
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-w-full max-w-screen-2xl  mx-auto  text-justify min-h-screen">
            <SideNavbar />
            <div className='max-w-5xl mx-auto p-4 text-2xl font-bold ' >
                All Quizzes
                {/* <hr className='mt-2' /> */}
                {
                    quizzes.map(item => (
                        <div key={item.qid} className='flex m-2 py-2 bg-white border border-l-8 rounded shadow text-gray-700 dark:text-white'>
                            <div className='flex items-center justify-center  '>
                                <FontAwesomeIcon icon={faCalendarDays} className='w-8 h-8 mx-4' />
                            </div>
                            <div className='ml-4 text-base font-normal w-full'>
                                <div key={item.qid} className='text-xl '>
                                    {item.title}
                                </div>
                                <div>
                                    {item.description}
                                </div>
                                <div className='mt-2'>
                                    <button type="button"  id={item.qid} onClick={viewQuizques} className="text-white bg-primary-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Questions</button>
                                    <span className="text-primary-700 bg-white border focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Max Marks: {item.maxMarks}</span>
                                    <span className="text-primary-700 bg-white border focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Questions: {item.numberofQuestions}</span>
                                    <button id={item.qid} onClick={updateQuiz} type="button" className="text-white bg-primary-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
                                    <button type="button" className="text-white bg-primary-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Attempts</button>
                                    <button id={item.qid} onClick={deleteQuiz} type="button" className="text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Delete</button>
                                </div>

                            </div>
                        </div>
                    ))
                }
                <div className=' mt-4 flex items-center justify-center'>
                    <button type="button" onClick={() => { navigate("/admin/addQuiz") }} className="text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add New Quiz</button>

                </div>
            </div>

        </section>
    )
}
