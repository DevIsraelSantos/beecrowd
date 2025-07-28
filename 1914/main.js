try {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
} catch {
  var input = require("fs").readFileSync("./src/main.txt", "utf8");
  input = input.replace("\r\n", "\n");
}
var lines = input.trim().split("\n");

function Main() {
  const [n1, e1, n2, e2] = lines.shift().split(" ");
  const [v1, v2] = lines.shift().split(" ").map(Number);
  const ehImpar = (v1 + v2) % 2 === 1;

  const jogadorPar = e1 === "PAR" ? n1 : n2;
  const jogadorImpar = e1 === "IMPAR" ? n1 : n2;

  console.log(ehImpar ? jogadorImpar : jogadorPar);
}

let partidas = Number(lines.shift());
while (partidas--) Main();
