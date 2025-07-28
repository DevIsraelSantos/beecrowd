const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const problem = parseInt(args[0], 10);

if (isNaN(problem)) {
  console.log("Fornecer um número válido do problema");
  process.exit(1);
}

console.log(`Iniciado deploy do problema ${problem}`);

const problemDir = path.join(__dirname, `${problem}`);
const demoDir = path.join(__dirname, "demo");
const srcDir = path.join(__dirname, "src");

// 1. Copiar tudo de src/ para ./<problema>/
if (!fs.existsSync(problemDir)) {
  fs.mkdirSync(problemDir, { recursive: true });
}

fs.readdirSync(srcDir).forEach((file) => {
  const srcFilePath = path.join(srcDir, file);
  const destFilePath = path.join(problemDir, file);
  fs.copyFileSync(srcFilePath, destFilePath);
});

console.log(`Arquivos copiados de src/ para a pasta do problema ${problem}`);

// 2. Restaurar src/ com os arquivos de demo
fs.readdirSync(demoDir).forEach((file) => {
  const demoFilePath = path.join(demoDir, file);
  const destFilePath = path.join(srcDir, file);
  fs.copyFileSync(demoFilePath, destFilePath);
});
console.log(`src: restaurado com os arquivos`);

// 3. Commit a pasta do problema
const { execSync } = require("child_process");
execSync(`git add ${problemDir}`);
execSync(`git commit -m "${problem}"`);
console.log(`Commit realizado para o problema ${problem}`);
