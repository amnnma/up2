import image from "../assets/images";
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
          <div className="relative space-x-3">
            <img src={image.star2} className="relative z-auto" alt="" />
            <p className="relative H6 z-auto">
              ในขณะที่ทั่วโลกให้ความสำคัญกับการจัดการขยะ
              <br />
              ประเทศไทยยังคงเผชิญปัญหาขยะอย่างต่อเนื่อง
              <br />
              ซึ่งก่อให้เกิดปัญหามลพิษมากมายตามมา
              <br />
              เราจะมาชวนดูกันว่า ทำไม upcycling
              <br />
              จึงเป็นหนึ่งในวิธีการลดขยะที่ควรให้ความสนใจ ?
            </p>
            <img src={image.waste} alt="" className="relative z-auto" />
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
          <br/>
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
          แม้ประเทศไทยจะมีวิธีการจัดการขยะหลายวิธี แต่สุดท้ายแล้ว<br/> การจัดการขยะยังคงใช้สองกระบวนการหลักนั่นคือ 
            <span className="text-red-600">การฝังกลบ</span> และ
            <span className="text-red-600"> การเผา</span>
            <br/> ซึ่งไม่ถือว่าเป็นการกำจัดขยะอย่างยั่งยืน เพราะทั้งสองวิธี<br/>
            <span className="text-red-600">ต่างสร้างผลกระทบต่อสิ่งแวดล้อมและมลภาวะในระยะยาว</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWaste;
