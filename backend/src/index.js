const express = require('express'); //Importa a dependencia express
const cors = require('cors');
const routes = require('./routes'); //IMporta as rotas

const app = express();  //Define o app


app.use(cors());
app.use(express.json()); //Fala que as requesições do body são em json
app.use(routes);

app.listen(3333); //App vai ficar à espera que alguem aceda a porta 3333