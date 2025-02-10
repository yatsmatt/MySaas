import React,{useState,useEffect} from 'react'
import {Link as LinkScroll} from 'react-scroll'
import clsx from 'clsx';

function Header() {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

   
    useEffect(()=>{
        const handleScroll=()=>{
            setHasScrolled(window.scrollY>32)
        }
        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

    const NavLink =({title})=>(
        <LinkScroll to={title} onClick={()=>{setIsOpen(false)}} offset={-100} activeClass='nav-active' className='base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5' spy smooth>
        {title}
         </LinkScroll>
    )

  return (
    <header className={clsx('fixed top-0 left-0 z-50 w-full py-10 ',hasScrolled && 'py-2 bg-black-100 backdrop-blur-[8px]')}>
        <div className='container flex h-14 items-center max-lg:px-5'>
            <a className='lg:hidden flex-1 cursor-pointer z-2'>
                <img src="/images/xora.svg" width={115} height={55} alt='logo'/>
            </a>
            <div className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0  max-lg:w-full max-lg:bg-s2 ',isOpen?" max-lg:opacity-100:":"max-lg:opacity-0")}>
               <div className='max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4'>
                <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
                    <ul className='flex max-lg:block max-lg:px-12'>
                        <li className='nav-il'>
                            <div>
                                <NavLink title="features"/>
                            </div>
                            <div className='dot'/>
                            <div>
                              <NavLink title="project"/>
                            </div>
                        </li>
                        <li className='nav-logo'>
                            <LinkScroll 
                            to='hero' offset={200} 
                            spy smooth 
                            className={clsx("max-lg:hidden transition-transform duration-500 cursor-pointer")}>
                              <img src='/images/xora.svg' width={160} height={55} alt='logo'/>
                            </LinkScroll>
                        </li>
                        <li>
                            <div>
                                <NavLink title="faq"/>
                            </div>
                            <div className='dot'/>
                            <div>
                                <NavLink title="download"/>
                            </div>
                        </li>
                    </ul>
                </nav>
                    <div className='lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-0px] -translate-y-1/2 rotate-90'>
                    <img src="/images/bg-outlines.svg" width={960} height={380} className='relative z-2'/>
                    <img src="/images/bg-outlines-fill.png" width={960} height={380} className='absolute inset-0 mix-blend-soft-light opacity-3'/>
                    </div>
               </div>
            </div>
            <button className='lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center'  onClick={() => setIsOpen((prevState) => !prevState)}>
                <img src={`/images/${isOpen ? 'close' : 'magic'}.svg`} className='size-1/2 object-contain'/>
            </button>
        </div>
    </header>
  )
}

export default Header