const express = require('express');

const api = express();
const router = express.Router();

const port = process.env.PORT || 30000;

router.get('/', (req, res)=>{
    res.type('aplication/json')
    res.send('Hello World from GET');
})

router.post('/webhook', (req, res)=>{
    res.type('aplication/json');
    res.send('Hello world form POST - Webhook');
})

app.use(router);

app.listen(port, ()=>{

    console.log(`Servidor rodando na porta ${port}`);
    })

