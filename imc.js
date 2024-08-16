const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome === '' || altura === '' || peso === '') {
        resultado.textContent = 'Preencha todos os campos!!!';
        return;
    }

    altura = +altura;
    const peso1 = +peso;

    if (altura > 3) {
        altura /= 100;
    }

    const valorIMC = (peso1 / (altura * altura)).toFixed(1);

    let classificacao = '';

    if (valorIMC < 18.5) {
        classificacao = 'abaixo do peso.';
    } else if (valorIMC < 25) {
        classificacao = 'com peso ideal. Parabéns!!!';
    } else if (valorIMC < 30) {
        classificacao = 'levemente acima do peso.';
    } else if (valorIMC < 35) {
        classificacao = 'com obesidade grau 1.';
    } else if (valorIMC < 40) {
        classificacao = 'com obesidade grau 2';
    } else {
        classificacao = 'com obesidade grau 3. Cuidado!!!';
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

}

calcular.addEventListener('click', imc);