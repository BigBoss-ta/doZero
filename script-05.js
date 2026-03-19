function parOuImpar() {
    let n1 = parseFloat(prompt("Digite um numero inteiro:"));
    let eviln1 = 0;

    if (!isNaN(n1)) {
        if (n1 % 2 === 0) {
            alert("O número é par.");
            eviln1 = n1 + 1;
            alert("Agora não é mais -->" + eviln1);
            console.log(eviln1);
        } else {
            alert("O número é ímpar.");
            eviln1 = n1 + 1;
            alert("Agora não é mais -->" + eviln1);
            console.log(eviln1);
        }
    } else {
        alert("Por favor, digite um número válido.");
    }
}
