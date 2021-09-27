<?php

include_once "../modelo/librosModelo.php";

class libroControl{
    public $idLibro;
    public $titulo;
    public $descripcion;
    public $idAutor;

    public function ctrlRegistrarLibro(){
        $objRegistrar = libroModelo::mdlRegistrar($this->idLibro, $this->titulo,$this->descripcion, $this->idAutor);
        echo json_encode($objRegistrar);
    }

    public function ctlCargarAutor(){
        $objRespuesta = libroModelo::mdlCargarAutor();
        echo json_encode($objRespuesta);
    }
    public function ctrListar(){
        $objRespuesta =  libroModelo::mdlListar();
        return $objRespuesta;
    }
}

if (isset($_POST["titulo"]) && isset($_POST["descripcion"]) && isset($_POST["idAutor"])){
    $objRegistrar = new libroControl;
    $objRegistrar->titulo = $_POST["titulo"];
    $objRegistrar->descripcion = $_POST["descripcion"];
    $objRegistrar->descripcion = $_POST["idAutor"];
    $objRegistrar->ctrlRegistrarLibro();
}

if (isset($_POST["cargarAutor"])=="ok"){
    $objAutor = new libroControl;
    $objAutor-> ctlCargarAutor();
}

if (isset($_POST["titulo"]) && isset($_POST["descripcion"]) && isset($_POST["idAutor"])){
    $objListar = new libroControl;
    $objListar->ctrListar();
}