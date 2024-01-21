import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Result = ({ ques }) => {
    const [showResult, setShowResult] = useState(true);
    let [result, setresult] = useState();
    console.log(ques)
    
    useEffect(() => {
        
        async function getresult() {
            const Result = await axios.post('/quiz/evaluateQuiz', ques);
            setresult(Result.data)
            console.log(Result.data.attemped)
         };
         getresult();
    }, [])
   
    
    console.log(result)
   
    return (
        <>
            {
            
            showResult ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative my-6 mx-auto w-1/2  max-w-6xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">Result</h3>
                                    <button className="bg-transparent border-0 text-black float-right flex items-center" onClick={() => setShowResult(false)}>

                                        <span >
                                            <FontAwesomeIcon icon={faCircleXmark} className="w-8 h-8" />
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-2 flex-auto">
                                    <div className='ml-10 mb-6 text-lg mt-2 block'>
                                        <div className='mt-2'>Marks Got: {Math.floor(10)} </div>
                                        <div className='mt-2'>Correct Answers:  </div>
                                        <div className='mt-2' >Questions Attemped: </div>
                                    </div>
                                </div>
                                <div className='py-3 flex justify-center'>
                                    <button type="submit" onClick={window.print} className="text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Print</button>
                                    <button type="submit" className="text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Home</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
       
    )
}
