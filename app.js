let hourById = document.getElementById("hour");
let minuteById = document.getElementById("min");
let secondById = document.getElementById("sec");
let amPmById = document.getElementById("am-pm");

const updateDisplay = () => {
    let Time = new Date();
    
    let newHour = Time.getHours();
    let newMinute = Time.getMinutes();
    let newSecond = Time.getSeconds();

    if (newHour >= 12){
        newHour -= 12;
        amPmById.textContent = 'PM'
    }else{
        amPmById.textContent = 'AM'
    }
    hourById.textContent = newHour.toString();
    minuteById.textContent = newMinute.toString().padStart(2, '0');
    secondById.textContent = newSecond.toString().padStart(2, '0');
}
setInterval(updateDisplay, 1000);
updateDisplay();
