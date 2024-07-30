const questions = [{
    question: "Where is the Colosseum?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Rome"
},
{
    question: "Which country is in Europa?",
    options: ["Florida", "Peru", "Bosnia and Herzegowina", "India"],
    answer: "Bosnia and Herzegowina"
},
{
    question: "What is the Capital of Macedonia?",
    options: ["Skopje", "Sarajevo", "Zagreb"],
    answer: "Skopje"
},
{
    question: "On which continents is Istanbul located?",
    options: ["Europa and Asia", "Asia and Africa", "South and North America"],
    answer: "Europa and Asia"
},
{
    question: "Which  river flows through Egypt?",
    options: ["Amazon", "Nile", "Una"],
    answer: "Nile"
},
{
    question: "Which country belong to the Scandinavian countries?",
    options: ["England", "Sweden", "Montenegro", "Germany", "Poland"],
    answer: "Sweden"
},
{
    question: "Where is Disneyland in Europa?",
    options: ["Munich", "Paris", "Vienna"],
    answer: "Paris"
},
{
    question: "How many continents are there in the World?",
    options: ["5", "7", "6"],
    answer: "7"
},
{
    question: "What is the smallest country in the World?",
    options: ["Monaco", "Vatican City", "Nauru"],
    answer: "Vatican City"
},
{
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Antartica", "Gobi"],
    answer: "Antartica"
},
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0; 

const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");
const scoreDisplay = document.getElementById("score");
const finalScoreDisplay = document.getElementById("final-score");

function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("question-screen").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    answerOptions.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        answerOptions.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    

function updateScore() {}
function endQuiz() {}

// Event listeners
document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("restart-button").addEventListener("click", () => {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    updateScore();