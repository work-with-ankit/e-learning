import React, { useState, useEffect } from 'react';
import "./TextTimimg.css"

const TextTiming = ({ texts=[], speed = 150,pauseDuration = 5000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
    useEffect(() => {
        if (texts.length === 0) return;

        const currentText = texts[currentTextIndex];

        const typingInterval = setInterval(() => {
            if (!isDeleting) {
              if (index < currentText.length) {
                setDisplayedText((prev) => prev + currentText.charAt(index));
                setIndex((prev) => prev + 1);
              } else {
                // Pause before deleting
                // setIsDeleting(true);
                clearInterval(typingInterval);
                setTimeout(() => setIsDeleting(true), pauseDuration);
              }
            } else {
              if (index > 0) {
                setDisplayedText((prev) => prev.slice(0, -1));
                setIndex((prev) => prev - 1);
              } else {
                // Start typing again after deleting
                clearInterval(typingInterval);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Move to the next text
                setIsDeleting(false)
                setIndex(0); // Reset index for the next text
                setDisplayedText(''); // Clear displayed text for next iteration
               
              }
            }
          }, isDeleting ? speed / 2 : speed); // Speed up the deleting process
      
          return () => clearInterval(typingInterval); // Cleanup on unmount
        }, [isDeleting, index,  texts, speed, pauseDuration ,currentTextIndex]);
  
    return (
        <div >
           <div className='mt-9'>
             <h1 className="head text-5xl font-extrabold mb-4 leading-none">What Do You Want To Do</h1> </div>
        <div className="head2 text-3xl font-mono  font-extrabold  text-black p-4 rounded-lg w-auto ml ">
        {displayedText}
        <span className="animate-blink">|</span>
      </div>
      {/* <p className='text-5xl  text-sky-500 '>Upskill</p> <p className='inline text-3xl ml-32'>And Land Your Dream</p>
      <h1 className='text-sky-500 text-6xl'>Tech Job</h1>
   */}

     <button className='btn border-t-indigo-700 text-gray-50'>Get Quote</button>
      </div>
      
    )
  };  

  export default TextTiming