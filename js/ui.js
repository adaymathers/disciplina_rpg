let xpActual = 0;

// Referencias a elementos
const btnVerHab = document.getElementById("btnVerHabilidades");
const btnReiniciar = document.getElementById("btnReiniciar");

// Mostrar árbol de habilidades
btnVerHab.addEventListener("click", () => {
  document.getElementById("contenedorHabilidades").style.display = "block";
  renderizarArbolDeHabilidades(xpActual);
});

// Cerrar árbol de habilidades (global para onclick del HTML)
window.cerrarArbol = function () {
  document.getElementById("contenedorHabilidades").style.display = "none";
};

// Reiniciar progreso completamente
btnReiniciar.addEventListener("click", async () => {
  const confirmar = confirm("⚠️ Esto eliminará todo tu progreso. ¿Estás seguro?");
  if (!confirmar) return;

  const username = localStorage.getItem("username");
  if (!username) return alert("No se encontró un usuario activo.");

  try {
    await db.collection("usuarios").doc(username).set({
      creditos: 0,
      xp: 0,
      xpNecesario: 100,
      nivel: 1,
      stats: {
        fuerza: 1,
        inteligencia: 1,
        sabiduria: 1,
        lenguaje: 1,
        carisma: 1
      },
      actividades: [],
      log: [],
      misionDiaria: null
    });

    localStorage.removeItem("username");

    // Reinicia interfaz visual
    document.getElementById("logList").innerHTML = "";
    document.getElementById("app").style.display = "none";
    document.getElementById("login-container").style.display = "block";
    document.getElementById("username").value = "";

    alert("✅ Tu progreso ha sido borrado. ¡Comienza desde cero!");
  } catch (error) {
    console.error("❌ Error al reiniciar el progreso:", error);
    alert("Hubo un error al reiniciar. Intenta de nuevo.");
  }
});

// Cargar datos del usuario
async function cargarDatos() {
  if (!userDoc) return;

  const doc = await userDoc.get();
  if (!doc.exists) return;

  const data = doc.data();

  // Cargar estadísticas generales
  document.getElementById("creditos").textContent = data.creditos;
  document.getElementById("xpActual").textContent = data.xp;
  document.getElementById("xpNecesario").textContent = data.xpNecesario;
  document.getElementById("nivel").textContent = data.nivel;
  xpActual = data.xp;

  // Atributos (stats)
  for (let stat in data.stats) {
    document.getElementById(stat).textContent = data.stats[stat];
  }

  // Registro de actividades (log)
  const logList = document.getElementById("logList");
  logList.innerHTML = "";
  if (Array.isArray(data.log)) {
    data.log.slice().reverse().forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      logList.appendChild(li);
    });
  }
}
