function duasVariaveis() {
    let a = Math.round(Math.random() * 100);
    let b = Math.round(Math.random() * 100);
    let difference = Math.abs(a - b);
    let something = (a * 2) + (b * 3);
    let mult = a * b;
    alert("Valor de a: " + a);
    alert("Valor de b: " + b);
    alert("A diferença entre a e b é: " + difference);
    alert("O resultado da expressão (a * 2) + (b * 3) é: " + something);
    alert("O resultado da multiplicação de a e b é: " + mult);
}