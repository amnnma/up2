import { useState, useEffect } from "react";
import { QAData } from './types'
import Button from './Button';
import axios from 'axios'


const SectionQuiz = () => {
  const [questions, setQuestions] = useState<QAData[]>([]);
  const [number, setNumber] = useState(0)

	useEffect(() => {
		axios
			.get('Data/QuizData.json')
			.then((res) => {
				setQuestions(res.data.questions);
			})
			.catch((error) => console.error(error));
	}, []);
  return (
		<div>
			{questions[number] && (
				<Button
					lastQId={questions.length}
					number={number}
					setNumber={setNumber}
					id={questions[number].id}
					question={questions[number].question}
					symbol={questions[number].symbol}
					selections={questions[number].selections}
				/>
			)}
		</div>
	);
};
export default SectionQuiz;
