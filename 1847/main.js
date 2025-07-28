try {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
} catch {
  var input = require("fs").readFileSync("./src/main.txt", "utf8");
  input = input.replace("\r\n", "\n");
}
var lines = input.trim().split("\n");

function Bom() {
  console.log(":)");
}

function Ruim() {
  console.log(":(");
}

function main() {
  const [d1, d2, d3] = lines.shift().split(" ").map(Number);

  const v1 = d2 - d1;
  const v2 = d3 - d2;

  // Case1: Desceu e manteve/subiu: bom
  if (v1 < 0 && v2 >= 0) {
    return Bom();
  }

  // Case 2: Subiu e desceu/manteve: ruim
  if (v1 > 0 && v2 <= 0) {
    return Ruim();
  }

  // Case 3 e 4:
  //  Se a temperatura subiu do 1º para o 2º dia e do 2º para o 3º,
  if (v1 > 0 && v2 > 0) {
    //  mas subiu do 2º para o 3º menos do que subira do 1º para o 2º, as pessoas ficam tristes (terceira figura).
    if (v2 < v1) return Ruim();

    //  mas subiu do 2º para o 3º no mínimo o tanto que subira do 1º para o 2º, as pessoas ficam felizes (quarta figura).
    return Bom();
  }

  // Case 5 e 6:
  // Se a temperatura desceu do 1º para o 2º dia e do 2º para o 3º,
  if (v1 < 0 && v2 < 0) {
    // mas desceu do 2º para o 3º menos do que descera do 1º para o 2º, as pessoas ficam felizes (quinta figura).
    if (v2 > v1) return Bom();

    // mas desceu do 2º para o 3º no mínimo o tanto que descera do 1º para o 2º, as pessoas ficam tristes (sexta figura).
    return Ruim();
  }

  // Case 7: mantem, subiu
  //  Se a temperatura permaneceu constante do 1º para o 2º dia
  if (v1 === 0) {
    //  as pessoas ficam felizes se subiu do 2º para o 3º dia ou tristes caso contrário (respectivamente, sétima e oitava figuras).
    if (v2 > 0) return Bom();
  }
  return Ruim();
}

main();
