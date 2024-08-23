// Armazena os registros
const registros = [];

// Função para registrar a entrada
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

// Atualiza a lista de registros no HTML
function atualizarRegistros() {
    const lista = document.getElementById('registros');
    lista.innerHTML = '';
    registros.forEach(registro => {
        const li = document.createElement('li');
        li.textContent = `Aluno: ${registro.aluno}, Entrada: ${registro.entrada}, Saída: ${registro.saida || 'Não registrada'}`;
        lista.appendChild(li);
    });
}
