let userDoc = null;
let userId = null;

document.getElementById("btnLogin").addEventListener("click", login);

async function login() {
  userId = document.getElementById("username").value.trim();
  if (!userId) {
    alert("Pon un nombre de usuario");
    return;
  }
  userDoc = db.collection("usuarios").doc(userId);
  const doc = await userDoc.get();
  if (!doc.exists) {
    await userDoc.set({
      xp: 0,
      nivel: 1,
      xpNecesario: 100,
      creditos: 0,
      stats: { fuerza:1, inteligencia:1, sabiduria:1, lenguaje:1, carisma:1 },
      log: [],
      ultimaMision: {}
    });
  }
  document.getElementById("app").style.display = "block";
  document.getElementById("login-container").style.display = "none";
  const nombreUsuario = document.getElementById("username").value.trim();
localStorage.setItem("username", nombreUsuario);

  cargarDatos();
  cargarMisionDiaria();
}
