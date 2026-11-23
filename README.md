# Sofia Candido 10 · site da campanha

Site da campanha **fictícia** de Sofia Candido (Soso), candidata à Presidência pelo PSD com o número **10**. O projeto foi feito para a disciplina **Comunicação e Política**, do curso de Comunicação Digital, numa simulação de eleição em que votam alunos, professores e funcionários do curso.

> **Slogan:** "Avançar é investir em gente." · **Bordão:** "Vote Soso, vote sociedade."

🔗 **No ar:** [keidy1402.github.io/soso10](https://keidy1402.github.io/soso10), também publicado pela Vercel a partir deste repositório.

---

## Sumário

- [Como o site funciona](#como-o-site-funciona)
- [Funcionalidades](#funcionalidades)
- [Trilha do Conhecimento (app educacional)](#trilha-do-conhecimento-app-educacional)
- [Acessibilidade](#acessibilidade)
- [Estrutura de arquivos](#estrutura-de-arquivos)
- [Ferramentas e tecnologias](#ferramentas-e-tecnologias)
- [Como rodar localmente](#como-rodar-localmente)
- [Deploy](#deploy)
- [Equipe](#equipe)

---

## Como o site funciona

É um **site estático de página única**, feito com HTML, CSS e JavaScript puros, sem framework e sem etapa de build. Nesta branch (`main`), **tudo fica num único arquivo `index.html`**: estilos, scripts, banco de lições, imagens, ícones e o vídeo do karaokê (embutidos como *data URI*). Assim, o site funciona até abrindo o arquivo direto no navegador, sem servidor.

O `index.html` tem três blocos de script, nesta ordem:

1. **Interações do site:** navegação por abas, urna, calculadoras, quiz e Portal da Transparência.
2. **App Trilha do Conhecimento:** banco de lições das 8 matérias (constante `MATERIAS`), telas, motor das lições, estado e modo offline.
3. **VLibras:** o widget oficial de tradução para Libras.

> A mesma versão do site, com o código separado em `index.html`, `src/style.css` e `src/*.js`, fica na branch [`fix_structure`](https://github.com/keidy1402/soso10/tree/fix_structure).

### Navegação por abas

As quatro seções do menu são `<main class="view">` dentro do mesmo `index.html`. A função `rota()` lê o `#hash` da URL e mostra só a seção correspondente:

| Endereço | Aba |
|---|---|
| `#inicio` | Página principal da campanha |
| `#propostas` | Plano de governo |
| `#transparencia` | Portal da Transparência |
| `#app` | Trilha do Conhecimento |

Com isso, cada aba tem um link próprio para compartilhar, e os botões Voltar e Avançar do navegador funcionam normalmente.

### Dados salvos no navegador

O app Trilha do Conhecimento guarda pontos, vidas, progresso e preferências no `localStorage`, na chave `trilha-soso-v2`. Nada é enviado para servidor. O botão "Recomeçar demonstração" apaga esses dados.

---

## Funcionalidades

### Início
- **Apresentação da candidata:** foto, número, partido e slogan.
- **Urna eletrônica interativa:** digite 1 e 0, veja a foto da candidata e confirme com o som de "FIM" da urna, gerado com a Web Audio API.
- **Linha do tempo em trilhos:** a história da Soso contada em seis "estações".
- **As três pautas** com o botão **#COMOÉ / #COMOPODESER**, que compara a situação atual com a proposta:
  1. Ferrovias e infraestrutura;
  2. Educação com tecnologia (Lei 15.360, FUST, tablets para famílias do CadÚnico, painel público);
  3. Mulheres e licença-paternidade de 90 dias.
- **Calculadora do transporte:** mostra quantas horas por ano a pessoa passa em deslocamento.
- **Distribuidor da licença-paternidade:** divide os 90 dias em blocos de 15 ao longo dos meses.
- **Karaokê do jingle:** um lyric video (vídeo com a letra animada) para cantar junto. As palavras entram no ritmo da música, com as cores da Soso e do Brasil.
- **Quiz:** descubra qual pauta combina mais com você.
- **Figurinhas:** galeria do pacote de figurinhas de WhatsApp da campanha.
- **Rodapé:** nomes da equipe e da professora, com link para o LinkedIn de cada uma.

### Propostas
Plano de governo em tom formal. Cada pauta traz o diagnóstico, as medidas e a origem do dinheiro.

### Portal da Transparência
- **Totais:** dinheiro arrecadado, material (com valor estimado), horas de trabalho e número de pessoas.
- **Gráfico de barras** com a contribuição de cada pessoa.
- **Tabela completa**, com filtro por tipo de contribuição (dinheiro, material, horas).

---

## Trilha do Conhecimento (app educacional)

Protótipo navegável, dentro de um celular desenhado na tela, do aplicativo gratuito de reforço escolar proposto na pauta de educação. Funciona **sem internet** depois do primeiro acesso e se inspira no **Duolingo**.

**Três perfis**, escolhidos na tela de entrada ou pelos botões ao lado do celular:

- **Aluno:**
  - **Início:** meta diária de XP, degrau atual (Semente → Broto → Explorador → Mestre) e sugestões para hoje.
  - **Trilha:** um caminho por matéria, com lições, baú de gemas e revisão da unidade.
  - **Biblioteca:** baixar matérias para estudar offline.
  - **Turma:** desafio coletivo e o "Ninguém fica pra trás", em que o aluno manda dicas para um colega.
  - **Perfil:** avatar, leitura em voz alta, Libras, sons, economia de dados e tamanho da letra.
  - **Atalhos:** Meu progresso, Revisão dos erros (repetição espaçada), Tira-dúvidas e Escola que funciona.
- **Professor:** painel da turma com quem precisa de atenção e botão de lição de reforço, formação com cinco módulos e certificado de 40h, e o painel "Escola que funciona".
- **Família:** resumo da semana em áudio, recado da professora e atividade para fazer junto.

**Lições:** oito matérias (Matemática, Português, Ciências, História, Geografia, Inglês, Espanhol e Educação Física), com duas lições de cinco exercícios cada, num total de 80 exercícios.

**Cinco tipos de exercício:**
- múltipla escolha;
- verdadeiro ou falso;
- montar a frase ou a ordem tocando nas palavras;
- ligar os pares;
- digitar a resposta (aceita variações de acento e de maiúsculas).

**Mecânicas inspiradas no Duolingo:**
- **Vidas:** cada erro tira uma; dá para recuperar com gemas ou revisando erros.
- **XP e combo:** pontos por lição e bônus por acertos seguidos.
- **Explicação do porquê:** ao errar, o app mostra a resposta dada, a resposta certa e uma explicação de por que ela está certa e as outras não. Ao acertar, a explicação fica num botão "Por quê?". As 80 questões têm explicação, que também aparece na Revisão dos erros.
- **Repetição do erro:** a questão errada volta no fim da lição.
- **Tela de conclusão:** mostra XP, precisão e tempo.
- **Sequência de dias** e **meta diária**.
- **Mascote Tico:** uma locomotiva, em referência à pauta das ferrovias.

**Modo offline simulado:** a chave "Simular sem internet" mostra o que continua funcionando sem conexão. As ações ficam numa fila e são sincronizadas quando a conexão volta. O app também reage aos eventos reais `online` e `offline` do navegador.

---

## Acessibilidade

- **Libras de verdade com o [VLibras](https://www.gov.br/governodigital/pt-br/vlibras)**, o tradutor oficial do governo federal. O botão da mão azul, na lateral, abre o avatar 3D, que sinaliza qualquer texto clicado. No app, com Libras ligado no Perfil, cada pergunta tem um botão **Abrir** que chama o VLibras.
- **Leitura em voz alta** das perguntas e do resumo da família, pela Web Speech API (`speechSynthesis`, voz pt-BR).
- **Ajuste do tamanho da letra** no app.
- **Navegação semântica:** HTML com `aria-label`, `aria-pressed`, `role="switch"` e `aria-live` para os avisos, e alvos de toque grandes.

---

## Estrutura de arquivos

```
.
├── README.md
└── index.html   # o site inteiro: HTML, CSS, JavaScript, imagens, ícones e vídeo embutidos
```

A versão com os arquivos separados está na branch [`fix_structure`](https://github.com/keidy1402/soso10/tree/fix_structure):

```
.
├── README.md
├── index.html
├── vercel.json
└── src/
    ├── style.css
    ├── main.js
    ├── licoes.js
    ├── trilha.js
    └── assets/
```

---

## Ferramentas e tecnologias

**No site:**

| Ferramenta | Para quê |
|---|---|
| HTML5, CSS3 e JavaScript puro | Todo o site, sem framework nem build |
| [Google Fonts](https://fonts.google.com/): Anton, Archivo, Nunito e Pacifico | Tipografia |
| Web Audio API | Bipe da urna e sons de acerto e erro do app |
| Web Speech API (`speechSynthesis`) | Leitura em voz alta |
| `localStorage` | Progresso salvo no navegador |
| [VLibras Widget](https://vlibras.gov.br/) | Tradução para Libras |
| SVG desenhado no código | Ícones, mascote Tico, pizza das frações, caminho da trilha |

**Na produção dos materiais:**

| Ferramenta | Para quê |
|---|---|
| [Claude](https://claude.ai) (Anthropic) | Apoio na programação, nos textos e na organização do projeto |
| Python, Pillow e rembg | Recorte das fotos e montagem das figurinhas |
| Python, Pillow e FFmpeg | Animação e montagem do lyric video do jingle |
| faster-whisper | Transcrição do jingle para sincronizar cada palavra da letra |

**Hospedagem:** GitHub Pages e Vercel.

---

## Como rodar localmente

Não há dependências para instalar. Como tudo está dentro do `index.html`, basta abrir o arquivo no navegador. Para testar como no site publicado, use um servidor local:

```bash
python3 -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

---

## Deploy

O projeto é estático e já está pronto para a Vercel:

- **Framework Preset:** `Other`
- **Build Command:** nenhum (deixe vazio)
- **Output Directory:** `.` (a raiz do repositório)

Cada push na branch `main` publica o site em produção. Pushes em outras branches, como a `fix_structure`, geram uma URL de pré-visualização.

O GitHub Pages publica a branch `main` a partir da raiz (`/`).

---

## Equipe

- **Sofia Candido**, candidata · [LinkedIn](https://www.linkedin.com/in/sofiiacandido/)
- **Gabriela Dorle** · [LinkedIn](https://www.linkedin.com/in/gabrieladorle/)
- **Keidy Amaro** · [LinkedIn](https://www.linkedin.com/in/keidyamaro/)
- **Luiza Merz** · [LinkedIn](https://www.linkedin.com/in/lu%C3%ADza-merz-72bb92432/)
- **Rafaella Cruz** · [LinkedIn](https://www.linkedin.com/in/rafaellacruzsantos/)

**Professora:** Leticia Sabbatini · [LinkedIn](https://www.linkedin.com/in/leticiasabbatini/)

> Campanha fictícia, criada para fins acadêmicos. Nomes, números e dados do app são exemplos.
