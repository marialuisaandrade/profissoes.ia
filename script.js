const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Uma IA é capaz diagnosticar doenças com 98% de precisão. O hospital recomenda o uso constante. E agora?",
        alternativas: [
            {
                texto: "Usar a IA em todos os diagnósticos",
                afirmacao: "Você acerta muito mais nos diagnóstico, mas perde a prática e começa a depender de IA para tudo."
            },
            {
                texto: "Usar a IA apenas em casos extremos",
                afirmacao: "Mantém sua habilidade médica viva, mas perde diagnósticos precoces que poderiam ter salvado vidas."
            }
        ]
    },
    {
        enunciado: "Robôs cirurgiões agora operam sem as mãos humanas. Um hospital oferece a você o cargo de supervisor de robôs"
            {
                texto: "Aceitar liderar a equipe automatizada.",
                afirmacao: "Você se torna referência em cirurgia automatizada, mas deixa de operar e sente-se distante da prática"
            },
            {
                texto: "Continuar operando com sua equipe humana",
                afirmacao: "Mantém a conexão com a medicina, mas é visto como ultrapassado por hospitais modernos."
            }
        ]
    },
    {
        enunciado: "A IA prevê doenças com até 10 anos de antecedência com base em dados genéticos e hábitos",
        alternativas: [
            {
                texto: "Revelar todos os riscos aos pacientes",
                afirmacao: "Muitos pacientes mudam de vida, mas outros entram em pânico por doenças que talvez nunca aconteçam"
            },
            {
                texto: "Revelar apenas o que o paciente quiser,
                afirmacao: "Menos estresse nos pacientes, mas vocêperde oportunidades de prevenção."
            }
        ]
    },
    {
        enunciado: "A IA oferece planos de tratamento personalizados em segundos para cada paciente",
        alternativas: [
            {
                texto: "Confiar nos planos da IA e apenas assinar",
                afirmacao: "Ganha tempo e atende mais, mas pacientes sentem-se tratados como números"
            },
            {
                texto: "Revisar cada plano com cuidado",
                afirmacao: "Oferece cuidado humanizado,  mas vive sobrecarregado(a)"
            }
        ]
    },
    {
        enunciado: "O hospital quer reduzir o número de médicos físicos e adotar avatares de IA para atendimento básico",
        alternativas: [
            {
                texto: "Apoiar a mudança e realocar os médicos",
                afirmacao: "O hospital atende mais rápido e gasta menos, mas os pacientes e médicos reclamam da frieza"
            },
            {
                texto: "Defender a presença humana no atendimento",
                afirmacao: "Atendimento mais empático,  mas o hospital perde eficácia e verba."
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
