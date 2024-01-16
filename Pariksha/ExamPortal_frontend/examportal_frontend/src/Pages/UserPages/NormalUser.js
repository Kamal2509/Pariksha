import React, { useEffect, useState } from 'react'
import { SideNavbarUser } from '../../Components/SideNavbarUser'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export const NormalUser = () => {
  const [quizzes, setquizzes] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    async function getQuizzes() {
      try {
        const response = await axios.get("/quiz/");
        setquizzes(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }

    };
    getQuizzes();
  }, [])
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-w-full max-w-screen-2xl  mx-auto  text-justify min-h-screen">
      <SideNavbarUser />
      <div className='max-w-full mx-auto p-4 text-2xl font-bold  flex flex-wrap items-center justify-center' >
        {
          quizzes.map(item => (
            <>
              <div key={item.qid} className='w-1/4 m-2 px-4 py-2 bg-white border border-l-8 rounded shadow text-gray-700 dark:text-white'>

                <div className=' flex ml-4 text-sm font-normal w-full'>
                  <div className='flex items-center justify-center  '>
                    <FontAwesomeIcon icon={faCalendarDays} className='w-8 h-8 mx-4' />
                  </div>

                  <div>
                    <div key={item.qid} className='text-base font-bold'>
                      {item.title}
                    </div>
                    <div className='text-base text-gray-400'>
                      {item.category.title}
                    </div>
                  </div>

                </div>
                <div className='mt-1  text-sm font-normal w-full'>
                  {item.description}
                </div>
                <div className='mt-2 flex flex-wrap'>
                  <button id={item.quesid} type="button" className="text-blue-700 hover:text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">View</button>

                  <button id={item.quesid} type="button" className="text-red-700 hover:text-white  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Start</button>

                  <span className="text-primary-700 bg-white focus:ring-blue-300 font-medium text-sm px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">M.M.: {item.maxMarks}</span>
                  <span className="text-primary-700 bg-white  focus:ring-blue-300 font-medium  text-sm px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ques: {item.numberofQuestions}</span>
                </div>
              </div>

            </>
          ))
        }
      </div>
    </section>
  )
}
