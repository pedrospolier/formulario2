const formulario = document.getElementById('formulario');
const tabela = document.getElementById('tabela-contatos').querySelector('tbody')

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

const nome = document.getElementById('nome').value.trim();
const telefone = document.getElementById('telefone').value.trim();

if (nome && telefone) {
    const novaLinha = tabela.insertRow()

    const celulaNome = novaLinha.insertCell(0);

    const celulaTelefone = novaLinha.insertCell(1);

    celulaNome.textContent = nome;

    celulaTelefone.textContent = telefone;

    formulario.reset();
}
});

