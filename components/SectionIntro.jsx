import arrow_down from "../assets/images/arrow.svg";
import Intro from "../assets/images/bg.png";
import Introimage from "../assets/images/Introimage.svg";

const SectionIntro = () => {
  return (
      <div
        className="bg-yellow-300 relative z-50 min-h-screen"
        style = {{ backgroundImage: "url('https://www.img.in.th/images/768e211a1e39b708dd705ea27afe3d07.png')"}}
      >
        <img src={Introimage} alt="" className="absolute z-auto" style={{ top: "1%", left: "-1%", transform: " translateX(1%)", width: "100%", height: "90%" }}/>
        <div
          className="absolute flex flex-col items-center w-11/12 mx-auto text-center md:w-full"
          style={{ top: "30%", left: "50%", transform: " translateX(-50%)" }}
        >
          <p className="flex flex-col font-semibold md:space-x-6 H3 lg:H1 lg:flex-row">
            <span className="text-white">Waste</span><span className="text-white">is money</span>
          </p>
          <p className="flex-row font-semibold md:space-x-6 H3 lg:H1 lg:flex-row">
            <span className="text-yellow-400">Upcycling</span><span className="text-white">is culture</span><br/>
            <span className="text-white text-2xl">Upcycling วิถีใหม่แห่งการลดขยะ เพิ่มมูลค่าและช่วยโลก</span>
          </p>
          <img src={arrow_down} alt="1" className="mt-10" />
        </div>
      </div>
  );
};

export default SectionIntro;
