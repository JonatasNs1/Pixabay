"use stritic";


const pesquisar =async(evento) =>{
    if(evento.key == 'Enter'){
        const pesquisa = document.getElementById('pesquisa').value;
        // console.log(pesquisa);
        const url = `https://pixabay.com/api/?key=24217094-d3bf941cb7e41a3f57527f311&q=${pesquisa}&image_type=photo`;
        // console.log(url);
        const dados = await fetch(url); 
        // console.log(dados);
        const pesquisar = await dados.json();
         console.log(pesquisar.hits);

        
        
    }
    

}

document.getElementById('pesquisa')
        .addEventListener('keypress', pesquisar);
