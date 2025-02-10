import React from 'react'
import {Element} from 'react-scroll'
import {Swiper,SwiperSlide} from 'swiper/react'
import {FreeMode,Pagination} from 'swiper/modules'
import {RxArrowTopRight} from 'react-icons/rx'
import { projects } from '../constants'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

function Projects() {
  return (
    <section>
      
        <Element name='project'>
          
          <div className="container">
             <h3 className="h3 relative mx-auto m-10 max-w-lg text-p4 uppercase text-center z-2">
                    My projects
              </h3>
              <div className="relative p-5 flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after g6 max-md:border-none max-md:rounded-none max-md:gap-3 ">
                <Swiper
                  className="max-w-[100%]"
                  freeMode={true}
                  pagination={{ clickable: true }}
                  modules={[FreeMode, Pagination]}
                  breakpoints={{
                    480: { slidesPerView: 2, spaceBetween: 15 },
                    700: { slidesPerView:2, spaceBetween: 15 }, // 3 slides for larger screens
                    1024: { slidesPerView: 3, spaceBetween: 15 }, // 4 slides for desktop
                  }}
                >
                  {projects.map((item) => (
                    <SwiperSlide key={item.title}>
                      <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8  max-w-full overflow-hidden cursor-pointer h-[300px] lg:h-[400px] lg:w-[300px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center opacity-60 "
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                        <div className="relative flex flex-col gap-3 z-10">
                          <h1 className="text-3xl ">{item.title}</h1>
                          <p className="text-[120%] text-sm">{item.content}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
        </Element>
    </section>
  )
}

export default Projects



