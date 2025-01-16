let num = document.getElementById('numero')
let lista = document.getElementById('flista')
let res = document.getElementById('resultado')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    }else if(!isNumero(num.value)){
        window.alert('Valor inválido!')
    }else{
        window.alert('Valor já encontrado na lista!')
    }    
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    }else {
        let  tot = valores.length
        let soma = 0
        let media =0

        for (let i in valores) {
            soma += valores[i]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Quantidade de valores adicionados: ${tot}</p>`
        res.innerHTML += `<p>O Maior valor foi: ${Math.max(...valores)}</p>`
        res.innerHTML += `<p>O Menor valor foi: ${Math.min(...valores)}</p>`
        res.innerHTML += `<p>A soma de todos os valores foi: ${soma}</p>`
        res.innerHTML += `<p>A media de todos os valores foi: ${media}</p>`
    }
}