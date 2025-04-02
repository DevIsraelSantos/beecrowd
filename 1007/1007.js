try {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch {
    var input = require('fs').readFileSync('./1007/input.txt', 'utf8');
}
var lines = input.split('\n');

function get(type) {
    switch (type) {
        case 'n': return Number(lines.shift());
        case 'b': return Boolean(lines.shift() === 'true');
        default: return lines.shift();
    }
}

const a = get('n')
const b = get('n')
const c = get('n')
const d = get('n')

const DIFERENCA = ((a * b) - (c * d))
console.log(`DIFERENCA = ${DIFERENCA}`)