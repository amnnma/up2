import redborder from "../assets/images/redborder.svg";
import star from "../assets/images/star1_1.svg";
import star2 from "../assets/images/star1_2.svg";
import image from "../assets/images/index";
const SectionCardflip = () => {
  return (
    <div style={{ background: "#FFFAEA" }}>
      <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 H4 text-white">
        <div className="H4 font-normal text-black ">
          <span className="H3">เอาให้ชัด Upcycling or Recycle? </span>
          <br /> การจัดการขยะยังคงใช้สองกระบวนการหลักนั่นคือ
          <p>
            แม้ว่าทั้งสองวิธีนี้จะเป็นกระบวนการในจัดการกับ
            วัสดุเหลือใช้เหลือใช้เหมือนกัน แต่ทั้งสองวิธีนี้ก็มีวิธีการและ
            concept ที่แตกต่างกัน
          </p>
          <p>
            เราจะมาทำความเข้าใจผ่าน mini quiz กันว่าทำไม recycle
            <br />
            ถึงยังไม่พอ แต่ต้อง upcycling ด้วย?
          </p>
        </div>
        <div
          className="grid md:grid-flow-col max-w-4xl w-11/12 py-16 mx-auto transition: transform 0.8s"
          style={{}}
        >
          <img src={image.card1_1} className="before" alt="6" />
          <img src={image.card1_2} alt="7" />
          <img src={image.card1_3} alt="8" />
        </div>
      </div>
      <div style={{ background: "#000000" }}>
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
            หลังจากที่เข้าใจ concept ของการ upcycling มากขึ้นแล้ว
            ลองมาดูกันดีกว่า ว่าเศษวัสดุเหลือใช้ที่เราเห็นตามที่ต่าง ๆ
            สามารถนำมา upcycling และเพิ่มมูลค่าได้มากมายทีเดียว
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
    </div>
  );
};
export default SectionCardflip;
