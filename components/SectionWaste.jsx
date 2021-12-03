import image from "../assets/images";
import air from "../assets/images/air.png";
import smell from "../assets/images/smell2.png";
import dirt from "../assets/images/dirt.png";
const SectionWaste = () => {
  return (
    <div  data-scroll-section style={{ background: "#FFD43B" }}>
      <div className="container flex flex-col justify-around min-h-screen  mx-auto text-center ">
        <span className="text-3xl font-medium leading-snug">
          ก่อนจะคุยกันต่อเรื่อง upcycling
          <br />
          ลองมาดูกันก่อนดีกว่า ว่าทำไม… <br /><br />
          <span className="text-6xl font-medium leading-snug py-1">
          “ปัญหาขยะในไทย ไม่แพ้ชาติใดในโลก”
        </span>
        </span>
      </div>
    </div>
  );
};

export default SectionWaste;
