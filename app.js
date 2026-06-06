const translations = {
    fr: {
        appLabel: 'Productivité', title: 'Todo App', subtitle: 'Organisez vos tâches avec catégories, priorités, tags, échéances et Pomodoro.', themeButton: 'Thème', languageLabel: 'Langue',
        dashboardKicker: 'Vue globale', dashboardTitle: 'Dashboard', totalTasks: 'Total', activeTasks: 'Actives', completedTasks: 'Terminées', overdue: 'En retard', dueToday: "Aujourd'hui", progressTitle: 'Progression', priorityTitle: 'Répartition des priorités',
        categoryKicker: 'Organisation', categoryTitle: 'Catégories', addCategory: 'Ajouter', newCategoryPlaceholder: 'Nom de la catégorie...', categoryExamples: 'Exemples : Personnel / Travail / Projets', create: 'Créer', cancel: 'Annuler', currentCategory: 'Catégorie actuelle', selectCategory: 'Sélectionnez une catégorie',
        taskKicker: 'Liste de travail', inputTitle: 'Nouvelle tâche', taskPlaceholder: 'Ajouter une nouvelle tâche...', dueDateLabel: 'Échéance', dueTimeLabel: 'Heure', noDueTime: 'Sans heure', tagsPlaceholder: 'Tags : Personnel, Travail, Projets...', priorityMedium: 'Priorité B - Moyenne', priorityHigh: 'Priorité A - Haute', priorityLow: 'Priorité C - Basse', addTask: 'Ajouter',
        all: 'Toutes', active: 'Actives', completed: 'Terminées', emptyNoCategory: 'Créez ou sélectionnez une catégorie pour commencer.', emptyNoTasks: 'Aucune tâche dans cette vue.', clearCompleted: 'Supprimer les terminées', deleteAll: 'Tout supprimer', deleteCategory: 'Supprimer la catégorie',
        alertsKicker: 'Rappels', alertsTitle: 'Notifications', alertsHelp: "Les alertes fonctionnent quand l'application est ouverte dans le navigateur.", enableAlerts: 'Activer les alertes', alertsEnabled: 'Alertes activées', alertsDenied: 'Les notifications sont bloquées par le navigateur.', alertsUnavailable: 'Les notifications ne sont pas disponibles sur ce navigateur.',
        pomodoroKicker: 'Concentration', pomodoroTitle: 'Pomodoro', pomodoroHelp: 'Travaillez 25 minutes sur une tâche puis prenez une pause.', start: 'Démarrer', pause: 'Pause', reset: 'Reset', pomodoroFinished: 'Pomodoro terminé. Prenez une pause !',
        priorityModalTitle: 'Changer la priorité', priorityModalText: 'Cette tâche est en priorité B. Voulez-vous la rendre plus ou moins importante ?', moreImportant: 'Plus important → A', lessImportant: 'Moins important → C', close: 'Fermer',
        changePriority: 'Changer', deleteTask: 'Supprimer', created: 'Créée le', due: 'Échéance', noDueDate: 'Sans échéance', today: "Aujourd'hui", overdueLabel: 'En retard', tomorrow: 'Demain', tags: 'Tags', categoryEmpty: 'Aucune catégorie encore.',
        invalidPastDueDate: 'La date d’échéance ne peut pas être dans le passé.', todayNeedsTime: 'Pour une échéance aujourd’hui, choisis aussi une heure.', dueTimePast: 'L’heure choisie est déjà passée aujourd’hui.', dueTimeNeedsDate: 'Choisis une date si tu veux ajouter une heure.', categoryTooLong: 'Le nom de catégorie est trop long.', taskTooLong: 'La tâche est trop longue.', tagTooLong: 'Un tag est trop long.', categoryExists: 'Cette catégorie existe déjà.', enterCategory: 'Veuillez entrer un nom de catégorie.', selectCategoryAlert: 'Veuillez sélectionner une catégorie.', enterTask: 'Veuillez entrer une tâche.', deleteCategoryConfirm: 'Supprimer la catégorie "{name}" et toutes ses tâches ?', deleteCompletedConfirm: 'Supprimer toutes les tâches terminées de cette catégorie ?', deleteAllConfirm: 'Supprimer toutes les tâches de cette catégorie ?', noCompletedTasks: 'Aucune tâche terminée à supprimer.', noTasksToDelete: 'Aucune tâche à supprimer.',
        taskAdded: 'Tâche ajoutée', taskDeleted: 'Tâche supprimée', priorityUpdated: 'Priorité mise à jour', progressText: '{done} sur {total} tâches terminées.', noProgress: 'Aucune tâche pour le moment.', categoryStats: '{active} active(s) • {completed} terminée(s)', notificationTitle: 'Todo App', notificationDueToday: 'Tâche à faire aujourd’hui : {task}', notificationOverdue: 'Tâche en retard : {task}'
    },
    en: {
        appLabel: 'Productivity', title: 'Todo App', subtitle: 'Organize your tasks with categories, priorities, tags, deadlines and Pomodoro.', themeButton: 'Theme', languageLabel: 'Language',
        dashboardKicker: 'Overview', dashboardTitle: 'Dashboard', totalTasks: 'Total', activeTasks: 'Active', completedTasks: 'Completed', overdue: 'Overdue', dueToday: 'Today', progressTitle: 'Progress', priorityTitle: 'Priority breakdown',
        categoryKicker: 'Organization', categoryTitle: 'Categories', addCategory: 'Add', newCategoryPlaceholder: 'Category name...', categoryExamples: 'Examples: Personal / Work / Projects', create: 'Create', cancel: 'Cancel', currentCategory: 'Current category', selectCategory: 'Select a category',
        taskKicker: 'Work list', inputTitle: 'New task', taskPlaceholder: 'Add a new task...', dueDateLabel: 'Due date', dueTimeLabel: 'Time', noDueTime: 'No time', tagsPlaceholder: 'Tags: Personal, Work, Projects...', priorityMedium: 'Priority B - Medium', priorityHigh: 'Priority A - High', priorityLow: 'Priority C - Low', addTask: 'Add',
        all: 'All', active: 'Active', completed: 'Completed', emptyNoCategory: 'Create or select a category to start.', emptyNoTasks: 'No tasks in this view.', clearCompleted: 'Clear completed', deleteAll: 'Delete all', deleteCategory: 'Delete category',
        alertsKicker: 'Reminders', alertsTitle: 'Notifications', alertsHelp: 'Alerts work when the app is open in the browser.', enableAlerts: 'Enable alerts', alertsEnabled: 'Alerts enabled', alertsDenied: 'Notifications are blocked by the browser.', alertsUnavailable: 'Notifications are not available on this browser.',
        pomodoroKicker: 'Focus', pomodoroTitle: 'Pomodoro', pomodoroHelp: 'Work for 25 minutes on a task, then take a break.', start: 'Start', pause: 'Pause', reset: 'Reset', pomodoroFinished: 'Pomodoro finished. Take a break!',
        priorityModalTitle: 'Change priority', priorityModalText: 'This task is priority B. Do you want to make it more or less important?', moreImportant: 'More important → A', lessImportant: 'Less important → C', close: 'Close',
        changePriority: 'Change', deleteTask: 'Delete', created: 'Created on', due: 'Due', noDueDate: 'No due date', today: 'Today', overdueLabel: 'Overdue', tomorrow: 'Tomorrow', tags: 'Tags', categoryEmpty: 'No category yet.',
        invalidPastDueDate: 'The due date cannot be in the past.', todayNeedsTime: 'For a due date today, also choose a time.', dueTimePast: 'The selected time has already passed today.', dueTimeNeedsDate: 'Choose a date if you want to add a time.', categoryTooLong: 'The category name is too long.', taskTooLong: 'The task is too long.', tagTooLong: 'A tag is too long.', categoryExists: 'This category already exists.', enterCategory: 'Please enter a category name.', selectCategoryAlert: 'Please select a category.', enterTask: 'Please enter a task.', deleteCategoryConfirm: 'Delete category "{name}" and all its tasks?', deleteCompletedConfirm: 'Delete all completed tasks in this category?', deleteAllConfirm: 'Delete all tasks in this category?', noCompletedTasks: 'No completed task to delete.', noTasksToDelete: 'No task to delete.',
        taskAdded: 'Task added', taskDeleted: 'Task deleted', priorityUpdated: 'Priority updated', progressText: '{done} of {total} tasks completed.', noProgress: 'No tasks yet.', categoryStats: '{active} active • {completed} completed', notificationTitle: 'Todo App', notificationDueToday: 'Task due today: {task}', notificationOverdue: 'Overdue task: {task}'
    },
    it: {
        appLabel: 'Produttività', title: 'Todo App', subtitle: 'Organizza le attività con categorie, priorità, tag, scadenze e Pomodoro.', themeButton: 'Tema', languageLabel: 'Lingua',
        dashboardKicker: 'Panoramica', dashboardTitle: 'Dashboard', totalTasks: 'Totale', activeTasks: 'Attive', completedTasks: 'Completate', overdue: 'In ritardo', dueToday: 'Oggi', progressTitle: 'Progresso', priorityTitle: 'Distribuzione priorità',
        categoryKicker: 'Organizzazione', categoryTitle: 'Categorie', addCategory: 'Aggiungi', newCategoryPlaceholder: 'Nome categoria...', categoryExamples: 'Esempi: Personale / Lavoro / Progetti', create: 'Crea', cancel: 'Annulla', currentCategory: 'Categoria attuale', selectCategory: 'Seleziona una categoria',
        taskKicker: 'Lista lavoro', inputTitle: 'Nuova attività', taskPlaceholder: 'Aggiungi una nuova attività...', dueDateLabel: 'Scadenza', dueTimeLabel: 'Ora', noDueTime: 'Senza ora', tagsPlaceholder: 'Tag: Personale, Lavoro, Progetti...', priorityMedium: 'Priorità B - Media', priorityHigh: 'Priorità A - Alta', priorityLow: 'Priorità C - Bassa', addTask: 'Aggiungi',
        all: 'Tutte', active: 'Attive', completed: 'Completate', emptyNoCategory: 'Crea o seleziona una categoria per iniziare.', emptyNoTasks: 'Nessuna attività in questa vista.', clearCompleted: 'Elimina completate', deleteAll: 'Elimina tutto', deleteCategory: 'Elimina categoria',
        alertsKicker: 'Promemoria', alertsTitle: 'Notifiche', alertsHelp: "Gli avvisi funzionano quando l'app è aperta nel browser.", enableAlerts: 'Attiva avvisi', alertsEnabled: 'Avvisi attivati', alertsDenied: 'Le notifiche sono bloccate dal browser.', alertsUnavailable: 'Le notifiche non sono disponibili su questo browser.',
        pomodoroKicker: 'Concentrazione', pomodoroTitle: 'Pomodoro', pomodoroHelp: 'Lavora 25 minuti su un’attività, poi fai una pausa.', start: 'Avvia', pause: 'Pausa', reset: 'Reset', pomodoroFinished: 'Pomodoro finito. Fai una pausa!',
        priorityModalTitle: 'Cambia priorità', priorityModalText: 'Questa attività è in priorità B. Vuoi renderla più o meno importante?', moreImportant: 'Più importante → A', lessImportant: 'Meno importante → C', close: 'Chiudi',
        changePriority: 'Cambia', deleteTask: 'Elimina', created: 'Creata il', due: 'Scadenza', noDueDate: 'Senza scadenza', today: 'Oggi', overdueLabel: 'In ritardo', tomorrow: 'Domani', tags: 'Tag', categoryEmpty: 'Nessuna categoria ancora.',
        invalidPastDueDate: 'La scadenza non può essere nel passato.', todayNeedsTime: 'Per una scadenza di oggi, scegli anche un’ora.', dueTimePast: 'L’ora scelta è già passata oggi.', dueTimeNeedsDate: 'Scegli una data se vuoi aggiungere un’ora.', categoryTooLong: 'Il nome della categoria è troppo lungo.', taskTooLong: 'L’attività è troppo lunga.', tagTooLong: 'Un tag è troppo lungo.', categoryExists: 'Questa categoria esiste già.', enterCategory: 'Inserisci un nome categoria.', selectCategoryAlert: 'Seleziona una categoria.', enterTask: 'Inserisci un’attività.', deleteCategoryConfirm: 'Eliminare la categoria "{name}" e tutte le sue attività?', deleteCompletedConfirm: 'Eliminare tutte le attività completate di questa categoria?', deleteAllConfirm: 'Eliminare tutte le attività di questa categoria?', noCompletedTasks: 'Nessuna attività completata da eliminare.', noTasksToDelete: 'Nessuna attività da eliminare.',
        taskAdded: 'Attività aggiunta', taskDeleted: 'Attività eliminata', priorityUpdated: 'Priorità aggiornata', progressText: '{done} su {total} attività completate.', noProgress: 'Nessuna attività per ora.', categoryStats: '{active} attive • {completed} completate', notificationTitle: 'Todo App', notificationDueToday: 'Attività da fare oggi: {task}', notificationOverdue: 'Attività in ritardo: {task}'
    },
    de: {
        appLabel: 'Produktivität', title: 'Todo App', subtitle: 'Organisiere Aufgaben mit Kategorien, Prioritäten, Tags, Fristen und Pomodoro.', themeButton: 'Design', languageLabel: 'Sprache',
        dashboardKicker: 'Übersicht', dashboardTitle: 'Dashboard', totalTasks: 'Gesamt', activeTasks: 'Aktiv', completedTasks: 'Erledigt', overdue: 'Überfällig', dueToday: 'Heute', progressTitle: 'Fortschritt', priorityTitle: 'Prioritätenverteilung',
        categoryKicker: 'Organisation', categoryTitle: 'Kategorien', addCategory: 'Hinzufügen', newCategoryPlaceholder: 'Kategoriename...', categoryExamples: 'Beispiele: Persönlich / Arbeit / Projekte', create: 'Erstellen', cancel: 'Abbrechen', currentCategory: 'Aktuelle Kategorie', selectCategory: 'Kategorie auswählen',
        taskKicker: 'Arbeitsliste', inputTitle: 'Neue Aufgabe', taskPlaceholder: 'Neue Aufgabe hinzufügen...', dueDateLabel: 'Fällig am', dueTimeLabel: 'Uhrzeit', noDueTime: 'Keine Uhrzeit', tagsPlaceholder: 'Tags: Persönlich, Arbeit, Projekte...', priorityMedium: 'Priorität B - Mittel', priorityHigh: 'Priorität A - Hoch', priorityLow: 'Priorität C - Niedrig', addTask: 'Hinzufügen',
        all: 'Alle', active: 'Aktiv', completed: 'Erledigt', emptyNoCategory: 'Erstelle oder wähle eine Kategorie aus.', emptyNoTasks: 'Keine Aufgaben in dieser Ansicht.', clearCompleted: 'Erledigte löschen', deleteAll: 'Alle löschen', deleteCategory: 'Kategorie löschen',
        alertsKicker: 'Erinnerungen', alertsTitle: 'Benachrichtigungen', alertsHelp: 'Benachrichtigungen funktionieren, wenn die App im Browser geöffnet ist.', enableAlerts: 'Benachrichtigungen aktivieren', alertsEnabled: 'Benachrichtigungen aktiviert', alertsDenied: 'Benachrichtigungen sind vom Browser blockiert.', alertsUnavailable: 'Benachrichtigungen sind in diesem Browser nicht verfügbar.',
        pomodoroKicker: 'Fokus', pomodoroTitle: 'Pomodoro', pomodoroHelp: 'Arbeite 25 Minuten an einer Aufgabe und mache dann eine Pause.', start: 'Start', pause: 'Pause', reset: 'Reset', pomodoroFinished: 'Pomodoro beendet. Mach eine Pause!',
        priorityModalTitle: 'Priorität ändern', priorityModalText: 'Diese Aufgabe hat Priorität B. Soll sie wichtiger oder weniger wichtig werden?', moreImportant: 'Wichtiger → A', lessImportant: 'Weniger wichtig → C', close: 'Schließen',
        changePriority: 'Ändern', deleteTask: 'Löschen', created: 'Erstellt am', due: 'Fällig', noDueDate: 'Keine Frist', today: 'Heute', overdueLabel: 'Überfällig', tomorrow: 'Morgen', tags: 'Tags', categoryEmpty: 'Noch keine Kategorie.',
        invalidPastDueDate: 'Das Fälligkeitsdatum darf nicht in der Vergangenheit liegen.', todayNeedsTime: 'Für eine heutige Frist wähle auch eine Uhrzeit.', dueTimePast: 'Die gewählte Uhrzeit ist heute bereits vorbei.', dueTimeNeedsDate: 'Wähle ein Datum, wenn du eine Uhrzeit hinzufügen willst.', categoryTooLong: 'Der Kategoriename ist zu lang.', taskTooLong: 'Die Aufgabe ist zu lang.', tagTooLong: 'Ein Tag ist zu lang.', categoryExists: 'Diese Kategorie existiert bereits.', enterCategory: 'Bitte gib einen Kategorienamen ein.', selectCategoryAlert: 'Bitte wähle eine Kategorie aus.', enterTask: 'Bitte gib eine Aufgabe ein.', deleteCategoryConfirm: 'Kategorie "{name}" und alle Aufgaben löschen?', deleteCompletedConfirm: 'Alle erledigten Aufgaben dieser Kategorie löschen?', deleteAllConfirm: 'Alle Aufgaben dieser Kategorie löschen?', noCompletedTasks: 'Keine erledigte Aufgabe zum Löschen.', noTasksToDelete: 'Keine Aufgabe zum Löschen.',
        taskAdded: 'Aufgabe hinzugefügt', taskDeleted: 'Aufgabe gelöscht', priorityUpdated: 'Priorität aktualisiert', progressText: '{done} von {total} Aufgaben erledigt.', noProgress: 'Noch keine Aufgaben.', categoryStats: '{active} aktiv • {completed} erledigt', notificationTitle: 'Todo App', notificationDueToday: 'Aufgabe heute fällig: {task}', notificationOverdue: 'Überfällige Aufgabe: {task}'
    },
    es: {
        appLabel: 'Productividad', title: 'Todo App', subtitle: 'Organiza tus tareas con categorías, prioridades, etiquetas, fechas límite y Pomodoro.', themeButton: 'Tema', languageLabel: 'Idioma',
        dashboardKicker: 'Vista general', dashboardTitle: 'Dashboard', totalTasks: 'Total', activeTasks: 'Activas', completedTasks: 'Completadas', overdue: 'Atrasadas', dueToday: 'Hoy', progressTitle: 'Progreso', priorityTitle: 'Distribución de prioridades',
        categoryKicker: 'Organización', categoryTitle: 'Categorías', addCategory: 'Añadir', newCategoryPlaceholder: 'Nombre de categoría...', categoryExamples: 'Ejemplos: Personal / Trabajo / Proyectos', create: 'Crear', cancel: 'Cancelar', currentCategory: 'Categoría actual', selectCategory: 'Selecciona una categoría',
        taskKicker: 'Lista de trabajo', inputTitle: 'Nueva tarea', taskPlaceholder: 'Añadir una nueva tarea...', dueDateLabel: 'Fecha límite', dueTimeLabel: 'Hora', noDueTime: 'Sin hora', tagsPlaceholder: 'Etiquetas: Personal, Trabajo, Proyectos...', priorityMedium: 'Prioridad B - Media', priorityHigh: 'Prioridad A - Alta', priorityLow: 'Prioridad C - Baja', addTask: 'Añadir',
        all: 'Todas', active: 'Activas', completed: 'Completadas', emptyNoCategory: 'Crea o selecciona una categoría para empezar.', emptyNoTasks: 'No hay tareas en esta vista.', clearCompleted: 'Eliminar completadas', deleteAll: 'Eliminar todo', deleteCategory: 'Eliminar categoría',
        alertsKicker: 'Recordatorios', alertsTitle: 'Notificaciones', alertsHelp: 'Las alertas funcionan cuando la app está abierta en el navegador.', enableAlerts: 'Activar alertas', alertsEnabled: 'Alertas activadas', alertsDenied: 'Las notificaciones están bloqueadas por el navegador.', alertsUnavailable: 'Las notificaciones no están disponibles en este navegador.',
        pomodoroKicker: 'Concentración', pomodoroTitle: 'Pomodoro', pomodoroHelp: 'Trabaja 25 minutos en una tarea y luego descansa.', start: 'Iniciar', pause: 'Pausa', reset: 'Reset', pomodoroFinished: 'Pomodoro terminado. ¡Toma un descanso!',
        priorityModalTitle: 'Cambiar prioridad', priorityModalText: 'Esta tarea tiene prioridad B. ¿Quieres hacerla más o menos importante?', moreImportant: 'Más importante → A', lessImportant: 'Menos importante → C', close: 'Cerrar',
        changePriority: 'Cambiar', deleteTask: 'Eliminar', created: 'Creada el', due: 'Límite', noDueDate: 'Sin fecha límite', today: 'Hoy', overdueLabel: 'Atrasada', tomorrow: 'Mañana', tags: 'Etiquetas', categoryEmpty: 'Todavía no hay categorías.',
        invalidPastDueDate: 'La fecha límite no puede estar en el pasado.', todayNeedsTime: 'Para una fecha límite de hoy, elige también una hora.', dueTimePast: 'La hora elegida ya pasó hoy.', dueTimeNeedsDate: 'Elige una fecha si quieres añadir una hora.', categoryTooLong: 'El nombre de la categoría es demasiado largo.', taskTooLong: 'La tarea es demasiado larga.', tagTooLong: 'Una etiqueta es demasiado larga.', categoryExists: 'Esta categoría ya existe.', enterCategory: 'Introduce un nombre de categoría.', selectCategoryAlert: 'Selecciona una categoría.', enterTask: 'Introduce una tarea.', deleteCategoryConfirm: '¿Eliminar la categoría "{name}" y todas sus tareas?', deleteCompletedConfirm: '¿Eliminar todas las tareas completadas de esta categoría?', deleteAllConfirm: '¿Eliminar todas las tareas de esta categoría?', noCompletedTasks: 'No hay tareas completadas para eliminar.', noTasksToDelete: 'No hay tareas para eliminar.',
        taskAdded: 'Tarea añadida', taskDeleted: 'Tarea eliminada', priorityUpdated: 'Prioridad actualizada', progressText: '{done} de {total} tareas completadas.', noProgress: 'Todavía no hay tareas.', categoryStats: '{active} activas • {completed} completadas', notificationTitle: 'Todo App', notificationDueToday: 'Tarea para hoy: {task}', notificationOverdue: 'Tarea atrasada: {task}'
    },
    pt: {
        appLabel: 'Produtividade', title: 'Todo App', subtitle: 'Organize tarefas com categorias, prioridades, tags, prazos e Pomodoro.', themeButton: 'Tema', languageLabel: 'Idioma',
        dashboardKicker: 'Visão geral', dashboardTitle: 'Dashboard', totalTasks: 'Total', activeTasks: 'Ativas', completedTasks: 'Concluídas', overdue: 'Atrasadas', dueToday: 'Hoje', progressTitle: 'Progresso', priorityTitle: 'Distribuição de prioridades',
        categoryKicker: 'Organização', categoryTitle: 'Categorias', addCategory: 'Adicionar', newCategoryPlaceholder: 'Nome da categoria...', categoryExamples: 'Exemplos: Pessoal / Trabalho / Projetos', create: 'Criar', cancel: 'Cancelar', currentCategory: 'Categoria atual', selectCategory: 'Selecione uma categoria',
        taskKicker: 'Lista de trabalho', inputTitle: 'Nova tarefa', taskPlaceholder: 'Adicionar uma nova tarefa...', dueDateLabel: 'Prazo', dueTimeLabel: 'Hora', noDueTime: 'Sem hora', tagsPlaceholder: 'Tags: Pessoal, Trabalho, Projetos...', priorityMedium: 'Prioridade B - Média', priorityHigh: 'Prioridade A - Alta', priorityLow: 'Prioridade C - Baixa', addTask: 'Adicionar',
        all: 'Todas', active: 'Ativas', completed: 'Concluídas', emptyNoCategory: 'Crie ou selecione uma categoria para começar.', emptyNoTasks: 'Nenhuma tarefa nesta vista.', clearCompleted: 'Excluir concluídas', deleteAll: 'Excluir tudo', deleteCategory: 'Excluir categoria',
        alertsKicker: 'Lembretes', alertsTitle: 'Notificações', alertsHelp: 'Os alertas funcionam quando o app está aberto no navegador.', enableAlerts: 'Ativar alertas', alertsEnabled: 'Alertas ativados', alertsDenied: 'As notificações estão bloqueadas pelo navegador.', alertsUnavailable: 'As notificações não estão disponíveis neste navegador.',
        pomodoroKicker: 'Foco', pomodoroTitle: 'Pomodoro', pomodoroHelp: 'Trabalhe 25 minutos numa tarefa e depois faça uma pausa.', start: 'Iniciar', pause: 'Pausa', reset: 'Reset', pomodoroFinished: 'Pomodoro terminado. Faça uma pausa!',
        priorityModalTitle: 'Alterar prioridade', priorityModalText: 'Esta tarefa está em prioridade B. Quer torná-la mais ou menos importante?', moreImportant: 'Mais importante → A', lessImportant: 'Menos importante → C', close: 'Fechar',
        changePriority: 'Alterar', deleteTask: 'Excluir', created: 'Criada em', due: 'Prazo', noDueDate: 'Sem prazo', today: 'Hoje', overdueLabel: 'Atrasada', tomorrow: 'Amanhã', tags: 'Tags', categoryEmpty: 'Ainda não há categorias.',
        invalidPastDueDate: 'O prazo não pode estar no passado.', todayNeedsTime: 'Para um prazo hoje, escolha também uma hora.', dueTimePast: 'A hora escolhida já passou hoje.', dueTimeNeedsDate: 'Escolha uma data se quiser adicionar uma hora.', categoryTooLong: 'O nome da categoria é muito longo.', taskTooLong: 'A tarefa é muito longa.', tagTooLong: 'Uma tag é muito longa.', categoryExists: 'Esta categoria já existe.', enterCategory: 'Digite um nome de categoria.', selectCategoryAlert: 'Selecione uma categoria.', enterTask: 'Digite uma tarefa.', deleteCategoryConfirm: 'Excluir a categoria "{name}" e todas as suas tarefas?', deleteCompletedConfirm: 'Excluir todas as tarefas concluídas desta categoria?', deleteAllConfirm: 'Excluir todas as tarefas desta categoria?', noCompletedTasks: 'Nenhuma tarefa concluída para excluir.', noTasksToDelete: 'Nenhuma tarefa para excluir.',
        taskAdded: 'Tarefa adicionada', taskDeleted: 'Tarefa excluída', priorityUpdated: 'Prioridade atualizada', progressText: '{done} de {total} tarefas concluídas.', noProgress: 'Ainda não há tarefas.', categoryStats: '{active} ativas • {completed} concluídas', notificationTitle: 'Todo App', notificationDueToday: 'Tarefa para hoje: {task}', notificationOverdue: 'Tarefa atrasada: {task}'
    },
    pl: {
        appLabel: 'Produktywność', title: 'Todo App', subtitle: 'Organizuj zadania z kategoriami, priorytetami, tagami, terminami i Pomodoro.', themeButton: 'Motyw', languageLabel: 'Język',
        dashboardKicker: 'Przegląd', dashboardTitle: 'Dashboard', totalTasks: 'Razem', activeTasks: 'Aktywne', completedTasks: 'Ukończone', overdue: 'Po terminie', dueToday: 'Dzisiaj', progressTitle: 'Postęp', priorityTitle: 'Podział priorytetów',
        categoryKicker: 'Organizacja', categoryTitle: 'Kategorie', addCategory: 'Dodaj', newCategoryPlaceholder: 'Nazwa kategorii...', categoryExamples: 'Przykłady: Osobiste / Praca / Projekty', create: 'Utwórz', cancel: 'Anuluj', currentCategory: 'Aktualna kategoria', selectCategory: 'Wybierz kategorię',
        taskKicker: 'Lista pracy', inputTitle: 'Nowe zadanie', taskPlaceholder: 'Dodaj nowe zadanie...', dueDateLabel: 'Termin', dueTimeLabel: 'Godzina', noDueTime: 'Bez godziny', tagsPlaceholder: 'Tagi: Osobiste, Praca, Projekty...', priorityMedium: 'Priorytet B - Średni', priorityHigh: 'Priorytet A - Wysoki', priorityLow: 'Priorytet C - Niski', addTask: 'Dodaj',
        all: 'Wszystkie', active: 'Aktywne', completed: 'Ukończone', emptyNoCategory: 'Utwórz lub wybierz kategorię, aby zacząć.', emptyNoTasks: 'Brak zadań w tym widoku.', clearCompleted: 'Usuń ukończone', deleteAll: 'Usuń wszystko', deleteCategory: 'Usuń kategorię',
        alertsKicker: 'Przypomnienia', alertsTitle: 'Powiadomienia', alertsHelp: 'Alerty działają, gdy aplikacja jest otwarta w przeglądarce.', enableAlerts: 'Włącz alerty', alertsEnabled: 'Alerty włączone', alertsDenied: 'Powiadomienia są zablokowane przez przeglądarkę.', alertsUnavailable: 'Powiadomienia nie są dostępne w tej przeglądarce.',
        pomodoroKicker: 'Skupienie', pomodoroTitle: 'Pomodoro', pomodoroHelp: 'Pracuj 25 minut nad zadaniem, potem zrób przerwę.', start: 'Start', pause: 'Pauza', reset: 'Reset', pomodoroFinished: 'Pomodoro zakończone. Zrób przerwę!',
        priorityModalTitle: 'Zmień priorytet', priorityModalText: 'To zadanie ma priorytet B. Chcesz zrobić je ważniejszym czy mniej ważnym?', moreImportant: 'Ważniejsze → A', lessImportant: 'Mniej ważne → C', close: 'Zamknij',
        changePriority: 'Zmień', deleteTask: 'Usuń', created: 'Utworzono', due: 'Termin', noDueDate: 'Bez terminu', today: 'Dzisiaj', overdueLabel: 'Po terminie', tomorrow: 'Jutro', tags: 'Tagi', categoryEmpty: 'Nie ma jeszcze kategorii.',
        invalidPastDueDate: 'Termin nie może być w przeszłości.', todayNeedsTime: 'Dla terminu dzisiaj wybierz także godzinę.', dueTimePast: 'Wybrana godzina już dzisiaj minęła.', dueTimeNeedsDate: 'Wybierz datę, jeśli chcesz dodać godzinę.', categoryTooLong: 'Nazwa kategorii jest za długa.', taskTooLong: 'Zadanie jest za długie.', tagTooLong: 'Jeden tag jest za długi.', categoryExists: 'Ta kategoria już istnieje.', enterCategory: 'Wpisz nazwę kategorii.', selectCategoryAlert: 'Wybierz kategorię.', enterTask: 'Wpisz zadanie.', deleteCategoryConfirm: 'Usunąć kategorię "{name}" i wszystkie jej zadania?', deleteCompletedConfirm: 'Usunąć wszystkie ukończone zadania w tej kategorii?', deleteAllConfirm: 'Usunąć wszystkie zadania w tej kategorii?', noCompletedTasks: 'Brak ukończonych zadań do usunięcia.', noTasksToDelete: 'Brak zadań do usunięcia.',
        taskAdded: 'Zadanie dodane', taskDeleted: 'Zadanie usunięte', priorityUpdated: 'Priorytet zaktualizowany', progressText: 'Ukończono {done} z {total} zadań.', noProgress: 'Brak zadań.', categoryStats: '{active} aktywne • {completed} ukończone', notificationTitle: 'Todo App', notificationDueToday: 'Zadanie na dziś: {task}', notificationOverdue: 'Zadanie po terminie: {task}'
    }
};

