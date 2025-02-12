let notas = []

function adicionarNota(){
    let notaInput = document.getElementById("nota").value.trim();

    if(notaInput === ""){
        alert(`Por favor, insira uma nota.`);
        return 0;
    }

    notaInput = notaInput.replace(",", ".");

    let nota = parseFloat(notaInput);

    if(isNaN(nota) || nota < 0 || nota > 10){
        alert(`A nota digitada é inválida, por favor insira uma nota válida.`);
        return 0;
    }

    notas.push(nota);

    let area = document.getElementById("area");
    area.value = "";
    
    notas.forEach((valor, index) => {
        area.value += `A nota ${index + 1} foi ${valor.toFixed(2)}\n`;
    });

    document.getElementById("nota").value = "";
}

function calcularMedia(){
    if(notas.length === 0){
        alert(`Por favor, insira uma nota.`);
        return 0;
    }
    let soma = 0;
    for(let i = 0; i < notas.length; i++){
        soma += notas[i];
    }

    let media = soma/notas.length;
    document.getElementById("resultado").textContent = `A média é: ${media.toFixed(2)}`;

}

