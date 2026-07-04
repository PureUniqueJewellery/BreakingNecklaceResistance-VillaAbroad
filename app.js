let viewMode = "page";

let necklaces = JSON.parse(localStorage.getItem("necklaces")) || NECKLACES;

function save() {
  localStorage.setItem("necklaces", JSON.stringify(necklaces));
}

function getProgress(n) {
  const total = TASKS.length;
  const done = Object.values(n.tasks).filter(Boolean).length;
  return Math.round((done / total) * 100);
}

function toggleTask(sku, taskId) {
  const item = necklaces.find(n => n.sku == sku);
  item.tasks[taskId] = !item.tasks[taskId];
  save();
  render();
}

function toggleView() {
  viewMode = viewMode === "page" ? "sku" : "page";
  render();
}

function renderCard(n) {
  return `
    <div class="card">
      <h3>SKU ${n.sku}</h3>
      <p>Page ${n.page} • ${getProgress(n)}%</p>

      ${TASKS.map(t => `
        <button class="task ${n.tasks[t.id] ? "done" : ""}"
          onclick="toggleTask('${n.sku}', '${t.id}')">
          ${n.tasks[t.id] ? "✔ " : ""}${t.label}
        </button>
      `).join("")}
    </div>
  `;
}

function render() {
  const app = document.getElementById("app");
  const stats = document.getElementById("stats");

  stats.innerHTML = `Total Necklaces: ${necklaces.length}`;

  let html = "";

  if (viewMode === "sku") {
    necklaces
      .slice()
      .sort((a, b) => a.sku - b.sku)
      .forEach(n => html += renderCard(n));
  } else {
    const pages = {};

    necklaces.forEach(n => {
      if (!pages[n.page]) pages[n.page] = [];
      pages[n.page].push(n);
    });

    Object.keys(pages)
      .sort((a, b) => a - b)
      .forEach(page => {
        html += `<h2>Page ${page}</h2>`;
        pages[page].forEach(n => html += renderCard(n));
      });
  }

  app.innerHTML = html;
}

render();
