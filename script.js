import Countdown from './contdown.js'

const dataDia = document.querySelector('.day')
const dataHora = document.querySelector('.hours')
const dataMin = document.querySelector('.minutes')
const dataSec = document.querySelector('.seconds')

const diasBF = new Countdown('13 November 2022 23:59:59 GMT-0300')

console.log(diasBF.total);
setInterval(() => {
    dataDia.innerText = diasBF.total.days
    dataHora.innerText = diasBF.total.hours
    dataMin.innerText = diasBF.total.minutes
    dataSec.innerText = diasBF.total.seconds
}, 1000)
