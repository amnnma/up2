import Router from "next/router";
import Result from "./result";

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
    "บัวรดน้ำ",
    "15 นาที",
    "신의 사원의 대도서관 관장인 쿠무치는 한 노예시장에서 율리라는 이름의 아이를 데려온다. 사원의 일꾼 대신 율리에게 맡겨진 임무는 이웃 나라로 함께 가서 사원의 지도자인 ‘하늘스승’의 후계자를 찾아오는 것이다. 쿠무치와 율리는 신의 사원을 나와 동쪽으로 떠나는 먼 길을 떠난다. 두 사람은 여행길에 여러 다양한 사람들을 만나고 여러 나라를 거쳐 여행한다. 그리고 그들은 드디어 찾고 있었던 ‘작은하늘스승’을 만나게 된다.",
    "https://comic.naver.com/webtoon/list?titleId=765470"
  ),
  311: new Webtoon(
    "반지 작가의 < 신비 >",
    "미지의 세계에 대한 상상을 해본 적이 있나요? 가람이와 신비의 특별한 이야기가 당신을 기다려요! 특유의 수려한 그림체가 작품을 감상하는 데 황홀함을 더할 거예요.",
    "긴 잠에서 깨어난 미지의 생명체 신비와 그녀를 사랑하게 된 가람의 사랑 이야기. ‘나의 뮤즈가 되어 줄래?’",
    "https://comic.naver.com/webtoon/list?titleId=740487"
  ),
  211: new Webtoon(
    "장이 작가의 < 경이로운 소문 >",
    "진짜 영웅들이 악을 물리치는 속 시원한 이야기가 여기 있어요! 판타지 드라마에 걸맞은 화려한 연출이 보는 재미를 더할 거예요.",
    "영원불멸의 삶을 위해 지구로 내려온 사후세계 악한 영혼들. 그들을 잡는 카운터들의 이야기.",
    "https://webtoon.kakao.com/content/%EA%B2%BD%EC%9D%B4%EB%A1%9C%EC%9A%B4-%EC%86%8C%EB%AC%B8/1525"
  ),
  341: new Webtoon(
    "네온비/안나래 작가의 < 미완결 >",
    "특별한 캐릭터를 좋아하는 당신! 개성 뚜렷한 인물들의 자극적인 스토리가 당신을 기다려요. 사실적인 그림체에 때론 섬뜩하기도 할 거예요.",
    `“오랜 팬으로 동경해온 천재 소설 작가님이 내 애인을 강렬히 원한다!” 에디터 <원유진>, 뮤지컬 배우 <은미결>, 소설가 <선은호>. 자신의 일과 예술을 사랑하는 세 사람은 각자 결핍된 부분이 있었다. 이들은 눈앞의 상대에게서 서로가 갖지 못한 부분을 찾아내고 욕망한다. 자신의 분야에서 인정받고 싶은 욕구, 그리고 동경하는 상대에 대한 성적 긴장감과 소유욕은 제각기 다른 형태로 꿈틀거리기 시작하는데…. 괴물이 될 것인가, 예술가가 될 것인가? 아니면 어떠한 마침표도 찍지 못할 것인가? 세 사람의 관계와 커리어가 치밀하게 얽히며 터져 나오는 예술적 광기와 서스펜스!`,
    "https://webtoon.kakao.com/content/%EB%AF%B8%EC%99%84%EA%B2%B0/1882"
  ),
  111: new Webtoon(
    "수박양 작가의 < 아홉수 우리들 >",
    "공감을 좋아하는 당신! 짠하지만 사랑스러운 “우리”들이 당신을 기다려요. 캐릭터 별 이미지 컬러가 정해져 있는데(특별 편 회차 참고), 색감의 조화를 보는 재미도 있을 거예요.",
    "연애, 직장, 시험 어느 하나 뜻대로 되지 않는 29살 봉우리, 차우리, 김우리. 제대로 걸렸다! 아. 홉. 수! 우리들의 팩트 폭행 로맨틱 코미디!",
    "https://comic.naver.com/webtoon/list?titleId=724815"
  ),
  111: new Webtoon(
    "남수 작가의 < 바른 연애 길잡이 >",
    "예쁜 그림체를 좋아하는 당신! 달달한 그림체, 달달한 이야기 속으로 빠져보는 건 어때요? 파스텔 톤의 부드럽고 섬세한 작화가 로맨스를 더욱 빛나게 해줄 거예요.",
    "매일 다이어리에 세워 둔 계획을 지키며 바른 생활을 실천하는 정바름. 하지만 동아리 선배에게 느끼는 연애 감정만큼은 계획처럼 진행되지 않는데… 모두의 로망을 충족시켜 줄 설렘 달달 캠퍼스 로맨스!",
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
    if (result.length === 1) {
      firstQ.style.display = "none";
      secondQ.style.display = "flex";
    } else if (result.length === 2) {
      firstQ.style.display = "none";
      secondQ.style.display = "none";
      finalQ.style.display = "flex";
    } else if (result.length === 3) {
      location.replace("https://naughty-jones-e94841.netlify.app/result.html");
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

  if (
    location.href === "https://naughty-jones-e94841.netlify.app/result.html"
  ) {
    let resultNum = localStorage.getItem("key").split(",");
    resultNum = resultNum.reduce((pre, cur) => pre + cur);
    showResult(resultNum);
    goToWatchWebtoon(resultNum);
  }

  buttons.forEach((btn) => btn.addEventListener("click", onClick));
  return (
    <body>
      <div id="q--first">
        <header>
          <p className="text-center">
            ให้คุณเลือกตอบคำถามจากตัวเลือกเหล่านี้
            <br /> ระบบจะทำการประมวลผลออกมาให้ว่าคุณสามารถทำ upcycling
            แบบไหนได้บ้าง
          </p>
          <br />
          <span className="text-5xl text-center">ประสบการณ์ upcycling</span>
        </header>
        <main className="p-10">
          <button className="button" data-num="1">
            <h3 data-num="1">ไม่เคยทำมาก่อน</h3>
          </button>
          <button className="button" data-num="2">
            <h3 data-num="2">เคยทำงานประดิษฐ์มาบ้าง</h3>
          </button>
          <button className="button" data-num="3">
            <h3 data-num="3">ทำเป็นประจำอยู่แล้ว</h3>
          </button>
        </main>
      </div>
      <div id="q--second">
        <header>
          <p className="text-center">
            ให้คุณเลือกตอบคำถามจากตัวเลือกเหล่านี้
            <br /> ระบบจะทำการประมวลผลออกมาให้ว่าคุณสามารถทำ upcycling
            แบบไหนได้บ้าง
          </p>
          <br />
          <span className="text-5xl text-center">
            คุณมีเวลาในการทำเท่าไหร่ ?
          </span>
        </header>
        <main>
          <button className="button" data-num="1">
            <h3 data-num="1">15 นาที</h3>
          </button>
          <button className="button" data-num="2">
            <h3 data-num="2">30 นาที</h3>
          </button>
          <button className="button" data-num="3">
            <h3 data-num="3">1 ชั่วโมง</h3>
          </button>
          <button className="button" data-num="4">
            <h3 data-num="4">1.5 - 2 ชั่วโมง</h3>
          </button>
        </main>
      </div>
      <div id="q--final">
        <header>
          <p className="text-center">
            ให้คุณเลือกตอบคำถามจากตัวเลือกเหล่านี้
            <br /> ระบบจะทำการประมวลผลออกมาให้ว่าคุณสามารถทำ upcycling
            แบบไหนได้บ้าง
          </p>
          <br />
          <span className="text-5xl text-center">เลือกเศษวัสดุที่คุณมี </span>
        </header>
        <main>
          <button className="button" data-num="1">
            <h3 data-num="1">ขวดพลาสติก</h3>
          </button>
          <button className="button" data-num="2">
            <h3 data-num="2">หลอดพลาสติก</h3>
          </button>
        </main>
      </div>
    </body>
  );
};
export default SectionQuiz;
