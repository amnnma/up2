import image from "../assets/images";
import air from "../assets/images/air.png";
import smell from "../assets/images/smell.svg";
import dirt from "../assets/images/dirt.svg";
const SectionWaste7 = () => {
  return (
    <div data-scroll-section className="section">
        <div className="container flex flex-col justify-around min-h-screen py-20 mx-auto md:py-16 ">
          <div className="mt-8 grid sm:grid-cols-2 sm:gap-5 md:gap-10 xl:w-9/12 xl:mx-auto">
          <div id="services" className="H6 text-right">
              <span className="H4 text-black">ผลกระทบทางกลิ่นและสุขภาวะ</span>
              <br />
              ปัญหาการส่งกลิ่นเหม็นรบกวนพื้นที่ในชุมชน
              ที่ทั้งเกิดจากขยะที่รอการเผาและกลิ่นไหม้ จากการเผาแล้วของขยะโดยตรง
            </div>
            <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
              <img src={smell} alt="smell" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default SectionWaste7;
