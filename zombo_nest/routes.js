var express = require('express');
var Zombie = require('./models/zombie');
var Arma = require('./models/weapons');

var passport = require('passport');

var router = express.Router();

router.use((req,res,next)=>{
    res.locals.currentZombie = req.Zombie;
    res.locals.errors = req.flash("error");
    res.locals.infos = req.flash('info');
    next();
});

router.get("/",(req,res,next)=>{
    Zombie.find()
    .sort({createdAt:"descending"})
    .exec((err, zombies)=>{
        if(err){
            return next(err);
        }
        res.render("index",{zombies: zombies});
    });
});

router.get("/signup",(req,res,next)=>{
    res.render('signup');
});

router.get("/addweapon",(req,res,next)=>{
    res.render('addweapon');
});

router.get("/weapons",(req,res,next)=>{
    Arma.find()
    .sort({fuerza:"descending"})
    .exec((err, armas)=>{
        if(err){
            return next(err);
        }
        res.render("weapons",{armas: armas});
    });
});

router.post("/addweapon",(req,res,next)=>{
    var descripcion = req.body.descripcion;
    var fuerza = req.body.fuerza;
    var categoria = req.body.categoria;

    Arma.findOne((arma)=>{
        var newArma = new Arma({
            descripcion: descripcion,
            fuerza: fuerza,
            categoria: categoria
        });
        newArma.save(next);
        res.redirect("/weapons")
    });
});

router.post("/signup",(req,res,next)=>{
    var username = req.body.username;
    var password = req.body.password;

    Zombie.findOne({username: username},(err,zombie)=>{
        if(err){
            return next(err);
        }
        if(zombie){
            req.flash("error", "El nombre de usuario ya lo ha tomado otro zombie");
            return res.redirect("/signup");
        }
        var newZombie = new Zombie({
            username: username,
            password: password
        });
        newZombie.save(next);
    });
});

router.get("/zombies/:username", (req, res, next) =>{
     Zombie.findOne({username: req.params.username}, (err, zombie) =>{
         if(err){
             return next(err);
         }
         if(!zombie){
             return next(404);
         }
         res.render("profile",{zombie: zombie});
     });
 });
 
module.exports = router;