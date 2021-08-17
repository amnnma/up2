import { Flourish } from "../components/util/Flourish";
import europe from "../assets/images/europe.png";
import thailand from "../assets/images/thailand.png";
const SectionMap = () => {
  return (
    <div>
      <div
        id="title flourish"
        className="py-10 text-center"
        style={{ background: "#1331E6" }}
      >
        <span className="w-10/12 mx-auto font-normal text-xl  H6 md:w-full text-white">
          จากการสำรวจแบรนด์ upcycling จากทั่วโลกพบว่า แบรนด์เหล่านี้มาจากทวีป
        </span>
        <Flourish />
        <div
          className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 "
          style={{ background: "#1331E6" }}
        >
          <div className="mt-8 grid sm:grid-cols-2 sm:gap-5 md:gap-10 xl:w-9/12 xl:mx-auto">
            <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
              <img src={europe} alt="Tom Gonzales Online Training" />
            </div>
            <div id="services" className="H5 font-semibold text-white">
              หนึ่งในสาเหตุที่ผลักดันให้สหภาพยุโรปมีการ upcycling และ recycle
              สูงกว่าในภูมิภาคอื่น เพราะมีการประกาศใช้
              <span className="test text-yellow-400">
                EU Circular Economy Package{" "}
              </span>
              ในกลุ่มประเทศสมาชิก ตั้งแต่ปี 2015
              เพื่อผลักดันให้เกิดการจัดการขยะอย่างหมุนเวียน
            </div>
          </div>
        </div>
        <div
          className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 "
        >
          <div className="mt-8 grid sm:grid-cols-2 sm:gap-5 md:gap-10 xl:w-9/12 xl:mx-auto">
            <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
              <img src={thailand} alt="Tom Gonzales Online Training" />
            </div>
            <div id="services" className="H5 font-semibold text-white">
              ประเทศไทยเอง ก็มีนโยบายเรื่องการจัดการขยะและสิ่งแวดล้อม
              ระบุไว้ในแผนพัฒนาเศรษฐกิจและสังคมแห่งชาติฉบับที่ 9
              <span className="test text-yellow-400">
                แต่มีขยะเพียง 50% เท่านั้นที่ถูกนำไปบริหารจัดการ
              </span>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};
export default SectionMap;