const categoryBtnAdd = document.getElementById('addCategoryBtn');
const newCategoryForm = document.getElementById('newCategoryForm');
const newCategoryInput = document.getElementById('newCategoryInput');
const saveCategoryBtn = document.getElementById('saveCategoryBtn');
const cancelCategoryBtn = document.getElementById('cancelCategoryBtn');
const categoriesList = document.getElementById('categoriesList');
const categoryDropdown = document.getElementById('categoryDropdown');
const categoryStats = document.getElementById('categoryStats');
const categoryStatsTitle = document.getElementById('categoryStatsTitle');
const categoryStatsText = document.getElementById('categoryStatsText');
const inputSection = document.getElementById('inputSection');
const filterSection = document.getElementById('filterSection');
const actionSection = document.getElementById('actionSection');
const taskInput = document.getElementById('taskInput');
const dueDateInput = document.getElementById('dueDateInput');
const dueTimeInput = document.getElementById('dueTimeInput');
const tagsInput = document.getElementById('tagsInput');
const addBtn = document.getElementById('addBtn');
const prioritySelect = document.getElementById('prioritySelect');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const emptyStateText = document.getElementById('emptyStateText');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearBtn = document.getElementById('clearBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const deleteCategoryBtn = document.getElementById('deleteCategoryBtn');
const languageSelect = document.getElementById('languageSelect');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const enableNotificationsBtn = document.getElementById('enableNotificationsBtn');
const priorityModal = document.getElementById('priorityModal');
const priorityToA = document.getElementById('priorityToA');
const priorityToC = document.getElementById('priorityToC');
const closePriorityModal = document.getElementById('closePriorityModal');
const toastContainer = document.getElementById('toastContainer');
const startTimerBtn = document.getElementById('startTimerBtn');
const pauseTimerBtn = document.getElementById('pauseTimerBtn');
const resetTimerBtn = document.getElementById('resetTimerBtn');
const timerDisplay = document.getElementById('timerDisplay');

const dashboardElements = {
    total: document.getElementById('totalTasksCount'),
    active: document.getElementById('activeTasksCount'),
    completed: document.getElementById('completedTasksCount'),
    overdue: document.getElementById('overdueTasksCount'),
    today: document.getElementById('todayTasksCount'),
    progressPercent: document.getElementById('progressPercent'),
    progressFill: document.getElementById('progressFill'),
    progressText: document.getElementById('progressText'),
    priorityACount: document.getElementById('priorityACount'),
    priorityBCount: document.getElementById('priorityBCount'),
    priorityCCount: document.getElementById('priorityCCount'),
    priorityABar: document.getElementById('priorityABar'),
    priorityBBar: document.getElementById('priorityBBar'),
    priorityCBar: document.getElementById('priorityCBar')
};

let categories = [];
let tasks = [];
let currentCategory = null;
let currentFilter = 'all';
let currentLanguage = 'fr';
let currentTheme = 'dark';
let taskWaitingPriorityChoice = null;
let notificationsEnabled = false;
let timerSeconds = 25 * 60;
let timerInterval = null;

document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    loadData();
    populateDueTimeOptions();
    translateUI();
    bindEvents();
    renderAll();
    updateTimerDisplay();
    checkDueNotifications();
    setInterval(checkDueNotifications, 60 * 1000);
});

