import React from 'react'

const AboutCard = ({img, title, desc, linkTo}) => {
  return (
    
        <div class="about_card w-full rounded-md mx-auto max-w-5xl items-center ">
            <div className=' bg-backGround p-5 rounded-md mx-3 my-15 sm:mx-auto flex flex-row '>
                <div className=' flex flex-col items-center justify-start gap-1'>
                    <div className=' text-sm sm:text-3xl font-medium sm:font-semibold text-blue'>{title}</div>
                    <div className='font-extralight md:text-lg'>&nbsp;&nbsp;&nbsp;&nbsp; {desc}</div>
                </div>
            </div>
        </div>
  )
}

export default AboutCard

{/* <div class="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
  <div class="h-36 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
  </div>
</div> */}