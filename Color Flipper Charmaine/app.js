const colors = ["url('https://previews.123rf.com/images/ange1011/ange10111911/ange1011191100021/134094590-fresh-raw-mutton-shoulder-meat-with-bone-isolated-on-white-background-large-piece-of-sheep-fillet-or.jpg')", "url('https://previews.123rf.com/images/kolesnikovserg/kolesnikovserg1708/kolesnikovserg170800403/83893763-three-raw-chicken-drumsticks-isolated-on-white-background.jpg')", "rgba(66, 135, 245)", "#f15025", "#000000", "rgba(133, 255, 120)"];
const colorsName = ["mutton", "chicken", "rgba(66, 135, 245)", "#f15025", "#000000", "rgba(133, 255, 120)"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    // random number 0 to 5
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    // if colors is an image url apply backgroundImage rather than backgroundColor
    if (randomNumber <= 1) {   
        document.body.style.backgroundImage = colors[randomNumber];
        document.body.style.backgroundSize = "100%";
        color.innerHTML = colorsName[randomNumber];
    } else {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = colors[randomNumber];
        color.innerHTML = colorsName[randomNumber];
    }
   
})

// gets a random number between 0 and colors.length
function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}