function bindEvents() {
    categoryBtnAdd.addEventListener('click', () => {
        newCategoryForm.hidden = false;
        newCategoryInput.focus();
    });

    saveCategoryBtn.addEventListener('click', addCategory);
    cancelCategoryBtn.addEventListener('click', () => {
        newCategoryForm.hidden = true;
        newCategoryInput.value = '';
    });

    newCategoryInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') addCategory();
    });

    categoryDropdown.addEventListener('change', (event) => {
        currentCategory = event.target.value || null;
        currentFilter = 'all';
        resetFilterButtons();
        renderAll();
    });

    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') addTask();
    });

    filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            currentFilter = btn.dataset.filter;
            filterBtns.forEach((button) => button.classList.remove('active'));
            btn.classList.add('active');
            renderTasks();
        });
    });

    clearBtn.addEventListener('click', clearCompleted);
    deleteAllBtn.addEventListener('click', deleteAll);
    deleteCategoryBtn.addEventListener('click', deleteCurrentCategory);

    languageSelect.addEventListener('change', (event) => {
        currentLanguage = event.target.value;
        localStorage.setItem('todo-language', currentLanguage);
        document.documentElement.lang = currentLanguage;
        translateUI();
        renderAll();
    });

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('todo-theme', currentTheme);
        applyTheme();
    });

    enableNotificationsBtn.addEventListener('click', enableNotifications);

    priorityToA.addEventListener('click', () => setPriorityFromModal('A'));
    priorityToC.addEventListener('click', () => setPriorityFromModal('C'));
    closePriorityModal.addEventListener('click', closePriorityChoiceModal);
    priorityModal.querySelector('[data-close-modal]').addEventListener('click', closePriorityChoiceModal);

    startTimerBtn.addEventListener('click', startPomodoro);
    pauseTimerBtn.addEventListener('click', pausePomodoro);
    resetTimerBtn.addEventListener('click', resetPomodoro);
}

