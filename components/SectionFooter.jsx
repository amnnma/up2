import image from "../assets/images/index";
const SectionFooter = () => {
  return (
    <div
      className="relative z-50 min-h-screen"
      style={{ background: "#000000" }}
    >
      <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16">
        <span className="text-white H4 -ml-54">ขอขอบคุณ</span>
        <br />
        <br />
        <div class="max-w-full mx-auto space-y-32 text-white">
          <section class="md:flex md:space-x-10 items-start">
            <div class="md:w-2/6 sticky top-0 py-4">
              <h2 class="font-extrabold text-2xl">ข้อมูลจาก</h2>
            </div>
            <div class="md:w-4/6 leading-snug space-y-6 text-justify">
              <p>
                Global waste recycling services market size in 2019 and a
                forecast to 2027 <br /> ข่าว “ผลิตขยะคนละ 1.15 กก./วัน สธ.ประกาศ
                ‘ลด คัด แยกขยะ เลิกถุงพลาสติก-โฟม’” <br />
                บทความ “10 Thai brands with sustainability at the core of their
                identity” <br /> บทความ “โรงงานเผาขยะ
                ประตูสู่มลพิษของการกำจัดขยะประเทศไทย” <br /> รายงาน “A Global
                Snapshot of Solid Waste Management to 2050" <br />
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
        <br/>
        <br/>
        <p className="H4 text-white">PU internship</p>
        <div className="mt-8 grid sm:grid-cols-3 sm:gap-6 md:gap-12 xl:w-9/12 xl:mx-auto">
          <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
            <img src={image.tem} alt="tem" />
          </div>
          <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
            <img src={image.gun} alt="gun" />
          </div>
          <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
            <img src={image.aum} alt="aum" />
          </div>
          <div id="services" className="H6 text-white">
            <p>
              สุชาติ นิหะ
              <br />
              สาขาโลกคดีศึกษาและ<br/> การประกอบการเพื่อสังคม (GSSE) Intern Project
              Coordinator
            </p>
          </div>
          <div id="services" className="H6 text-white">
            ฐิตารีย์ สงเนียม
            <br />
            สาขาการออกแบบนิเทศศิลป์ (CommDe) Intern Information Designer
          </div>
          <div className="H6 text-white font-normal" id="image">
            ศักดิ์ณรงค์ สมบัติเจริญ <br />
            สาขาวิทยาการข้อมูล<br/> Intern Front-end Developer
          </div>
        </div>
      </div>

      <br />
    </div>
  );
};
export default SectionFooter;
