function btnStyle(btn){
    btn.classList.toggle("button");
    btn.classList.toggle("button-pressed");
};

function incrementCounter(){
    let counter = document.getElementById("counter")
    value += 1
    counter.textContent = value
};

function saveCounter(){
    let log = document.getElementById("log")
    log.textContent += ` ${value} -`
    value = 0
    counter.textContent = value
};

function btnIncrementActionDown(btn){
    btnStyle(btn);
    incrementCounter();
};
function btnIncrementActionUp(btn){
    btnStyle(btn);
};

function btnSaveActionDown(btn){
    btnStyle(btn);
    saveCounter();
};
function btnSaveActionUp(btn){
    btnStyle(btn);
};

let value = 0
let btnIncrement = document.getElementById("btn-increment")
let btnSave = document.getElementById("btn-save")
btnIncrement.addEventListener("mousedown",()=>(btnIncrementActionDown(btnIncrement)))
btnIncrement.addEventListener("mouseup",()=>(btnIncrementActionUp(btnIncrement)))
btnSave.addEventListener("mousedown",()=>(btnSaveActionDown(btnSave)))
btnSave.addEventListener("mouseup",()=>(btnSaveActionUp(btnSave)))



