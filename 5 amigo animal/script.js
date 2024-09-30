

function mostrarFormulario(event) {
    event.preventDefault();
    var formulario = document.getElementById('formularioContato');
    formulario.style.display = 'block';
    window.scrollTo({
        top: formulario.offsetTop - 20,
        behavior: 'smooth'
    });
}


function enviarFormulario(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensagem = document.getElementById('mensagem').value.trim();

    if (nome && email && mensagem) {
        alert('Consulta agendada com sucesso! Entraremos em contato em breve.');
        document.getElementById('formularioContato').reset();
        document.getElementById('formularioContato').style.display = 'none';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.botao-agendar').addEventListener('click', mostrarFormulario);
    document.getElementById('formularioContato').addEventListener('submit', enviarFormulario);
});
