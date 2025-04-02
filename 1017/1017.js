try {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch {
    var input = require('fs').readFileSync('./1017/input.txt', 'utf8');
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

const consumo = 12 // km/l

const tempo = get('n')
const velocidade = get('n')

const value = tempo * velocidade / consumo
console.log(`${value.toFixed(3)}`)