const dropDown = document.querySelector(".dropdown");
const test = document.querySelector(".test");

dropDown.addEventListener("click", () => {
    test.classList.toggle("active")
    });
