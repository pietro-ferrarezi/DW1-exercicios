function calc_tarifa() {
    const preco = document.querySelector("#preco")
    const diarias = document.querySelector("#diarias")
    const horas = document.querySelector("#horas")
    
    const permanencia = Number(document.querySelector("#permanencia").value)
    const veiculo_grande = document.querySelector("#veiculo_grande").checked
    const cliente_frequente = document.querySelector("#cliente_frequente").checked

    if (permanencia == 0) {
        return 0
    }

    let quant_diarias = Math.trunc(permanencia / 24)
    
    if (quant_diarias == 0) {
        let base = base_by_hours(0, permanencia)

        let total = adicionais(base, veiculo_grande, cliente_frequente)

        preco.innerText = total.toFixed(2)
        horas.innerText = permanencia
    } else {
        let horas_extras = permanencia % 24

        let base = base_by_diaries(quant_diarias)

        base += base_by_hours(1, horas_extras)

        let total = adicionais(base, veiculo_grande, cliente_frequente)

        preco.innerText = total.toFixed(2)
        horas.innerText = horas_extras
    }

    diarias.innerText = quant_diarias
}

function base_by_hours(now, hours) {
    if (hours <= 0) return 0;

    switch (now) {
        case 0:
            return 5 + (2.5 * (hours - 1));
        case 1:
            return 2.5 * hours;
        default:
            return 0;
    }
}

function base_by_diaries(diaries) {
    let base = 60 * diaries

    return base
}

function adicionais(base, vg, cf) {
    if (vg) {
        base *= 1.25
    }
    if (cf) {
        base = base - (base * 0.05)
    }

    return base
}