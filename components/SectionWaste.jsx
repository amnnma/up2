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
        <div>
          <span className="text-1xl font-medium">
            ในขณะที่ทั่วโลกให้ความสำคัญกับการจัดการขยะ<br/>
            ประเทศไทยยังคงเผชิญปัญหาขยะอย่างต่อเนื่อง<br/>
            ซึ่งก่อให้เกิดปัญหามลพิษมากมายตามมา<br/>เราจะมาชวนดูกันว่า ทำไม
            upcycling<br/>จึงเป็นหนึ่งในวิธีการลดขยะที่ควรให้ความสนใจ ?
          </span>
          <img src={image.waste} alt="" />
          </div>
          <div>
          <span>เมื่อเปรียบเทียบปริมาณขยะในแต่ละประเทศที่ถูกทิ้งในแต่ละวัน คุณจะเห็นว่าประเทศไทยคือหนึ่งในประเทศที่ทิ้งขยะมากที่สุดในโลก</span>
          <img src={image.wastenation} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWaste;
