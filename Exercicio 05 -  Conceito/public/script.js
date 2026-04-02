function print_output(ma, conc, message) {
    const ra = document.querySelector("#i-ra").value
    const nome = document.querySelector("#i-nome").value
    const n1 = document.querySelector("#i-n1").value
    const n2 = document.querySelector("#i-n2").value
    const n3 = document.querySelector("#i-n3").value
    const n4 = document.querySelector("#i-n4").value
    const me = document.querySelector("#i-me").value

    print("#o-ra", ra)
    print("#o-nome", nome)
    print("#o-n1", n1)
    print("#o-n2", n2)
    print("#o-n3", n3)
    print("#o-n4", n4)
    print("#o-me", me)
    print("#o-ma", ma)
    print("#o-conceito", conc)
    print("#o-resultado", message)

}

function print(element, value) {
    document.querySelector(element).innerText = value
}

function calcular() {
    let ma = calc_ma()
    let conc = calc_conc(ma)
    let message = calc_finalResult(conc)

    print_output(ma, conc, message)
}

function calc_ma() {
    const n1 = parseFloat(document.querySelector("#i-n1").value)
    const n2 = parseFloat(document.querySelector("#i-n2").value)
    const n3 = parseFloat(document.querySelector("#i-n3").value)
    const n4 = parseFloat(document.querySelector("#i-n4").value)
    const me = parseFloat(document.querySelector("#i-me").value)

    if (!n1 || isNaN(n1)) {
        document.querySelector("#i-n1").focus()
        return alert("Nota 1 inválida!")
    }
    if (!n2 || isNaN(n2)) {
        document.querySelector("#i-n2").focus()
        return alert("Nota 2 inválida!")
    }
    if (!n3 || isNaN(n3)) {
        document.querySelector("#i-n3").focus()
        return alert("Nota 3 inválida!")
    }
    if (!n4 || isNaN(n2)) {
        document.querySelector("#i-n4").focus()
        return alert("Nota 4 inválida!")
    }
    if (!me || isNaN(me)) {
        document.querySelector("#i-me").focus()
        return alert("Média dos exercícios inválida!")
    }

    // MA = (Nota1 + Nota2 x 2 + Nota3 x 3 + Nota4 x 4 + ME )/11

    ma = (n1 + (n2 * 2) + (n3 * 3) + (n4 * 4) + me) / 11

    return ma.toFixed(1)
}

function calc_conc(ma) {
    let conc = ""
    if (ma<4.0) {
        conc = "E"
    } else if (ma<6.0) {
        conc = "D"
    } else if (ma<7.5) {
        conc = "C"
    } else if (ma<9.0) {
        conc = "B"
    } else {
        conc = "A"
    }

    return conc
}

function calc_finalResult(conc) {
    let message = ""
    if (conc == "A" || conc == "B" || conc == "C") {
        message = "Aprovado"
    } else {
        message = "Reprovado"
    }
    return message
}