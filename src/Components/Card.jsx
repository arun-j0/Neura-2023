import React from 'react'
import { Link } from "react-router-dom";
import Tilt from 'react-tilt'
import {motion} from 'framer-motion'

const Card = ({title, description, linkTo, index}) => {

  const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  return (
    <Tilt className='w-xs'>
        <div 
          className="w-full h-full p-6 bg-backGround border border-blue rounded-lg"
          options={{max:45,
                    scale:2,
                    speed: 450}}
        >    
            <p class="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-blue ">{title}</p>
            <p class="hidden md:block mb-3 font-light text-lg md:text-lg ">{description}</p>
            <Link to={linkTo} >
              <a href="#" class="inline-flex items-center px-2 py-1 sm:px-3 sm:py-2 text-xs md:text-sm font-medium text-center bg-yellow rounded-xl hover:bg-orange">
                  <button>Read more</button>  
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </Link>
        </div>
    </Tilt>
  )
}

export default Card