import arrow_down from "../assets/images/arrow.svg";
import Intro from "../assets/images/bg.png";
import Introimage from "../assets/images/Introimage.svg";


const SectionIntro = () => {
  return (
    <div className="relative" id="wrapper">
      <div
        className="relative z-50 min-h-screen"
        style={{ background: "#FFD43B" }}
      >
        <div className="lg:absolute lg:inset-0">
          <img
            src={Intro}
            className="h-56 w-full  sm:h-72 md:h-96 lg:w-full lg:h-full"
          />
        </div>
        <div
          className="absolute flex flex-col items-center w-11/12 mx-auto text-center md:w-full hero"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <p className="flex flex-col font-semibold md:space-x-6 H2 lg:H1 lg:flex-row">
            <span>Waste is money</span>
          </p>
          <p className="flex-row font-semibold md:flex md:flex-col H2">
            <span>Upcycling is culture</span>
            <span className="whitespace-nowrap H5">วิถีใหม่แห่งการลดขยะ เพิ่มมูลค่าและช่วยโลก</span>
          </p>
          <img src={arrow_down} className="mt-10 " />
        </div>
      </div>
    </div>
  );
};

export default SectionIntro;
