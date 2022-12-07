const express = require('express')//chamando o módulo express e guardando na constante

const app = express() // inicializando o express/a constante

app.listen('3000') // o listen fica ouvindo o navegador e quando entrar na porta indicada(3000), será enviado o que quisermos para o navegador
//express vai ficar ouvindo a porta 3000 para rodar no navegador (assim temos um server)


//middleware ou ponte, necessário para que sejam entendidos os JSONs recebidos nas requisições
app.use(express.json())//transformar tudo em json, requisições e respostas


/*
let autor = 'Suka'

app.route('/').get((req,res)=> res.send(autor))//get não tem body, somente put,post e patch possuem body
app.route('/Sobre').get((req,res)=> res.send('Hello Sobre!'))

app.route('/').post((req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.route('/').put( (req,res)=>{
    autor = req.body.autor
    res.send(autor)
})

app.route('/:identificador').delete((req,res)=>{
    res.send(req.params.identificador)
})
*/

app.route('/').post((req,res)=>{
    let {name,idade,livros,filmes} = req.body
    res.send(`Meu nome é ${name} e minha idade é ${idade}!
    Meus livros favoritos são ${livros[0]}, ${livros[1]} e ${livros[2]}`)
})