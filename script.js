let timesClicked = parseInt(window.localStorage.getItem("timesClicked")) || 0;
let addInteger = parseInt(window.localStorage.getItem("addInteger")) || 1;
let ifAutoclick = parseInt(window.localStorage.getItem("ifAutoclick")) || 1;
let IntervalID = undefined

const clickedTimesDiv = document.getElementsByClassName("clickedTimes")[0]

clickedTimesDiv.innerHTML = timesClicked

const count = () => {
    window.localStorage.setItem('timesClicked', timesClicked)
    clickedTimesDiv.innerHTML = timesClicked
}

const countIncrease = () => {
    window.localStorage.setItem('addInteger', addInteger)
}

const countAutoclick = () => {
    window.localStorage.setItem('ifAutoclick', ifAutoclick)
}

const countLEGO = () =>  {  
    timesClicked += addInteger
    count()
}

const autoclickAction = () => {
    timesClicked += 1
    count()
}

if (ifAutoclick === 2){
    IntervalID = setInterval(autoclickAction, 1000)
    countAutoclick()
}

const Autoclick = () => {
    if (timesClicked >= 1000){
        if (ifAutoclick === 1){
            ifAutoclick += 1
            timesClicked -= 1000
            count()
            IntervalID = setInterval(autoclickAction, 1000)
            countAutoclick()
        }
    }   
}

const increaseAddInteger = () => {
    if (timesClicked >= 100){
        addInteger += 1
        timesClicked -= 100
    }
    countIncrease()
    count()
    countAutoclick
}

const Reset = () => {
    addInteger = 1
    timesClicked = 0
    ifAutoclick = 1
    clearInterval(IntervalID)
    countIncrease()
    count()
    countAutoclick()
}
