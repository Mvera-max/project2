const quizData={
  easy:[{
    question:`1. What are the three primary colors?`,
    options: ["Red, Blue, Green", "Red, Blue, Yellow", "Green, Yellow, Blue", "Red, Yellow, Black"],
    answer:`Red, Blue, Yellow`
  },
  {
    question:`2. Is a tomato a fruit or a vegetable?`,
    options:[`Fruit`,`Vegetable`,`Both`,`Neither`],
    answer:`Fruit`
  },
  {
    question:`3. How long is a millenia?`,
    options:['1000 years', '100 years', `10 years`,`100,000 years`],
    answer:`1000 years`
  },
  {
    question:`4. What color is Neptune?`,
    options:[`Red`, 'Green','Blue', 'Purple'],
    answer:'Blue'
  },
  {
    question:`5. If you were in a race and you passed the second person, what position would you be? `,
    options:[`Last`,'First','Third', `Second`],
    answer:'Second'
  }
],

  medium:[{
    question:`1. What is a div?🥲`,
    options:[`A boolean`,'A container','An attribute', `All of the above`],
    answer:'A container'
  },
  {
    question:`2. Who is currently the richest man in the world?`,
    options:[`Bill Gates`,'Elon Musk','Tim cook', `Jeff Bezzos`],
    answer:'Elon Musk'
  },
  {
    question:`3. Which language is spoken in Brazil? `,
    options:[`Latin`,'Spanish','Brazillian', `Portugese`],
    answer:'Portugese'
  },
  {
    question:`4. Which one among the choices below is not among the seven wonders of the world`,
    options:[`Niagra falls`,'Pyramids of Giza','Victora falls', `Stone Henge`],
    answer:'Stone Henge'
  },
  {
    question:`5. Which is the largest body organ?`,
    options:[`Liver`,'Spleen','Skin', `Skeleton`],
    answer:'Skin'
  }
    
  ],
  hard:[{
    question:`1. In the Originals, which ancient weapon was specifically created to kill Klaus and could neutralize hybrid abilities?`,
    options:[`Papa Tunde's Blade`,'The White Oak Stake',`The Hollow's Dagger`, `The Serpent Talisman`],
    answer:'The White Oak Stake'
  },{
    question:`2. In Suits, during Season 3, what was the secret file that Louis Litt discovered, threatening to expose Mike's secret?`,
    options:[`Havard Admissions List`,`Mike's Fake Transcript`,`Bar Exam List`, `Harvey's Personal File`],
    answer:`Havard Admissions List`
  },{
    question:`3. in Money Heist, which charachter famously said:"In this world, everything is governed by balance"?`,
    options:[`Proffesor`,`Tokyo`,`Berlin`,`Nairobi`],
    answer:`Berlin`
  },{
    question:`4. in Vampire Diaries/The Originals universe, what kind of supernatural being is Marcel in the later Seasons`,
    options:[`Original Vampire`,`Hybrid Werewolf`,`Witch-Vampire Hybrid`,`Upgraded Original Vampire`],
    answer:`Upgraded Original Vampire`
  },{
    question:`5. In Stranger Things, which Dungeons & Dragons creature do the kids name Vecna after in Season 4?`,
    options:[`The Lich King`,`A Powerful Undead Sorcerer`,`The Eye of Chaos`,`The Mind Flayer`],
    answer:`A Powerful Undead Sorcerer`
  }
  ],
  bonus:[{
    question: `How big is my peepee?`,
    options:[`LARGE`,`LARGE`,`LARGE`,`LARGE`],
    answer:`LARGE`
  },{
    question:`On what date did we start our friendship?`,
    options:[`8/12/2024`,`29/12/2024`,`2/12.2024`,`15/12/2024`],
    answer:`8/12/2024`
  },{
    question: `Would you still love me if i was a millipede?`,
    options:[`Yes`,`No`,`I don't know`,`Probably not`],
    answer:`Yes`
  },{
    question: `What is my personality?`,
    options:[`Ambivert`,`Extrovert`,`Introvert`,`Cannot be explained`],
    answer:`Ambivert`||'Cannot be explained'
  },{
    question: `If there was one thing you would change about this relationship what would it be?`,
    options:[`Nothing`,`Austin's stupidity`,`Austin's communication skills`,`Other`],
    answer:`Nothing`
  }
  ]
};

const quizHtml = `
   ${/*<div id="go-back-div">&larr;BACK</div>
  <div id="quiz-title">QUIZ TIME</div>*/''}
  <div id="quiz-buttons">
    <div id="easy-button">Easy</div>
    <div id="medium-button">Medium</div>
    <div id="hard-button">Hard</div>
</div>
`
const quizSection=document.getElementById('quiz-section');
const mainSections=document.querySelectorAll('main section');
const triviaBtn=document.querySelector('.button-3');

