import image from "../assets/images";
import air from "../assets/images/air.png";
import smell from "../assets/images/smell.svg";
import dirt from "../assets/images/dirt.svg";
const SectionWaste8 = () => {
  return (
    <div data-scroll-section className="section">
        <div className="container flex flex-col justify-around min-h-screen py-20 mx-auto md:py-16 ">
          <div className="mt-8 grid sm:grid-cols-2 sm:gap-5 md:gap-10 xl:w-9/12 xl:mx-auto">
          <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
              <img src={dirt} alt="dirt" />
            </div>
            <div id="services" className="H6">
              <span className="H4 text-black">
                ผลกระทบทางดินและสารพิษตกค้าง
              </span>
              <br />
              การเผาขยะ 1 กิโลกรัมจะทำให้เกิดฝุ่นขนาดเล็ก (ขนาดเล็กกว่า 10
              ไมครอน) ที่เป็นอันตรายต่อสุขภาพ 19 กรัม โดยมลพิษที่สำคัญได้แก่
              เบนซิน (Benzene) และไดออกซิน(Dioxin) ซึ่งเป็นสารก่อมะเร็ง
            </div>
          </div>
        </div>
      </div>
  );
};

export default SectionWaste8;
