// data.js : liste des élèves et fonctions pour gérer la progression
const students = [
  { name: "Alice", avatar: "🧗‍♀️", meters: 0, performances: [], color: "#e6194b" },
  { name: "Bob", avatar: "🧗‍♂️", meters: 0, performances: [], color: "#3cb44b" },
  { name: "Charlie", avatar: "🧗‍♂️", meters: 0, performances: [], color: "#ffe119" },
  { name: "Diana", avatar: "🧗‍♀️", meters: 0, performances: [], color: "#4363d8" },
  { name: "Ethan", avatar: "🧗‍♂️", meters: 0, performances: [], color: "#f58231" },
  { name: "Fiona", avatar: "🧗‍♀️", meters: 0, performances: [], color: "#911eb4" },
  { name: "George", avatar: "🧗‍♂️", meters: 0, performances: [], color: "#46f0f0" },
  { name: "Hannah", avatar: "🧗‍♀️", meters: 0, performances: [], color: "#f032e6" },
  { name: "Ian", avatar: "🧗‍♂️", meters: 0, performances: [], color: "#bcf60c" },
  { name: "Julia", avatar: "🧗‍♀️", meters: 0, performances: [], color: "#fabebe" }
];

const baseMeters = {
  "4B": { moulinette: 130, tete: 200 },
  "4C": { moulinette: 150, tete: 250 },
  "5A": { moulinette: 200, tete: 330 },
  "5B": { moulinette: 260, tete: 420 },
  "5C": { moulinette: 320, tete: 520 },
  "6A": { moulinette: 400, tete: 650 },
  "6B": { moulinette: 480, tete: 710 }
};

function addPerformance(studentName, level, mode, objectiveMet, bonus = 0, malus = 0, lessonObjective = "") {
  const student = students.find(s => s.name === studentName);
  if (!student) return;

  let metersGained = objectiveMet ? baseMeters[level][mode] : 0;
  metersGained += bonus;
  metersGained -= malus;

  student.meters += metersGained;
  student.performances.push({ level, mode, objectiveMet, bonus, malus, metersGained, lessonObjective });
}
