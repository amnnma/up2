import image from "../assets/images";
import air from "../assets/images/air.png";
import smell from "../assets/images/smell.svg";
import dirt from "../assets/images/dirt.svg";
import divider from "../assets/images/divider.svg";
const SectionWaste = () => {
  return (
    <div style={{ background: "#FFD43B" }}>
      <div className="container flex flex-col justify-around min-h-screen py-1 mx-auto text-center md:py-16">
        <span className="text-2xl font-medium leading-snug">
        ก่อนจะคุยกันต่อเรื่อง upcycling<br />ลองมาดูกันก่อนดีกว่า ว่าทำไม… 
        </span>
        <span className="text-6xl font-medium">“ปัญหาขยะในไทย ไม่แพ้ชาติใดในโลก”</span>
      </div>
      <div style={{ background: "#FFFFFF" }}>
        <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16">
          <div>
            <span className="H4 font-medium">
              เมื่อเปรียบเทียบประเทศในกลุ่มของทวีปเอเชีย
              <br />
              คุณจะเห็นว่าประเทศไทยคือหนึ่งในประเทศที่ทิ้งขยะมากที่สุดในโลก
            </span>
            <img
              src={image.wastenation}
              className="relative min-h-screen"
              style={{ top: "50%", left: "50%", transform: "translateX(-50%)" }}
              alt=""
            />
          </div>
          <div>
            <span className="H4 font-semibold mx-auto">
              ช่วงโควิดที่ผ่านมา ประเทศไทยมีขยะมากแค่ไหน ?
            </span>
            <p className="H6">
              พบว่าในปี 2563 ประเทศไทยมีปริมาณขยะมูลฝอย เกิดขึ้นประมาณ 27.35
              <br />
              ล้านตัน ซึ่งถูกนำไปกำจัดอย่างถูกต้องเพียง 11.19 ล้านตันเท่านั้น
              <br />
              โดยในช่วงสถานการณ์พบว่าจำนวน
              <b className="text-blue-400">ขยะมูลฝอยมีปริมาณลดลง</b>
            </p>
            <br />
            <img
              src={image.wasteperton}
              className="relative min-h-screen"
              style={{ top: "50%", left: "50%", transform: "translateX(-50%)" }}
              alt=""
            />
          </div>
          <br />
          <div>
            <span className="H4">
            อย่างไรก็ตามการจัดการขยะในประเทศไทย<br />
ยังคงเน้นไปที่ กระบวนการฝังกลบและเผา
            </span>
            <p className="H6">
            (อ้างอิงจาก รายงานสถานการณ์ขยะของไทยโดย ThaiPublica)
            </p>
            <br />
          </div>
        </div>
        <img
          src={image.graph1}
          className="relative min-h-screen"
          style={{ top: "50%", left: "50%", transform: "translateX(-50%)" }}
          alt=""
        />
        <div style={{ background: "#000000" }}>
          <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 H4 text-white">
            <div className="H4 font-normal ">
              แม้ประเทศไทยจะมีวิธีการจัดการขยะหลายวิธี แต่สุดท้ายแล้ว
              <br />การจัดการขยะยังคงใช้สองกระบวนการหลักนั่นคือ<a style={{ color: "#E4364B"}} className="font-bold text-4xl"> การฝังกลบ</a> และ
              <a style={{ color: "#E4364B"}} className="font-bold text-4xl"> การเผา</a>
              <br /> ซึ่งไม่ถือว่าเป็นการกำจัดขยะอย่างยั่งยืน เพราะทั้งสองวิธี
              <br />
              <a style={{ color: "#E4364B"}} className="font-bold text-4xl">
                ต่างสร้างผลกระทบต่อสิ่งแวดล้อมและมลภาวะในระยะยาว
              </a>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto md:py-16 ">
          <div className="mt-8 grid sm:grid-cols-2 sm:gap-5 md:gap-10 xl:w-9/12 xl:mx-auto">
            <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
              <img src={air} alt="air" />
            </div>
            <div id="services" className="H6">
              <span className="H4 text-black text-left">ผลกระทบทางอากาศ</span>
              <br />
              <p>
                การเผาขยะ 1 กิโลกรัมจะทำให้เกิดฝุ่นขนาดเล็ก (ขนาดเล็กกว่า 10
                ไมครอน) ที่เป็นอันตรายต่อสุขภาพ 19 กรัม โดยมลพิษที่สำคัญได้แก่
                เบนซิน (Benzene) และไดออกซิน(Dioxin) ซึ่งเป็นสารก่อมะเร็ง
              </p>
            </div>
            <div id="services" className="H6 text-right">
              <span className="H4 text-black">ผลกระทบทางกลิ่นและสุขภาวะ</span>
              <br />
              ปัญหาการส่งกลิ่นเหม็นรบกวนพื้นที่ในชุมชน
              ที่ทั้งเกิดจากขยะที่รอการเผาและกลิ่นไหม้ จากการเผาแล้วของขยะโดยตรง
            </div>
            <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
              <img src={smell} alt="smell" />
            </div>
            <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
              <img src={dirt} alt="dirt" />
            </div>
            <div id="services" className="H6">
              <span className="H4 text-black">ผลกระทบทางดินและสารพิษตกค้าง</span>
              <br />
              การเผาขยะ 1 กิโลกรัมจะทำให้เกิดฝุ่นขนาดเล็ก (ขนาดเล็กกว่า 10
              ไมครอน) ที่เป็นอันตรายต่อสุขภาพ 19 กรัม โดยมลพิษที่สำคัญได้แก่
              เบนซิน (Benzene) และไดออกซิน(Dioxin) ซึ่งเป็นสารก่อมะเร็ง
            </div>
          </div>
          <br />
          <br />
          <br />
          <img src={divider} alt="" />
          <br />
          <div className="H5 text-center">
            <p className="font-bold">เมื่อการฝังกลบและการเผาไม่ใช่ทางออก</p>{" "}
            เราจึงต้องมองหาวิธีใหม่ที่มีประสิทธิภาพมากกว่า
            ส่งผลเสียต่อสิ่งแวดล้อมน้อยกว่า
            <br /> และเพิ่มมูลค่าของสิ่งของเหลือใช้ได้มากกว่า
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
