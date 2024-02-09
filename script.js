function calcularFactorial() {
let numero;
do {
    let input = prompt("Introduce un número para calcular su factorial:");
    numero = parseFloat(input);
    if (isNaN(numero)) {
    alert("Por favor, introduce un número válido.");
    }
} while (isNaN(numero));

let factorial = 1;
for (let i = 1; i <= numero; i++) {
    factorial *= i;
}

prompt( "El factorial de ${numero} es:", factorial);

}

calcularFactorial();