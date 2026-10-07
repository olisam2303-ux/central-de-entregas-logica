/* ============================================================
   CENTRAL DE ENTREGAS — LÓGICA E LINGUAGEM DE PROGRAMAÇÃO
   Este é o ÚNICO arquivo que o professor precisa editar.

   COMO COLOCAR O PRAZO DE UMA SEMANA
   Escreva a data da AULA da semana no formato "AAAA-MM-DD".
   Exemplo:  aula: "2026-10-13"
   A central soma sozinha os dias de prazo (diasPrazo, logo abaixo) e
   mostra ao aluno até quando a entrega vale nota cheia.
   Deixe "" quando ainda não houver data: a central mostra "prazo a definir".

   COMO DESLIGAR A TAREFA SP DE UMA SEMANA
   Troque  tarefaSP: true  por  tarefaSP: false  na linha da semana.
   ============================================================ */

const CENTRAL = {
  disciplina: "Lógica e Linguagem de Programação",

  // Endereço das atividades interativas já publicadas (não precisa mexer).
  baseAtividades: "https://olisam2303-ux.github.io/atividades-interativas-logica/",
  guiaGitHub: "https://olisam2303-ux.github.io/atividades-interativas-logica/github-passo-a-passo.html",
  apostila: "https://olisam2303-ux.github.io/apostila-python-interativa/",

  // Regra de prazo: dias corridos, contados a partir da data da aula.
  // Dentro do prazo vale nota cheia; depois vale metade; não entregue vale zero.
  diasPrazo: 5,

  // Como a nota do bimestre é fechada (os pesos precisam somar 100).
  pesos: [
    { id: "tarefa",   nome: "Tarefas SP",              peso: 20 },
    { id: "paulista", nome: "Prova Paulista Técnica",  peso: 30 },
    { id: "ava",      nome: "AVA (Pause e Responda + Registro de Aula)", peso: 25 },
    { id: "escrita",  nome: "Prova escrita",           peso: 25 }
  ],

  // Ferramenta de estudo para a prova escrita.
  notebookLM: "https://notebooklm.google.com/",

  // Qual bimestre abre primeiro quando o aluno entra na central (1 a 4).
  bimestreAtual: 4,

  bimestres: [
    {
      n: 1, titulo: "1º bimestre", semanas: "semanas 1 a 7",
      prova: "", provaPaulista: "",
      itens: [
        { s: 1, tema: "Algoritmo: entrada, processamento e saída", tarefaSP: true,
          registros: [["Criando seu primeiro algoritmo", "logica-01-primeiro-algoritmo.html"]],
          aula: "" },
        { s: 2, tema: "Decisão com SE, SENÃO e SENÃO SE", tarefaSP: true,
          registros: [["Sistema de vendas", "logica-02-sistema-de-vendas.html"]],
          aula: "" },
        { s: 3, tema: "Decisões encadeadas (faixas)", tarefaSP: true,
          registros: [["Sistema de classificação de idade", "logica-03-classificacao-idade.html"]],
          aula: "" },
        { s: 4, tema: "Operadores relacionais (comparações)", tarefaSP: true,
          registros: [["Melhoria contínua na prática: operadores relacionais", "logica-04-operadores-relacionais.html"]],
          aula: "" },
        { s: 5, tema: "Estrutura sequencial com o comando SE", tarefaSP: true,
          registros: [["Integrando estrutura sequencial com o comando SE", "logica-05-media-aprovacao.html"]],
          aula: "" },
        { s: 6, tema: "SE e SENÃO em um projeto guiado", tarefaSP: true,
          registros: [["Verificador de desconto do Cine Pipoca", "logica-06-validando-cadastro.html"]],
          aula: "" },
        { s: 7, tema: "SE e SENÃO aplicados a uma venda", tarefaSP: true,
          registros: [["Venda para um e-commerce de atacado", "logica-07-venda-ecommerce.html"]],
          aula: "" }
      ]
    },
    {
      n: 2, titulo: "2º bimestre", semanas: "semanas 8 a 14",
      prova: "", provaPaulista: "",
      itens: [
        { s: 8, tema: "Repetição com while e loop infinito", tarefaSP: true,
          registros: [["O detetive de bugs: loop infinito", "logica-08-s08a3.html"]],
          aula: "" },
        { s: 9, tema: "Repetição com for e range", tarefaSP: true,
          registros: [["Programando o Robô Chef", "logica-09-s09a1.html"]],
          aula: "" },
        { s: 10, tema: "Laços aninhados e listas", tarefaSP: true,
          registros: [["Detetives de performance", "logica-10-s10a3.html"]],
          aula: "" },
        { s: 11, tema: "Listas e ordenação", tarefaSP: true,
          registros: [["Ordenando listas com Bubble Sort", "logica-11-s11a3.html"]],
          aula: "" },
        { s: 12, tema: "Decisões com operadores lógicos", tarefaSP: true,
          registros: [["Desafio: Jogo da Velha", "logica-12-s12a4.html"]],
          aula: "" },
        { s: 13, tema: "Funções e bons nomes", tarefaSP: true,
          registros: [["Boas práticas de nomeação", "logica-13-s13a3.html"]],
          aula: "" },
        { s: 14, tema: "Funções, módulos e revisão de código", tarefaSP: true,
          registros: [["Gerenciador de tarefas em dois módulos", "logica-14-s14a3.html"],
                      ["Code review em duplas", "logica-14b-s14a4.html"]],
          aula: "" }
      ]
    },
    {
      n: 3, titulo: "3º bimestre", semanas: "semanas 15 a 20",
      prova: "", provaPaulista: "",
      itens: [
        { s: 15, tema: "Listas: percurso, média e busca", tarefaSP: true,
          registros: [["Percurso sequencial de vetores", "logica-15a-s15a2.html"],
                      ["Investigando dados: média, busca e listas", "logica-15b-s15a3.html"],
                      ["Sistema de análise de notas da turma", "logica-15c-s15a4.html"]],
          aula: "" },
        { s: 16, tema: "Matrizes e laços aninhados", tarefaSP: true,
          registros: [["Aninhando laços para percorrer matrizes", "logica-16a-s16a2.html"],
                      ["Agregando dados em matrizes", "logica-16b-s16a3.html"],
                      ["Miniprojeto: Planilha de vendas", "logica-16c-s16a4.html"]],
          aula: "" },
        { s: 17, tema: "Funções, escopo e revisão por pares", tarefaSP: true,
          registros: [["Revisão por pares e feedback assertivo", "logica-17-s17a4.html"]],
          aula: "" },
        { s: 18, tema: "Depuração e testes", tarefaSP: true,
          registros: [["Técnicas básicas de depuração", "logica-18a-s18a3.html"],
                      ["Mini-kata TDD: Calculadora", "logica-18b-s18a4.html"]],
          aula: "" },
        { s: 19, tema: "Textos: fatiamento e f-strings", tarefaSP: true,
          registros: [["Slicing e formatação com f-strings", "logica-19a-s19a3.html"],
                      ["Parsing de logs", "logica-19b-s19a4.html"]],
          aula: "" },
        { s: 20, tema: "Arquivos e planilhas (CSV)", tarefaSP: true,
          registros: [["Gerador de relatório de estoque", "logica-20a-s20a3.html"],
                      ["Integrador de dados com planilhas", "logica-20b-s20a4.html"]],
          aula: "" }
      ]
    },
    {
      n: 4, titulo: "4º bimestre", semanas: "semana 21 em diante",
      prova: "", provaPaulista: "",
      itens: [
        { s: 21, tema: "Programa com menu no terminal", tarefaSP: true,
          registros: [["Programando com menu no terminal", "logica-21-s21-papelaria.html"]],
          aula: "2026-10-06" }
        // Para incluir a próxima semana, copie o bloco acima, cole aqui
        // (separado por vírgula) e troque o número, o tema e o arquivo.
      ]
    }
  ]
};
