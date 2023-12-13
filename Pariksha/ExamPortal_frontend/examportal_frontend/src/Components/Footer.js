import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="relative">

      <footer className="bg-white shadow dark:bg-gray-800 ">
        <div className="w-full mx-auto max-w-screen-2xl px-6 py-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <NavLink to="https://flowbite.com/" className="hover:underline">Pariksha</NavLink>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap justify-center mt-0 text-sm font-medium text-gray-500 dark:text-gray-400  sm:mt-0">
            <li>
              <NavLink to="#" className="mr-4 hover:underline md:mr-6 ">Instagram</NavLink>
            </li>
            <li>
              <NavLink to="#" className="mr-4 hover:underline md:mr-6">Linkden</NavLink>
            </li>
            <li>
              <NavLink to="#" className="mr-4 hover:underline md:mr-6">Youtube</NavLink>
            </li>
            <li>
              <NavLink to="#" className="hover:underline">Github</NavLink>
            </li>
          </ul>
        </div>
      </footer>

    </footer>
  )
}
