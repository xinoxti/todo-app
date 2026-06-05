// Sélecteurs DOM
const categoryBtnAdd = document.getElementById('addCategoryBtn');
const newCategoryForm = document.getElementById('newCategoryForm');
const newCategoryInput = document.getElementById('newCategoryInput');
const saveCategoryBtn = document.getElementById('saveCategoryBtn');
const cancelCategoryBtn = document.getElementById('cancelCategoryBtn');
const categoriesList = document.getElementById('categoriesList');
const categoryDropdown = document.getElementById('categoryDropdown');
const categoryStats = document.getElementById('categoryStats');
const categoryStatsTitle = document.getElementById('categoryStatsTitle');
const inputSection = document.getElementById('inputSection');
const filterSection = document.getElementById('filterSection');
const actionSection = document.getElementById('actionSection');

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const prioritySelect = document.getElementById('prioritySelect');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearBtn = document.getElementById('clearBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const deleteCategoryBtn = document.getElementById('deleteCategoryBtn');

const globalTaskCount = document.getElementById('globalTaskCount');
const globalCompletedCount = document.getElementById('globalCompletedCount');
const categoryTaskCount = document.getElementById('categoryTaskCount');
const categoryCompletedCount = document.getElementById('categoryCompletedCount');

// État de l'application
let categories = [];
let tasks = [];
let currentCategory = null;
let currentFilter = 'all';

// Initialiser l'application
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    renderCategories();
    updateGlobalStats();
});

// ÉVÉNEMENTS CATÉGORIES
categoryBtnAdd.addEventListener('click', () => {
    newCategoryForm.style.display = 'flex';
    newCategoryInput.focus();
});

saveCategoryBtn.addEventListener('click', addCategory);
cancelCategoryBtn.addEventListener('click', () => {
    newCategoryForm.style.display = 'none';
    newCategoryInput.value = '';
});

newCategoryInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addCategory();
});

categoryDropdown.addEventListener('change', (e) => {
    currentCategory = e.target.value || null;
    currentFilter = 'all';
    filterBtns.forEach(b => {
        b.classList.remove('active');
        if (b.dataset.filter === 'all') b.classList.add('active');
    });
    renderTasks();
    updateCategoryDisplay();
});

// ÉVÉNEMENTS TÂCHES
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
deleteCategoryBtn.addEventListener('click', deleteCurrentCategory);

// FONCTIONS CATÉGORIES
function addCategory() {
    const categoryName = newCategoryInput.value.trim();
    
    if (categoryName === '') {
        alert('Veuillez entrer un nom de categorie!');
        return;
    }

    if (categories.includes(categoryName)) {
        alert('Cette categorie existe deja!');
        return;
    }

    categories.push(categoryName);
    saveData();
    newCategoryForm.style.display = 'none';
    newCategoryInput.value = '';
    renderCategories();
}

function deleteCategory(categoryName) {
    if (confirm(`Etes-vous sur de vouloir supprimer la categorie "${categoryName}" et toutes ses taches?`)) {
        categories = categories.filter(c => c !== categoryName);
        tasks = tasks.filter(t => t.category !== categoryName);
        if (currentCategory === categoryName) {
            currentCategory = null;
            updateCategoryDisplay();
        }
        saveData();
        renderCategories();
        renderTasks();
        updateGlobalStats();
    }
}

function renderCategories() {
    categoriesList.innerHTML = '';
    
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = `category-btn ${currentCategory === category ? 'active' : ''}`;
        btn.innerHTML = `
            ${category}
            <span class="delete-category-icon" onclick="event.stopPropagation(); deleteCategory('${escapeHtml(category)}')" style="cursor:pointer;">X</span>
        `;
        btn.addEventListener('click', () => {
            currentCategory = category;
            currentFilter = 'all';
            filterBtns.forEach(b => {
                b.classList.remove('active');
                if (b.dataset.filter === 'all') b.classList.add('active');
            });
            categoryDropdown.value = category;
            renderCategories();
            renderTasks();
            updateCategoryDisplay();
        });
        categoriesList.appendChild(btn);
    });

    // Mettre à jour le dropdown
    const currentValue = categoryDropdown.value;
    categoryDropdown.innerHTML = '<option value="">Selectionnez une categorie</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryDropdown.appendChild(option);
    });
    categoryDropdown.value = currentValue;
}

function updateCategoryDisplay() {
    if (currentCategory) {
        inputSection.style.display = 'flex';
        filterSection.style.display = 'flex';
        actionSection.style.display = 'flex';
        categoryStats.style.display = 'block';
        categoryStatsTitle.textContent = `Statistiques - ${currentCategory}`;
        updateCategoryStats();
    } else {
        inputSection.style.display = 'none';
        filterSection.style.display = 'none';
        actionSection.style.display = 'none';
        categoryStats.style.display = 'none';
        taskList.innerHTML = '';
        emptyState.classList.add('show');
    }
}

