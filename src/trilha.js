/* ---------- Trilha do Conhecimento (protótipo) ---------- */
(function () {
  const scr = document.getElementById("phScreen"),
    tabs = document.getElementById("phTabs"),
    phone = document.getElementById("phone"),
    toastEl = document.getElementById("phToast");
  if (!scr) return;
  const KEY = "trilha-soso-v2";
  const I = {
    trilha:
      '<path d="M4 19c4 0 4-6 8-6s4-6 8-6"/><circle cx="4" cy="19" r="1.5"/><circle cx="20" cy="7" r="1.5"/>',
    livro: '<path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1z"/><path d="M12 6v14"/>',
    turma:
      '<circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2 20c0-3.5 2.7-6 6-6s6 2.5 6 6M14 15c3.5-.5 7 1 7 5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
    casa: '<path d="M3 11 12 4l9 7v9H3z"/><path d="M9 20v-6h6v6"/>',
    graf: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    ajuda:
      '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 1-1 1.7M12 17h.01"/>',
    rev: '<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>',
    escola: '<path d="M3 10 12 5l9 5-9 5z"/><path d="M7 12v5c3 2 7 2 10 0v-5"/>',
    wifi: '<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',
    down: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    check: '<path d="m5 12 5 5 9-10"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    fogo: '<path d="M12 3c1 4 6 5 6 11a6 6 0 0 1-12 0c0-3 2-4 2-7 2 1 3 3 3 5 1-2 1-6 1-9z"/>',
    estrela: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    voz: '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    env: '<path d="M3 11 21 3l-8 18-2-8z"/>',
    pc: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    proj: '<rect x="2" y="7" width="20" height="10" rx="2"/><circle cx="15" cy="12" r="2.5"/>',
    mais: '<circle cx="6" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="18" cy="12" r="1.3"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    pres: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M12 8c-2-4-6-4-6-1s6 1 6 1 6 2 6-1-4-3-6 1"/>',
    seta: '<path d="m9 6 6 6-6 6"/>',
    volta: '<path d="m15 6-6 6 6 6"/>',
    busca: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    cert: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/>',
    sair: '<path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10"/>',
  };
  const ic = (n, s) =>
    `<svg class="ic" viewBox="0 0 24 24" ${s ? `style="width:${s}px;height:${s}px"` : ""} aria-hidden="true">${I[n]}</svg>`;
  const logo = (s = 26) =>
    `<svg width="${s}" height="${s}" viewBox="0 0 32 32" aria-hidden="true"><rect x="5" y="18" width="5" height="9" rx="1.5" fill="#18923b"/><rect x="12" y="13" width="5" height="14" rx="1.5" fill="#fec110"/><rect x="19" y="8" width="5" height="19" rx="1.5" fill="#012673"/><rect x="26" y="4" width="3" height="23" rx="1.5" fill="#7a3fc2"/></svg>`;

  const BASE = () => ({
    papel: null,
    pts: 1240,
    streak: 5,
    semana: [1, 1, 1, 1, 0, 0, 0],
    subj: "mat",
    prog: { mat: 1, por: 1 },
    vidas: 5,
    xpHoje: 0,
    meta: 30,
    gemas: 150,
    baus: {},
    sons: 1,
    feitas: 23,
    erros: [
      { q: "Como fica 6/8 na forma mais simples?", r: "3/4", d: 0 },
      { q: "Quanto é 1/2 + 1/4?", r: "3/4", d: 1 },
      { q: "Em “Os meninos corriam”, qual é o verbo?", r: "corriam", d: 2 },
    ],
    aprendidos: 31,
    baix: { mat: 1, por: 1 },
    voz: 0,
    libras: 0,
    dados: 1,
    fs: 1,
    cor: "#fec110",
    dicas: 0,
    turmaLicoes: 412,
    ajudouJoao: 0,
    fila: 0,
    avisos: [
      { t: "PC 18 e 19 não ligam", s: "Avisado há 2 dias", e: "Em conserto" },
      { t: "Wi-Fi caindo na sala 3", s: "Resolvido em 3 dias", e: "Resolvido" },
    ],
    quebrados: 2,
    reserva: 0,
    modulo3: 60,
    reforco: 0,
    parabens: 0,
  });
  let S;
  try {
    S = Object.assign(BASE(), JSON.parse(localStorage.getItem(KEY) || "{}"));
  } catch (e) {
    S = BASE();
  }
  const save = () => {
    try {
      localStorage.setItem(KEY, JSON.stringify(S));
    } catch (e) {}
  };
  let tela = null,
    hist = [],
    offline = false;
  let tt;
  function toast(m) {
    toastEl.textContent = m;
    toastEl.classList.add("on");
    clearTimeout(tt);
    tt = setTimeout(() => toastEl.classList.remove("on"), 2600);
  }
  function falar(t) {
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(t);
      u.lang = "pt-BR";
      u.rate = 0.95;
      speechSynthesis.speak(u);
    } catch (e) {
      toast("A leitura em voz alta não está disponível neste navegador.");
    }
  }
  function enviar(msg) {
    if (offline) {
      S.fila++;
      save();
      toast(msg + " Sem internet: fica salvo e envia quando conectar.");
    } else toast(msg);
  }
  function pontos(n) {
    S.pts += n;
    save();
  }

  const degraus = [
    ["Semente", 0],
    ["Broto", 600],
    ["Explorador", 1000],
    ["Mestre", 2000],
  ];
  const degIdx = () => degraus.reduce((a, d, i) => (S.pts >= d[1] ? i : a), 0);

  /* ---------- telas ---------- */
  const T = {};
  /* o conteúdo das lições (MATERIAS) vem de src/licoes.js */
  /* ---------- questões ---------- */
  const pizza = (n, com) => {
    let s =
      '<svg width="160" height="160" viewBox="-1.1 -1.1 2.2 2.2" aria-label="Pizza dividida em ' +
      n +
      " pedaços, " +
      com +
      ' comidos">';
    for (let i = 0; i < n; i++) {
      const a1 = (i / n) * 2 * Math.PI - Math.PI / 2,
        a2 = ((i + 1) / n) * 2 * Math.PI - Math.PI / 2;
      s += `<path d="M0 0L${Math.cos(a1)} ${Math.sin(a1)}A1 1 0 0 1 ${Math.cos(a2)} ${Math.sin(a2)}Z" fill="${i < com ? "#fff6dc" : "#fec110"}" stroke="#e6a400" stroke-width=".035"/>`;
      if (i >= com)
        s += `<circle cx="${Math.cos((a1 + a2) / 2) * 0.6}" cy="${Math.sin((a1 + a2) / 2) * 0.6}" r=".09" fill="#d6382f"/>`;
    }
    return s + "</svg>";
  };
  const barra = (n, f, cl) =>
    `<div class="fr-bar ${cl || ""}">${Array.from({ length: n }, (_, i) => `<i class="${i < f ? "f" : ""}" style="flex:1"></i>`).join("")}</div>`;
  const FIG = {
    pizza: () => pizza(8, 3),
    barras: () =>
      `<div style="width:240px">${barra(2, 1)}<div class="a-sm">1/2</div>${barra(8, 3, "n")}<div class="a-sm">3/8</div></div>`,
  };
  const ORDEM = Object.keys(MATERIAS);
  const embaralha = (a) => {
    const b = a.slice();
    for (let i = b.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
  };
  const norm = (s) =>
    String(s)
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9/ ]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  const esc = (s) =>
    String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  let actx;
  function som(tipo) {
    if (!S.sons) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const notas = tipo === "ok" ? [660, 880] : tipo === "no" ? [220, 180] : [523, 659, 784, 1046];
      notas.forEach((f, i) => {
        const o = actx.createOscillator(),
          g = actx.createGain();
        o.type = tipo === "no" ? "square" : "sine";
        o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, actx.currentTime + i * 0.11);
        g.gain.exponentialRampToValueAtTime(tipo === "no" ? 0.05 : 0.12, actx.currentTime + i * 0.11 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + i * 0.11 + 0.18);
        o.connect(g).connect(actx.destination);
        o.start(actx.currentTime + i * 0.11);
        o.stop(actx.currentTime + i * 0.11 + 0.2);
      });
    } catch (e) {}
  }
  const feitas = (m) => S.prog[m] || 0;
  let Q = null;
  function prepara(q) {
    const x = Object.assign({}, q, { _o: q });
    if (q.k === "order") {
      x.banco = embaralha(q.w.concat(q.x || []).map((w, i) => i));
      x.resp = [];
    }
    if (q.k === "pairs") {
      x.L = embaralha(q.p.map((_, i) => i));
      x.R = embaralha(q.p.map((_, i) => i));
      x.ok = [];
      x.pick = null;
      x.erroPar = null;
    }
    if (q.k === "tf") {
      x.o = ["Verdadeiro", "Falso"];
      x.c = q.c ? 0 : 1;
    }
    return x;
  }
  function iniciar(m, l) {
    if (S.vidas <= 0) {
      ir("semvidas");
      return;
    }
    const M = MATERIAS[m];
    let qs;
    if (l === "rev") {
      qs = embaralha(M.lic[0].qs.concat(M.lic[1].qs)).slice(0, 6);
    } else qs = M.lic[l].qs;
    Q = {
      m,
      l,
      qs: qs.map(prepara),
      i: 0,
      sel: null,
      res: null,
      acertos: 0,
      erros: 0,
      combo: 0,
      max: 0,
      t0: Date.now(),
      txt: "",
    };
    ir("quiz");
  }

  /* mascote: Tico, a locomotiva */
  const tico = (s = 90, humor = "") =>
    `<svg class="tico ${humor}" width="${s}" height="${s * 0.86}" viewBox="0 0 100 86" aria-hidden="true"><g class="fumo"><circle cx="24" cy="14" r="7" fill="#e6e8f2"/><circle cx="33" cy="7" r="5" fill="#eef0f7"/></g><rect x="16" y="22" width="14" height="14" rx="3" fill="#012673"/><rect x="10" y="32" width="62" height="34" rx="12" fill="#fec110"/><rect x="58" y="16" width="32" height="50" rx="8" fill="#7a3fc2"/><rect x="64" y="23" width="20" height="15" rx="4" fill="#fff"/><circle cx="32" cy="46" r="5" fill="#0d1a3d"/><circle cx="48" cy="46" r="5" fill="#0d1a3d"/><circle cx="33.6" cy="44.4" r="1.6" fill="#fff"/><circle cx="49.6" cy="44.4" r="1.6" fill="#fff"/><path d="${humor === "triste" ? "M33 58q7-5 14 0" : "M33 54q7 7 14 0"}" stroke="#0d1a3d" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="24" cy="54" r="3" fill="#f59a7a" opacity=".7"/><circle cx="56" cy="54" r="3" fill="#f59a7a" opacity=".7"/><rect x="6" y="64" width="88" height="6" rx="3" fill="#012673"/><g fill="#0d1a3d"><circle cx="24" cy="76" r="9"/><circle cx="52" cy="76" r="9"/><circle cx="78" cy="76" r="9"/></g><g fill="#fec110"><circle cx="24" cy="76" r="3"/><circle cx="52" cy="76" r="3"/><circle cx="78" cy="76" r="3"/></g></svg>`;

  /* Libras: tradução real pelo VLibras (avatar oficial do governo federal) */
  const temVL = () => !!(window.VLibras && document.querySelector("[vw]"));
  const abreVL = () => {
    const w = document.getElementById("vlibras-access-wrapper");
    const b =
      (w && w.shadowRoot && w.shadowRoot.getElementById("vlibras-button")) ||
      document.querySelector("#vlibras-button,[vw-access-button]");
    if (b) {
      b.click();
      return true;
    }
    return false;
  };
  const libras = () =>
    temVL()
      ? `<div class="libras"><span class="lb-mao" aria-hidden="true">${ic("user", 26)}</span><span style="flex:1"><span class="lb-t">LIBRAS · VLIBRAS</span><br><b>Toque no botão e depois no texto da pergunta</b></span><button class="lb-bt" data-act="abrirLibras">Abrir</button></div>`
      : `<div class="libras"><span class="lb-mao" aria-hidden="true">${ic("user", 26)}</span><span style="flex:1"><span class="lb-t">LIBRAS · VLIBRAS</span><br><b>A tradução em Libras usa o VLibras, do governo federal.</b><small>Ela funciona na versão publicada do site; aqui no protótipo o VLibras não carrega.</small></span></div>`;

  /* ---------- telas de estudo ---------- */
  const subChips = () =>
    `<div class="subs" role="tablist" aria-label="Matérias">${ORDEM.map((k) => {
      const M = MATERIAS[k];
      return `<button role="tab" aria-selected="${S.subj === k}" data-subj="${k}" style="--c:${M.cor}"><span>${M.ic}</span>${M.n}</button>`;
    }).join("")}</div>`;
  const topo = () =>
    `<div class="duo-top"><button class="duo-st" data-ir="materias" aria-label="Trocar matéria"><span class="duo-flag" style="background:${MATERIAS[S.subj].cor}">${MATERIAS[S.subj].ic}</span></button><span class="duo-st" title="Dias seguidos">🔥 ${S.streak}</span><span class="duo-st" title="Gemas">💎 ${S.gemas}</span><span class="duo-st" title="Vidas">❤️ ${S.vidas}</span></div>`;
  T.inicio = () => {
    const d = degIdx(),
      prox = degraus[d + 1];
    const h = new Date().getHours();
    const pct = Math.min(100, (S.xpHoje / S.meta) * 100);
    const sug = ORDEM.filter((k) => feitas(k) < 3).slice(0, 3);
    return `
 <div class="a-body"><div class="a-flex"><div><div class="a-sm">${h < 12 ? "Bom dia" : h < 18 ? "Boa tarde" : "Boa noite"},</div><div class="a-t" style="margin:0">Ana Clara</div></div>${logo(30)}</div>
 <div class="a-card a-row" style="margin-top:12px"><div class="anel" style="--p:${pct}"><span>${S.xpHoje}</span></div><div style="flex:1"><b>Meta do dia</b><div class="a-sm">${S.xpHoje >= S.meta ? "Meta batida! 🎉" : `${S.xpHoje} de ${S.meta} XP · faltam ${S.meta - S.xpHoje}`}</div></div><span class="duo-st">🔥 ${S.streak}</span></div>
 <div class="deg"><div class="a-flex"><span class="a-kick" style="color:#aab4d6">Seu degrau</span><span class="a-tag" style="background:var(--y);color:var(--t)">${S.pts.toLocaleString("pt-BR")} XP</span></div>
  <div class="a-t" style="margin:2px 0 0">${d + 1} · ${degraus[d][0]}</div>
  <div class="deg-bars">${degraus.map((g, i) => `<div class="${i < d ? "on" : i === d ? "cur" : ""}" style="height:${30 + i * 20}%"></div>`).join("")}</div>
  <div class="deg-lbl">${degraus.map((g) => `<span>${g[0]}</span>`).join("")}</div>
  <div style="font-size:12px;margin-top:8px;opacity:.85">${prox ? `Faltam ${(prox[1] - S.pts).toLocaleString("pt-BR")} XP para o degrau ${prox[0]}` : "Você chegou ao topo!"}</div></div>
 <div class="a-sec">Para hoje</div><div class="a-list">${sug
   .map((k) => {
     const M = MATERIAS[k],
       f = feitas(k);
     const l = Math.min(f, 1);
     return `<button class="a-item" data-lic="${k}:${f >= 2 ? "rev" : l}"><span class="a-ico" style="background:${M.cor};color:#fff">${M.ic}</span><span style="flex:1"><b>${f >= 2 ? "Revisão da unidade" : M.lic[l].n}</b><br><span class="a-sm">${M.n} · 5 min · +${f >= 2 ? 20 : 15} XP</span></span>${ic("seta")}</button>`;
   })
   .join("")}</div>
 <div class="a-sec">Todas as matérias</div><div class="mat-grid">${ORDEM.map((k) => {
   const M = MATERIAS[k];
   return `<button data-subj="${k}" data-vai="trilha" style="--c:${M.cor}"><span>${M.ic}</span>${M.n}<i style="width:${(Math.min(3, feitas(k)) / 3) * 100}%"></i></button>`;
 }).join("")}</div>
 <div class="a-sec">Mais para você</div><div class="atalhos">
  <button data-ir="progresso">${ic("graf")}Meu progresso</button><button data-ir="revisao">${ic("rev")}Revisão dos erros</button>
  <button data-ir="duvidas">${ic("ajuda")}Tira-dúvidas</button><button data-ir="escola">${ic("escola")}Escola que funciona</button></div></div>`;
  };

  T.materias =
    () => `<div class="a-body"><div class="a-row"><button class="q-x" data-act="voltar" aria-label="Voltar">${ic("volta")}</button><div class="a-t" style="margin:0">Escolha a matéria</div></div>
 <div class="a-list" style="margin-top:12px">${ORDEM.map((k) => {
   const M = MATERIAS[k],
     f = feitas(k);
   return `<button class="a-item" data-subj="${k}" data-vai="trilha" ${S.subj === k ? 'style="outline:2px solid ' + M.cor + '"' : ""}><span class="a-ico" style="background:${M.cor};color:#fff">${M.ic}</span><span style="flex:1"><b>${M.n}</b><br><span class="a-sm">${M.un} · ${Math.min(f, 2)} de 2 lições${f >= 3 ? " · unidade completa 🏆" : ""}</span></span>${S.baix[k] === 1 ? `<span class="a-ok">${ic("check", 13)}</span>` : ""}</button>`;
 }).join("")}</div></div>`;

  T.trilha = () => {
    const k = S.subj,
      M = MATERIAS[k],
      f = feitas(k);
    const nos = [
      { t: "l", l: 0, n: M.lic[0].n },
      { t: "l", l: 1, n: M.lic[1].n },
      { t: "bau" },
      { t: "rev", n: "Revisão da unidade" },
    ];
    const estado = (i) => (i < f + (f >= 2 && S.baus[k] ? 1 : 0) ? "done" : "");
    const off = [0, -62, 0, 62, 0];
    return `<div class="duo-head" style="--c:${M.cor}">${topo()}${subChips()}</div>
 <div class="a-body" style="padding-top:12px"><div class="unid" style="background:${M.cor}"><div><span class="a-kick" style="color:rgba(255,255,255,.8)">${M.n} · Unidade 1</span><div class="a-h2" style="margin:2px 0 0;color:#fff">${M.un}</div></div><button class="unid-g" data-msg="Guia da unidade: ${esc(M.lic.map((l) => l.n).join(" · "))}. Cada lição tem 5 exercícios.">${ic("livro", 18)}</button></div>
 ${S.baix[k] === 1 ? "" : `<div class="a-card a-flex" style="margin-top:10px;background:#fff7dc"><span class="a-sm"><b>Esta matéria ainda não foi baixada.</b> Baixe para estudar sem internet.</span><button class="lv-dl" style="margin:0;flex:none" data-dl="${k}">${ic("down", 13)} Baixar</button></div>`}
 <div class="caminho">${nos
   .map((no, i) => {
     let st;
     if (no.t === "l") st = no.l < f ? "done" : no.l === f ? "cur" : "lock";
     else if (no.t === "bau") st = f >= 2 ? (S.baus[k] ? "done" : "cur") : "lock";
     else st = f >= 3 ? "done" : f >= 2 && S.baus[k] ? "cur" : "lock";
     const attrs =
       st === "lock"
         ? `data-msg="Complete o que vem antes para liberar."`
         : no.t === "bau"
           ? st === "cur"
             ? 'data-act="bau"'
             : 'data-msg="Baú já aberto!"'
           : no.t === "rev"
             ? `data-lic="${k}:rev"`
             : `data-lic="${k}:${no.l}"`;
     const icone =
       no.t === "bau"
         ? st === "done"
           ? "🎁"
           : "🧰"
         : no.t === "rev"
           ? "🏆"
           : st === "done"
             ? ic("check", 30)
             : st === "lock"
               ? ic("lock", 24)
               : ic("estrela", 30);
     return `<div class="cam-l" style="transform:translateX(${off[i]}px)">${st === "cur" ? `<span class="bal" style="color:${M.cor}">${no.t === "bau" ? "ABRIR" : "COMEÇAR"}</span>` : ""}<button class="duo-no ${st} ${no.t}" style="--c:${M.cor}" ${attrs} aria-label="${no.n || "Baú de recompensa"}${st === "lock" ? ", bloqueado" : st === "done" ? ", concluído" : ""}">${icone}</button><span class="cam-n">${no.n || "Baú"}</span></div>`;
   })
   .join("")}
 <div class="cam-tico">${tico(84)}</div></div>
 <div class="a-card a-row" style="background:#fff7dc"><span style="font-size:22px">💬</span><span class="a-sm"><b style="color:var(--t)">Tico diz:</b> ${f === 0 ? "Bora começar? A primeira lição leva uns 5 minutos." : f === 1 ? "Uma lição feita! Mais uma e o baú é seu." : f === 2 ? "Abra o baú e depois encare a revisão da unidade!" : "Unidade completa! Que tal outra matéria?"}</span></div></div>`;
  };

  T.semvidas = () => {
    phone.classList.add("claro");
    return `<div class="fim">${tico(120, "triste")}<div class="a-t">Acabaram as vidas</div><p class="a-sm">Errar faz parte! Revise os erros para ganhar uma vida, ou use gemas para recarregar.</p>
 <button class="a-btn" data-act="recarregar" ${S.gemas < 30 ? "disabled" : ""}>Recarregar ❤️ ×5 · 💎 30</button><button class="a-btn y" data-ir="revisao">Revisar erros e ganhar ❤️</button><button class="a-btn lin" data-act="voltar">Agora não</button></div>`;
  };

  function corpoQ(q) {
    if (q.k === "mc" || q.k === "tf") {
      const longo = q.o.some((o) => o.length > 14) || q.k === "tf";
      return `<div class="q-opts ${longo ? "um" : ""}">${q.o
        .map((o, i) => {
          let c = "";
          if (Q.res) {
            if (i === q.c) c = "cert";
            else if (i === Q.sel) c = "err";
          } else if (i === Q.sel) c = "sel";
          return `<button class="q-opt ${c}" data-op="${i}" ${Q.res ? "disabled" : ""}><span class="q-k">${i + 1}</span>${esc(o)}</button>`;
        })
        .join("")}</div>`;
    }
    if (q.k === "order") {
      const todas = q.w.concat(q.x || []);
      return `<div class="ord-resp" aria-label="Sua resposta">${q.resp.map((ix, p) => `<button class="tile" data-tira="${p}" ${Q.res ? "disabled" : ""}>${esc(todas[ix])}</button>`).join("") || '<span class="a-sm">Toque nas palavras abaixo para montar</span>'}</div><div class="ord-banco">${q.banco
        .map((ix) => {
          const usada = q.resp.includes(ix);
          return `<button class="tile ${usada ? "usada" : ""}" data-poe="${ix}" ${usada || Q.res ? "disabled" : ""}>${esc(todas[ix])}</button>`;
        })
        .join("")}</div>`;
    }
    if (q.k === "pairs") {
      const col = (arr, lado) =>
        arr
          .map((ix) => {
            const feito = q.ok.includes(ix);
            const pick = q.pick && q.pick[0] === lado && q.pick[1] === ix;
            const err = q.erroPar && q.erroPar.some((e) => e[0] === lado && e[1] === ix);
            return `<button class="tile par ${feito ? "feito" : ""} ${pick ? "pick" : ""} ${err ? "errpar" : ""}" data-par="${lado}:${ix}" ${feito ? "disabled" : ""}>${esc(q.p[ix][lado === "L" ? 0 : 1])}</button>`;
          })
          .join("");
      return `<div class="pares"><div>${col(q.L, "L")}</div><div>${col(q.R, "R")}</div></div>`;
    }
    if (q.k === "type")
      return `<div style="padding:0 18px"><input class="q-in ${Q.res === "ok" ? "cert" : Q.res === "no" ? "err" : ""}" data-txt value="${esc(Q.txt)}" placeholder="${esc(q.ph || "Digite a resposta")}" aria-label="Sua resposta" autocomplete="off" autocapitalize="off" ${Q.res ? "disabled" : ""}></div>`;
  }
  const respCerta = (q) =>
    q.k === "mc" || q.k === "tf" ? q.o[q.c] : q.k === "order" ? q.w.join(" ") : q.k === "type" ? q.a[0] : "";
  function podeVerificar(q) {
    if (q.k === "mc" || q.k === "tf") return Q.sel !== null;
    if (q.k === "order") return q.resp.length > 0;
    if (q.k === "type") return Q.txt.trim().length > 0;
    return false;
  }
  T.quiz = () => {
    phone.classList.add("claro");
    const M = MATERIAS[Q.m];
    if (Q.i >= Q.qs.length) return fimLicao();
    const q = Q.qs[Q.i];
    const tot = Q.qs.length;
    const titulo = {
      mc: "Escolha a resposta certa",
      tf: "Verdadeiro ou falso?",
      order: "Monte a resposta",
      pairs: "Toque nos pares",
      type: "Escreva a resposta",
    }[q.k];
    return `<div class="q-top"><button class="q-x" data-act="sairLicao" aria-label="Fechar lição">${ic("x")}</button><div class="q-prog"><i style="width:${((Q.i + (Q.res ? 1 : 0)) / tot) * 100}%"></i></div><span class="duo-st" style="background:none">❤️ ${S.vidas}</span></div>
 <div class="q-kick" style="color:${M.cor}">${q.rep ? "🔁 Erro anterior · " : ""}${titulo}${S.voz ? `<button class="q-voz" data-act="ler" aria-label="Ler em voz alta">${ic("voz", 16)}</button>` : ""}</div>
 ${S.libras ? libras() : ""}
 ${q.texto ? `<div class="q-texto">${q.texto}</div>` : ""}
 <div class="q-tit">${esc(q.t)}</div>${q.fig ? `<div class="q-fig">${FIG[q.fig]()}</div>` : ""}
 ${corpoQ(q)}
 ${!Q.res && q.d && q.k !== "pairs" ? `<details class="q-dica"><summary>💡 Ver dica</summary>${esc(q.d)}</details>` : ""}
 <div class="q-espaco"></div>
 <div class="q-sheet ${Q.res || ""}">${Q.res === "ok" ? `<div class="q-fb"><b>${Q.combo >= 3 ? `🔥 ${Q.combo} seguidas!` : ["Mandou bem!", "Isso aí!", "Perfeito!", "Excelente!"][Q.i % 4]}</b></div>` : Q.res === "no" ? `<div class="q-fb"><b>Resposta certa:</b><br>${esc(respCerta(q))}${q.d ? `<div class="a-sm" style="color:inherit;margin-top:4px">💡 ${esc(q.d)}</div>` : ""}</div>` : ""}
 ${q.k === "pairs" && !Q.res ? `<p class="q-save" style="margin:0 0 8px">Toque numa palavra da esquerda e depois no par dela</p>` : `<button class="a-btn ${Q.res === "no" ? "err" : Q.res === "ok" ? "ok" : "verde"}" data-act="${Q.res ? "proxima" : "verificar"}" ${!Q.res && !podeVerificar(q) ? "disabled" : ""}>${Q.res ? "Continuar" : "Verificar"}</button>`}
 ${Q.res ? "" : `<div class="q-save">${offline ? "Sem internet · tudo salvo no celular" : "Lição salva no celular · funciona sem internet"}</div>`}</div>`;
  };

  function fimLicao() {
    const prim = Q.qs.filter((q) => !q.rep).length;
    const prec = Math.round((Q.acertos / prim) * 100);
    const xp = 10 + Q.acertos * 2 + (Q.max >= 5 ? 5 : 0) + (Q.l === "rev" ? 5 : 0);
    const seg = Math.round((Date.now() - Q.t0) / 1000);
    if (!Q.pago) {
      Q.pago = 1;
      Q.xp = xp;
      pontos(xp);
      S.xpHoje += xp;
      S.feitas++;
      S.turmaLicoes++;
      S._hoje = (S._hoje || 12) + Math.max(1, Math.round(seg / 60));
      S.semana[4] = 1;
      if (Q.l === "rev") {
        if (feitas(Q.m) < 3) S.prog[Q.m] = 3;
      } else if (Q.l >= feitas(Q.m)) S.prog[Q.m] = Q.l + 1;
      if (offline) S.fila++;
      save();
      som("fim");
    }
    return `<div class="fim">${tico(130, "feliz")}<div class="a-t" style="color:#d08a00;font-size:28px">${Q.l === "rev" ? "Unidade concluída!" : "Lição concluída!"}</div>
 <div class="fim-c"><div style="--c:#fec110"><span>Total de XP</span><b>⚡ ${Q.xp}</b></div><div style="--c:#18923b"><span>${prec >= 90 ? "Incrível" : "Precisão"}</span><b>🎯 ${prec}%</b></div><div style="--c:#5b8cff"><span>Tempo</span><b>⏱ ${Math.floor(seg / 60)}:${String(seg % 60).padStart(2, "0")}</b></div></div>
 ${Q.max >= 5 ? `<p class="a-sm">🔥 Combo de ${Q.max} acertos seguidos: +5 XP</p>` : ""}
 <p class="a-sm">${Q.erros ? "Os erros foram para a sua Revisão." : "Nenhum erro, mandou muito bem!"} ${offline ? "Salvo no celular; sincroniza quando a internet voltar." : ""}</p>
 <button class="a-btn verde" data-act="fimLicao">Continuar</button></div>`;
  }

  let filtro = "todas";
  const MB = { mat: 0, por: 0, cie: 18, his: 14, geo: 16, ing: 22, esp: 20, edf: 9 };
  T.biblio = () => {
    const lista = ORDEM.filter(
      (k) => filtro === "todas" || (filtro === "baixadas" ? S.baix[k] === 1 : feitas(k) > 0 && feitas(k) < 3),
    );
    return `<div class="a-body">
 <div class="a-flex"><div class="a-t" style="margin:0">Biblioteca</div>${logo(28)}</div>
 <label class="a-search" style="margin-top:10px">${ic("busca", 18)}<input placeholder="Buscar matéria" aria-label="Buscar matéria" data-busca></label>
 <div class="a-filt">${[
   ["todas", "Todas"],
   ["baixadas", "Baixadas"],
   ["and", "Em andamento"],
 ]
   .map(([k, n]) => `<button data-filt="${k}" aria-pressed="${filtro === k}">${n}</button>`)
   .join("")}</div>
 <div class="a-grid">${
   lista
     .map((k) => {
       const M = MATERIAS[k],
         st = S.baix[k];
       return `<div class="lv" data-nome="${norm(M.n)}"><div class="lv-cap" style="background:${M.cor}">${M.ic}</div><div class="lv-b"><b>${M.n}</b><span class="a-sm">${M.un}</span><div class="a-bar"><i style="width:${(Math.min(3, feitas(k)) / 3) * 100}%"></i></div>
 ${st === 1 ? `<button class="lv-dl" data-subj="${k}" data-vai="trilha" style="background:#dff3e5;color:#13692d">${ic("check", 13)} Baixada · Abrir</button>` : typeof st === "number" && st < 1 ? `<div class="a-bar"><i style="width:${st * 100}%;background:var(--p)"></i></div><span class="a-sm">Baixando…</span>` : `<button class="lv-dl" data-dl="${k}">${ic("down", 13)} Baixar · ${MB[k]} MB</button>`}</div></div>`;
     })
     .join("") || '<p class="a-sm">Nada por aqui ainda.</p>'
 }</div>
 <div class="wifi ${offline ? "off" : ""}">${ic("wifi")}<span>${offline ? "<b>Sem internet agora.</b><br>As matérias baixadas continuam funcionando normalmente." : "<b>Wi-Fi da escola ligado</b><br>Baixe as matérias agora e estude em casa sem gastar dados."}</span></div></div>`;
  };

  T.onb = () => {
    phone.classList.add("claro");
    let p = S._sel || "aluno";
    return `<div class="onb">
 <div class="onb-logo">${logo(52)}</div><h3>Trilha<small>do Conhecimento</small></h3>
 <div class="a-h2" style="margin-top:8px">Quem vai usar o app?</div>
 ${[
   ["aluno", "escola", "Sou aluno", "Estudar as trilhas e ganhar medalhas"],
   ["professor", "pc", "Sou professor", "Acompanhar a turma e enviar lições"],
   ["familia", "casa", "Sou da família", "Ver como meu filho está indo"],
 ]
   .map(
     ([k, i, a, b]) =>
       `<button class="papel ${p === k ? "sel" : ""}" data-sel="${k}" aria-pressed="${p === k}"><span class="a-ico">${ic(i)}</span><span><b>${a}</b><br><span class="a-sm">${b}</span></span></button>`,
   )
   .join("")}
 <label class="a-h2" for="cod" style="margin-bottom:0">Código da turma</label>
 <input class="cod" id="cod" value="6B-4271" maxlength="7" autocomplete="off">
 <p class="a-sm" style="margin:0">O professor entrega o código na sala. Não precisa de e-mail.</p>
 <button class="a-btn y" data-act="entrar" style="margin-top:auto">Começar a trilha</button>
 <p class="q-save" style="margin:0">Depois do primeiro acesso, funciona sem internet</p></div>`;
  };

  T.turma = () => {
    const pct = Math.min(100, (S.turmaLicoes / 500) * 100);
    const rank = [
      ["AC", "Ana C.", 9 + S.dicas, "#18923b"],
      ["RB", "Rafael B.", 7, "#012673"],
      ["KS", "Kauã S.", 6, "#7a3fc2"],
    ].sort((a, b) => b[2] - a[2]);
    return `
 <div class="a-head curto"><div class="a-flex"><span class="a-kick" style="color:#fff">${logo(18)} Desafio da semana · 6º B</span><span class="a-tag" style="background:var(--y);color:var(--t)">Faltam 2 dias</span></div>
 <div class="a-h1">Juntos até 500 lições</div>
 <div class="a-bar" style="height:14px;margin-top:10px;background:rgba(255,255,255,.2)"><i style="width:${pct}%;background:var(--y)"></i></div>
 <div class="a-flex" style="margin-top:6px;font-size:13px"><span><b style="font-size:18px">${S.turmaLicoes}</b> lições feitas</span><span>meta 500</span></div></div>
 <div class="a-body"><div class="a-card a-row"><span class="a-ico" style="background:#fff3cf">${ic("pres")}</span><span><span class="a-kick">Recompensa da turma</span><br><b>Aula de robótica no laboratório</b></span></div>
 <div class="a-sec">Ninguém fica pra trás</div>
 <div class="a-card">${
   S.ajudouJoao
     ? `<div class="a-row"><span class="a-av">JP</span><span><b>Dica enviada para o João Pedro!</b><br><span class="a-sm">Ele já está tentando de novo. Você ganhou +20 pts.</span></span></div>`
     : `<div class="a-row"><span class="a-av">JP</span><span><b>João Pedro</b> está travado em <b>frações</b>.<br><span class="a-sm">Você já passou dessa lição!</span></span></div>
 ${S._dica ? `<div class="a-list" style="margin-top:10px">${["Conta os pedaços pintados e põe em cima do total.", "Desenha uma pizza! Ajuda muito.", "O número de baixo é em quantos pedaços cortou."].map((d, i) => `<button class="a-item" data-dica="${i}" style="box-shadow:none;border:1px solid #e1e4ef">💬 ${d}</button>`).join("")}</div>` : `<button class="a-btn" data-act="dica" style="margin-top:12px">Mandar uma dica (+20 pts)</button>`}`
 }</div>
 <div class="a-sec">Quem mais ajudou</div><div class="a-grid" style="grid-template-columns:repeat(3,1fr)">${rank.map(([a, n, q, c]) => `<div class="a-card" style="text-align:center;margin:0"><span class="a-av" style="margin:0 auto 6px;background:${c};color:#fff">${a}</span><b style="font-size:13px">${n}</b><div class="a-sm">${q} dicas</div></div>`).join("")}</div></div>`;
  };

  const CORES = ["#fec110", "#18923b", "#012673", "#7a3fc2"];
  T.perfil =
    () => `<div class="a-body"><div class="a-flex"><div class="a-t" style="margin:0">${logo(26)} Meu perfil</div><button class="a-tag p" data-act="sair" style="border:0">Trocar perfil</button></div>
 <div style="text-align:center;margin-top:8px"><div style="width:96px;height:96px;border-radius:50%;background:${S.cor};margin:0 auto;display:grid;place-items:end center;overflow:hidden"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="34" r="17" fill="#8a5a3c"/><path d="M23 30c0-12 9-18 17-18s18 6 17 18c-4-6-10-8-17-8s-13 2-17 8z" fill="#2b1a12"/><path d="M12 80c2-16 14-24 28-24s26 8 28 24z" fill="#fff"/></svg></div>
 <div class="a-t" style="margin:8px 0 0">Ana Clara</div><div class="a-sm">6º B · Degrau ${degIdx() + 1} · ${degraus[degIdx()][0]}</div>
 <div class="cores" role="group" aria-label="Cor do avatar">${CORES.map((c) => `<button data-cor="${c}" style="background:${c}" aria-pressed="${S.cor === c}" aria-label="Cor ${c}"></button>`).join("")}</div></div>
 <div class="a-sec">Do meu jeito</div><div class="a-card">
 ${[
   ["voz", "Ler as perguntas em voz alta", "Para quem ainda está aprendendo a ler"],
   ["libras", "Libras (VLibras)", "Tradução das lições pelo avatar oficial"],
   ["sons", "Sons do app", "Toque de acerto e de erro"],
   ["dados", "Economizar dados", "Baixa só no Wi-Fi da escola"],
 ]
   .map(
     ([k, a, b]) =>
       `<div class="sw"><span><b>${a}</b><br><span class="a-sm">${b}</span></span><button class="tg" role="switch" aria-checked="${!!S[k]}" aria-label="${a}" data-tg="${k}"></button></div>`,
   )
   .join("")}
 <div class="sw"><b>Tamanho da letra</b><div class="fsz">${[
   [0.92, "14px"],
   [1, "17px"],
   [1.12, "21px"],
 ]
   .map(
     ([v, s]) =>
       `<button data-fs="${v}" aria-pressed="${S.fs === v}" style="font-size:${s}" aria-label="Letra ${v < 1 ? "pequena" : v > 1 ? "grande" : "média"}">A</button>`,
   )
   .join("")}</div></div></div></div>`;

  T.progresso = () => {
    const m = [22, 35, 18, 40, Math.max(8, S._hoje || 12), 0, 0];
    const mx = 45;
    return `<div class="a-body"><div class="a-row"><button class="q-x" data-act="voltar" aria-label="Voltar">${ic("volta")}</button><div class="a-t" style="margin:0">Seu progresso</div></div>
 <div class="a-stats" style="margin-top:12px"><div class="a-stat"><b>${S.feitas}</b><span>lições feitas</span></div><div class="a-stat" style="background:#fff3cf"><b>3h40</b><span>no mês</span></div><div class="a-stat" style="background:var(--p2)"><b>87%</b><span>de acertos</span></div></div>
 <div class="a-sec">Minutos por dia</div><div class="a-card"><div class="mins">${m.map((v, i) => `<div class="${i === 4 ? "hoje" : ""}"><span>${v || ""}</span><i style="height:${(v / mx) * 100}%"></i>${i === 4 ? "Hoje" : "STQQSSD"[i]}</div>`).join("")}</div></div>
 <div class="a-flex"><div class="a-sec">Medalhas</div><span class="a-sm">4 de 6</span></div>
 <div class="medal">${[
   ["🔥", "5 dias seguidos", 1, "#18923b"],
   ["📖", "Primeiro livro", 1, "#fec110"],
   ["📈", "Subiu de degrau", 1, "#012673"],
   ["✔️", "10 sem errar", 1, "#7a3fc2"],
   ["🤝", "Ajudou a turma", S.ajudouJoao, "#18923b"],
   ["🏆", "Degrau Mestre", degIdx() === 3, "#fec110"],
 ]
   .map(
     ([e, n, ok, c]) =>
       `<div class="${ok ? "" : "lk"}"><span style="${ok ? `background:${c}` : ""};font-size:24px">${ok ? e : ic("lock")}</span>${n}</div>`,
   )
   .join("")}</div></div>`;
  };

  let chat = [
    { eu: 1, t: "Por que 3/8 é menor que 1/2? O 8 é maior que o 2!" },
    {
      t: `Boa pergunta! O número de baixo diz em quantos pedaços a coisa foi cortada. Olha só a mesma barra de chocolate:${barra(2, 1)}<span class="a-sm">1/2: um pedaço grande</span>${barra(8, 3, "n")}<span class="a-sm">3/8: três pedaços pequenos</span><br>Viu? Os 3 pedacinhos ainda não chegam na metade.`,
    },
  ];
  const RESP = {
    entendi: "Que bom! Quer tentar um exercício para fixar?",
    outro:
      "Pensa numa pizza: cortada em 2, cada pedaço é enorme. Cortada em 8, cada pedaço é fininho. Três fatias fininhas são menos que uma fatia enorme.",
    exerc: `Qual é maior: <b>2/6</b> ou <b>1/2</b>?${barra(6, 2, "n")}${barra(2, 1)}Dica: compare onde as barras param.`,
  };
  function responder(txt) {
    const t = txt.toLowerCase();
    if (/metade|1\/2|meio/.test(t))
      return "Metade é quando você corta em 2 partes iguais e pega 1. Por isso 1/2 = 2/4 = 4/8.";
    if (/fra[cç]/.test(t))
      return "Fração é um pedaço de um inteiro. O número de baixo diz em quantas partes foi cortado; o de cima, quantas você pegou.";
    if (/simplific|forma mais simples/.test(t))
      return "Para simplificar, divida em cima e embaixo pelo mesmo número. 6/8 ÷ 2 = 3/4.";
    if (/saci|leitura|texto/.test(t))
      return "Leia devagar e procure no texto as palavras da pergunta. A resposta quase sempre está perto delas.";
    return (
      "Ainda não sei responder essa sozinho. Vou guardar a sua dúvida e mandar para a professora Márcia" +
      (offline ? " assim que a internet voltar." : ".")
    );
  }
  T.duvidas =
    () => `<div class="a-body" style="padding-bottom:0"><div class="a-row"><button class="q-x" data-act="voltar" aria-label="Voltar">${ic("volta")}</button>${logo(26)}<span><b style="font-size:17px">Tira-dúvidas</b><br><span class="a-sm">Explica com calma, quantas vezes precisar</span></span></div></div>
 <div class="chat">${chat.map((m) => `<div class="bub ${m.eu ? "eu" : "ia"}">${m.t}</div>`).join("")}</div>
 <div class="chips"><button data-chat="entendi">Entendi!</button><button data-chat="outro">Explica de outro jeito</button><button data-chat="exerc">Me dá um exercício</button></div>
 <form class="chat-in" data-form="chat"><input name="m" placeholder="Escreva sua dúvida" aria-label="Escreva sua dúvida" autocomplete="off"><button aria-label="Enviar">${ic("env", 18)}</button></form>
 <p class="q-save" style="padding:0 16px 12px">Respostas baseadas no material da BNCC e revisadas por professores</p>`;

  let mostra = false;
  T.revisao = () => {
    const e = S.erros[0];
    return `<div class="a-body"><div class="a-row"><button class="q-x" data-act="voltar" aria-label="Voltar">${ic("volta")}</button>${logo(26)}<span><b style="font-size:17px">Revisão dos erros</b><br><span class="a-sm">Hoje: ${S.erros.length} pergunta${S.erros.length === 1 ? "" : "s"} · cerca de ${Math.max(1, S.erros.length)} min</span></span></div>
 ${
   e
     ? `<div class="rev-card" style="margin-top:14px"><div class="a-flex" style="font-size:12px;opacity:.8"><span>Revisão</span><span>1 de ${S.erros.length}</span></div><div style="font-size:24px;font-weight:900;line-height:1.15">${e.q}</div><div style="font-size:13px;opacity:.8">Você errou essa antes. Vamos de novo?</div>
 ${mostra ? `<div class="resp">${e.r}</div><div style="display:flex;gap:8px"><button class="a-btn" style="background:var(--g)" data-rev="1">Acertei</button><button class="a-btn" style="background:#fff;color:var(--n)" data-rev="0">Errei</button></div>` : `<button class="a-btn y" data-act="mostrar" style="margin-top:auto">Mostrar resposta</button>`}</div>`
     : `<div class="a-card" style="margin-top:14px;text-align:center"><div style="font-size:42px">✅</div><b>Nada para revisar hoje!</b><p class="a-sm">Os erros voltam aqui em intervalos cada vez maiores.</p></div>`
 }
 <div class="a-sec">Cada acerto sobe um degrau</div>
 <div class="escada">${["#18923b", "#fec110", "#012673", "#7a3fc2"].map((c, i) => `<div style="height:${35 + i * 20}%"><i style="background:${c};opacity:${e && e.d === i ? 1 : 0.35}"></i></div>`).join("")}</div>
 <div class="escada-l"><span>amanhã</span><span>em 3 dias</span><span>em 1 semana</span><span>aprendido!</span></div>
 <p class="a-sm">A pergunta volta em intervalos cada vez maiores até ficar guardada de vez. Errou? Ela volta para o primeiro degrau.</p>
 <div class="a-stats" style="grid-template-columns:1fr 1fr"><div class="a-stat"><b>${S.aprendidos}</b><span>erros já aprendidos</span></div><div class="a-stat" style="background:var(--p2)"><b>${S.erros.length}</b><span>para revisar hoje</span></div></div></div>`;
  };

  T.escola = () => {
    const ok = 20 - S.quebrados;
    return `<div class="a-body"><div class="a-row">${hist.length ? `<button class="q-x" data-act="voltar" aria-label="Voltar">${ic("volta")}</button>` : ""}${logo(26)}<span><b style="font-size:17px">Escola que funciona</b><br><span class="a-sm">Laboratório de informática · hoje</span></span></div>
 <div class="a-card" style="margin-top:12px"><div class="a-flex"><span><span class="a-sm">Computadores</span><br><b style="font-size:22px">${ok} de 24</b> <span class="a-sm">ok</span></span><span style="text-align:right"><span class="a-sm">Internet</span><br><b style="color:${offline ? "#9a6d00" : "var(--g)"}">● ${offline ? "Fora do ar" : "Funcionando"}</b></span></div>
 <div class="pcs">${Array.from({ length: 24 }, (_, i) => `<i class="${i >= 24 - S.quebrados ? "vm" : i >= 20 - S.quebrados ? "am" : ""}"></i>`).join("")}</div>
 <div class="leg"><span>🟩 ok</span><span>🟨 em conserto</span><span>🟥 quebrado</span></div></div>
 <div class="a-sec">Algo não funciona? Avise</div>
 <div class="avisa">${[
   ["pc", "Computador", "#012673"],
   ["wifi", "Internet", "#18923b"],
   ["proj", "Projetor", "#fec110"],
   ["mais", "Outro", "#7a3fc2"],
 ]
   .map(
     ([i, n, c]) =>
       `<button data-avisa="${n}" style="background:${c};${c === "#fec110" ? "color:#0d1a3d" : ""}">${ic(i)}${n}</button>`,
   )
   .join("")}</div>
 <div class="a-sec">Avisos da escola</div><div class="a-list">${S.avisos.map((a) => `<div class="a-item"><span style="flex:1"><b>${a.t}</b><br><span class="a-sm">${a.s}</span></span><span class="a-tag ${a.e === "Resolvido" ? "g" : a.e === "Enviado" ? "p" : ""}">${a.e}</span></div>`).join("")}</div>
 <div class="a-card a-flex" style="margin-top:12px;background:var(--n);color:#fff"><span style="font-size:13px">Próximo horário livre do laboratório: <b>quinta, 14h</b></span><button class="a-tag" style="border:0;background:var(--y);color:var(--t);font-size:13px;padding:7px 10px" data-act="reservar">${S.reserva ? "Reservado ✓" : "Reservar"}</button></div>
 <p class="q-save">Esses dados alimentam o painel público da escola.</p></div>`;
  };

  /* professor */
  T.prof =
    () => `<div class="a-head curto"><div class="a-flex"><span class="a-kick" style="color:#fff">${logo(18)} Modo professor</span><span class="a-chip" style="font-size:11px">${offline ? "Offline · salvo" : "Sincronizado " + new Date().toTimeString().slice(0, 5)}</span></div>
 <div class="a-h1">Turma 6º B</div><div class="a-sub">32 alunos · Matemática</div>
 <div class="a-stats" style="margin-top:12px">${[
   ["27", "ativos na semana", "rgba(255,255,255,.14)"],
   ["74%", "acertos médios", "rgba(255,255,255,.14)"],
   [String(Math.max(0, 5 - S.reforco * 3)), "precisam de ajuda", "var(--y)"],
 ]
   .map(
     ([a, b, c], i) =>
       `<div class="a-stat" style="background:${c};${i === 2 ? "color:var(--t)" : ""}"><b>${a}</b><span style="color:inherit;opacity:.85">${b}</span></div>`,
   )
   .join("")}</div></div>
 <div class="a-body"><div class="a-sec" style="margin-top:4px">Turma por degrau</div>
 <div style="display:flex;border-radius:10px;overflow:hidden;font-weight:900;font-size:12px;text-align:center">${[
   [5, "#18923b"],
   [11, "#fec110"],
   [12, "#012673"],
   [4, "#7a3fc2"],
 ]
   .map(
     ([n, c]) =>
       `<div style="flex:${n};background:${c};color:${c === "#fec110" ? "#0d1a3d" : "#fff"};padding:6px 0">${n}</div>`,
   )
   .join("")}</div>
 <div class="deg-lbl" style="color:var(--mut);margin-top:4px"><span>Semente</span><span>Broto</span><span>Explorador</span><span>Mestre</span></div>
 <div class="a-sec">Precisam de atenção</div><div class="a-list">${[
   ["JP", "João Pedro", "Errou 4 de 5 em frações", "Revisar", "r"],
   ["MS", "Maria Sophia", "Sem acessar há 6 dias", "Sem acesso", ""],
   ["LG", "Luiz Gustavo", "Parou na lição 2 de leitura", "Revisar", "r"],
 ]
   .map(
     ([a, n, d, t, c]) =>
       `<div class="a-item"><span class="a-av">${a}</span><span style="flex:1"><b>${n}</b><br><span class="a-sm">${S.reforco ? "Lição de reforço enviada" : d}</span></span><span class="a-tag ${S.reforco ? "g" : c}">${S.reforco ? "Enviado" : t}</span></div>`,
   )
   .join("")}</div>
 <button class="a-btn" data-act="reforco" style="margin-top:14px" ${S.reforco ? "disabled" : ""}>${ic("env", 18)} ${S.reforco ? "Lição de reforço enviada" : "Enviar lição de reforço"}</button></div>`;

  T.formacao = () => {
    const mods = [
      ["O laboratório na aula de matemática", 8, 100],
      ["Criar sua própria lição no app", 6, 100],
      ["Ninguém fica pra trás: acompanhar a turma", 8, S.modulo3],
      ["A internet caiu: aula com o app offline", 8, 0],
      ["Projeto de robótica com sucata", 10, 0],
    ];
    const conc = mods.filter((m) => m[2] >= 100).length;
    return `
 <div class="a-head curto"><span class="a-kick" style="color:#fff">${logo(18)} Modo professor</span><div class="a-h1">Sua formação</div>
 <div class="a-flex" style="font-size:13px;margin-top:6px"><span>${conc} de 5 módulos</span><span style="color:var(--y);font-weight:800">Certificado de 40h</span></div>
 <div class="a-bar" style="margin-top:8px;background:rgba(255,255,255,.2)"><i style="width:${(conc / 5) * 100}%;background:var(--y)"></i></div></div>
 <div class="a-body"><div class="a-list">${mods
   .map(([n, h, p], i) => {
     const cur = p < 100 && (i === 0 || mods[i - 1][2] >= 100);
     return `<div class="mod ${cur ? "cur" : ""}"><span class="a-ico" style="background:${p >= 100 ? "var(--g)" : cur ? "var(--y)" : "#e8eaf3"};color:${p >= 100 ? "#fff" : "var(--t)"}">${p >= 100 ? ic("check", 18) : i + 1}</span><span style="flex:1"><b>${n}</b><br><span class="a-sm">${p >= 100 ? `Concluído · ${h}h` : cur && p > 0 ? `Em andamento · ${p}% · ${h}h` : `${h}h`}</span>${cur ? `<button class="a-btn" data-act="modulo" style="margin-top:10px;padding:10px">${p > 0 ? "Continuar módulo" : "Começar módulo"}</button>` : ""}</span></div>`;
   })
   .join("")}</div>
 ${conc === 5 ? `<div class="a-card a-row" style="margin-top:12px;background:#dff3e5">${ic("cert", 28)}<b>Certificado de 40h liberado!</b></div>` : ""}
 <div class="a-card a-row" style="margin-top:12px;background:var(--n);color:#fff">${ic("turma")}<span style="font-size:13px"><b>Troca entre professores:</b> 12 planos de aula novos de colegas da sua rede</span></div></div>`;
  };

  /* família */
  const RESUMO =
    "Semana da Ana Clara. Ela estudou 4 de 5 dias e subiu para o degrau 3, Explorador. Está indo muito bem em leitura. Em frações ainda tem dúvidas: vale treinar em casa com a atividade sugerida.";
  T.familia = () => {
    phone.classList.add("claro");
    return `<div class="a-body"><div class="a-flex"><span><span class="a-sm">Área da família</span><div class="a-t" style="margin:0">Semana da Ana Clara</div></span>${logo(30)}</div>
 <button class="a-btn n" data-act="resumo" style="margin-top:12px">${ic("voz", 18)} Ouvir o resumo da semana · 1 min</button>
 <div class="a-grid" style="margin-top:12px"><div class="a-stat" style="background:#dff3e5"><span>Estudou</span><b>4 de 5 dias</b></div><div class="a-stat" style="background:var(--p2)"><span>Subiu para</span><b>Degrau 3</b></div></div>
 <div class="a-sec">Recado da professora</div><div class="a-card">A Ana está indo muito bem em leitura. Em frações ainda tem dúvidas: vale treinar em casa com a atividade abaixo.<div class="a-sm" style="margin-top:8px">Prof.ª Márcia · terça, 16:20</div></div>
 <div class="a-sec">Para fazer juntos</div><div class="a-card" style="background:#fff7dc"><div class="a-row"><span class="a-ico" style="background:var(--y)">🍰</span><span><b>Frações na cozinha</b><br><span class="a-sm">15 min · sem precisar de celular</span></span></div><p style="margin:10px 0 0;font-size:14px">Façam uma receita de bolo pela metade. Quanto fica meia xícara de 3/4 de açúcar?</p></div>
 <div style="display:flex;gap:8px;margin-top:14px;font-size:13px"><button class="a-btn lin" style="font-size:13px;padding:12px 6px" data-act="escola-msg">Falar com a escola</button><button class="a-btn" style="font-size:13px;padding:12px 6px" data-act="parabens">${S.parabens ? "Parabéns enviado ✓" : "Mandar parabéns"}</button></div>
 <button class="a-tag p" data-act="sair" style="border:0;margin:16px auto 0;display:block">Trocar perfil</button></div>`;
  };

  /* ---------- navegação ---------- */
  const TABS = {
    aluno: [
      ["inicio", "casa", "Início"],
      ["trilha", "trilha", "Trilha"],
      ["biblio", "livro", "Biblioteca"],
      ["turma", "turma", "Turma"],
      ["perfil", "user", "Perfil"],
    ],
    professor: [
      ["prof", "turma", "Turma"],
      ["formacao", "cert", "Formação"],
      ["escola", "escola", "Escola"],
      ["sair", "sair", "Sair"],
    ],
    familia: null,
  };
  const abas = () => TABS[S.papel] || null;
  function ir(t, semHist) {
    if (!semHist && tela && tela !== t) hist.push(tela);
    tela = t;
    mostra = false;
    render();
    scr.scrollTop = 0;
  }
  function render() {
    phone.classList.remove("claro");
    phone.style.setProperty("--fs", S.fs);
    const html = (T[tela] || T.onb)();
    scr.innerHTML = html;
    if (!/^\s*<div class="a-head/.test(html)) phone.classList.add("claro");
    const tb = abas();
    const raiz = tb && tb.some((x) => x[0] === tela);
    if (tb && raiz && tela !== "quiz") {
      tabs.innerHTML = tb
        .map(([k, i, n]) => `<button data-tab="${k}" aria-current="${tela === k}">${ic(i)}${n}</button>`)
        .join("");
      tabs.className = "ph-tabs" + (S.papel === "professor" ? " escuro" : "");
    } else tabs.innerHTML = "";
    document
      .querySelectorAll("[data-papel]")
      .forEach((b) =>
        b.setAttribute(
          "aria-pressed",
          (b.dataset.papel || null) === (S.papel || null) && !!tela && (S.papel ? true : tela === "onb"),
        ),
      );
    rede();
  }
  function home() {
    return S.papel === "aluno"
      ? "trilha"
      : S.papel === "professor"
        ? "prof"
        : S.papel === "familia"
          ? "familia"
          : "onb";
  }
  function rede() {
    const n = document.getElementById("phNet");
    n.textContent = offline ? "Sem internet" : S.fila ? "Sincronizando…" : "Online";
    n.classList.toggle("off", offline);
  }
  function setOffline(v) {
    const era = offline;
    offline = v;
    if (era && !v && S.fila) {
      const f = S.fila;
      S.fila = 0;
      save();
      render();
      toast(`Internet de volta: ${f} ${f === 1 ? "ação sincronizada" : "ações sincronizadas"}.`);
    } else {
      render();
      if (v) toast("Sem internet. Tudo o que já foi baixado continua funcionando.");
    }
  }

  scr.addEventListener("click", (e) => {
    const b = e.target.closest("button,[data-lic]");
    if (!b || !scr.contains(b)) return;
    const d = b.dataset;
    if (d.sel) {
      S._sel = d.sel;
      render();
      return;
    }
    if (d.subj) {
      S.subj = d.subj;
      save();
      if (d.vai) {
        hist = [];
        ir("trilha", true);
      } else render();
      return;
    }
    if (d.lic) {
      const [m, l] = d.lic.split(":");
      S.subj = m;
      iniciar(m, l === "rev" ? "rev" : +l);
      return;
    }
    if (d.poe !== undefined) {
      const q = Q.qs[Q.i];
      q.resp.push(+d.poe);
      render();
      return;
    }
    if (d.tira !== undefined) {
      const q = Q.qs[Q.i];
      q.resp.splice(+d.tira, 1);
      render();
      return;
    }
    if (d.par) {
      const q = Q.qs[Q.i];
      const [lado, ix] = [d.par.split(":")[0], +d.par.split(":")[1]];
      if (!q.pick || q.pick[0] === lado) {
        q.pick = [lado, ix];
        render();
        return;
      }
      if (q.pick[1] === ix) {
        q.ok.push(ix);
        q.pick = null;
        som("ok");
        if (q.ok.length === q.p.length) {
          Q.res = "ok";
          if (!q.errou && !q.rep) Q.acertos++;
          Q.combo++;
          Q.max = Math.max(Q.max, Q.combo);
        }
        render();
      } else {
        q.erroPar = [q.pick, [lado, ix]];
        q.pick = null;
        q.errou = 1;
        Q.combo = 0;
        som("no");
        render();
        setTimeout(() => {
          q.erroPar = null;
          if (tela === "quiz") render();
        }, 600);
      }
      return;
    }
    if (d.msg) {
      toast(d.msg);
      return;
    }
    if (d.ir) {
      ir(d.ir);
      return;
    }
    if (d.op !== undefined) {
      if (Q.res) return;
      Q.sel = +d.op;
      render();
      return;
    }
    if (d.filt) {
      filtro = d.filt;
      render();
      return;
    }
    if (d.dl) {
      const k = d.dl;
      if (offline) {
        toast("Sem internet: conecte no Wi-Fi da escola para baixar esta trilha.");
        return;
      }
      S.baix[k] = 0;
      render();
      const tm = setInterval(() => {
        S.baix[k] = Math.min(1, (S.baix[k] || 0) + 0.2);
        if (S.baix[k] >= 1) {
          clearInterval(tm);
          save();
          toast("Trilha baixada. Agora funciona sem internet.");
        }
        if (tela === "biblio") render();
      }, 350);
      return;
    }
    if (d.dica !== undefined) {
      S.ajudouJoao = 1;
      S.dicas++;
      S._dica = 0;
      pontos(20);
      S.turmaLicoes++;
      save();
      render();
      enviar("Dica enviada para o João Pedro. +20 pts!");
      return;
    }
    if (d.cor) {
      S.cor = d.cor;
      save();
      render();
      return;
    }
    if (d.tg) {
      S[d.tg] = S[d.tg] ? 0 : 1;
      save();
      render();
      if (d.tg === "voz" && S.voz) falar("Leitura em voz alta ligada.");
      if (d.tg === "libras")
        toast(
          S.libras
            ? temVL()
              ? "Libras ligado: as lições ganham o botão do VLibras."
              : "Libras ligado. O VLibras funciona na versão publicada do site."
            : "Libras desligado.",
        );
      if (d.tg === "sons" && S.sons) som("ok");
      return;
    }
    if (d.fs) {
      S.fs = +d.fs;
      save();
      render();
      return;
    }
    if (d.chat) {
      chat.push({ eu: 1, t: b.textContent }, { t: RESP[d.chat] });
      render();
      scr.scrollTop = scr.scrollHeight;
      return;
    }
    if (d.rev !== undefined) {
      const e = S.erros.shift();
      if (+d.rev) {
        e.d++;
        const vida = S.vidas < 5;
        if (vida) S.vidas++;
        if (e.d >= 3) {
          S.aprendidos++;
          toast("Aprendido de vez! 🎉" + (vida ? " +1 ❤️" : ""));
        } else
          toast(
            "Subiu um degrau. Ela volta " +
              ["amanhã", "em 3 dias", "em 1 semana"][e.d] +
              "." +
              (vida ? " +1 ❤️" : ""),
          );
        pontos(5);
      } else {
        e.d = 0;
        S.erros.push(e);
        toast("Tudo bem! Ela volta amanhã, no primeiro degrau.");
      }
      save();
      mostra = false;
      render();
      return;
    }
    if (d.avisa) {
      S.avisos.unshift({
        t: `${d.avisa} com problema`,
        s: "Avisado agora pelo app",
        e: offline ? "Na fila" : "Enviado",
      });
      if (d.avisa === "Computador") S.quebrados = Math.min(6, S.quebrados + 1);
      save();
      render();
      enviar("Aviso enviado para a direção da escola.");
      return;
    }
    if (d.tab) {
      if (d.tab === "sair") {
        S.papel = null;
        save();
        hist = [];
        ir("onb", true);
        return;
      }
      hist = [];
      ir(d.tab, true);
      return;
    }
    const a = d.act;
    if (a === "entrar") {
      S.papel = S._sel || "aluno";
      save();
      hist = [];
      ir(home(), true);
      toast(
        S.papel === "aluno"
          ? "Bem-vinda, Ana! Lições baixadas para usar sem internet."
          : S.papel === "professor"
            ? "Turma 6º B conectada."
            : "Área da família da Ana Clara.",
      );
    } else if (a === "voltar") {
      try {
        speechSynthesis.cancel();
      } catch (e) {}
      const p = hist.pop() || home();
      ir(p, true);
    } else if (a === "verificar") {
      verificar();
    } else if (a === "proxima") {
      if (S.vidas <= 0 && Q.res === "no") {
        Q = null;
        hist = [];
        ir("semvidas", true);
        return;
      }
      Q.i++;
      Q.sel = null;
      Q.res = null;
      Q.txt = "";
      render();
      scr.scrollTop = 0;
    } else if (a === "ler") {
      const q = Q.qs[Q.i];
      falar(q.t + (q.o ? ". Opções: " + q.o.join(", ") : ""));
    } else if (a === "fimLicao") {
      const m = Q.m;
      Q = null;
      hist = [];
      S.subj = m;
      ir("trilha", true);
    } else if (a === "sairLicao") {
      Q = null;
      const p = hist.pop() || home();
      ir(p, true);
      toast("Você saiu da lição. Dá para recomeçar quando quiser.");
    } else if (a === "abrirLibras") {
      toast(
        abreVL()
          ? "VLibras aberto: toque no texto da pergunta para ver em Libras."
          : "O VLibras ainda está carregando. Tente de novo em alguns segundos.",
      );
    } else if (a === "bau") {
      S.baus[S.subj] = 1;
      S.gemas += 20;
      save();
      som("fim");
      render();
      toast("Baú aberto: +20 gemas 💎");
    } else if (a === "recarregar") {
      if (S.gemas >= 30) {
        S.gemas -= 30;
        S.vidas = 5;
        save();
        hist = [];
        ir("trilha", true);
        toast("Vidas recarregadas ❤️×5");
      }
    } else if (a === "dica") {
      S._dica = 1;
      render();
    } else if (a === "mostrar") {
      mostra = true;
      render();
    } else if (a === "reservar") {
      S.reserva = S.reserva ? 0 : 1;
      save();
      render();
      enviar(S.reserva ? "Laboratório reservado para quinta, 14h." : "Reserva cancelada.");
    } else if (a === "reforco") {
      S.reforco = 1;
      save();
      render();
      enviar("Lição de reforço enviada para 3 alunos.");
    } else if (a === "modulo") {
      if (S.modulo3 < 100) {
        S.modulo3 = Math.min(100, S.modulo3 + 20);
        toast(S.modulo3 >= 100 ? "Módulo 3 concluído!" : "Avançou para " + S.modulo3 + "%.");
      }
      save();
      render();
    } else if (a === "resumo") {
      falar(RESUMO);
      toast("Tocando o resumo da semana.");
    } else if (a === "escola-msg") {
      enviar("Mensagem enviada para a professora Márcia.");
    } else if (a === "parabens") {
      S.parabens = 1;
      save();
      render();
      enviar("Parabéns enviado para a Ana Clara! 🎉");
    } else if (a === "sair") {
      S.papel = null;
      save();
      hist = [];
      ir("onb", true);
    }
  });
  function verificar() {
    const q = Q.qs[Q.i];
    if (Q.res || !podeVerificar(q)) return;
    let ok;
    if (q.k === "mc" || q.k === "tf") ok = Q.sel === q.c;
    else if (q.k === "order") {
      const todas = q.w.concat(q.x || []);
      ok = q.resp.map((i) => todas[i]).join(" ") === q.w.join(" ");
    } else if (q.k === "type") ok = q.a.map(norm).includes(norm(Q.txt));
    if (ok) {
      Q.res = "ok";
      if (!q.rep) Q.acertos++;
      Q.combo++;
      Q.max = Math.max(Q.max, Q.combo);
      som("ok");
    } else {
      Q.res = "no";
      Q.erros++;
      Q.combo = 0;
      S.vidas = Math.max(0, S.vidas - 1);
      S.erros.push({ q: q.t, r: respCerta(q), d: 0 });
      if (!q.rep) Q.qs.push(prepara(Object.assign({}, q._o, { rep: true })));
      save();
      som("no");
    }
    render();
  }
  scr.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.matches("[data-txt]")) {
      e.preventDefault();
      verificar();
    }
  });
  scr.addEventListener("submit", (e) => {
    e.preventDefault();
    const i = e.target.querySelector("input");
    const v = i.value.trim();
    if (!v) return;
    chat.push({ eu: 1, t: v.replace(/[<>&]/g, "") }, { t: responder(v) });
    render();
    scr.scrollTop = scr.scrollHeight;
  });
  scr.addEventListener("input", (e) => {
    if (e.target.matches("[data-txt]")) {
      Q.txt = e.target.value;
      const bt = scr.querySelector('[data-act="verificar"]');
      if (bt) bt.disabled = !Q.txt.trim();
      return;
    }
    if (e.target.matches("[data-busca]")) {
      const v = e.target.value.toLowerCase();
      scr.querySelectorAll(".lv").forEach((c) => (c.hidden = !c.dataset.nome.includes(v)));
    }
  });
  tabs.addEventListener("click", (e) => {
    const b = e.target.closest("[data-tab]");
    if (!b) return;
    if (b.dataset.tab === "sair") {
      S.papel = null;
      save();
      hist = [];
      ir("onb", true);
      return;
    }
    hist = [];
    ir(b.dataset.tab, true);
  });
  document.querySelectorAll("[data-papel]").forEach((b) =>
    b.addEventListener("click", () => {
      const p = b.dataset.papel || null;
      S.papel = p;
      if (p) S._sel = p;
      save();
      hist = [];
      ir(home(), true);
    }),
  );
  document.getElementById("simOff").addEventListener("change", (e) => setOffline(e.target.checked));
  document.getElementById("appReset").addEventListener("click", () => {
    S = BASE();
    save();
    chat = chat.slice(0, 2);
    hist = [];
    filtro = "todas";
    ir("onb", true);
    toast("Demonstração recomeçada.");
  });
  window.addEventListener("offline", () => {
    document.getElementById("simOff").checked = true;
    setOffline(true);
  });
  window.addEventListener("online", () => {
    document.getElementById("simOff").checked = false;
    setOffline(false);
  });
  const relogio = () => {
    document.getElementById("phHora").textContent = new Date().toTimeString().slice(0, 5);
  };
  relogio();
  setInterval(relogio, 30000);
  ir(S.papel ? home() : "onb", true);
})();
