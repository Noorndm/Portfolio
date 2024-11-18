import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id='project'> 
      <section className="text-gray-600 body-font bg-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Project
            </h1>
          </div>
          
          {/* Single Project Cards Container */}
          <div className="flex flex-wrap -m-4 -mt-[4rem]">
            {/* Project Card 1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src='/assets/project/registrationform.jpg'
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                    Simple Registration Form Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Registration Form
                  </h1>
                  <p className="leading-relaxed">
                    It's a simple registration form that I created to collect data for the university.
                  </p>
                  <Link target='_blank' href={'https://registration-form-noorndm.vercel.app/'}>
                  <p className="leading-relaxed text-blue-700 hover:text-blue-400 cursor-pointer">View Project</p></Link>
                </div>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src='/assets/project/project-4.png'
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                    Currency Converter Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Currency Converter
                  </h1>
                  <p className="leading-relaxed">
                  currency converter project allows users to easily convert one currency to another by entering the amount.
                  </p>
                  <Link target='_blank' href={'https://currency-converter-noorndm.vercel.app/'}>
                  <p className="leading-relaxed text-blue-700 hover:text-blue-400 cursor-pointer">View Project
                  </p></Link>
                </div>
              </div>
            </div>
            
            {/* Project Card 3  */}
           <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src='/assets/project/registrationform.jpg'
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                    Simple Registration Form Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Registration Form
                  </h1>
                  <p className="leading-relaxed">
                    It's a simple registration form that I created to collect data for the university.
                  </p>
                  <p className="leading-relaxed text-blue-700 hover:text-blue-400 cursor-pointer">View Project</p>
                </div>
              </div>
            </div>

            {/* project 4 */}
        {/*   <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src='/assets/project/registrationform.jpg'
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                    Simple Registration Form Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Registration Form
                  </h1>
                  <p className="leading-relaxed">
                    It's a simple registration form that I created to collect data for the university.
                  </p>
                  <p className="leading-relaxed text-blue-700 hover:text-blue-400 cursor-pointer">View Project</p>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </section>
    </div>
  )
}

export default Project
