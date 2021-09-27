<?php

include_once "conexion.php";


class libroModelo
{
    public static function mdlCargarAutor()
    {

        $objRespuesta = conexion::conectar()->prepare("SELECT * FROM autor");
        $objRespuesta->execute();
        $objLitarAutor = $objRespuesta->fetchAll();
        $objRespuesta = null;
        return $objLitarAutor;
    }
    public static function mdlRegistrar($titulo, $descripcion, $idAutor)
    {

        $mensaje = "";
        try {
            $objRespuesta = conexion::conectar()->prepare("INSERT INTO libros(titulo,descripcion,idAutor)VALUES(:titulo,:descripcion,:idAutor)");
            $objRespuesta->bindParam(":titulo", $titulo, PDO::PARAM_STR);
            $objRespuesta->bindParam(":descripcion", $descripcion, PDO::PARAM_STR);
            $objRespuesta->bindParam(":idAutor", $idAutor, PDO::PARAM_INT);
            if ($objRespuesta->execute()) {
                $mensaje = "ok";
            } else {
                $mensaje = "Error";
            }
        } catch (Exception $e) {
            $mensaje = $e;
        }
        return $mensaje;
    }
    public static function mdlListar(){
        $objRespuestaL = conexion::conectar()->prepare("SELECT * FROM libros");
       $objRespuestaL->execute();
       $objListar = $objRespuestaL->fetchAll();
       $objRespuestaL = null;
       return $objListar;

    }
}