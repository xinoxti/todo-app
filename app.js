// Sélecteurs DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearBtn = document.getElementById('clearBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const taskCount = document.getElementById('taskCount');
const completedCount = document.getElementById('completedCount');

// État de l'application
let tasks = [];
let currentFilter = 'all';

// Initialiser l'application
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    renderTasks();
    updateStats();
});

// Événements
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentFilter = btn.dataset.filter;
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderTasks();
    });
});

clearBtn.addEventListener('click', clearCompleted);
deleteAllBtn.addEventListener('click', deleteAll);

// Fonctions principales
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Veuillez entrer une tâche!');
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
        createdAt: new Date().toLocaleDateString('fr-FR')
    };

    tasks.unshift(task);
    saveTasks();
    taskInput.value = '';
    taskInput.focus();
    renderTasks();
    updateStats();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
    updateStats();
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
        updateStats();
    }
}

function renderTasks() {
    taskList.innerHTML = '';
    
    let filteredTasks = tasks;
    
    if (currentFilter === 'active') {
        filteredTasks = tasks.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(t => t.completed);
    }

    if (filteredTasks.length === 0) {
        emptyState.classList.add('show');
        taskList.style.display = 'none';
        return;
    }

    emptyState.classList.remove('show');
    taskList.style.display = 'block';

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <div class="task-checkbox" onclick="toggleTask(${task.id})"></div>
            <div class="task-text">${escapeHtml(task.text)}</div>
            <span class="task-date">${task.createdAt}</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Supprimer</button>
        `;
        taskList.appendChild(li);
    });
}

function clearCompleted() {
    if (tasks.some(t => t.completed)) {
        if (confirm('Êtes-vous sûr de vouloir supprimer toutes les tâches complétées?')) {
            tasks = tasks.filter(t => !t.completed);
            saveTasks();
            renderTasks();
            updateStats();
        }
    } else {
        alert('Aucune tâche complétée à supprimer!');
    }
}

function deleteAll() {
    if (tasks.length > 0) {
        if (confirm('Êtes-vous sûr de vouloir supprimer toutes les tâches?')) {
            tasks = [];
            saveTasks();
            renderTasks();
            updateStats();
        }
    } else {
        alert('Aucune tâche à supprimer!');
    }
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const active = total - completed;

    taskCount.textContent = `${active} tâche${active !== 1 ? 's' : ''}`;
    completedCount.textContent = `${completed} complétée${completed !== 1 ? 's' : ''}`;
}

// LocalStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const stored = localStorage.getItem('tasks');
    if (stored) {
        try {
            tasks = JSON.parse(stored);
        } catch (e) {
            console.error('Erreur lors du chargement des tâches:', e);
            tasks = [];
        }
    } else {
        tasks = [];
    }
}

// Utilitaire pour échapper HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}