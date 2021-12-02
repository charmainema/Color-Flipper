const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let r = getRandomNumber();
    let g = getRandomNumber();
    let b = getRandomNumber();

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    color.innerHTML = `rgb(${r}, ${g}, ${b})`;
});

function getRandomNumber() {
    return Math.floor(Math.random() * 255)
}