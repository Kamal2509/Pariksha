import React from 'react'
import { SideNavbar } from '../../Components/SideNavbar'

export const Quizzes = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-w-full max-w-screen-2xl  mx-auto  text-justify min-h-screen">
           <SideNavbar/> 
           <div className='max-w-6xl mx-auto p-4 text-xl font-bold bg-white border text-gray-700 dark:text-white' >
            Quizzes
            </div>
        </section>
  )
}
