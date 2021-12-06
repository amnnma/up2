import Link from "next/dist/client/link";
import start_quiz from "../assets/images/start_quiz.svg";
const SectionQuiz = () => {
    return (
  <div     data-scroll-section
      className="relative z-50 min-h-screen"
      style={{ background: "#000000" }}>
    <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 H4 text-white">
      <div className="H5 font-normal ">
        <p className="text-white">
          หลังจากที่ได้รู้เกี่ยวกับ upcycling กันไปแล้ว
          <br />
          มาดูกันดีกว่าว่าถ้าคุณอยากจะสร้างผลงาน upcylcing สักหนึ่งชิ้น
          <br />
          การ upcycling แบบไหนที่เหมาะกับสไตล์ของคุณ
        </p>
        <br />
        <Link href="/indexforquiz.html">
          <button>
            <img src={start_quiz} id="start__btn" />
          </button>
        </Link>
      </div>
    </div>
  </div>)
}
export default SectionQuiz;
