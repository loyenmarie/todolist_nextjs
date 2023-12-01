/* eslint-disable @next/next/no-img-element */
import { getAllTodos } from "@/api";
import AddTask from "./AddTask";
import TodoList from "./TodoList";
import Link from 'next/link'
import { FaListUl } from "react-icons/fa";

export default async function TodoWrapper() {
    //fetches list of todos
    const tasks = await getAllTodos();

    return (
      <div>
        <div className="navbar bg-base-300">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Todo List App <FaListUl /></a>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-xl mx-auto mt-4">
          <div className="text-center my-5 flex flex-col gap-4">
            <AddTask />
          </div>
          <TodoList tasks={tasks} />
        </div>

        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Lorem Ipsum All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
}


