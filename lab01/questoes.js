	
//1
var fatorial = prompt("Digite um número: ");
var resultadoFinal = fatorial;
for (var i = 1; i < fatorial; i++) {
    resultadoFinal *= i;
}
     document.write(resultadoFinal);

//2

for(i = 1; i <= 30; i++) {
	document.write(Math.pow(4, i));
	document.write("<br>");

}

//3 

var soma = 0;
for(i = 1; i <= 1000; i++) {
	if(i % 2 === 0) {
		soma = soma + i;
	}
}
document.write(soma);



//4
function fibonacci() {
	let num; 
	let num3 = 2;
	let num2 = 1; 
	document.write("1° = 1");
	document.write("<br> 2° = 2");
	for(i = 3; i <100; i++) {
		num = num3 + num2; 
		num2 = num3; 
		num3 = num; 
		document.write("<br>"+i+"° = "+numero);
	}
}

//5
function numerosPrimos() {
	let cont;
	for(i = 2; i <= 1000; i++) {
		cont = 0; 
		for(j = 1; j <= i; j++) {
			if(i%j == 0)
				cont++;
		}
		if(cont == 2)
			document.write(i);
	}

}