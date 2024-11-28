'use client'

import React from 'react'
import Image from 'next/image'
import Header from './Header'
import CustomButton from './CustomButton'

const Hero = () => {
    const getInTouch = () => {

    }
    const viewProjects = () => {

    }
    return (
        <div className="hero bg-cover bg-center" style={{ backgroundImage: "url('/gradient-bg.svg')" }}>
            {/* header section*/}
            <section className=''>
                <Header />
            </section>

            {/* intro section */}
            <section className='intro__section'>
                <div className='flex-1'>
                    <span className='text-white text-[18px] md:text-[26px] lg:text-[32px] font-semibold flex gap-1 font-playfair text-custom-cream' data-aos='fade-up'>
                        {/* <Image/> */}
                        <Image
                            src='/hand.png'
                            alt='waving'
                            width={30}
                            height={30}
                            priority
                            className='object-contain'
                            data-aos='zoom-in'
                        />
                        Hey, I&apos;m Amos
                    </span>
                    <span data-aos='fade-up' className='text-white text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-extrabold font-playfair'>
                        Product Designer
                    </span>

                    <p className='text-white text-[10px] md:text-[11px] lg:text-[14px]  font-roboto max-w-[97%]' data-aos='fade-up'>
                        I&apos;m a passionate product designer with over 5 years of experience.
                        I craft digital solutions that are user-focused and impactful.

                        <span data-aos='fade-up' className='block mt-2'> My passion lies in turning ideas into designs that resonate and inspire</span>

                    </p>

                    <div className='mt-7 flex gap-3' data-aos='fade-up'
                    >
                        <CustomButton
                            data-aos='fade-up'
                            title='Get in Touch'
                            containerStyles='rounded-md bg-button-blue sm:px-3 sm:py-[10px] px-4 py-2 md:px-6 py-4 lg:px-8 lg:py-5 text-[9px] md:text-[13px] lg:text-[14.5px] text-white font-semibold'
                            handleEvent={getInTouch}

                        />
                        <CustomButton
                            data-aos='fade-up'
                            title='View Projects'
                            containerStyles=' rounded-md sm:px-3 sm:py-[10px] px-4 py-2 md:px-6 py-4 lg:px-8 lg:py-5 text-[9px] md:text-[13px] lg:text-[14.5px] border-button-border text-[14px] text-custom font-semibold'
                            handleEvent={viewProjects}

                        />
                    </div>
                </div>

                {/* owner Image */}
                <div className='flex-1  h-[100%] w-[100%]'>
                    <Image
                        data-aos='fade-left'
                        src='/Portrait.png'
                        alt='Portrait'
                        priority
                        width={400}
                        height={200}
                        className='object-contain w-full h-full hidden md:block'
                    />
                </div>
            </section>

        </div>
    )
}

export default Hero