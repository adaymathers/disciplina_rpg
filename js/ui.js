async function cargarDatos() {
  if (!userDoc) return;

  const doc = await userDoc.get();
  if (!doc.exists) return;
  const data = doc.data();

  document.getElementById("creditos").textContent = data.creditos;
  document.getElementById("xpActual").textContent = data.xp;
  document.getElementById("xpNecesario").textContent = data.xpNecesario;
  document.getElementById("nivel").textContent = data.nivel;

  for (let stat in data.stats) {
    document.getElementById(stat).textContent = data.stats[stat];
  }

  const logList = document.getElementById("logList");
  logList.innerHTML = "";
  data.log.slice().reverse().forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    logList.appendChild(li);
  });
}
