try {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
} catch {
  var input = require("fs").readFileSync("./src/main.txt", "utf8");
  input = input.replace("\r\n", "\n");
}
var lines = input.trim().split("\n");

while (lines.length > 0) {
  lines.shift();

  let nivel = 1;
  const competidores = lines.shift().split(" ").map(Number);

  for (const comp of competidores) {
    if (comp >= 20) {
      nivel = 3;
      break;
    }

    if (comp >= 10) {
      nivel = 2;
    }
  }
  console.log(nivel);
}
