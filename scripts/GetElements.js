let work__hour = document.querySelector('.work__hour')
let work__week = document.querySelector('.work__week')
let play__hour = document.querySelector('.play__hour')
let play__week = document.querySelector('.play__week')
let study__hour = document.querySelector('.study__hour')
let study__week = document.querySelector('.study__week')
let excercise__hour = document.querySelector('.excercise__hour')
let excercise__week = document.querySelector('.excercise__week')
let social__hour = document.querySelector('.social__hour')
let social__week = document.querySelector('.social__week')
let self__hour = document.querySelector('.self__hour')
let self__week = document.querySelector('.self__week')

function updateContentDaily(data) {
    work__hour.textContent = data[0].timeframes.daily.current 
    work__week.textContent = data[0].timeframes.daily.previous
    play__hour.textContent = data[1].timeframes.daily.current 
    play__week.textContent = data[1].timeframes.daily.previous
    study__hour.textContent = data[2].timeframes.daily.current 
    study__week.textContent = data[2].timeframes.daily.previous
    excercise__hour.textContent = data[3].timeframes.daily.current 
    excercise__week.textContent = data[3].timeframes.daily.previous
    social__hour.textContent = data[4].timeframes.daily.current 
    social__week.textContent = data[4].timeframes.daily.previous
    self__hour.textContent = data[5].timeframes.daily.current 
    self__week.textContent = data[5].timeframes.daily.previous
}

function updateContentWeekly(data) {
    work__hour.textContent = data[0].timeframes.weekly.current 
    work__week.textContent = data[0].timeframes.weekly.previous
    play__hour.textContent = data[1].timeframes.weekly.current 
    play__week.textContent = data[1].timeframes.weekly.previous
    study__hour.textContent = data[2].timeframes.weekly.current 
    study__week.textContent = data[2].timeframes.weekly.previous
    excercise__hour.textContent = data[3].timeframes.weekly.current 
    excercise__week.textContent = data[3].timeframes.weekly.previous
    social__hour.textContent = data[4].timeframes.weekly.current 
    social__week.textContent = data[4].timeframes.weekly.previous
    self__hour.textContent = data[5].timeframes.weekly.current 
    self__week.textContent = data[5].timeframes.weekly.previous
}

function updateContentMonthly(data) {
    work__hour.textContent = data[0].timeframes.monthly.current 
    work__week.textContent = data[0].timeframes.monthly.previous
    play__hour.textContent = data[1].timeframes.monthly.current 
    play__week.textContent = data[1].timeframes.monthly.previous
    study__hour.textContent = data[2].timeframes.monthly.current 
    study__week.textContent = data[2].timeframes.monthly.previous
    excercise__hour.textContent = data[3].timeframes.monthly.current 
    excercise__week.textContent = data[3].timeframes.monthly.previous
    social__hour.textContent = data[4].timeframes.monthly.current 
    social__week.textContent = data[4].timeframes.monthly.previous
    self__hour.textContent = data[5].timeframes.monthly.current 
    self__week.textContent = data[5].timeframes.monthly.previous
}

export {updateContentDaily, updateContentWeekly, updateContentMonthly}