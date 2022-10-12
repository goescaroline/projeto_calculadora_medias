const form = document.getElementById('form-lista-contatos');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();   
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-telefone');

    if (telefones.includes(inputNumeroContato.value)) {
        alert(`O número ${inputNumeroContato.value} já foi cadastrado`);
        inputNomeContato.value = '';
        inputNumeroContato.value = '';
    } else {
    telefones.push(inputNumeroContato.value);
    telefones.push(parseFloat(inputNumeroContato.value));


    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;    

    inputNomeContato.value = '';
    inputNumeroContato.value = '';

}}
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}