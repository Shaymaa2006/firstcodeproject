console.log('Hello!');
const todaysDate = () => {
    let d = new Date();
    return "Todays date is " + d;
}
const dateBlock =document.getElementById("dateblock")
dateBlock.innerText = todaysDate();

const body= document.body
const d = new Date();

if (d.getHours() > 20 || d.getHours() <8) {
    body.style["backgroundColor"] ="black";
    body.style["backgroundColor"] ="White";
} else {
    body.style["backgroundColor"] ="White";
    body.style["color"]= "black";
}