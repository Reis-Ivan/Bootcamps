function comparaNumeros(num1, num2) {

    if (!num1 || !num2) return 'Defina dois números';

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {

    let saoIguais = '';

    if (num1 !== num2 ? saoIguais = ' não' : saoIguais = '');

    return `Os números ${num1} e ${num2}${saoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2) {

    const soma = num1 + num2;

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    let resultado10;
    let resultado20;

    if (compara10 ? resultado10 = 'maior' : resultado10 = 'menor');
    if (compara20 ? resultado20 = 'maior' : resultado20 = 'menor');

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros());  