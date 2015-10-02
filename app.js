var express = require('express'),
    swig = require('swig'),
    riot = require('riot'),
    hello = require('./tags/hello-world.tag')
    app = express();

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/tags'));

app.get('/', function (req, res) {
    var startingName = 'Hans';
    var html = riot.render(hello, {firstName: 'Roman'});
    res.render('index', {
        content: html,
        firstName: startingName
    });
});

app.listen(3000, function () {
    console.log('server is listening on port 3000');
});