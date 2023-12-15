import React from 'react'
import { SideNavbar } from '../Components/SideNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export const Profile = () => {
  let currentuser=JSON.parse(localStorage.getItem('user'));
  
  return (
    <section className="  bg-gray-50 dark:bg-gray-900 max-w-screen-2xl flex items-center justify-center mx-auto  text-justify">
      <SideNavbar />
      <div class="w-full px-6   min-h-screen flex-wrap items-center justify-center bg-white border border-gray-200  shadow text-center dark:bg-gray-800 dark:border-gray-700 sm:p-0">
        <h5 class="mt-10 mb-4 text-2xl font-bold  text-gray-900 dark:text-white">Profile Details</h5>
        <div className="flex items-center justify-center">
          <div className="w-24 h-24 border-2 border-black rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faUser} className="w-16 h-16" />
          </div>
        </div>
        <h5 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white">{currentuser.firstname?currentuser.firstname:'user'} {currentuser.lastname}</h5>

        {/* table data  */}
        <div className="w-1/3 mx-auto flex items-center justify-center my-4 mb-8 text shadow-md">

          <table className="w-full text-sm text-center  text-gray-500 dark:text-gray-400  ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Username
                </th>
                <td className="px-6 py-4">
                  {currentuser.username}
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  userid
                </th>
                <td className="px-6 py-4">
                  {currentuser.userId}
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Phone
                </th>
                <td className="px-6 py-4">
                 {currentuser.phone}
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Role
                </th>
                <td className="px-6 py-4">
                  Admin
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Status
                </th>
                <td className="px-6 py-4">
                  {currentuser.enabled?'Active':'Inactive'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
        <button type="button" class="text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Share</button>
      </div>

    </section>
  )
}
