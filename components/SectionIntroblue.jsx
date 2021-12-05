import star from "../assets/images/star1_1.svg";
import star2 from "../assets/images/star1_2.svg";
import wastex from "../assets/images/test.svg";
import image from "../assets/images";
const SectionIntroblue = () => {
  return (
    <div   data-scroll-section style={{ background: "#1331E6"}}>
      <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16">
        <div className="w-11/12 mx-auto md:w-9/12 lg:w-6/12">
          <div className="text-white H5">
            <p>สิ่งของเหลือใช้เหล่านี้</p>
            อาจมีมูลค่าเป็นศูนย์และอาจต้องลงเอยในกองขยะฝังกลบ
          </div>
        </div>
        <div className="grid md:grid-flow-col mx-auto">
          <img src={image.wasteimage} alt="2" className="object-none" />
          <img src={image.wasteimage2} alt="3" className="object-none"/>
          <img src={image.wasteimage3} alt="4" className="object-none"/>
        </div>
        <div>
          <img src={wastex} alt="5" />
        </div>
      </div>
      <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16">
        <div className="w-11/12 mx-auto md:w-9/12 lg:w-6/12">
          <div className="text-white H5">
            <p>
              แต่เชื่อหรือไม่ว่า สิ่งของเหลือใช้ที่คนไม่ต้องการ
              สามารถนำมาเพิ่มมูลค่าและต่อยอดด้วยการ upcycling<br/>
              ทำให้สิ่งที่คนมองว่า “<b>ขยะ</b>” ไม่ได้เป็น “<b>ขยะ</b>” อีกต่อไป
            </p>
          </div>
        </div>
        <div className="grid md:grid-flow-col mx-auto">
          <img src={image.upwasteimage} alt="6" className="object-none" />
          <img src={image.upwasteimage2} alt="7" className="object-none" />
          <img src={image.upwasteimage3} alt="8" className="object-none" />
        </div>
        <div>
          <img src={wastex} alt="5" />
        </div>
      </div>
      <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16">
        <span className="text-white H4 w-11/12 mx-auto md:w-9/12 lg:w-6/12">
          <img
            src={star}
            alt="10"
            style={{ top: "40%", left: "50%", transform: " translateX(-50%)" }}
          />
วันนี้เราจะพาคุณมาเปิดโลกแห่งการนำของเก่ามาสร้างใหม่<br />
แต่ก่อนอื่น ไปทำความเข้าใจกันก่อนว่า<br />
“Upcycling” แท้จริงแล้วคืออะไร ?

          <img
            src={star2}
            className="relative z-auto object-contain"
            alt="11"
            style={{ top: "-60%", left: "90%", transform: " translateX(-50%)" }}
          />
        </span>
        <div>
          <img src={wastex} alt="5" />
        </div>
      </div>
    </div>
  );
};

export default SectionIntroblue;
