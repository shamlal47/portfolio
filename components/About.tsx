import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className='py-4 md:py-8'>
        <span className='text-2xl sm:text-6xl font-bold text-center block mb-8 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent md:py-4 py-2 md:mt-5 mt-2'>About</span>
        <div className='max-w-4xl mx-auto py-8 px-4 flex flex-col md:flex-row gap-10 md:gap-14 items-center'>
            <div className='relative w-64 h-64 overflow-hidden rounded-2xl border-2 border-yellow-500/80'>
                <Image
                    src="/me.jpg"
                    alt="Profile picture"
                    width={256}
                    height={256}
                    className="rounded-xl object-cover w-full h-full"
                    priority
                />
            </div>
            <p className='text-lg sm:text-xl text-neutral-300 leading-relaxed flex-1'>
                Welcome to my portfolio! I am a passionate developer with a keen interest in creating innovative solutions. My journey in tech has been driven by curiosity and a desire to learn continuously. 
                I enjoy working on projects that challenge me and allow me to grow my skills. 
                Feel free to explore my work and connect with me for any collaboration or inquiries.
            </p>
        </div>    
    </div>
  )
}   

export default About