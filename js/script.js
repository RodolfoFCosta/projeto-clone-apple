const img = document.querySelector("#product-img");

const greenBtn = document.querySelector("#green");
const silverBtn = document.querySelector("#silver");
const goldenBtn = document.querySelector("#golden");
const grafiteBtn = document.querySelector("#grafite");
const blueBtn = document.querySelector("#blue");


greenBtn.addEventListener("click", () => {
    img.setAttribute("src", "/img/iphone_green.jpg")
})

silverBtn.addEventListener("click", () => {
    img.setAttribute("src", "/img/iphone_silver.jpg")
})

goldenBtn.addEventListener("click", () => {
    img.setAttribute("src", "/img/iphone_golden.jpg")
})

grafiteBtn.addEventListener("click", () => {
    img.setAttribute("src", "/img/iphone_grafite.jpg")
})

blueBtn.addEventListener("click", () => {
    img.setAttribute("src", "/img/iphone_blue.jpg")
})