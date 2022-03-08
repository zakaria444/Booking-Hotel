const cors = require("cors");
const bp = require("body-parser");
const exp = require("express");
const fileupload = require("express-fileupload");
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser')

const {success,error} = require('consola')
const {connect} = require("mongoose");
const passport= require("passport");
const app  = exp();
//views


const  { engine } = require('express-handlebars') ;
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(bp.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(fileupload());
app.use(exp.static("files"));
// parse application/json
app.use(expressValidator());
app.use(bp.json());
app.get('/', (req, res) => {
    res.render('home');
   
});


app.post("/upload", (req, res) => {
    const newpath = __dirname + "/files/";
    const file = req.files.file;
    const filename = file.name;
   
    file.mv(`${newpath}${filename}`, (err) => {
      if (err) {
        console.log(file)
        res.status(500).send({ message: "File upload failed", code: 200 });
      }
      res.status(200).send({ message: "File Uploaded", code: 200 });
    });
  });
// app.get('/loginUser', (req, res) => {
//     res.render('loginUser');
   
// });
// app.get('/loginOwner', (req, res) => {
//      res.render('loginOwner');
   
// });
//Bring in the app constants
const {DB, PORT}= require("./config");
//Initialize the application 
//Middlewares

app.use(cors());
app.use(bp.json());
app.use(passport.initialize());
app.use(cookieParser());


require('./middlewares/passport')(passport);

//User Router Middleware
app.use("/api/users",require("./routes/users"));

app.use("/api/propreataire",require("./routes/proprietaires"));


app.use("/api/hotel",require("./routes/hotels"));

app.use("/api/client",require("./routes/clients"));

app.use("/api/room", require("./routes/room"));

/* zakaria */

app.use("/api/filter",require("./routes/booking"));

app.use("/api/room", require("./routes/room"));


app.use("/api/booking",require("./routes/booking"));
 

app.use("/api/bookingroom",require("./routes/bookingroom"));


app.use("/api/hotelproprietai",require("./routes/hotelproprietai"));





const startApp = async ()=>{
try{
    //connection with DB
    await connect(DB,{
        useNewUrlParser: true
})
success({message: `Successfully connected with the Database \n${DB}`,
badge : true} ); 
      //Start Listenting for the serevr 
    app.listen(PORT, ()=>
        success({message: `Server started o PORT ${PORT}` , badge: true}));

}catch(err){

    error({message: `Unable to connect with Database connected with the Database \n${err}`,
    badge : true} );
    startApp();
}
}
startApp();
