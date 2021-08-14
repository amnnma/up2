import star from "../assets/images/star1_1.svg";
import star2 from "../assets/images/star1_2.svg";
import image from "../assets/images";
const SectionIntroblue = () => {
  return (
    <div style={{ background: "#1331E6" }}>
      <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16">
        <div className="w-11/12 mx-auto md:w-9/12 lg:w-6/12">
          <div className="text-white H5">
            <p>สิ่งของเหลือใช้เหล่านี้</p>
            อาจมีมูลค่าเป็นศูนย์และอาจต้องลงเอยในกองขยะฝังกลบ
          </div>
        </div>
        <div className="grid md:grid-flow-col max-w-4xl w-11/12 py-16 mx-auto">
          <img src={image.wasteimage} alt="" />
          <img src={image.wasteimage2} alt="" />
          <img src={image.wasteimage3} alt="" />
        </div>
        <div className="w-11/12 mx-auto md:w-9/12 lg:w-6/12">
          <div className="text-white H5">
            <p>
              แต่เชื่อหรือไม่ว่า สิ่งของเหลือใช้ที่คนไม่ต้องการ
              สามารถนำมาเพิ่มมูลค่าและต่อยอดด้วยการ upcycling<br/>
              ทำให้สิ่งที่คนมองว่า “<b>ขยะ</b>” ไม่ได้เป็น “<b>ขยะ</b>” อีกต่อไป
            </p>
          </div>
        </div>
        <div className="grid md:grid-flow-col max-w-4xl w-11/12 py-16 mx-auto">
          <img src={image.upwasteimage} alt="" />
          <img src={image.upwasteimage2} alt="" />
          <img src={image.upwasteimage3} alt="" />
        </div>
        <span className="text-white H6 w-11/12 mx-auto md:w-9/12 lg:w-6/12">
          <img
            src={star}
            alt=""
            style={{ top: "40%", left: "50%", transform: " translateX(-50%)" }}
          />
          วันนี้เราจะพาคุณมาเปิดโลกของการ Upcycling ให้มากขึ้น แต่ก่อนอื่น
          มาทำความเข้าใจก่อนว่ามันคืออะไร ?
          <img
            src={star2}
            className="relative z-auto object-contain"
            alt=""
            style={{ top: "-60%", left: "90%", transform: " translateX(-50%)" }}
          />
        </span>
      </div>
    </div>
  );
};

export default SectionIntroblue;
