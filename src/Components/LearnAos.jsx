import Aos from 'aos'
import React, { useEffect } from 'react'

const LearnAos = () => {
    useEffect(()=>{
        Aos.init();
    })
  return (
    <div>
        <div style={{display:'flex',justifyContent:'space-around'}}>
     <div
     data-aos="fade-up"
      data-aos-duration="1500"
      className='welcome'>
        One
     </div>

      <div 
      data-aos="fade-down"
       data-aos-duration="1500"
      className="row1">
      Two
      </div>

      <div 
      data-aos="fade-up-right"
       data-aos-duration="1500"
      className="row2">
        Three
      </div>

      {/* second */}

      </div>
      <div className='second'>

       <div
         data-aos-duration="1500"
       data-aos="flip-left"
        className="row3">
        FOUR
       </div>

       <div
       data-aos="flip-up"
         data-aos-duration="1500"
        className="row4">
        FIVE
       </div>

       
       <div
       data-aos="flip-down"
         data-aos-duration="1500"
        className="row5">
        SIX
       </div>
      </div>
      {/* Third */}

      <div className='third'> 

      <div 
      data-aos="zoom-in"
         data-aos-duration="1500"
      className="row6">
        SEVEN
      </div>

        <div 
    data-aos="zoom-in-down"
         data-aos-duration="1500"
      className="row7">
        EIGHT
      </div>

        <div 
     data-aos="zoom-in-left"
         data-aos-duration="1500"
      className="row8">
        NINE
      </div>
      </div>
    </div>
  )
}

export default LearnAos
