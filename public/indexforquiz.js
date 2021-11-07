const buttons = document.querySelectorAll("button");
const firstQ = document.querySelector("#q--first");
const secondQ = document.querySelector("#q--second");
const finalQ = document.querySelector("#q--final");
const upcycleTitle = document.querySelector("#up__title");
const upcycleImg = document.querySelector("#up__img");
const description = document.querySelector("#description");
const details = document.querySelector("#details");
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
        location.replace("https://upcycling-quiz.netlify.app/result.html");
    }
};

const showResult = (num) => {
    upcycleImg.innerHTML = `<img src="imgs/${num}.png" id="result__image" >`;
    upcycleTitle.innerText = quizup[num].title;
    description.innerText = quizup[num].description;
    details.innerText = quizup[num].details;
};

const goToWatch = (num) => {
    goToWatchBtn.addEventListener("click", () => {
        location.replace(quizup[num].link);
    });
};

if(location.href === "https://upcycling-quiz.netlify.app/result.html"){
    let resultNum = localStorage.getItem("key").split(",");
    resultNum = resultNum.reduce((pre,cur)=>pre+cur);
    showResult(resultNum);
    goToWatch(resultNum);
}

buttons.forEach((btn)=>btn.addEventListener("click", onClick));