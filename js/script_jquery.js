
$(function() {

    function showAlert(x) {
        $("#label_" +x).css("color", "red");
    }

    function restore(x) {
        $("#label_" +x).css("color", "black");
    }

    function Comprobar_campos(){
        $("#formulario01").submit(function (event) {  
            if($("#nombre").val() == "" && $("#apellidos").val() == "") {  
                showAlert("nombre");
                showAlert("apellidos");
                event.preventDefault();  
            } else if($("#nombre").val() == "") {  
                showAlert("nombre");
                restore("apellidos");
                event.preventDefault();  
            } else if($("#apellidos").val() == "") {  
                showAlert("apellidos");
                restore("nombre");
                event.preventDefault();  
            }
        });
    }

    Comprobar_campos();
    
});
