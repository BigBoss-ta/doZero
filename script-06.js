function vogalOuConsoante() {
    let letra = prompt("Digite uma letra:").toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        console.log("A letra é uma vogal.");
        alert("A letra é uma vogal.");
    } else {
        console.log("A letra é uma consoante.");
        alert("A letra é uma consoante.");
    }
}