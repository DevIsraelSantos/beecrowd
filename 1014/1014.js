try {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch {
    var input = require('fs').readFileSync('./1014/input.txt', 'utf8');
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

const distancia = get('n')
const litros = get('n')
const consumo = distancia / litros
console.log(`${consumo.toFixed(3)} km/l`)