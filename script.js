const dia = document.getElementById('dia')
const horas = document.getElementById('horas')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const dataInicio = '01 dec 2023'

function countdown() {
    const primDia = new Date(dataInicio)
    const hoje = new Date()

    const segTotal = (primDia - hoje) / 1000

    const finalDias = Math.floor(segTotal / 60 / 60 / 24)
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24
    const finalMinutos = Math.floor(segTotal / 60) % 60
    const finalSegundos = Math.floor(segTotal) % 60

    dia.innerHTML = finalDias
    horas.innerHTML = finalHoras
    minuto.innerHTML = finalMinutos
    segundo.innerHTML = finalSegundos
}

countdown()
setInterval(countdown, 1000)