const misiones = [
  { texto: "Estudia inglés 30 minutos", xp: 50, creditos: 20 },
  { texto: "Haz ejercicio 30 minutos", xp: 60, creditos: 25 },
  { texto: "Practica programación 30 minutos", xp: 60, creditos: 25 },
  { texto: "Estudia chino mandarín 30 minutos", xp: 30, creditos: 10 },
  { texto: "No juegues videojuegos hoy", xp: 40, creditos: 15 }
];

let misionActual = null;

async function cargarMisionDiaria() {
  const dia = new Date().getDate();
  misionActual = misiones[dia % misiones.length];
  document.getElementById("misionDiaria").textContent = misionActual.texto;

  const doc = await userDoc.get();
  const data = doc.data();

  const ultimaMision = data.ultimaMision || {};
  const hoy = new Date().toDateString();

  if (ultimaMision.fecha === hoy && ultimaMision.completada) {
    document.getElementById("btnCompletarMision").disabled = true;
    document.getElementById("btnCompletarMision").textContent = "Misión completada hoy";
  } else {
    document.getElementById("btnCompletarMision").disabled = false;
    document.getElementById("btnCompletarMision").textContent = "Completar misión";
  }
}

document.getElementById("btnCompletarMision").addEventListener("click", completarMision);

async function completarMision() {
  if (!misionActual) return;

  const doc = await userDoc.get();
  const data = doc.data();

  let xp = data.xp + misionActual.xp;
  let creditos = data.creditos + misionActual.creditos;
  let nivel = data.nivel;
  let xpNecesario = data.xpNecesario;
  let stats = {...data.stats};

  while (xp >= xpNecesario) {
    xp -= xpNecesario;
    nivel++;
    xpNecesario = Math.floor(xpNecesario * 1.2);
  }

  const hoy = new Date().toDateString();

  await userDoc.set({
    ...data,
    xp,
    creditos,
    nivel,
    xpNecesario,
    ultimaMision: {
      fecha: hoy,
      completada: true,
      texto: misionActual.texto
    }
  });

  alert(`¡Misión completada! Ganaste +${misionActual.xp} XP y +${misionActual.creditos} créditos`);

  cargarDatos();
  cargarMisionDiaria();
}
