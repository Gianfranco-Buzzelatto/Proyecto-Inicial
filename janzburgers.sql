-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-08-2021 a las 04:10:18
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `janzburgers`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `id_usuario`, `id_producto`, `eliminado`, `ts_create`, `ts_update`) VALUES
(25, 3, 2, 1, '2021-08-05 16:19:26', '2021-08-05 16:20:37'),
(26, 3, 2, 1, '2021-08-05 16:20:34', '2021-08-05 16:20:37'),
(27, 3, 3, 1, '2021-08-05 16:20:49', '2021-08-05 16:23:27'),
(28, 3, 1, 1, '2021-08-05 16:23:25', '2021-08-05 16:23:27'),
(29, 3, 2, 1, '2021-08-05 16:24:43', '2021-08-05 16:26:30'),
(30, 3, 5, 1, '2021-08-05 16:24:48', '2021-08-05 16:26:30'),
(31, 3, 1, 1, '2021-08-05 16:26:22', '2021-08-05 16:26:30'),
(32, 3, 1, 1, '2021-08-05 16:29:32', '2021-08-05 16:43:11'),
(33, 3, 1, 1, '2021-08-05 16:30:26', '2021-08-05 16:43:11'),
(34, 3, 5, 1, '2021-08-05 16:31:18', '2021-08-05 16:43:11'),
(35, 3, 2, 1, '2021-08-05 16:33:34', '2021-08-05 16:43:11'),
(36, 3, 1, 1, '2021-08-05 16:44:41', '2021-08-05 16:44:42'),
(37, 3, 1, 1, '2021-08-05 16:46:05', '2021-08-05 16:46:11'),
(38, 3, 6, 1, '2021-08-05 16:46:09', '2021-08-05 16:46:11'),
(39, 3, 1, 1, '2021-08-05 16:47:14', '2021-08-05 16:47:21'),
(40, 3, 6, 1, '2021-08-05 16:47:19', '2021-08-05 16:47:21'),
(41, 3, 1, 1, '2021-08-05 16:48:27', '2021-08-05 16:48:28'),
(42, 3, 2, 1, '2021-08-05 16:48:32', '2021-08-05 16:48:56'),
(43, 3, 6, 1, '2021-08-05 16:48:37', '2021-08-05 16:48:38'),
(44, 3, 3, 1, '2021-08-05 16:48:47', '2021-08-05 16:48:54'),
(45, 3, 6, 1, '2021-08-05 16:48:52', '2021-08-05 16:55:38'),
(46, 3, 5, 1, '2021-08-05 16:49:01', '2021-08-05 16:55:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `categoria` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `categoria`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Hamburguesa', 0, '2021-07-14 21:22:03', '2021-08-02 00:43:15'),
(2, 'Papa frita', 1, '2021-07-14 21:22:12', '2021-07-14 21:22:12'),
(5, 'Papas fritas', 0, '2021-07-30 01:45:19', '2021-07-30 01:45:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `ocupacion` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `celular` int(11) NOT NULL,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `habilitado` tinyint(4) NOT NULL DEFAULT 1,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `apellido`, `email`, `ocupacion`, `celular`, `ts_create`, `ts_update`, `habilitado`, `eliminado`) VALUES
(11, 'Gianfranco', 'Buzzelatto', 'gianbuzzelatto@gmail.com', 'Estudiante', 1141609741, '2021-07-30 13:40:16', '2021-08-01 21:02:43', 1, 0),
(12, 'Lionel', 'Messi', 'messi@gmail.com', 'Futbolista', 2147483647, '2021-07-30 13:40:54', '2021-08-01 20:52:27', 1, 0),
(13, 'Bob', 'Esponja', 'Bob@gmail.com', 'Cocinero en Janz', 2147483647, '2021-08-04 22:11:21', '2021-08-04 22:11:21', 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id` int(11) NOT NULL,
  `uid` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `id_empleados` int(11) NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`id`, `uid`, `id_empleados`, `eliminado`, `ts_create`, `ts_update`) VALUES
(11, '725ce8f8-1fab-47b8-845d-3ce7540b6900.jpeg', 11, 0, '2021-07-30 13:40:16', '2021-07-30 13:40:16'),
(12, 'c1437a9d-7124-4aca-be53-68de50e89a66.jpeg', 12, 0, '2021-07-30 13:40:54', '2021-08-01 20:53:57'),
(13, '5ce65a41-728d-444c-91c2-1e76fee90012.jpeg', 13, 0, '2021-08-04 22:11:21', '2021-08-04 22:11:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_productos`
--

CREATE TABLE `imagenes_productos` (
  `id` int(11) NOT NULL,
  `uid` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `id_producto` int(11) NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `imagenes_productos`
--

INSERT INTO `imagenes_productos` (`id`, `uid`, `id_producto`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'fccf5280-cc13-4959-ad52-8714f11353b2.png', 1, 0, '2021-07-30 01:20:31', '2021-07-30 01:20:31'),
(2, '02343ca7-9211-4752-94a5-3f930b920446.png', 2, 0, '2021-07-30 01:23:56', '2021-08-01 21:52:33'),
(3, '1689738f-0dfa-4129-8801-f61e58392ebf.png', 3, 0, '2021-07-30 01:25:07', '2021-07-30 01:25:07'),
(4, '496b870d-3d71-4764-907e-12d2b16a9ca9.png', 4, 0, '2021-07-30 01:46:46', '2021-07-30 01:46:46'),
(5, 'dcedb059-718a-424d-850e-b14052afa2f8.png', 5, 0, '2021-08-01 17:39:23', '2021-08-01 17:39:23'),
(6, '16406239-651e-44f8-9ae1-b7f0f1395c2e.jpeg', 6, 0, '2021-08-04 22:10:53', '2021-08-04 22:10:53');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes/consultas`
--

CREATE TABLE `mensajes/consultas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `celular` int(11) NOT NULL,
  `mensaje` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `mensajes/consultas`
--

INSERT INTO `mensajes/consultas` (`id`, `nombre`, `apellido`, `email`, `celular`, `mensaje`, `ts_create`, `ts_update`) VALUES
(1, 'Gian', 'Buzzelatto', 'Gianbuzzelatto@gmail.com', 1141609741, 'hola hola', '2021-07-19 13:13:55', '2021-07-19 13:15:22'),
(2, 'Gianfranco', 'Buzzelatto', 'gianbuzzelatto@gmail.com', 1141609741, 'Hola, buenas tardes\r\n', '2021-07-19 13:16:19', '2021-07-19 13:16:19'),
(4, 'Gianfranco', 'Buzzelatto', 'gianbuzzelatto@gmail.com', 111111111, 'Hola hola\r\n', '2021-07-19 15:21:44', '2021-07-19 15:21:44'),
(6, 'Gianfranco', 'Buzzelatto', 'gianbuzzelatto@gmail.com', 1141609741, 'hola hola', '2021-07-29 17:00:12', '2021-07-29 17:00:12'),
(7, 'Gianfranco', 'Buzzelatto', 'gianbuzzelatto@gmail.com', 1141609741, 'Hola, probando nodemailer', '2021-08-04 22:12:23', '2021-08-04 22:12:23'),
(8, 'Gianfranco', 'Buzzelatto', 'Gianbuzzelatto@gmail.com', 1141609741, 'Hola, probando nodemailer x2', '2021-08-04 22:14:33', '2021-08-04 22:14:33'),
(9, 'Gianfranco', 'Buzzelatto', 'gianbuzzelatto@gmail.com', 1141609741, 'hola hola', '2021-08-04 22:15:41', '2021-08-04 22:15:41'),
(10, '', '', '', 0, 'gaswrfgbha', '2021-08-04 22:16:32', '2021-08-04 22:16:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 1,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_categorias` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `stock`, `descripcion`, `habilitado`, `eliminado`, `ts_create`, `ts_update`, `id_categorias`) VALUES
(1, 'Hamburguesa triple', 500, 10, 'la mejor triple', 1, 0, '2021-07-30 01:20:31', '2021-08-02 13:22:11', 1),
(2, 'Hamburguesa simple', 300, 10, 'La simpleza', 1, 0, '2021-07-30 01:23:56', '2021-08-02 13:22:12', 1),
(3, 'Clasica', 500, 10, 'La que no falta', 1, 0, '2021-07-30 01:25:07', '2021-08-02 13:22:24', 1),
(4, 'Papas con cheddars', 500, 10, 'Las mejores papas con cheddar', 1, 0, '2021-07-30 01:46:46', '2021-08-02 13:22:25', 5),
(5, 'Triple panceta', 650, 10, 'La best', 1, 0, '2021-08-01 17:39:23', '2021-08-02 13:22:27', 1),
(6, 'Papas con cheddar', 500, 5, 'Las mas crocantes y ricas papas con cheddar', 1, 0, '2021-08-04 22:10:53', '2021-08-04 22:10:53', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `admin` tinyint(4) NOT NULL DEFAULT 0,
  `email` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `contraseña` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `celular` int(11) NOT NULL,
  `fecha_de_nacimiento` date NOT NULL,
  `confirmacion_correo` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `habilitado` tinyint(4) NOT NULL DEFAULT 0,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `admin`, `email`, `username`, `contraseña`, `direccion`, `celular`, `fecha_de_nacimiento`, `confirmacion_correo`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(3, 'Gianfranco', 'Buzzelatto', 1, 'gianbuzzelatto@gmail.com', 'Gian_12', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'Padilla 986', 1141609741, '2000-10-12', '0a9f4075-ee3f-4012-8ece-35e92ef0e4db', 1, 0, '2021-07-30 13:36:43', '2021-08-02 00:47:02'),
(16, 'Zaira', 'Buzzelatto', 0, 'buzzelattozaira.28@gmail.com', 'zaira', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'juana azurduy de padilla 986', 1141609741, '2000-10-12', '29ab6cd2-0636-408c-8c58-b8cce0293385', 1, 0, '2021-08-01 01:34:18', '2021-08-01 15:59:30'),
(17, 'Gian', 'Buzzelatto', 0, 'Gjb_gian@live.com', 'gian_10', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'padilla 986', 1141609741, '0000-00-00', '7082f5ae-25d8-42e3-a069-61bb006ae20e', 1, 0, '2021-08-01 16:15:15', '2021-08-02 00:47:29');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`,`id_producto`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_empleados` (`id_empleados`);

--
-- Indices de la tabla `imagenes_productos`
--
ALTER TABLE `imagenes_productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `mensajes/consultas`
--
ALTER TABLE `mensajes/consultas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categorias` (`id_categorias`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `imagenes_productos`
--
ALTER TABLE `imagenes_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `mensajes/consultas`
--
ALTER TABLE `mensajes/consultas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD CONSTRAINT `imagenes_ibfk_1` FOREIGN KEY (`id_empleados`) REFERENCES `empleados` (`id`);

--
-- Filtros para la tabla `imagenes_productos`
--
ALTER TABLE `imagenes_productos`
  ADD CONSTRAINT `imagenes_productos_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_categorias`) REFERENCES `categorias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