function t(key, values = {}) {
    const dictionary = translations[currentLanguage] || translations.fr;
    let text = dictionary[key] || translations.fr[key] || key;

    Object.entries(values).forEach(([name, value]) => {
        text = text.replaceAll(`{${name}}`, value);
    });

    return text;
}

function translateUI() {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        element.placeholder = t(element.dataset.i18nPlaceholder);
    });

    languageSelect.value = currentLanguage;
    document.documentElement.lang = currentLanguage;
}

function loadSettings() {
    currentLanguage = localStorage.getItem('todo-language') || 'fr';
    currentTheme = localStorage.getItem('todo-theme') || 'dark';
    notificationsEnabled = localStorage.getItem('todo-notifications-enabled') === 'true';
    applyTheme();
}

function applyTheme() {
    document.documentElement.dataset.theme = currentTheme;
    themeIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
}

function loadData() {
    categories = readJson('todo-categories', []);
    tasks = readJson('todo-tasks', []).map(normalizeTask);
}

function readJson(key, fallback) {
    try {
        return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    } catch (error) {
        console.error(`Impossible de lire ${key}`, error);
        return fallback;
    }
}

function normalizeTask(task) {
    return {
        id: task.id || createId(),
        text: task.text || '',
        priority: ['A', 'B', 'C'].includes(task.priority) ? task.priority : 'B',
        completed: Boolean(task.completed),
        category: task.category || '',
        createdAt: task.createdAt || new Date().toLocaleDateString('fr-FR'),
        dueDate: task.dueDate || '',
        dueTime: task.dueTime || '',
        tags: Array.isArray(task.tags) ? task.tags.map((tag) => cleanUserText(tag, 24)).filter(Boolean).slice(0, 6) : []
    };
}

