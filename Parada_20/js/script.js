function calcularMedia() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    exibirResultado("Por favor, informe todas as notas corretamente.");
    return;
  }

  if (nota1 < 1 || nota1 > 10 || nota2 < 1 || nota2 > 10 || nota3 < 1 || nota3 > 10) {
    exibirResultado("As notas devem estar no intervalo de 1 a 10.");
    return;
  }

  var media = (nota1 + nota2 + nota3) / 3;

  var situacao;
  if (media >= 6) {
    situacao = "Aprovado";
  } else {
    situacao = "Reprovado";
  }

  exibirResultado("Média: " + media.toFixed(2) + " - " + situacao);
}

function exibirResultado(mensagem) {
  document.getElementById("resultado").innerHTML = mensagem;
}