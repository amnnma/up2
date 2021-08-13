import star from "../assets/images/star1.svg";
import image from "../assets/images";
const SectionIntroblue = () => {
  return (
    <div style={{ background: "#1331E6" }}>
      <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16">
        <div className="w-11/12 mx-auto md:w-9/12 lg:w-6/12">
          <div className="text-white font-normal">
            <p>สิ่งของเหลือใช้เหล่านี้</p>
            อาจมีมูลค่าเป็นศูนย์และอาจต้องลงเอยในกองขยะฝังกลบ
          </div>
        </div>
        <div className="grid md:grid-flow-col w-full max-w-4xl w-11/12 py-16 mx-auto">
          <img src={image.wasteimage} alt="" />
          <img src={image.wasteimage2} alt="" />
          <img src={image.wasteimage3} alt="" />
        </div>
        <div className="w-11/12 mx-auto md:w-9/12 lg:w-6/12">
          <div className="text-white font-normal">
            <p>
              แต่เชื่อหรือไม่ว่า สิ่งของเหลือใช้ที่คนไม่ต้องกา
              <br /> สามารถนำมาเพิ่มมูลค่าและต่อยอดด้วยการ upcycling
              <br />
              ทำให้สิ่งที่คนมองว่า “ขยะ” ไม่ได้เป็น “ขยะ” อีกต่อไป{" "}
            </p>
          </div>
        </div>
        <div className="grid md:grid-flow-col w-full max-w-4xl w-11/12 py-16 mx-auto">
          <img src={image.upwasteimage} alt="" />
          <img src={image.upwasteimage2} alt="" />
          <img src={image.upwasteimage3} alt="" />
        </div>
        <p className="text-white font-normal w-11/12 mx-auto md:w-9/12 lg:w-6/12">
          วันนี้เราจะพาคุณมาเปิดโลกของการ Upcycling ให้มากขึ้น<br/> แต่ก่อนอื่น
          มาทำความเข้าใจก่อนว่ามันคืออะไร ?
        </p>
      </div>
    </div>
  );
};

export default SectionIntroblue;
