try {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
} catch {
  var input = require("fs").readFileSync("./src/main.txt", "utf8");
  input = input.replace("\r\n", "\n");
}
var lines = input.trim().split("\n");

function game(setGame) {
  const [Sheldon, Raj] = lines.shift().toLowerCase().split(" ");

  const sequencia = { tesoura: 0, papel: 1, pedra: 2, lagarto: 3, spock: 4 };

  const shadonNumber = sequencia[Sheldon];
  const rajNumber = sequencia[Raj];

  if (shadonNumber === rajNumber) {
    console.log(`Caso #${setGame}: De novo!`);
    return;
  }

  if ([(shadonNumber + 1) % 5, (shadonNumber + 3) % 5].includes(rajNumber)) {
    console.log(`Caso #${setGame}: Bazinga!`);
    return;
  }
  console.log(`Caso #${setGame}: Raj trapaceou!`);
  return;
}

let games = Number(lines.shift());

let currentGame = 1;
while (currentGame <= games) {
  game(currentGame++);
}
