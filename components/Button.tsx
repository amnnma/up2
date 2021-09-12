import { useState } from "react";
import Router from "next/router";
import { QAData, UserAnswerData} from "./types";
import { useResultContext } from "../components/util/ResultContext";
import axios from "axios";
import images from "assets/images/index"
function Button({
  id,
  lastQId,
  question,
  symbol,
  selections,
  number,
  setNumber,
}: QAData) {
  const [userAnswers, setUserAnswers] = useState<UserAnswerData>({});
  const [left, setLeft] = useState(-100);
  const { setResult }: any = useResultContext();
  const [loading, setLoading] = useState(false);

  const checkAnswer = (QId: number, AId: number) => {
    const key = QId;
    const obj = { [`${key}`]: AId };
    setUserAnswers({ ...userAnswers, ...obj });
    if (QId === lastQId) {
      setLoading(true);
      axios
        .post("Data/ResultData.json", userAnswers)
        .then((res) => {
          setLoading(false);
          setResult(res.data);
          Router.push("/result");
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          Router.push("/result");
        });
    }
    if (QId !== lastQId) {
      nextQuestion();
    }
  };

  const previousQuestion = () => {
    setNumber(number - 1);
    setLeft(left - 21.5);
  };

  const nextQuestion = () => {
    setNumber(number + 1);
    setLeft(left + 21.5);
  };

  return (
    <div className="flex flex-col items-center" style={{ background: "#FFFAEA" }} >
      {loading && (
        <div className="loadingSpinner">
          <img src="/Images/spinningDog.gif" alt="spinningDog" />
          <p>กำลังประมวลผล</p>
        </div>
      )}
      {!loading && (
        <main className="flex flex-col items-center mt-0.5 pb-10">
		 <p className="text-center">ให้คุณเลือกตอบคำถามจากตัวเลือกเหล่านี้<br/> ระบบจะทำการประมวลผลออกมาให้ว่าคุณสามารถทำ upcycling แบบไหนได้บ้าง</p>
          <h2>
			ประสบการณ์ Upcycling
			{question?.split('<br>').map((line, idx) => {
							return (
								<div key={idx}>
									{line}
									<br />
								</div>
							);
						})}
          </h2>
          <div>
            {number !== 0 && (
              <img
                onClick={previousQuestion}
                className="left chevrons"
                src={images.back}
                alt="leftChevron"
              />
            )}
          </div>
          {selections.map((answer, idx) => (
            <button
			  className="mb-2 border-2 font-semibold text-2xl cursor-pointer"
              style={{
				width: "300px",
				height: "80px",
                backgroundColor:
                  userAnswers[`${number + 1}`] &&
                  userAnswers[`${number + 1}`] == answer.id
                    ? "white"
                    : "",
                color:
                  userAnswers[`${number + 1}`] &&
                  userAnswers[`${number + 1}`] == answer.id
                    ? "#FFC6C9"
                    : "",
              }}
              onClick={() => checkAnswer(id, answer.id)}
              key={idx}
            >
              {answer.option}
            </button>
          ))}
        </main>
      )}
    </div>
  );
}

export default Button;
