var soma = 0;
for(i = 1; i <= 1000; i++) {
	if(i % 2 === 0) {
		soma = soma + i;
	}
}
document.write(soma);