// auth.js

let userDoc = null;
let userId = null;

// Asegúrate que 'auth' y 'db' ya están inicializados en firebase-config.js

// Evento de login con Google
document.getElementById("btnGoogleLogin").addEventListener("click", loginConGoogle);

async function loginConGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();

  try {
    const result = await auth.signInWithPopup(provider);
    const user = result.user;
    userId = user.uid;

    userDoc = db.collection("usuarios").doc(userId);
    const doc = await userDoc.get();

    if (!doc.exists) {
      await userDoc.set({
        nombre: user.displayName,
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
        ultimaMision: {}
      });
    }

    document.getElementById("app").style.display = "block";
    document.getElementById("login-container").style.display = "none";

    cargarDatos();
    cargarMisionDiaria();

  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error);
    alert("Error al iniciar sesión. Intenta de nuevo.");
  }
}
