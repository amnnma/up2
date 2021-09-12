import { ResultData, useResultContext } from "../components/util/ResultContext";
import Router from "next/router";
import Card from './card';
function Result() {
  const { result }: any = useResultContext();

  const restart = () => {
    Router.push("/");
  };

  return (
    <div className="flex flex-col" style={{ background: "#000000" }}>
			<strong className="m-2 text-2xl text-white">ผลที่ได้ … เราแนะนำให้คุณลองทำ</strong>
			<Card
				key="4"
				id={+1}
				img="/Images/01.png"
				name="เสื่อจากหลอดพลาสติก"
				time="1 ชั่วโมง"
				play="TEST"
				description="
						1. โมบายดอกไม้ เกิดจากการที่นำดอกไม้พลาสติกมาร้อยต่อกันทีละดอก โดยผู้ทำสามารถกำหนดตำแหน่งของดอกไม้ และขนาดของโมบายได้ตามใจชอบ
						2. นำเชือกที่มีมาผูกให้เป็นปม ก่อนจะร้อยเชือกผ่านฝาขวดที่หุ้มด้วยกระดาษฟอยล์หรือเทป ปมที่เชือกจะเป็นตัวยึดตำแหน่งของดอกไม้ ไม่ให้ขยับขึ้นลง
						3. หลังจากได้ตำแหน่งของดอกไม้ดอกแรกแล้ว ใช้วิธีเดิมในการร้อยดอกไม้พลาสติกดอกต่อไป จนได้ความยาวที่พอใจ
						4. เมื่อได้โมบายดอกไม้แล้ว นำไปติดกับกิ่งไม้ หรือแขวนกับเดือยยึดติดผนังเพื่อความสวยงาม"
			/>
      <button className="mb-2 tracking-tighter text-2xl cursor-pointer text-white" style={{width: "250px",height: "50px"}} onClick={restart}>ย้อน</button>
    </div>
  );
}

export default Result;
