import redborder from "../assets/images/redborder.svg"
const SectionCardflip = () => {
    return (
        <div style={{ background: "#FFFAEA" }}>
          <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 H4 text-white">
            <div className="H4 font-normal text-black ">
            <span className="H3">เอาให้ชัด Upcycling or Recycle? </span>
              <br /> การจัดการขยะยังคงใช้สองกระบวนการหลักนั่นคือ
              <p>แม้ว่าทั้งสองวิธีนี้จะเป็นกระบวนการในจัดการกับ
วัสดุเหลือใช้เหลือใช้เหมือนกัน แต่ทั้งสองวิธีนี้ก็มีวิธีการและ concept ที่แตกต่างกัน</p> 
              <p>
              เราจะมาทำความเข้าใจผ่าน mini quiz กันว่าทำไม recycle 
ถึงยังไม่พอ แต่ต้อง upcycling ด้วย? 
              </p>
            </div>
          </div>
        </div>
    )
}
export default SectionCardflip