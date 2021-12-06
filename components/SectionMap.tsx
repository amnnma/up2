import { Flourish } from "./util/Flourish";
import Images from "../assets/images/index";
const SectionMap = () => {
  return (
    <div>
      <div
      data-scroll-section
        id="title flourish"
        className="py-10 text-center"
        style={{ background: "#1331E6" }}
      >
        <span className="w-10/12 mx-auto text-xl  H4 md:w-full text-white">
        จากการเก็บข้อมูลแบรนด์ upcycling กว่า 60 แบรนด์ พบว่า<br />
 แบรนด์ส่วนใหญ่มาจากทวีปยุโรปและอเมริกา
        </span>
      <p className="text-white">(คลิกเพื่ออ่านรายละเอียด)</p>
        <Flourish />
        <div
          className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 "
          style={{ background: "#1331E6" }}
        >
          <div className="mt-8 grid sm:grid-cols-2 sm:gap-5 md:gap-10 xl:w-9/12 xl:mx-auto">
            <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
              <img src={Images.europe} alt="EU" />
            </div>
            <div id="services" className="H5 font-semibold text-white">
            <p className="H5 font-bold text-white">แล้วทำไมแบรนด์ upcycling <br/>
ส่วนใหญ่จึงมาจากทวีปยุโรป ?</p>
              หนึ่งในสาเหตุที่ผลักดันให้สหภาพยุโรปมีการ upcycling และ recycle
              สูงกว่าในภูมิภาคอื่น เพราะมีการประกาศใช้  
              <span className="whitespace-pre-line"> </span>
                <span className="test text-yellow-400">
                  EU Circular Economy Package{" "}
                </span>
              ในกลุ่มประเทศสมาชิก ตั้งแต่ปี 2015
              เพื่อผลักดันให้เกิดการจัดการขยะอย่างหมุนเวียน
            </div>
          </div>
        </div>
        <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 ">
          <div className="mt-8 grid sm:grid-cols-2 sm:gap-5 md:gap-10 xl:w-9/12 xl:mx-auto">
            <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
              <img src={Images.thailand} alt="TH" />
            </div>
            <div id="services" className="H5 font-semibold text-white">
              ประเทศไทยเอง ก็มีนโยบายเรื่องการจัดการขยะและสิ่งแวดล้อม
              ระบุไว้ใน
              <span className="test text-yellow-400">
              แผนพัฒนาเศรษฐกิจและสังคมแห่งชาติฉบับที่ 9
              </span><br/>แต่มีขยะเพียง
              <span className="test text-yellow-400">
                 50% เท่านั้นที่ถูกนำไปบริหารจัดการ
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionMap;