function bindDifficultyButtons(){
  document.getElementById('easy-button').addEventListener('click',()=>{startQuiz(`easy`)
  });
  document.getElementById('medium-button').addEventListener('click',()=>{startQuiz(`medium`)
   // document.querySelector('main').style.display='block'
  });
  document.getElementById('hard-button').addEventListener('click',()=>{startQuiz(`hard`)
   // document.querySelector('main').style.display='block'
  });
}


function showQuiz(){
  mainSections.forEach(section => {
    section.style.display='none'
   });
   quizSection.style.display='block';
   quizSection.innerHTML=quizHtml;
   bindDifficultyButtons();
   document.getElementById('go-back-div').addEventListener('click',()=> showMain())
};

function showMain(){
  mainSections.forEach(section => {
    section.style.display='block'
   });
   quizSection.style.display='none';
  document.querySelector('main').style.display='flex';
  moodDisplay.style.display='none';
  //document.querySelector('.displayer').textContent='';
};

triviaBtn.addEventListener('click',()=>showQuiz()
);

let currentQuestionIndex = 0;
let currentDifficulty = ``;
let score=0;

function startQuiz(difficulty) {
  currentDifficulty= difficulty.toLowerCase();
  currentQuestionIndex=0;
  score = 0;
  displayQuestion();
};

function displayQuestion(){
  const questObj = quizData[currentDifficulty][currentQuestionIndex];
  if(!questObj){
    showFinalScore();
    return;
  }
  quizSection.innerHTML = `
    <div class="quiz-div">
      <img class="x-image" src="image.png">
      <h3>${questObj.question}</h3>
      <div class="button-div">
        ${questObj.options.map(option => `
          <ul class="option-button" "><li class="option-li">${option}</li></ul>
        `).join('')}
      </div>
    </div>
  `;

  document.querySelectorAll(`.option-button`).forEach((btn)=>{
    btn.addEventListener('click',()=>checkAnswer(btn.textContent));
  })

  document.querySelector('.x-image').addEventListener('click', ()=>{
    document.querySelector('.quiz-div').style.display='none';
    showQuiz();
  });
}

function checkAnswer(selectedOption) {
  const correct = quizData[currentDifficulty][currentQuestionIndex].answer;
  if (selectedOption === correct) {
    score++
   // alert("Correct! 😎");
  } else {
  //  alert("Wrong! 💀");
  }
  currentQuestionIndex++;
  displayQuestion(); 
};

function showFinalScore(){
 let next;
 if(currentDifficulty==='easy') {
  next='medium';
 }else if(currentDifficulty==='medium'){
  next='hard';
 }else{
  next=null;
 }
 const rewardHTML = score === 5 
 ? `<button class="reward-button" id="reward-btn">Get reward!</button>` 
 : '';
 quizSection.innerHTML=`
  <div class="quiz-result">
      <h2>Quiz Completed!</h2>
      <p>You scored ${score}/5</p>
      <p>${getSavageMessage(score)}</p>
      <p> ${rewardHTML}</p>
      <button id="next-section">${next ? `Continue to ${next}` : "Try Another"}</button>
      <button id="go-back">Back</button>
    </div>
 `;

 buttonColor();

 document.getElementById('next-section').addEventListener('click',()=>{
  if(next) startQuiz(next);
  else showQuiz();
 });
 document.getElementById('go-back').addEventListener('click',()=>showQuiz());

 if(score === 5){
  document.getElementById('reward-btn').addEventListener('click', () => {
    quizSection.innerHTML=`
    /<div class="video-div">
      <img class="x-image" src="image.png">
    <video width="70%" autoplay>
      <source src="rickroll.mp4" type="video/mp4">
    </video>
    </div>
    `;

  document.querySelector('.x-image').addEventListener('click', ()=>{
    document.querySelector('video').remove();
    showQuiz();
    })
  });
 }
}


function getSavageMessage(score){
if(score===5){
  return`Wow. I honestly didn't expect you to get everything😂. Click below to get your reward😁`; 
}if(score>=3){
  return `Not bad Sarah. Not bad 👀`}
if(score>=1){
  return `Well, I expected as much😑`
}
return 'The brain is meant to be used Sarah.'}


function buttonColor(){
  if(currentDifficulty==='easy'){
    document.getElementById('next-section').style.backgroundColor=`orange`;
}else if(currentDifficulty==='medium'){
    document.getElementById('next-section').style.backgroundColor='rgb(167, 12, 12)';
    document.getElementById('go-back').style.background='var(--night-gradient)';
}else if(currentDifficulty==='hard'){
    document.getElementById('next-section').style.background='var(--sky-gradient)';
}}

  