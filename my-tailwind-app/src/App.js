import React from 'react';
import './index.css'
import Navbar from './commponent/Navbar';
import Home from './page/Home';
import About from './page/About';
import Project from './page/Project';
import Contact from './page/Contact';
import Footer from './page/Footer';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <div className='flex flex-col h-screen h-width bg-[#fff]'>
      <Navbar/> 
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </div>
   
    </>
  );
}

export default App;
