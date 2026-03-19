function somarNumeos() {
    letsome = 0;
    let continuar = true;

    while (continuar) {
        let numero = parseFloat(prompt("Digite um número (ou 'sair' para encerrar): "));

        if (!isNaN(numero)) {
            soma += numero;
        } else {
            alert("Por faver, digite um némro válido.");
        }
        continuar = confirm("Deseja adicionar mais números?");
    }
    alert("A soma dos números é: " + soma);
}
somarNumeros();