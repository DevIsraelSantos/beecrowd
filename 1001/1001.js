try{
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
}catch{
    var input = require('fs').readFileSync('./1001/input.txt', 'utf8');
}
var lines = input.split('\n');


const a = Number(lines.shift());
const b = Number(lines.shift());
console.log(`X = ${a + b}`)