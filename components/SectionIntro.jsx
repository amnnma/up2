import arrow_down from "../assets/images/arrow.svg";
import Intro from "../assets/images/bg.png";
import Introimage from "../assets/images/Introimage.svg";


const SectionIntro = () => { 
  return (
    <div className="relative" id="wrapper">
      <div
        className="relative min-h-screen"
        style={{ background: "#FFD43B" }}
      >
         <img src={Intro} layout="fill"/>
         <div className="test" style={{ top: "4%", left: "50%", transform: " translateX(-50%)" }}>
         <img src={Introimage} width={1200} height={1200}/>
         </div>
        <div
          className="absolute flex flex-col items-center w-11/12 mx-auto text-center md:w-full"
          style={{ top: "40%", left: "50%", transform: " translateX(-50%)" }}
        >
          <p className="flex flex-col font-semibold text-5xl text-white ">
            <span>Waste is money</span> <span> UPCYCLING is culture</span>
          </p>
          <p className="flex-row font-semibold text-white">
            <span>Upcycling วิถีใหม่แห่งการลดขยะ เพิ่มมูลค่าและช่วยโลก </span>
          </p>
        </div>
        <div className="absolute flex-col text-center md:w-full" style={{ top: "90%"}}>
        <img src={arrow_down}/>
        </div>
      </div>
    </div>
  );
};

export default SectionIntro;
