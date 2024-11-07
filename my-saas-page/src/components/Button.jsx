import React from 'react'
import clsx from 'clsx';
import Marker from './Marker';

function Button({icon,children,href, containerCalssName, onClick,MarkerFill}) {
    const Inner  =()=>(
        <>
            <span className='relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden
            shadow-200 group '>
                <span className='absolute -left-[-1px]'>
                <Marker MarkerFill={MarkerFill}/>
                </span>
                {icon && (<img 
                src={icon}
                alt='cercle'
                className='size-10 mr-5 object-contain z-10'
                />)}
                <span className='relative z-2 font-poppins base-bold text-p1 uppercase'>
                    {children}
                </span>
                
            </span>
        </>
    )

  return href? 
  <a href={href} className={clsx('relative','p-0.5 g5 rounded-2xl shadow-500 group',containerCalssName)}>
    <Inner />
  </a> :
  (
    <button
    onClick={onClick} 
    className={clsx('relative','p-0.5 g5 rounded-2xl shadow-500 group',containerCalssName)}> 
        <Inner />
    </button>
  )
}

export default Button