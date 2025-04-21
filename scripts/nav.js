const feelings=document.getElementById('nav-input');
const submit = document.querySelector('.icon');
const moodDisplay=document.querySelector('.feelings-section');
const displayer = document.querySelector('.displayer');


let response=``;

function handleMood(){
  const mood =feelings.value.toLowerCase().trim();
  if([`happy`, `awesome`, `great`, `amazing`, `fiti`, `nice`, `good`].includes(mood)){
    response=`That's the kind of response I'd like to hear😤. Keep vibing baby. No one can put you down😁`
    moodDisplay.style.background=`#FFD93D`
    moodDisplay.style.fontFamily=`poppins`
    feelings.value=``;
  }else if(['sad', `lonely` , `tired`, `low`,`nimechoka`,`shit`,`bad`].includes(mood)){
    response=`Aye, listen. Life’s throwing hands right now, but so what? You’re tougher than you think. Cry it out if you need to, then get back up and stunt on life again. I gotchu ❤️‍🩹`
    moodDisplay.style.background=`#5D5FEF`
    moodDisplay.style.fontFamily=`Merriweather`
    displayer.style.color=`black`
    feelings.value=``;
  }else if([`angry`,`mad`,`furious`,`kill`].includes(mood)){
    response=`Hold up baby girl. Deep breathes. Tuliza moyo🤚. Now. You can call me to vent, punch a wall🤷‍♂️, maybe even scream in a pillow but the rage will pass and you are gonna come out stronger and better. Keep pushing🙂`
    moodDisplay.style.background=`#CDB4DB`
    moodDisplay.style.fontFamily=`sans serif`
    feelings.value=``
  }else{
    response=`If your seeing this, it's either you've typed absolute nonsense or I just don't know how to respond to ${feelings.value}. Call me if you want to talk, otherwise, gerrara here😒`
    moodDisplay.style.background=`#FF4E4E`
    feelings.value=``
  }
 
  displayer.textContent=response;
  mainSections.forEach(section => {
    section.style.display='none'
   });
   jokeSection.style.display='none'
    moodDisplay.style.display='flex'
};


/*function updateMoodStyle(mood){
  body=document.body;
  let moodSettings = {
    happy:    { color: "#FFD93D", font: "'Poppins', sans-serif" },
    sad:      { color: "#5D5FEF", font: "'', serif" },
    angry:    { color: "#"FF4E4E, font: "'Anton', sans-serif" },
    calm:     { color: "#A0E7E5", font: "'Quicksand', sans-serif" },
    excited:  { color: "#FF8C42", font: "'Caveat', cursive" },
    anxious:  { color: "#CDB4DB", font: "'Fira Sans', sans-serif" },
    motivated:{ color: "#00C49A", font: "'Manrope', sans-serif" },
    tired:    { color: "#999999", font: "'Work Sans', sans-serif" },
    romantic: { color: "#FF6F91", font: "'Dancing Script', cursive" },
  };
  let settings=moodSettings[mood]
  if(settings){
    moodDisplay.style.backgroundColor=settings.color;
    moodDisplay.style.fontFamily=settings.font;
  }
}*/


submit.addEventListener('click',()=>{
  if(!feelings.value.toLowerCase().trim()){
    alert(`You have to tell me how your feeling fisrt😐`);
    return;
  }else{
    handleMood();
  }})

  feelings.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if(!feelings.value.toLowerCase().trim()){
        alert(`You have to tell me how your feeling fisrt😐`);
        return;
      }else{
        handleMood();
      }
    }
  })
