try {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch {
    var input = require('fs').readFileSync('./1018/input.txt', 'utf8');
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

let value = get()
console.log(value)
let resto = (value % 100)
console.log(`${((value - resto) / 100).toFixed(0)} nota(s) de R$ 100,00`)
value = resto
resto = (value % 50)
console.log(`${((value - resto) / 50).toFixed(0)} nota(s) de R$ 50,00`)
value = resto
resto = (value % 20)
console.log(`${((value - resto) / 20).toFixed(0)} nota(s) de R$ 20,00`)
value = resto
resto = (value % 10)
console.log(`${((value - resto) / 10).toFixed(0)} nota(s) de R$ 10,00`)
value = resto
resto = (value % 5)
console.log(`${((value - resto) / 5).toFixed(0)} nota(s) de R$ 5,00`)
value = resto
resto = (value % 2)
console.log(`${((value - resto) / 2).toFixed(0)} nota(s) de R$ 2,00`)
console.log(`${(resto).toFixed(0)} nota(s) de R$ 1,00`)