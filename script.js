const questions = [
    {
        question: "What is the capital of India?",
        answers: [
            { text: "Delhi", correct: true },
            { text: "Mumbai", correct: false },
            { text: "Chennai", correct: false },
            { text: "Kolkata", correct: false }
        ]
    },

    {
        question: "Which language is used for web development?",
        answers: [
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },
            { text: "C++", correct: false },
            { text: "Java", correct: false }
        ]
    },

    {
        question: "HTML stands for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Tech Machine Language", correct: false },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlinks Text Mark Language", correct: false }
        ]
    }
];

const questionElement =
    document.getElementById("question");

const answerButtons =
    document.getElementById("answer-buttons");

const nextButton =
    document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion =
        questions[currentQuestionIndex];

    questionElement.innerHTML =
        currentQuestion.question;

    currentQuestion.answers.forEach(answer => {

        const button =
            document.createElement("button");

        button.innerHTML = answer.text;

        button.classList.add("btn");

        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct =
                answer.correct;
        }

        button.addEventListener(
            "click",
            selectAnswer
        );
    });
}

function resetState() {
    nextButton.style.display = "none";

    while (answerButtons.firstChild) {
        answerButtons.removeChild(
            answerButtons.firstChild
        );
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;

    const isCorrect =
        selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        score++;
        selectedBtn.style.background =
            "green";
    } else {
        selectedBtn.style.background =
            "red";
    }

    Array.from(answerButtons.children)
        .forEach(button => {

        button.disabled = true;
    });

    nextButton.style.display =
        "block";
}

function showScore() {
    resetState();

    questionElement.innerHTML =
        `You scored ${score} out of ${questions.length}!`;

    nextButton.innerHTML =
        "Play Again";

    nextButton.style.display =
        "block";
}

function handleNextButton() {
    currentQuestionIndex++;

    if (
        currentQuestionIndex <
        questions.length
    ) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener(
    "click",
    () => {
        if (
            currentQuestionIndex <
            questions.length
        ) {
            handleNextButton();
        } else {
            startQuiz();
        }
    }
);

startQuiz();