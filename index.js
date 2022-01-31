const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const PORT = process.env.PORT || 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/assets'));
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(__dirname + '/projects/design-login-cadastro/public'));
app.use(express.static(__dirname + '/projects/Calculadora_Estilizada/public'));

app.get('/about', (req,res) => {
    res.json({
        name: 'João',
        email: 'joaovictorca2004@gmail.com',
        urls: {
            type: 'whatsapp',
            url: 'https://wa.me/+5548999227431'
        }        
    })
})

router.get('/', function(req,res){
    res.render('home');
});

router.get('/Projetos', function(req,res){
    res.render('projetos');
});

router.get('/Cadastro', function(req,res){
    res.render(__dirname + '/projects/design-login-cadastro/views/Cadastro.html');
});

router.get('/Login', function(req,res){
    res.render(__dirname + '/projects/design-login-cadastro/views/Login.html');
});

router.get('/Calculadora', function(req,res){
    res.render(__dirname + '/projects/Calculadora_Estilizada/Calculadora.html');
});

app.use('/',router);

app.use(function (req, res, next) {
    res.status(404).render("404")
})

app.listen(PORT, () => {
    console.log(`Server do bolado lendário João rodando na porta: ${PORT}`);
});