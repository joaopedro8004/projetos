// Função para alternar o menu de navegação
function toggleMenu() {
    const nav = document.getElementById('links-nav');
    nav.classList.toggle('show');
}

// Funções para Gerenciar Projetos
const projects = JSON.parse(localStorage.getItem('projects')) || [];

function renderProjects() {
    const finalizadoList = document.getElementById('finalizado-list');
    const emAndamentoList = document.getElementById('em-andamento-list');
    const urgenteList = document.getElementById('urgente-list');

    // Limpa as listas atuais
    finalizadoList.innerHTML = '';
    emAndamentoList.innerHTML = '';
    urgenteList.innerHTML = '';

    projects.forEach((project, index) => {
        const li = document.createElement('li');
        li.textContent = project.name;
        li.classList.add(getStatusClass(project.status));

        // Botão para remover projeto
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✖';
        removeBtn.style.marginLeft = '10px';
        removeBtn.onclick = () => removeProject(index);
        li.appendChild(removeBtn);

        // Adiciona o projeto à lista correspondente
        if (project.status === 'Finalizado') {
            finalizadoList.appendChild(li);
        } else if (project.status === 'Em Andamento') {
            emAndamentoList.appendChild(li);
        } else if (project.status === 'Urgente') {
            urgenteList.appendChild(li);
        }
    });
}

function getStatusClass(status) {
    if (status === 'Finalizado') return 'done';
    if (status === 'Em Andamento') return 'in-progress';
    if (status === 'Urgente') return 'urgent';
}

function addProject(event) {
    event.preventDefault();
    const name = document.getElementById('project-name').value.trim();
    const status = document.getElementById('project-status').value;

    if (name && status) {
        projects.push({ name, status });
        localStorage.setItem('projects', JSON.stringify(projects));
        renderProjects();
        document.getElementById('add-project-form').reset();
    }
}

function removeProject(index) {
    projects.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
    renderProjects();
}

document.getElementById('add-project-form').addEventListener('submit', addProject);

// Funções para Gerenciar Tarefas
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span class="${task.completed ? 'completed-task' : ''}">${task.description}</span>
          <div>
            <button onclick="toggleTask(${index})">${task.completed ? '🔄' : '✔️'}</button>
            <button onclick="removeTask(${index})">✖️</button>
          </div>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('new-task');
    const description = taskInput.value.trim();
    if (description) {
        tasks.push({ description, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        taskInput.value = '';
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Funções para Gerenciar Notas
const notes = JSON.parse(localStorage.getItem('notes')) || [];

function renderNotes() {
    const noteList = document.getElementById('note-list');
    noteList.innerHTML = '';

    notes.forEach((note, index) => {
        const div = document.createElement('div');
        div.classList.add('note');
        div.innerHTML = `
          <button onclick="removeNote(${index})">✖️</button>
          <p>${note.content}</p>
        `;
        noteList.appendChild(div);
    });
}

function saveNote() {
    const noteArea = document.getElementById('note-area');
    const content = noteArea.value.trim();
    if (content) {
        notes.push({ content });
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes();
        noteArea.value = '';
    }
}

function removeNote(index) {
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
}

// Funções para Gerenciar Projetos Divertidos
const funProjects = JSON.parse(localStorage.getItem('funProjects')) || [];

function renderFunProjects() {
    const funList = document.getElementById('fun-projects-list');
    funList.innerHTML = '';

    funProjects.forEach((project, index) => {
        const li = document.createElement('li');
        li.textContent = project;
        li.innerHTML += ` <button onclick="removeFunProject(${index})">✖️</button>`;
        funList.appendChild(li);
    });
}

function addFunProject() {
    const funInput = document.getElementById('new-fun-project');
    const project = funInput.value.trim();
    if (project) {
        funProjects.push(project);
        localStorage.setItem('funProjects', JSON.stringify(funProjects));
        renderFunProjects();
        funInput.value = '';
    }
}

function removeFunProject(index) {
    funProjects.splice(index, 1);
    localStorage.setItem('funProjects', JSON.stringify(funProjects));
    renderFunProjects();
}

// Inicialização das Seções
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderTasks();
    renderNotes();
    renderFunProjects();
});