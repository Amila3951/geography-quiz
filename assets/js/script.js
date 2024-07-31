// Array of questions, each with question text, answer options, and the correct answer
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

// Variables to track quiz progress
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// Get references to essential HTML elements for displaying quiz content
const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");
const scoreDisplay = document.getElementById("score");
const finalScoreDisplay = document.getElementById("final-score");

// Function to start the quiz by hiding the start screen and showing the first question
function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("question-screen").style.display = "block";
    showQuestion();
}

// Function to display the current question and its options
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    answerOptions.innerHTML = "";
    // Clear previous options
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        answerOptions.appendChild(button);
    });
}

// Function to check if the selected answer is correct or incorrect
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const answerButtons = answerOptions.querySelectorAll('button');

    answerButtons.forEach(button => {
        if (button.textContent === currentQuestion.answer) {
            button.classList.add('correct'); // Highlight correct answer
        } else if (button.textContent === selectedOption) { // When choosed answer is incorrect, it became red
            button.classList.add('incorrect');
        }
        button.disabled = true; // Disable all buttons after selection
    });

    if (selectedOption === currentQuestion.answer) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    updateScore();

    setTimeout(() => { // One second delay until next question
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

// Function to update the displayed score
function updateScore() {
    scoreDisplay.textContent = `Correct: ${correctAnswers} | Incorrect: ${incorrectAnswers}`;
}

// Function to end the quiz and display the final score
function endQuiz() {
    document.getElementById("question-screen").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
    finalScoreDisplay.textContent = `Your final score: ${correctAnswers} out of ${questions.length}`;
}

// Event listeners for the start, restart, and exit buttons
document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("restart-button").addEventListener("click", () => {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    updateScore();
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("question-screen").style.display = "block";
    showQuestion();
});
document.getElementById("exit-button").addEventListener("click", () => {
    window.location.reload();
});