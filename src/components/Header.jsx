import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDark = localStorage.getItem('dark');
    setDarkMode(storedDark === 'true');
  }, []);

  const toggleDarkMode = () => {
    const updatedDark = !darkMode;
    setDarkMode(updatedDark);
    localStorage.setItem('dark', updatedDark);
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className='
      bg-lime-200 dark:bg-lime-900 shadow-sm shadow-lime-500 dark:shadow-lime-800 w-[80vw] flex justify-around items-center 
      fixed h-fit p-3 my-3 rounded-[30px] left-1/2 transform -translate-x-1/2 z-10
    '> 
      <div className='flex flex-col'>
        <a className='text-gradient text-green-600 dark:text-green-400 w-fit font-bold' href='#home'>
          Ahmed 
          <span className='text-green-500 dark:text-green-300 ml-1'>Beasar</span>
        </a>
        <p className='tracking-[.415em] text-[8px] text-green-900 dark:text-green-300'>
          MERN STACK DEV
        </p>
      </div>
      <div className='text-lime-600 dark:text-lime-300 hidden sm:flex justify-between items-center gap-[4vw]'>
        <a href='#skills'>
          Skills
        </a>
        <a href='#project'>
          Projects
        </a>
        <a href='#contactUs'>
          Contact Us
        </a>
      </div>
      <button 
        onClick={() => toggleDarkMode()}
        className='fixed right-5 top-5'
      >
        {
          darkMode 
            ? (<FaSun className="text-orange-500 w-6 h-6"/>) 
            : (<FaMoon className="text-green-900 w-6 h-6"/>)
        }
      </button>
    </div>
  )
}
