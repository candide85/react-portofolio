"use client";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai'
import { VscAzureDevops } from "react-icons/vsc";
import { AiOutlineGithub } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";

import Image from 'next/image';
import moi from '../public/images/moi.png'
import web1 from '../public/images/home.png';
import web2 from '../public/images/spl.png';
import web3 from '../public/images/Screen2.png';
import web4 from '../public/images/Screen3.png';
import web5 from '../public/images/lp.png';
// import web6 from '../public/images/screen3.pdf';
import { useState } from 'react';


export default function Portofolio() {
  const [darkMode, setDarkMode] = useState(false);  

  return (
    <div className={darkMode ? "dark" : ""}>
    <main className=' bg-gray-150 px-10 md:px-20 lg:px-40 dark:bg-gray-900' >
      <section className="min-h-screen">
        <nav className=' py-10 mb-12 flex justify-between'>
          <h1 className=' text-2xl font-burtons font-bold dark:text-white border-b-2 border-black '>Developed by Joel</h1>
          <ul className=' flex items-center'>
            <li><BsFillMoonStarsFill onClick={() => {setDarkMode(!darkMode)}} className='dark:text-white cursor-pointer text-2xl' /></li>
            {/* <li> */}
              <a href='/myresume.pdf' download='example-pdf-cv' target='_blank' rel='noreferrer' className=' bg-teal-600 text-white px-4 py-2 rounded-md ml-8'>
                <button>Download my Resume</button>
              </a>
            {/* </li> */}
          </ul>
        </nav>
        <div className=' text-center p-10 flex flex-col justify-items-center'>
          <h2 className=' text-6xl text-teal-600 font-medium py-2 md:text-6xl mb-8'>Joel Assagou</h2>
          <h3 className=' text-3xl py-2 md:text-3xl dark:text-white font-medium'>Software Developer - FullStack Developer UX UI Designer.</h3>
          <p className=' py-5 leading-8 text-gray-800 md:text-2xl dark:text-white'>
            I am a software developer, a good team player, dedicated to learn new things,
            hard worker; using tech to make life better.
          </p>
        </div>
        <div className=' flex justify-center text-5xl gap-16 py-3 text-gray-600'>
          <a href="https://www.linkedin.com/in/assagou-joel-b4a039225">
            <AiFillLinkedin />
          </a>
          <a href="https://www.github.com/candide85">
            <AiOutlineGithub />
          </a>
        </div>
        <div className=' mx-auto mt-20 relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden'>
          <Image src={moi} alt=''  />
        </div>
      </section>
      <section>
        <div>
          <h3 className=' text-3xl font-semibold py-1 dark:text-white mt-6'>SERVICE I OFFER</h3>
          <p className=' text-xl py-2 leading-8 text-gray-800 dark:text-white mb-3'>Since a biginning of my journey as a developer, I have done 
            remote work for <span className=' text-teal-600'>companies </span>
            and collaborate with people.
          </p>
        </div>
        <div className=' lg:flex gap-10'>
          <div className=' text-center w-screen  p-10 rounded-xl shadow-lg dark:bg-white'>
            <div className=' flex justify-center'>
              <a href="" className=''>
                <VscServerProcess size={ 100} />
              </a>

            </div>
              <h3 className=' text-lg font-medium pt-8 pb-2'>WEB DEVELOPMENT</h3>
              <p className=' text-left py-2 text-xl'>
                  Create a maintain website, design according to the customer need, 
                  using of various programming language to frameworks and libraries
                  Using of website builders like WordPress Wix and many more.
              </p>
              <h4 className=' py-4 text-teal-600 font-medium text-2xl'>Programming language and App Builder</h4>
              <p className=' text-gray-800 py-1 font-medium'>Javascript (Node, Express, React, Wix - WordPress - Bubble)</p>
              <p className=' text-gray-800 py-1 font-medium'>Design (CSS - SASS - Tailwind - Bootstrap)</p>
              <p className=' text-gray-800 py-1 font-medium'>Databases (MongoDB - SQL - PostgresSQL)</p>
            </div>
            <div className=' text-center w-screen  p-10 rounded-xl shadow-lg dark:bg-white'>
              <div className=' flex justify-center'>
              <MdOutlineDesignServices size={100} />

              </div>
              <h3 className=' text-lg font-medium pt-8 pb-2'>UX UI DESIGN</h3>
              <p className=' py-2 text-left text-xl' >
                  Identifies new opportunities to create better user experiences. 
                  Aesthetically pleasing branding strategies help effectively reach more customers. 
                  Also ensure that the end-to-end journey with their products or services meets desired outcomes.
              </p>
              <h4 className=' py-4 text-teal-600 font-medium text-2xl'>Design tools are use</h4>
              <p className=' text-gray-800 py-1 font-medium'>Photoshop</p>
              <p className=' text-gray-800 py-1 font-medium'>Figma</p>
            </div>
            <div className='text-center w-screen  p-10 rounded-xl shadow-lg dark:bg-white'>
              <div className=' flex justify-center'>
              <VscAzureDevops size={ 100} />
              </div>
              <h3 className=' text-lg font-medium pt-8 pb-2'>DEVOPS</h3>
              <p className=' py-2 text-xl text-left'>
              The combination of cultural philosophies, practices, and tools that increases an organizations ability to 
              deliver applications and services at high velocity: evolving and improving products at a faster pace than 
              organizations using traditional software development and infrastructure management processes.
              </p>
              <h4 className=' text-teal-600 font-medium text-2xl'>Tools are use</h4>
              <p className=' text-gray-800 py-1 font-medium'>Docker</p>
              <p className=' text-gray-800 py-1 font-medium'>CI/CD</p>
              <p className=' text-gray-800 py-1 font-medium'>Agile Methodology</p>           
            </div>
        </div>
            <div>
          <h3 className=' text-3xl font-semibold mt-6 py-5 dark:text-white'>PORTOFOLIO</h3>
          <p className='dark:text-white text-xl py-2 leading-8 text-gray-800'>Since a biginning of my journey as a developer, I have done 
            remote work for <span className=' text-teal-600'>companies </span>
            and collaborate with talented developers to create digital products for business and consumer use.            
          </p>
          <p className=' text-xl py-2 leading-8 text-gray-800 dark:text-white'>
            I offers from a wide range of services.
          </p>
        </div>
        <div className=' grid grid-cols-4 gap-1 py-10 '>
          <div className=''>
            <Image src={web1} alt='' className=' rounded-lg object-cover' width={'100%'} height={'100%'}  />
          </div>
          <div className=''>
            <Image src={web4} alt='' className=' rounded-lg object-cover' width={'100%'} height={'100%'}  />
          </div>
          <div className=''>
            <Image src={web2} alt='' className=' rounded-lg object-cover' width={'300'} height={'50%'}  />
          </div>         
          <div className=''>
            <Image src={web5} alt='' className=' rounded-lg object-cover' width={'300'} height={'100%'}  />
          </div>         
        </div>
        <hr className=' w-full h-2 border-1 border-black dark:border-white ' />
        <div className=' flex flex-row gap-20 p-5 justify-around mt-4 mb-10'>          
          <div>
            <h1 className=' mb-2 font-semibold text-2xl dark:text-white '>School Management App using PHP</h1>
            <a href="https://github.com/candide85/php-school-management" className=' text-xl text-red-400'>school management github link</a>
          </div>
          <div>
            <h1 className=' mb-2 font-semibold text-2xl dark:text-white '>Login - Register using node js and react js</h1>
            <a href="https://github.com/candide85/login.register.fullstach" className='text-xl text-red-400'> login register github link</a>
          </div>
          <div>
            <h1 className=' mb-2 font-semibold text-2xl dark:text-white '>Book Api using Node js</h1>
            <a href="https://github.com/candide85/book_api" className='text-xl text-red-400'>book app github link</a>
          </div>          
        </div>
      </section>
    </main>
    </div>
  )
}
