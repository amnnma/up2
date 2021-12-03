import image from "../assets/images";
import air from "../assets/images/air.png";
import smell from "../assets/images/smell2.png";
import dirt from "../assets/images/dirt.png";
const SectionWaste5 = () => {
  return (
    <div data-scroll-section style={{ background: "#000000" }}>
          <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 H4 text-white">
            <div className="H4 font-normal ">
              แม้ประเทศไทยจะมีวิธีการจัดการขยะหลายวิธี แต่สุดท้ายแล้ว
              <br />
              การจัดการขยะยังคงใช้สองกระบวนการหลักนั่นคือ
              <a style={{ color: "#E4364B" }} className="font-bold text-4xl">
                {" "}
                การฝังกลบ
              </a>{" "}
              และ
              <a style={{ color: "#E4364B" }} className="font-bold text-4xl">
                {" "}
                การเผา
              </a>
              <br /> ซึ่งไม่ถือว่าเป็นการกำจัดขยะอย่างยั่งยืน เพราะทั้งสองวิธี
              <br />
              <a style={{ color: "#E4364B" }} className="font-bold text-4xl">
                ต่างสร้างผลกระทบต่อสิ่งแวดล้อมและมลภาวะในระยะยาว
              </a>
            </div>
          </div>
    </div>
  );
};

export default SectionWaste5;
