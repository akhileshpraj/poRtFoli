import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
        <footer className='py-12'>
        <hr />
        <div className='max-w-screen-2xl container md:px-20 px-4 '>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-4 mt-6'>
              <FaSquareFacebook size={24}/>
              <FaLinkedin size={24}/>
              <FaInstagramSquare size={24}/>
              <FaSquareXTwitter size={24}/>
            </div>
            <div className='flex items-center flex-col  mt-7 pt-6 border-t border-gray-700'>
                <p className='sm'>&copy; 2024 your company. All right reserved</p>
                <p className='text-sm'>Based on your past activity</p>
            </div>
          </div>

        </div>
        </footer>
    </>
  )
}

export default Footer
