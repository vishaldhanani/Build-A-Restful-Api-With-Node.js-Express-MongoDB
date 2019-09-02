const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');

//middlewares
app.use(cors());
app.use(bodyParser.json());
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//db connection
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, 
    ()=> console.log('Connected to DB!!')
);

app.listen(3000);