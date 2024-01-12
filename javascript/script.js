
document.getElementById("calcular").addEventListener("click", function () {
    const num = document.getElementById("factorial");
    const resultFactorial = document.getElementById("result");
    const btn = document.getElementById("btn");
    const calculaFactorial = parseInt(num.value);
    if (isNaN(calculaFactorial)) {
        alert("Por favor, introduce un valor válido");
    } else {
    let fact = 1;
    for (let i = 1; i <= num.value; i++) {
        fact = fact * i;
        document.getElementById("result").innerHTML = fact;
    }
    }
    
});


