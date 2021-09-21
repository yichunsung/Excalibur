import express from 'express'; // loading express
import path from 'path';

const hosting = express.Router();

const options = {
  headers: {
    'strict-transport-security': 'max-age=31536000'
  }
};

hosting.use(express.static(path.join(__dirname, './dist')));

hosting.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './dist', 'index.html'), options);
});


export default hosting;
