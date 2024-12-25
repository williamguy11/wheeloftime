const questions = [
    {
        question: "Who is the Dragon Reborn?",
        options: ["Rand al'Thor", "Perrin Aybara", "Mat Cauthon", "Egwene al'Vere"],
        answer: "Rand al'Thor"
    },
    {
        question: "What is the name of Moiraine's Warder?",
        options: ["Thom Merrilin", "Lan Mandragoran", "Padan Fain", "Loial"],
        answer: "Lan Mandragoran"
    },
    {
        question: "Which city is known as the City of the Golden Bees?",
        options: ["Tar Valon", "Cairhien", "Caemlyn", "Fal Dara"],
        answer: "Cairhien"
    },
    {
        question: "What is the name of the weapon Mat carries?",
        options: ["Callandor", "Ashandarei", "The Horn of Valere", "Dagger from Shadar Logoth"],
        answer: "Ashandarei"
    },
    {
        question: "What is the True Source divided into?",
        options: ["Saidar and Saidin", "The Pattern and the Wheel", "The Ways and The Blight", "The Dark One and the Creator"],
        answer: "Saidar and Saidin"
    },
    {
        question: "Which character appears the LEAST throughout the series?",
        options: ["Heran Adan", "Ishmael", "Loial", "Barthanes Damodred"],
        answer: "Heran Adan"
    },
    {
        question: "Who is the captain of the Spray? (Boat)",
       options: ["Faile","Bayle Domon","Heran Adan","Mordeth"],
        answer: "Bayle Domon"
    },
    {
        question: "Inside a Ter'angreal in Rhuidean, who received a Medallion that blocks the one power from being used on a person?",
        options: ["Egwene","Rand", "Mat", "Nynaeve"],
        answer: "Mat"
    },
    {
        question: "Who sees auras around most people?",
        options: ["Verin Sedai", "Egwene", "Min", "Rand"],
        answer: "Min"
    },
    {
        question: "Which Forsaken adopted a depiction of nine golden bees as his sigil after he escaped from imprisonment with the Dark One?",
        options: ["Be'lal", "Demandred", "Rahvin", "Sammael"],
        answer: "Sammael"
    },
    {
        question: "What is Elayne's House?",
        options: ["Saighan", "Trakand", "Damondred", "Tolvere"],
        answer: "Trakand"
    },
    {
        question: "My beauty surpasses any girl, maid or queen, but don't go by looks, because I truly am mean. Who am I?",
        options: ["Liandrin", "Laras", "Lanfear", "Leane"],
        answer: "Lanfear"
    },
    {
        question: "Of which nation is al'Lan Mandragoran the uncrowned king?",
        options: ["Malkier", "Tear", "Shienar", "Tarabon"],
        answer: "Malkier"
    },
    {
        question: "In which city are the headquarters of the Children of the Light?",
        options: ["Amador", "Ebou Dar", "Illian", "Tanchico"],
        answer: "Amador"
    },
    {
        question: "Which Forsaken visits Lews Therin Telamon in the prologue of the first book?",
        options: ["Lanfear", "Sammael", "Ishamael"],
        answer: "Ishamael"
    },
    {
        question: "Where was Rand freed after he was captured by Aes Sedai on Elaida's command?",
        options: ["Tremonsien", "Maerone", "Dumai's Wells", "Imre Stand"],
        answer: "Dumai's Wells"
    },
    {
        question: "Which Aes Sedai was born in Far Madding?",
        options: ["Moiraine Damodred", "Cadsuane Melaidhrin", "Siuan Sanche"],
        answer: "Cadsuane Melaidhrin"
    },
    {
        question: "Which Aiel city do you need to enter to become a Wise One or Clan Chief?",
        options: ["Rhuidean", "Katar", "Alcair Dal"],
        answer: "Rhuidean"
    },
    {
        question: "Which was the last of the current borderland countries to become a borderland country?",
        options: ["Saldaea", "Kandor", "Shienar", "Arafel"],
        answer: "Shienar"
    },
    {
        question: "What's the name of the mare accompanying Rand al'Thor and his father in the opening scene of the book?",
        options: ["Bella", "Bela", "Belle", "Bell"],
        answer: "Bela"
    }
    
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startGame);

function startGame() {
    startButton.style.display = "none";
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = "Score: 0";
    showQuestion();
}

function showQuestion() {
    resetOptions();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.addEventListener("click", () => selectAnswer(option));
        optionsElement.appendChild(button);
    });
}

function resetOptions() {
    optionsElement.innerHTML = "";
}

function selectAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
        alert("✅ Correct!");
    } else {
        alert(`❌ Incorrect! The correct answer was: ${currentQuestion.answer}`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    const totalQuestions = questions.length;
    const percentage = Math.round((score / totalQuestions) * 100); // Calculate percentage
    
    alert(`Game Over! Your final score is ${score}/${totalQuestions} (${percentage}%).`);
    
    startButton.textContent = "Play Again";
    startButton.style.display = "block";
}

