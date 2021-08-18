import { useState } from "react";
import Link from 'next/link'
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
    nameA: "หม้อหุงข้าว",
    priceA: 30,
    nameB: "Rice bell",
    typeB: "กระดิ่งรถจักรยาน",
    brandB: "Kevin Cheung",
    priceB: 780,
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
    priceB: 1650,
  },
  {
    id: 3,
    imgA: images.mat_can,
    imgB: images.upcan,
    nameA: "กระป๋องสังกะสี",
    priceA: 3.1,
    nameB: "CLOCK NO.7 – BLACK AND WALNUT",
    typeB: "นาฬิกาตั้งโต๊ะ",
    brandB: "UPCYCLED THAT",
    priceB: 1568,
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
    priceA: 0.3,
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
    priceA: 5.5,
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
  },
];
const SectionMaterial = (goToNext) => {
  const [Modal, setModal] = useState(false);
  const [select_data, setData] = useState(0);
  const openModal = (id) => {
    setData(id);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div
      className="relative z-50 min-h-screen"
      style={{ background: "#000000" }}
    >
      <br />
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
          {select_image.map((id) => {
            return (
              <img src={id.imgA} alt="pot" onClick={() => openModal()} />
            )
          })}
        </div>
        <div>
            <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 H4 text-white">
              <div className="H5 font-normal ">
                <p className="text-white">
                  หลังจากที่ได้รู้เกี่ยวกับ upcycling กันไปแล้ว<br />
                  มาดูกันดีกว่าว่าถ้าคุณอยากจะสร้างผลงาน upcylcing สักหนึ่งชิ้น<br />
                  การ upcycling แบบไหนที่เหมาะกับสไตล์ของคุณ
                </p>
                <button><Link href="/questions">
                <a>START</a>
              </Link></button>
              </div>
            </div>
          </div>
        {Modal ? (
          <div
            id="modal"
            className="fixed z-50 w-full p-4 top-2/4 rounded-3xl left-2/4 "
            style={{
              background: "#4D8684",
              transform: "translate(-50%, -50%)",
              maxWidth: "1600px",
            }}
          >
            <div className="flex justify-start mt-1 space-x-3">
              <img
                src={close_modal}
                onClick={() => closeModal()}
                className="cursor-pointer"
              />
            </div>
            <div className="mt-8 grid sm:grid-cols-3 sm:gap-6 md:gap-10 xl:w-9/12 xl:mx-auto">
                {select_image2.map((id) => {
                  return (
                    <div className="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                      <b>
                        วัสดุ : {id.nameA}
                        <br />
                        มูลค่า : {id.priceA}
                      </b>
                      <p>
                        ถุงน้ำยาล้างไตเป็นอุปกรณ์ที่มีความจำเป็น
                        สำหรับคนที่มีอาการโรคไตเรื้อรัง โดยเฉลี่ยแล้ว คนไข้โรคไต
                        1 คนต้องใช้ถุงน้ำยาล้างไตทั้งหมด 8
                        ถุงต่อวันจึงทำให้ในแต่ละวัน
                        มีถุงน้ำยาล้างไตที่ใช้แล้วเป็นจำนวนมาก{" "}
                      </p>
                      <div id="services" className="H6">
                        <ReactCompareImage
                          leftImage={id.imgA}
                          rightImage={id.imgB}
                          sliderLineWidth={6}
                          sliderLineColor="red"
                        />
                      </div>
                        <div class="mx-auto sm:ml-auto mb-7 sm:mb-0" id="image">
                          <b>
                            ชื่อสินค้า : {id.nameB} <br/>
                            ชนิดสินค้า : {id.typeB}<br/> 
                            แบรนด์ : {id.brandB}<br/> 
                            ราคา : {id.priceB}
                          </b>
                          <p>
                            คิดดี โปรเจค (Kiddee project)
                            เป็นแบรนด์ธุรกิจเพื่อสังคมที่นำถุงน้ำยาล้างไต
                            กลับมาเพิ่มมูลค่า ด้วยการฆ่าเชื้อทำความสะอาด
                            และนำมาผลิตเป็นกระเป๋าที่มีดีไซน์สวยงาม
                            โดยรายได้จากการขายผลิตภัณฑ์ทั้งหมด
                            จะถูกนำมาสมทบทุนเพื่อรักษาผู้ป่วยโรคไตอีกด้วย{" "}
                          </p>
                        </div>
                    </div>
                  );
})}
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
