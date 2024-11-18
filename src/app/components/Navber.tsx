import Link from 'next/link'
import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";

const Navber = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
     <span className="ml-3 text-2xl font-weight: 800">Abdul-Noor</span>
     <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"#"} className="mr-5 hover:text-blue-400">Home</Link>
      <Link href={"#about"} className="mr-5 hover:text-blue-400">About</Link>
      <Link href={"#skill"} className="mr-5 hover:text-blue-400">Skills</Link>
      <Link href={"#project"} className="mr-5 hover:text-blue-400">Project</Link>
      <Link href={"#contact"} className="mr-5 hover:text-blue-400">contact</Link>
    </nav>
      <Link 
      target='_blank'
      href="/assets/cv/project-1.pdf">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-2">
      Download CV
      <MdOutlineFileDownload className='text-xl ml-2'/>
    </button>
      </Link>
  </div>
</header>

</div>
  )
}

export default Navber
