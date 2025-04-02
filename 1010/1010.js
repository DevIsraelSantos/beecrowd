try {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch {
    var input = require('fs').readFileSync('./1010/input.txt', 'utf8');
}
var lines = input.split('\n');

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


const [c1, q1, v1] = get('n', ' ')
const [c2, q2, v2] = get('n', ' ')

const valor = (q1 * v1) + (q2 * v2)
console.log(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`)