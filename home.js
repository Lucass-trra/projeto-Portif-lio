//header
var cabecalho = document.getElementById("cabecalho");
var ancoras = document.getElementById("ancoras");
var ancoraServico = document.getElementById("ancoraServico");

//---------aba serviços----------
var conteinerServico = document.getElementById("servicos").children;
var imagemServico = document.getElementsByClassName("imagemServico");
var sub_Titulo_Servico = document.getElementsByClassName("sub_Titulo_Servico");

//------aba portifófilo-------
var Containerportifolio = document.getElementById("portifolio").children;
var imagensPortifolio = document.getElementsByClassName("imagensPortifolio");
var titulosProjeto = document.getElementsByClassName("titulosProjeto");
var scrollsResumo = document.getElementsByClassName("scrollsResumo");

//------- Aba Contato---------
//links, imagens dos links
var LinkLista = document.getElementsByClassName("LinkLista");
var itemListaLink = document.getElementsByClassName("itemListaLink");


//animação feita para os cards da seção "serviços"
for(let i = 0; i < conteinerServico.length; i++) {
    conteinerServico[i].addEventListener("mouseover",function() {
       imagemServico[i].setAttribute("style","animation: animacaoFigurasCard 1s ease-in-out infinite;");
       sub_Titulo_Servico[i].setAttribute("style","color:gold; font-size:40px; letter-spacing:5px;");
    });

    conteinerServico[i].addEventListener("mouseout",function() {
        imagemServico[i].removeAttribute("style");
        sub_Titulo_Servico[i].removeAttribute("style");
    });
}


//manipulação da estilização do header com base na rolagem da página
document.addEventListener("scroll",function() {
    let posicaoSroll = window.pageYOffset;
   if(posicaoSroll != 0) {
        cabecalho.setAttribute("class","cabecalhoFundo")
        ancoras.setAttribute("class","classAncora");
   }else {
    cabecalho.removeAttribute("class");
    ancoras.removeAttribute("class");
   } 
})


//manipulação da estilização dos cards da seção "portifófio" 
for(let i = 0; i < Containerportifolio.length; i++) {
    Containerportifolio[i].addEventListener("mouseover",function() {
        titulosProjeto[i].removeAttribute("hidden","");
        scrollsResumo[i].removeAttribute("hidden","");
    })

    Containerportifolio[i].addEventListener("mouseout",function() {
        titulosProjeto[i].setAttribute("hidden","");
        scrollsResumo[i].setAttribute("hidden","");
    })
}


//animação para os Links da seção Contatos
for(let i = 0; i < LinkLista.length; i++) {
    LinkLista[i].addEventListener("mouseout",function() {
        LinkLista[i].style.transition = ".5s ease-in-out";
        itemListaLink[i].removeAttribute("style");
    }) 

     LinkLista[i].addEventListener("mouseover",function() {
        itemListaLink[i].setAttribute("style","animation: animacaoFigurasCard 1s ease-in-out infinite;")
     })
 }

