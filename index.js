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


//BODY PARAMS (transformar tudo em json)
app.route('/').post((req,res)=>{//get não tem body, somente put,post e patch possuem body
    let {name,idade,livros,filmes} = req.body
    res.send(`Meu nome é ${name} e minha idade é ${idade}!
    Meus livros favoritos são ${livros[0]}, ${livros[1]} e ${livros[2]}`)
})

//ROUTE PARAMS
//app.route('/').get((req,res)=> res.send("oi"))//necessário ter um get sem parâmetros pra funcionar os posteriores com parâmetros
app.route('/:variavel').get((req,res)=> res.send(req.params.variavel))
app.route('/identidade/:nome').get((req,res)=> res.send(req.params.nome))//necessário ter definido uma rota para ter a possibilidade de ter um caminho distinto e um parâmetro

//QUERY PARAMS
//app.route('/').get((req,res)=> res.send(req.query)) // exibe o objeto em JSON com todas as informações da query (verificar a rota no insomnia com =name=SUenny&cidade=...)
app.route('/').get((req,res)=> res.send(req.query.cidade))
app.route('/about/users').get((req,res)=> res.send(req.query))
