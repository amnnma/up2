import redborder from "../assets/images/redborder.svg";
import star from "../assets/images/star1_1.svg";
import star2 from "../assets/images/star1_2.svg";
import image from "../assets/images/index";
import { useState, useEffect } from "react";
import Router from 'next/router'

const SectionQuiz = () => {

  var [choices, setChoices] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [question,setQuestion]=useState([]);
  const getQuestion=()=>{
    fetch('/upcycling/questions.json')
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setQuestion(myJson)
      });
  }

  useEffect(()=>{
    getQuestion()
  },[])

  const prevQuestion = () =>{
  
    if(currentQuestion != 0){
      const tirarUltimaEscolha = choices.filter(ultimaEscolha)
      setChoices((arr) => [...tirarUltimaEscolha])
      const previousQuestion = currentQuestion - 1;
      setCurrentQuestion(previousQuestion)
    }
  }
  
  function ultimaEscolha(value) {
    return value != choices[choices.length - 1];
  }
  
  const handleAnswerButtonClick = (e, value) => {
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < question.length){
      setCurrentQuestion(nextQuestion);

      setChoices( (arr) => [...arr, value])
      
    } else {
      Router.push('/result')
    }

    
  }
  return (
    <div style={{ background: "#FFFAEA" }}>
      <div className="container flex flex-col justify-around min-h-screen py-10 mx-auto text-center md:py-16 H4 text-white">
        <div className="H4 font-normal text-black ">
          <p>
            ให้คุณเลือกตอบคำถามจากตัวเลือกเหล่านี้
            ระบบจะทำการประมวลผลออกมาให้ว่าคุณสามารถทำ upcycling แบบไหนได้บ้าง
          </p>
        </div>
        <div className="grid md:grid-flow-col max-w-4xl w-11/12 py-16 mx-auto text-black ">     
        <div>
          {
            question && question.length>0 && question[currentQuestion]!=null 
            ? <p key={question[currentQuestion].id}>
                {question[currentQuestion].questionText}
              </p>
            : <p>End</p> 
          } 

          <div >
            {question[currentQuestion]!=null ? question[currentQuestion].answers.map((itemAtual) => {
                return (
                  <button key={itemAtual.id} onClick={(e)=> handleAnswerButtonClick(e, itemAtual.answer)}>
                    <img src={itemAtual.picture}
                    alt="icon"
                    width={500}
                    height={200}
                    />
                    <p key={itemAtual.id} ></p>
                  </button>
                )
              }) : 
                null
              }
          </div>
          <div>
              <button  onClick={() => prevQuestion()}>
                ย้อนกลับ
              </button>
            </div>
        </div>
       </div>
       </div>
    </div>
  );
};
export default SectionQuiz;
