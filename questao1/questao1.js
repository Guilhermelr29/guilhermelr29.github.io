var fatorial = prompt("Digite um número: ");
var resultadoFinal = fatorial;
for (var i = 1; i < fatorial; i++) {
    resultadoFinal *= i;
}
document.write("O resultado do Fatorial é: "+resultadoFinal);
