import circle from "../assets/images/circle.svg";
import timeline from "../assets/images/timeline.png";
import Image from 'next/image'
const SectionUpcycleIntro = () => {
  return (
    <div className="relative" id="wrapper">
      <div className="relative min-h-screen" style={{ background: "#FFD43B" }}>
        <div
          className="absolute flex flex-col items-center w-11/12 mx-auto text-center md:w-full"
          style={{ top: "10%", left: "50%", transform: " translateX(-50%)" }}
        >
          <p className="flex flex-col font-semibold md:space-x-6 H3 lg:H1 lg:flex-row">
            <span className="text-5xl">Upcycling</span>
          </p>
          <br />
          <br />
          <p className="flex-row font-normal md:flex md:flex-col">
            <span className="H5">
              หมายถึงการพยายามสร้างคุณค่าสูงสุดให้กับวัสดุเหลือใช้ต่าง ๆ<br />
              ผ่านกระบวนการความคิดสร้างสรรค์และการนำการออกแบบ
              <br />
              เข้ามาผสมผสานเพื่อทำให้วัสดุเหล่านั้นเกิดการใช้ประโยชน์สูงสุด
            </span>
          </p>
          <img src={circle} className="mt-10" />
        </div>
      </div>
      <Image src={timeline}  alt="train to dev" layout="responsive" width={1223} height={2998}/>
    </div>
    
  );
};

export default SectionUpcycleIntro;
