try {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
} catch {
  var input = require("fs").readFileSync("./src/main.txt", "utf8");
  input = input.replace("\r\n", "\n");
}
var lines = input.trim().split("\n");

const inicial = lines.shift();
const num = Number(inicial);
if (num === 0 && inicial.startsWith("-")) {
  console.log("-0.0000E+00");
} else {
  const [mantissa, exp] = num.toExponential(4).split("e"); // 4 casas decimais após o ponto
  const sinal = num < 0 ? "-" : "+";
  const expoente = parseInt(exp < 0 ? -exp : exp)
    .toString()
    .padStart(2, "0");
  const expoenteSinal = parseInt(exp) >= 0 ? "+" : "-";

  console.log(
    `${sinal}${Math.abs(Number(mantissa)).toFixed(4)}E${expoenteSinal}${expoente
      .toString()
      .padStart(2, "0")}`
  );
}
