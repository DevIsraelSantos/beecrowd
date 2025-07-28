try {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
} catch {
  var input = require("fs").readFileSync("./input.txt", "utf8");
}
var lines = input.trim().split("\n");

console.log("Demo", lines.shift());