function saveData() {
    localStorage.setItem('todo-categories', JSON.stringify(categories));
    localStorage.setItem('todo-tasks', JSON.stringify(tasks));
}

function createId() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function renderAll() {
    renderCategories();
    updateCategoryDisplay();
    renderTasks();
    updateDashboard();
}

function addCategory() {
    const categoryName = cleanUserText(newCategoryInput.value, 60);

    if (!categoryName) {
        showToast(t('enterCategory'));
        return;
    }

    const exists = categories.some((category) => category.toLowerCase() === categoryName.toLowerCase());
    if (exists) {
        showToast(t('categoryExists'));
        return;
    }

    categories.push(categoryName);
    currentCategory = categoryName;
    newCategoryInput.value = '';
    newCategoryForm.hidden = true;
    saveData();
    renderAll();
}

function deleteCategory(categoryName) {
    if (!confirm(t('deleteCategoryConfirm', { name: categoryName }))) return;

    categories = categories.filter((category) => category !== categoryName);
    tasks = tasks.filter((task) => task.category !== categoryName);

    if (currentCategory === categoryName) {
        currentCategory = null;
    }

    saveData();
    renderAll();
}

function renderCategories() {
    categoriesList.replaceChildren();

    if (categories.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'muted-text';
        empty.textContent = t('categoryEmpty');
        categoriesList.appendChild(empty);
    }

    categories.forEach((category) => {
        const categoryTasks = tasks.filter((task) => task.category === category);
        const activeTasks = categoryTasks.filter((task) => !task.completed).length;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `category-btn ${currentCategory === category ? 'active' : ''}`;

        const textWrapper = document.createElement('span');
        const categoryName = document.createElement('span');
        categoryName.className = 'category-name';
        categoryName.textContent = category;

        const categoryCount = document.createElement('span');
        categoryCount.className = 'category-count';
        categoryCount.textContent = `${activeTasks}/${categoryTasks.length}`;

        const deleteIcon = document.createElement('span');
        deleteIcon.className = 'delete-category-icon';
        deleteIcon.textContent = '×';
        deleteIcon.title = t('deleteCategory');

        deleteIcon.addEventListener('click', (event) => {
            event.stopPropagation();
            deleteCategory(category);
        });

        textWrapper.appendChild(categoryName);
        textWrapper.appendChild(categoryCount);
        btn.appendChild(textWrapper);
        btn.appendChild(deleteIcon);

        btn.addEventListener('click', () => {
            currentCategory = category;
            currentFilter = 'all';
            resetFilterButtons();
            renderAll();
        });

        categoriesList.appendChild(btn);
    });

    categoryDropdown.replaceChildren();
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = t('selectCategory');
    categoryDropdown.appendChild(defaultOption);

    categories.forEach((category) => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryDropdown.appendChild(option);
    });

    categoryDropdown.value = currentCategory || '';
}

