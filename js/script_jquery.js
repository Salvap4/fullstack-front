
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

    
    $("#tamano").on('change', function() {
        console.log(this.value);
        tamano = this.value;
        
        // Realizar la solicitud AJAX
        $.ajax({
            type: "POST",
            url: "http://localhost:5000/checksize",
            data: { size: tamano },
            success: function(response) {
                $('#resultado_tamano').text(response);
            }, 
        });
    });

});
