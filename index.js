const express = require('express');
require('dotenv/config');

const app = express();
const port = process.env.PORT || 3007;

app.get('/', (_req, res) => res.send(`Olá Marilene, estamos na porta ${port}`));

app.listen(port, () => console.log(`Online: ${port}`));
