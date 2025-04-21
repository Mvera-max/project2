const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-task-btn');
const list = document.getElementById('todo-list');

function addTask(){
  const taskText= input.value.trim();
  if(input.value.trim()===``){
    alert(`Enter something you idiot!`)
    return;
  }
 /*const html=`
  <div class= todo>
  <p>${input.value.trim()}</p>
    <div class="second">
    <button class="done-btn js-done-button">Done</button>
    <button class="x-button js-x-button">
    <img src="image.png">
    </button> 
    </div>
  </div>`*/
      
  const todoDiv = document.createElement('div');
  todoDiv.className='todo';

  const paragraph = document.createElement('p');
  paragraph.textContent=taskText;

  const secondDiv = document.createElement('div');
  secondDiv.className='second'

  const doneBtn = document.createElement('button');
  doneBtn.className='done-btn';
  doneBtn.textContent=`Done`;

  const deleteBtn = document.createElement('button');
  deleteBtn.className='delete-btn';
  deleteBtn.textContent='Delete';


  secondDiv.appendChild(doneBtn);
  secondDiv.appendChild(deleteBtn);
  todoDiv.appendChild(paragraph);
  todoDiv.appendChild(secondDiv);

  doneBtn.addEventListener('click', ()=>{todoDiv.remove(), showCongrats()})
  deleteBtn.addEventListener('click',()=>{todoDiv.remove()})

  list.appendChild(todoDiv);

  input.value=``

};
function showCongrats(){
const messages = [
  "Congrats, you did it!",
  "One step closer to greatness!",
  "You're on fire!",
  "Task? Absolutely conquered.",
  "Not all heroes wear capes.",
  `Nothing's stopping you today😤`
];
const randomMessage = messages[Math.floor(Math.random() * messages.length)];
alert(randomMessage);}

addBtn.addEventListener('click', ()=>{addTask()});

input.addEventListener('keypress',(e)=>{
  if(e.key==='Enter'){
    addTask();
  }
})