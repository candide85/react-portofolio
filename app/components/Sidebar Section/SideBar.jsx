import React from 'react'
import code from '../../../public/images/logoAgri.png'
import Image from 'next/image'
import {IoMdSpeedometer} from 'react-icons/io'
import {BsTrophy, BsCreditCard2Front} from 'react-icons/bs'
import {BiTrendingUp} from 'react-icons/bi'
import {AiOutlinePieChart} from 'react-icons/ai'
import {MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar} from 'react-icons/md'


const SideBar = () => {
  return (
    <div className=' border flex flex-col gap-4 p-1 ml-2 w-[15%] bg-white'>
        <div className='flex items-center'>
            <Image src={code} alt='LOGO' width={120} height={100}  />
            <h2 className=' font-semibold text-2xl'>Planti.</h2>
        </div>
        <div className='p-1'>
            <h3 className='text-2xl font-bold'>
                QUICK MENU
            </h3>
            <ul>
                <li className='mt-2 mb-4'>
                    <a href="" className='flex items-center'>
                    <IoMdSpeedometer  />
                    <span className='ml-2'>Dashboard</span>
                    </a>
                </li>
                <li className='mb-4'>
                    <a href="" className='flex items-center'>
                    <MdDeliveryDining  />
                    <span className='ml-2'>My Orders</span>
                    </a>
                </li>
                <li className='mb-4'>
                    <a href="" className='flex items-center'>
                    <MdOutlineExplore  />
                    <span className='ml-2'>Explore</span>
                    </a>
                </li>
                <li className='mb-4'>
                    <a href="" className='flex items-center'> 
                    <BsTrophy  />
                    <span className='ml-2'>Products</span>
                    </a>
                </li>
            </ul>
        </div>
        <div className='p-1'>
            <h3 className='text-2xl font-bold'>
                SETTINGS
            </h3>
            <ul>
                <li className='mt-2 mb-4'>
                    <a href="" className='flex items-center'>
                    <AiOutlinePieChart  />
                    <span className='ml-2'>Chart</span>
                    </a>
                </li>
                <li className='mb-4'>
                    <a href="" className='flex items-center'>
                    <BiTrendingUp  />
                    <span className='ml-2'>Trends</span>
                    </a>
                </li>
                <li className='mb-4'>
                    <a href="" className='flex items-center'>
                    <MdOutlinePermContactCalendar  />
                    <span className='ml-2'>Contact</span>
                    </a>
                </li>
                <li className='mb-4'>
                    <a href="" className='flex items-center'>
                    <BsCreditCard2Front  />
                    <span className='ml-2'>Billing</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar
