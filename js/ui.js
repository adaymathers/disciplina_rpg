let xpActual = 0;

// Esperar a que cargue todo el DOM
window.addEventListener("DOMContentLoaded", () => {
  const btnVerHab = document.getElementById("btnVerHabilidades");
  const btnReiniciar = document.getElementById("btnReiniciar");

  if (btnReiniciar) {
    btnReiniciar.addEventListener("click", async () => {
      const confirmar = confirm("⚠️ Esto eliminará todo tu progreso. ¿Estás seguro?");
      if (!confirmar) return;

      const username = localStorage.getItem("username") || userId;
      if (!username) return alert("No se encontró un usuario activo.");

      try {
        await db.collection("usuarios").doc(username).set({
          xp: 0,
          nivel: 1,
          xpNecesario: 100,
          creditos: 0,
          stats: {
            fuerza: 1,
            inteligencia: 1,
            sabiduria: 1,
            lenguaje: 1,
            carisma: 1
          },
          log: [],
          actividades: [],
          misionDiaria: null
        });

        localStorage.removeItem("username");

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
  }
});

async function cargarDatos() {
  if (!userDoc) return;

  const doc = await userDoc.get();
  if (!doc.exists) return;

  const data = doc.data();

  document.getElementById("creditos").textContent = data.creditos;
  document.getElementById("xpActual").textContent = data.xp;
  document.getElementById("xpNecesario").textContent = data.xpNecesario;
  document.getElementById("nivel").textContent = data.nivel;
  xpActual = data.xp;

  for (let stat in data.stats) {
    document.getElementById(stat).textContent = data.stats[stat];
  }

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
