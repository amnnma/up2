import image from "../assets/images/index";
const SectionFooter2 = () => {
  return (
    <div
      data-scroll-section
      className="relative z-50 min-h-screen"
      style={{ background: "#000000" }}
    >
       <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16">
      <div className="absolute z-20" style={{ top: 80, left: "15%" }}>
        <img src={image.intern} alt="button" />
      </div>
      <div className="mt-8 grid sm:grid-cols-3 sm:gap-6 md:gap-12 xl:w-9/12 xl:mx-auto">
        <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
          <img src={image.tem} alt="tem" />
        </div>
        <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
          <img src={image.gun} alt="gun" />
        </div>
        <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
          <img src={image.aum} alt="aum" />
        </div>
        <div id="services" className="H6 text-white">
          <p>
            สุชาติ นิหะ
            <br />
            สาขาโลกคดีศึกษาและ
            <br /> การประกอบการเพื่อสังคม (GSSE) Intern Project Coordinator
          </p>
        </div>
        <div id="services" className="H6 text-white">
          ฐิตารีย์ สงเนียม
          <br />
          สาขาการออกแบบนิเทศศิลป์ (CommDe) Intern Information Designer
        </div>
        <div className="H6 text-white font-normal" id="image">
          ศักดิ์ณรงค์ สมบัติเจริญ <br />
          สาขาวิทยาการข้อมูล
          <br /> Intern Front-end Developer
        </div>

      </div>
      <img
          src={image.logo}
          alt="PU"
          className="md:object-none mx-auto object-center"
        />
      </div>
    </div>
  );
};
export default SectionFooter2;
