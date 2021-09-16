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