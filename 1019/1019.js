try {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch {
    var input = require('fs').readFileSync('./1019/input.txt', 'utf8');
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

const value = get()

let resto = (value % 3600)
const horas = (value - resto) / 3600

let segundos = (resto % 60)
const minutos = (resto - segundos) / 60

console.log(`${horas}:${minutos}:${segundos}`)