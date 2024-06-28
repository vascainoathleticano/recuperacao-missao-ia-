const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
   {
       enunciado:CARROS ,
       alternativas: [
           {
               texto:opala  ,
               afirmacao: "beberao pra cacete , carro de mafioso"
           },
           {
               texto: monza ,
                afirmacao: "classsico , um dos melhores chevrollet em 1986"
           }


       ]
   }
   {
       enunciado: "maverick",
       alternativas: [
           {
               texto:maverick ,
               afirmacao: 1969
           },
           {
               texto: "um dos melhores fords da epoca",
               afirmacao: "duas opções de motores de seis cilindros – 2.8 ou 3.3 litros – e tinha como objetivo ser uma opção barata",
           }
       ]
   },
   {
       pergunta:" qual o ultimo ano de fabricaco do maverick" ,
       alternativas: [
           {
              
               afirmacao: "1979"
           },
           {
              
               afirmacao: "1973"
           }


       ]
   },
   {
       enunciado: "qual o ano da criacao da caravan ",
       alternativas: [
           {
            
               afirmacao:"1975"
           },
           {
          
               afirmacao: "1998"
           }




       ]
   },
   {
       enunciado:"qual foi o ano de criacao do chevette?",
       alternativas: [
           {
               texto:"O Chevette foi lançado em 1973, completando agora 50 anos" ,
               afirmacao: "1973"
           },
           {
               texto:"O Chevette foi lançado em 1973, completando agora 50 anos",
               afirmacao:"O Chevette foi lançado em 1963, completando agora 60 anos"
           }
       ]
   },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
   if (atual >= perguntas.length) {
       mostraResultado();
       return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   mostraAlternativas();
}


function mostraAlternativas() {
   for (const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativas = document.createElement("button");
       botaoAlternativas.textContent = alternativa.texto;
       botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
       caixaAlternativas.appendChild(botaoAlternativas);
   }
}


function respostaSelecionada(opcaoSelecionada) {
   const afirmacoes = opcaoSelecionada.afirmacao;
   historiaFinal += afirmacoes + " ";
   atual++;
   mostraPergunta();
}


function mostraResultado() {
   caixaPerguntas.textContent = "Em 2049...";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}


mostraPergunta();



