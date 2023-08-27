import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  // Check if the screen width is greater than a certain breakpoint (e.g., 768px for tablet)
  const isNotMobile = window.innerWidth > 500;

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm-h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Saif</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, user <br className='sm:block hidden' />interfaces and React-Native applications
          </p>
        </div>
      </div>
      {isNotMobile ? <ComputersCanvas /> : (
        <div className='absolute bottom-6 w-full flex justify-center items-center'>
          
        <div className='bg-gradient-to-t from-[#050816] to-[#161822] p-6 rounded-3xl border-t-2 shadow-lg border-gradient-border'>
        <img src="https://i.ibb.co/QmhQ4zK/Desktop-pic.jpg" alt="Image" className='mt-4' />
          <h2 className='text-lg font-semibold text-white mt-8'>Let's Explore...</h2>
          <p className='text-gray-300 mt-2'>Discover more about me and my work.</p>
          
        </div>
      </div>
      )}
      <div className='absolute xs:bottom-10 bottom-32 md:bottom-16 lg:bottom-[3px] xl:bottom-320 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1' />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;
