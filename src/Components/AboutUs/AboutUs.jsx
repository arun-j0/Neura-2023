import React from 'react'
import { logo, ptulogo } from '../import'
import {AboutCard} from '../index'

const AboutUs = () => {
  
  return (
    <div id='aboutus' className='scroll-mt-24 mt-24'>
        <div className='flex flex-col gap-2 mb-4'>
          <div className='text-center text-xl sm:text-5xl my-3  font-cinel text-gold' >ABOUT US</div>
          <AboutCard title='PUDUCHERRY TECHNOLOGICAL UNIVERSITY' desc= 'Puducherry Technological University(PTU) erstwhile knows as Puducherry Engineering College(PEC) is an university that strives to provide quality education and research opportunities to its students and contribute to the growth and development of the region. The university aims to provide quality education and training to its students to prepare them for the challenges of the global workforce. It has a team of experienced and dedicated faculty members who use modern teaching methods to impart knowledge and skills to students.' linkTo="https://www.ptuniv.edu.in/"/>
          <AboutCard title='DEPARTMENT OF INFORMATION TECHNOLOGY' desc= 'Department of Information Technology strives to prepare students to address the challenges in the IT fields and to contribute for research and innovation. The department has competent and committed faculty along with state-of-the-art computinig facilities. In order to stay ahead, our department constanly upgrades the academic syllabi to prepare to work with the changing trends in the field of IT.' linkTo=''/>
          <AboutCard title='NEURA' desc= 'Neura is a National - level Technical Symposium conducted by the Department of Information Technology of PTU every two years where students from all over the nation are invited to participate in various Technical, Non-Technical, Literary and Online events. Neura acts as a way for the students to get the actual industry level of competition and exposure in all aspects of the technical world. Also Neura never fails to entertain the students and rewarding the participants with exciting prizes.' linkTo=''/>
        </div>
    </div>
  )
}

export default AboutUs 