function resetFilterButtons() {
    filterBtns.forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.filter === 'all');
    });
}

function updateCategoryDisplay() {
    const hasCategory = Boolean(currentCategory);
    inputSection.hidden = !hasCategory;
    filterSection.hidden = !hasCategory;
    actionSection.hidden = !hasCategory;
    categoryStats.hidden = !hasCategory;

    if (hasCategory) {
        const categoryTasks = tasks.filter((task) => task.category === currentCategory);
        const completed = categoryTasks.filter((task) => task.completed).length;
        const active = categoryTasks.length - completed;
        categoryStatsTitle.textContent = currentCategory;
        categoryStatsText.textContent = t('categoryStats', { active, completed });
    }
}

function addTask() {
    if (!currentCategory) {
        showToast(t('selectCategoryAlert'));
        return;
    }

    const taskText = cleanUserText(taskInput.value, 160);
    if (!taskText) {
        showToast(t('enterTask'));
        return;
    }

    const dueDate = dueDateInput.value;
    const dueTime = dueTimeInput.value;
    const dueValidation = validateDueDateTime(dueDate, dueTime);

    if (!dueValidation.valid) {
        showToast(t(dueValidation.messageKey));
        return;
    }

    const parsedTags = parseTags(tagsInput.value);

    const task = {
        id: createId(),
        text: taskText,
        priority: prioritySelect.value,
        completed: false,
        category: currentCategory,
        createdAt: new Date().toLocaleDateString(currentLanguage),
        dueDate,
        dueTime,
        tags: parsedTags
    };

    tasks.unshift(task);
    taskInput.value = '';
    dueDateInput.value = '';
    dueTimeInput.value = '';
    tagsInput.value = '';
    prioritySelect.value = 'B';
    taskInput.focus();

    saveData();
    renderAll();
    showToast(t('taskAdded'));
    checkDueNotifications();
}

