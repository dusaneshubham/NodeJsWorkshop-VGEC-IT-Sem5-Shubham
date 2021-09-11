const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const useRoute = require('../routes/index.js');
app.use(bodyParser.json());
app.use("/cinema", useRoute);





app.listen(PORT, ()=>console.log(`Server runs on ${PORT}`));