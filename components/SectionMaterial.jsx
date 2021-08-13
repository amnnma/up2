import { useState } from "react";
import ReactCompareImage from "react-compare-image";
import star1 from "../assets/images/star1.svg";
import images from "../assets/images/index";
import close_modal from "../assets/images/close_modal.svg";
import start_quiz from "../assets/images/start_quiz.svg";

const select_image2 = [
  {
    id: 1,
    imgA: images.pot,
    imgB: images.bellring,
    nameA: "ถุงน้ำยาล้างไต",
    priceA: 5,
    nameB: "KIDDEE Project No.1",
    typeB: "กระเป๋า",
    brandB: "คิดดีโปรเจ็ค",
    priceB: 1650,
  }
]
const select_image = [
  {
    id: 1,
    imgA: images.pot,
    imgB: images.bellring,
    nameA: "หม้อหุงข้าว",
    priceA: 30,
    nameB: "Rice bell",
    typeB: "กระดิ่งรถจักรยาน",
    brandB: "Kevin Cheung",
    priceB: 780,
  },
  {
    id: 2,
    imgA: images.kidney,
    imgB: images.upbag,
    nameA: "ถุงน้ำยาล้างไต",
    priceA: -5,
    nameB: "KIDDEE Project No.1",
    typeB: "กระเป๋า",
    brandB: "คิดดีโปรเจ็ค",
    priceB: 1650
  },
  {
    id: 3,
    imgA: images.mat_can,
    imgB: images.upcan,
    nameA: "กระป๋องสังกะสี",
    priceA: 3.10,
    nameB: "CLOCK NO.7 – BLACK AND WALNUT",
    typeB: "นาฬิกาตั้งโต๊ะ",
    brandB: "UPCYCLED THAT",
    priceB: 1568
  },
  {
    id: 4,
    imgA: images.partbike,
    imgB: images.bikelamp,
    nameA: "ไฟจักรยาน",
    priceA: 10,
    nameB: "UPCYCLED BIKE LAMP-LIGHT UP",
    typeB: "โคมไฟตั้งโต๊ะ",
    brandB: "THE UPCYCLE",
    priceB: 3430,
  },
  {
    id: 5,
    imgA: images.bikewheel,
    imgB: images.earring,
    nameA: "ยางรถ",
    priceA: 0.15,
    nameB: "UPCYCLED EARRINGS FEATHERS",
    typeB: "ต่างหู",
    brandB: "THE UPCYCLE",
    priceB: 761,
  },
  {
    id: 6,
    imgA: images.glasbottom,
    imgB: images.bottlelamp,
    nameA: "ขวดแก้ว",
    priceA: 0.30,
    nameB: "BESPOKE BOTTLE PIPE LAMP",
    typeB: "โคมไฟตั้งโต๊ะ",
    brandB: "UPCYCLED CREATIVE",
    priceB: 5552,
  },
  {
    id: 7,
    imgA: images.silper,
    imgB: images.upsilper,
    nameA: "รองเท้าตามชายหาด ",
    priceA: 5.50,
    nameB: "Cheug (เชือก)",
    typeB: "รองเท้าแตะ",
    brandB: "Tlejourn : ทะเลจร",
    priceB: 399,
  },
  {
    id: 8,
    imgA: images.metalscrap,
    imgB: images.chandelier,
    nameA: "เศษเหล็กจากการก่อสร้าง",
    priceA: 15,
    nameB: "Chat (โคมฉัตร)",
    typeB: "โคมระย้า",
    brandB: "Pin Metal Art",
    priceB: 100000,
  },
  {
    id: 9,
    imgA: images.oldwood,
    imgB: images.nest,
    nameA: "ไม้ที่ผุพังแล้ว",
    priceA: 35,
    nameB: "HOUSE SPARROW NEST BOX",
    typeB: "รังนก/รังกระรอก",
    brandB: "THE UPCYCLE",
    priceB: 3623,
  },
  {
    id: 10,
    imgA: images.sailcloth,
    imgB: images.chandelier,
    nameA: "ผ้าใบเรือ",
    priceA: 200,
    nameB: "TOASTIE",
    typeB: "กระเป๋า",
    brandB: "UPCYCLED THAT",
    priceB: 896,
  }
];
const SectionMaterial = () => {
  const [Modal, setModal] = useState(false);


  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {

    setModal(false);
  };

  return (
    <div className="relative z-50 min-h-screen" style={{ background: "#000000" }}>
      <br/>
      <div className="container flex flex-col justify-around min-h-screen mx-auto text-center">
        <span className="text-4xl text-white">
          เศษวัสดุเหล่านี้
          <br />
          เอาไปทำไปทำเป็นอะไรได้บ้างนะ ?
        </span>
        <p className="mt-3 text-center text-white B3 opacity-30">
          (กดคลิกวัสดุเพื่อดูรายละเอียด)
        </p>
        <div className="relative w-full max-w-4xl">
            <img id="1" src={images.pot}  className="absolute z-10 " style={{ transform: " translateX(1%)" }} onClick={() => openModal()}/>
        </div>
        <div>
          <span className="test text-white H6">
            หลังจากที่ได้รู้เกี่ยวกับ upcycling กันไปแล้ว
            <br />
            มาดูกันดีกว่าว่าถ้าคุณอยากจะสร้างผลงาน upcylcing สักหนึ่งชิ้น
            <br />
            การ upcycling แบบไหนที่เหมาะกับสไตล์ของคุณ
          </span>

        </div>
        {Modal ? (
          <div
            id="modal"
            className="fixed z-50 w-full p-4 bg-white top-2/4 rounded-3xl left-2/4 "
            style={{
              background: "#4D8684",
              transform: "translate(-50%, -50%)",
              maxWidth: "490px",
            }}
          >
            <div className="flex flex-col B2 text-blue-7">
                    <ReactCompareImage
                      leftImage={images.upbag}
                      rightImage={images.upcan}
                      sliderLineColor="#FC3F4D"
                    />
            </div>
            <div className="flex justify-start mt-1 space-x-3">
              <img
                src={close_modal}
                onClick={() => closeModal()}
                className="cursor-pointer"
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SectionMaterial;
