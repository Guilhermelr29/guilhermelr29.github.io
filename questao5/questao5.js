function numerosPrimos() {
	document.write("numeros primos");
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
