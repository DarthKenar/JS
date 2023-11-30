function pressBtn(){
    btn.classList.toggle("button");
    btn.classList.toggle("button-pressed");
    setTimeout(function(){
        btn.classList.toggle("button-pressed");
        btn.classList.toggle("button");
    },100);
}

let btnIncrement = document.getElementById("btn-increment")
let btnSave = document.getElementById("btn-save")

function incrementCounter(){
    let counter = document.getElementById("counter")
    let value = 0
    value += 1
    counter.textContent = value
};

function save(){
    let value = 0
    let log = document.getElementById("log")
    log.textContent += ` ${value} -`
    counter.textContent = value
};

//Styles


