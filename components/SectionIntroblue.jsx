import star from "../assets/images/star1.svg"
const SectionIntroblue = () => {
  return (
    <div className="relative" id="wrapper">
      <div className="relative min-h-screen" style={{ background: "#1331E6" }}>
        <div
          className="absolute flex flex-col items-center w-11/12 mx-auto text-center md:w-full hero"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <p className="flex flex-col font-medium md:space-x-6 H6 text-white lg:H1 lg:flex-row">
            <span className="w-11/12 object-cover z-30">
              <img src={star} />
              วันนี้เราจะพาคุณมาเปิดโลกของการ Upcycling ให้มากขึ้น<br/> แต่ก่อนอื่น
              มาทำความเข้าใจก่อนว่ามันคืออะไร ?
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionIntroblue;
