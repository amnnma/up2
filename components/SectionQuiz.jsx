import Router from "next/router";
import Result from "../pages/Result";

class Webtoon {
  constructor(title, description, synopsis, link) {
    this.title = title;
    this.description = description;
    this.synopsis = synopsis;
    this.link = link;
  }
}

const cartoons = {
  131: new Webtoon(
    "โมบายดอกไม้จากขวดพลาสติก",
    "1 ชั่วโมง",
    "ขวดพลาสติกใช้แล้ว (ล้างทำความสะอาดให้เรียบร้อย) กาว กระดาษทิชชู่ ฟอยล์อลูมิเนียม เชือก 1. ล้างขวดเครื่องดื่มและถอดฝาออก 2.ตัดบริเวณส่วนบนของขวาดพลาสติกให้เป็นรูปทรงดอกไม้ หรือรูปทรงต่าง ๆ 1. ทำการตกแต่งดอกไม้ด้วยการทาสี ทิ้งให้แห้ง สำหรับนำไปประกอบเป็นโมบาย 2. หุ้มบริเวณคอขวดพลาสติกด้วยเทป หรือกระดาษฟอยล์อลูมิเนียมให้แน่น",
    "https://webtoon.kakao.com/content/%ED%80%B4%ED%80%B4%ED%95%9C-%EC%9D%BC%EA%B8%B0/1295"
  ),
  121: new Webtoon(
    "อิฐรักษ์โลก",
    "30 นาที",
    "ขยะพลาสติก ขวดพลาสติก กรรไกร ไม้ กาว 1. ล้างทำความสะอาดขวดพลาสติกและ เช็ดวัสดุพลาสติกทั้งหมดให้แห้ง เพื่อป้องกันเชื้อราภายในขวด 2. สำหรับถุงหรือขยะพลาสติก นำไปทำความสะอาดและตากให้แห้งเช่นกัน",
    "https://comic.naver.com/webtoon/list?titleId=702672"
  ),
  132: new Webtoon(
    "เสื่อจากหลอดพลาสติก",
    "1 ชั่วโมง",
    "กรรไกร หลอดพลาสติกใช้แล้ว สบู่ 1. ทำความสะอาดหลอดพลาสติกโดยการแช่ในน้ำสบู่ 2. ล้างและปล่อยให้หลอดพลาสติกแห้งอย่างน้อย 30 นาที",
    "https://comic.naver.com/webtoon/list?titleId=765470"
  ),
  311: new Webtoon(
    "ขวดสำหรับเพาะต้นกล้า ",
    "15 นาที",
    "ถ้วยโยเกิร์ต ถุงชาที่ใช้แล้ว เมล็ดพันธุ์พืช กระดาษทิชชู่ 1. ทำความสะอาดถ้วยโยเกิร์ตโดยล้างด้วยน้ำสบู่ 2. รอจนถ้วยโยเกิร์ตแห้งสนิท",
    "https://comic.naver.com/webtoon/list?titleId=740487"
  ),
  211: new Webtoon(
    "บัวรดน้ำ",
    "15 นาที",
    "ขวดพลาสติกมีฝาปิด ตะปู น้ำสบู่สำหรับทำความสะอาด  1. ทำความสะอาดขวดโดยล้างด้วยน้ำสบู่ 2.รอจนขวดแห้งสนิท",
    "https://webtoon.kakao.com/content/%EA%B2%BD%EC%9D%B4%EB%A1%9C%EC%9A%B4-%EC%86%8C%EB%AC%B8/1525"
  ),
  221: new Webtoon(
    "โคมไฟจากกล่องนม ",
    "30 นาที",
    "กรรไกรและกาว ดินสอ ปากกา หรือปากกามาร์คเกอร์ ไม้บรรทัด เชือกหรือเส้นด้าย ฟองน้ำ เข็มหรืออุปกรณ์สำหรับเจาะรูร้อยเชือก ดวงไฟ/หลอดไฟสำหรับประดับ ไม้ หรือราวแขวน สำหรับแขวนโมบาย 1. ล้างกล่องนมให้สะดวก และรอให้แห้ง 2. ทำการตัดบริเวณส่วนบนของกล่องนมออก 3. ใช้ดินสอและไม้บรรทัดตีกรอบ โดยวัดจากขอบของกล่องนมเข้ามาประมาณ 1 นิ้ว จากนั้นทำการตัดพื้นที่ตรงกลางออกเพื่อให้เป็นช่อง ทำซ้ำไปจนครบด้านข้างทั้ง 4 ด้าน 4. นำกระดาษไขมาตกแต่งด้วยลวดลายต่าง ๆ จากนั้นตัดออเป็นแผ่น ให้มีขนาดเท่ากับด้านของกล่องนม 5. นำกระดาษติดบนกล่องนมจากด้านใน ทำไปจนครบทุกด้านและรอให้กาวแห้ง 6. นำหลอดไฟสำหรับประดับใส่เข้าไปในโคมไฟ และจัดระเบียบสายให้เรียบร้อย 7. นำเชือกมาต่อที่ด้านบนของโคมไฟ เพื่อให้เป็นที่สำหรับห้อย",
    "https://webtoon.kakao.com/content/%EB%AF%B8%EC%99%84%EA%B2%B0/1882"
  ),
  341: new Webtoon(
    "กระเบื้องโมเสก จากวัสดุเหลือใช้",
    "1-1.5 ชั่วโมง",
    "นิตยสารเก่า แคตตาล็อก ปฏิทินหมดอายุ เศษกระดาษและกระดาษแข็ง เศษผ้า ฟอยล์ กระดาษห่ออมยิ้ม ฯลฯ กระดาษแข็งที่สามารถตัดวงกลม (เส้นผ่านศูนย์กลางประมาณ 20-30 ซ.ม.) กาว Eกรรไกร",
    "https://comic.naver.com/webtoon/list?titleId=724815"
  ),
  111: new Webtoon(
    "ที่คั่นหนังสือ",
    "15 นาที",
    "กระดาษแข็ง นิตยสารที่ไม่ใช้แล้ว กรรไกร กาว",
    "https://comic.naver.com/webtoon/list?titleId=703852"
  ),
  151: new Webtoon(
    "나윤희 작가의 < 고래별 >",
    "작품 속 인물들로 다시 표현되는 아픈 역사가, 우리 삶이 얼마나 고귀한지 일깨워줄 거예요. 아름다운 작화를 보다 보면, 드라마나 영화를 보고 있는 것 같은 착각을 하게 될지도 몰라요.",
    "1926년 일제 식민 지배 하의 조선. 17세 소녀 수아는 군산 일대 친일파 대지주의 집에서 몸종으로 일하고 있다. 어느 날 수아는 부상을 입은 채 해변가에 쓰러져 있는 독립운동가 의현을 발견하고, 그를 보호하게 되는데…",
    "https://comic.naver.com/webtoon/list?titleId=729767"
  ),
  152: new Webtoon(
    "이은재 작가의 < 셧업앤댄스 >",
    "개성 있는 캐릭터들이지만, 미운 인물이 하나도 없다는 점이 이 작품의 특징이에요. 특유의 사실적인 그림체 속 숨겨진 사랑스러움을 발견할 수 있을 거예요.",
    "아이돌 연습생 5년. 오디션 프로그램 탈락. 학교로 돌아왔다. 에어로빅부??? 제발 날 내버려 둬! 난 이제 조용히 살고 싶다고!",
    "https://comic.naver.com/webtoon/list?titleId=737032"
  ),
  211: new Webtoon(
    "정영롱 작가의 < 남남 >",
    "재미, 감동, 씁쓸한 공감까지 여기 다 있어요. 솔직한 캐릭터, 거침없는 대사의 매력에 푹 빠질 거예요.",
    `“어느 날 엄마가 애인이라고 데려온 아저씨가 사실은 얼굴도 몰랐던 나의 친부였다면…?” 엄마와 단둘이 살아가는 28살의 진희. 남자친구와 결혼 이야기가 오가던 중 부모 험담에 화가 치밀어 자리를 박차고 집에 돌아가기로 한다. 그러나 집에 와서 마주한 건 성인 채널을 틀어놓고 정신없이 자위를 하고 있는 자신의 엄마였는데…! 엄마의 자위 장면 목격을 시작으로 진희를 둘러싼 주변 인물들이 저마다의 삶을 유쾌하게 풀어간다. 일상 속에서 벌어지는 드라마틱한 사건들과 그 사건들을 대수롭지 않게 넘겨버리는 무심한 여성 캐릭터들이 매력적인 이야기.`,
    "https://webtoon.kakao.com/content/%EB%82%A8%EB%82%A8/1762"
  ),
  212: new Webtoon(
    "박지독 작가의 < 닭강정 >",
    "스토리를 중요시하는 당신! 닭강정 하나에서 시작된 개그 미스터리가 당신을 기다려요. 알 수 없는 전개, 끊을 수 없는 마약 같은 이야기 속에 푹 빠질 거예요.",
    "좌충우돌 코믹 병맛 닭강정 스릴러! 의문의 기계로 인해 사람이 닭강정으로 변했다. 알 수 없는 단서들과 연루된 사람들의 사망, 실종까지. 엄청난 비밀이 숨겨져있음이 드러나는데…",
    "https://comic.naver.com/webtoon/list?titleId=734008"
  ),
  221: new Webtoon(
    "시니/광운 작가의 < 1초 >",
    "공감을 좋아하는 당신! 몰입을 부르는 연출과 공감을 일으키는 스토리에 빠져 보세요. 어쩌면 당연시했던 것들을 돌아보며 감사하게 될지도 몰라요.",
    "구조율 100%의 전설적인 소방관. 그의 특별한 능력은 긴장하는 순간, 미래가 보인다는 것! 촌각을 다투는 진짜 소방관들의 이야기.",
    "https://comic.naver.com/webtoon/list?titleId=725586"
  ),
  222: new Webtoon(
    "조석 작가의 < 문유 >",
    "스페이스물을 좋아하시나요? 어떤 상황이든 개그로 풀어나가는 재치가 돋보이는 작품을 만나보세요.",
    "지구가 멸망했다. 나는 혼자 달에 있다. <마음의 소리> 조석 작가의 우주를 넘나드는 판타지 시크 개그!!",
    "https://comic.naver.com/webtoon/list?titleId=679544"
  ),
  231: new Webtoon(
    "매미/희세 작가의 < 위대한 방옥숙 >",
    "공감을 좋아하는 당신! 특유의 현실 비판적 시각이 돋보이는 <위대한 방옥숙>을 추천해요. 탄탄한 구성과 입체적인 캐릭터에 나도 모르게 몰입하게 될 거예요.",
    `한강 조망권을 지키려다 한강에 시체를 유기한 여자들의 이야기. “내 집값은 내가 지킨다!”`,
    "https://comic.naver.com/webtoon/list?titleId=727838"
  ),
  232: new Webtoon(
    "송가/은소 작가의 < 체크 포인트 >",
    "특별한 캐릭터를 좋아하는 당신! 시간을 되돌릴 수 있는 초능력자의 이야기로 당신을 초대해요. 이해하면 할수록 다음 화가 궁금해지는 스토리에 빠져보세요.",
    "내 인생에 세이브 포인트가 있다면? 하루에도 수십 번씩 시간을 되돌리는 남자.",
    "https://comic.naver.com/webtoon/list?titleId=677452"
  ),
  241: new Webtoon(
    "오묘 작가의 < 각자의 디데이 >",
    "공감을 좋아하는 당신! 때론 어른보다 성숙한 아이들의 모습에 위로받게 될지도 몰라요. 작가님 특유의 따뜻한 표현에 빠져보세요.",
    "헤어졌지만 헤어지지 않은 사이. 솔직하지 못한 우리들 어떻게 될까요?",
    "https://comic.naver.com/webtoon/list?titleId=749055"
  ),
  242: new Webtoon(
    "유월 작가의 < 동트는 로맨스 >",
    "개성 있는 캐릭터를 선호하는 당신! 개성 뚜렷한 캐릭터들이 돋보이는 <동트는 로맨스>를 추천해요. 유쾌한 로맨스를 좋아하신다면 재밌게 보실 수 있을 거예요.",
    "필름이 끊긴 사이, 짝사랑 후배와 무슨 일이…?! 어리둥절해도 어쨌든 해는 뜬다. 귀염뽀짝 청춘로맨스.",
    "https://comic.naver.com/webtoon/list?titleId=746285"
  ),
  251: new Webtoon(
    "이선 작가의 < 개를 낳았다 >",
    "유기견에 대한 무거운 주제를 다루기도 하지만, 특유의 유머로 소리 내어 웃게 될지도 몰라요.",
    "사랑스러운 너와의 첫 만남부터 이별까지. 서툰 주인과 강아지 명동이가 함께 성장해나가는 이야기.",
    "https://comic.naver.com/webtoon/list?titleId=712362"
  ),
  252: new Webtoon(
    "이연 작가의 < 화장 지워주는 남자 >",
    "제목만 보고 외모지상주의에 대한 내용 아니야?라고 생각했다면, 생각이 달라질 거예요. 내가 몰랐던 나의 편견을 깨줄 수 있는 작품이 될 거예요.",
    "밋밋한 얼굴의 대학생이 천재 메이크업 아티스트의 뮤즈?!",
    "https://comic.naver.com/webtoon/list?titleId=710754"
  ),
};
const SectionQuiz = () => {
  const buttons = document.querySelectorAll("button");
  const firstQ = document.querySelector("#q--first");
  const secondQ = document.querySelector("#q--second");
  const finalQ = document.querySelector("#q--final");
  const cartoonTitle = document.querySelector("#cartoon__title");
  const cartoonImg = document.querySelector("#cartoon__img");
  const description = document.querySelector("#description");
  const synopsis = document.querySelector("#synopsis");
  const goToWatchBtn = document.querySelector("#button--watch");
  let result = [];

  const onClick = (e) => {
    if (e.target.dataset.num) {
      result.push(e.target.dataset.num);
      localStorage.setItem("key", result);
    }

    if (result.length == 1) {
      firstQ.style.display = "none";
      secondQ.style.display = "flex";
    } else if (result.length == 2) {
      firstQ.style.display = "none";
      secondQ.style.display = "none";
      finalQ.style.display = "flex";
    } else if (result.length == 3) {
      location.replace("https://webtoon-type-test.netlify.app/result.html");
    }
  };

  const showResult = (num) => {
    cartoonImg.innerHTML = `<img src="imgs/${num}.png" id="result__image">`;
    cartoonTitle.innerText = cartoons[num].title;
    description.innerText = cartoons[num].description;
    synopsis.innerText = cartoons[num].synopsis;
  };

  const goToWatchWebtoon = (num) => {
    goToWatchBtn.addEventListener("click", () => {
      location.replace(cartoons[num].link);
    });
  };

  if (location.href === "https://webtoon-type-test.netlify.app/result.html") {
    let resultNum = localStorage.getItem("key").split(",");
    resultNum = resultNum.reduce((pre, cur) => pre + cur);
    showResult(resultNum);
    goToWatchWebtoon(resultNum);
  }

  buttons.forEach((btn) => btn.addEventListener("click", onClick));
  return (
    <div>
      <div id="q--first">
        <header className="q__header">
          <h2>Q1. 웹툰을 고를 때 중요하게 생각하는 것이 무엇인가요?</h2>
        </header>
        <main className="q__main">
          <button className="button" data-num={1}>
            <h3 data-num={1}>그림체</h3>
            <p data-num={1}>그림체가 예쁘면 기분이 좋거든요~</p>
          </button>
          <button className="button" data-num={2}>
            <h3 data-num={2}>스토리</h3>
            <p data-num={2}>뭐니 뭐니 해도 빠져드는 이야기가 최고!</p>
          </button>
        </main>
      </div>
      <div id="q--second">
        <header className="q__header">
          <h2>Q2. 어떤 장르를 선호하나요?</h2>
        </header>
        <main className="q__main">
          <button className="button" data-num={1}>
            <h3 data-num={1}>일상/개그</h3>
            <p data-num={1}>맘 편하게 보는 게 좋아요~</p>
          </button>
          <button className="button" data-num={2}>
            <h3 data-num={2}>판타지</h3>
            <p data-num={2}>제3의 세계 늘 새로워 짜릿해</p>
          </button>
          <button className="button" data-num={3}>
            <h3 data-num={3}>스릴러/액션/미스터리</h3>
            <p data-num={3}>두근두근 긴장감에 설레요!</p>
          </button>
          <button className="button" data-num={4}>
            <h3 data-num={4}>로맨스</h3>
            <p data-num={4}>가장 중요한 것은 사랑이어라</p>
          </button>
          <button className="button" data-num={5}>
            <h3 data-num={5}>드라마</h3>
            <p data-num={5}>점점 더 궁금해지는 스토리가 좋아요!</p>
          </button>
        </main>
      </div>
      <div id="q--final">
        <header className="q__header">
          <h2>Q3. 어떤 캐릭터를 선호하나요?</h2>
        </header>
        <main className="q__main">
          <button className="button" data-num={1}>
            <h3 data-num={1}>공감</h3>
            <p data-num={1}>
              쉽게 공감할 수 있는 캐릭터. 친근한 캐릭터에 정이 가요~
            </p>
          </button>
          <button className="button" data-num={2}>
            <h3 data-num={2}>개성</h3>
            <p data-num={2}>특이하거나 특별한 캐릭터가 좋아요!</p>
          </button>
        </main>
      </div>
    </div>
  );
};
export default SectionQuiz;
