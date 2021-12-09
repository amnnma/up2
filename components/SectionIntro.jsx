import image from "assets/images/index";
import pulogo from "../assets/images/pulogo.png"
const SectionIntro = () => {
  return (
    <div
      data-scroll-section
      className="bg-yellow-300 relative z-50 min-h-screen bg-fixed"
      style={{
        backgroundImage:
          "url('https://www.img.in.th/images/768e211a1e39b708dd705ea27afe3d07.png')",
      }}
    >
      <img src={pulogo} alt="header logo" />
      <div className="absolute z-20" style={{ top: 0, left: "35%" }}>
        <img src={image.logo2} alt="button" />
      </div>


      <img
        src={image.why}
        alt="Introimage"
        className="mx-auto w-9/12 lg:mx-auto md:max-h-50 hidden md:block sm:block"
      />
      <div
        className="absolute flex flex-col items-center w-11/12 mx-auto text-center md:w-full"
        style={{ top: "30%", left: "50%", transform: " translateX(-50%)" }}
      >
        <p className="flex flex-col font-semibold md:space-x-6 H3 lg:H1 lg:flex-row">
          <span className="text-white font-normal">Waste</span>
          <span className="text-white">is money</span>
        </p>
        <p className="flex-row font-semibold md:space-x-6 H3 lg:H1 lg:flex-row">
          <span className="text-yellow-400">Upcycling</span>
          <span className="text-white">is culture</span>
          <br />
          <span className="text-white text-2xl">
            Upcycling วิถีใหม่แห่งการลดขยะ เพิ่มมูลค่าและช่วยโลก
          </span>
        </p>
      </div>
      <div className="scroll-down">
        <div>
          <i className="fas fa-angle-down animated bounce">
            <img src={image.arrow} alt="" />
          </i>
        </div>
      </div>
    </div>
  );
};

export default SectionIntro;
