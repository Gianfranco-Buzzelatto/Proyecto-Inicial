const express = require("express");
const router = express.Router();
const { crear, verify } = require("./../models/registro");
const sha1 = require("sha1");
const { v4: uuid } = require("uuid");
const { send } = require("./../services/mail");
const {getAll} = require ('./../models/usuarios');


router.get("/", (req, res) => {
  res.render("registro", { title: "Registro " });
});

const showRegistro = (req, res) => {
  res.render("registro", { title: "Registro de usuario" });
};

const create = async (req, res) => {
  const usuario = req.body;
  const uid = uuid();
  const usuarioF = {
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    email: usuario.email,
    direccion: usuario.direccion,
    fecha_de_nacimiento: usuario.fecha_de_nacimiento,
    contraseña: sha1(usuario.contraseña),
    username: usuario.username,
    celular: usuario.celular,
    confirmacion_correo: uid,
  };
  const usuariosExistentes = await getAll();
  usuariosExistentes.forEach( usuario => {
      if (usuario.username == usuarioF.username || usuario.email == usuarioF.email){
          res.render('registro', {message : "El nombre de usuario y/o email ya estan en uso", title:"Intente nuevamente"})
      }
  });
  const add = await crear(usuarioF);
  send({
    mail: usuarioF.email,
    asunto: `Gracias ${usuarioF.nombre}, ${usuarioF.apellido} por sumarte a Janz Burgers®`,
    cuerpo: `<body style="margin:0;padding:0;">
        <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#fff;">
            <tr>
                <td align="center" style="padding:0;">
                    <h1>Bienvenido/a ${usuarioF.nombre} a Janz Burgers</h1>
                </td>
            </tr>
        </table>
        <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #000;border-spacing:0;text-align:left;">
            <tr>
                <td align="center" style="padding:40px 0 30px 0;background:#efde2c;">
                    <h1></h1>
                </td>
            </tr>
            <tr>
                <td style="padding:0;">
                    <tr>
                        <td style="padding:36px 30px 42px 30px;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                <tr>
                                    <td style="width:260px;padding:0;vertical-align:top;">
                                        <img src="/images/janb.png" alt="..." style="height=153px; width=230px">
                                    </td>
                                        <td style="width:20px;padding:0;font-size:0;line-height:0;">&nbsp;</td>     
                                    <td style="width:260px;padding:0;vertical-align:top;">
                                        <p> ¡Te sumaste a la familia Janz! Desde ahora recibiras mails, descuentos, y muchos mas beneficios! <br> GRACIAS </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </td>
            </tr>
            <tr>
                <td style="padding:0;background:#000000;">
                    <tr>
                        <td style="padding:30px;background:#efde2c;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                <tr>
                                    <td style="padding:0;width:50%;" align="left">
                                        <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                                            <tr>
                                            <td style="padding:0 0 0 10px;width:38px;">
                                            <button style="background-color:#000;"><a href="${process.env.URL_SERVER}:${process.env.PORT}/registro/verify/${usuarioF.confirmacion_correo}"> <b> Confirmar cuenta </b></a></button>
                                            </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td style="padding:0;width:50%;" align="right">
                                        <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                                            <tr>
                                                <td style="padding:0 0 0 10px;width:38px;">
                                                    <a target="blank" href="https://www.instagram.com/janz.burgers/"><i class="fab fa-instagram"></i></a>
                                                </td>
                                                <td style="padding:0 0 0 10px;width:38px;">
                                                    <a target="blank" href="https://api.whatsapp.com/send/?phone=541140495908&text&app_absent=0"><i class="fab fa-whatsapp"></i></a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </td>
            </tr>
        </table>
    </body>
        `,
  });
  res.redirect("/menu");
};
const verificacion = async (req, res) => {
  const { uid } = req.params;
  console.log(uid);
  const messageId = await verify(uid);
  res.redirect("/");
};

router.get("/", showRegistro);
router.post("/create", create);
router.get("/verify/:uid", verificacion);

module.exports = router;
