import React from 'react'
import {Element, Link as LinkScroll} from 'react-scroll'
import Button from '../components/Button'
function Hero() {
  return (
    <section className='relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 '>
        <Element className='container'>
            <div className='relative z-2 max-w-512 max-lg:max-w-388 m'>
                <div className=' caption small-2 uppercase text-p3'>
                    Video Editing
                </div>
                <h1 className='mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:texte-5xl max-md:leading-13'>
                    Amazing and simple
                </h1>
                <p className="max-w-440 mb-10 body-1 max-md:mb-10">
                    we can desinge you a personal leandin page 
                </p>
                <LinkScroll to='features' offset={-100} spy smooth>
                    <Button icon='/images/zap.svg'> Chlick here</Button>
                </LinkScroll>
            </div>
            <div className='absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none'>
                <img src="/images/hero.png" alt="hero" className='size-1230 max-lg:h-auto' />
            </div>
        </Element>
    </section>
  )
}

export default Hero