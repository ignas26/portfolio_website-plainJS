const express = require('express');
const app = express();

const port = process.env.PORT || 7000;

app.use(express.static(__dirname + '/client'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

  app.get('/*', (req, res)=>{
    res.sendFile(__dirname+'/client/index.html')
  });

app.listen(port, () => {

});