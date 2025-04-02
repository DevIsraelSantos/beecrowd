try {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch {
    var input = require('fs').readFileSync('./1002/input.txt', 'utf8');
}
var lines = input.split('\n');

function get(type) {
    switch (type) {
        case 'n': return Number(lines.shift());
        case 'b': return Boolean(lines.shift() === 'true');
        default: return lines.shift();
    }
}

const pi = 3.14159
const raio = get('n')
const area = pi * raio * raio
console.log(`A=${area.toFixed(4)}`)