const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está desenvolvendo um novo aplicativo para ajudar pessoas com deficiências motoras. A nova tecnologia utiliza IA para tornar o aplicativo mais acessível. Qual a primeira funcionalidade que você gostaria de implementar?",
        alternativas: [
            {
                texto: "Controle por voz para permitir que usuários interajam sem usar as mãos.",
                afirmacao: "Você acredita que o controle por voz pode tornar o aplicativo muito mais acessível e fácil de usar."
            },
            {
                texto: "Um sistema de previsão de texto para facilitar a digitação.",
                afirmacao: "Você considera que um sistema de previsão de texto pode acelerar a comunicação para aqueles que têm dificuldades motoras."
            }
        ]
    },
    {
        enunciado: "Durante a fase de testes, um usuário com deficiência motora sugere a adição de uma funcionalidade baseada em IA que aprenda e se adapte às suas necessidades específicas. O que você faz?",
        alternativas: [
            {
                texto: "Implementa a funcionalidade e solicita feedback contínuo do usuário para ajustar o aplicativo às suas necessidades.",
                afirmacao: "Você entende que a personalização contínua é crucial para a acessibilidade e inclusão."
            },
            {
                texto: "Decide que a funcionalidade atual é suficiente e não faz mudanças baseadas no feedback do usuário.",
                afirmacao: "Você acredita que a funcionalidade padrão é adequada e que modificações adicionais não são necessárias."
            }
        ]
    },
    {
        enunciado: "O aplicativo está quase pronto, mas você precisa decidir sobre a integração de um assistente virtual baseado em IA para ajudar com comandos e navegação. Qual seria a sua abordagem?",
        alternativas: [
            {
                texto: "Incorpora um assistente virtual com capacidade de resposta por voz e suporte a comandos de texto.",
                afirmacao: "Você vê o assistente virtual como uma ferramenta vital para aumentar a acessibilidade e a facilidade de uso do aplicativo."
            },
            {
                texto: "Opta por não incluir um assistente virtual e foca em melhorar a interface de usuário com opções tradicionais de acessibilidade.",
                afirmacao: "Você acredita que melhorias na interface são suficientes para garantir a acessibilidade sem a necessidade de um assistente virtual."
            }
        ]
    },
    {
        enunciado: "Após o lançamento do aplicativo, você recebe feedback sobre a necessidade de um recurso de personalização de interfaces baseado em IA. Como você responde a isso?",
        alternativas: [
            {
                texto: "Desenvolve e implementa o recurso de personalização para garantir que todos os usuários possam adaptar a interface às suas necessidades.",
                afirmacao: "Você vê a personalização como uma forma importante de garantir que o aplicativo possa atender às diversas necessidades dos usuários."
            },
            {
                texto: "Decide adiar a implementação de novas personalizações e foca em promover as funcionalidades existentes.",
                afirmacao: "Você acredita que as funcionalidades atuais são adequadas e que a personalização pode ser considerada em uma futura atualização."
            }
        ]
    },
    {
        enunciado: "Um usuário solicita a integração de um recurso de IA para análise de dados e sugestões de melhorias com base em suas interações. O que você faz?",
        alternativas: [
            {
                texto: "Implementa o recurso de análise de dados e sugestões para aprimorar continuamente o aplicativo com base no feedback do usuário.",
                afirmacao: "Você acredita que a análise de dados pode ajudar a adaptar o aplicativo e melhorar a experiência do usuário."
            },
            {
                texto: "Opta por não incluir o recurso e continua com o aplicativo conforme foi lançado.",
                afirmacao: "Você acha que o aplicativo já atende bem às necessidades dos usuários e que adicionar mais recursos pode ser desnecessário."
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Resumo do impacto da IA na acessibilidade...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
