const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const items = require('./routes/api/items');
const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//user Routes
app.use('/api/items', items);

//Sere static assets if in production
if (process.env.NODE_ENV === 'production') {
	//Set static folder
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

 const port = process.env.PORT || 5000;
 app.listen(port, () => console.log('Server started on port ' + port));
