import React from 'react'
import { BsCheck2Circle } from "react-icons/bs";


const Skill = () => {
  return (
    <div id='skill'>
      <section className="text-gray-600 body-font bg-gray-200">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[4rem]">
     {/* start */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
            <BsCheck2Circle className='text-xl'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-400 rounded-3xl'>
                <div className='absolute bg-green-500 h-1 rounded-3xl w-[100%]'></div>
            </div>
            <p className='font-bold text-green-500 text-right'>100%</p>
          </div>
        </div>
      </div>
      {/* end */}
      {/* start */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
            <BsCheck2Circle className='text-xl'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-400 rounded-3xl'>
                <div className='absolute bg-green-500 h-1 rounded-3xl w-[80%]'></div>
            </div>
            <p className='font-bold text-green-500 text-right'>80%</p>
          </div>
        </div>
      </div>
      {/* end */}
      {/* start */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
            <BsCheck2Circle className='text-xl'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             TYPESCRIPT
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-400 rounded-3xl'>
                <div className='absolute bg-green-500 h-1 rounded-3xl w-[60%]'></div>
            </div>
            <p className='font-bold text-green-500 text-right'>60%</p>
          </div>
        </div>
      </div>
      {/* end */}
      {/* start */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
            <BsCheck2Circle className='text-xl'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             NEXT.JS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-400 rounded-3xl'>
                <div className='absolute bg-green-500 h-1 rounded-3xl w-[50%]'></div>
            </div>
            <p className='font-bold text-green-500 text-right'>50%</p>
          </div>
        </div>
      </div>
      {/* end */}
      {/* start */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
            <BsCheck2Circle className='text-xl'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             REACT
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-400 rounded-3xl'>
                <div className='absolute bg-green-500 h-1 rounded-3xl w-[50%]'></div>
            </div>
            <p className='font-bold text-green-500 text-right'>50%</p>
          </div>
        </div>
      </div>
      {/* end */}
      {/* start */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
            <BsCheck2Circle className='text-xl'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             PYTHON
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-400 rounded-3xl'>
                <div className='absolute bg-green-500 h-1 rounded-3xl w-[20%]'></div>
            </div>
            <p className='font-bold text-green-500 text-right'>20%</p>
          </div>
        </div>
      </div>
      {/* end */}
    </div>
  </div>
</section>

    </div>
  )
}

export default Skill
