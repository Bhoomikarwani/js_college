const questions = [
    {
      question: "HTML ka full form kya hai?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tabular Markup Language",
        "Home Tool Markup Language"
      ],
      answer: 0   
    },
    {
      question: "CSS me color change karne ke liye kaunsi property use hoti hai?",
      options: ["font-color", "text-color", "color", "background"],
      answer: 2
    },
    {
      question: "JavaScript me variable declare karne ke liye kaunsa keyword use hota hai?",
      options: ["var", "int", "string", "declare"],
      answer: 0
    },
    {
      question: "Kaunsa HTML tag sabse bada heading banata hai?",
      options: ["<h6>", "<heading>", "<h1>", "<head>"],
      answer: 2
    },
    {
      question: "JavaScript me array ki length kaise pata karte hain?",
      options: ["array.size()", "array.length", "array.count", "length(array)"],
      answer: 1
    }
];

// questions.forEach((val, index) => {
//   console.log(val.question);
// })

// questions.forEach((val, index) => {
//     console.log(val.options[1]);
// })

let currentQuestion =0;
let score =0 ;
let timeLeft = 15;
let timeInterval;
let answered = false;

function loadQuestion(){
    answered=false;
    timeLeft =15;
    document.querySelector("#time").textContent = timeLeft

    const q = questions[currentQuestion];
    document.getElementById("question_no").textContent = `${currentQuestion+1}`;
    document.getElementById("Ques").textContent = q.question;


    const optionDiv = document.getElementById("options");
    optionDiv.innerHTML= '';

    q.options.forEach((val , index) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.textContent = val;
        btn.onclick = () => checkAnswer(index , btn);
        optionDiv.appendChild(btn);
        
    });
}
loadQuestion(); 

function checkAnswer(selectedIndex , btn){
    if(answered) return ;           // if already answered return
    answered = true;

    const correctIndex= questions[currentQuestion].answer;
    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach(o =>  o.disabled = true);

    if(selectedIndex === correctIndex){
        score++;
        document.getElementById("currentScore").textContent= score;
    }
}