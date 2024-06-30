document.addEventListener("DOMContentLoaded", () => {
    const result = window.localStorage.getItem("result");
    document.getElementById("result").innerHTML = `Your final score is ${result}!`;
})