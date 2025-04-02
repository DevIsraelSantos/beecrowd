try {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch {
    var input = require('fs').readFileSync('./1015/input.txt', 'utf8');
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

function CalcDistancia2Pontos(p1, p2) {
    // {x:1, y:1}, {x:1, y:1}
    return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2))
}


const [x1, y1] = get('n', ' ')
const [x2, y2] = get('n', ' ')

const distancia = CalcDistancia2Pontos({
    x: x1,
    y: y1
}, {
    x: x2,
    y: y2

})

console.log(`${distancia.toFixed(4)}`)