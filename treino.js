/* Perguntas de treino para a prova escrita, por tema.
   Chave = "bimestre-passo" do arquivo conteudo.js.
   sem = semanas da SEDUC que o tema cobre; q = perguntas dissertativas. */
var TREINO = {
  "1-1": { sem: [1], q: [
    "Explique com as suas palavras o que é um algoritmo e dê um exemplo do dia a dia.",
    "Em um programa que calcula a média de duas notas, o que é a entrada, o que é o processamento e o que é a saída?",
    "Para que serve uma variável? Dê um exemplo de nome de variável e do valor que ela guardaria." ] },
  "1-2": { sem: [4], q: [
    "Qual é a diferença entre os operadores > e >= ? Dê um exemplo em que o resultado muda.",
    "Para idade = 18, diga se cada comparação é verdadeira ou falsa: idade > 18, idade >= 18, idade <> 18.",
    "Por que uma comparação é necessária para o programa tomar uma decisão?" ] },
  "1-3": { sem: [5, 6, 7], q: [
    "Explique o que o programa faz quando a condição do SE é falsa e existe um SENÃO.",
    "Escreva em pseudocódigo um trecho que mostra Maior de idade quando a idade é 18 ou mais e Menor de idade no outro caso.",
    "Um desconto de 10% vale para compras de 100 reais ou mais. Para uma compra de 100 reais, o desconto é aplicado? Justifique com a comparação usada." ] },
  "1-4": { sem: [2, 3], q: [
    "Por que a ordem dos testes importa em uma decisão encadeada?",
    "Escreva em pseudocódigo a classificação: até 11 anos Criança, de 12 a 17 Adolescente, 18 ou mais Adulto.",
    "Na classificação acima, o que aparece para a idade 12? Explique por qual teste o programa passou." ] },
  "2-1": { sem: [8], q: [
    "O que é um loop infinito e o que costuma causá-lo?",
    "O que o código abaixo mostra na tela? contador = 3 / while contador > 0: / print(contador) / contador = contador - 1",
    "No código da pergunta anterior, o que acontece se a última linha for apagada?" ] },
  "2-2": { sem: [9, 12], q: [
    "Quais números range(1, 6) gera? E range(0, 10, 2)?",
    "Quando é melhor usar for e quando é melhor usar while? Dê um exemplo de cada.",
    "Escreva um for que mostra a tabuada do 5, de 1 a 10." ] },
  "2-3": { sem: [10, 11], q: [
    "Na lista nomes = [\"Ana\", \"Bia\", \"Caio\"], o que é nomes[0]? E nomes[2]?",
    "Explique o que este código faz: soma = 0 / for nota in notas: / soma = soma + nota",
    "Para que serve len(lista)? Dê um exemplo de uso junto com a soma para calcular uma média." ] },
  "2-4": { sem: [13, 14], q: [
    "Qual é a diferença entre print e return dentro de uma função?",
    "O que é um parâmetro? Identifique o parâmetro em def dobro(numero): return numero * 2",
    "Por que calcular_media é um nome melhor para uma função do que f1?" ] },
  "3-1": { sem: [15], q: [
    "Explique a diferença entre percorrer uma lista e buscar um valor nela.",
    "O que range(len(lista)) gera para uma lista com 4 itens?",
    "Escreva um trecho que conta quantas notas de uma lista são maiores ou iguais a 6." ] },
  "3-2": { sem: [16], q: [
    "O que é uma matriz? Como ela é representada em Python?",
    "Na matriz m = [[1, 2, 3], [4, 5, 6]], qual é o valor de m[1][0]? E de m[0][2]?",
    "Por que são necessários dois laços, um dentro do outro, para percorrer uma matriz inteira?" ] },
  "3-3": { sem: [17, 18], q: [
    "Um programa pode rodar sem mensagem de erro e ainda estar errado? Explique com um exemplo.",
    "A função def media(a, b): return a + b / 2 devolve 10.0 para media(6, 8). Qual é o erro e como corrigir?",
    "Descreva três passos que você segue para encontrar um erro em um programa." ] },
  "3-4": { sem: [19], q: [
    "Para texto = \"PYTHON\", qual é o resultado de texto[0:3]? E de texto[3:6]?",
    "O que o método split() devolve? Dê um exemplo com uma frase de três palavras.",
    "Escreva uma f-string que mostra: Produto: Caneta | Preço: R$ 2.50, usando as variáveis nome e preco." ] },
  "3-5": { sem: [20], q: [
    "Qual é a diferença entre abrir um arquivo com \"w\" e abrir sem esse segundo valor?",
    "Por que se usa with open(...) em vez de apenas open(...)?",
    "Um arquivo tem a linha Caneta;10. Explique o que linha.strip().split(\";\") devolve." ] },
  "4-1": { sem: [21], q: [
    "Por que um programa com menu usa while?",
    "Para que serve o elif em um menu com várias opções?",
    "O que o programa deve fazer quando o usuário digita uma opção que não existe? Escreva o trecho de código." ] }
};
