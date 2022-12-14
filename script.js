let timesClicked = parseInt(window.localStorage.getItem("timesClicked")) || 0;
let addInteger = parseInt(window.localStorage.getItem("addInteger")) || 1;

//let timesClicked = 0;

const clickedTimesDiv = document.getElementsByClassName("clickedTimes")[0]

clickedTimesDiv.innerHTML = timesClicked
//let addInteger = 1

const count = () => {
    window.localStorage.setItem('timesClicked', timesClicked)
    clickedTimesDiv.innerHTML = timesClicked
}
const countincrease = () => {
    window.localStorage.setItem('addInteger', addInteger)
}

const countLEGO = () =>  {  
    timesClicked += addInteger
    count()
}

const increaseAddInteger = () => {
    if (timesClicked >= 100){
        addInteger += 1
        timesClicked -= 100
    }
    countincrease()
    count()
}
const Reset = () => {
    addInteger = 1
    timesClicked = 0
    countincrease()
    count()
}
 
