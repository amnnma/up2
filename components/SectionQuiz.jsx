import React, {useEffect} from "react";
import SwiperCore, {Pagination, Keyboard, Navigation, EffectFade, Autoplay} from "swiper/core"
import { Swiper } from 'swiper/bundle'
import Heads from "next/head"
import Test from "../public/test.svg"
import nav1 from "../public/nav1.svg"
import nav2 from "../public/nav2.svg"
import nav3 from "../public/nav3.svg"


const SectionQuiz = () => {
  SwiperCore.use([Pagination, Keyboard, Navigation, EffectFade, Autoplay])
    return (
      <>
      <Heads>
        <title>Waste is money UPCYCLING is culture</title>
      </Heads>
      <div style={{ background: "#FFFAEA" }}>
          <div id="quiz" className="relative h-full w-full flex-col">
              <div className="stepwarp relative z-40">
                  <div className="container relative">
                     <div className="flex items-center justify-between">
                       <hr className="absolute left-7 right-7 desktop:left-10 desktop:right-10 top-2/4 border-black"/>
                         <div className="step text-2 flex justify-center items-center relative z-10 completed">
                         <div className="flex justify-center items-center">
                           1
                         </div>
                         </div>
                         <div className="step text-2 flex justify-center items-center relative z-10">
                         <div className="flex justify-center items-center">
                            2
                         </div>
                         </div>
                         <div className="step text-2 flex justify-center items-center relative z-10">
                         <div className="flex justify-center items-center">
                            3
                         </div>
                         </div>
                     </div>
                  </div>
              </div>
          </div>
          <div className="w-11/12 mx-auto tracking-wider md:w-9/12 lg:w-6/12"><br />
          <span>ให้คุณเลือกตอบคำถามจากตัวเลือกเหล่านี้ <br />ระบบจะทำการประมวลผลออกมาให้ว่าคุณสามารถทำ upcycling แบบไหนได้บ้าง</span>
          <br /><br />
          <h1>ประสบการณ์ upcycling</h1>
          <div className="swiper-slide swiper-slide-active">
            <div className="container pb-8">
              <h2 className="text-center mb-3 desktop:mb-8"></h2>
            <div className="choice-wrap">
              <div className="choice p-2 desktop:p-5 relative cursor-pointer">
                <input type="radio" className="hidden"/>
                <label className="text-1 text-center pointer-events-none">sdsdsdsdsdssd</label>
              </div>
            </div>
            </div>
          </div>
          </div>
      </div>
      </>     
    )
}

export default SectionQuiz