// FONCTIONS TÂCHES
function addTask() {
    if (!currentCategory) {
        alert('Veuillez selectionner une categorie!');
        return;
    }

    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;
    
    if (taskText === '') {
        alert('Veuillez entrer une tache!');
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        priority: priority,
        completed: false,
        category: currentCategory,
        createdAt: new Date().toLocaleDateString('fr-FR')
    };

    tasks.unshift(task);
    saveData();
    taskInput.value = '';
    prioritySelect.value = 'B';
    taskInput.focus();
    renderTasks();
    updateGlobalStats();
    updateCategoryStats();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveData();
    renderTasks();
    updateGlobalStats();
    updateCategoryStats();
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveData();
        renderTasks();
        updateGlobalStats();
        updateCategoryStats();
    }
}

function changePriority(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const priorities = ['A', 'B', 'C'];
    const currentIndex = priorities.indexOf(task.priority);
    const nextIndex = (currentIndex + 1) % priorities.length;
    task.priority = priorities[nextIndex];
    
    saveData();
    renderTasks();
    updateGlobalStats();
    updateCategoryStats();
}

function renderTasks() {
    taskList.innerHTML = '';
    
    if (!currentCategory) {
        emptyState.classList.add('show');
        return;
    }

    let categoryTasks = tasks.filter(t => t.category === currentCategory);
    let filteredTasks = categoryTasks;
    
    if (currentFilter === 'active') {
        filteredTasks = categoryTasks.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = categoryTasks.filter(t => t.completed);
    }

    // Trier par priorité (A, B, C)
    filteredTasks.sort((a, b) => {
        const priorityOrder = { 'A': 0, 'B': 1, 'C': 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    if (filteredTasks.length === 0) {
        emptyState.classList.add('show');
        taskList.style.display = 'none';
        return;
    }

    emptyState.classList.remove('show');
    taskList.style.display = 'block';

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''} priority-${task.priority.toLowerCase()}`;
        li.innerHTML = `
            <div class="task-checkbox" onclick="toggleTask(${task.id})"></div>
            <div class="task-text">${escapeHtml(task.text)}</div>
            <div class="task-info">
                <span class="priority-badge ${task.priority.toLowerCase()}">P${task.priority}</span>
                <button class="priority-change-btn" onclick="changePriority(${task.id})">Changer</button>
                <span class="task-date">${task.createdAt}</span>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Supprimer</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function clearCompleted() {
    if (!currentCategory) return;
    
    const categoryTasks = tasks.filter(t => t.category === currentCategory);
    if (categoryTasks.some(t => t.completed)) {
        if (confirm('Etes-vous sur de vouloir supprimer toutes les taches completees?')) {
            tasks = tasks.filter(t => !(t.category === currentCategory && t.completed));
            saveData();
            renderTasks();
            updateGlobalStats();
            updateCategoryStats();
        }
    } else {
        alert('Aucune tache completee a supprimer!');
    }
}

function deleteAll() {
    if (!currentCategory) return;
    
    const categoryTasks = tasks.filter(t => t.category === currentCategory);
    if (categoryTasks.length > 0) {
        if (confirm('Etes-vous sur de vouloir supprimer toutes les taches?')) {
            tasks = tasks.filter(t => t.category !== currentCategory);
            saveData();
            renderTasks();
            updateGlobalStats();
            updateCategoryStats();
        }
    } else {
        alert('Aucune tache a supprimer!');
    }
}

function deleteCurrentCategory() {
    if (currentCategory) {
        deleteCategory(currentCategory);
    }
}

// STATISTIQUES
function updateGlobalStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const active = total - completed;

    globalTaskCount.textContent = `${active} tache${active !== 1 ? 's' : ''}`;
    globalCompletedCount.textContent = `${completed} completee${completed !== 1 ? 's' : ''}`;
}

function updateCategoryStats() {
    if (!currentCategory) return;
    
    const categoryTasks = tasks.filter(t => t.category === currentCategory);
    const total = categoryTasks.length;
    const completed = categoryTasks.filter(t => t.completed).length;
    const active = total - completed;

    categoryTaskCount.textContent = `${active} tache${active !== 1 ? 's' : ''}`;
    categoryCompletedCount.textContent = `${completed} completee${completed !== 1 ? 's' : ''}`;
}

// STOCKAGE LOCAL
function saveData() {
    localStorage.setItem('todo-categories', JSON.stringify(categories));
    localStorage.setItem('todo-tasks', JSON.stringify(tasks));
}

function loadData() {
    const storedCategories = localStorage.getItem('todo-categories');
    const storedTasks = localStorage.getItem('todo-tasks');
    
    if (storedCategories) {
        try {
            categories = JSON.parse(storedCategories);
        } catch (e) {
            console.error('Erreur lors du chargement des categories:', e);
            categories = [];
        }
    } else {
        categories = [];
    }

    if (storedTasks) {
        try {
            tasks = JSON.parse(storedTasks);
        } catch (e) {
            console.error('Erreur lors du chargement des taches:', e);
            tasks = [];
        }
    } else {
        tasks = [];
    }
}

// UTILITAIRES
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