console.log('Hello!');
const todaysDate = () => {
    let d = new Date();
    return "Todays date is " + d;
}
const dateBlock =document.getElementById("dateblock")
dateBlock.innerText = todaysDate();

const body= document.body
const d = new Date();
