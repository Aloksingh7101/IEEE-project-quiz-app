const quizData = [
    {
     question:"Who scored the first century in the history of the Cricket World Cup?",
a: "Vivian Richards", 

b: "Clive Lloyd" ,

c: "Sunil Gavaskar", 

d: "Dennis Amiss",

correct: "d",
    },
    {
        question:"Who holds the record for the highest individual score in a single World Cup innings?",

        a: "Sachin Tendulkar",
        
        b: "Ricky Ponting", 
        
        c: "Martin Guptill", 
        
        d: "Chris Gayle",
        
        correct: "a",
    },
    {
        question: "Which player has the most centuries in Cricket World Cup history?",

a: "Ricky Ponting", 

b: "Sachin Tendulkar", 

c: "Rohit Sharma",

d: "Virat Kohli",

correct: "c",
    },
    {
        question: "Which player has taken the most wickets in Cricket World Cup history?",

a: "Wasim Akram",

b: "Glenn McGrath", 

c: "Muttiah Muralitharan", 

d: "Brett Lee",

correct: "b"


    }
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerElements.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerElements.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitButton.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
