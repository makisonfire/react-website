import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

  const data = [
    {
      avatar:AVTR1,
      name: 'Tina Show',
      review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi nostrum cum ipsum a possimus hic accusamus blanditiis nobis id dolor officiis perferendis, repellat, quaerat consectetur optio exercitationem. Nulla, voluptate deserunt.'
    },
    {
      avatar:AVTR2,
      name: 'Shatta Wale',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, velit assumenda vitae autem, quas quos possimus ad molestiae tempora neque rem nihil eligendi eos ipsam eaque numquam consectetur veritatis quaerat?'
    },
    {
      avatar:AVTR3,
      name: 'Kwame Despite',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, velit assumenda vitae autem, quas quos possimus ad molestiae tempora neque rem nihil eligendi eos ipsam eaque numquam consectetur veritatis quaerat?'
    },
    {
      avatar:AVTR4,
      name: 'Nana Ana McBrown',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, velit assumenda vitae autem, quas quos possimus ad molestiae tempora neque rem nihil eligendi eos ipsam eaque numquam consectetur veritatis quaerat?'
    }
  ]

  return (
    <section id="testimonials">
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
        // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {
            data.map(({avatar, name, review},index)=> {
              return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt={name} />
                  </div>
                  <h5 className="client__name">{name}</h5>
                  <small>{review}</small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
    </section>
  )
}

export default Testimonials