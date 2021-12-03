import image from "../assets/images";
const SectionWaste2 = () => {
  return (
    <div data-scroll-section className="section">
        <div className="container flex flex-col justify-around min-h-screen  mx-auto text-center ">
            <span className="H4 font-medium">
              เมื่อเปรียบเทียบประเทศในกลุ่มของทวีปเอเชีย
              <br />
              คุณจะเห็นว่าประเทศไทยคือ{" "}
              <span style={{ color: "#E4364B" }}>
                หนึ่งในประเทศที่ทิ้งขยะมากที่สุดในโลก
              </span>
            </span>
            <img
              className="object-none h-full w-full"
              src={image.wastenation}
              alt="wastenation"
            />
      </div>
    </div>
  );
};

export default SectionWaste2;
