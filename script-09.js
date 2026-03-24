function maiorParaMenor() {
    let a = Math.round(Math.random() * 100);
    let b = Math.round(Math.random() * 100);

    if (a > b) {
        alert("O valor de a (" + a + ") é maior que o valor de b (" + b + ").");
        console.log(a, b);
    } else if (b > a) {
        alert("O valor de b (" + b + ") é maior que o valor de a (" + a + ").");
        console.log(b, a);
    }
}