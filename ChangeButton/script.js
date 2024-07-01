let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; // Starting with light mode

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        // Switch to dark mode
        currMode = "dark";
        body.classList.remove("light"); // Remove light mode class if it exists
        body.classList.add("dark"); // Add dark mode class
    } else {
        // Switch to light mode
        currMode = "light";
        body.classList.remove("dark"); // Remove dark mode class if it exists
        body.classList.add("light"); // Add light mode class
    }
    console.log(currMode);
});
