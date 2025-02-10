import React from 'react'
import {Element, Link as LinkScroll} from 'react-scroll'
import Button from '../components/Button'
function Hero() {
  return (
    <section className='relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 '>
        <Element className='container'>
            <div className='relative z-2 max-w-512 max-lg:max-w-388 m'>
                <div className=' caption small-2 uppercase text-p3'>
                    Hello and wellcome to my Saas portfolio 
                </div>
                <h1 className='mb-6 h3  text-yellow-600 uppercase max-lg:mb-7 max-lg:h3 max-md:mb-4 max-md:texte-5xl max-md:leading-13'>
                    My name is Issac Mattok and i am a software engineer
                </h1>
                <p className="max-w-440 mb-10 body-1 max-md:mb-10 ">
                    scroll down to learn more  
                </p>
                {/* HERE I NEED TO ADD A MAIL  */}
                <LinkScroll to='features' offset={-100} spy smooth>
                    <Button icon='/images/zap.svg'> SEND ME A</Button>
                </LinkScroll>
            </div>
            <div className='absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none'>
                <img src="https://www.jcjdesigns.co.uk/images/article_images/portfolio-banner.svg" alt="hero" className='size-1230 max-lg:h-auto' 
                style={{ padding: "250px" }} />
            </div>
        </Element>
    </section>
  )
}

export default Hero