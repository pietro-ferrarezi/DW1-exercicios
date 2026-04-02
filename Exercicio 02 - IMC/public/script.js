function calcular() {
    let peso = document.querySelector("#kg").value
    let altura = document.querySelector("#m").value

    if (!peso || !altura) {
        return alert("Adicione todas as informações!")
    }

    peso = peso.replace(",", ".")
    altura = altura.replace(",", ".")

    if (!peso > 0 || !altura > 0) {
        return alert("Dados inválidos")
    }

    let imc = (peso / (altura ** 2)).toFixed(1)

    document.querySelector("#result-number").innerText = imc

    let analise = ""
    if (imc < 18.5) {
        analise = "Abaixo do peso"
    } else if (imc < 24.5) {
        analise = "Peso normal"
    } else if (imc < 29.9) {
        analise = "Sobrepeso"
    } else if (imc < 34.9) {
        analise = "Obesidade 1"
    } else if (imc < 39.9) {
        analise = "Obesidade 2"
    } else if (imc > 40) {
        analise = "Obesidade 3"
    }

    document.querySelector("#result-text").innerText = analise
}