try {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch {
    var input = require('fs').readFileSync('./1004/input.txt', 'utf8');
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
console.log(`PROD = ${a * b}`)