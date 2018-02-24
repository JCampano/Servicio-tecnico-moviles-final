-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-02-2018 a las 15:25:26
-- Versión del servidor: 10.1.26-MariaDB
-- Versión de PHP: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `practicajs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dispositivo`
--

CREATE TABLE `dispositivo` (
  `id_dispositivo` int(10) NOT NULL,
  `marca` int(20) NOT NULL,
  `modelo` int(20) NOT NULL,
  `garantia` varchar(2) NOT NULL,
  `entrada` float NOT NULL,
  `salida` float NOT NULL,
  `activo` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `dni_o_cif` varchar(9) NOT NULL,
  `tipo` varchar(10) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `apellidos` varchar(60) NOT NULL,
  `telefono` int(9) NOT NULL,
  `direccion` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `piezas`
--

CREATE TABLE `piezas` (
  `num_serie` int(16) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `precio` float NOT NULL,
  `id_reparacion` int(20) NOT NULL,
  `cif_proveedor` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reparacion`
--

CREATE TABLE `reparacion` (
  `id_reparacion` int(20) NOT NULL,
  `dni_solicitante` varchar(9) NOT NULL,
  `modelo` int(20) NOT NULL,
  `averia` int(40) NOT NULL,
  `importe` float NOT NULL,
  `comentarios` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reparacion_dispositivo`
--

CREATE TABLE `reparacion_dispositivo` (
  `id_reparacion` int(20) NOT NULL,
  `id_dispositivo` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dispositivo`
--
ALTER TABLE `dispositivo`
  ADD PRIMARY KEY (`id_dispositivo`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`dni_o_cif`),
  ADD KEY `dni_o_cif` (`dni_o_cif`);

--
-- Indices de la tabla `piezas`
--
ALTER TABLE `piezas`
  ADD PRIMARY KEY (`num_serie`),
  ADD KEY `id_reparacion` (`id_reparacion`),
  ADD KEY `cif_proveedor` (`cif_proveedor`);

--
-- Indices de la tabla `reparacion`
--
ALTER TABLE `reparacion`
  ADD PRIMARY KEY (`id_reparacion`),
  ADD KEY `dni_solicitante` (`dni_solicitante`);

--
-- Indices de la tabla `reparacion_dispositivo`
--
ALTER TABLE `reparacion_dispositivo`
  ADD KEY `id_reparacion` (`id_reparacion`),
  ADD KEY `id_dispositivo` (`id_dispositivo`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `piezas`
--
ALTER TABLE `piezas`
  ADD CONSTRAINT `piezas_ibfk_1` FOREIGN KEY (`id_reparacion`) REFERENCES `reparacion` (`id_reparacion`) ON UPDATE CASCADE,
  ADD CONSTRAINT `piezas_ibfk_2` FOREIGN KEY (`cif_proveedor`) REFERENCES `persona` (`dni_o_cif`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `reparacion`
--
ALTER TABLE `reparacion`
  ADD CONSTRAINT `reparacion_ibfk_1` FOREIGN KEY (`dni_solicitante`) REFERENCES `persona` (`dni_o_cif`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `reparacion_dispositivo`
--
ALTER TABLE `reparacion_dispositivo`
  ADD CONSTRAINT `reparacion_dispositivo_ibfk_1` FOREIGN KEY (`id_reparacion`) REFERENCES `reparacion` (`id_reparacion`) ON UPDATE CASCADE,
  ADD CONSTRAINT `reparacion_dispositivo_ibfk_2` FOREIGN KEY (`id_dispositivo`) REFERENCES `dispositivo` (`id_dispositivo`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
