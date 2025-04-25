try {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch {
    var input = require('fs').readFileSync('./1021/input.txt', 'utf8');
}
const lines = input.split('\n')
function get(type, separador = '') {
    function convertValue(value) {
        switch (type) {
            case 'n': return Number(value);
            case 'b': return Boolean(value === 'true');
            default: return value;
        }
    }
    let line = lines.shift()
    if (!separador || separador.toString() === 0) {
        return convertValue(line)
    }
    return line.split(separador).map(convertValue)
}

let [inteiro, centavos] = get('n', '.')

console.log('NOTAS:')
let resto = (inteiro % 100)
console.log(`${((inteiro - resto) / 100).toFixed(0)} nota(s) de R$ 100.00`)
inteiro = resto
resto = (inteiro % 50)
console.log(`${((inteiro - resto) / 50).toFixed(0)} nota(s) de R$ 50.00`)
inteiro = resto
resto = (inteiro % 20)
console.log(`${((inteiro - resto) / 20).toFixed(0)} nota(s) de R$ 20.00`)
inteiro = resto
resto = (inteiro % 10)
console.log(`${((inteiro - resto) / 10).toFixed(0)} nota(s) de R$ 10.00`)
inteiro = resto
resto = (inteiro % 5)
console.log(`${((inteiro - resto) / 5).toFixed(0)} nota(s) de R$ 5.00`)
inteiro = resto
resto = (inteiro % 2)
console.log(`${((inteiro - resto) / 2).toFixed(0)} nota(s) de R$ 2.00`)
console.log('MOEDAS:')
centavos+=(resto*100)
resto = (centavos % 100)
console.log(`${((centavos - resto) / 100).toFixed(0)} moeda(s) de R$ 1.00`)
centavos = resto
resto = (centavos % 50)
console.log(`${((centavos - resto) / 50).toFixed(0)} moeda(s) de R$ 0.50`)
centavos = resto
resto = (centavos % 25)
console.log(`${((centavos - resto) / 25).toFixed(0)} moeda(s) de R$ 0.25`)
centavos = resto
resto = (centavos % 10)
console.log(`${((centavos - resto) / 10).toFixed(0)} moeda(s) de R$ 0.10`)
centavos = resto
resto = (centavos % 5)
console.log(`${((centavos - resto) / 5).toFixed(0)} moeda(s) de R$ 0.05`)
centavos = resto
console.log(`${((centavos)).toFixed(0)} moeda(s) de R$ 0.01`)
