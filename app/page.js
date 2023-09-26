"use client";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillYoutube, AiFillLinkedin} from 'react-icons/ai'
import Image from 'next/image';
import deved from '../public/images/dev-ed-wave.png'
import design from '../public/images/design.png';
import code from '../public/images/code.png';
import consulting from '../public/images/consulting.png';
import web1 from '../public/images/web1.png';
import web2 from '../public/images/web2.png';
import web3 from '../public/images/web3.png';
import web4 from '../public/images/web4.png';
import web5 from '../public/images/web5.png';
import web6 from '../public/images/web6.png';
import { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
    <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900' >
      <section className="min-h-screen">
        <nav className=' py-10 mb-12 flex justify-between'>
          <h1 className=' text-xl font-burtons font-bold dark:text-white'>Developedbyed</h1>
          <ul className=' flex items-center'>
            <li><BsFillMoonStarsFill onClick={() => {setDarkMode(!darkMode)}} className='dark:text-white cursor-pointer text-2xl' /></li>
            <li>
              <a href='#' className=' bg-cyan-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a>
            </li>
          </ul>
        </nav>
        <div className=' text-center p-10'>
          <h2 className=' text-6xl text-teal-600 font-medium py-2 md:text-6xl'>Joel Assagou</h2>
          <h3 className=' text-3xl py-2 md:text-3xl dark:text-white'>Software Developer - FullStack Developer.</h3>
          <p className=' text-xl py-5 leading-8 text-gray-800 md:text-xl dark:text-white'>
            I am a software developer, a good team player, dedicated to learn new things,
            hard worker; using tech to make life better.
          </p>
        </div>
        <div className=' flex justify-center text-5xl gap-16 py-3 text-gray-600'>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className=' mx-auto mt-20 relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden'>
          <Image src={deved} layout='fill' objectFit='cover' />
        </div>
      </section>
      <section>
        <div>
          <h3 className=' text-3xl py-1 dark:text-white'>Services I offer</h3>
          <p className=' text-xl py-2 leading-8 text-gray-800 dark:text-white'>Since a biginning of my journey as a developer, I have done 
            remote work for <span className=' text-teal-300'>companies </span>
            and collaborate with people.
          </p>
        </div>
        <div className=' lg:flex gap-10'>
          <div className=' text-center w-screen  p-10 rounded-xl shadow-lg dark:bg-white'>
            <div className=' flex justify-center'>
              <Image src={design} width={100} height={100} className=' flex-col items-center'/>

            </div>
              <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className=' py-2'>
                Creating elegant design suited for your need.
              </p>
              <h4 className=' py-4 text-teal-600'>Design tools are use</h4>
              <p className=' text-gray-800 py-1'>Photoshop</p>
              <p className=' text-gray-800 py-1'>Illustrator</p>
              <p className=' text-gray-800 py-1'>Figma</p>
            </div>
            <div className=' text-center w-screen  p-10 rounded-xl shadow-lg dark:bg-white'>
              <div className=' flex justify-center'>
              <Image src={code} width={100} height={100} />

              </div>
              <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className=' py-2'>
                Creating elegant design suited for your need.
              </p>
              <h4 className=' py-4 text-teal-600'>Design tools are use</h4>
              <p className=' text-gray-800 py-1'>Photoshop</p>
              <p className=' text-gray-800 py-1'>Illustrator</p>
              <p className=' text-gray-800 py-1'>Figma</p>
            </div>
            <div className='text-center w-screen  p-10 rounded-xl shadow-lg dark:bg-white'>
              <div className=' flex justify-center'>
              <Image src={consulting} width={100} height={100} />
              </div>
              <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className=' py-2'>
                Creating elegant design suited for your need.
              </p>
              <h4 className=' py-4 text-teal-600'>Design tools are use</h4>
              <p className=' text-gray-800 py-1'>Photoshop</p>
              <p className=' text-gray-800 py-1'>Illustrator</p>
              <p className=' text-gray-800 py-1'>Figma</p>
            </div>
        </div>
            <div>
          <h3 className=' text-3xl py-5 dark:text-white'>Portofolio</h3>
          <p className='dark:text-white text-xl py-2 leading-8 text-gray-800'>Since a biginning of my journey as a developer, I have done 
            remote work for <span className=' text-teal-300'>companies </span>
            and collaborate with talented developers to create digital products for business and consumer use.            
          </p>
          <p className=' text-xl py-2 leading-8 text-gray-800 dark:text-white'>
            I offers from a wide range of services.
          </p>
        </div>
        <div className=' flex flex-col gap-10 py-10 md:flex-row md:flex-wrap'>
          <div className=' basis-1/3 flex-1'>
            <Image src={web1} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={web2} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
          </div>
          <div className=' basis-1/3 flex-1'>
            <Image src={web3} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={web4} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
          </div>
          <div className=' basis-1/3 flex-1'>
            <Image src={web5} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={web6} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
          </div>
        </div>
      </section>
    </main>
    </div>
  )
}
