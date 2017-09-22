const express = require('express')
const app = express()
let path = require('path');

let inicio = 0;
let fim = 0;
let numero = 0;
let numGuess = 0;

//gera número aleatório entre os números passados por parâmetro na página update
function getRandomIntInclusive(){
  inicio = Math.ceil(inicio);
  fim = Math.floor(fim);
  return Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
}

//página de help
app.get('/help', (req,res) => {
  res.sendFile(path.join(__dirname+'/viewHelp.html'));
})

//página do updade
app.get('/update/:inicio/:fim', (req,res) => {
  //recebe números passados por parâmetro
  inicio = req.params['inicio'];
  fim = req.params['fim'];
  //chama função randômica
  numero = getRandomIntInclusive(inicio, fim);
  res.send('Agora digite /guess/numero3 inserindo um numero que esteja entre numero1 e numero2 | Exemplo: /guess/35')
})

//página do guess
app.get('/guess/:numeroguess', (req,res) =>{
  //recebe números passados por parâmetro
  numGuess = req.params['numeroguess'];
  //compara se o usuário acertou os valores
  if(numGuess == numero){
    res.send('Acertou')
  }else{
    res.send('Errou | O número certo é '+numero)
  }
})

app.listen(3000,function(){
  console.log('ENTROU NA ROTA!');
})
