let quantidades = [[22, 0], [26, 0], [29, 0], [5, 0], [8, 0]]

document.querySelectorAll("input[data-index]").forEach(input => {
    input.addEventListener("input", (event) => {
        const el = event.target
        const value = el.value.replace(/[eE]/g, '')
        el.value = value

        const index = el.dataset.index
        quantidades[index][1] = Number(value) || 0

        increment_total()
    })
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