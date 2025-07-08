const actividades = {
  fuerza: { xp: 30, creditos: 10 },
  inteligencia: { xp: 25, creditos: 10 },
  sabiduria: { xp: 30, creditos: 10 },
  lenguaje: { xp: 15, creditos: 5 },
  carisma: { xp: 10, creditos: -20 }
};

document.getElementById("btnRegistrarActividad").addEventListener("click", registrarActividad);

async function registrarActividad() {
  if (!userDoc) return alert("Primero inicia sesión");

  const seleccion = document.getElementById("actividad").value;
  const actividad = actividades[seleccion];

  const doc = await userDoc.get();
  let data = doc.data();

  if (seleccion === "carisma" && data.creditos < 20) {
    alert("No tienes suficientes créditos para jugar videojuegos.");
    return;
  }

  let xp = data.xp + actividad.xp;
  let creditos = data.creditos + actividad.creditos;
  if (creditos < 0) creditos = 0;

  let stats = {...data.stats};
  stats[seleccion]++;

  let nivel = data.nivel;
  let xpNecesario = data.xpNecesario;
  while (xp >= xpNecesario) {
    xp -= xpNecesario;
    nivel++;
    xpNecesario = Math.floor(xpNecesario * 1.2);
  }

  const ahora = new Date().toLocaleTimeString();
  const signo = actividad.creditos >= 0 ? "+" : "";
  const nuevaEntrada = `${ahora} — ${seleccion.toUpperCase()} (+${actividad.xp} XP, ${signo}${actividad.creditos} créditos)`;

  let log = data.log || [];
  log.push(nuevaEntrada);
  if (log.length > 30) log.shift();

  await userDoc.set({
    xp,
    nivel,
    xpNecesario,
    creditos,
    stats,
    log
  });

  cargarDatos();
}
