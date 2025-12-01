const studentSelect = document.getElementById("studentSelect");
const tableBody = document.querySelector("#studentsTable tbody");
const mountainContainer = document.querySelector(".mountain-container");

function populateStudents() {
  students.forEach(s => {
    const option = document.createElement("option");
    option.value = s.name;
    option.textContent = s.name;
    studentSelect.appendChild(option);
  });
  renderAll();
}

function addPerformanceForm() {
  const name = studentSelect.value;
  const level = document.getElementById("levelSelect").value;
  const mode = document.getElementById("modeSelect").value;
  const objectiveMet = document.getElementById("objectiveMet").checked;
  const bonus = parseInt(document.getElementById("bonus").value) || 0;
  const malus = parseInt(document.getElementById("malus").value) || 0;
  const lessonObjective = document.getElementById("lessonObjective").value;

  addPerformance(name, level, mode, objectiveMet, bonus, malus, lessonObjective);
  renderAll();
}

function renderTable() {
  tableBody.innerHTML = "";
  students.forEach(s => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = s.name;
    row.appendChild(nameCell);

    const avatarCell = document.createElement("td");
    avatarCell.textContent = s.avatar;
    row.appendChild(avatarCell);

    const metersCell = document.createElement("td");
    metersCell.textContent = s.meters;
    row.appendChild(metersCell);

    const historyCell = document.createElement("td");
    if (s.performances.length === 0) {
      historyCell.textContent = "-";
    } else {
      const list = document.createElement("ul");
      s.performances.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.level} (${p.mode}) - ${p.metersGained} m${p.bonus ? ' +'+p.bonus : ''}${p.malus ? ' -'+p.malus : ''} [${p.lessonObjective}]`;
        list.appendChild(li);
      });
      historyCell.appendChild(list);
    }
    row.appendChild(historyCell);

    tableBody.appendChild(row);
  });
}

function renderMountain() {
  // Supprimer anciens ronds
  mountainContainer.querySelectorAll(".student-circle").forEach(c => c.remove());

  const containerHeight = mountainContainer.clientHeight;
  const maxMeters = 8848; // Everest
  const mountainBaseY = containerHeight - 10; // bas du container
  const mountainPeakY = 50;

  students.forEach((s, index) => {
    const ratio = Math.min(s.meters / maxMeters, 1);
    const y = mountainBaseY - ratio * (mountainBaseY - mountainPeakY);
    const x = 50 + index * 50;

    const circle = document.createElement("div");
    circle.className = "student-circle";
    circle.style.backgroundColor = s.color;
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    circle.textContent = s.avatar;
    mountainContainer.appendChild(circle);
  });
}

function renderAll() {
  renderTable();
  renderMountain();
}

populateStudents();
