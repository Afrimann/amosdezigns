'use client'
import React, { useEffect } from 'react'
import { Hero, Review } from './components'
import { Projects } from './components'
import Image from 'next/image'
import { SkillSet, Socials } from '@/utils'
import Credit from './components/Credit'
import CustomButton from './components/CustomButton'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Page = () => {
  const handleRedirectToForm = () => {

  }

  // animate on scroll
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Configure AOS
  }, []);

  return (
    <div className='home__wrapper overflow-hidden'>
      {/* hero section */}
      <section className="relative">
        <Hero />
      </section>

      {/* projects section */}
      <section className="relative">
        <Projects />
      </section>

      <section className='review__tools-container relative z-10'>
        <div className='review__tools z-[10]'>
          <h2 className='review__intro project__intro'>What Clients Say About Me</h2>

          <div>
            <Review />
          </div>

          <div className='skillSet mt-20'>
            <h2 className='project__intro'>Tools I Know</h2>

            <div className='skillList mt-12 flex items-center justify-center gap-20'>
              {
                SkillSet.map((skill) => (
                  <img key={skill.id} src={skill.frame} alt={skill.alt} className='hover:scale-150 transition-all ease-in duration-200 cursor-pointer' />
                ))
              }
            </div>
          </div>
        </div>

        <div className='absolute -top-10 -z-[10] right-0 h-[80%] w-[60%] bg-gradientpink blur-[100px] rounded-[100%]'>how are you</div>
        <div className='absolute -top-10 -z-[10] left-0 h-[80%] w-[70%] bg-gradientblue blur-[100px] border-white rounded-[100%]'>hello</div>

        <div className='footer mt-24 px-[10rem] flex justify-between mb-[5rem]'>
          <div className='firstCol'>
            <h2 className="font-playfair max-w-[250px] text-[25px]">
              Let&apos;s make something amazing together
            </h2>
            <CustomButton
              containerStyles='bg-button-blue font-roboto text-[14px] px-4 py-2 rounded-md mt-4'
              title={`Let's Talk`}
              handleEvent={handleRedirectToForm}
            />
          </div>
          <div className='secondCol w-[200px] flex flex-col gap-2 items-end'>
            <h3 className='font-playfair text-[12px] text-custom-cream font-light opacity-80'>
              Connect with us
            </h3>
            <div className='socials flex gap-2'>
              {Socials.map((social) => (
                <Image
                  src={social.social}
                  alt={social.alt}
                  key={social.id}
                  width={18}
                  height={18} />
              ))}
            </div>
          </div>
        </div>


        <div className="credit w-full absolute bottom-0 text-center mb-10 mt-10">
          <Credit />
        </div>
      </section>

    </div>
  )
}

export default Page
