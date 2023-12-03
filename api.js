const express = require('express');

const api = express();
const router = express.Router();

const port = 3000;

router.get('/', (req, res)=>{
    //res.type('aplication/json')
    res.json('Hello World from GET');
})

router.get('/webhook', (req, res)=>{
    //res.type('aplication/json')
    res.json('Hello World from GET Webhook');
})

router.post('/webhook', (req, res)=>{
    //res.type('aplication/json');
    res.json('Hello world form POST - Webhook');
})

api.use(router);

api.listen(port, ()=>{

    console.log(`Servidor rodando na porta ${port}`);
    })

