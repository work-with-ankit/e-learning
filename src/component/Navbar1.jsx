import React, { useState } from "react";
import logo from "../assets/ainwik.png";
import js from "../assets/javascript.png"
import java from "../assets/java.png"
import rect from "../assets/react.png"
import html from "../assets/html.png"
import node from "../assets/node.js.png"
import sql from "../assets/my-sql.png"
import noder from "../assets/node.js.png"
import python from "../assets/pyhton.png"
import { TbGridDots } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgLogIn } from "react-icons/cg";
import { SlLogout } from "react-icons/sl";
import web from "../assets/web.png"
import app from "../assets/app.png"
import ai from "../assets/ai.png"
import software from "../assets/soft.png"
import digital from "../assets/digital.png"
import graphic from "../assets/graphic.png"
import ui from "../assets/ui.png"
import vr from "../assets/vr.png"
import data from "../assets/data.png"
import analytic from "../assets/analytic.png"
 import banner from "../assets/banner.jpg"
import { Link } from "react-router-dom";




import './Navbar.css';
import Login from "./Login";
import TextTiming from './TextTiming'
import ButtonContainer from "./ButtonContainer";
import Marque from "./Marque";


function Navbar1() {
  const dynamicTexts = [
    "Web Development",
    "Mern Full Stack Development",
    "Data Science",
    "App Development",
  ];
    const [isOpen, setIsOpen] = useState(false);

    const nav_Toggle = () => {
        // Toggle isOpen using a simple if-else
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };


    


  return (
    <div className="w-full h-full  shadow-xl">
      <header className=" ">
        <div className="w-full  bg-gray-200 flex justify-between items-center text-black py-6 px-8 md:w-full  drop-shadow-md ">
        <a href="">
          <img
            src={logo}
            alt=""
            className="h-121 w-12 hover:scale-150 transition-all "/>
            <h2 className="ml-[55px] mt-[-39px] text-xl cursor-pointer font-bold hover:text-sky-400">Ainwik Infotech</h2>

        </a>

        <ul className= " hidden xl:flex items-center gap-4 font-semibold text-base absolute right-[270px] ">
        
          <li className="peer p-3 hover:bg-sky-400 hover:text-white rounded-md transtion-all cursor-pointer  flex gap-4">
          <TbGridDots className="mt-[5px] "/>
            Category
            
          </li>
          
          <ul
            className=" pt-4 top-[49px] font-extralight  absolute hidden peer-hover:flex hover:flex
         w-[220px] 
         flex-col bg-white drop-shadow-lg rounded-md   gap-4 hover:transition-all duration-100 ease-in "
          > 
            <li className="cursor-pointer p-1 ps-2 hover:bg-sky-400 flex gap-8">App-development <img src={app} alt="" className="w-7" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-8">web-development <img src={web} alt="" className="w-8" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-2">Software-Development <img src={software} alt="" className="w-5" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-12">Digital-Marketing <img src={digital} alt="" className="w-7" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-7">Graphic-Designing <img src={graphic} alt="" className="w-8" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-[120px]">UI-UX <img src={ui} alt="" className="w-7" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-[120px]">AI-ML <img src={ai} alt="" className="w-8" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-[115px]">AR-VR <img src={vr} alt="" className="w-8" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-16">Data-Science <img src={data} alt="" className="w-7" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-16">Data-Scientist <img src={ai} alt="" className="w-7" /></li>
            <li className="cursor-pointer ps-2 pb-2 hover:bg-sky-400 flex gap-16">Data-Analytics <img src={analytic} alt="" className="w-6" /></li>
          

          </ul>


      
          <div className="relative peer">
          <li className="relative peer p-3 hover:bg-sky-400 hover:text-white rounded-md transtion-all cursor-pointer flex">
            Course<RiArrowDropDownLine className="mt-1" />
          </li>

          <ul
            className=" course_drop  pt-3 top-[49px] font-extralight   absolute hidden peer-hover:flex hover:flex w-[200px] 
         flex-col bg-white drop-shadow-lg rounded-md delay-[2s] gap-3 "
          >
             <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-[5rem]">Python <img src={python} 
                 alt="" className="w-8 rounded-[50px]" /></li>

            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-[6.2rem]">Java <img src={java} 
                alt="" className="w-9 rounded-[50px]" /></li>
            <li className=" w-full cursor-pointer ps-2 hover:bg-sky-400 flex gap-14">java-script
              <img src={js} alt="" className="w-8 right-0 rounded-[50px]" />
            </li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-24">React <img src={rect} alt="" 
              className="w-8 rounded-[50px]" /></li> 
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-24">Html <img src={html} alt="" 
             className="w-8 rounded-[50px]" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-20">node.js <img src={node} alt="" 
             className="w-8 rounded-[50px]"/></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-20">My-Sql <img src={sql} 
             alt=""className="w-8 rounde-[50px]" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-10">node.express <img src={noder} 
             alt="" className="w-8 rounded-[50px]"/></li>
          </ul>
          </div>

         <Link to="/Login">
         <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transtion-all cursor- 
          pointer">
            {" "}
            Login
          </li>
         </Link>
          <Link to="/AinwikStudent">
          <li className="p-3 hover:bg-sky-400 hover:text-white  hover:border-b-2 rounded-md transtion-all cursor- 
           pointer">
            Login for Ainwikstudent
          </li>
          </Link>
        </ul>
        <div className="relative hidden md:flex item-center justify-center gap-3">
          <i className="bx bx-search absolute left-4 top-3 text-2x1 bold text-gray-500"></i>
          <input
            type="text"
            placeholder="Search..."
            className="py-2 pl-10 rounded-xl border-2 border-blue-300 focuc:bg-slate-100 focus:outline-sky-500"
          />
        </div>

        
        
  
       <div onClick={nav_Toggle}  className="nav_toggler">
        <div className="line1" ></div>
        <div className="line2" ></div>
        <div className="line2" ></div>


       </div>
       
       
        </div>
        {isOpen && (
                <div className=  "nav_dropdown  " >
                    
                    <ul className=" side_bar:  absolute bg-gray-400 border-black w-[250px] h-full  
                     right-0  rounded-xl   ">
                     
                      <div className="relative">
                       <li className="side_item  relative peer w-full p-5 hover:bg-sky-600 hover:text- 
                        white transition-all flex gap-3">
                       <TbGridDots className="mt-[5px] "/>
                        Category</li>

                       <ul className=" pt-3  relative font-light peer-hover:flex  hover:flex hidden 
                         w-[200px] 
                        flex-col bg-white drop-shadow-lg rounded-md p-1  gap-3 " >

<li className="cursor-pointer p-1 ps-2 hover:bg-sky-400 flex gap-7">App-development <img src={app} alt="" className="w-6" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-7">web-development <img src={web} alt="" className="w-6" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-1">Software-Development <img src={software} alt="" className="w-3" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-7">Digital-Marketing <img 
             src={digital} alt="" className="w-7" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-6">Graphic-Designing <img 
             src={graphic} alt="" className="w-5" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-[108px]">UI-UX <img src= 
             {ui} alt="" className="w-7" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-[108px]">AI-ML <img src= 
             {ai} alt="" className="w-8" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-[100px]">AR-VR <img src= 
             {vr} alt="" className="w-8" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-14">Data-Science <img src= 
             { data} alt="" className="w-7" /></li>
            <li className="cursor-pointer ps-2 hover:bg-sky-400 flex gap-14">Data-Scientist <img 
             src={ai} alt="" className="w-7" /></li>
            <li className="cursor-pointer ps-2 pb-2 hover:bg-sky-400 flex gap-14">Data-Analytics 
               <img src={analytic} alt="" className="w-6" /></li>
                       </ul>
                       </div>

                       <div className="relative peer">
                       <li className="side_item w-full p-5 peer hover:bg-sky-600 hover:text-white 
                        transition-all flex gap-4"><RiArrowDropDownLine className="mt-1" />Course 
                         </li>

                       
                       <ul className=" course_drop font-extralight pt-3 top-[49px]    hidden  
                      peer-hover:flex hover:flex w-[180px] 
          flex-col bg-white drop-shadow-lg rounded-md  delay-[2s] gap-3 "
          >
             <li className="cursor-pointer ps-3 hover:bg-sky-400 flex gap-[4.2rem]">Python <img src={python} 
                 alt="" className="w-6 rounded-[50px]" /></li>

            <li className="cursor-pointer ps-3 hover:bg-sky-400 flex gap-[5rem]">Java <img src={java} 
                alt="" className="w-8 rounded-[50px]" /></li>
            <li className=" w-full cursor-pointer ps-3 hover:bg-sky-400 flex gap-10">java-script
              <img src={js} alt="" className="w-8 right-0 rounded-[50px]" />
            </li>
            <li className="cursor-pointer ps-3 hover:bg-sky-400 flex gap-20">React <img src={rect} 
             alt="" 
              className="w-6 rounded-[50px]" />
              </li> 
            <li className="cursor-pointer ps-3 hover:bg-sky-400 flex gap-[88px]">Html <img src={html} 
             alt="" 
             className="w-6 rounded-[50px]" /></li>
            <li className="cursor-pointer ps-3 hover:bg-sky-400 flex gap-[70px]">node.js <img src= 
             {node} alt="" 
             className="w-6 rounded-[50px]"/></li>
            <li className="cursor-pointer ps-3 hover:bg-sky-400 flex gap-[75px]">My-Sql <img src={sql} 
             alt=""className="w-6 rounde-[50px]" /></li>
            <li className="cursor-pointer ps-3 hover:bg-sky-400 flex gap-7 pb-2">node.express <img 
             src={noder} 
             alt="" className="w-6 rounded-[50px]"/></li>
          </ul>
                      
                       </div>
                       <li className="side_item text-left w-full p-5  hover:bg-sky-600 hover:text- 
                        white 
                        transition-all flex gap-5  "> <CgLogIn className="mt-1" /> Login</li>
                       <li className="side_item  text-left w-full p-5  hover:bg-sky-600 hover:text- 
                        white 
                        transition-all flex gap-4"> <img src={logo} alt="" className="w-6" />Login 
                         for Ainwik</li>
                       <li className="side_item  text-left w-full p-5 hover:bg-sky-600 hover:text- 
                        white 
                        transition-all flex gap-5"> <SlLogout className="mt-[7px]" />Log-out</li>
                    </ul>
                </div>
                
            )}
      </header>
       
       <div className="h-[100vh] flex flex-col lg:flex-row md:flex-col w-full">

        {/* <div className="w-1/2 flex  items-center justify-center"><h1 className="text-4xl font-bold">UpSkill And Land </h1>
        <div><TextTiming className="text-5xl" text="Your Dream" speed={100} pauseDuration={1000} /></div>
        </div> */}

      <div className="flex mt-28 md:w-full justify-center w-full lg:w-1/2">
      {/* <h1 className="text-3xl font-bold mb-4">UpSkill And Land Your</h1>  */}
      <div className="block">
      <TextTiming 
        texts={dynamicTexts} 
        speed={100} 
        pauseDuration={1000} 
      />
      </div>
      
    </div>



        <div className="w-full lg:w-1/2 items-center md:w-full "><img className="mt-20" src={banner} alt="" width={700}/> 
        </div>
       </div>
       <Marque/>
       <ButtonContainer/>
      
    </div>
        
   
  );
}

export default Navbar1;
