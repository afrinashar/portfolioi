import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/gallery.png';
import Ecommerce from '../../img/drawing.png';
import HOC from '../../img/tom.png';
import Musicapp from '../../img/g.png';
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from "react";
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfilo" id='Portfolio'>

        {/*heading*/}

        <span style= {{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfilo</span>

        {/*slider*/}

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfilo-slider'
        >
            <SwiperSlide>
                    <a  href="https://gallery-react-query.vercel.app" target="_blank"><img src={Sidebar } height={230} alt="" />    
                        </a>

            </SwiperSlide>
            <SwiperSlide>
            <a  href="https://drawing-socket.vercel.app/" target="_blank"><img src={Ecommerce} height={230} alt="" />
           </a> </SwiperSlide>{" "}
            <SwiperSlide>
            <a  href="https://talking-tom-black.vercel.app/" target="_blank"><img src={HOC} height={230} alt="" />
           </a> </SwiperSlide>
            <SwiperSlide>
            <a  href="https://three-js-game-tawny.vercel.app/" target="_blank"><img src={Musicapp} height={230} alt="" />
            </a>  </SwiperSlide>
        </Swiper>
     <button> <Link to="projects"> Show more</Link></button>
    </div>
  );
};

export default Portfolio;