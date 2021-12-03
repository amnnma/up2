import image from "../assets/images";
const SectionWaste4 = () => {
  return (
    <div data-scroll-section className="section fp-noscroll">
      <div className="container flex flex-col justify-around min-h-screen mx-auto text-center">
        <span className="H4 font-medium">
          อย่างไรก็ตามการจัดการขยะในประเทศไทย
          <br />
          ยังคงเน้นไปที่ กระบวนการฝังกลบและเผา
          <p className="H6">
          (อ้างอิงจาก รายงานสถานการณ์ขยะของไทยโดย ThaiPublica)
        </p>
        </span>
        <img
          src={image.graph1}
          className="object-contain h-full w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default SectionWaste4;
