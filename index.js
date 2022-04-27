const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const PORT = process.env.PORT || 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/assets'));
app.set('views', path.join(__dirname, '/views'));

router.get('/', function(req,res){
    res.render('home');
});

router.get('/Projetos', function(req,res){
    res.render('project');
});

app.use('/',router);

app.use(function (req, res) {
    res.status(404).render("404")
})

app.listen(PORT, () => {
    console.log(`server running, ${PORT}`);
});