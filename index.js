const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 3000;
// var url = require('url');

app.use(cors());
app.use(morgan('dev'));
const parser = require('body-parser');
app.use(parser.json());
app.use(express.static('public'));

// app.get('/:propId', cors(), (req, res) => {
//   // db.getById(req, res);
//   console.log('params: ', req.params);
//   res.writeHead(200,
//     {Location: '/' + req.params.propId}
//   );
//   res.end();
// });

app.listen(port, () => {
  console.log(`Proxy listening at ${port}`)
})