function parseTags(value) {
    return value
        .split(',')
        .map((tag) => cleanUserText(tag, 24))
        .filter(Boolean)
        .slice(0, 6);
}

function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    saveData();
    renderAll();
    showToast(t('taskDeleted'));
}

function toggleTask(id) {
    const task = tasks.find((item) => item.id === id);
    if (!task) return;

    task.completed = !task.completed;
    saveData();
    renderAll();
}

function changePriority(id) {
    const task = tasks.find((item) => item.id === id);
    if (!task) return;

    if (task.priority === 'C') {
        task.priority = 'B';
        saveData();
        renderAll();
        showToast(t('priorityUpdated'));
        return;
    }

    if (task.priority === 'A') {
        task.priority = 'B';
        saveData();
        renderAll();
        showToast(t('priorityUpdated'));
        return;
    }

    taskWaitingPriorityChoice = id;
    openPriorityChoiceModal();
}

function openPriorityChoiceModal() {
    priorityModal.classList.add('open');
    priorityModal.setAttribute('aria-hidden', 'false');
}

function closePriorityChoiceModal() {
    priorityModal.classList.remove('open');
    priorityModal.setAttribute('aria-hidden', 'true');
    taskWaitingPriorityChoice = null;
}

function setPriorityFromModal(priority) {
    if (!taskWaitingPriorityChoice) return;

    const task = tasks.find((item) => item.id === taskWaitingPriorityChoice);
    if (task) {
        task.priority = priority;
        saveData();
        renderAll();
        showToast(t('priorityUpdated'));
    }

    closePriorityChoiceModal();
}

function getVisibleTasks() {
    if (!currentCategory) return [];

    const categoryTasks = tasks.filter((task) => task.category === currentCategory);

    if (currentFilter === 'active') return categoryTasks.filter((task) => !task.completed);
    if (currentFilter === 'completed') return categoryTasks.filter((task) => task.completed);
    return categoryTasks;
}

function renderTasks() {
    taskList.replaceChildren();

    if (!currentCategory) {
        emptyState.classList.add('show');
        emptyStateText.textContent = t('emptyNoCategory');
        return;
    }

    const visibleTasks = getVisibleTasks().sort(sortTasks);

    if (visibleTasks.length === 0) {
        emptyState.classList.add('show');
        emptyStateText.textContent = t('emptyNoTasks');
        return;
    }

    emptyState.classList.remove('show');

    visibleTasks.forEach((task) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''} priority-${task.priority.toLowerCase()}`;

        const checkbox = document.createElement('button');
        checkbox.type = 'button';
        checkbox.className = `task-checkbox ${task.completed ? 'checked' : ''}`;
        checkbox.textContent = task.completed ? '✓' : '';
        checkbox.addEventListener('click', () => toggleTask(task.id));

        const main = document.createElement('div');
        main.className = 'task-main';

        const title = document.createElement('p');
        title.className = 'task-title';
        title.textContent = task.text;

        const meta = document.createElement('div');
        meta.className = 'task-meta';
        meta.appendChild(createPriorityBadge(task.priority));
        meta.appendChild(createMetaPill(`${t('created')} ${task.createdAt}`));
        meta.appendChild(createDuePill(task.dueDate, task.dueTime, task.completed));

        const tags = document.createElement('div');
        tags.className = 'task-tags';
        task.tags.forEach((tag) => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag-pill';
            tagElement.textContent = `#${tag}`;
            tags.appendChild(tagElement);
        });

        main.appendChild(title);
        main.appendChild(meta);
        if (task.tags.length) main.appendChild(tags);

        const actions = document.createElement('div');
        actions.className = 'task-actions';

        const priorityBtn = document.createElement('button');
        priorityBtn.type = 'button';
        priorityBtn.className = 'task-action-btn';
        priorityBtn.textContent = t('changePriority');
        priorityBtn.addEventListener('click', () => changePriority(task.id));

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'task-action-btn delete-task-btn';
        deleteBtn.textContent = t('deleteTask');
        deleteBtn.addEventListener('click', () => deleteTask(task.id));

        actions.appendChild(priorityBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(checkbox);
        li.appendChild(main);
        li.appendChild(actions);
        taskList.appendChild(li);
    });
}

function sortTasks(a, b) {
    if (a.completed !== b.completed) return Number(a.completed) - Number(b.completed);

    const priorityOrder = { A: 0, B: 1, C: 2 };
    const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
    if (priorityDiff !== 0) return priorityDiff;

    const dueA = getTaskDueSortValue(a);
    const dueB = getTaskDueSortValue(b);
    if (dueA && dueB) return dueA.localeCompare(dueB);
    if (dueA) return -1;
    if (dueB) return 1;
    return 0;
}

function createPriorityBadge(priority) {
    const badge = document.createElement('span');
    badge.className = `priority-badge priority-${priority.toLowerCase()}`;
    badge.textContent = priority;
    return badge;
}

function createMetaPill(text) {
    const pill = document.createElement('span');
    pill.className = 'meta-pill';
    pill.textContent = text;
    return pill;
}

function createDuePill(dueDate, dueTime, completed) {
    const pill = document.createElement('span');
    const status = getDueStatus(dueDate, dueTime, completed);
    pill.className = `meta-pill ${status.className}`;
    pill.textContent = status.label;
    return pill;
}

