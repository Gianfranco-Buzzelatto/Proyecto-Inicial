const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const session = require ('express-session'); 
const {verifyUsuario, verifyAdmin} = require ('./middlewares/auth')

dotenv.config();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const menuRouter = require('./routes/menu');
const contactoRouter = require('./routes/contacto');
const quienesRouter = require('./routes/quienesSomos');
const registroRouter = require('./routes/registro')
const cuponesRouter = require('./routes/cupones');
const loginRouter = require ('./routes/login');
const adminIndex = require('./routes/admin/index');
const adminCategorias =require ('./routes/admin/categorias');
const adminProductos = require ('./routes/admin/productos');
const adminUsuarios = require ('./routes/admin/usuarios');
const adminEmpleados = require('./routes/admin/empleados');
const adminMensajes = require ('./routes/admin/mensajes');
//Aca van los requerimientos  de los modulos

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'gian', 
  cookie : {maxAge: null},
  resave: true,
  saveUninitialized: false
}))
//All
app.use('/', indexRouter);
app.use('/registro', registroRouter);
app.use('/login', loginRouter);

//Usuarios
app.use('/users', verifyUsuario, usersRouter);
app.use('/menu', verifyUsuario, menuRouter);
app.use('/contacto',contactoRouter);
app.use('/quienesSomos', verifyUsuario,quienesRouter);
app.use('/cupones', verifyUsuario,cuponesRouter);

//Admin
app.use('/admin', verifyAdmin , adminIndex);
app.use('/admin/categorias', adminCategorias);
app.use('/admin/productos', adminProductos);
app.use('/admin/usuarios', adminUsuarios);
app.use('/admin/empleados', adminEmpleados);
app.use('/admin/mensajes', adminMensajes);
//aca se declaran las rutas. si no esta aca no se activa. al entrar se carga en requerimiento de rutas

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
