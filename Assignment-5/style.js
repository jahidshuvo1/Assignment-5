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

function openPage(){
    window.location.href="./inside.html"
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
function disableButton() {
    document.getElementById("myButton04").disabled = true;
}
function disableButton() {
    document.getElementById("myButton05").disabled = true;
}
function disableButton() {
    document.getElementById("myButton06").disabled = true;
}
disableButton();
