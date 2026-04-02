function calcBhaskara() {
    let a = document.querySelector("#A").value
    let b = document.querySelector("#B").value
    let c = document.querySelector("#C").value
    
    if (!a || !b || !c) {
        return alert("Preencha todos os campos para calcular")
    }
    
    let calc_delta = (b**2) - (4 * a * c)
    if (calc_delta < 0) {
        return alert("Delta é negativo, não existe raiz real")
    }

    let delta = Math.sqrt(calc_delta)

    let x1 = (-(b) + delta) / (2 * a)
    let x2 = (-(b) - delta) / (2 * a)

    document.querySelector("#x1").innerText = x1.toFixed(4)
    document.querySelector("#x2").innerText = x2.toFixed(4)
}