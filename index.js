const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const PORT = process.env.PORT || 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/views'));

app.get('about', (req,res) => {
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
    res.render('Inicio');
});

router.get('/Inicio', function(req,res){
    res.render('Inicio');
});

router.get('/Projetos', function(req,res){
    res.render('projetos');
});

router.get('/Cadastro', function(req,res){
    res.render('Cadastro');
});

router.get('/Calculadora', function(req,res){
    res.render('Cadastro');
});

router.get('/Login', function(req,res){
    res.render('Login');
});

app.use('/',router);

app.listen(PORT, () => {
    console.log(`Server ON PORT: ${PORT}`);
});