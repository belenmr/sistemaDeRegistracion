const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const { getUsers, setUsers} = require('../../data/users');
const users = getUsers();

module.exports = {
    index:(req,res) =>{
        res.render('index',{
            title : "Sistema de Registracion"            
        })
    },

    goToLogin: (req, res) => {
        res.render('login',{
            title : "Iniciar sesion"            
        });
    },

    login: (req, res) => {
        const {username, pass} = req.body;

        let user = users.find(user => user.username === username.trim());

        if(user && bcrypt.compareSync(pass.trim(), user.pass)){
            res.redirect(`/profile/${user.username}`);            
        }else{
            res.render('login',{
                title : "Iniciar sesion",
                error : "Credenciales inválidas"
            });
        }
    },

    goToSignup: (req, res) => {
        res.render('register',{
            title : "Registrarse"            
        })
    },

    signup: (req, res, next) => {
        const {username, name, surname, email, pass, repeatPass} = req.body;
        let avatarPath = req.file;

        //console.log(req.body);
        //console.log(req.file);
        //console.log(avatarPath);

        if (!avatarPath) {
            avatarPath = path.join('images', 'users', 'default.jpg');            
        } else{
            avatarPath = path.join('images', 'users', req.file.filename);            
        }

        //console.log(avatarPath);

        if(!username || !name || !surname || !email || !pass || !repeatPass ){
            return res.redirect('/register')
        }

        if (pass.trim() !== repeatPass.trim()) {
            return res.render('register',{
                title : "Registrarse" ,
                error : "Las contraseñas deben coincidir"
            })
        }

        let existingUser = users.find(user => user.username.toLowerCase() === username.trim().toLowerCase());

        if(existingUser){
            return res.render('register',{
                title : "Registrarse" ,
                error : "Usuario existente. Intente con un nuevo usuario"
            })
        }

        let lastID = 0;
        users.forEach(user => {
            if (user.id > lastID) {
                lastID = user.id
            }
        });

        let passHash = bcrypt.hashSync(pass.trim(),12);

        let newUser = {
            id : +lastID + 1,
            username : username.trim().toLowerCase(),
            pass : passHash,
            name : name.trim().toUpperCase(),
            surname : surname.trim().toUpperCase(),
            email : email.trim(),
            avatarPath : avatarPath,
        }

        users.push(newUser);
        setUsers(users);

        //next();

        res.redirect(`/profile/${newUser.username}`);

    },

    showProfile: (req, res) => {
        let user = users.find(user => user.username === req.params.username.trim());

        res.render('profile',{
            title : "Perfil",
            user          
        })
    }
  
}