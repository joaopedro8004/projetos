function myfunction() {
    var x = document.getElementById("nav-links");
    x.classList.toggle("show");  // Adiciona ou remove a classe "show"

    var y = document.getElementById("content")
    y.classList.toggle("active")

}


function formAutoSubmit() {

    var frm = document.getElementById("formu");

    frm.submit();

}

window.onload = formAutoSubmit;