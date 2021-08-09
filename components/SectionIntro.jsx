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
        <div className="lg:absolute lg:inset-0">
        <img src={Intro} className="h-56 w-full  sm:h-72 md:h-96 lg:w-full lg:h-full"/>
        </div>
        <div
          className="absolute flex flex-col items-center w-11/12 mx-auto text-center md:w-full"
          style={{ top: "40%", left: "50%", transform: " translateX(-50%)" }}
        >
          <p className="flex flex-col font-semibold text-5xl text-white md:space-x-6 H2 lg:H1 lg:flex-row">
            <span>Waste is money</span> <span> UPCYCLING is culture</span>
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
