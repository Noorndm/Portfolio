"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    
      <section className="text-gray-600 body-font mx-auto bg-gray-200">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        width={1000}
        height={1000}
        alt="hero"
        src="/assets/picture/profilepic1.png"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       I am
        <br className="hidden lg:inline-block" />
        <Typewriter
            options={{
            strings: [
            'Front-End Developer',
            'Web Developer',
            'UI/UX Designer'
            ],
            autoStart: true,
            loop: true,
            }}
        />
        <div className='bg-blue-900'></div>
      </h1>
      <p className="mb-8 leading-relaxed">
      Creative and detail-oriented full-stack developer with a passion for designing efficient, modern, and accessible web applications. Strong skills in front-end and back-end development with a focus on user experience
      </p>
      <div className="flex justify-center">
      <Link href={'#contact'}>
        <button className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">
         Contact
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