function getDueStatus(dueDate, dueTime = '', completed = false) {
    if (!dueDate) return { label: t('noDueDate'), className: '' };

    const today = getTodayIso();
    const tomorrow = getRelativeIso(1);

    if (!completed && isDueDateTimePast(dueDate, dueTime)) {
        return { label: `${t('overdueLabel')} · ${formatDueDateTime(dueDate, dueTime)}`, className: 'due-overdue' };
    }

    if (!completed && dueDate === today) {
        return { label: `${t('today')} · ${formatDueDateTime(dueDate, dueTime)}`, className: 'due-today' };
    }

    if (dueDate === tomorrow) {
        return { label: `${t('tomorrow')} · ${formatDueDateTime(dueDate, dueTime)}`, className: '' };
    }

    return { label: `${t('due')} · ${formatDueDateTime(dueDate, dueTime)}`, className: '' };
}

function formatDueDateTime(isoDate, time = '') {
    if (!isoDate) return '';

    const formattedDate = new Date(`${isoDate}T00:00:00`).toLocaleDateString(currentLanguage, {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });

    return time ? `${formattedDate} · ${time}` : formattedDate;
}

function getTodayIso() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getRelativeIso(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function validateDueDateTime(dueDate, dueTime) {
    if (!dueDate && !dueTime) return { valid: true };
    if (!dueDate && dueTime) return { valid: false, messageKey: 'dueTimeNeedsDate' };

    const today = getTodayIso();

    if (dueDate < today) {
        return { valid: false, messageKey: 'invalidPastDueDate' };
    }

    if (dueDate === today && !dueTime) {
        return { valid: false, messageKey: 'todayNeedsTime' };
    }

    if (dueDate === today && isDueDateTimePast(dueDate, dueTime)) {
        return { valid: false, messageKey: 'dueTimePast' };
    }

    return { valid: true };
}

function isDueDateTimePast(dueDate, dueTime = '') {
    const today = getTodayIso();

    if (dueDate < today) return true;
    if (dueDate > today) return false;
    if (!dueTime) return false;

    const due = new Date(`${dueDate}T${dueTime}:00`);
    return due.getTime() < Date.now();
}

function getTaskDueSortValue(task) {
    if (!task.dueDate) return '';
    return `${task.dueDate}T${task.dueTime || '23:59'}`;
}

function populateDueTimeOptions() {
    if (!dueTimeInput) return;

    const existingTimes = new Set([...dueTimeInput.options].map((option) => option.value));

    for (let hour = 0; hour < 24; hour += 1) {
        for (let minute = 0; minute < 60; minute += 15) {
            const value = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;

            if (existingTimes.has(value)) continue;

            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            dueTimeInput.appendChild(option);
        }
    }
}

function cleanUserText(value, maxLength) {
    return String(value || '')
        .replace(/[\u0000-\u001F\u007F]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, maxLength);
}

function clearCompleted() {
    if (!currentCategory) return;

    const hasCompleted = tasks.some((task) => task.category === currentCategory && task.completed);
    if (!hasCompleted) {
        showToast(t('noCompletedTasks'));
        return;
    }

    if (!confirm(t('deleteCompletedConfirm'))) return;

    tasks = tasks.filter((task) => !(task.category === currentCategory && task.completed));
    saveData();
    renderAll();
}

function deleteAll() {
    if (!currentCategory) return;

    const hasTasks = tasks.some((task) => task.category === currentCategory);
    if (!hasTasks) {
        showToast(t('noTasksToDelete'));
        return;
    }

    if (!confirm(t('deleteAllConfirm'))) return;

    tasks = tasks.filter((task) => task.category !== currentCategory);
    saveData();
    renderAll();
}

function deleteCurrentCategory() {
    if (currentCategory) deleteCategory(currentCategory);
}

function updateDashboard() {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    const active = total - completed;
    const today = getTodayIso();
    const overdue = tasks.filter((task) => task.dueDate && isDueDateTimePast(task.dueDate, task.dueTime) && !task.completed).length;
    const dueToday = tasks.filter((task) => task.dueDate === today && !task.completed).length;

    dashboardElements.total.textContent = total;
    dashboardElements.active.textContent = active;
    dashboardElements.completed.textContent = completed;
    dashboardElements.overdue.textContent = overdue;
    dashboardElements.today.textContent = dueToday;

    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
    dashboardElements.progressPercent.textContent = `${percent}%`;
    dashboardElements.progressFill.style.width = `${percent}%`;
    dashboardElements.progressText.textContent = total === 0 ? t('noProgress') : t('progressText', { done: completed, total });

    const priorityCounts = {
        A: tasks.filter((task) => task.priority === 'A').length,
        B: tasks.filter((task) => task.priority === 'B').length,
        C: tasks.filter((task) => task.priority === 'C').length
    };

    dashboardElements.priorityACount.textContent = priorityCounts.A;
    dashboardElements.priorityBCount.textContent = priorityCounts.B;
    dashboardElements.priorityCCount.textContent = priorityCounts.C;

    dashboardElements.priorityABar.style.width = `${getBarWidth(priorityCounts.A, total)}%`;
    dashboardElements.priorityBBar.style.width = `${getBarWidth(priorityCounts.B, total)}%`;
    dashboardElements.priorityCBar.style.width = `${getBarWidth(priorityCounts.C, total)}%`;
}

function getBarWidth(value, total) {
    if (total === 0) return 0;
    return Math.max(8, Math.round((value / total) * 100));
}

async function enableNotifications() {
    if (!('Notification' in window)) {
        showToast(t('alertsUnavailable'));
        return;
    }

    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
        notificationsEnabled = true;
        localStorage.setItem('todo-notifications-enabled', 'true');
        showToast(t('alertsEnabled'));
        checkDueNotifications(true);
    } else {
        showToast(t('alertsDenied'));
    }
}

function checkDueNotifications(force = false) {
    if (!notificationsEnabled || !('Notification' in window) || Notification.permission !== 'granted') return;

    const today = getTodayIso();
    const notifiedKeys = readJson('todo-notified-keys', []);
    const nextKeys = [...notifiedKeys];

    tasks.forEach((task) => {
        if (task.completed || !task.dueDate) return;

        let message = '';
        let status = '';

        if (isDueDateTimePast(task.dueDate, task.dueTime)) {
            status = 'overdue';
            message = t('notificationOverdue', { task: task.text });
        } else if (task.dueDate === today) {
            status = 'today';
            message = t('notificationDueToday', { task: task.text });
        }

        if (!message) return;

        const key = `${today}-${task.id}-${status}`;
        if (!force && nextKeys.includes(key)) return;

        new Notification(t('notificationTitle'), { body: message });
        nextKeys.push(key);
    });

    localStorage.setItem('todo-notified-keys', JSON.stringify(nextKeys.slice(-300)));
}

function startPomodoro() {
    if (timerInterval) return;

    timerInterval = setInterval(() => {
        timerSeconds -= 1;
        updateTimerDisplay();

        if (timerSeconds <= 0) {
            pausePomodoro();
            showToast(t('pomodoroFinished'));
            if (notificationsEnabled && 'Notification' in window && Notification.permission === 'granted') {
                new Notification(t('notificationTitle'), { body: t('pomodoroFinished') });
            }
            timerSeconds = 25 * 60;
            updateTimerDisplay();
        }
    }, 1000);
}

function pausePomodoro() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetPomodoro() {
    pausePomodoro();
    timerSeconds = 25 * 60;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
    const seconds = String(timerSeconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3200);
}
