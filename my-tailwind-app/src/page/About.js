import React from 'react'

const About = () => {
  return (
    <>
      <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
         <div className='flex flex-col md:flex-row'>
          <div className=' md:w-3/4'>
           <h1 className='pb-5 text-2xl text-green-600 font-bold'>About <hr className='w-40 text-4xl' /></h1>
           <p className='bg-cyan-600 text-xl text-[#fff] font-bold rounded-xl py-2 px-2'>Hello I'm Akhilesh , passionate web developer with a keen eye React.js with a background in IT 
           <br /> looking start a Carrier as an Entry-level professional Job with a IT Company...........</p>

           <br />
            <h1 className='text-xl text-green-600 font-semibold'>Education & Training <hr className='w-40 text-4xl' /></h1>
           <div >
            <div className='flex flex-col md:flex-row md:w-5/6 border-2 bg-cyan-900 mt-3 text-center'>
              <th className='text-2xl font-bold text-[#fff] px-2'>Degree</th>
              <th className='text-2xl font-bold text-[#fff] px-2'>University</th>
              <th className='text-2xl font-bold text-[#fff] px-2'>College/School..</th>
              <th className='text-2xl font-bold text-[#fff] px-2'>YoP</th>
              <th className='text-2xl font-bold text-[#fff] px-2'>Percentage</th>
           </div>
           <div className='flex flex-col md:flex-row md:w-5/6 border-2 bg-cyan-700 text-center '>
              <th className='text-2xl font-semibold text-[#fff] px-2 '>B.Tech</th>
              <th className='text-2xl font-semibold text-[#fff] px-2 '>BEU PATNA</th>
              <th className='text-2xl font-semibold text-[#fff] px-2 '>DCE DARBHANGA</th>
              <th className='text-2xl font-semibold text-[#fff] px-2 '>2024</th>
              <th className='text-2xl font-semibold text-[#fff] px-2 '>76%</th>
           </div>
           <div className='flex flex-col md:flex-row md:w-5/6 border-2 bg-cyan-700 text-center '>
            <th className='text-2xl font-semibold text-[#fff] px-2 '>10+2.</th>
             <th className='text-2xl font-semibold text-[#fff] px-2 '>BSEB  Patna</th>
             <th className='text-2xl font-semibold text-[#fff] px-2 '>L N D College Motihari</th>
             <th className='text-2xl font-semibold text-[#fff] px-2 '>2018</th>
             <th className='text-2xl font-semibold text-[#fff] px-2 '>60%</th>
           </div>
           <div className='flex flex-col md:flex-row md:w-5/6 border-2 bg-cyan-700 text-center '>
            <th className='text-2xl font-semibold text-[#fff] px-2 '>Matric</th>
             <th className='text-2xl font-semibold text-[#fff] px-2 '>BSEB Patna</th>
             <th className='text-2xl font-semibold text-[#fff] px-2 '>S R B School Lakhaura</th>
             <th className='text-2xl font-semibold text-[#fff] px-2 '>2016</th>
             <th className='text-2xl font-semibold text-[#fff] px-2 '>70.6%</th>
           </div>
           <h1 className='text-xl text-green-600 font-semibold mb-2 mt-2 '>Skills <hr className='w-20' /></h1>
           <p className='bg-gray-200 text-xl md:w-1/2  px-5 text-slate-500 font-bold mb-2'>Technical Knowledge: C and C++</p>
           <p className='bg-gray-200 text-xl md:w-3/4  px-5 text-slate-500 font-bold mb-2'>Development Knowledge : Html5 Css3 JavaScript  React.js</p>
           <p className='bg-gray-200 text-xl md:w-1/2  px-5 text-slate-500 font-bold mb-2'>frameworks : Tailwind Css</p>
           <p className='bg-gray-200 text-xl md:w-1/2  px-5 text-slate-500 font-bold mb-2'>other Knowledge : Ms Word</p>
           </div>
          </div>
         </div>
      </div>
    </>
  )
}

export default About
