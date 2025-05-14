document.querySelector('button').addEventListener('click', () => {
    let numero1 = document.querySelector('#numero1').value;
    let numero2 = document.querySelector('#numero2').value;
    let numero3 = document.querySelector('#numero3').value;

    const mensagem = document.querySelector('span');

    if(numero1 < 1 || numero2 < 1 || numero3 < 1) {
        mensagem.innerHTML = 'Somente números positivos são válidos!';
    } else {
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        numero3 = parseInt(numero3);

        let numero4 = 0;
        let numero5 = 0;
        let numero6 = 0;
        let numero7 = 0;
        let numero8 = 0;

        let diferenca = numero3 - numero2;
        let razao = numero3 / numero2;

        if(diferenca == numero2 - numero1) {
            numero4 = numero3 + diferenca;
            numero5 = numero4 + diferenca;
            numero6 = numero5 + diferenca;
            numero7 = numero6 + diferenca;
            numero8 = numero7 + diferenca;
            progressao = 'aritmética';
        } else if(razao == numero2 / numero1) {
            numero4 = numero3 * razao;
            numero5 = numero4 * razao;
            numero6 = numero5 * razao;
            numero7 = numero6 * razao;
            numero8 = numero7 * razao;
            progressao = 'geométrica';
        } else {
            numero4 = numero3 + numero2;
            numero5 = numero4 + numero3;
            numero6 = numero5 + numero4;
            numero7 = numero6 + numero5;
            numero8 = numero7 + numero6;
            progressao = 'personalizada';
        }

        mensagem.innerHTML = `A sequência é uma progressão ${progressao}: ${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}, ${numero6}, ${numero7} e ${numero8}.`
    }
});