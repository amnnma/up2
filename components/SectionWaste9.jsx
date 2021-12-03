import image from "../assets/images";
const SectionWaste9 = () => {
  return (
    <div data-scroll-section style={{ background: "#1331E6" }}>
      <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 H4 text-white">
        <div className="H4 font-normal ">
          หนึ่งในวิธีที่ช่วยลดการเผาขยะและการฝังกลบ คือการใช้กระบวนการ "
          <a className="text-yellow-400">Recycle</a>" และ "
          <a className="text-yellow-400">Upcycling</a>"{" "}
          โดยทั้งสองวิธีนี้สามารถลดปริมาณขยะพลาสติกที่อาจจบลงในหลุมฝังกลบหรือเผา
          ได้มากกว่า 5 แสนตัน หรือคิดเป็น 25 % ของปริมาณขยะพลาสติกในประเทศไทย
          <p className="H6">(อ้างอิง : รายงานสถาบันพลาสติก)</p>
        </div>
        <img src={image.wastemoutain} alt="wastemoutain" />
        </div>
          </div>
        
  );
};

export default SectionWaste9;
