import circle from "../assets/images/circle.svg";
import circle2 from "../assets/images/bgt.svg";
const SectionUpcycleIntro = () => {
  return (
    <div className="relative" id="wrapper">
      <div className="relative z-50 min-h-screen" style={{ background: "#FFD43B" }}>
        <div
          className="absolute flex flex-col items-center w-11/12 mx-auto text-center md:w-full"
          style={{ top: "20%", left: "50%", transform: " translateX(-50%)" }}
        >
          <p className="flex flex-col font-semibold md:space-x-6 H2 lg:H1 lg:flex-row">
            <span className="text-7xl">Upcycling</span>
          </p>
          <br />
          <p className="flex-row font-normal md:flex md:flex-col H5">
            <span className="test text-3xl mt-8">
              หมายถึงการพยายามสร้างคุณค่าสูงสุดให้กับวัสดุเหลือใช้ต่าง ๆ<br />
              ผ่านกระบวนการความคิดสร้างสรรค์และการนำการออกแบบ
              <br />
              เข้ามาผสมผสานเพื่อทำให้วัสดุเหล่านั้นเกิดการใช้ประโยชน์สูงสุด
            </span>
          </p>
          <img src={circle} className="mt-10" />
        </div>
      </div>
      <div>
        <img src={circle2} className="object-contain md:object-scale-down  h-full w-full  sm:h-72 md:h-96 lg:w-full lg:h-full"/>
      </div>
    </div>
  );
};

export default SectionUpcycleIntro;
