let value = 0
function increment(){
    let counter = document.getElementById("counter")
    value += 1
    counter.textContent = value
};
function save(){
    let log = document.getElementById("log")
    log.textContent += ` ${value} -`
    value = 0
    counter.textContent = value
};