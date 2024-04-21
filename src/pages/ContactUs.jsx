import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoIosSend } from 'react-icons/io';
import { toast } from 'react-toastify';
import { Oval } from 'react-loader-spinner';
export default function ContactUs() {

  const form = useRef(null);
  const [sending, setSending] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDark = localStorage.getItem('dark');
    setDarkMode(storedDark === 'true');
  }, []);
    const sendEmail = (e) => {
    setSending(true);
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm('service_4v29ohv', 'template_59ywrkh', form.current, {
            publicKey: 'A7wEn0nd8ku9xdMzx',
        })
        .then(
            () => {
                toast.success('sent succesfully')
                setSending(false)
            },
            () => {
                toast.error('An error occurred, try again later')
            },
        );
    }
  };


  return (
    <div onSubmit={sendEmail} className="min-h-[95vh] max-h-fit pt-20" id="contactUs">
      <p className="bg-lime-600 text-white text-2xl w-fit rounded-[40px] mx-auto p-3">
        You can contact me on
      </p>
      <form ref={form} onSubmit={sendEmail} className="p-5 flex flex-col gap-4 w-fit mt-24 mx-auto">
        <div className="flex justify-between items-center gap-4">
          <input 
            type="text" 
            name="name"
            placeholder="Name"
            className="relative border-2 border-lime-600 outline-none sm:w-[500px] rounded-xl py-3 pl-2 leading-10 placeholder:text-stone-500"
          />
          <label className="bg-lime-600 text-center text-white w-20 p-2 rounded-xl">  
            Name
          </label>
        </div>
        <div className="flex justify-between items-center gap-4">
          <input 
            type="email" 
            name="email"
            placeholder="Email"
            className="relative border-2 border-lime-600 outline-none sm:w-[500px] w-full rounded-xl py-3 pl-2 leading-10 placeholder:text-stone-500"
          />
          <label className="bg-lime-600 text-center text-white w-20 p-2 rounded-xl">  
            Email
          </label>
        </div>
        <div className="flex justify-between items-center relative w-full min-w-[200px]">
          <textarea
              name='message'
              className="peer relative border-2 border-lime-600 outline-none sm:w-[500px] w-full h-52 rounded-xl py-3 pl-2 leading-10 !resize-none placeholder:text-stone-500"
              placeholder="Content" />
          <label
            className="bg-lime-600 text-white w-20 p-2 rounded-xl ml-4">
            Message
          </label>
        </div>
        <button
          className={`flex justify-center gap-2 text-md w-full select-none rounded-lg ${sending ? 'bg-stone-600' : 'bg-stone-900'}  py-3 px-6 text-center align-middle font-sans  font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none dark:bg-lime-200 dark:text-stone-800`}
          type="submit">
          {sending ?
            <Oval
                height="30"
                width="30"
                color={darkMode ? "#000" : "#65a30d00"}
                ariaLabel="loading"
            /> : (<dev className="flex">
              Send
              <IoIosSend className='text-2xl ml-1' />
              </dev>)}
        </button>
      </form>
    </div>
  )
}