try {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch {
    var input = require('fs').readFileSync('./1008/input.txt', 'utf8');
}
var lines = input.split('\n');

function get(type) {
    switch (type) {
        case 'n': return Number(lines.shift());
        case 'b': return Boolean(lines.shift() === 'true');
        default: return lines.shift();
    }
}

const func = get()
const salario = get('n') * get('n')

console.log(`NUMBER = ${func}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)