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
      <div className="absolute z-10" style={{ top: -80, left: "20%" }}>
        <img src={images.logo3} alt="button" />
      </div>
        <div className="grid grid-cols-3 mx-auto">
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
                <p className="text-yellow-400 H5">BEFORE</p>
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
              <p className="text-yellow-400 H5">AFTER</p>
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
              <p className="text-yellow-400 H5">BEFORE</p>
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
              <p className="text-yellow-400 H5">AFTER</p>
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
              <p className="text-yellow-400 H5">BEFORE</p>
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
              <p className="text-yellow-400 H5">AFTER</p>
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
    </div>
  );
};

export default SectionMaterial;
