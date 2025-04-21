document.querySelector('.button-1').addEventListener('click',()=>{
  window.location.href=`todo-list.html`
})

const toggleBtn=document.getElementById('theme-toggle')


window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'true') {
    document.body.classList.add('dark-theme');
    toggleBtn.innerText = '☀️';
  } else {
    document.body.classList.remove('dark-theme');
    toggleBtn.innerText = '🌙';
  }
});

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  toggleBtn.innerText = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark);
});


document.querySelector('.home-icon').addEventListener('click',()=>{
 window.location.href=`index.html`
})


//happy hour functionality
const laughBtn=document.querySelector('.button-2');


const jokeSection=document.createElement(`section`);
jokeSection.className='joke-section'
jokeSection.style.display='none';

const image=document.createElement('img');
image.className='ray-image'
image.src=`44cb8c916131ba570434730dddeab63a.jpg`

const rayWords=document.createElement('p');
rayWords.className=`ray-words`
let uncleWords=``

const jokeDisplay=document.createElement('p');
jokeDisplay.className='joke-display';

const jokeButton=document.createElement('button');
jokeButton.className=`another-button`
jokeButton.textContent=`Gimme a joke 😁`

jokeSection.appendChild(image);
jokeSection.appendChild(rayWords)
jokeSection.appendChild(jokeDisplay);
document.querySelector('main').appendChild(jokeSection);
jokeSection.appendChild(jokeButton);

jokeData=[
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "What do you call cheese that isn't yours? Nacho cheese.",
  "Why don't scientists trust atoms? Because they make up everything.",
  "I once had a job as a professional cricket impersonator, but I quit. It was just chirp after chirp.",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  `What two body parts are connected? Eyebros.`,
  `I asked the dog "What's two minus two?" He said nothing.Because dogs can't count.`,
  `I named my printer "Bob Marley"...'Cause it be jammin'.`,
  `My friend says to me, “What rhymes with orange?”I said, “No it doesn't.”`,
  `What do you call a fake noodle? An impasta.`,
  `What do you call a bear with no teeth? A gummy bear.`,
  `What type of shoes do ninjas wear? Sneakers.`,
  `What do you call a fish with no eyes? A fsh.`,
  `What type of pen do muslims use? AraBic.`
]


const raymondRules = `
<ul>
  <li>Never trust a silent fart.</li>
  <li> If you're not embarrassing your nephews, then you ain't livin'!.</li>
  <li>Never fight a beaver with a broken arm.</li>
  <li>Don’t take advice from a man who tucks his shirt into his underwear.</li>
  <li>The best laughs are the ones that make people leave the room.</li>
  <li>If she groans at the pun, she’s a keeper.</li>
</ul>`
  



/*function tellJoke(){
  const randomJoke=jokeData[Math.floor(Math.random()*jokeData.length)];
  jokeDisplay.textContent=randomJoke;
  const uncleOpeners = [
    "Eyy, sit down kiddo... Uncle Raymond's got one for ya.",
    "Back in my day, this joke would've got me slapped.",
    "Brace yourself… this one's gonna tickle your brain wrinkle.",
    "You ever laugh so hard you question your life choices? No? Well, prepare yourself.",
    "Heard this one at a barber shop in '89. Still hits.",
    "I’m not sayin’ it’s good… but I ain’t sayin’ it’s bad either.",
    "Here comes a joke smoother than my bald head.",
    "Gather 'round, youngblood. Uncle Ray's about to drop comedy gold… or at least comedy bronze."
  ];

  uncleWords = uncleOpeners[Math.floor(Math.random() * uncleOpeners.length)];
  rayWords.textContent = uncleWords;
} */

    let previousJoke = "";

  function tellJoke() {
    let randomJoke;
    do {
      randomJoke = jokeData[Math.floor(Math.random() * jokeData.length)];
    } while (randomJoke === previousJoke);
    previousJoke = randomJoke;

    jokeDisplay.textContent = randomJoke;

    const uncleOpeners = [
      "Eyy, sit down kiddo... Uncle Raymond's got one for ya.",
      "Back in my day, this joke would've got me slapped.",
      "Brace yourself… this one's gonna tickle your brain wrinkle.",
      "You ever laugh so hard you question your life choices? No? Well, prepare yourself.",
      "Heard this one at a barber shop in '89. Still hits.",
      "I’m not sayin’ it’s good… but I ain’t sayin’ it’s bad either.",
      "Here comes a joke smoother than my bald head.",
      "Gather 'round, youngblood. Uncle Ray's about to drop comedy gold… or at least comedy bronze."
    ];
    rayWords.textContent = uncleOpeners[Math.floor(Math.random() * uncleOpeners.length)];
  }


laughBtn.addEventListener('click',()=>{
  let words=false;
  if(!words){
    document.querySelector('.ray-words').style.display='none'
    jokeDisplay.textContent=`Hey there champ! Austin hired me to make you laugh. I gotta say it's been a while since I did this but my audience never fail to leave with a smile🤝 `
    words=true;
  }else
  tellJoke();
  mainSections.forEach(section => {
    section.style.display='none'
   });
    jokeSection.style.display='flex';
})

document.querySelector('.another-button').addEventListener('click',()=>{
  tellJoke();
  rayWords.style.display='block';
})
let loreMode=false

document.querySelector('.ray-image').addEventListener('click',()=>{
  if(!loreMode){
    rayWords.style.display='none';
    jokeDisplay.innerHTML=`Raymond DeLaLaugh, a retired shoe salesman from Detroit. Discovered his talent for dad jokes in a barber shop back in 1979. He's been banned from 3 weddings, 1 funeral, and a Discord server. His core philosophis are:\n ${raymondRules}`
  }else{
    tellJoke();
    rayWords.style.display='block';
  }
  loreMode=!loreMode;
  })
