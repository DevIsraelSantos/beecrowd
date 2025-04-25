try {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
} catch {
  var input = require("fs").readFileSync("./mdc/input.txt", "utf8");
}
const lines = input.split("\n");
function get(type, separador = "") {
  function convertValue(value) {
    switch (type) {
      case "n":
        return Number(value);
      case "b":
        return Boolean(value === "true");
      default:
        return value;
    }
  }
  let line = lines.shift();
  if (!separador || separador.toString() === 0) {
    return convertValue(line);
  }
  return line.split(separador).map(convertValue);
}
const PRIMOS = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
  157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
  239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
  331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
  421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
  509, 521, 523, 541, 547, 557, 563, 569, 577, 587, 593, 599, 601, 607, 613,
  617, 619, 631, 637, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
  709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811,
  821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
  919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997,
];

function Decompor(numero) {
  for (let index = 0; index < PRIMOS.length; index++) {
    const currentPrimo = PRIMOS[index];
    if (numero % currentPrimo !== 0) continue;
    return [currentPrimo, ...Decompor(numero / currentPrimo)];
  }
  return [];
}

function MDC(v1, v2) {
  const d1 = Decompor(v1);
  const d2 = Decompor(v2);
  const baseValues = Array.from(new Set([...d1, ...d2])).reduce((out, base) => {
    return {
      ...out,
      [base]: 0,
    };
  }, {});

  let valores1 = { ...baseValues };
  valores1 = d1.reduce((out, current) => {
    out[current] += 1;
    return out;
  }, valores1);

  let valores2 = { ...baseValues };
  valores2 = d2.reduce((out, current) => {
    out[current] += 1;
    return out;
  }, valores2);
  const resultado = Object.entries(valores1).reduce((out, v) => {
    const [base, expoente] = v.map(Number);
    const maiorExpoente = expoente > valores2[base] ? valores2[base] : expoente;

    const r = Math.pow(base, maiorExpoente);
    return out * r;
  }, 1);
  return resultado;
}

while (lines.length > 0) {
  const [a, b, resultado] = get("n", " ");
  const mmc = MDC(a, b);
  console.log({ a, b, mmc, resultado, ok: mmc === resultado });
}

// 2 > 2^1
// 6 > 2^1 * 3^1

// 2^1 * 3^1 = 6
