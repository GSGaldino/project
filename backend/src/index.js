const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server running on port: ${port}`))
