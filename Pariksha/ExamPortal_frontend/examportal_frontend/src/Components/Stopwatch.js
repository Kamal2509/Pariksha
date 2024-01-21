import React, { useState, useEffect } from 'react';
import Feedback from '../Pages/UserPages/Feedback';

const Stopwatch = () => {
    const [time, setTime] = useState(10);
    const [isRunning, setIsRunning] = useState(true);
    const [progress, setprogress] = useState(0);
    const [showModal1, setShowModal1] = useState(false);
    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);

        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isRunning]);

    // const startStop = () => {
    //     setIsRunning(!isRunning);
    // };

    // const reset = () => {
    //     setTime(0);
    //     setIsRunning(false);
    // }; 

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')} min : ${String(remainingSeconds).padStart(2, '0')} sec`;
    };

    useEffect(() => {
        setprogress(Math.floor(100 - time / 10 * 100));
        // console.log(progress)
        if (progress >= 100) {
            // console.log(progress)
            setShowModal1(true);
            setTime(0);
           setIsRunning(false)
        }
    }, [time]);

    const circumference = 30 * 2 * Math.PI
    return (
        <div>
            <div className="ml-1 mt-1 p-2 w-48 text-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-wrap items-center justify-between ">
                <div>Progress</div>
                <div className='text-xs'>Quiz will automatically submit when timer will reach 0:0</div>
                <div className='flex justify-center'>
                    {formatTime(time)}
                </div>

                <div x-data="scrollProgress" className="ml-8 inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5" >
                    <svg class="w-20 h-20">
                        <circle
                            className="text-gray-300"
                            stroke-width="5"
                            stroke="currentColor"
                            fill="transparent"
                            r="30"
                            cx="40"
                            cy="40"
                        />
                        <circle
                            className="text-blue-600"
                            stroke-width="5"
                            stroke-dasharray={`${circumference}`}
                            stroke-dashoffset={`${circumference - progress / 100 * circumference}`}
                            stroke-linecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="30"
                            cx="40"
                            cy="40"
                        />
                    </svg>
                    <span className="absolute text-xl text-blue-700" x-text=''>{`${progress}%`}</span>
                </div>
            </div>
            {/* <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={reset}>Reset</button> */}
            {showModal1 ? <Feedback /> : null}
        </div>
    );
};

export default Stopwatch;
