import star from "../assets/images/star1_1.svg";
import star2 from "../assets/images/star1_2.svg";
import image from "../assets/images/index";
const SectionCardflip2 = () => {
  return (
      <div data-scroll-section style={{ background: "#000000" }}>
        <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 H4 text-white">
          <span className="text-white H5 w-11/12 mx-auto md:w-9/12 lg:w-6/12">
            <img
              src={star}
              alt="10"
              style={{
                top: "40%",
                left: "50%",
                transform: " translateX(-50%)",
              }}
            />
            <span className="text-white H4 mx-auto md:w-9/12 lg:w-6/12" >
            หลังจากที่เข้าใจ concept ของการ upcycling มากขึ้นแล้ว
            ลองมาดูกันดีกว่า ว่าเศษวัสดุเหลือใช้ที่เราเห็นตามที่ต่าง ๆ
            สามารถนำมา upcycling และเพิ่มมูลค่าได้มากมายทีเดียว
            </span>
            <img
              src={star2}
              className="relative z-auto object-contain"
              alt="11"
              style={{
                top: "-60%",
                left: "90%",
                transform: " translateX(-50%)",
              }}
            />
          </span>
        </div>
      </div>
  );
};
export default SectionCardflip2;
