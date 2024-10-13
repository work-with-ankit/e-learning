import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Main from './main/Main';
import Login from './component/Login';
import AinwikLogin from './component/AinwikLogin';
import Navbar1 from './component/Navbar1';
import Footer from './component/Footer';

function App() {
  
  // const [courses , setCourses] = useState([])


  //   const fetchCourse = async()=>{
  //    try {
  //     const res = await fetch('http://localhost:4455/api/courses')

  //     if (!res.ok) {
  //       console.log('Failed to fetch courses')
  //     } 
  //          const data =await res.json()
  //          setCourses(data)
  //    }
  //     catch (error) {
  //     console.log('Error' ,error)
  //    }
          
  //   }

  //   const deleteCourse = async (id)=>{
  //     try {
  //       let res = await fetch(`http://localhost:4455/api/delete_course/${id}`,{
  //         method : 'DELETE'
  //       })

  //       res = await res.json()
  //     } catch (error) {
  //       console.log('Error deleting course' , error)
  //     }
      
  //   }




  //    useEffect(()=>{
  //     fetchCourse()
  //    },[])

  return (
    <div>
     
      <BrowserRouter>
      <Navbar1/>
      <Footer/>
      <Routes>
          {/* <Route path='/Ainwik' element={<Main/>}></Route> */}
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/AinwikStudent" element={<AinwikLogin/>}></Route>
          
      </Routes>
      </BrowserRouter>
     {/* <ul>  {courses.map((course)=>{
            return <li key={course._id}>
                {<img src={`http://localhost:4455//uploads/${course.image}`}style={{ width: '100px' }} />}

               <b style={{marginRight : "10px"}}>{course.heading}</b>

              <button style={{background : "blue"}} onClick={()=>deleteCourse._id}>Delete</button>

            </li>
         })}
         </ul> */}
      
    </div>
  )
}

export default App
