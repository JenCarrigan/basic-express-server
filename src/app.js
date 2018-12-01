import express from 'express';
import router from './routes/router.js';
import cors from 'cors';
const app = express();
let isRunning = false;

const handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use('/static', express.static('public'));
app.use('/', express.static('public'));
app.set('view engine', 'handlebars');

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  res.status(500);
  res.render('500');
});

module.exports = {
  app,
  start: (port) => {
    console.log('hello world');
    if (!isRunning) {
      app.listen(port, (err) => {
        if(err) {
          throw err;
        }
        isRunning = true;
        console.log('Server up on port', port);
      });
    }
    else {
      console.log('Server already up!');
    }
  },

  stop: () => {
    app.close(() => {
      isRunning = false;
      console.log('Server stopped!');
    });
  },
};