import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Feedback = () => {
    
    const [showModal, setShowModal] = useState(true);
    return (
        <>
            {/* <button
                className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Fill Details
            </button> */}
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative my-6 mx-auto w-1/2  max-w-6xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">Feedback</h3>
                                    <button className="bg-transparent border-0 text-black float-right flex items-center" onClick={() => setShowModal(false)}>
                                    
                                        <span >
                                            <FontAwesomeIcon icon={faCircleXmark} className="w-8 h-8" />
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                                        <label className="mb-3 block text-black text-sm ">
                                            How was your experience?
                                        </label>
                                        <textarea  rows="3" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                        <label className=" mt-5  mb-3 block text-black text-sm  ">
                                            Please write your valueable suggestions
                                        </label>
                                        <textarea  rows="4" className="shadow appearance-none border rounded w-full h- py-2 px-1 text-black" />

                                    </form>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button  type="submit"  onClick={() => setShowModal(false)} className="text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Feedback;

