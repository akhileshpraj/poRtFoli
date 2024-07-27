import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from '../assest/akhilesh.png';
import resume from '../assest/resume_3.pdf'
const Home = () => {
  return (
    <>
      <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-28'>
       <div className='flex flex-col md:flex-row'>
         <div className=' text-[#828282] font-bold text-2xl md:w-11/12 mt-2 md:mt-4'>
           <div className='md:w-3/4'>
             <span className='text-xl'>Hello My Portfolia Website... </span>
              <div className='flex space-x-2 text-2xl'>
                 <h1 className='space-x-2 text-xl md:text-2xl'>Hello I'm a ,,  
                  </h1> <br />
                  {/* <span className='text-red-700 font-bold'>Developer</span> */}
                  <ReactTyped className='text-red-700 font-bold'
                  strings={["Developer" , "programmer" , "Coder"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                    />
               </div>
               <br />
              
               <p className='text-xl  md:text-lg  capitalize leading-snug text-justify'>Hi I am Akhilesh Kumar 4th Year of B.tech Student Computer Science and Engineering who's passionate about becoming a great
                  software Developer .. ! 
               </p>
              <div className='flex justify-between flex-col md:flex-row space-y-6 items-center md:space-y-0'>
               <div className='space-y-2 '>
                <h1 className='text-xl font-bold  underline mt-3 mb-3 text-purple-500'>Available</h1>
                <ul className='flex space-x-5'>
                  <a href="https://www.facebook.com/akhileshkumar.prajapati.522/" target="_blank"><FaSquareFacebook className='text-2xl text-cyan-600 cursor-pointer'/></a>
                  <a href="https://www.linkedin.com/in/akhilesh-kumar-903bb418a/" target='_blank'><FaLinkedin className='text-2xl text-cyan-600 cursor-pointer'/></a>
                  <a href='https://github.com/akhileshpraj' target='_blank'><FaGithub className='text-2xl text-[#000] cursor-pointer'/></a>
                  <a href='https://www.instagram.com/akhilesh_kumar_prajapati_80/' target='_blank'><FaInstagramSquare className='text-2xl text-red-400 cursor-pointer'/></a>
                  <li> <SiMongodb className='text-xl md:text-3xl hover:scale-110 rounded-full border-[2px]' /></li>
                  <li><SiTailwindcss className='text-xl md:text-3xl hover:scale-110 rounded-full border-[2px]'/></li>
                  <li><FaReact className='text-xl md:text-3xl hover:scale-110 rounded-full border-[2px]'/></li>
                  <li><FaNodeJs className='text-xl md:text-3xl hover:scale-110 rounded-full border-[2px]'/></li>
                </ul>
                </div>
              </div>
             
           </div>
            <div className='flex md:flex-row space-x-10 mt-8 '>
            <button >
              <a href={resume} download={resume} className=' text-base font-bold text-[#fff] px-2 py-2 bg-green-600 rounded-lg' >Download resume</a>
             </button>
             <button>
              <a href="" className='text-base font-bold text-[#fff] px-2 py-2 bg-green-600 rounded-lg' >Hire Me</a>
             </button>
            </div>
          </div>
          <div className='text-[#875d] md:w-1/2 mt-2  '>
           <div className='md:w-3/4'>
             <img src={pic} alt="" className=' h-[300px]' />
             <div className='  text-center '>
              <h1 className='text-xl text-[#000] font-extrabold'>Akhilesh Kumar</h1>
              <span className='text-xl bg-[#FCE7F3] rounded-xl  font-bold ' >Software Engineering</span>
              {/* <h1  className='bg-slate-300 px-5 w-2/3'>Phone  </h1> */}
              <p className='text-xl font-bold'>6200118527</p> 
              {/* <h1 className='bg-[#FCE7F3] px-5 w-2/3'>Email </h1> */}
              <span className='text-xl bg-[#f3f8ff] rounded-md font-semibold' >kumarakhileshmth7@gmail.com</span>
             </div>
            </div>
           </div>
           
         </div>
         
       <hr className='mt-3'/>
      </div>
      
    </>
  )
}

export default Home
