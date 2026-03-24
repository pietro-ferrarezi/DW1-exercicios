function calcBhaskara() {
    let a = document.querySelector("#A").value
    let b = document.querySelector("#B").value
    let c = document.querySelector("#C").value
 
    let delta = Math.sqrt((b**2) - (4 * a * c))

    let x1 = (-(b) + delta) / (2 * a)
    let x2 = (-(b) - delta) / (2 * a)

    document.querySelector("#x1").innerText = x1
    document.querySelector("#x2").innerText = x2
}