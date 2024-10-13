import React from 'react';
import Marquee from 'react-fast-marquee'; 


function Marque() {
  const url = [
         'https://www.masterincoding.com/wp-content/uploads/2019/05/java.png',
         'https://pluspng.com/img-png/python-logo-png-open-2000.png',
         'https://static.vecteezy.com/system/resources/previews/022/597/211/original/3d-file-php-icon-illustration-png.png',
         'https://697348.fs1.hubspotusercontent-na1.net/hubfs/697348/react-logo.png',
         'https://logopng.com.br/logos/android-3.png',
         'https://gurzu.com/img/gurzu/mern-stack-01.webp',
         'https://i0.wp.com/javaniceday.com/wp-content/uploads/2019/03/nodejs-logo.png?ssl=1',
         'https://th.bing.com/th/id/OIP.u9W7xngHRfor7fE2aukwlwHaHa?w=600&h=600&rs=1&pid=ImgDetMain'
  ]
  return (
    <div className='animated-border flex flex-col h-80 w-full max-w-6xl mx-auto p-4 '>
     <h1 className=' text-center font-semibold  mb-8 text-lg md:text-2xl lg:text-3xl '> Hey Welcome And Explore our Courses</h1> 
  
      <div className=' w-full flex justify-center'>
      <Marquee>
        {url.map((url,index)=>(
      <img  key={index}  src={url} alt={'img-${index}' }className='h-20 rounded- mx-10 '/>
          
        ))}
        
        
      </Marquee>
      </div>
    </div>
  );
}

export default Marque;