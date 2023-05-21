import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import i1 from "../Assets/support man.png";


import i1 from "../Assets/i1.jfif";
import i2 from "../Assets/i2.jfif";
import i3 from "../Assets/i3.webp";
import i4 from "../Assets/i4.jfif";
import i5 from "../Assets/i5.jfif";
import i6 from "../Assets/i6.jpeg";
import i7 from "../Assets/i7.webp";



const Service = () => {
  return (
    <div className='services'>
       <Carousel infiniteLoop  showArrows={false} showStatus={false} >

          <div className='division'>
            <img src={i1} alt="img1" className='img1'/>

           
            <p >AC Repair Service</p>
          </div>

          <div>
            <img src={i2} alt="img2" className='img1'/>
            <p>Heater Repair Service</p>
          </div>

          <div>
            <img src={i3} alt="img2" className='img1'/>
            <p>Fridge Repair Service</p>
          </div>

          <div>
            <img src={i4} alt="img2" className='img1'/>
            <p>Water Dispenser Repair Service</p>
          </div>

          <div>
            <img src={i5} alt="img2" className='img1'/>
            <p>Microwave Oven Repair Service</p>
          </div>

          <div>
            <img src={i6} alt="img2" className='img1'/>
            <p>Washing Machine Repair Service</p>
          </div>

          <div>
            <img src={i7} alt="img2" className='img1'/>
            <p className='change'>LED/LCD TV Repair Service</p>
          </div>

       </Carousel>
    </div>
  )
}

export default Service