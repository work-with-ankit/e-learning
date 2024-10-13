import logo from "../assets/ainwik.png";
import React from 'react';
 import './Footer.css'; 
import Social from "./Social";
import arrow from "../assets/arrow.gif"




const Footer = () => {
    return (
        <footer className="footer ">
            
               
            <div className="h-[120vh] lg:h-[50vh] md:h-[60vh]"> 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">


            <div className="footer_img  gap-3 place-self-start lg:place-self-center md:place-self-start text-left"> 
            <img className="" src={logo}alt="" width={80} /><h1>Ainwik Infotech</h1>
                    <p className="text-left ml-5">Great Lesson Ideas And Lesson Plans for ESL Teacher!Educator can Customize lesson plan to best </p>

             <b className="ml-8">< Social/></b>
            </div>
           
           
            <div className=" footer_content1 place-self-start lg:place-self-center md:place-self-start ml-5">
              <h1 className="main1 mt-4">Company</h1>
                   <h1>About</h1>
                   <h1>Courses</h1>
                   <h1>Events</h1>
                   <h1>Instructor</h1>
                   <h1>Career</h1>
                   <h1>Become a Teacher</h1>
                   <h1>Contact</h1>
            </div>



            <div className=" footer_content2 place-self-start lg:place-self-center md:place-self-start 
             ml-5">
            <h1 className="main2 mt-4">Platform</h1>
                   <h1>Browser Libreary</h1>
                   <h1>Partners</h1>
                   <h1>News & Blog</h1>
                   <h1>FAQs</h1>
                   <h1>Tutorial</h1>
            </div>


            <div className=" subscribe place-self-start lg:place-self-center md:place-self-start ml-5"><h1 
              className=" font-bold text-2xl  text-left mb-5">Subscribe</h1>
              <div className="flex gap-1 mb-28">
              <input  className ="input  flex" type="text" placeholder="your Email address" />
              <img  src={arrow} alt="" className="flex w-13 h-[58px] rounded-md cursor-pointer"  />
              </div>
            </div>
            
           </div>

      
    </div>
    <div className="last_bottom  items-center justify-center   flex">
         
           <h1 className="mb-0 text-center"> &#169; 2024 Ainwik,All Right Reseverd.Design & develop By -Ankit  </h1>
           
        </div>
            
        </footer>
    );
};

export default Footer;
