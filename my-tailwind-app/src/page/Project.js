import React from 'react'
import Tailwind from '../assest/loginpage.png'
import css3 from '../assest/flipkartclone.png'
import html5 from '../assest/portfolia.png'
import script from '../assest/signuppage.png' 
import textmonial from '../assest/testmonial.png'
import weather from '../assest/wheather_map.png'
import amazon from '../assest/amazon_clone.png'
const Project = () => {
  const itemData = [
    {
      id:1,
      logo:Tailwind,
      Name:"React.js",
      type:"Login_Page"
    },
    {
      id:2,
      logo:css3,
      Name:"React.js",
      type:"Flipcart_Clone"
    },
    {
      id:3,
      logo:html5,
      Name:"React.js",
      type:"PortFolia Website"
    },
    {
      id:4,
      logo:script,
      Name:"React.js",
      type:"Signup_Page"
    },
    {
      id:5,
      logo:textmonial,
      Name:"React.js",
      type:"Textmonial"
    },
    {
      id:6,
      logo:weather,
      Name:"React.js",
      type:"Weather_map"
    },
    {
      id:7,
      logo:amazon,
      Name:"React.js",
      type:"Amazon_clone"
    }
  ]
  return (
    <div Name="Project" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className='font-bold mb-3 text-3xl ml-2'>PortFolia</h1>
        <span className='underline font-semibold ml-2'>Featured Project</span>
        
       <div className='grid grid-cols-1 md:grid-cols-4 gap-8 my-10 ml-2'>
       {
          itemData.map(({id,logo,Name,type}) =>
          (
            <div className='md:w-[250px] border-[2px] rounded-lg shadow-lg p-2 cursor-pointer hover:scale-110 duration-500'
            key={id}>
              <img className='h-[150px] md:w-[250px] bg-cover p-1 rounded-lg bg-fixed' src={logo} alt="" />
              <div>
               <div className='text-lg font-semibold'>{Name}</div>
                <span className='underline text-gray-400'>{type}</span>
                 <p className='text-sm font-medium text-gray-600'>Different type of used to different type website </p>
              </div>
            </div>
            
          ))
        }
       </div>
           
      </div>
    </div>
  )
}

export default Project
