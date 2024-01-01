
function showAlert(x) {
    document.getElementById("label_"+x).style.color = "red";
}

function restore(x) {
    document.getElementById("label_"+x).style.color = "black";
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
            restore("apellidos");
            event.preventDefault();
        }

        else if (document.getElementById("apellidos").value == "") {
            showAlert("apellidos");
            restore("nombre");
            event.preventDefault();
        }
    }
);