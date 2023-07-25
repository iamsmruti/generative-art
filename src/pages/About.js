import React from 'react'

import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const About = () => {
  return (
    <div className="flex flex-col justify-start mt-10 min-h-[80vh]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <div>
            <p className="text-[100px] font-semibold text-red-100 z-1">I'm</p>
          </div>
          <p className="text-xl z-10 mt-[-20px] ml-2">Smruti Ranjan Badatya, a Computer Science Engineer. I love making things. I'm a Web Developer by Profession and I also love generative art. Hence, I am trying to preserve my hobby in this wesite. Hope you guys feel this interesting as well.</p>

          <p className="text-xl z-10 mt-14 ml-2">If you want to connect with me, here are my socials:</p>

          <div className="mt-5 flex">
            <a href="https://www.instagram.com/__iamsmruti/" target="_blank">
              <AiFillInstagram className="text-4xl hover:text-red-400 mr-3"/>
            </a>
            <a href="https://www.linkedin.com/in/iamsmruti/" target="_blank">
              <AiFillLinkedin className="text-4xl hover:text-red-400 mr-3"/>
            </a>
            <a href="https://github.com/iamsmruti" target="_blank">
              <AiFillGithub className="text-4xl hover:text-red-400 mr-3"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About