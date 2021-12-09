import { useState } from "react";
import Link from "next/link";
import ReactCompareImage from "react-compare-image";
import star1 from "../assets/images/star1.svg";
import images from "../assets/images/index";
import close_modal from "../assets/images/close_modal.svg";
import start_quiz from "../assets/images/start_quiz.svg";

const SectionMaterial = () => {
  const [Modal, setModal] = useState(false);
  const [Modal2, setModal2] = useState(false);
  const [Modal3, setModal3] = useState(false);
  const [Modal4, setModal4] = useState(false);
  const [Modal5, setModal5] = useState(false);
  const [Modal6, setModal6] = useState(false);
  const [Modal7, setModal7] = useState(false);
  const [Modal8, setModal8] = useState(false);
  const [Modal9, setModal9] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const openModal2 = () => {
    setModal2(true);
  };
  const openModal3 = () => {
    setModal3(true);
  };
  const openModal4 = () => {
    setModal4(true);
  };
  const openModal5 = () => {
    setModal5(true);
  };
  const openModal6 = () => {
    setModal6(true);
  };
  const openModal7 = () => {
    setModal7(true);
  };
  const openModal8 = () => {
    setModal8(true);
  };
  const openModal9 = () => {
    setModal9(true);
  };

  const closeModal = () => {
    setModal(false);
    setModal2(false);
    setModal3(false);
    setModal4(false);
    setModal5(false);
    setModal6(false);
    setModal7(false);
    setModal8(false);
    setModal9(false);
  };

  return (
    <div
    data-scroll-section
      className="relative z-50 min-h-screen"
      style={{ background: "#000000" }}
    >
      <br />
      <div className="container flex flex-col justify-around min-h-screen mx-auto text-center">
      
        <img src={images.logo3} alt="button" />
      
        <div className="grid grid-cols-3">
          <img key="1" src={images.pot} alt="pot" onClick={() => openModal()} />
          <img
            key="2"
            src={images.kidney}
            alt="kidney"
            onClick={() => openModal2()}
          />
          <img
            key="3"
            src={images.mat_can}
            alt="mat_can"
            onClick={() => openModal3()}
          />
          <img
            key="4"
            src={images.bike}
            alt="bike"
            onClick={() => openModal4()}
          />
          <img
            key="5"
            src={images.glasbottom}
            alt="glassbottom"
            onClick={() => openModal5()}
          />
          <img
            key="6"
            src={images.silper}
            alt="silper"
            onClick={() => openModal6()}
          />
          <img
            key="7"
            src={images.metalscrap}
            alt="metalscrap"
            onClick={() => openModal7()}
          />
          <img
            key="8"
            src={images.oldwood}
            alt="oldwood"
            onClick={() => openModal8()}
          />
          <img
            key="9"
            src={images.sailcloth}
            alt="sailcloth"
            onClick={() => openModal9()}
          />
        </div>
      </div>
      {Modal ? (
        <div
          className="fixed z-50 w-full p-4 top-2/4 rounded-3xl left-2/4 mx-auto "
          style={{
            background: "#4D8684",
            transform: "translate(-50%, -50%)",
            maxWidth: "1200px",
            maxHeight: "600px",
          }}
        >
          <div className="flex justify-start mt-1">
            <img
              src={close_modal}
              onClick={() => closeModal()}
              className="cursor-pointer"
            />
          </div>
          <div>
            <div className="mt-8 grid sm:grid-cols-3 sm:gap-6 md:gap-10 xl:w-9/12 xl:mx-auto">
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  วัสดุ : หม้อหุงข้าว
                  <br />
                  มูลค่า : ~30฿
                </b>
                <p>
                  แต่ละครัวเรือนของประเทศไทย ต้องมีหม้อหุงข้าวติดบ้านอย่างน้อย 1
                  ชิ้น ซึ่งอายุการใช้งานของหม้อหุงข้าว อยู่ที่ราว 5 ปี
                  จึงทำให้ทุก ๆ 5 ปี จะมีปริมาณหม้อหุงข้าวถูกทิ้งกว่า 25
                  ล้านชิ้น
                </p>
              </div>
              <div id="services" className="H6">
                <ReactCompareImage
                  leftImage={images.pot_yellow}
                  rightImage={images.bellringyellow}
                  sliderLineWidth={6}
                  sliderLineColor="red"
                />
              </div>
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  ชื่อสินค้า : Rice bell
                  <br />
                  ชนิดสินค้า : กระดิ่งรถจักรยาน
                  <br />
                  แบรนด์ : Kevin Cheung
                  <br />
                  ราคา : 780฿
                </b>
                <p>
                  กระดิ่งรถจักรยานที่ทำมาจากหม้อหุงข้าว มีชื่อว่า "Rice bell"
                  เป็นหนึ่งในผลงานการออกแบบ โดย เคลวิน ชุง (Kevin Cheung)
                  ดีไซน์เนอร์และ นัก upcycling ชาวฮ่องกง{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {Modal2 ? (
        <div
          className="fixed z-50 w-full p-4 top-2/4 rounded-3xl left-2/4 "
          style={{
            background: "#4D8684",
            transform: "translate(-50%, -50%)",
            maxWidth: "986px",
            maxHeight: "572px",
          }}
        >
          <div className="flex justify-start mt-1 space-x-3">
            <img
              src={close_modal}
              onClick={() => closeModal()}
              className="cursor-pointer"
            />
          </div>
          <div>
            <div className="mt-8 grid sm:grid-cols-3 sm:gap-6 md:gap-10 xl:w-9/12 xl:mx-auto">
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  วัสดุ : ถุงน้ำยาล้างไต
                  <br />
                  มูลค่า : ~5฿
                </b>
                <br />
                <br />
                <br />
                <p className="text-base">
                  ถุงน้ำยาล้างไตเป็นอุปกรณ์ที่มีความจำเป็น
                  สำหรับคนที่มีอาการโรคไตเรื้อรัง โดยเฉลี่ยแล้ว คนไข้โรคไต 1
                  คนต้องใช้ถุงน้ำยาล้างไตทั้งหมด 8 ถุงต่อวันจึงทำให้ในแต่ละวัน
                  มีถุงน้ำยาล้างไตที่ใช้แล้วเป็นจำนวนมาก
                </p>
              </div>
              <div id="services" className="H6">
                <ReactCompareImage
                  leftImage={images.kidneyY}
                  rightImage={images.upcy_bagYellow}
                  sliderLineWidth={6}
                  sliderLineColor="red"
                />
              </div>
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  ชื่อสินค้า : KIDDEE Project No.1
                  <br />
                  ชนิดสินค้า : กระเป๋า
                  <br />
                  แบรนด์ : คิดดีโปรเจค
                  <br />
                  ราคา : 1650฿
                </b>
                <br />
                <br />
                <br />
                <p className="text-base">
                  คิดดี โปรเจค (Kiddee project)
                  เป็นแบรนด์ธุรกิจเพื่อสังคมที่นำถุงน้ำยาล้างไต
                  กลับมาเพิ่มมูลค่า ด้วยการฆ่าเชื้อทำความสะอาด
                  และนำมาผลิตเป็นกระเป๋าที่มีดีไซน์สวยงาม
                  โดยรายได้จากการขายผลิตภัณฑ์ทั้งหมด
                  จะถูกนำมาสมทบทุนเพื่อรักษาผู้ป่วยโรคไตอีกด้วย
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {Modal3 ? (
        <div
          className="fixed z-50 w-full p-4 top-2/4 rounded-3xl left-2/4 "
          style={{
            background: "#4D8684",
            transform: "translate(-50%, -50%)",
            maxWidth: "986px",
            maxHeight: "572px",
          }}
        >
          <div className="flex justify-start mt-1 space-x-3">
            <img
              src={close_modal}
              onClick={() => closeModal()}
              className="cursor-pointer"
            />
          </div>
          <div>
            <div className="mt-8 grid sm:grid-cols-3 sm:gap-6 md:gap-10 xl:w-9/12 xl:mx-auto">
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  วัสดุ : กระป๋องสังกะสี
                  <br />
                  มูลค่า : ~3.10฿
                </b>
                <p>
                  รายงานจากเขตคิง รัฐวอชิงตัน
                  พบว่ามีกระป๋องสังกะสีและอลูมิเนียมถูกทิ้ง มากกว่า 173
                  ล้านชิ้นในระยะเวลาหนึ่งปี การทิ้งกระป๋องเหล่านี้ในหลุมฝังกลบ
                  ก่อปัญหาทางมลพิษมากมายและหากจะกำจัด
                  ด้วยการเผาก็ยังใช้พลังงานมากอีกด้วย{" "}
                </p>
              </div>
              <div id="services" className="H6">
                <ReactCompareImage
                  leftImage={images.mat_can}
                  rightImage={images.upcan}
                  sliderLineWidth={6}
                  sliderLineColor="red"
                />
              </div>
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  ชื่อสินค้า : CLOCK NO.7 – BLACK AND WALNUT
                  <br />
                  ชนิดสินค้า : นาฬิกาตั้งโต๊ะ
                  <br />
                  แบรนด์ : UPCYCLED THAT
                  <br />
                  ราคา : 1,568฿
                </b>
                <p>
                  นาฬิกาตั้งโต๊ะเรือนนี้มีส่วนประกอบของ
                  เศษกระป๋องโลหะที่ไม่ได้ใช้งานแล้ว ให้ความรู้สึก แนววินเทจ
                  มีความเก่าๆ และคลาสสิคในเวลาเดียวกัน มีจำหน่ายบนเว็บไซต์
                  upcyclethat ในราคา $49 หรือ ราว 1,500 บาท{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {Modal4 ? (
        <div
          className="fixed z-50 w-full p-4 top-2/4 rounded-3xl left-2/4 "
          style={{
            background: "#4D8684",
            transform: "translate(-50%, -50%)",
            maxWidth: "986px",
            maxHeight: "572px",
          }}
        >
          <div className="flex justify-start mt-1 space-x-3">
            <img
              src={close_modal}
              onClick={() => closeModal()}
              className="cursor-pointer"
            />
          </div>
          <div>
            <div className="mt-8 grid sm:grid-cols-3 sm:gap-6 md:gap-10 xl:w-9/12 xl:mx-auto">
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  วัสดุ : ยางรถ
                  <br />
                  มูลค่า : ~0.15฿
                </b>
                <p>
                  ในแต่ละปีพบว่า กว่า 100,000 เมตริกตัน ของไมโครพลาสติก
                  (Microplastics) มีเศษของยางรถยนต์ที่อาจปลิวในอากาศ
                  และตกลงสู่ทะเล
                </p>
              </div>
              <div id="services" className="H6">
                <ReactCompareImage
                  leftImage={images.bikewheel}
                  rightImage={images.earring}
                  sliderLineWidth={6}
                  sliderLineColor="red"
                />
              </div>
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  ชื่อสินค้า : UPCYCLED <br />
                  EARRINGS FEATHERS
                  <br />
                  ชนิดสินค้า : ต่างหู
                  <br />
                  แบรนด์ : THE UPCYCLE
                  <br />
                  ราคา : 761฿
                </b>
                <p>
                  ต่างหูที่ทำมาจากเหล็ก สเตนเลส หรือวัสดุอื่น ๆ
                  อาจจะดูธรรมดาเกินไป แต่ด้วยการนำดีไซน์
                  มาผนวกกับล้อยางรถยนต์ที่ไม่ใช้แล้ว
                  จึงกลายมาเป็นต่างหูจากยางล้อจักรยานยนต์ ทีมีราคาสูงถึงเกือบ
                  800 บาทต่อคู่เลยทีเดียว
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {Modal5 ? (
        <div
          className="fixed z-50 w-full p-4 top-2/4 rounded-3xl left-2/4 "
          style={{
            background: "#4D8684",
            transform: "translate(-50%, -50%)",
            maxWidth: "986px",
            maxHeight: "572px",
          }}
        >
          <div className="flex justify-start mt-1 space-x-3">
            <img
              src={close_modal}
              onClick={() => closeModal()}
              className="cursor-pointer"
            />
          </div>
          <div>
            <div className="mt-8 grid sm:grid-cols-3 sm:gap-6 md:gap-10 xl:w-9/12 xl:mx-auto">
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  วัสดุ : ขวดแก้ว
                  <br />
                  มูลค่า : ~0.30-14.00฿{" "}
                </b>
                <p>
                  จากการสำรวจโดยหน่วยงานด้านสิ่งแวดล้อม ของสหรัฐอเมริกา(EPA)
                  พบว่า ขวดแก้วที่ใช้บรรจุน้ำอัดลม น้ำเปล่า
                  หรือเครื่องดื่มแอลกอฮอล์ มีปริมาณมากกว่า 12.8
                  ล้านตันในประเทศสหรัฐอเมริกา{" "}
                </p>
              </div>
              <div id="services" className="H6">
                <ReactCompareImage
                  leftImage={images.glasbottom}
                  rightImage={images.bottlelamp}
                  sliderLineWidth={6}
                  sliderLineColor="red"
                />
              </div>
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  ชื่อสินค้า : BESPOKE <br />
                  BOTTLE PIPE LAMP
                  <br />
                  ชนิดสินค้า : โคมไฟตั้งโต๊ะ
                  <br />
                  แบรนด์ : UPCYCLED CREATIVE
                  <br />
                  ราคา : 5,552฿
                </b>
                <p>
                  ขาดแก้วเหลือใช้ สามารถกลายมาเป็นโคมไฟประดับ ที่ให้สีสันสดใสได้
                  เหมาะสำหรับการนำไปตกแต่ง ร้านอาหาร บาร์
                  หรือแม้แต่ปาร์ตี้นอกสถานที่ ก็สามารถนำไปตกแต่งได้เช่นกัน{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {Modal6 ? (
        <div
          className="fixed z-50 w-full p-4 top-2/4 rounded-3xl left-2/4 "
          style={{
            background: "#4D8684",
            transform: "translate(-50%, -50%)",
            maxWidth: "986px",
            maxHeight: "572px",
          }}
        >
          <div className="flex justify-start mt-1 space-x-3">
            <img
              src={close_modal}
              onClick={() => closeModal()}
              className="cursor-pointer"
            />
          </div>
          <div>
            <div className="mt-8 grid sm:grid-cols-3 sm:gap-6 md:gap-10 xl:w-9/12 xl:mx-auto">
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  วัสดุ : รองเท้าตามชายหาด
                  <br />
                  มูลค่า : ~5.50฿
                </b>

                <p>
                  จากการประเมินคาดว่า ภายในปี 2050
                  ขยะที่มีในท้องทะเลจะมีปริมาณขยะพลาสติก มากกว่าจำนวนปลา!
                  ขยะเหล่านี้เป็นอันตราย ต่อสัตว์ทะเล และยังสามารถปนเปื้อนเข้า
                  สู่ร่างกาย หลังจากที่มนุษย์บริโภคสัตว์ทะเล
                </p>
              </div>
              <div id="services" className="H6">
                <ReactCompareImage
                  leftImage={images.silper}
                  rightImage={images.upsilper}
                  sliderLineWidth={6}
                  sliderLineColor="red"
                />
              </div>
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  ชื่อสินค้า : Cheug (เชือก)
                  <br />
                  ชนิดสินค้า : รองเท้าแตะ
                  <br />
                  แบรนด์ : Tlejourn : ทะเลจร
                  <br />
                  ราคา : 399฿
                </b>

                <p>
                  จากรองเท้าที่ถูกทิ้งล่องลอยอยู่ในทะเล ดร.ณัฐพงศ์ นิธิอุทัย
                  ผู้ก่อตั้งแบรนด์ทะเลจร และ Trash Hero
                  ได้นำรองเท้าเหลือใช้เหล่านี้ มาผ่านการบดให้เป็นวัสดุ
                  ก่อนจะนำมาอัดเข้ารูป เป็นรองเท้าคู่ใหม่{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {Modal7 ? (
        <div
          className="fixed z-50 w-full p-4 top-2/4 rounded-3xl left-2/4 "
          style={{
            background: "#4D8684",
            transform: "translate(-50%, -50%)",
            maxWidth: "986px",
            maxHeight: "572px",
          }}
        >
          <div className="flex justify-start mt-1 space-x-3">
            <img
              src={close_modal}
              onClick={() => closeModal()}
              className="cursor-pointer"
            />
          </div>
          <div>
            <div className="mt-8 grid sm:grid-cols-3 sm:gap-6 md:gap-10 xl:w-9/12 xl:mx-auto">
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  วัสดุ : เศษเหล็กจากการก่อสร้าง
                  <br />
                  มูลค่า : ~15฿
                </b>
                <p>
                  มากกว่า 50% ของการใช้เหล็กทั้งหมดในโลก มาจากอุตสาหกรรมก่อสร้าง
                  เมื่อการก่อสร้างอาคารสิ้นสุดลง
                  เศษเล็กเหลือใช้เหล่านี้จึงอาจจบลงด้วยการ ชั่งกิโลขาย
                  หรือนำไปไว้ในหลุมฝังกลบ{" "}
                </p>
              </div>
              <div id="services" className="H6">
                <ReactCompareImage
                  leftImage={images.metalscrap}
                  rightImage={images.chandelier}
                  sliderLineWidth={6}
                  sliderLineColor="red"
                />
              </div>
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  ชื่อสินค้า : Chat (โคมฉัตร)
                  <br />
                  ชนิดสินค้า : โคมระย้า
                  <br />
                  แบรนด์ : Pin Metal Art
                  <br />
                  ราคา : 10,000-100,000฿
                </b>
                <p>
                  คุณ ปิ่น-ศรุตา เกียรติภาคภูมิ ดีไซน์เนอร์ชาวไทย
                  ได้มองเห็นคุณค่าและความงามของเศษเหล็กเหลือใช้
                  จึงนำมาดัดตัดแต่งเป็นลวดลายต่าง ๆ จนเกิดเป็นโคมระย้าภายใต้ชื่อ
                  "โคมฉัตร"{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {Modal8 ? (
        <div
          className="fixed z-50 w-full p-4 top-2/4 rounded-3xl left-2/4 "
          style={{
            background: "#4D8684",
            transform: "translate(-50%, -50%)",
            maxWidth: "986px",
            maxHeight: "572px",
          }}
        >
          <div className="flex justify-start mt-1 space-x-3">
            <img
              src={close_modal}
              onClick={() => closeModal()}
              className="cursor-pointer"
            />
          </div>
          <div>
            <div className="mt-8 grid sm:grid-cols-3 sm:gap-6 md:gap-10 xl:w-9/12 xl:mx-auto">
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  วัสดุ : ไม้ที่ผุพังแล้ว <br />
                  มูลค่า : ~35฿
                </b>
                <p>
                  รายงานด้านสิ่งแวดล้อมของสหรัฐอเมริกา ระบุว่าในปี 2018
                  มีปริมาณเศษไม้ที่ถูกทิ้ง ในหลุมฝังกลบมีปริมาณมากถึง 12.2
                  ล้านตัน ซึ่งคิดเป็น 8.3 เปอร์เซ็นของปริมาณขยะ
                  ที่มีอยู่ในหลุมฝังกลบ
                </p>
              </div>
              <div id="services" className="H6">
                <ReactCompareImage
                  leftImage={images.oldwood}
                  rightImage={images.nest}
                  sliderLineWidth={6}
                  sliderLineColor="red"
                />
              </div>
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  ชื่อสินค้า :<br />
                  HOUSE SPARROW NEST BOX
                  <br />
                  ชนิดสินค้า : รังนก/รังกระรอก
                  <br />
                  แบรนด์ : THE UPCYCLE
                  <br />
                  ราคา : 3,623฿
                </b>
                <p>
                  นำเศษไม้ที่ผุพังแล้วนำมาปรับแต่งอีกนิดหน่อย
                  ก็จะได้บ้านรังนกที่สวยงาม พร้อมใช้งานแล้ว จากเศษไม้เก่า ๆ
                  ที่อาจจะต้องนำไปทิ้ง อาจกลายมาเป็นบ้านรังนกไม้ราคา กว่า 3,500
                  บาทก็ได้นะ{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {Modal9 ? (
        <div
          className="fixed z-50 w-full p-4 top-2/4 rounded-3xl left-2/4 "
          style={{
            background: "#4D8684",
            transform: "translate(-50%, -50%)",
            maxWidth: "986px",
            maxHeight: "572px",
          }}
        >
          <div className="flex justify-start mt-1 space-x-3">
            <img
              src={close_modal}
              onClick={() => closeModal()}
              className="cursor-pointer"
            />
          </div>
          <div>
            <div className="mt-8 grid sm:grid-cols-3 sm:gap-6 md:gap-10 xl:w-9/12 xl:mx-auto">
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  วัสดุ : ผ้าใบเรือ
                  <br />
                  มูลค่า : ~200฿
                </b>
                <p>
                  ผ้าใบเรือเมื่อเก่าหรือผุพัง
                  เจ้าของเก่ามักนำไปทิ้งซึ่งทำให้ผ้าใบเรือ
                  ที่ยังมีคุณภาพที่ดีต้องลงเอยในหลุมฝังกลบขยะ
                  หรือเตาเผาที่อาจสร้างผลพิษต่อสิ่งแวดล้อมได้
                </p>
              </div>
              <div id="services" className="H6">
                <ReactCompareImage
                  leftImage={images.sailcloth2}
                  rightImage={images.sailbag}
                  sliderLineWidth={6}
                  sliderLineColor="red"
                />
              </div>
              <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                <b>
                  ชื่อสินค้า : TOASTIE
                  <br />
                  ชนิดสินค้า : กระเป๋า
                  <br />
                  แบรนด์ : UPCYCLED THAT
                  <br />
                  ราคา : 896฿
                </b>
                <p>
                  TOASTIE เกิดจากการนำเศษผ้าใบเรือที่ไม่ได้ใช้
                  มาเพิ่มมูลค่าด้วยการทำเป็นกระเป๋า โดยจำหน่ายผ่านช่องทางออนไลน์
                  กระเป๋ามีราคาใบละ $28 หรือราว 600 บาท{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SectionMaterial;
