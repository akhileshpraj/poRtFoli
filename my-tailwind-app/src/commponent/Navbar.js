import React, { useState } from 'react'
import developer from '../assest/developer.png'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';
const Navbar = () => {
  const[menu , setMenu]=useState(false)
  const navItem = [
    {
      id:1,
      text:"Home",
    },
    {
      id:2,
      text:"About",
    },
    {
      id:3,
      text:"Project",
    },
    {
      id:4,
      text:"Contact",
    }
  ];
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 fixed  text-cyan-600 text-xl font-extrabold shadow-md  top-0 left-0 right-0 z-50'>
          <div className='flex justify-between items-center h-16' >
            <div className='flex space-x-2'>
            <img src={developer} alt="" className='rounded-full h-12 w-13'  />
             <h1 className='px-3  text-[1rem] tracking-wider font-semibold '>
               Akhilesh_Cs01 <span className='text-[#9BF00B] font-extrabold'>!</span>
               <p className='tracking-wider leading-5 text-[1.2rem] font-medium '>Web Developer</p>
              </h1>
            </div>
           <div >
            <ul className='md:flex hidden space-x-8 '>
             <div className='flex space-x-6'>
              {
                navItem.map(({id,text})=>(
                  <li
                     className="hover:scale-105 duration-200 cursor-pointer"
                     key={id} >
                     <Link to={text}
                     smooth={true}
                     duration={500}
                     offset={-70}
                     activeClass='active'>
                     {text}
                      
                     </Link>
                     
                  </li>
                ))
              }
              </div>
            </ul> 
              <div className='md:hidden'
               onClick={()=>setMenu(!menu)} >
               {menu ? <RxCross2 size={20}/> : <AiOutlineMenu size={20}/> } 
              </div>
            </div>
          </div>
           {
            menu && (
              <div className='bg-[#fff]'>
               <ul className='md:hidden  flex justify-center items-center h-screen flex-col text-sky-900 space-y-4 text-xl text-[1.1rem]'> 
                {navItem.map(({id,text})=>(
                  <li 
                    className='hover:scale-105
                     duration-200 font-semibold cursor-pointer' key={id}>
                    <Link 
                    onClick={()=>setMenu(!menu)}
                     to={text}
                     smooth={true}
                     duration={500}
                     offset={-70}
                     activeClass='active'>
                     {text}
                     </Link>
                  </li>
                ))
                }
            </ul>
           </div>
            )
           }
          </div> 
    </>
  );
}

export default Navbar
