import React from 'react'
import {Element} from "react-scroll"
import { features,details } from '../constants'
import Button from '../components/Button'

const Features = () => {
  return (
    <section>
        <Element name='features'>
            <div className='container'>
                <div className='relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after g6 max-md:border-none max-md:rounded-none max-md:gap-3'>
                    
                    {features.map(({id,icon,caption,title,text,button})=>(
                        <div key={id} className='relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320'>
                            <div className='w-full flex justify-center items-start ' >
                                <div className='mb-4 flex items-center justify-center flex-col'>
                                    <div className='w-0.5 h-3 bg-s4'/>
                                    <img src={icon} className='size-28 object-contain' alt={title} />
                                </div>
                            </div>
                            <p className='caption  mb-5 max-md:mb-6 max-md:h-7'>{caption}</p>
                            <h2 className='max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5'>{title}</h2>
                            <p className='mb-11 body-1 max-md:mb-8 max-md:body-3'>
                                {text}
                            </p>
                        </div>
                    ))}
                    <ul className="relative flex flex-wrap gap-5 px-[5%] border-2 border-s3 rounded-7xl ">
                    <div className="" />

                    {details.map(({ id, icon, title })=>(

                        <li key={id} className="relative pt-10 px-5 pb-10">
                            <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />
        
                            <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                                <img
                                    src={icon}
                                    alt={title}
                                    className="size-17/20 object-contain z-20"
                                />
                            </div>
        
                            <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                            {title}
                            </h3>
                        </li>
                    ))}
                    </ul>
                </div>  
            </div>
        </Element>
    </section>
  )
}

export default Features