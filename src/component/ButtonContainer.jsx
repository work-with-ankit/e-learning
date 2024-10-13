
import styles from "./ButtonContainer.module.css"
import comp from "../assets/computer.gif"
import  html from "../assets/html.png"
import line from "../assets/line-chart.gif"
import bar from "../assets/bar-chart.gif"
import rocket from "../assets/rocket.gif"
import web from "../assets/worldwide.gif"
import java from "../assets/java.gif"
import physic from "../assets/physics.gif"
import sql from "../assets/database-table.gif"
import app from "../assets/payment-app.gif"
import python from "../assets/king-cobra.gif"
import ui from "../assets/ui-design.gif"
import ui1 from "../assets/computer (1).gif"
import { useEffect, useState } from "react"

const ButtonContainer= ()=>{
     const [courses, setCourses]=useState([])
    const [newCourse , setNewCourse]=useState({heading:'',description:'',image:null,})
      
    const fetchCourse= async()=>{
       try {
        const resp= await fetch('https://ainwik-app-4.onrender.com/api/courses')
        const data= await resp.json()
        setCourses(data)
        
       } catch (error) {
        console.error('error fetching course ,',error)
        
       }

    }


    useEffect(()=>{
        fetchCourse()

    } ,[])
       
     
   
    const buttonData = [
        { name: "Web Development", imgSrc: web },
        { name: "App Development", imgSrc: app },
        { name: "Software Development", imgSrc: comp },
        { name: "Data Science", imgSrc: line },
        { name: "Data Scientist", imgSrc: rocket },
        
        { name: "Graphing Designing", imgSrc: ui },
        { name: "Data Analytic", imgSrc: bar },
        { name: "UI/UX", imgSrc: ui1 },
        
        { name: "Python", imgSrc: python },
        { name: "Java", imgSrc: java },
        { name: "React.js", imgSrc: physic },
        { name: "MySQL", imgSrc: sql },
       
        
    ];
    
    return (
        
        <div>
            <h1 className=" text-6xl font-bold font-sans,hind,serif  ">Explore  </h1>
            <span className="text-4xl ">Our Popular Courses</span>
            
            <div className={styles.buttonContainer}>
           
           {buttonData.map(( data) => (
               <button className={styles.button} key={data._id}>
                   <img src={data.image} className={styles.buttonImage} />
                   {data.heading}
               </button>
           ))}
       </div>
        </div>
        //  <div>
        //     {courses.map((data)=>(
        //       <h1>{data.heading}</h1>
        //     ))
        //     }

        //  </div>
    );
}
export default ButtonContainer