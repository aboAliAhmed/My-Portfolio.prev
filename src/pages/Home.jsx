import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {FaFacebook} from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { IoLogoLinkedin } from "react-icons/io";

export default function Home() {
    const [text, setText] = useState('');
    const message = `  I'm an enthusiastic MERN stack developer ready to carry out web development projects or cooperate with a team.`;
  
    useEffect(() => {
      let currentIndex = 0;
  
      const interval = setInterval(() => {
        setText(prevText =>prevText + message[currentIndex]);
        currentIndex++;

        if (currentIndex === message.length - 1 ) {
          clearInterval(interval);
        }
      }, 10);
      return () => clearInterval(interval);
    }, []);

  return (
    <div 
      className="flex flex-col justify-start items-center min-h-[100vh] max-h-fit pt-[28vh] text-lime-900 dark:text-lime-100 text-center"
      id="home"
    >
        <p className="text-[16px] mb-3">{`Hi, I'm`}</p>
        <h1 className="text-green-900 dark:text-green-100 font-bold text-4xl">
          Ahmed Beasar
        </h1>
        <p className="text-green-900 dark:text-green-100 tracking-[.1em] text-[16px] opacity-85 mb-6">
            Full-Stack Developper
        </p>
        <p className="w-[75vw] text-xl">
          {text}
        </p>
        <a 
          target="_blank"
          download="Ahmed_Beasar_CV.pdf" 
          href="https://drive.google.com/file/d/1U3Jo4SoEvI4g9XNvIPWwQdhJe5t6oobt/view?usp=sharing"
          className="text-lime-900 dark:text-lime-100 hover:bg-lime-900  hover:text-lime-100 dark:hover:text-green-200 flex items-center hover:text-xl border-lime-900 border-2 rounded-[26px] mt-6"
        >
          <span className="m-3">Download CV</span>
          <HiDownload className="bg-lime-900 dark:hover:text-green-200 w-14 h-12 p-2 rounded-r-[26px] right-[-5px]"/>
        </a>
      <div className="flex flex-col justify-around items-center w-fit h-60 fixed top-20 right-3 z-10 py-3">
        <a 
          href={'https://www.facebook.com/ahmedabderrahmanbesar/'} 
          target='_blank' 
          className="text-[#0866ff] hover:text-[#1b4488] rounded-full rounded-bl-none"
        >
          <FaFacebook className="w-10 h-10" />
        </a>
        <a
          href={'https://www.linkedin.com/in/ahmed-besar-944220220/'} 
          target='_blank' 
          className="text-[#015cbd] hover:text-[#1b7988] rounded-full rounded-bl-none"
        >
          <IoLogoLinkedin className="w-10 h-10" />
        </a>
        <a
          href={'http://wa.me/+201274625521'} 
          target='_blank' 
          className="text-[#0cc042] hover:text-lime-200 hover:bg-[#0cc042] rounded-full rounded-bl-none" 
        >
          <FaWhatsapp className="w-10 h-10"/>
        </a>
      </div>
    </div>
  )
}
