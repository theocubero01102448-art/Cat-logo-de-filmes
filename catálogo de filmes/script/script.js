const filmes =[
    {
        titulo: "taxi drive",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/hvJvOYRrF9xxvNzg2Jd9PYWu7c3.jpg",
        descrição: "drive",
    },
      {
        titulo: "diverti-damente",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/4Kg34KTlnoHvjLzD7ji2jUSouvD.jpg",
        descrição: "mente",
    },
      {
        titulo: "psicopata americano",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/rxT7rVM4oLODCzdkkMPWGPMTSt3.jpg",
        descrição: "americano",
    },
     {
        titulo: "lucas neto em: acampamento de ferias 2",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/vYgZa09ICwAB2TkonMfXRT4Dj8E.jpg",
        descrição: "acampamento",
    },
     {
        titulo: "miudos e graudos",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/dbU5QOnTCPo4BKZskarx1bBG9lG.jpg",
        descrição: "graudos",
    },
     {
        titulo: "kung fu futebol clube",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/rO1YoR49hs9QPla0vwCxrMLln33.jpg",
        descrição: "kung",
    },

]

const listarfilmes = document getElementByid("listarfilmes")
function mostrafilme(lista){
    listarfilmes.innerHTML = ""
    lista.array.forEach(filme => {
        listarfilmes.innerHTML +=
        <div class="col-md-4">
            <div class="card card-filme h-100">
                <img src="${filme.imagem}"
                class="card-img-top">
                    <div class="card-body">
                        <h3>${filme.titulo}</h3>
                        <p>${filme.descrição}</p>
                        <button class="btn btn-dark"
                        onclick="verDetalhes('${filme.titulo}')">ver detalhes"</button>
            </div>
                </div>
                     </div>
