try {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
} catch {
  var input = require("fs").readFileSync("./src/main.txt", "utf8");
  input = input.replace("\r\n", "\n");
}
var lines = input.trim().split("\n");

const [dividendo, divisor] = lines.shift().split(" ").map(Number);

let resto = dividendo % divisor;

if (resto < 0) {
  if (divisor < 0) resto += divisor * -1;
  else resto += divisor;
}

const quociente = (dividendo - resto) / divisor;

console.log(`${quociente} ${resto}`);
