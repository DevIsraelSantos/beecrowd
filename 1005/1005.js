try {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch {
    var input = require('fs').readFileSync('./1005/input.txt', 'utf8');
}
var lines = input.split('\n');

function get(type) {
    switch (type) {
        case 'n': return Number(lines.shift());
        case 'b': return Boolean(lines.shift() === 'true');
        default: return lines.shift();
    }
}

const pesos = {
    a: 3.5,
    b: 7.5
}

const a = get('n') * pesos.a / 10
const b = get('n') * pesos.b / 10

const pontos = a + b
const nota = pontos * 10 / 11

console.log(`MEDIA = ${nota.toFixed(5)}`)