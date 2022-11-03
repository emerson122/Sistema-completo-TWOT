const express = require("express");
//se inicialiaza como app
const app = express();
const bodyparser = require("body-parser");
const colors = require('colors');
//esto es lo nuevo para detectar imagenes
const {urlencoded, json}= require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const upload = multer({dest: 'public/images'})


//const cors = require('cors');
//hasta aqui


// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(bodyparser.json());

//nuevo cors para permitir el acceso de otras aplicaciones
//app.use(cors());
app.use(urlencoded({extended:true}));
app.use('/galeria',require('./routes/books.routes'))


//archivo donde estaran mis imagenes
app.use(express.static(path.join(__dirname, '../public/images')))


//inicio
app.get('/',(req,res)=>{
  res.send('<html><body><center><b>Bienvenidos sean a la API de TWOT</B></center></body></html>')
});
// Routes
app.use(require("./routes/compras_y_ventas"));
app.use(require("./routes/fabricante"));
app.use(require("./routes/enproduccion"));
app.use(require("./routes/descripcionproducto"));
app.use(require("./routes/distribucionproducto"));
app.use(require("./routes/personas"))
app.use(require("./routes/Inventario"))
app.use(require("./routes/Producto"))

app.use(require("./routes/Contabilidad"));



// Starting the server
app.listen(app.get("port"), () => {
  console.log('');
    console.log('TTTTTTTTTTTTTTTTTTTTTTTWWWWWWWW                           WWWWWWWW     OOOOOOOOO     TTTTTTTTTTTTTTTTTTTTTTT'.yellow);
    console.log(`T:::::::::::::::::::::TW::::::W                           W::::::W   OO:::::::::OO   T:::::::::::::::::::::T`.yellow);
    console.log('T:::::::::::::::::::::TW::::::W                           W::::::W OO:::::::::::::OO T:::::::::::::::::::::T'.yellow);
    console.log('T:::::TT:::::::TT:::::TW::::::W                           W::::::WO:::::::OOO:::::::OT:::::TT:::::::TT:::::T'.yellow);
    console.log('TTTTTT  T:::::T  TTTTTT W:::::W           WWWWW           W:::::W O::::::O   O::::::OTTTTTT  T:::::T  TTTTTT'.yellow);
    console.log('        T:::::T          W:::::W         W:::::W         W:::::W  O:::::O     O:::::O        T:::::T        '.yellow);
    console.log('        T:::::T           W:::::W       W:::::::W       W:::::W   O:::::O     O:::::O        T:::::T        '.yellow);
    console.log('        T:::::T            W:::::W     W:::::::::W     W:::::W    O:::::O     O:::::O        T:::::T       '.yellow);
    console.log('        T:::::T             W:::::W   W:::::W:::::W   W:::::W     O:::::O     O:::::O        T:::::T       '.yellow);
    console.log('        T:::::T              W:::::W W:::::W W:::::W W:::::W      O:::::O     O:::::O        T:::::T      '.yellow);
    console.log('        T:::::T               W:::::W:::::W   W:::::W:::::W       O:::::O     O:::::O        T:::::T      '.yellow);
    console.log('        T:::::T                W:::::::::W     W:::::::::W        O::::::O   O::::::O        T:::::T      '.yellow);
    console.log('      TT:::::::TT               W:::::::W       W:::::::W         O:::::::OOO:::::::O      TT:::::::TT    '.yellow);
    console.log('      T:::::::::T                W:::::W         W:::::W           OO:::::::::::::OO       T:::::::::T   '.yellow);
    console.log('      T:::::::::T                 W:::W           W:::W              OO:::::::::OO         T:::::::::T  '.yellow);
    console.log('      TTTTTTTTTTT                  WWW             WWW                 OOOOOOOOO           TTTTTTTTTTT  '.yellow);
    console.log('');
    console.log('');
});
