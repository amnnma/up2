import image from "../assets/images";
import air from "../assets/images/air.svg";
import smell from "../assets/images/smell.svg";
import dirt from "../assets/images/dirt.svg";
import divider from "../assets/images/divider.svg";
const SectionWaste = () => {
  return (
    <div style={{ background: "#FFD43B" }}>
      <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16">
        <span className="text-6xl font-medium">
          ปัญหาขยะในไทย
          <br />
          รับมือแบบไหนถึงจะเหมาะสม ?
        </span>
      </div>
      <div style={{ background: "#FFFFFF" }}>
        <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16">
          <div className="grid grid-cols-4">
            <img src={image.star2} className="relative z-auto" alt="" />
            <p className="H6">
              ในขณะที่ทั่วโลกให้ความสำคัญกับการจัดการขยะ
              ประเทศไทยยังคงเผชิญปัญหาขยะอย่างต่อเนื่อง
              ซึ่งก่อให้เกิดปัญหามลพิษมากมายตามมา เราจะมาชวนดูกันว่า ทำไม
              upcycling จึงเป็นหนึ่งในวิธีการลดขยะที่ควรให้ความสนใจ ?
            </p>
            <img
              src={image.waste}
              alt=""
              style={{ top: "-10%", left: "-5%", transform: "translateX(5%)" }}
              className="relative space-x-3 z-50"
            />
          </div>
          <div>
            <span className="H4">
              เมื่อเปรียบเทียบปริมาณขยะในแต่ละประเทศที่ถูกทิ้งในแต่ละวัน
              คุณจะเห็นว่าประเทศไทยคือหนึ่งในประเทศที่ทิ้งขยะมากที่สุดในโลก
            </span>
            <img
              src={image.wastenation}
              className="object-center"
              style={{ top: "50%", left: "50%", transform: "translateX(20%)" }}
              alt=""
            />
          </div>
          <div>
            <span className="H4">
              เมื่อเปรียบเทียบปริมาณขยะในแต่ละประเทศที่ถูกทิ้งในแต่ละวัน
              คุณจะเห็นว่าประเทศไทยคือหนึ่งในประเทศที่ทิ้งขยะมากที่สุดในโลก
            </span>
            <p>
              พบว่าในปี 2563 ประเทศไทยมีปริมาณขยะมูลฝอย เกิดขึ้นประมาณ 27.35
              <br />
              ล้านตัน ซึ่งถูกนำไปกำจัดอย่างถูกต้องเพียง 11.19 ล้านตันเท่านั้น
              <br />
              โดยในช่วงสถานการณ์พบว่าจำนวน<b>ขยะมูลฝอยมีปริมาณลดลง</b>
            </p>
            <br />
            <img
              src={image.wasteperton}
              className="object-center"
              style={{ top: "50%", left: "50%", transform: "translateX(40%)" }}
              alt=""
            />
          </div>
          <br />
          <div>
            <span className="H4">
              แม้ปัญหาขยะในช่วงสถานการณ์โควิดจะลดลงน้อย
              <br />
              แต่เมื่อดูรายงานการจัดการขยะของประเทศไทยในอดีต (ปี 2553) จะพบว่า
            </span>
            <p>
              มีเพียงร้อยละ 26 ของขยะทั้งหมดที่ถูกนำไปรีไซเคิล ร้อยละ 15
              คือขยะอินทรีย์ที่นำไปหมักทำปุ๋ยประเภทต่างๆ ร้อยละ 3
              ถูกนำไปผลิตไฟฟ้าและเชื้อเพลงทดแทน แต่กว่าร้อยละ 56
              ถูกกำจัดด้วยการฝังกลบและการเผา
            </p>
            <br />
          </div>
        </div>
        <img
          src={image.graph1}
          className="object-center"
          style={{ top: "50%", left: "50%", transform: "translateX(40%)" }}
          alt=""
        />
        <div style={{ background: "#000000" }}>
          <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 H4 text-white">
            <div className="H4 font-normal ">
              แม้ประเทศไทยจะมีวิธีการจัดการขยะหลายวิธี แต่สุดท้ายแล้ว
              <br /> การจัดการขยะยังคงใช้สองกระบวนการหลักนั่นคือ
              <span className="text-red-600">การฝังกลบ</span> และ
              <span className="text-red-600"> การเผา</span>
              <br /> ซึ่งไม่ถือว่าเป็นการกำจัดขยะอย่างยั่งยืน เพราะทั้งสองวิธี
              <br />
              <span className="text-red-600">
                ต่างสร้างผลกระทบต่อสิ่งแวดล้อมและมลภาวะในระยะยาว
              </span>
            </div>
          </div>
        </div>
        <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 ">
          <div className="mt-8 grid sm:grid-cols-2 sm:gap-5 md:gap-10 xl:w-9/12 xl:mx-auto">
            <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
              <img src={air} alt="Tom Gonzales Online Training" />
            </div>
            <div id="services" className="H6">
              <span className="H4 text-black">อากาศ</span>
              <br />
              <p>
                การเผาขยะ 1 กิโลกรัมจะทำให้เกิดฝุ่นขนาดเล็ก (ขนาดเล็กกว่า 10
                ไมครอน) ที่เป็นอันตรายต่อสุขภาพ 19 กรัม โดยมลพิษที่สำคัญได้แก่
                เบนซิน (Benzene) และไดออกซิน(Dioxin) ซึ่งเป็นสารก่อมะเร็ง
              </p>
            </div>
            <div id="services" className="H6">
              <span className="H4 text-black">กลิ่น</span>
              <br />
              ปัญหาการส่งกลิ่นเหม็นรบกวนพื้นที่ในชุมชน
              ที่ทั้งเกิดจากขยะที่รอการเผาและกลิ่นไหม้ จากการเผาแล้วของขยะโดยตรง
            </div>
            <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
              <img src={smell} alt="Tom Gonzales Online Training" />
            </div>
            <div class="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
              <img src={dirt} alt="Tom Gonzales Online Training" />
            </div>
            <div id="services" className="H6">
              <span className="H4 text-black">ดิน</span>
              <br />
              การเผาขยะ 1 กิโลกรัมจะทำให้เกิดฝุ่นขนาดเล็ก (ขนาดเล็กกว่า 10
              ไมครอน) ที่เป็นอันตรายต่อสุขภาพ 19 กรัม โดยมลพิษที่สำคัญได้แก่
              เบนซิน (Benzene) และไดออกซิน(Dioxin) ซึ่งเป็นสารก่อมะเร็ง
            </div>
          </div>
          <br/>
          <img src={divider} alt="" />
          <br/>
          <div className="H5">
          <p className="font-bold">เมื่อการฝังกลบและการเผาไม่ใช่ทางออก</p> เราจึงต้องมองหาวิธีใหม่ที่มีประสิทธิภาพมากกว่า ส่งผลเสียต่อสิ่งแวดล้อมน้อยกว่า<br/> และเพิ่มมูลค่าของสิ่งของเหลือใช้ได้มากกว่า 
          </div>
        </div>
        <div style={{ background: "#1331E6" }}>
          <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 H4 text-white">
            <div className="H4 font-normal ">
              ดังนั้นหนึ่งในวิธีที่ช่วยลดการเผาขยะและการฝังกลบ คือ กระบวนการ{" "}
              <span className="text-yellow-400">Recycle</span> และ{" "}
              <span className="text-yellow-400">Upcycling</span>{" "}
              โดยรายงานสถาบันพลาสติกพบว่า มีขยะพลาสติกถูกนำไป recycle ราว 5
              แสนตัน หรือกว่า 25% ของขยะพลาสติกในประเทศไทย
            </div>
            <img src={image.wastemoutain} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWaste;
