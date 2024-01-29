const play = document.querySelector('#play')
const reset = document.querySelector('#reset')

let hours = 0;
let minutes = 0;
let seconds = 0;

let timerStatus = 'stopped'
let timerInterval = null

timeWatch = () =>{


    seconds ++;

    if(seconds / 60 === 1)
    {
        seconds = 0;
        minutes ++;

        if(minutes / 60 ===1)
        {
            minutes = 0;
            hours ++;
        }
    }

    let leadingSeconds = 0;
    let leadingMinutes = 0;
    let leadingHours = 0;

    if(seconds < 10)
    {
        leadingSeconds = '0' + seconds.toString()
    }
    else{
        leadingSeconds = seconds
    }
    if(minutes < 10)
    {
        leadingMinutes = '0' + minutes.toString()
    }
    else{
        leadingMinutes = minutes
    }
    if(hours < 10)
    {
        leadingHours = '0' + hours.toString()
    }
    else{
        leadingHours = hours
    }

    document.querySelector('#timer').innerText =
    `${leadingHours}:${leadingMinutes}:${leadingSeconds}`
}
//window.setInterval(timeWatch, 1000)
play.addEventListener('click', () =>{

    if(timerStatus === 'stopped'){
    timerInterval = window.setInterval(timeWatch, 1000)
   document.getElementById('play').innerHTML = `<i class="fa-solid fa-pause"></i>`
   timerStatus = 'started'
}
else
{
    window.clearInterval(timerInterval)
    document.getElementById('play').innerHTML = `<i class="fa-solid fa-play"></i></i>`
   timerStatus = 'stopped'
}
})

reset.addEventListener('click', () => {
    
    window.clearInterval(timerInterval)

    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('timer').innerHTML = '00:00:00';
    document.getElementById('play').innerHTML = `<i class="fa-solid fa-play"></i>`
} )