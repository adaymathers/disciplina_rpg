async function cargarDatos() {
  if (!userDoc) return;

  const doc = await userDoc.get();
  if (!doc.exists) return;
  const data = doc.data();

  document.getElementById("creditos").textContent = data.creditos;
  document.getElementById("xpActual").textContent = data.xp;
  document.getElementById("xpNecesario").textContent = data.xpNecesario;
  document.getElementById("nivel").textContent = data.nivel;

document.getElementById("btnVerHabilidades").addEventListener("click", () => {
  document.getElementById("contenedorHabilidades").style.display = "block";
  renderizarArbolDeHabilidades(xpActual); // Asegúrate que esta variable esté disponible
});

function cerrarArbol() {
  document.getElementById("contenedorHabilidades").style.display = "none";
}
  
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

document.getElementById("btnReiniciar").addEventListener("click", async () => {
  const confirmar = confirm("⚠️ Esto eliminará todo tu progreso. ¿Estás seguro?");
  if (!confirmar) return;

  const username = localStorage.getItem("username");
  if (!username) return alert("No se encontró un usuario activo.");

  try {
    // 🔥 1. Elimina todos los datos del usuario
    await db.collection("usuarios").doc(username).set({
      creditos: 0,
      xp: 0,
      nivel: 1,
      fuerza: 1,
      inteligencia: 1,
      sabiduria: 1,
      lenguaje: 1,
      carisma: 1,
      actividades: [],
      misionDiaria: null
    });

    // 🧼 2. Limpia el localStorage
    localStorage.removeItem("username");

    // 🧠 3. Resetea visualmente la interfaz
    document.getElementById("logList").innerHTML = "";
    document.getElementById("app").style.display = "none";
    document.getElementById("login-container").style.display = "block";
    document.getElementById("username").value = "";

    alert("✅ Tu progreso ha sido borrado. ¡Comienza de nuevo!");
  } catch (error) {
    console.error("❌ Error al reiniciar el progreso:", error);
    alert("Hubo un error al reiniciar. Intenta de nuevo.");
  }
});
  
}
