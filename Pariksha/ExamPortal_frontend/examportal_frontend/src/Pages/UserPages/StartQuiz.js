import React from 'react'
import { SideNavbarUser } from '../../Components/SideNavbarUser'

export const StartQuiz = () => {
    return (
        <section className="max-w-screen-lg mx-auto  px-6 py-4 ">

            <SideNavbarUser />

            <div className='text-lg font-bold text-left'>
                Read the instructions of the page carefully
                <span className=' ml-3 text-xs'>
                    (One step more to go*)
                </span>
            </div>

           
            <div className='mt-2 pb-1 border-b-2'>This quiz contains questions related to <span className='font-bold '>Software development</span>. This is only for Practice purpose</div>
            <div className='text-2xl mt-2'>Important Instructions</div>
            <ul className="ps-5 my-5 space-y-1 list-disc list-inside">
                <li>This quiz is only for practice purpose.</li>
                <li>You have to submit quiz with in <span className='font-bold'>20 mins</span>.</li>
                <li>You can attamped any number of questions.Ther are <span className='font-bold'>10 questions</span> in this quiz.</li>
                <li>Each question carries <span className='font-bold'>2 marks</span>. No negative marking for wrong one.</li>
                <li>All questions are MCQ types.</li>
            </ul>
            <div className='text-2xl mt-2 pt-1 border-t-2'>Instructions</div>
            <ul className="ps-5 my-5 space-y-1 list-disc list-inside">
                <li>Click <b>Start Quiz</b> button to start quiz.</li>
                <li>The time will start the moment you click start test button.</li>
                <li>You can not resume quiz, if intrupteddue to any reason.</li>
                <li>Scroll down to move to next question.</li>
                <li>Click on <b>Submit Quiz</b> button to submit the quiz.</li>
                <li>Result of the test is automatically generated in the form of PDF copy.</li>
            </ul>
            <div className='mt-10 flex justify-center'>
            <button type="submit" className="text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Start Quiz</button>
            </div>
        </section>
    )
}
