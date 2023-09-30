let counteees = document.getElementById("countee");
let saved = document.getElementById("xyz");
console.log(counteees);
let count=0;
function increment(){
count +=1;
counteees.innerText= count;
}

function save(){
saved.textContent+= count + " - ";
count =0;
counteees.innerText= 0;
}