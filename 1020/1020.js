try {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch {
    var input = require('fs').readFileSync('./1020/input.txt', 'utf8');
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

const value = get()

let resto = (value % 365)
const ano = (value - resto) / 365

let dia = (resto % 30)
const mes = (resto - dia) / 30
console.log(`${ano} ano(s)`)
console.log(`${mes} mes(es)`)
console.log(`${dia} dia(s)`)




