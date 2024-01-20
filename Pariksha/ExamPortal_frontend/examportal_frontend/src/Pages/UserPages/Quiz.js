import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SideNavbar } from '../../Components/SideNavbar'
import { SideNavbarUser } from '../../Components/SideNavbarUser'
import Stopwatch from '../../Components/Stopwatch'
import Feedback from './Feedback'

export const Quiz = () => {
    const { data } = useParams();
    const [updateui, setupdateui] = useState(false);
    const [Questions, setQuestions] = useState([]);
    const [Questions1, setQuestions1] = useState([]);
    const navigate = useNavigate();
  
    async function getQuizQues() {
        try {
            const response = await axios.get(`/question/quiz/${data}`);
            setQuestions(response.data);
            setQuestions1(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching Questions:', error);
        }

    };
    useEffect(() => {

        getQuizQues();
    }, [updateui])

    const addAnswer = (event) => {
        const quesId = event.target.id
        setQuestions1(prevArray => {

            // Find the index of the object in the array
            const objectIndex = prevArray.findIndex(obj => obj.quesid == quesId);
            console.log(objectIndex);
            // If the object is found, add a new key 'newKey' with value 'newValue'
            if (objectIndex !== -1) {
                const updatedObject = { ...prevArray[objectIndex], SelectAns: `${event.target.value}` };
                const newArray = [...prevArray];
                newArray[objectIndex] = updatedObject;
                console.log(newArray);
                return newArray;

            }
        });

    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-w-full max-w-screen-2xl  min-h-screen">
            <div className='fixed'>
                <Stopwatch />
            </div>

            <div className='max-w-4xl mx-auto p-4 text-2xl font-bold  ' >
                <div className="p-2 text-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-between ">
                    <div>Questions of Quiz</div>

                </div>

                {Questions.map((item, index) => (
                    <div key={item.quesid} className=" mt-2 px-6 py-3 text-base font-medium bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        Q.{index + 1}) . <span className='font-medium'>{item.content}</span>
                        <div className="p-3 text-sm line" >


                            <ul className="w-48 text-sm font-medium text-gray-900 bg-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li className="w-full" >
                                    <div className="flex items-center ps-3 " >
                                        <input id={item.quesid} type="radio" onChange={(event) => addAnswer(event)} value={item.option1} name={item.quesid} className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="list-radio-license" className="cursor-pointer w-full py-1 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">{item.option1} </label>
                                    </div>
                                </li>
                                <li class="w-full ">
                                    <div className="flex items-center ps-3">
                                        <input id={item.quesid} type="radio" onChange={(event) => addAnswer(event)} value={item.option2} name={item.quesid} className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="list-radio-id" className="cursor-pointer w-full py-1 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">{item.option2}</label>
                                    </div>
                                </li>
                                <li class="w-full ">
                                    <div className="flex items-center ps-3">
                                        <input id={item.quesid} type="radio" onChange={(event) => addAnswer(event)} value={item.option3} name={item.quesid} className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="list-radio-military" className="cursor-pointer w-full py-1 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">{item.option3}</label>
                                    </div>
                                </li>
                                <li class="w-full 0">
                                    <div class="flex items-center ps-3">
                                        <input id={item.quesid} type="radio" onChange={(event) => addAnswer(event)} value={item.option4} name={item.quesid} className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="list-radio-passport" className="cursor-pointer w-full py-1 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">{item.option4}</label>
                                    </div>
                                </li>
                            </ul>

                        </div>



                    </div>
                ))}
                <div className="p-2 text-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center">
                    <button type="submit" className="text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit Quiz</button>
                </div>
            </div>
          
            
        </section >
    )
}
