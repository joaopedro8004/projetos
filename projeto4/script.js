function myfunction() {
    var x = document.getElementById("links-nav");
    x.classList.toggle("show");  // Adiciona ou remove a classe "show"

    var y = document.getElementById("content")
    y.classList.toggle("active")

}


function formAutoSubmit() {

    var frm = document.getElementById("formu");

    frm.submit();

}

window.onload = formAutoSubmit;

/* Função para mostrar/esconder o dropdown */
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/* Fechar o dropdown se o usuário clicar fora dele */
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
