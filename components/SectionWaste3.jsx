import image from "../assets/images";
const SectionWaste3 = () => {
  return (
    <div data-scroll-section className="section">
      <div className="container flex flex-col justify-around min-h-screen mx-auto text-center">
        <span className="H4 font-semibold mx-auto">
          ช่วงโควิดที่ผ่านมา ประเทศไทยมีขยะมากแค่ไหน ?
        </span>
        <p className="H6">
        รายงานจากกรมควบคุมมลพิษปี พ.ศ. 2563 <br />
พบว่าประเทศไทยมีปริมาณขยะมูลฝอยเกิดขึ้นประมาณ 27.35 ล้านตันต่อปี <br />
ในจำนวนนี้ถูกนำไปกำจัดอย่างถูกต้องเพียง 11.19 ล้านตัน <br />
แต่เมื่อมองภาพรวมจะพบว่
          <b style={{ color: "#019EF7" }}> จำนวนขยะมูลฝอยมีปริมาณลดลง</b>
        </p>
        <br />
        <img
          src={image.wasteperton}
          className="object-none h-full w-full"
          alt="wasteperton"
        />
      </div>
    </div>
  );
};

export default SectionWaste3;
