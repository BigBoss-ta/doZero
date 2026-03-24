function folhaDePagamento() {
    let nome = prompt("Nome do funcionário:");
    let salario = parseFloat(prompt("Salário Bruto:"));

    if (!isNaN(salario)) {
        let inss = salario * 0.08;
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