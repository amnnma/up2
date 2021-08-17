import redborder from "../assets/images/redborder.svg";
import star from "../assets/images/star1_1.svg";
import star2 from "../assets/images/star1_2.svg";
import image from "../assets/images/index";


const SectionQuiz = () => {

  return (
    <div style={{ background: "#FFFAEA" }}>
      <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 H4 text-white">
        <div className="H4 font-normal text-black ">
          <p>
            ให้คุณเลือกตอบคำถามจากตัวเลือกเหล่านี้
            ระบบจะทำการประมวลผลออกมาให้ว่าคุณสามารถทำ upcycling แบบไหนได้บ้าง
          </p>
        </div>
        <div className="grid md:grid-flow-col max-w-4xl w-11/12 py-16 mx-auto">
        </div>
      </div>
    </div>
  );
};
export default SectionQuiz;
