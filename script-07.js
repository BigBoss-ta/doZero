function menuPicole() {
    alert("Escolha o sabor do picolé: \n a. Chocolate \n b. Morango \n c. Creme \n d. Manga \n e. Melancia \n f. Vanilla Ice \n g. Céu Azul \n h. Brownie \n i. Hawaino");
    let sabor = prompt("Digite o código para saber o preço:").toLowerCase();
    switch (sabor) {
        case "a":
            alert("O preço do picolé de Chocolate é R$ 1,50.");
            break;
        case "b":
            alert("O preço do picolé de Morango é R$ 2,50.");
            break;
        case "c":
            alert("O preço do picolé de Creme é R$ 2,50.");
            break;
        case "d":
            alert("O preço do picolé de Manga é R$ 3,20.");
            break;
        case "e":
            alert("O preço do picolé de Melancia é R$ 3,40.");
            break;
        case "f":
            alert("O preço do picolé de Vanilla Ice é R$ 3,00.");
            break;
        case "g":
            alert("O preço do picolé de Céu Azul é R$ 3,60.");
            break;
        case "h":
            alert("O preço do picolé de Brownie é R$ 4,00.");
            break;
        case "i":
            alert("O preço do picolé de Hawaino é R$ 5,00.");
            break;
        default:
            alert("Sabor não encontrado.");
    }
}