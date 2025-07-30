try {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
} catch {
  var input = require("fs").readFileSync("./src/main.txt", "utf8");
  input = input.replace("\r\n", "\n");
}
var lines = input.trim().split("\n");

function main() {
  const paginas = Number(lines.shift());

  const numeros = {
    0: { centena: "", dezena: "", unidade: "" },
    1: { centena: "C", dezena: "X", unidade: "I" },
    2: { centena: "CC", dezena: "XX", unidade: "II" },
    3: { centena: "CCC", dezena: "XXX", unidade: "III" },
    4: { centena: "CD", dezena: "XL", unidade: "IV" },
    5: { centena: "D", dezena: "L", unidade: "V" },
    6: { centena: "DC", dezena: "LX", unidade: "VI" },
    7: { centena: "DCC", dezena: "LXX", unidade: "VII" },
    8: { centena: "DCCC", dezena: "LXXX", unidade: "VIII" },
    9: { centena: "CM", dezena: "XC", unidade: "IX" },
  };

  if (paginas === 1000) {
    return numeros.mil;
  }

  const [centena, dezena, unidade] = paginas
    .toString()
    .padStart(3, "0")
    .split("")
    .map(Number);

  return `${numeros[centena].centena}${numeros[dezena].dezena}${numeros[unidade].unidade}`;
}

console.log(main());
