// ================================
// Pure Unique Jewellery Tracker
// APP LOGIC (v1.0)
// ================================

let viewMode = "sku"; // sku or page
let necklaces = JSON.parse(localStorage.getItem("necklaces")) || NECKLACES;

// Save automatically
function save() {
  localStorage.setItem("necklaces", JSON.stringify(necklaces));
}

// Calculate progress
function getProgress(n) {
  const total = TASKS.length;
  const done = Object.values(n.tasks).filter(Boolean).length;
  return Math.round((done / total) * 100);
}

// Next motivational message
function motivation() {
  const messages = [
    "🎉 Resistance broken. Keep going.",
    "💪 Momentum builds everything.",
    "🏡 Villa Abroad in motion.",
    "🔥 One more step done.",
    "✨ Small action, big result."
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

// Render app
function render() {
  const app = document.getElementById("app");
  const stats = document.getElementById("stats");

  let html = "";

  necklaces.forEach(n => {
    const progress = getProgress(n);

    html += `
      <div class="card">
        <h3>${n.sku}</h3>
        <p>Page ${n.page}</p>
        <p>Progress: ${progress}%</p>

        <div class="tasks">
          ${TASKS.map(t => `
            <button
              class="task ${n.tasks[t.id] ? "done" : ""}"
              onclick="toggleTask('${n.sku}', '${t.id}')"
            >
              ${n.tasks[t.id] ? "✔ " : ""}${t.label}
            </button>
          `).join("")}
        </div>
      </div>
    `;
  });

  app.innerHTML = html;

  const totalProgress = Math.round(
    necklaces.reduce((sum, n) => sum + getProgress(n), 0) / necklaces.length
  );

  stats.innerHTML = `
    <p>Total Necklaces: ${necklaces.length}</p>
    <p>Overall Progress: ${totalProgress}%</p>
  `;
}

// Toggle task
function toggleTask(sku, taskId) {
  const n = necklaces.find(x => x.sku === sku);
  n.tasks[taskId] = !n.tasks[taskId];

  save();
  render();

  if (n.tasks[taskId]) {
    alert(motivation());
  }
}

// Toggle view (placeholder for next step)
function toggleView() {
  alert("View toggle coming next step");
}

// Initial load
render();
