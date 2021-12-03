import image from "../assets/images";
const SectionWaste3 = () => {
  return (
    <div data-scroll-section className="section">
      <div className="container flex flex-col justify-around min-h-screen mx-auto text-center">
        <span className="H4 font-semibold mx-auto">
          ช่วงโควิดที่ผ่านมา ประเทศไทยมีขยะมากแค่ไหน ?
        </span>
        <p className="H6">
          พบว่าในปี 2563 ประเทศไทยมีปริมาณขยะมูลฝอย เกิดขึ้นประมาณ 27.35
          <br />
          ล้านตัน ซึ่งถูกนำไปกำจัดอย่างถูกต้องเพียง 11.19 ล้านตันเท่านั้น
          <br />
          โดยในช่วงสถานการณ์พบว่า
          <b style={{ color: "#019EF7" }}> จำนวนขยะมูลฝอยมีปริมาณลดลง</b>
        </p>
        <br />
        <img
          src={image.wasteperton}
          className="object-none h-full w-full"
          alt="wasteperton"
        />
      </div>
    </div>
  );
};

export default SectionWaste3;
