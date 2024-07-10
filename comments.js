// create web server using express
const express = require('express');
const app = express();
// add body-parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// define the port
const port = 3000;
// define the comments
let comments = [
  'This is the first comment',
  'This is the second comment',
  'This is the third comment'
];
// define the routes
app.get('/comments', (req, res) => {
  res.json(comments);
});
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json(comment);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// run the server using node comments.js
// open the browser and go to http://localhost:3000/comments to see the comments
// use Postman to send a POST request to http://localhost:3000/comments with a comment in the request body
// then refresh the browser to see the new comment
// use Postman to send another POST request to http://localhost:3000/comments with another comment in the request body
// then refresh the browser to see the new comment