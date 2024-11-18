'use client'
import React from 'react'
import CountUp from 'react-countup'

const Statistic = () => {
  return (
    <div className=''>
      <section className="text-gray-600 body-font bg-gray-200">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        <CountUp start={0} end={1000} duration={15} separator="," />
        </h2>
        <p className="leading-relaxed">Users</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        <CountUp start={0} end={2} duration={2.5} separator="," />
        </h2>
        <p className="leading-relaxed">Certificate</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        <CountUp start={0} end={1} duration={9.5} separator="," />
        </h2>
        <p className="leading-relaxed">Years</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
        <CountUp start={0} end={7} duration={9.5} separator="," />
        </h2>
        <p className="leading-relaxed">Project</p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Statistic
