import star from "../assets/images/star2_1.svg";
import star2 from "../assets/images/star2_2.svg";
import intern from "../assets/images/puintern.svg";
const SectionFooter = () => {
  return (
    <div
      className="relative z-50 min-h-screen"
      style={{ background: "#000000" }}
    >
      <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16">
        <span className="text-white H4">ขอขอบคุณ</span>
        <div class="max-w-full mx-auto space-y-32 text-white">
          <section class="md:flex md:space-x-10 items-start">
            <div class="md:w-2/6 sticky top-0 py-4 ">
              <h2 class="font-extrabold text-2xl">ข้อมูลจาก</h2>
            </div>
            <div class="md:w-4/6 leading-snug space-y-6 text-justify">
              <p>
                Global waste recycling services market size in 2019 and a
                forecast to 2027 <br /> ข่าว “ผลิตขยะคนละ 1.15 กก./วัน สธ.ประกาศ ‘ลด
                คัด แยกขยะ เลิกถุงพลาสติก-โฟม’”  <br />บทความ “10 Thai brands with
                sustainability at the core of their identity” <br /> บทความ
                “โรงงานเผาขยะ ประตูสู่มลพิษของการกำจัดขยะประเทศไทย” <br /> รายงาน “A
                Global Snapshot of Solid Waste Management to 2050" <br />
                รายงานสถานการณ์ขยะในประเทศไทย ปี พ.ศ. 2557 <br />
                สถานการณ์คุณภาพสิ่งแวดล้อมของประเทศไทย ปี 2563
              </p>
            </div>
          </section>

          <section class="flex space-x-10 items-start">
            <div class="w-2/6 sticky top-10">
              <h2 class="font-extrabold text-2xl">หน่วยงานและองค์กร </h2>
            </div>

            <div class="w-4/6 leading-snug space-y-5 text-justify">
              <p>
                มติชนออนไลน์
                <br /> กรมควบคุมมลพิษ
                <br />
                กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม
                <br />
                สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม
                <br /> BK Online
                <br />
                Magazine GreenPeace
                <br /> KindConnext
                <br /> Thai Publica
                <br /> World Bank Group
              </p>
            </div>
          </section>

          <section class="flex space-x-10 items-start">
            <div class="w-2/6 sticky top-10">
              <h2 class="font-extrabold text-2xl">แหล่งภาพ</h2>
            </div>

            <div class="w-4/6 leading-snug space-y-5 text-justify">
              <p>
                pngegg.com, kaidee.com, freitag.ch,
                greenissuessingapore.blogspot.com, earth.com, phuketimes.com,
                thaipng.com, pinterest.com, euractiv.com, forbes.com,
                luxiders.com, unsplash.com, istockphoto.com, sarakadee.com,
                shopee.co.th, Kiddeeproject.Thailand, kevin-cheung.com,
                upcyclethat.com, theupcycle.nl, Tlejourn, Pin.Metal.Art,
                topicstock.pantip.com, thinkmakeshareblog.com, crayola.com,
                flaticon.com
              </p>
            </div>
          </section>
        </div>
      </div>
      <br />
    </div>
  );
};
export default SectionFooter;
