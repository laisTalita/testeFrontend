import { useState } from "react";
import styles from "../../styles/Video.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { FaPlayCircle } from "react-icons/fa";

export default function Video({ texto, paragrafo, multiplos = false }) {


  return (
    <section className={styles.video}>
      <div className={styles.containerPrincipal}>
        <p>{paragrafo}</p>
        <h4>{texto}</h4>
      </div>
    
          {multiplos && (
             <Swiper className={styles.swi}
                modules={[ Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                centeredSlides={true} 
                pagination={{ clickable: true, el: '.my-pagination' }}
                >
                <SwiperSlide className={styles.swiSlide}>
                       <iframe
                    src="https://www.youtube.com/embed/WEGd7sPWB4U?si=jgfqMJ2MYxea0qUg" 
                    title="YouTube video player"
                    allowFullScreen
                ></iframe>
                </SwiperSlide>
                <SwiperSlide className={styles.swiSlide}>
                    <iframe
                    src="https://www.youtube.com/embed/WEGd7sPWB4U?si=jgfqMJ2MYxea0qUg" 
                    title="YouTube video player"
                    allowFullScreen
                ></iframe>
                </SwiperSlide>
                 <SwiperSlide className={styles.swiSlide}>
                     <iframe
                    src="https://www.youtube.com/embed/WEGd7sPWB4U?si=jgfqMJ2MYxea0qUg" 
                    title="YouTube video player"
                    allowFullScreen
                ></iframe>
                </SwiperSlide>
                <div className="my-pagination"></div>
            </Swiper>
          )}
      {
        !multiplos &&(
             <Swiper className={styles.swi}
            modules={[ Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true, el: '.my-pagination' }}
            >
            <SwiperSlide className={styles.swiSlide}>
                  <iframe
                    src="https://www.youtube.com/embed/WEGd7sPWB4U?si=jgfqMJ2MYxea0qUg" 
                    title="YouTube video player"
                    allowFullScreen
                ></iframe>
            </SwiperSlide>
        </Swiper>
        )
      }
    </section>
  );
}



