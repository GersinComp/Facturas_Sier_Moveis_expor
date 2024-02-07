
document.addEventListener("DOMContentLoaded", function () {

    const toggleButton = document.getElementById("toggleButton");
    const frame = document.querySelector(".frame");

    let produtoSelecionado = null; // Variável para armazenar o produto selecionado

    toggleButton.addEventListener("click", () => {
        frame.classList.toggle("show");
        toggleButton.textContent = frame.classList.contains("show") ? "Hide" : "Instructions";
    });

    const titulos = [
        // Cadeiras, Banquetas, Poltrona, Puff e Luminária - índice inicial 0
        "Front side",
        "Back side",
        "Under the product",
        "Product",
        "Product protection",

        // Mesas e aparador - índice inicial 5
            //tampos
        "Upper view",
        "Under the product",
            //bases
        "Front side",
        "Front side",
        "Under the product",
            //videos tampos ou estante
        "Product",
        "Product protection",
            //videos bases ou estante
        "Product",
        "Product protection",
            //videos estante
        "Product",
        "Product protection",

        // Buffet - índice inicial 16
        "Front side",
        "Product interior",
        "Drawers",
        "Back side",

        // Mesa de jogos - índice inicial 20
        "Upper view",
        "Under the product",
        "Drawers",
        "Front side",
        "Front side",
        "Under the product",

        // Cachepot - índice inicial 26
        "Front side",
        "Front side",
        "Product interior",
        "Under the product",
        "Drawers",

        // Bancos, Mesa de apoio, Carrinho, Centro, Lateral - índice inicial 31
        "Front side",
        "Front side",
        "Under the product",

        //Molduras e espelho - índice inicial 34
        "Front side",
        "Front side",
        "Back side",
        "Drawers",

        //Estante - índice inicial 38 
        "Front side",
        "Product interior",
        "Back side",
        "Shelves",
        "Pannel",

        // CD - índice inicial 43
        "Distribution Center 1",
        "Distribution Center 2",
        "Distribution Center 3",

        //DC - índice inicial 46
        "Container empty",
        "Loading Dock 1",
        "Loading Dock 2",
        "Loading Dock 3",
        "Loading Dock 4",
        "Loading Dock 5",
        "Loading Dock 6",
        "Loading Dock 7",
        "Seal",
        "Sealed container",
    ]

    const produtos = [   
        
    //Copiar o campo abaixo para acrescentar os produtos
        {
            nome: "TABLE",
            imagens: [
            //Primeira foto é a capa que aparece no menu
                "imagens/centro_de_distribuicao/cd_capa.jpg",
                "imagens/packing_list_jat_045.png",
                "imagens/centro_de_distribuicao/cd_capa.jpg",
                "Logo Sier.png"
            ],
            videos: [
                "",
                "imagens/5.mp4"
            ],
            dados: {
                ref: "ㅤ",
                descricao: "TABLEㅤ",
                tecidoTela: "ㅤ",
                cor: "ㅤ",
                observacao: "ㅤ"
            }
        },

        // Centro de Distribuição
        {
            nome: "Distribution Center",
            imagens: [
                "imagens/centro_de_distribuicao/cd_capa.jpg",
                "",
                "",
                ""
            ],
            videos: [
                
            ],
            dados: {
                descricao: "Distribution Center"
            }
        },
        
        // Carregamento
        {
            nome: "Loading Dock",
            imagens: [
                "imagens/doca_de_carregamento/dc_capa.jpg",
                "",
                "",
                "",
                "",
                "",
                ""
            ],
            videos: [
                
            ],
            dados: {
                descricao: "Loading Dock"
            }
        }  
    ];

    // Exibição dos produtos

    const menu = document.getElementById("menu");
    const menuNota = document.getElementById("menu_nota");
    const detalhesContainer = document.querySelector(".container_detalhes");
    
    function exibirDetalhes(produto) {
        menu.style.display = "none";
        menuNota.style.display = "none"; 

        detalhesContainer.innerHTML = `
        <div class="detalhes">
            <div class="detalhes-container">

                <h2 tabindex="0" class="titulo">Description: ${produto.dados.descricao}</h2>

                ${
                    // Verificar todas as imagens não vazias e adicionar elementos HTML correspondentes
                    produto.imagens.slice(1).map((imagem, index) => {
                        if (imagem.trim() !== "") {
                            let tituloIndex;
                            if (produto.nome.includes("TABLE")) {
                                tituloIndex = index + 5;
                            } else if (produto.nome.includes("BUFFET")) {
                                tituloIndex = index + 16;
                            } else if (produto.nome.includes("GAMING")) {
                                tituloIndex = index + 20;
                            } else if (produto.nome.includes("PLANTER")) {
                                tituloIndex = index + 26;
                            } else if (produto.nome.includes("ACCENT") || produto.nome.includes("CART") || produto.nome.includes("BENCH")
                                || produto.nome.includes("SIDE") || produto.nome.includes("COFFEE") || produto.nome.includes("MAGAZINE")) {
                                tituloIndex = index + 31;
                            } else if (produto.nome.includes("MIRROR") || produto.nome.includes("FRAME")) {
                                tituloIndex = index + 34;
                            } else if (produto.nome.includes("BOOKSHELF")) {
                                tituloIndex = index + 38;
                            } else if (produto.nome === "Distribution Center") {
                                tituloIndex = index + 43;
                            } else if (produto.nome === "Loading Dock") {
                                tituloIndex = index + 46;
                            } else {
                                tituloIndex = index;
                            }
                            return `
                                <h3>${titulos[tituloIndex]}</h3>
                                <img src="${imagem}" alt="${produto.nome}">
                            `;
                        }
                        return ""; // Retorna uma string vazia se a imagem estiver vazia
                    }).join("")
                }

                
                    
                ${
                    // Verificar todos os vídeos não vazios e adicionar elementos HTML correspondentes
                    produto.videos.map((video, index) => {
                        if (video.trim() !== "") {
                            let tituloIndex;
                            if (produto.nome !== "Distribution Center" && produto.nome !== "Loading Dock") {
                                if (produto.nome.includes("CHAIR") || produto.nome.includes("BENCH") || produto.nome.includes("ARMCHAIR")
                                    || produto.nome.includes("STOOL") || produto.nome.includes("OTTOMAN") || produto.nome.includes("FLOOR LAMP")
                                    || produto.nome.includes("FRAME") || produto.nome.includes("ACCENT") || produto.nome.includes("CART")
                                    || produto.nome.includes("SIDE") || produto.nome.includes("PLANTER") || produto.nome.includes("BUFFET")
                                    || produto.nome.includes("MAGAZINE")) {
                                    tituloIndex = index + 3;
                                } else if (produto.nome.includes("TABLE") || produto.nome.includes("BOOKSHELF")
                                    || produto.nome.includes("GAMING") || produto.nome.includes("COFFEE")) {
                                    tituloIndex = index + 10;
                                }
                                return `
                                    <h3>${titulos[tituloIndex]}</h3>
                                    <video controls>
                                        <source src="${video}" type="video/mp4">
                                        Seu navegador não suporta o elemento de vídeo.
                                    </video>
                                `;
                            }
                        }
                        return ""; // Retorna uma string vazia se o vídeo estiver vazio
                    }).join("")
                }
            
                <div class="container-voltar">
                    <button class="botao-voltar">Back to menu</button>
                </div>
            </div>
        </div>
        `;

        const botaoVoltar = detalhesContainer.querySelector(".botao-voltar");
        botaoVoltar.addEventListener("click", () => voltarAoMenu());

        const tituloH2 = detalhesContainer.querySelector(".titulo");

            if (tituloH2) 
                tituloH2.focus();
    }

    function voltarAoMenu() {
        detalhesContainer.innerHTML = ""; // Limpar os detalhes exibidos
        menu.style.display = "flex";
        menuNota.style.display = "flex"; 
        if (produtoSelecionado) {
            produtoSelecionado.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Resto do Código

    function criarProduto(produto) {
        const divProduto = document.createElement("div");
        divProduto.classList.add("produto");

        const container = document.createElement("div");
        container.classList.add("produto-container");

        const img = document.createElement("img");
        
        img.src = produto.imagens[0];
        img.alt = produto.nome;
        img.classList.add("produto-imagem");
        img.addEventListener("click", () => {

            exibirDetalhes(produto);
                img.classList.add("produto-visto");
                innerHTML="";
                produtoSelecionado = img; // Armazena o produto selecionado
            });

        const tabela = document.createElement("table");
        tabela.classList.add("lista");
            tabela.innerHTML = `
            <tr>
                <th>Ref</th>
                <td>${produto.dados.ref}</td>
            </tr>
            <tr>
                <th>Description</th>
                <td>${produto.dados.descricao}</td>
            </tr>
            <tr>
                <th>Fabric/Glass</th>
                <td>${produto.dados.tecidoTela}</td>
            </tr>
            <tr>
                <th>Color</th>
                <td>${produto.dados.cor}</td>
            </tr>
            <tr>
                <th>Obs</th>
                <td>${produto.dados.observacao}</td>
            </tr>
        `;

        if (produto.nome === "Distribution Center" || produto.nome === "Loading Dock") {
            tabela.style.display = "none";

            const tituloEspecifico = produto.nome === "Distribution Center" ? "Distribution Center" : "Loading Dock";
            const tituloElemento = document.createElement("h3");

            tituloElemento.textContent = tituloEspecifico;
            container.appendChild(img);
            container.appendChild(tituloElemento);
        } 

            else {
                const tabela = document.createElement("table");
                tabela.classList.add("lista");
                tabela.innerHTML = `
                    <tr>
                        <th>Ref</th>
                        <td>${produto.dados.ref}</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>${produto.dados.descricao}</td>
                    </tr>
                    <tr>
                        <th>Fabric/Glass</th>
                        <td>${produto.dados.tecidoTela}</td>
                    </tr>
                    <tr>
                        <th>Color</th>
                        <td>${produto.dados.cor}</td>
                    </tr>
                    <tr>
                        <th>Obs</th>
                        <td>${produto.dados.observacao}</td>
                    </tr>
                `;
                container.appendChild(img);
                container.appendChild(tabela);
        }

        divProduto.appendChild(container);
        menu.appendChild(divProduto);

    }

    function exibirProdutos() {
        produtos.forEach(produto => criarProduto(produto));
    }

    exibirProdutos();


});