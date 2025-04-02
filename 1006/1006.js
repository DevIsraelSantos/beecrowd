try {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch {
    var input = require('fs').readFileSync('./1006/input.txt', 'utf8');
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
    a: 2,
    b: 3,
    c: 5,
}

const a = get('n') * pesos.a / 10
const b = get('n') * pesos.b / 10
const c = get('n') * pesos.c / 10


console.log(`MEDIA = ${(a + b + c).toFixed(1)}`)