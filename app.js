function adicionandoApostas() {
  const nome = prompt("Qual o seu nome? ");
  const aposta = parseFloat(prompt("Quanto você quer apostar? "));
  apostadores[nome] = aposta;
}
function verificandoVencedor(aposta) {
  maiorAposta = 0;
  vencedor = "";
  for (let nome in apostadores) {
    if (aposta[nome] > maiorAposta) {
      maiorAposta = aposta[nome];
      vencedor = nome;
    }
  }
  console.log(`O vencedor foi ${vencedor}, com a aposta de ${maiorAposta}.`);
}

const apostadores = {};
adicionandoApostas();
let programaOn = true;

while (programaOn == true) {
  const maisApostas = prompt("Tem mais apostadores? ").toLowerCase();
  if (maisApostas == "sim" || maisApostas == "s") {
    adicionandoApostas();
  } else {
    verificandoVencedor(apostadores);
    programaOn = false;
  }
}
