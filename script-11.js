function folhaDePagamento() {
    let nome = prompt("Nome do funcionário:");
    let salario = parseFloat(prompt("Salário Bruto:"));

    if (!isNaN(salario)) {
        if (salario < 1000) {
        let inss = salario * 0.08;
        } else if (salario >= 1000 && salario < 1500) {
        let inss = salario * 0.085;
        } else {
        let inss = salario * 0.09;
        }
        let salarioLiquido = salario - inss;
        alert("Funcionário: " + nome + "\nSalário Bruto: R$ " + salario.toFixed(2) + "\nDesconto INSS: R$ " + inss.toFixed(2) + "\nSalário Líquido: R$ " + salarioLiquido.toFixed(2));
        console.log("Funcionário: " + nome);
        console.log("Salário Bruto: R$ " + salario.toFixed(2));
        console.log("Desconto INSS: R$ " + inss.toFixed(2));
        console.log("Salário Líquido: R$ " + salarioLiquido.toFixed(2));
    } else {
        alert("Por favor, digite um salário válido.");
    }
}