import { motion } from 'motion/react'
import React, { useState } from 'react'

function Input() {

    const [inputClicked, setInputClicked] = useState(false);

    const handleClick = ()=>{
        
       if (!inputClicked) {
         setInputClicked(true)
       } else{
         setInputClicked(false)
       }
    }

  return (
    <div className='w-full h-[100vh] p-6'>
        <form action="#">
            <motion.input
            initial={{
                y: -50,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
                transition: {duration: 0.5}
            }}
            whileTap={{
                placeholder: -'10px'
            }}
            onFocus={handleClick}
            
            className={`text-black dark:text-neutral-200 dark:placeholder:text-neutral-200 placeholder:text-black placeholder:text-[12px] py-1.5 px-1.5  border-1 rounded-sm ${inputClicked ? "input active" : "input"}` } type="text" placeholder='Enter here text'></motion.input>
             <button type="submit" className=' bg-neutral-300 py-1.5 px-5 cursor-pointer ml-2.5 rounded-b-sm' > Add Todo</button>
        </form>
    </div>
  )
}

export default Input