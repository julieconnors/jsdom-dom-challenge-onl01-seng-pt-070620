const counter = document.getElementById("counter");
let count = setInterval(increaseCounter, 1000);


const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const pauseButton = document.getElementById("pause");
const submitButton = document.getElementById("submit");
const heartButton = document.getElementById("heart");


const input = document.querySelector("input");
const form = document.getElementById("comment-input");
const list = document.getElementById("list");

function increaseCounter() {
    counter.innerText ++
}

minusButton.addEventListener("click", function(){
    counter.innerText --
});

plusButton.addEventListener("click", function() {
    counter.innerText ++
});

pauseButton.addEventListener("click", function() {
    if (this.innerText === "pause"){
        clearInterval(count);
        submitButton.disabled = true;
        plusButton.disabled = true;
        minusButton.disabled = true;
        heartButton.disabled = true;

        this.innerText = "resume"
    } else if (this.innerText === "resume") {
        console.log("something else");

        submitButton.disabled = false;
        plusButton.disabled = false;
        minusButton.disabled = false;
        heartButton.disabled = false;

        this.innerText = "pause"
    }
});

input.addEventListener('input', function(e){
    form.textContent = e.target.value
});

function addComment(comment) {
    let li = document.createElement("li");
    li.innerHTML = comment;
    list.appendChild(li)
}

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    addComment(form.textContent);
});

// for (const element of buttons) {
//     element.disabled = true;
// }

heartButton.addEventListener('click', function() {
    let num = counter.innerText
    let likes = document.querySelector("ul.likes")
    let s = document.createElement("li")
    s.innerText = `${counter.innerText} has been liked 1 time`
    likes.appendChild(s)

})