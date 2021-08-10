import { useState } from "react";
import ReactCompareImage from "react-compare-image";
import star1 from "../assets/images/star1.svg";
import pot from "../assets/images/pot.png";
import kidney from "../assets/images/kidney.png";
import glassbottle from "../assets/images/glassbottle.png";
import bike from "../assets/images/bike.png";
import mat_can from "../assets/images/mat_can.png";
import metalscrap from "../assets/images/metalscrap.png";
import oldwood from "../assets/images/oldwood.png";
import sailcloth from "../assets/images/sailcloth.png";
import sliper from "../assets/images/sliper.png";
import upbag from "../assets/images/upcy_bag.png";
import close_modal from "../assets/images/close_modal.svg";
import start_quiz from "../assets/images/start_quiz.svg";

const select_image2 = [
  {
    id: 1,
    imgA: kidney,
    imgB: upbag,
  }
]
const select_image = [
  {
    id: 1,
    imgA: kidney,
    imgB: upbag,
    nameA: "ถุงน้ำยาล้างไต",
    priceA: -5,
    nameB: "KIDDEE Project No.1",
    typeB: "กระเป๋า",
    brandB: "คิดดีโปรเจ็ค",
    priceB: 1650,
  },
  {
    id: 2,
    imgA: kidney,
    imgB: upbag,
    nameA: "ถุงน้ำยาล้างไต",
    priceA: -5,
    nameB: "KIDDEE Project No.1",
    typeB: "กระเป๋า",
    brandB: "คิดดีโปรเจ็ค",
    priceB: 1650,
  },
  {
    id: 3,
    imgA: kidney,
    imgB: upbag,
    nameA: "ถุงน้ำยาล้างไต",
    priceA: -5,
    nameB: "KIDDEE Project No.1",
    typeB: "กระเป๋า",
    brandB: "คิดดีโปรเจ็ค",
    priceB: 1650,
  },
  {
    id: 4,
    imgA: kidney,
    imgB: upbag,
    nameA: "ถุงน้ำยาล้างไต",
    priceA: -5,
    nameB: "KIDDEE Project No.1",
    typeB: "กระเป๋า",
    brandB: "คิดดีโปรเจ็ค",
    priceB: 1650,
  },
  {
    id: 5,
    imgA: kidney,
    imgB: upbag,
    nameA: "ถุงน้ำยาล้างไต",
    priceA: -5,
    nameB: "KIDDEE Project No.1",
    typeB: "กระเป๋า",
    brandB: "คิดดีโปรเจ็ค",
    priceB: 1650,
  },
  {
    id: 6,
    imgA: kidney,
    imgB: upbag,
    nameA: "ถุงน้ำยาล้างไต",
    priceA: -5,
    nameB: "KIDDEE Project No.1",
    typeB: "กระเป๋า",
    brandB: "คิดดีโปรเจ็ค",
    priceB: 1650,
  },
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
    <div style={{ background: "#000000" }}>
      <div className="container flex flex-col justify-around min-h-screen mx-auto text-center">
        <span className="text-4xl text-white">
          หลังจากที่เข้าใจ concept ของการ upcycling มากขึ้นแล้ว
          <br /> ลองมาดูกันดีกว่า ว่าเศษวัสดุเหลือใช้ที่เราเห็นตามที่ต่าง ๆ
          สามารถนำมา
          <br /> upcycling และเพิ่มมูลค่าได้มากมายทีเดียว
        </span>
      </div>
      <div className="container flex flex-col justify-around min-h-screen mx-auto text-center">
        <span className="text-6xl text-white">
          เศษวัสดุเหล่านี้
          <br />
          เอาไปทำไปทำเป็นอะไรได้บ้างนะ ?
        </span>
        <p className="mt-3 text-center text-white B3 opacity-30">
          (กดคลิกวัสดุเพื่อดูรายละเอียด)
        </p>
        <div className="grid grid-cols-3">
          {select_image.map((d) => (
            <div>
              <img src={d.imgA} onClick={() => openModal()} />
            </div>
          ))}
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
              {select_image2.map((d) => {
                return (
                  <div>
                    <ReactCompareImage
                      key={d.id}
                      leftImage={d.imgA}
                      rightImage={d.imgB}
                      sliderLineColor="#FC3F4D"
                    />
                  </div>
                );
              })}
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
