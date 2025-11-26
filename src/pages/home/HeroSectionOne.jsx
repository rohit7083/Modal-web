import React from 'react'
import Hero_section_video from "../../assets/her-section-one/3917524-hd_2048_1080_25fps-2.mp4"


function HeroSectionOne() {
  return (
   <section >
        <div >
          <video
  className="h-[700px] w-full object-cover"
  src={Hero_section_video}
  autoPlay
  muted
  loop
  playsInline
/>



        </div>
        
      </section>
  )
}

export default HeroSectionOne