const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
axios.defaults.baseURL = 'https://api.17hi.co/api';
const app = express();

app.set('port', 8888);

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/api/17HiProxy', function (req, res) {
  let headers = {};
  for(let key in req.headers){
    if(key !== 'host'){
      headers[key] = req.headers[key];
    }
  }
  axios({
    url: req.query.api,
    method: req.method.toLowerCase(),
    data: req.body || {},
    headers: headers
  }).then((response) => {
    res.json(response.data);
  }).catch((e) => {
    res.json(e.response.data);
  });
});

app.listen(app.get('port'), () => {
  console.log(`server running @${app.get('port')}`)
});
