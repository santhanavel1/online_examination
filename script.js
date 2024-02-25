const questions = [
    {
        question: "1)What is 2 + 2?",
        options: ["3", "4", "5","6"],
        answer: "4"
    },
    {
        question: "2)What is 5 + 3?",
        options: ["6", "7", "8","9"],
        answer: "8"
    },
    {
        question: "3)What is 10 + 35?",
        options: ["45", "46", "56","44"],
        answer: "45"
    },
    {
        question: "4)What is 2 * 6?",
        options: ["14", "13", "12","11"],
        answer: "12"
    },
    {
        question: "5)The 5! number is?",
        options: ["120", "124", "165","121"],
        answer: "120"
    },
    {
        question: "6)Rainbow consist how many colours?",
        options: ["6 colours", "7 colours", "8 colours","5 colours"],
        answer: "7 colours"
    },
    {
        question: "7)Name the national River of india ?",
        options: ["Ganga", "Yamunai", "kaveri","kodhavari"],
        answer: "Ganga"
    },
    {
        question: "8)Who is the first citizen of India?",
        options: ["President", "Prime Minister", "Chief Minister","Supremecourt judge"],
        answer: "President"
    },   
    {
        question: "9)Which Festival Is known as the festival of light?",
        options: ["Pongal", "Karthigai", "Diwali","chithirai"],
        answer: "Diwali"
    },
    {
        question: "10)Who is real founder of microsoft?",
        options: ["Larry page and Sergey Brin", "Bill Gates and Paul G.allen", "Elon musk","Sundar pichai"],
        answer: "Bill Gates and Paul G.allen"
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const options = document.getElementsByName("option");

    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion].question;
        for (let i = 0; i < options.length; i++) {
            options[i].value = questions[currentQuestion].options[i];
            options[i].nextSibling.textContent = questions[currentQuestion].options[i];
        }
    } else {
        showResult();
    }
}

function nextQuestion() {
    const options = document.getElementsByName("option");
    const selectedOption = [...options].find(option => option.checked);

    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;
        options.forEach(option => (option.checked = false));
        displayQuestion();
    }
}

function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
    document.getElementById("quiz").style.display = "none";
    resultElement.style.display = "block";
}

displayQuestion();