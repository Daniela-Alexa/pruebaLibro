$(document).ready(function () {
    cargarAutor();
    cargarDatos();
    $("#btnRegistrar").click(function () {

        var titulo = $("#txttitulo").val();
        var descripcion = $("#txtdescripcion").val();
        var autor = $("#selectAutor").val();

        var objData = new FormData();

        objData.append("titulo", titulo);
        objData.append("descripcion", descripcion);
        objData.append("idAutor", autor);

alert(autor+titulo+descripcion);
        $.ajax({

            url: "control/librosControl.php",
            type: "post",
            dataType: "json",
            data: objData,
            cache: false,
            contentType: false,
            processData: false,
            success: function (respuesta) {

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

        objDatacargarAutor.append("cargarAutor", cargarAutor);

        $.ajax({
            url: "control/librosControl.php",
            type: "post",
            dataType: "json",
            data: objDatacargarAutor,
            cache: false,
            contentType: false,
            processData: false,
            success: function (respuesta) {

                $("#selectAutor").html("");
                respuesta.forEach(cargarSeletAutor);


                function cargarSeletAutor(item, index) {
                    $("#selectAutor").append(' <option value="' + item.idAutor + '">' + item.nombre +' '+ item.apellido + '</option>');
                }

            }
        })
    }

    function cargarDatos() {

        var cargarDatos = "ok";
        var objDatacargarDatos = new FormData();
      
        objDatacargarDatos.append("cargarDatos", cargarDatos);

        $.ajax({

            url: "control/librosControl.php",
            type: "post",
            dataType: "json",
            data: objDatacargarDatos,
            cache: false,
            contentType: false,
            processData: false,
            success:function(respuesta){
                alert("hole");
                var interface = '';
                respuesta.forEach(cargarDatosLibros);

                function cargarDatosLibros(item, index) {
                    interface += '<tr>';
                    interface += '<td>' + item.titulo + '</td>';
                    interface += '<td>' + item.descripcion + '</td>';
                    interface += '<td>' + item.idAutor + '</td>';
                    interface += '<td>';


                    interface += '<div class="btn-group">';
                    interface += '<button type="button" class="btn btn-warning" title="Editar"  id="btnEditar" idLibro="' + item.idLibro + '"  titulo="' + item.titulo + '" descripcion="' + item.descripcion + '"  idAutor="' + item.idAutor + '" data-toggle="modal" data-target="#ventanaModLibros"><span class="glyphicon glyphicon-pencil"></span></button>';
                    interface += '<button type="button" class="btn btn-danger" title="Eliminar" id="btnEliminar" idLibro="' + item.idLibro + '" ><span class="glyphicon glyphicon-remove"></span></button>';
                    interface += '</div>';
                    interface += '</td>';
                    interface += '</tr>';

                }
                $("#cuerpoTabla").html(interface);

            }
        })

    }






})