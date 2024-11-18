import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='bg-[#d8d9dd]'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image 
            src="/assets/picture/1.png"
            alt='Noor' width={100} 
            height={100}
            className='w-{50px}' 
            />
      <span className="ml-3 text-xl">Abdul-Noor</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
    Copyright © 2024 Abdul-Noor - All right reserved 
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target='_blank' href={"https://www.youtube.com"} className="text-gray-500">
      <BsYoutube className='text-2xl hover:text-[#CC0000]' />
      </Link>

      <Link href={"/"} className="ml-3 text-gray-500">
      <BsGithub className='text-2xl hover:text-[#333333]'/>
      </Link>

      <Link href={'/'} className="ml-3 text-gray-500">
       <BsInstagram className='text-2xl hover:text-[#B03050]'/>
      </Link>

      <Link href={'/'} className="ml-3 text-gray-500">
      <BsLinkedin className='text-2xl hover:text-[#004182]'/>
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
