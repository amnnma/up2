import { Flourish } from "../components/util/Flourish";
const SectionFlourish = () => {
  return (
    <div>
      <div
        id="title flourish"
        className="py-10 text-center"
        style={{ background: "#1331E6" }}
      >
        <span className="w-10/12 mx-auto font-normal text-xl  H6 md:w-full text-white">
          จากการสำรวจแบรนด์ upcycling จากทั่วโลกพบว่า แบรนด์เหล่านี้มาจากทวีป
        </span>
      </div>
      <Flourish />
    </div>
  );
};
export default SectionFlourish;
