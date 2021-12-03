import star from "../assets/images/star1_1.svg";
import star2 from "../assets/images/star1_2.svg";
import image from "../assets/images/index";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
const SectionCardflip = () => {
  const [flip, setFlip] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);
  return (
    <div data-scroll-section className="section">
      <div className="container flex flex-col justify-around min-h-screen  mx-auto text-center H4 text-white">
        <div className="H4 font-normal text-black ">
          <span className="H3">เอาให้ชัด Upcycling or Recycle? </span>
          <br /> <a></a>การจัดการขยะยังคงใช้สองกระบวนการหลักนั่นคือ
          <p>
            แม้ว่าทั้งสองวิธีนี้ จะเป็นกระบวนการในจัดการกับ
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
          className="grid md:grid-flow-col max-w-4xl w-11/12  mx-auto transition: transform 0.8s"
          style={{}}
        >
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <div
              onMouseEnter={() => setFlip(true)}
              onMouseLeave={() => setFlip(false)}
            >
              <div>
                <img src={image.card1_1} alt="7" />
              </div>
            </div>
            <div>
              <div>
                <img src={image.card2_1} alt="7" />
              </div>
            </div>
          </ReactCardFlip>
          <ReactCardFlip isFlipped={flip2} flipDirection="horizontal">
            <div
              onMouseEnter={() => setFlip2(true)}
              onMouseLeave={() => setFlip2(false)}
            >
              <div>
                <img src={image.card1_2} alt="7" />
              </div>
            </div>
            <div>
              <div>
                <img src={image.card2_2} alt="7" />
              </div>
            </div>
          </ReactCardFlip>
          <ReactCardFlip isFlipped={flip3} flipDirection="horizontal">
            <div
              onMouseEnter={() => setFlip3(true)}
              onMouseLeave={() => setFlip3(false)}
            >
              <div>
                <img src={image.card1_3} alt="7" />
              </div>
            </div>
            <div>
              <div>
                <img src={image.card2_3} alt="7" />
              </div>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </div>
  );
};
export default SectionCardflip;
