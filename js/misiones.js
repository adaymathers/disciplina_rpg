const misiones = [
  { texto: "Estudia inglés 30 minutos", xp: 50, creditos: 20 },
  { texto: "Haz ejercicio 30 minutos", xp: 60, creditos: 25 },
  { texto: "Practica programación 30 minutos", xp: 60, creditos: 25 },
  { texto: "Estudia chino mandarín 30 minutos", xp: 30, creditos: 10 },
  { texto: "No juegues videojuegos hoy", xp: 40, creditos: 15 },
  { texto: "No uses el telefono hoy", xp: 50 , creditos: 20 },
  { texto: "Haz 50 flexiones a lo largo del dia", xp: 40 , creditos: 10 },
  { texto: "Haz 300 saltos de tijera a lo largo del dia", xp: 40 , creditos: 10 },
  { texto: "No comas comida chatarra en todo el dia", xp: 60, creditos: 5 },
  { texto: "Levántate a la primera alarma", xp: 50, creditos: 20 },
  { texto: "Haz tu cama al despertar", xp: 30, creditos: 10 },
  { texto: "Dúchate con agua fría", xp: 40, creditos: 15 },
  { texto: "Lava los trastes sin que te lo pidan", xp: 35, creditos: 10 },
  { texto: "Evita consumir azúcar hoy", xp: 50, creditos: 20 },
  { texto: "Lee al menos un capítulo de un libro", xp: 45, creditos: 15 },
  { texto: "Practica vocabulario en inglés", xp: 40, creditos: 10 },
  { texto: "Camina al menos 3,000 pasos", xp: 50, creditos: 15 },
  { texto: "Bebe 2 litros de agua", xp: 40, creditos: 15 },
  { texto: "Haz 50 abdominales", xp: 45, creditos: 15 },
  { texto: "Organiza tu espacio de trabajo", xp: 50, creditos: 20 },
  { texto: "Planifica tu día por la mañana", xp: 40, creditos: 15 },
  { texto: "Anota tus gastos del día", xp: 30, creditos: 10 },
  { texto: "Evita redes sociales por 4 horas", xp: 50, creditos: 20 },
  { texto: "Dedica 30 minutos a aprender algo nuevo", xp: 50, creditos: 15 },
  { texto: "Haz estiramientos corporales", xp: 30, creditos: 10 },
  { texto: "Prepara una comida saludable", xp: 50, creditos: 20 },
  { texto: "Evita comidas procesadas hoy", xp: 50, creditos: 15 },
  { texto: "Medita en silencio", xp: 40, creditos: 10 },
  { texto: "Escucha un podcast educativo", xp: 35, creditos: 10 },
  { texto: "Reflexiona y escribe en tu diario", xp: 40, creditos: 15 },
  { texto: "Dile algo bonito a tu pareja", xp: 20, creditos: 5 },
  { texto: "Toma una siesta breve y reparadora", xp: 30, creditos: 10 },
  { texto: "Evita quejarte durante el día", xp: 60, creditos: 25 },
  { texto: "Haz una limpieza rápida en tu casa", xp: 40, creditos: 15 },
  { texto: "Dona algo que ya no uses", xp: 50, creditos: 20 },
  { texto: "Ordena tus archivos digitales", xp: 45, creditos: 15 },
  { texto: "Realiza un acto de amabilidad", xp: 40, creditos: 15 },
  { texto: "Ayuda a alguien sin esperar nada a cambio", xp: 50, creditos: 20 },
  { texto: "Desconéctate de pantallas antes de dormir", xp: 50, creditos: 20 },
  { texto: "Escribe una meta clara para esta semana", xp: 40, creditos: 15 },
  { texto: "Haz seguimiento a una meta anterior", xp: 40, creditos: 15 },
  { texto: "Haz 10 sentadillas cada hora por 5 horas", xp: 60, creditos: 25 },
  { texto: "Escucha música relajante sin distracciones", xp: 30, creditos: 10 },
  { texto: "Aprende una palabra nueva en inglés", xp: 30, creditos: 10 },
  { texto: "Haz 3 tareas pequeñas que estabas posponiendo", xp: 50, creditos: 20 },
  { texto: "Evita consumir cafeína hoy", xp: 45, creditos: 15 },
  { texto: "Arregla un rincón desordenado de tu casa", xp: 40, creditos: 15 },
  { texto: "Llama a un amigo o familiar", xp: 30, creditos: 10 },
  { texto: "Evita compararte con otros", xp: 50, creditos: 20 },
  { texto: "Sigue tu plan alimenticio", xp: 40, creditos: 15 },
  { texto: "Haz una pausa consciente en el trabajo", xp: 30, creditos: 10 },
  { texto: "Estudia 5 caracteres en chino mandarín", xp: 40, creditos: 15 },
  { texto: "Mira un video educativo", xp: 30, creditos: 10 },
  { texto: "Recoge la ropa limpia y guárdala", xp: 35, creditos: 10 },
  { texto: "Haz un seguimiento de tus hábitos en una app", xp: 40, creditos: 15 },
  { texto: "Ve a dormir a la hora establecida", xp: 50, creditos: 20 },
  { texto: "Realiza respiraciones profundas al despertar", xp: 20, creditos: 10 },
  { texto: "Evita el uso del celular mientras comes", xp: 40, creditos: 15 },
  { texto: "Cocina algo desde cero", xp: 50, creditos: 20 },
  { texto: "Prepara tu ropa para mañana desde hoy", xp: 40, creditos: 15 },
  { texto: "Evita consumir pan durante el día", xp: 45, creditos: 15 },
  { texto: "Haz 10 minutos de limpieza profunda", xp: 40, creditos: 15 },
  { texto: "No mires el celular al despertar", xp: 50, creditos: 20 },
  { texto: "Haz una lista de pendientes del día", xp: 35, creditos: 10 },
  { texto: "Agradece por 3 cosas al final del día", xp: 30, creditos: 10 },
  { texto: "No digas groserías hoy", xp: 50, creditos: 20 },
  { texto: "No comas después de las 8pm", xp: 40, creditos: 15 },
  { texto: "Evita consumir frituras todo el día", xp: 45, creditos: 15 },
  { texto: "Lee 5 páginas de un libro físico", xp: 40, creditos: 15 },
  { texto: "Haz 100 saltos de tijera", xp: 40, creditos: 15 },
  { texto: "Tómate un tiempo para respirar al aire libre", xp: 30, creditos: 10 },
  { texto: "Limpia tu escritorio o área de trabajo", xp: 40, creditos: 15 },
  { texto: "Crea una nota de agradecimiento para alguien", xp: 30, creditos: 10 },
  { texto: "Estudia inglés con una app o video", xp: 40, creditos: 15 },
  { texto: "Ve un video educativo en YouTube", xp: 35, creditos: 10 },
  { texto: "Haz un estiramiento completo antes de dormir", xp: 40, creditos: 15 },
  { texto: "Evita bebidas azucaradas hoy", xp: 50, creditos: 20 },
  { texto: "Ordena tus archivos de la PC o celular", xp: 45, creditos: 15 },
  { texto: "Evita el multitasking por hoy", xp: 40, creditos: 15 },
  { texto: "Limpia una parte del baño", xp: 40, creditos: 15 },
  { texto: "Haz una sesión de respiración consciente", xp: 30, creditos: 10 },
  { texto: "Evita quejarte durante el día", xp: 60, creditos: 25 },
  { texto: "Evita procrastinar tareas pequeñas", xp: 50, creditos: 20 },
  { texto: "Escribe 3 metas para la semana", xp: 40, creditos: 15 },
  { texto: "Escribe 3 cosas que hiciste bien hoy", xp: 30, creditos: 10 },
  { texto: "Despiértate antes de las 6:30 AM", xp: 50, creditos: 20 },
  { texto: "Haz una comida saludable en casa", xp: 50, creditos: 20 },
  { texto: "No tomes siestas innecesarias", xp: 40, creditos: 15 },
  { texto: "Ve a dormir antes de las 11:00 PM", xp: 50, creditos: 20 },
  { texto: "Limpia la estufa o el refrigerador", xp: 45, creditos: 15 },
  { texto: "Realiza 3 pausas activas durante el día", xp: 35, creditos: 10 },
  { texto: "Haz 3 tareas del hogar sin que te lo pidan", xp: 50, creditos: 20 },
  { texto: "Prepara tu desayuno desde la noche anterior", xp: 40, creditos: 15 },
  { texto: "Estudia al menos una lección de chino", xp: 45, creditos: 15 },
  { texto: "Realiza limpieza rápida de tu galería de fotos", xp: 40, creditos: 15 },
  { texto: "No tomes bebidas con cafeína hoy", xp: 40, creditos: 15 },
  { texto: "Habla con tu pareja sobre su día", xp: 30, creditos: 10 },
  { texto: "Haz 30 flexiones de brazos", xp: 45, creditos: 15 },
  { texto: "Limpia y acomoda tu mochila o bolso", xp: 35, creditos: 10 },
  { texto: "Configura una alarma para beber agua", xp: 30, creditos: 10 },
  { texto: "Evita usar audífonos por hoy", xp: 30, creditos: 10 },
  { texto: "Prepara una ensalada casera", xp: 45, creditos: 15 },
  { texto: "Evita pantallas al menos 1 hora antes de dormir", xp: 50, creditos: 20 },
  { texto: "Registra tus gastos del día", xp: 30, creditos: 10 },
  { texto: "Evita todo tipo de redes sociales hoy", xp: 60, creditos: 25 },
  { texto: "Haz una limpieza de apps inútiles", xp: 45, creditos: 15 },
  { texto: "Evita comer por ansiedad", xp: 50, creditos: 20 },
  { texto: "No veas videos en cama", xp: 40, creditos: 15 },
  { texto: "Haz una rutina corta de yoga", xp: 40, creditos: 15 },
  { texto: "Haz una limpieza rápida de tu bandeja de entrada", xp: 40, creditos: 15 },
  { texto: "Evita ver televisión durante el día", xp: 50, creditos: 20 },
  { texto: "Ordena tu espacio de estudio o trabajo", xp: 45, creditos: 15 },
  { texto: "Escribe una frase motivadora y pégala donde la veas", xp: 30, creditos: 10 },
  { texto: "Haz contacto visual cuando hables con alguien", xp: 35, creditos: 10 },
  { texto: "Evita el azúcar refinada hoy", xp: 50, creditos: 20 },
  { texto: "Prepara un desayuno nutritivo", xp: 40, creditos: 15 },
  { texto: "Evita usar el celular en el baño", xp: 30, creditos: 10 },
  { texto: "Termina una tarea que has estado postergando", xp: 60, creditos: 25 },
  { texto: "Haz una rutina corta de ejercicio con peso corporal", xp: 45, creditos: 15 },
  { texto: "Escribe 3 cosas que te gustan de ti mismo", xp: 30, creditos: 10 },
  { texto: "Limpia debajo de tu cama o sofá", xp: 45, creditos: 15 },
  { texto: "Medita o permanece en silencio por 5 minutos", xp: 35, creditos: 10 },
  { texto: "Dile algo positivo a alguien que te rodea", xp: 30, creditos: 10 },
  { texto: "Evita usar elevadores todo el día", xp: 40, creditos: 15 },
  { texto: "Cocina tu comida sin aceite ni frituras", xp: 50, creditos: 20 },
  { texto: "Elimina distracciones de tu escritorio", xp: 40, creditos: 15 },
  { texto: "Revisa tus metas personales", xp: 35, creditos: 10 },
  { texto: "No tomes azúcar líquida hoy", xp: 50, creditos: 20 },
  { texto: "Haz una buena acción por alguien", xp: 30, creditos: 10 },
  { texto: "Aprende una palabra nueva en inglés y úsala", xp: 40, creditos: 15 },
  { texto: "Toma agua apenas despiertes", xp: 30, creditos: 10 },
  { texto: "Duerme al menos 7 horas esta noche", xp: 50, creditos: 20 },
  { texto: "Anota una cosa que aprendiste hoy", xp: 30, creditos: 10 },
  { texto: "Haz 20 sentadillas", xp: 40, creditos: 15 },
  { texto: "Evita ver noticias negativas hoy", xp: 40, creditos: 15 },
  { texto: "Come al menos una fruta", xp: 30, creditos: 10 },
  { texto: "Haz una limpieza profunda a tu escritorio", xp: 50, creditos: 20 },
  { texto: "Planifica tu día mañana desde hoy", xp: 40, creditos: 15 },
  { texto: "Haz 20 abdominales", xp: 40, creditos: 15 },
  { texto: "Lava tus platos justo después de comer", xp: 35, creditos: 10 },
  { texto: "Evita quejarte por cosas pequeñas", xp: 50, creditos: 20 },
  { texto: "Crea una playlist motivacional", xp: 30, creditos: 10 },
  { texto: "Haz limpieza a tu lista de amigos en redes", xp: 40, creditos: 15 },
  { texto: "No fumes ni bebas alcohol hoy", xp: 60, creditos: 25 },
  { texto: "Dedica 5 minutos a limpiar tu entorno", xp: 30, creditos: 10 },
  { texto: "Escribe cómo te sientes hoy", xp: 30, creditos: 10 },
  { texto: "No critiques a nadie durante el día", xp: 50, creditos: 20 },
  { texto: "No comas por aburrimiento", xp: 40, creditos: 15 },
  { texto: "Haz 10 flexiones más de lo normal", xp: 45, creditos: 15 },
  { texto: "Limpia tu historial de navegación", xp: 30, creditos: 10 },
  { texto: "No dejes ropa en el suelo hoy", xp: 40, creditos: 15 },
  { texto: "Escucha un podcast de desarrollo personal", xp: 35, creditos: 10 },
  { texto: "Revisa y limpia tu cartera o billetera", xp: 30, creditos: 10 },
  { texto: "No tomes bebidas energéticas hoy", xp: 40, creditos: 15 },
  { texto: "Pasa tiempo con alguien sin distracciones", xp: 40, creditos: 15 },
  { texto: "Haz 3 cosas que normalmente postergas", xp: 60, creditos: 25 },
  { texto: "Evita mentir, incluso pequeñas mentiras", xp: 50, creditos: 20 },
  { texto: "Pide perdón por algo que hiciste", xp: 50, creditos: 20 },
  { texto: "Haz tu cama en cuanto te levantes", xp: 30, creditos: 10 },
  { texto: "Apaga todos tus dispositivos una hora antes de dormir", xp: 50, creditos: 20 },
  { texto: "Evita redes sociales durante toda la mañana", xp: 60, creditos: 25 },
  { texto: "Haz respiraciones profundas por 3 minutos", xp: 35, creditos: 10 },
  { texto: "No comas nada después de las 8 p.m.", xp: 50, creditos: 20 },
  { texto: "Evita quejarte durante el día", xp: 50, creditos: 20 },
  { texto: "Haz estiramientos al despertar", xp: 35, creditos: 10 },
  { texto: "Saluda cordialmente a todas las personas que veas", xp: 30, creditos: 10 },
  { texto: "Bebe al menos 2 litros de agua en el día", xp: 50, creditos: 20 },
  { texto: "Limpia los espejos de tu casa", xp: 40, creditos: 15 },
  { texto: "Lee un fragmento de un libro inspirador", xp: 35, creditos: 10 },
  { texto: "Cambia las sábanas de tu cama", xp: 45, creditos: 15 },
  { texto: "Desayuna sin usar el celular", xp: 40, creditos: 15 },
  { texto: "Haz 5 minutos de saltos de tijera", xp: 40, creditos: 15 },
  { texto: "Ordena tus archivos en el escritorio de tu PC", xp: 40, creditos: 15 },
  { texto: "Haz una lista de metas semanales", xp: 35, creditos: 10 },
  { texto: "Pasa tiempo con tu pareja sin distracciones", xp: 50, creditos: 20 },
  { texto: "Revisa tus finanzas del mes", xp: 50, creditos: 20 },
  { texto: "Evita el multitasking durante tus tareas", xp: 40, creditos: 15 },
  { texto: "Apoya a alguien sin esperar nada a cambio", xp: 50, creditos: 20 },
  { texto: "Revisa y actualiza tu lista de objetivos personales", xp: 40, creditos: 15 },
  { texto: "Haz una limpieza general al refrigerador", xp: 60, creditos: 25 },
  { texto: "No veas YouTube en todo el día", xp: 50, creditos: 20 },
  { texto: "Haz una caminata tranquila al aire libre", xp: 45, creditos: 15 },
  { texto: "Pasa un rato sin pantallas", xp: 40, creditos: 15 },
  { texto: "Exprésale gratitud a alguien cercano", xp: 35, creditos: 10 },
  { texto: "Limpia tu mochila o bolso", xp: 30, creditos: 10 },
  { texto: "Elimina notificaciones innecesarias del celular", xp: 45, creditos: 15 },
  { texto: "Cocina una comida saludable y casera", xp: 50, creditos: 20 },
  { texto: "Toma un descanso consciente (sin celular)", xp: 30, creditos: 10 },
  { texto: "Evita consumir noticias durante el día", xp: 40, creditos: 15 },
  { texto: "Haz una lista de cosas por las que estás agradecido", xp: 35, creditos: 10 },
  { texto: "Evita interrupciones mientras estudias", xp: 40, creditos: 15 },
  { texto: "Haz una rutina corta de yoga", xp: 40, creditos: 15 },
  { texto: "Lee un artículo educativo", xp: 35, creditos: 10 },
  { texto: "No compres nada innecesario hoy", xp: 50, creditos: 20 },
  { texto: "Dale mantenimiento a tus zapatos", xp: 40, creditos: 15 },
  { texto: "Cambia el fondo de pantalla por uno motivador", xp: 30, creditos: 10 },
  { texto: "Evita el sarcasmo todo el día", xp: 40, creditos: 15 },
  { texto: "Haz 25 saltos en el lugar", xp: 40, creditos: 15 },
  { texto: "Ordena tu lista de contactos", xp: 30, creditos: 10 },
  { texto: "Haz 10 minutos de limpieza profunda en un área olvidada", xp: 45, creditos: 15 },
  { texto: "Evita toda la comida con conservadores hoy", xp: 50, creditos: 20 },
  { texto: "Aprende algo nuevo sobre alimentación saludable", xp: 35, creditos: 10 },
  { texto: "Escribe una carta a tu yo futuro", xp: 40, creditos: 15 },
  { texto: "Haz 15 flexiones", xp: 40, creditos: 15 },
  { texto: "No escuches música todo el día, cultiva el silencio", xp: 50, creditos: 20 },
  { texto: "Levántate sin posponer la alarma", xp: 50, creditos: 20 },
  { texto: "No hables mal de nadie hoy", xp: 50, creditos: 20 },
  { texto: "Recoge y recicla algo de la calle", xp: 50, creditos: 20 },
  { texto: "Haz tu rutina de noche sin usar el celular", xp: 40, creditos: 15 }

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
