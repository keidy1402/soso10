/* Trilha do Conhecimento · banco de lições das 8 matérias */
/* conteúdo das lições: k = mc (múltipla escolha) | tf (verdadeiro ou falso) | order (montar) | pairs (ligar pares) | type (digitar) */
const MATERIAS = {
  mat: {
    n: "Matemática",
    cor: "#18923b",
    ic: "½",
    un: "Frações e porcentagem",
    lic: [
      {
        n: "Frações no dia a dia",
        qs: [
          {
            k: "mc",
            t: "A pizza foi dividida em 8 pedaços. Que fração já foi comida?",
            fig: "pizza",
            o: ["5/8", "3/8", "3/5", "8/3"],
            c: 1,
            d: "Conte os pedaços que faltam e compare com o total.",
          },
          {
            k: "mc",
            t: "Qual fração é maior?",
            fig: "barras",
            o: ["1/2", "3/8"],
            c: 0,
            d: "O número de baixo diz em quantos pedaços o inteiro foi cortado.",
          },
          {
            k: "pairs",
            t: "Ligue a fração ao número decimal",
            p: [
              ["1/2", "0,5"],
              ["1/4", "0,25"],
              ["3/4", "0,75"],
              ["1/10", "0,1"],
            ],
          },
          {
            k: "mc",
            t: "Como fica 6/8 na forma mais simples?",
            o: ["3/4", "2/3", "6/4", "1/2"],
            c: 0,
            d: "Divida o de cima e o de baixo pelo mesmo número.",
          },
          {
            k: "type",
            t: "Uma receita pede 3/4 de xícara. Fazendo meia receita, quanto vai? (escreva a fração)",
            a: ["3/8"],
            ph: "ex.: 1/2",
            d: "Metade de uma fração: dobre o número de baixo.",
          },
        ],
      },
      {
        n: "Porcentagem",
        qs: [
          {
            k: "mc",
            t: "Quanto é 10% de 200?",
            o: ["2", "20", "10", "200"],
            c: 1,
            d: "10% é dividir por 10.",
          },
          { k: "tf", t: "0,5 é a mesma coisa que 50%.", c: true },
          {
            k: "type",
            t: "Quanto é 25% de 80?",
            a: ["20"],
            ph: "Digite o número",
            d: "25% é a quarta parte: divida por 4.",
          },
          {
            k: "mc",
            t: "Um tênis de R$ 120 está com 10% de desconto. Quanto custa?",
            o: ["R$ 110", "R$ 108", "R$ 100", "R$ 12"],
            c: 1,
            d: "Ache 10% de 120 e tire do preço.",
          },
          {
            k: "order",
            t: "Coloque do menor para o maior",
            w: ["0,3", "1/2", "0,75", "1"],
            d: "Transforme tudo em decimal: 1/2 = 0,5.",
          },
        ],
      },
    ],
  },
  por: {
    n: "Português",
    cor: "#012673",
    ic: "Aa",
    un: "Leitura e escrita",
    lic: [
      {
        n: "O conto do Saci",
        qs: [
          {
            k: "mc",
            texto:
              "Naquela noite de vento, a porteira bateu sozinha. Vó Dita sorriu: “É o Saci, querendo o fumo do meu cachimbo.” No dia seguinte, a crina do cavalo apareceu toda trançada. Pedrinho deixou uma peneira na porta, porque ouviu dizer que o Saci para pra contar os furinhos e esquece a travessura.",
            t: "Por que Pedrinho deixou uma peneira na porta?",
            o: ["Para pegar água da chuva", "Para o Saci parar e contar os furos", "Para enfeitar a casa"],
            c: 1,
            d: "Releia a última frase do texto.",
          },
          {
            k: "mc",
            t: "No texto, quem disse que era o Saci?",
            o: ["Pedrinho", "O cavalo", "Vó Dita"],
            c: 2,
            d: "Procure quem sorriu e falou.",
          },
          {
            k: "mc",
            t: "Qual destas palavras é um substantivo?",
            o: ["correr", "bonito", "cachorro", "rapidamente"],
            c: 2,
            d: "Substantivo dá nome às coisas, pessoas e bichos.",
          },
          {
            k: "tf",
            t: "“Mas” e “mais” querem dizer a mesma coisa.",
            c: false,
            d: "“Mas” indica oposição; “mais” indica quantidade.",
          },
          {
            k: "type",
            t: "Qual é o plural de “pão”?",
            a: ["paes"],
            ph: "Escreva a palavra",
            d: "Termina em -ães.",
          },
        ],
      },
      {
        n: "Frases e palavras",
        qs: [
          {
            k: "mc",
            t: "Qual palavra está escrita corretamente?",
            o: ["excessão", "exceção", "eceção", "exeção"],
            c: 1,
          },
          {
            k: "order",
            t: "Monte a frase",
            w: ["A", "menina", "leu", "o", "livro", "ontem."],
            x: ["correu"],
          },
          {
            k: "pairs",
            t: "Ligue as palavras de mesmo sentido",
            p: [
              ["feliz", "contente"],
              ["rápido", "veloz"],
              ["bonito", "belo"],
              ["começar", "iniciar"],
            ],
          },
          {
            k: "mc",
            t: "Qual frase é uma pergunta?",
            o: ["Que dia lindo!", "Você vem amanhã?", "Feche a porta.", "Eu gosto de ler."],
            c: 1,
            d: "Procure o ponto de interrogação.",
          },
          { k: "type", t: "Qual é o contrário de “claro”?", a: ["escuro"], ph: "Escreva a palavra" },
        ],
      },
    ],
  },
  cie: {
    n: "Ciências",
    cor: "#e0a100",
    ic: "🧪",
    un: "Vida e planeta",
    lic: [
      {
        n: "O corpo e os seres vivos",
        qs: [
          {
            k: "mc",
            t: "Qual órgão bombeia o sangue pelo corpo?",
            o: ["Pulmão", "Coração", "Estômago", "Fígado"],
            c: 1,
          },
          {
            k: "pairs",
            t: "Ligue o órgão à sua função",
            p: [
              ["Pulmão", "respiração"],
              ["Estômago", "digestão"],
              ["Coração", "circulação"],
              ["Cérebro", "comanda o corpo"],
            ],
          },
          { k: "tf", t: "As plantas produzem o próprio alimento pela fotossíntese.", c: true },
          {
            k: "mc",
            t: "Qual destes animais é um mamífero?",
            o: ["Tubarão", "Baleia", "Pinguim", "Sapo"],
            c: 1,
            d: "Mamíferos amamentam os filhotes.",
          },
          {
            k: "type",
            t: "Que gás as plantas soltam na fotossíntese?",
            a: ["oxigenio", "o2"],
            ph: "Escreva o nome do gás",
          },
        ],
      },
      {
        n: "Água e Sistema Solar",
        qs: [
          {
            k: "mc",
            t: "Quando a água vira vapor por causa do calor, chamamos de:",
            o: ["condensação", "evaporação", "solidificação", "fusão"],
            c: 1,
          },
          {
            k: "order",
            t: "Coloque o ciclo da água em ordem",
            w: ["Evaporação", "Condensação", "Chuva", "Infiltração no solo"],
            d: "A água sobe, forma nuvens, cai e entra na terra.",
          },
          { k: "tf", t: "O Sol é uma estrela.", c: true },
          {
            k: "mc",
            t: "Qual planeta é o mais próximo do Sol?",
            o: ["Vênus", "Terra", "Mercúrio", "Marte"],
            c: 2,
          },
          {
            k: "mc",
            t: "Qual destas é uma fonte de energia renovável?",
            o: ["Petróleo", "Carvão", "Energia solar", "Gás natural"],
            c: 2,
          },
        ],
      },
    ],
  },
  his: {
    n: "História",
    cor: "#7a3fc2",
    ic: "🏛",
    un: "Brasil e o mundo antigo",
    lic: [
      {
        n: "Marcos do Brasil",
        qs: [
          {
            k: "mc",
            t: "Em que ano foi assinada a Lei Áurea, que aboliu a escravidão no Brasil?",
            o: ["1822", "1888", "1889", "1500"],
            c: 1,
          },
          {
            k: "order",
            t: "Monte a linha do tempo, do mais antigo ao mais recente",
            w: [
              "Chegada dos portugueses",
              "Independência",
              "Abolição da escravidão",
              "Proclamação da República",
            ],
          },
          {
            k: "mc",
            t: "A Independência do Brasil foi proclamada em:",
            o: ["1500", "1822", "1888", "1930"],
            c: 1,
          },
          { k: "tf", t: "O Rio de Janeiro já foi capital do Brasil.", c: true },
          { k: "type", t: "Qual foi a primeira capital do Brasil?", a: ["salvador"], ph: "Nome da cidade" },
        ],
      },
      {
        n: "Povos antigos e democracia",
        qs: [
          {
            k: "mc",
            t: "Em qual cidade da Grécia Antiga surgiu a democracia?",
            o: ["Esparta", "Roma", "Atenas", "Cairo"],
            c: 2,
          },
          {
            k: "pairs",
            t: "Ligue o povo à sua criação",
            p: [
              ["Egípcios", "pirâmides"],
              ["Romanos", "aquedutos"],
              ["Gregos", "Jogos Olímpicos"],
              ["Fenícios", "alfabeto"],
            ],
          },
          {
            k: "mc",
            t: "Os faraós governavam qual civilização?",
            o: ["Egito", "Grécia", "China", "Maia"],
            c: 0,
          },
          { k: "tf", t: "A Constituição atual do Brasil é de 1988.", c: true },
          {
            k: "type",
            t: "A partir de quantos anos um brasileiro já pode votar?",
            a: ["16", "dezesseis"],
            ph: "Idade",
            d: "Entre 16 e 18 anos o voto é opcional.",
          },
        ],
      },
    ],
  },
  geo: {
    n: "Geografia",
    cor: "#e2621b",
    ic: "🌎",
    un: "Brasil e mapas",
    lic: [
      {
        n: "Regiões do Brasil",
        qs: [
          { k: "mc", t: "Em quantas regiões o Brasil é dividido?", o: ["4", "5", "6", "7"], c: 1 },
          {
            k: "pairs",
            t: "Ligue o estado à sua região",
            p: [
              ["Bahia", "Nordeste"],
              ["Paraná", "Sul"],
              ["Amazonas", "Norte"],
              ["Goiás", "Centro-Oeste"],
              ["Minas Gerais", "Sudeste"],
            ],
          },
          {
            k: "mc",
            t: "Qual é a capital do Brasil?",
            o: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
            c: 2,
          },
          { k: "tf", t: "A Amazônia é a maior floresta tropical do mundo.", c: true },
          {
            k: "type",
            t: "Qual é o maior rio do Brasil em volume de água?",
            a: ["amazonas", "rio amazonas"],
            ph: "Nome do rio",
          },
        ],
      },
      {
        n: "Mapas e lugares",
        qs: [
          { k: "mc", t: "De que lado o Sol nasce?", o: ["Norte", "Sul", "Leste", "Oeste"], c: 2 },
          { k: "order", t: "Do menor para o maior", w: ["Bairro", "Cidade", "Estado", "País"] },
          {
            k: "mc",
            t: "Para que serve a legenda de um mapa?",
            o: [
              "Dizer quem fez o mapa",
              "Explicar o que cada símbolo e cor significa",
              "Mostrar a data",
              "Enfeitar",
            ],
            c: 1,
          },
          {
            k: "tf",
            t: "A Linha do Equador passa pelo Brasil.",
            c: true,
            d: "Ela corta estados como o Amapá e o Pará.",
          },
          {
            k: "mc",
            t: "Em qual continente fica o Brasil?",
            o: ["África", "Europa", "América", "Oceania"],
            c: 2,
          },
        ],
      },
    ],
  },
  ing: {
    n: "Inglês",
    cor: "#d6382f",
    ic: "EN",
    un: "Primeiros passos",
    lic: [
      {
        n: "Palavras do dia a dia",
        qs: [
          { k: "mc", t: "Como se diz “maçã” em inglês?", o: ["apple", "orange", "banana", "grape"], c: 0 },
          {
            k: "pairs",
            t: "Ligue as palavras",
            p: [
              ["dog", "cachorro"],
              ["book", "livro"],
              ["school", "escola"],
              ["water", "água"],
            ],
          },
          {
            k: "order",
            t: "Traduza: “Eu sou um estudante”",
            w: ["I", "am", "a", "student"],
            x: ["is", "the"],
          },
          { k: "mc", t: "Que cor é “yellow”?", o: ["Azul", "Verde", "Amarelo", "Vermelho"], c: 2 },
          { k: "type", t: "Traduza para o inglês: “Bom dia”", a: ["good morning"], ph: "Escreva em inglês" },
        ],
      },
      {
        n: "Família e frases",
        qs: [
          {
            k: "mc",
            t: "Complete: “She ___ my friend.”",
            o: ["am", "is", "are", "be"],
            c: 1,
            d: "Com he, she e it usamos “is”.",
          },
          {
            k: "pairs",
            t: "Ligue a família",
            p: [
              ["mother", "mãe"],
              ["father", "pai"],
              ["brother", "irmão"],
              ["sister", "irmã"],
            ],
          },
          {
            k: "order",
            t: "Traduza: “Onde fica a biblioteca?”",
            w: ["Where", "is", "the", "library?"],
            x: ["what"],
          },
          { k: "tf", t: "“Thursday” quer dizer quinta-feira.", c: true },
          { k: "type", t: "Como se escreve o número 10 em inglês?", a: ["ten"], ph: "Escreva em inglês" },
        ],
      },
    ],
  },
  esp: {
    n: "Espanhol",
    cor: "#b0306a",
    ic: "ES",
    un: "¡Hola!",
    lic: [
      {
        n: "Primeiras palavras",
        qs: [
          { k: "mc", t: "O que significa “Hola”?", o: ["Tchau", "Olá", "Obrigado", "Por favor"], c: 1 },
          {
            k: "pairs",
            t: "Ligue as palavras",
            p: [
              ["perro", "cachorro"],
              ["leche", "leite"],
              ["libro", "livro"],
              ["rojo", "vermelho"],
            ],
          },
          { k: "order", t: "Traduza: “Eu me chamo Ana”", w: ["Yo", "me", "llamo", "Ana"], x: ["soy"] },
          { k: "type", t: "Traduza para o espanhol: “obrigado”", a: ["gracias"], ph: "Escreva em espanhol" },
          {
            k: "tf",
            t: "Em espanhol, “exquisito” quer dizer “delicioso”.",
            c: true,
            d: "É um falso amigo: parece “esquisito”, mas é elogio.",
          },
        ],
      },
      {
        n: "Falsos amigos",
        qs: [
          {
            k: "mc",
            t: "Em espanhol, “embarazada” quer dizer:",
            o: ["envergonhada", "grávida", "embaraçada", "cansada"],
            c: 1,
            d: "Falso amigo! Envergonhada é “avergonzada”.",
          },
          {
            k: "mc",
            t: "Como se diz “boa noite”?",
            o: ["Buenos días", "Buenas tardes", "Buenas noches", "Hasta luego"],
            c: 2,
          },
          { k: "tf", t: "“Oficina” em espanhol quer dizer escritório.", c: true },
          { k: "order", t: "Traduza: “Como você está?”", w: ["¿Cómo", "estás?"], x: ["eres", "qué"] },
          {
            k: "type",
            t: "Como se escreve o número 5 em espanhol?",
            a: ["cinco"],
            ph: "Escreva em espanhol",
          },
        ],
      },
    ],
  },
  edf: {
    n: "Educação Física",
    cor: "#0f8f86",
    ic: "⚽",
    un: "Corpo em movimento",
    lic: [
      {
        n: "Saúde e esporte",
        qs: [
          {
            k: "mc",
            t: "Antes de começar um exercício, o ideal é:",
            o: ["Comer bastante", "Fazer aquecimento", "Dormir", "Ficar parado"],
            c: 1,
          },
          { k: "tf", t: "Beber água durante a atividade física é importante.", c: true },
          {
            k: "pairs",
            t: "Ligue o esporte ao que ele usa",
            p: [
              ["Tênis", "raquete"],
              ["Natação", "touca"],
              ["Basquete", "cesta"],
              ["Futebol", "chuteira"],
            ],
          },
          {
            k: "mc",
            t: "No vôlei, quantos jogadores de cada time ficam em quadra?",
            o: ["5", "6", "7", "11"],
            c: 1,
          },
          {
            k: "type",
            t: "Quantos minutos de atividade física por dia são recomendados para crianças e adolescentes?",
            a: ["60", "sessenta"],
            ph: "Minutos",
            d: "É uma hora por dia.",
          },
        ],
      },
      {
        n: "Jogos e cultura",
        qs: [
          {
            k: "mc",
            t: "A capoeira mistura luta, dança e:",
            o: ["natação", "música", "xadrez", "ciclismo"],
            c: 1,
          },
          {
            k: "order",
            t: "Ordene as partes de uma aula",
            w: ["Aquecimento", "Atividade principal", "Alongamento"],
          },
          { k: "tf", t: "No basquete, a cesta feita de fora da linha de 3 pontos vale 3 pontos.", c: true },
          {
            k: "mc",
            t: "Quantos jogadores cada time tem em campo no futebol?",
            o: ["9", "10", "11", "12"],
            c: 2,
          },
          {
            k: "mc",
            t: "Qual destas é uma atividade aeróbica?",
            o: ["Corrida", "Levantar peso parado", "Alongamento", "Xadrez"],
            c: 0,
          },
        ],
      },
    ],
  },
};
