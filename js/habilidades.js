// js/habilidades.js

const habilidades = [
  { id: "html", nombre: "HTML Básico", xp: 100, x: 60, y: 180 },  { id: "css", nombre: "CSS Neón", xp: 150, x: 160, y: 80 },
  { id: "firebase", nombre: "Firebase RPG", xp: 250, x: 260, y: 180 },
  { id: "portafolio", nombre: "Portafolio Público", xp: 400, x: 360, y: 80 }
];

const conexiones = [
  { from: "html", to: "css" },
  { from: "css", to: "firebase" },
  { from: "firebase", to: "portafolio" }
];

function renderizarArbolDeHabilidades(xpActual) {
  const svg = document.getElementById("skillMap");
  svg.innerHTML = "";

  const nodoMap = {};

  // Dibuja nodos
  habilidades.forEach(hab => {
    const desbloqueada = xpActual >= hab.xp;
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", hab.x);
    circle.setAttribute("cy", hab.y);
    circle.setAttribute("r", 20);
    circle.setAttribute("fill", desbloqueada ? "#00ffe9" : "#333");
    circle.setAttribute("stroke", "#ff00de");
    circle.setAttribute("stroke-width", "2");

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", hab.x);
    text.setAttribute("y", hab.y + 5);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", "#fff");
    text.setAttribute("font-size", "10");
    text.setAttribute("font-family", "Share Tech Mono");
    text.textContent = hab.nombre;

    if (desbloqueada) {
      circle.style.cursor = "pointer";
      circle.addEventListener("click", () => {
        window.open(`https://github.com/AlexRPG/${hab.id}`, "_blank");
      });
    }

    svg.appendChild(circle);
    svg.appendChild(text);

    nodoMap[hab.id] = { x: hab.x, y: hab.y };
  });

  // Dibuja conexiones al fondo
  conexiones.forEach(con => {
    const from = nodoMap[con.from];
    const to = nodoMap[con.to];

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", from.x);
    line.setAttribute("y1", from.y);
    line.setAttribute("x2", to.x);
    line.setAttribute("y2", to.y);
    line.setAttribute("stroke", "#ff00de");
    line.setAttribute("stroke-width", "2");
    svg.insertBefore(line, svg.firstChild);
  });
}

window.cerrarArbol = function () {
  document.getElementById("contenedorHabilidades").style.display = "none";
};
