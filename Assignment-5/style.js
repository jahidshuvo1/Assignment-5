function randomBgColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
randomBgColor();

function showAlert(){
    alert("Board Updated Successfully");
}

function disableButton() {
    document.getElementById("myButton").disabled = true;
}
function disableButton() {
    document.getElementById("myButton02").disabled = true;
}
function disableButton() {
    document.getElementById("myButton03").disabled = true;
}

function openPage(){
    window.location.href="./inside.html"
}
