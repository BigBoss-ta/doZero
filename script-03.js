function balancoFinanceiro() {
    let totalGanho = 0;
    let gastoTotal = 0;

    for (let i = 0; i < 12; i++) {
        let ganhoBruto = parseFloat(prompt("Coloque o ganho bruto do mês " + (i + 1) + ":"));
        totalGanho += ganhoBruto;
        let gasto = parseFloat(prompt("Coloque o gasto do mês " + (i + 1) + ":"));
        gastoTotal += gasto;
    }
    alert("O total ganho bruto no ano foi: " + totalGanho);
    alert("O total gasto no ano foi: " + gastoTotal);
    console.log("O total ganho bruto no ano foi: " + totalGanho);
    console.log("O total gasto no ano foi: " + gastoTotal);

    if (totalGanho > gastoTotal) {
        alert("O lucro anual foi: " + (totalGanho - gastoTotal));
        console.log("O lucro anual foi: " + (totalGanho - gastoTotal));
    } else if (gastoTotal > totalGanho) {
        alert("O prejuízo anual foi: " + (gastoTotal - totalGanho));
        console.log("O prejuízo anual foi: " + (gastoTotal - totalGanho));
    }
}

