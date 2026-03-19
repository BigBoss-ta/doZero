function numberOrganizer() {
    let n1 = parseFloat(prompt("Digite o primeiro número:"));
    let n2 = parseFloat(prompt("Digite o segundo número:"));
    let n3 = parseFloat(prompt("Digite o terceiro número:"));
    let n4 = parseFloat(prompt("Digite o quarto número:"));
    let buffer = 0;
    let numbers = [n1, n2, n3, n4];

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4 - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                buffer = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = buffer;
            }
        }
    }
    alert("Os números organizados em ordem crescente são: " + numbers);
    console.log("Os números organizados em ordem crescente são: " + numbers);
}

