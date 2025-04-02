try {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch {
    var input = require('fs').readFileSync('./1012/input.txt', 'utf8');
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

const [A, B, C] = get('n', ' ')

const TRIANGULO = A * C / 2
const CIRCULO = 3.14159 * C * C
const TRAPEZIO = (A + B) * C / 2
const QUADRADO = B * B
const RETANGULO = A * B

console.log(`TRIANGULO: ${TRIANGULO.toFixed(3)}`)
console.log(`CIRCULO: ${CIRCULO.toFixed(3)}`)
console.log(`TRAPEZIO: ${TRAPEZIO.toFixed(3)}`)
console.log(`QUADRADO: ${QUADRADO.toFixed(3)}`)
console.log(`RETANGULO: ${RETANGULO.toFixed(3)}`)
