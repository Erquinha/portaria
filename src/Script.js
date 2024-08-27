const registros = [];


function registrarEntrada() {
    const aluno = document.getElementById('aluno').value;
    if (aluno) {
        const hora = new Date().toLocaleTimeString();
        registros.push({ aluno, entrada: hora });
        atualizarRegistros();
    } else {
        alert('Por favor, digite o nome do aluno.');
    }
}

// Função para registrar a saída
function registrarSaida() {
    const aluno = document.getElementById('aluno').value;
    if (aluno) {
        const hora = new Date().toLocaleTimeString();
        const registro = registros.find(r => r.aluno === aluno && !r.saida);
        if (registro) {
            registro.saida = hora;
        } else {
            alert('Entrada não registrada ou aluno não encontrado.');
        }
        atualizarRegistros();
    } else {
        alert('Por favor, digite o nome do aluno.');
    }
}


