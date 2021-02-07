-- Database
CREATE DATABASE swapi_db;
USE swapi_db;

-- Tables
CREATE TABLE personas (
    id INT(12) PRIMARY KEY AUTO_INCREMENT,
    obj_id VARCHAR(100) NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    altura VARCHAR(5) NOT NULL,
    masa VARCHAR(5) NOT NULL,
    color_pelo VARCHAR(30) NOT NULL,
    color_piel VARCHAR(30) NOT NULL,
    color_ojo VARCHAR(30) NOT NULL,
    nacimiento VARCHAR(112) NOT NULL,
    genero VARCHAR(20) NOT NULL,
    planeta_natal VARCHAR(100) NOT NULL,
    pelicula LONGTEXT NOT NULL,
    especie LONGTEXT NOT NULL,
    vehiculo LONGTEXT NOT NULL,
    nave_estelar LONGTEXT NOT NULL,
    creado VARCHAR(100) NOT NULL,
    editado VARCHAR(100) NOT NULL,
    url VARCHAR(200) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
