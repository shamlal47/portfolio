import { skills } from '@/data'
import Image from 'next/image'
import React from 'react'

function SkillGlobe() {
  return (
    <div>
    <span className='text-2xl sm:text-6xl font-bold text-center block mb-8 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent md:py-4 py-2 md:mt-5 mt-2'>Skills</span>
    <div className='overflow-hidden w-full max-w-4xl mx-auto py-8'>      <ul className='flex flex-wrap gap-6 py-4 text-white justify-center'>
        {skills.map((skill, index) => (
          <li key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-200/30 to-slate-50/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
              <Image 
                src={skill.icon} 
                alt={skill.name} 
                width={100} 
                height={100} 
                className='w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] md:w-[100px] md:h-[100px] rounded-full shadow-lg overflow-hidden bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110' 
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs sm:text-sm font-medium text-white bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
                  {skill.name}
                </span>
              </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
} 

export default SkillGlobe