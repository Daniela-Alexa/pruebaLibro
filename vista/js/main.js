$(document).ready(function(){
    cargarAutor();

$("#btnRegitrar").click(function(){

var titulo = $("#txttitulo").val();
var descripcion = $("#txtdescripcion").val();
var autor = $("#selectAutor").val();

var objData = new FormData();

objData.append("titulo",titulo);
objData.append("descripcion",descripcion);
objData.append("autor", autor);


$.ajax({

url: "control/librosControl.php",
type: "post",
dataType: "json",
data:objData,
cache: false,
contentType:false,
processData:false,
success: function(respuesta){

    swal({
        title: "Buen Trabajo!",
        text: "registrado correctamente",
        icon: "success",
        button: "Aceptar",
    });

}
})
})


function cargarAutor() {
    
var cargarAutor = "ok";
var objDatacargarAutor = new FormData();

objDatacargarAutor.append("cargarAutor", cargarAutor)

$.ajax({

    url: "control/librosControl.php",
    type: "post",
    dataType: "json",
    data:objDatacargarAutor,
    cache: false,
    contentType:false,
    processData:false,
    success: function(respuesta){
    
       $("#selectAutor").html("");
       respuesta.forEach(cargarSeletAutor);


       function cargarSeletAutor(item, index) {
           $("#selectAutor").append(' <option value="'+ item.idAutor+'">'+item.nombre + item.apellido+'</option>');
       }
    
    }
    })



}

function cargarAutor() {}






})