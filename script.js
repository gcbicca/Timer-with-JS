var seconds = 0
var minutes = 0
var hours = 0
var interval
const h1Watch = document.getElementById('watch')

function start () {
    const seconds = 1000
    interval = setInterval(watch, seconds)
}

function resetTimer () {
    seconds= 0
    minutes = 0
    hours = 0
    updateDisplay()
}
function stop () {
    clearInterval(interval)
    resetTimer()
    
}

function pause () {
    clearInterval(interval)
}


function watch () {
    seconds++
    
    if (seconds === 60) {
        seconds = 0
        minutes++
    } else if (minutes === 60) {
        minutes = 0
        hours++
    }

    updateDisplay()

}

function updateDisplay () {
    const formattedTime = h1Watch.innerHTML = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
    h1Watch.innerHTML = formattedTime
}