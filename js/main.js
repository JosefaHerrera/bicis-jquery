//index.html validar form.
//Expresión para validar un correo electrónico expresiones regulares
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;


function validateForm(){
    /* Escribe tú código aquí */
        // al hacer click en el btn-enviar, empezará a validar el formulario
    $("#btn-enviar").click(function(){
    var nombre = $("#name").val();
    var apellido = $("#lastname").val();
    var correo = $("#input-email").val();
    var pwd = $("#input-password").val();
    var largoPass = pwd.length;
    //fadeIn(); hace un tipo de animacion de opacidad 0% a 100%
    if(nombre == ""){
        $("#mensaje1").fadeIn("slow");
        ////al tener el valor false , es que no esta validando el contenido como lo hace true.
            return false;
        }else{
        //fadeOut(); hace un tipo de animacion de opacidad 100% a 0%
              $("#mensaje1").fadeOut();
             }if(apellido == "" ){
                    $("#mensaje2").fadeIn("slow");
                    return false;
                }
                else{
                    $("#mensaje2").fadeOut();
                    if(correo == "" || !expr.test(correo)){
                        $("#mensaje3").fadeIn("slow");
                        ////al tener el valor false , es que no esta validando el contenido como lo hace true.
                        return false;
                     }else{
                        $("#mensaje3").fadeOut();
                        if( pwd == ""){
                            $("#mensaje4").fadeIn("slow");
                        }else if(largoPass < 6 || pwd == 123456 || pwd == 098765 || pwd == 'password'){
                            $("#mensaje4").fadeOut();
                            $("#mensaje5").fadeIn("slow");
                        }else{
                            $("#mensaje5").fadeOut();
                            $("#mensaje4").fadeOut();
                        }
                     }
                }
    });
}

