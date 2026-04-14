let quantidades = [[22, 0], [26, 0], [29, 0], [5, 0], [8, 0]]

document.querySelector("#cqb-q").addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[eE]/g, '')
    quantidades[0][1] = event.target.value
    increment_total()
})
document.querySelector("#cqd-q").addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[eE]/g, '')
    quantidades[1][1] = event.target.value
    increment_total()
})
document.querySelector("#xs-q").addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[eE]/g, '')
    quantidades[2][1] = event.target.value
    increment_total()
})
document.querySelector("#r350-q").addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[eE]/g, '')
    quantidades[3][1] = event.target.value
    increment_total()
})
document.querySelector("#r1-q").addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[eE]/g, '')
    quantidades[4][1] = event.target.value
    increment_total()
})

function increment_total() {
    let total = 0
    quantidades.forEach((i, index) => {
        total += quantidades[index][0] * quantidades[index][1]
        console.log(quantidades[index][0])
        console.log(quantidades[index][1])
        console.log(total)
    })
    document.querySelector("#total").innerText = total.toFixed(2)
}