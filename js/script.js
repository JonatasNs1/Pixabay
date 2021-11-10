"use stritic";


const limparElementos = (elemento) =>{ // 12 passo - criar uma funcao para limpar
    while(elemento.firstChild){ // equanto tiver o primeiro elemento remove o ultimo, limpa toda div container para garregar denovo a div
        elemento.removeChild(elemento.lastChild);
    }

}


const pesquisar =async(evento) =>{
    if(evento.key == 'Enter' || evento.type == 'click'){
        const pesquisa = document.getElementById('pesquisa').value;
       
        // console.log(pesquisa);
        const url = `https://pixabay.com/api/?key=24217094-d3bf941cb7e41a3f57527f311&q=${pesquisa}&image_type=photo`;
        // console.log(url);
        const dados = await fetch(url); 
        // console.log(dados);
        const pesquisar = await dados.json();


        limparElementos(document.querySelector('.galeria'));
        //  console.log(pesquisar);
         carregarGaleria(pesquisar.hits); 
        
        
    }
    

}



    carregarImagem = (item) =>{
        // const imagemPesquisa = document.getElementById("imagemPesquisa");
        const galeria = document.querySelector('.galeria');

        const novoDiv = document.createElement("div")
        novoDiv.classList.add("ss") 
        novoDiv.innerHTML = 
        ` <div class="imagem-container">
        <img class= "imgPreview" src="${item.webformatURL}">
    
       </div>  
       <div>
       <div class="tags">
    
       ${item.tags}
       
       </div>
       <div class="likes">
       <div>
        <img class="imgLikes" src="img/like.png">
       </div>
          ${item.likes}
        
       </div>
       <div class="comments">${item.comments} </div>
       </div>
    `
         galeria.appendChild(novoDiv)
        
    }

const carregarGaleria = (imagens) => imagens.forEach(carregarImagem)




document.getElementById('pesquisa').addEventListener('keypress', pesquisar);

         document.getElementById('imagemPesquisa').onclick =  pesquisar;
        // imagemPesquisa.addEventListener('click', carregarImagem);
