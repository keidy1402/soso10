/* Sofia Candido 10 · interações do site (navegação por abas, urna, calculadoras, quiz e portal da transparência) */
(function () {
  /* ---------- som ---------- */
  let ctx = null;
  function beep(freq, dur, when) {
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator(),
        g = ctx.createGain();
      o.type = "square";
      o.frequency.value = freq;
      g.gain.value = 0.06;
      o.connect(g);
      g.connect(ctx.destination);
      const t = ctx.currentTime + (when || 0);
      o.start(t);
      o.stop(t + dur);
    } catch (e) {}
  }
  function somFim() {
    [0, 0.13, 0.26, 0.39, 0.52].forEach((w, i) => beep(i % 2 ? 950 : 1180, 0.11, w));
    setTimeout(() => beep(1180, 0.5), 700);
  }

  /* ---------- urna ---------- */
  let num = "",
    fim = false,
    votos = 0;
  const d = [document.getElementById("d0"), document.getElementById("d1")];
  const foto = document.getElementById("foto"),
    info = document.getElementById("info"),
    msg = document.getElementById("msg"),
    fimEl = document.getElementById("fim"),
    cont = document.getElementById("contador");
  function render() {
    d.forEach((el, i) => {
      el.textContent = num[i] || "";
      el.classList.toggle("on", i === num.length && !fim);
    });
    foto.style.display = "none";
    info.innerHTML = "";
    msg.textContent = "";
    if (num.length === 2) {
      if (num === "10") {
        foto.style.display = "block";
        info.innerHTML = "Nome: <b>SOFIA CANDIDO</b><br>Partido: <b>PSD</b><br>Vice: —";
      } else {
        msg.textContent = "NÚMERO ERRADO";
        info.innerHTML =
          "<br>VOTO NULO<br><span style='font-size:13px'>Psiu: o número da Soso é 10. Aperte CORRIGE.</span>";
      }
    }
  }
  function tecla(n) {
    if (fim) reset();
    if (num.length < 2) {
      num += n;
      beep(1000, 0.06);
      render();
    }
  }
  function reset() {
    num = "";
    fim = false;
    fimEl.style.display = "none";
    render();
  }
  function confirma() {
    if (fim) return;
    if (num.length === 2 || num === "B") {
      fim = true;
      fimEl.style.display = "grid";
      somFim();
      if (num === "10") {
        votos++;
        cont.textContent =
          votos === 1
            ? "Voto treinado. No dia da eleição, é só repetir!"
            : "Você já treinou " + votos + " votos na Soso. Tá craque!";
      } else if (num === "B") {
        cont.textContent = "Voto em branco anotado. Que tal tentar o 10?";
      } else {
        cont.textContent = "Esse voto foi nulo. Tente de novo com 1 e 0.";
      }
      setTimeout(reset, 2600);
    } else {
      beep(400, 0.15);
    }
  }
  function branco() {
    if (fim) return;
    num = "B";
    d.forEach((e) => {
      e.textContent = "";
      e.classList.remove("on");
    });
    foto.style.display = "none";
    info.innerHTML = "";
    msg.textContent = "VOTO EM BRANCO";
    beep(1000, 0.06);
  }
  document.querySelectorAll(".tecla").forEach((b) => b.addEventListener("click", () => tecla(b.dataset.n)));
  document.getElementById("bCorrige").addEventListener("click", () => {
    beep(700, 0.08);
    reset();
  });
  document.getElementById("bConfirma").addEventListener("click", confirma);
  document.getElementById("bBranco").addEventListener("click", branco);
  document.addEventListener("keydown", (e) => {
    const urnaTop = document.getElementById("urna").getBoundingClientRect();
    if (urnaTop.bottom < 0 || urnaTop.top > innerHeight) return;
    if (/^[0-9]$/.test(e.key) && !/input|textarea/i.test(e.target.tagName)) {
      tecla(e.key);
    } else if (e.key === "Enter") {
      confirma();
    } else if (e.key === "Backspace") {
      reset();
    }
  });
  render();

  /* ---------- linha do trem ---------- */
  const estacoes = [
    {
      t: "Engenho Novo",
      a: "1980",
      h: "Onde tudo começa",
      p: "Sofia nasce no Rio de Janeiro e cresce no Engenho Novo, numa família humilde. A mãe, costureira, começava a trabalhar antes do sol nascer. O pai, porteiro, passava horas em trens lotados. Foi ali que ela entendeu quanto custa a distância.",
    },
    {
      t: "Pedro II",
      a: "Escola pública",
      h: "A escola que mudou tudo",
      p: "Estudou a vida inteira em escola pública e concluiu a formação básica no Colégio Pedro II. Ali descobriu o gosto pelo debate e a certeza de que a educação é o caminho mais seguro para mudar de vida.",
    },
    {
      t: "UERJ",
      a: "Direito",
      h: "De dia trabalho, de noite estudo",
      p: "Entrou no curso de Direito da UERJ trabalhando durante o dia e estudando à noite. Aprendeu que oportunidade não se herda, se conquista, e que ninguém conquista nada sozinho.",
    },
    {
      t: "Mãe solo",
      a: "Família",
      h: "Dor que virou propósito",
      p: "Casou-se com Rafael, policial federal, que morreu em serviço durante a gestação da filha. Sofia criou Camila sozinha e viveu na pele o que milhões de brasileiras vivem: conciliar trabalho e cuidado, sem creche perto de casa.",
    },
    {
      t: "AGU",
      a: "Advogada-Geral da União",
      h: "Defendendo o interesse público",
      p: "Aprovada em concurso, seguiu carreira como Advogada da União até chegar a Advogada-Geral da União. Defendeu a Constituição e os programas sociais nos tribunais e viu de perto como a falta de infraestrutura pesa mais sobre quem tem menos.",
    },
    {
      t: "Brasil",
      a: "2026 · 46 anos",
      h: "Candidata a Presidente",
      p: "Cristã, deixa o cargo para disputar a Presidência pelo PSD. Quer um Brasil mais conectado, escola de qualidade para todas as crianças e espaço para as mulheres trabalharem e liderarem. Seu lema: avançar é investir em gente.",
    },
  ];
  const ol = document.getElementById("estacoes"),
    parada = document.getElementById("parada"),
    trem = document.getElementById("trem");
  estacoes.forEach((e, i) => {
    const li = document.createElement("li");
    li.className = "estacao";
    li.innerHTML = `<button aria-pressed="false" aria-label="Estação ${e.t}">${i + 1}</button><span>${e.t}</span>`;
    li.querySelector("button").addEventListener("click", () => vai(i));
    ol.appendChild(li);
  });
  function vai(i) {
    const e = estacoes[i];
    ol.querySelectorAll("button").forEach((b, j) => b.setAttribute("aria-pressed", j === i));
    parada.innerHTML = `<div class="ano">${e.a}</div><h3>${e.h}</h3><p style="margin:0">${e.p}</p>`;
    const b = ol.querySelectorAll("button")[i],
      r = b.getBoundingClientRect(),
      pr = trem.parentElement.getBoundingClientRect();
    trem.style.left = r.left - pr.left + r.width / 2 - 29 + "px";
  }
  window.__vai = vai;
  vai(0);
  addEventListener("resize", () => {
    const i = [...ol.querySelectorAll("button")].findIndex((b) => b.getAttribute("aria-pressed") === "true");
    vai(Math.max(0, i));
  });

  /* ---------- pautas ---------- */
  const pautas = [
    {
      n: "Pauta 1 · Infraestrutura",
      t: "Conectar o Brasil",
      e: [
        "O Brasil tem dimensões continentais, mas só duas linhas regulares de trem de passageiros de longa distância.",
        "Malha ferroviária limitada e pouco integrada.",
        "Horas perdidas no transporte, longe da família.",
      ],
      p: [
        "Expandir e modernizar as ferrovias de carga, ligando regiões produtoras, centros de distribuição e portos.",
        "Ampliar as linhas de passageiros entre cidades e estados.",
        "Mais metrô e VLT nas regiões metropolitanas.",
        "Investimento público e privado, com BNDES e parcerias com estados e municípios.",
      ],
      m: "Conectar o Brasil, aproximando pessoas e impulsionando o desenvolvimento.",
    },
    {
      n: "Pauta 2 · Educação",
      t: "Tecnologia na escola pública",
      e: [
        "A tecnologia chega de forma desigual às escolas, sobretudo nas periferias, no campo e no interior.",
        "Falta internet e sobra equipamento ultrapassado.",
        "A Lei nº 15.360 exige estrutura mínima, mas lei sem orçamento não muda a escola.",
      ],
      p: [
        "Verba permanente para equipamentos e internet de qualidade em todas as escolas.",
        "Formação continuada e valorização dos professores.",
        "Tablets com internet para famílias do Cadastro Único.",
        "Trilha do Conhecimento: plataforma gratuita e gamificada, que funciona offline.",
        "Painel público mostrando cada escola.",
      ],
      m: "Tecnologia para ensinar, aprender e transformar.",
    },
    {
      n: "Pauta 3 · Mulheres",
      t: "Mais oportunidades, mais pais presentes",
      e: [
        "As mulheres ainda enfrentam desigualdade de oportunidades e de salário.",
        "O cuidado com os filhos recai, na maior parte, sobre elas.",
        "Muitas precisam escolher entre a carreira e a família.",
      ],
      p: [
        "Fiscalização da igualdade salarial e transparência nas remunerações.",
        "Capacitação e acesso a cargos de liderança.",
        "Licença-paternidade de 90 dias, com salário integral, divisível no primeiro ano da criança.",
        "Custo dividido entre empregadores e Previdência Social.",
      ],
      m: "Mais oportunidades para as mulheres, mais participação para os pais.",
    },
  ];
  const lp = document.getElementById("listaPautas");
  pautas.forEach((p, i) => {
    const c = document.createElement("article");
    c.className = "pauta comoe";
    c.innerHTML = `<div class="num">${p.n}</div><h3>${p.t}</h3>
  <div class="switch" role="group" aria-label="Como é ou como pode ser"><button aria-pressed="true" data-v="e">Como é</button><button aria-pressed="false" data-v="p">Como pode ser</button></div>
  <ul></ul><div class="mensagem">${p.m}</div>`;
    const ul = c.querySelector("ul");
    function show(v) {
      ul.innerHTML = (v === "e" ? p.e : p.p).map((x) => `<li>${x}</li>`).join("");
      c.classList.toggle("comoe", v === "e");
      c.querySelectorAll(".switch button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.v === v));
    }
    c.querySelectorAll(".switch button").forEach((b) => b.addEventListener("click", () => show(b.dataset.v)));
    show("e");
    lp.appendChild(c);
  });

  /* ---------- transporte ---------- */
  const hr = document.getElementById("horas");
  function calc() {
    const h = +hr.value,
      ano = h * 5 * 48;
    document.getElementById("hLbl").textContent = (h % 1 ? h.toString().replace(".", ",") : h) + " h por dia";
    document.getElementById("hAno").textContent = Math.round(ano) + " horas";
    const dias = ano / 24;
    document.getElementById("hDias").textContent =
      dias < 1
        ? "menos de 1 dia inteiro"
        : Math.round(dias) + (Math.round(dias) === 1 ? " dia inteiro" : " dias inteiros");
  }
  hr.addEventListener("input", calc);
  calc();

  /* ---------- licença ---------- */
  const nomes = ["1º", "2º", "3º", "4º", "5º", "6º", "7º", "8º", "9º", "10º", "11º", "12º"];
  let dist;
  const mesesEl = document.getElementById("meses"),
    saldo = document.getElementById("saldo");
  function resetLic() {
    dist = Array(12).fill(0);
    dist[0] = 15;
    drawLic();
  }
  function drawLic() {
    const usados = dist.reduce((a, b) => a + b, 0);
    mesesEl.innerHTML = "";
    dist.forEach((v, i) => {
      const b = document.createElement("button");
      b.className = "mes" + (i === 0 ? " fixo" : v ? " cheio" : "");
      b.innerHTML = `<span>${nomes[i]} mês</span><b>${v ? v + "d" : "·"}</b>`;
      b.setAttribute("aria-label", `${nomes[i]} mês: ${v} dias`);
      b.addEventListener("click", () => {
        const rest = 90 - dist.reduce((a, c) => a + c, 0);
        const min = i === 0 ? 15 : 0;
        if (rest >= 15 && dist[i] < 30) dist[i] += 15;
        else dist[i] = min;
        drawLic();
      });
      mesesEl.appendChild(b);
    });
    const rest = 90 - usados;
    saldo.textContent =
      rest > 0
        ? `Faltam ${rest} dias para distribuir.`
        : "Pronto! Os 90 dias estão distribuídos. Cuidar é tarefa de dois.";
  }
  document.getElementById("zerar").addEventListener("click", resetLic);
  resetLic();

  /* ---------- abas ---------- */
  const views = {
    inicio: document.getElementById("v-inicio"),
    propostas: document.getElementById("v-propostas"),
    transparencia: document.getElementById("v-transparencia"),
    app: document.getElementById("v-app"),
  };
  function rota() {
    const h = (location.hash || "#inicio").slice(1);
    let v = "inicio",
      alvo = null;
    if (views[h]) v = h;
    else {
      const el = document.getElementById(h);
      if (el) {
        for (const k in views) {
          if (views[k].contains(el)) v = k;
        }
        alvo = el;
      }
    }
    for (const k in views) views[k].hidden = k !== v;
    document
      .querySelectorAll(".nav a")
      .forEach((a) => a.setAttribute("aria-current", a.dataset.view === v ? "page" : "false"));
    if (alvo && !views[h]) alvo.scrollIntoView();
    else if (views[h]) window.scrollTo(0, 0);
    if (v === "inicio")
      setTimeout(() => {
        const i = [...document.querySelectorAll("#estacoes button")].findIndex(
          (b) => b.getAttribute("aria-pressed") === "true",
        );
        if (window.__vai) window.__vai(Math.max(0, i));
      }, 50);
  }
  addEventListener("hashchange", rota);

  /* ---------- transparência ---------- */
  const C = [
    { q: "Alice Pallaoro", t: "din", d: "Doação em dinheiro", v: 8 },
    { q: "Keidy Amaro", t: "din", d: "Doação em dinheiro", v: 3.5 },
    { q: "Keidy Amaro", t: "hor", d: "Trabalho voluntário (estimativa)", h: 20, est: true },
    { q: "Gabriela Dorle", t: "mat", d: "Papéis reaproveitados (cerca de 50 folhas)", v: 200, est: true },
    { q: "Gabriela Dorle", t: "hor", d: "Trabalho voluntário: manufatura", h: 20 },
    { q: "Gabriela Dorle", t: "hor", d: "Trabalho voluntário: perfil da candidata e pesquisas", h: 4 },
    { q: "Tia Márcia", t: "din", d: "Folhas novas", v: 200 },
    { q: "Tia Márcia", t: "hor", d: "Tempo dedicado à campanha", h: 3 },
    { q: "Sofia Candido", t: "hor", d: "Trabalho voluntário (estimativa)", h: 20, est: true },
    { q: "Rafaella Cruz", t: "hor", d: "Trabalho voluntário (estimativa)", h: 20, est: true },
    { q: "Luiza Merz", t: "hor", d: "Trabalho voluntário (estimativa)", h: 20, est: true },
  ];
  const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const TIPOS = {
    din: ["Dinheiro", "c-din"],
    mat: ["Material", "c-mat"],
    hor: ["Horas", "c-hor"],
    vol: ["Voluntário", "c-vol"],
  };
  const din = C.filter((c) => c.t === "din").reduce((a, c) => a + c.v, 0),
    mat = C.filter((c) => c.t === "mat").reduce((a, c) => a + c.v, 0),
    hor = C.filter((c) => c.h).reduce((a, c) => a + c.h, 0),
    pess = new Set(C.map((c) => c.q)).size;
  document.getElementById("tiles").innerHTML = [
    [brl(din), "em dinheiro"],
    [brl(mat), "em material (estimado)"],
    [hor + " h", "de trabalho"],
    [pess, "pessoas contribuíram"],
  ]
    .map(([v, k]) => `<div class="tile"><div class="v">${v}</div><div class="k">${k}</div></div>`)
    .join("");
  const porPessoa = {};
  C.filter((c) => c.v).forEach((c) => {
    porPessoa[c.q] = porPessoa[c.q] || { v: 0, est: false };
    porPessoa[c.q].v += c.v;
    porPessoa[c.q].est = porPessoa[c.q].est || !!c.est;
  });
  const max = Math.max(...Object.values(porPessoa).map((p) => p.v));
  document.getElementById("barras").innerHTML =
    Object.entries(porPessoa)
      .sort((a, b) => b[1].v - a[1].v)
      .map(
        ([q, p]) =>
          `<div class="barra"><span>${q}</span><div class="t"><i class="${p.est ? "e" : ""}" style="width:${Math.max(2, (p.v / max) * 100)}%"></i></div><span class="val">${brl(p.v)}</span></div>`,
      )
      .join("") +
    `<p class="nota" style="margin:4px 0 0">Barra listrada: valor estimado (papéis reaproveitados).</p>`;
  let filtro = "todos";
  const fEl = document.getElementById("filtros");
  [
    ["todos", "Todos"],
    ["din", "Dinheiro"],
    ["mat", "Material"],
    ["hor", "Horas"],
  ].forEach(([k, n]) => {
    const b = document.createElement("button");
    b.textContent = n;
    b.dataset.k = k;
    b.addEventListener("click", () => {
      filtro = k;
      tabela();
    });
    fEl.appendChild(b);
  });
  function tabela() {
    fEl.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.k === filtro));
    document.getElementById("linhas").innerHTML = C.filter((c) => filtro === "todos" || c.t === filtro)
      .map((c) => {
        const [n, cl] = TIPOS[c.t];
        const val = c.v
          ? brl(c.v) + (c.est ? ' <span class="est">estimado</span>' : "")
          : c.h
            ? c.h + " h" + (c.est ? ' <span class="est">estimado</span>' : "")
            : "—";
        return `<tr><td><b>${c.q}</b></td><td><span class="chip ${cl}">${n}</span></td><td>${c.d}</td><td class="num">${val}</td></tr>`;
      })
      .join("");
  }
  tabela();

  /* ---------- quiz ---------- */
  const Q = [
    {
      q: "Qual parte do seu dia mais te irrita?",
      o: [
        ["O tempo perdido no trânsito e no transporte lotado", "t"],
        ["Ver gente boa sem oportunidade de estudar direito", "e"],
        ["A conta não fechar entre trabalho e cuidar da casa", "m"],
      ],
    },
    {
      q: "Se você mandasse por um dia, por onde começaria?",
      o: [
        ["Um trem ligando minha cidade à capital", "t"],
        ["Internet que funciona em toda escola pública", "e"],
        ["Salário igual para homens e mulheres", "m"],
      ],
    },
    {
      q: "Qual frase é mais a sua cara?",
      o: [
        ["Tempo é a coisa mais cara que existe", "t"],
        ["Educação muda a vida de quem vem de baixo", "e"],
        ["Cuidar é tarefa de dois", "m"],
      ],
    },
  ];
  const R = {
    t: [
      "Conectar o Brasil",
      "Você é do time dos trilhos. A Soso quer expandir as ferrovias, ligar cidades e estados e levar mais metrô e VLT às regiões metropolitanas.",
    ],
    e: [
      "Tecnologia na escola",
      "Você é do time da educação. A Soso quer internet de qualidade em toda escola pública, professores valorizados e tablets para as famílias do Cadastro Único.",
    ],
    m: [
      "Mulheres e famílias",
      "Você é do time da igualdade. A Soso quer salário igual, mais mulheres na liderança e licença-paternidade de 90 dias.",
    ],
  };
  let qi = 0,
    pts = { t: 0, e: 0, m: 0 };
  const qb = document.getElementById("quizBox");
  function drawQ() {
    if (qi >= Q.length) {
      const k = Object.keys(pts).sort((a, b) => pts[b] - pts[a])[0];
      qb.innerHTML = `<div class="resultado"><p class="q-num">Seu compromisso favorito</p><h3>${R[k][0]}</h3><p>${R[k][1]}</p><p><b>Avançar é investir em gente. Vote 10!</b></p><button class="btn btn-y" id="refaz">Fazer de novo</button></div>`;
      document.getElementById("refaz").addEventListener("click", () => {
        qi = 0;
        pts = { t: 0, e: 0, m: 0 };
        drawQ();
      });
      return;
    }
    const it = Q[qi];
    qb.innerHTML = `<p class="q-num">Pergunta ${qi + 1} de ${Q.length}</p><p class="q-txt">${it.q}</p><div class="opcoes"></div>`;
    const op = qb.querySelector(".opcoes");
    it.o.forEach(([txt, k]) => {
      const b = document.createElement("button");
      b.className = "op";
      b.textContent = txt;
      b.addEventListener("click", () => {
        pts[k]++;
        qi++;
        drawQ();
      });
      op.appendChild(b);
    });
  }
  drawQ();
  rota();
})();
