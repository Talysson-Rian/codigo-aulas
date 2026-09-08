import express from "express";

const app = express();
const port = process.env.PORT;

app.get('/ping', (req, res) => {
    res.send("Funcionando!");
})

app.listen(port, ()=>{
    console.log('Executando Serviço!')
})

