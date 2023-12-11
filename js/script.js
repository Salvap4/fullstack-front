
function showAlert(x) {
    document.getElementById(x).style.backgroundColor = "red";
}


document.getElementById("formulario01").addEventListener("submit",
    function(event) {
        if(document.getElementById("nombre").value == "" && document.getElementById("apellidos").value == "") {
           showAlert("nombre");
           showAlert("apellidos");
            event.preventDefault();
        }

        else if (document.getElementById("nombre").value == "") {
            showAlert("nombre");
            event.preventDefault();
        }

        else if (document.getElementById("apellidos").value == "") {
            showAlert("apellidos");
            event.preventDefault();
        }
    }
);