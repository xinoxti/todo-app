const translations = {
    fr: {
        appLabel: 'Productivité', title: 'TaskFlow', subtitle: 'Organisez vos tâches avec catégories, priorités, tags, échéances et Pomodoro.', themeButton: 'Thème', languageLabel: 'Langue',
        dashboardKicker: 'Vue globale', dashboardTitle: 'Dashboard', totalTasks: 'Total', activeTasks: 'Actives', completedTasks: 'Terminées', overdue: 'En retard', dueToday: "Aujourd'hui", progressTitle: 'Progression', priorityTitle: 'Répartition des priorités',
        categoryKicker: 'Organisation', categoryTitle: 'Catégories', addCategory: 'Ajouter', newCategoryPlaceholder: 'Nom de la catégorie...', create: 'Créer', cancel: 'Annuler', currentCategory: 'Catégorie actuelle', selectCategory: 'Sélectionnez une catégorie',
        taskKicker: 'Liste de travail', inputTitle: 'Nouvelle tâche', taskPlaceholder: 'Ajouter une nouvelle tâche...', dueDateLabel: 'Échéance', tagsPlaceholder: 'Tags : urgent, maison, école, travail, projet...', priorityMedium: 'Priorité B - Moyenne', priorityHigh: 'Priorité A - Haute', priorityLow: 'Priorité C - Basse', addTask: 'Ajouter',
        all: 'Toutes', active: 'Actives', completed: 'Terminées', emptyNoCategory: 'Créez ou sélectionnez une catégorie pour commencer.', emptyNoTasks: 'Aucune tâche dans cette vue.', clearCompleted: 'Supprimer les terminées', deleteAll: 'Tout supprimer', deleteCategory: 'Supprimer la catégorie',
        alertsKicker: 'Rappels', alertsTitle: 'Notifications', alertsHelp: "Les alertes fonctionnent quand l'application est ouverte dans le navigateur.", enableAlerts: 'Activer les alertes', alertsEnabled: 'Alertes activées', alertsDenied: 'Les notifications sont bloquées par le navigateur.', alertsUnavailable: 'Les notifications ne sont pas disponibles sur ce navigateur.',
        pomodoroKicker: 'Concentration', pomodoroTitle: 'Pomodoro', pomodoroHelp: 'Travaillez 25 minutes sur une tâche puis prenez une pause.', start: 'Démarrer', pause: 'Pause', reset: 'Reset', pomodoroFinished: 'Pomodoro terminé. Prenez une pause !',
        priorityModalTitle: 'Changer la priorité', priorityModalText: 'Cette tâche est en priorité B. Voulez-vous la rendre plus ou moins importante ?', moreImportant: 'Plus important → A', lessImportant: 'Moins important → C', close: 'Fermer',
        changePriority: 'Changer', deleteTask: 'Supprimer', created: 'Créée le', due: 'Échéance', noDueDate: 'Sans échéance', today: "Aujourd'hui", overdueLabel: 'En retard', tomorrow: 'Demain', tags: 'Tags', categoryEmpty: 'Aucune catégorie encore.',
        categoryExists: 'Cette catégorie existe déjà.', enterCategory: 'Veuillez entrer un nom de catégorie.', selectCategoryAlert: 'Veuillez sélectionner une catégorie.', enterTask: 'Veuillez entrer une tâche.', deleteCategoryConfirm: 'Supprimer la catégorie "{name}" et toutes ses tâches ?', deleteCompletedConfirm: 'Supprimer toutes les tâches terminées de cette catégorie ?', deleteAllConfirm: 'Supprimer toutes les tâches de cette catégorie ?', noCompletedTasks: 'Aucune tâche terminée à supprimer.', noTasksToDelete: 'Aucune tâche à supprimer.',
        taskAdded: 'Tâche ajoutée', taskDeleted: 'Tâche supprimée', priorityUpdated: 'Priorité mise à jour', progressText: '{done} sur {total} tâches terminées.', noProgress: 'Aucune tâche pour le moment.', categoryStats: '{active} active(s) • {completed} terminée(s)', notificationTitle: 'TaskFlow', notificationDueToday: 'Tâche à faire aujourd’hui : {task}', notificationOverdue: 'Tâche en retard : {task}'
    },
    en: {
        appLabel: 'Productivity', title: 'TaskFlow', subtitle: 'Organize your tasks with categories, priorities, tags, deadlines and Pomodoro.', themeButton: 'Theme', languageLabel: 'Language',
        dashboardKicker: 'Overview', dashboardTitle: 'Dashboard', totalTasks: 'Total', activeTasks: 'Active', completedTasks: 'Completed', overdue: 'Overdue', dueToday: 'Today', progressTitle: 'Progress', priorityTitle: 'Priority breakdown',
        categoryKicker: 'Organization', categoryTitle: 'Categories', addCategory: 'Add', newCategoryPlaceholder: 'Category name...', create: 'Create', cancel: 'Cancel', currentCategory: 'Current category', selectCategory: 'Select a category',
        taskKicker: 'Work list', inputTitle: 'New task', taskPlaceholder: 'Add a new task...', dueDateLabel: 'Due date', tagsPlaceholder: 'Tags: urgent, home, school, work, project...', priorityMedium: 'Priority B - Medium', priorityHigh: 'Priority A - High', priorityLow: 'Priority C - Low', addTask: 'Add',
        all: 'All', active: 'Active', completed: 'Completed', emptyNoCategory: 'Create or select a category to start.', emptyNoTasks: 'No tasks in this view.', clearCompleted: 'Clear completed', deleteAll: 'Delete all', deleteCategory: 'Delete category',
        alertsKicker: 'Reminders', alertsTitle: 'Notifications', alertsHelp: 'Alerts work when the app is open in the browser.', enableAlerts: 'Enable alerts', alertsEnabled: 'Alerts enabled', alertsDenied: 'Notifications are blocked by the browser.', alertsUnavailable: 'Notifications are not available on this browser.',
        pomodoroKicker: 'Focus', pomodoroTitle: 'Pomodoro', pomodoroHelp: 'Work for 25 minutes on a task, then take a break.', start: 'Start', pause: 'Pause', reset: 'Reset', pomodoroFinished: 'Pomodoro finished. Take a break!',
        priorityModalTitle: 'Change priority', priorityModalText: 'This task is priority B. Do you want to make it more or less important?', moreImportant: 'More important → A', lessImportant: 'Less important → C', close: 'Close',
        changePriority: 'Change', deleteTask: 'Delete', created: 'Created on', due: 'Due', noDueDate: 'No due date', today: 'Today', overdueLabel: 'Overdue', tomorrow: 'Tomorrow', tags: 'Tags', categoryEmpty: 'No category yet.',
        categoryExists: 'This category already exists.', enterCategory: 'Please enter a category name.', selectCategoryAlert: 'Please select a category.', enterTask: 'Please enter a task.', deleteCategoryConfirm: 'Delete category "{name}" and all its tasks?', deleteCompletedConfirm: 'Delete all completed tasks in this category?', deleteAllConfirm: 'Delete all tasks in this category?', noCompletedTasks: 'No completed task to delete.', noTasksToDelete: 'No task to delete.',
        taskAdded: 'Task added', taskDeleted: 'Task deleted', priorityUpdated: 'Priority updated', progressText: '{done} of {total} tasks completed.', noProgress: 'No tasks yet.', categoryStats: '{active} active • {completed} completed', notificationTitle: 'TaskFlow', notificationDueToday: 'Task due today: {task}', notificationOverdue: 'Overdue task: {task}'
    },
    it: {
        appLabel: 'Produttività', title: 'TaskFlow', subtitle: 'Organizza le attività con categorie, priorità, tag, scadenze e Pomodoro.', themeButton: 'Tema', languageLabel: 'Lingua',
        dashboardKicker: 'Panoramica', dashboardTitle: 'Dashboard', totalTasks: 'Totale', activeTasks: 'Attive', completedTasks: 'Completate', overdue: 'In ritardo', dueToday: 'Oggi', progressTitle: 'Progresso', priorityTitle: 'Distribuzione priorità',
        categoryKicker: 'Organizzazione', categoryTitle: 'Categorie', addCategory: 'Aggiungi', newCategoryPlaceholder: 'Nome categoria...', create: 'Crea', cancel: 'Annulla', currentCategory: 'Categoria attuale', selectCategory: 'Seleziona una categoria',
        taskKicker: 'Lista lavoro', inputTitle: 'Nuova attività', taskPlaceholder: 'Aggiungi una nuova attività...', dueDateLabel: 'Scadenza', tagsPlaceholder: 'Tag: urgente, casa, scuola, lavoro, progetto...', priorityMedium: 'Priorità B - Media', priorityHigh: 'Priorità A - Alta', priorityLow: 'Priorità C - Bassa', addTask: 'Aggiungi',
        all: 'Tutte', active: 'Attive', completed: 'Completate', emptyNoCategory: 'Crea o seleziona una categoria per iniziare.', emptyNoTasks: 'Nessuna attività in questa vista.', clearCompleted: 'Elimina completate', deleteAll: 'Elimina tutto', deleteCategory: 'Elimina categoria',
        alertsKicker: 'Promemoria', alertsTitle: 'Notifiche', alertsHelp: "Gli avvisi funzionano quando l'app è aperta nel browser.", enableAlerts: 'Attiva avvisi', alertsEnabled: 'Avvisi attivati', alertsDenied: 'Le notifiche sono bloccate dal browser.', alertsUnavailable: 'Le notifiche non sono disponibili su questo browser.',
        pomodoroKicker: 'Concentrazione', pomodoroTitle: 'Pomodoro', pomodoroHelp: 'Lavora 25 minuti su un’attività, poi fai una pausa.', start: 'Avvia', pause: 'Pausa', reset: 'Reset', pomodoroFinished: 'Pomodoro finito. Fai una pausa!',
        priorityModalTitle: 'Cambia priorità', priorityModalText: 'Questa attività è in priorità B. Vuoi renderla più o meno importante?', moreImportant: 'Più importante → A', lessImportant: 'Meno importante → C', close: 'Chiudi',
        changePriority: 'Cambia', deleteTask: 'Elimina', created: 'Creata il', due: 'Scadenza', noDueDate: 'Senza scadenza', today: 'Oggi', overdueLabel: 'In ritardo', tomorrow: 'Domani', tags: 'Tag', categoryEmpty: 'Nessuna categoria ancora.',
        categoryExists: 'Questa categoria esiste già.', enterCategory: 'Inserisci un nome categoria.', selectCategoryAlert: 'Seleziona una categoria.', enterTask: 'Inserisci un’attività.', deleteCategoryConfirm: 'Eliminare la categoria "{name}" e tutte le sue attività?', deleteCompletedConfirm: 'Eliminare tutte le attività completate di questa categoria?', deleteAllConfirm: 'Eliminare tutte le attività di questa categoria?', noCompletedTasks: 'Nessuna attività completata da eliminare.', noTasksToDelete: 'Nessuna attività da eliminare.',
        taskAdded: 'Attività aggiunta', taskDeleted: 'Attività eliminata', priorityUpdated: 'Priorità aggiornata', progressText: '{done} su {total} attività completate.', noProgress: 'Nessuna attività per ora.', categoryStats: '{active} attive • {completed} completate', notificationTitle: 'TaskFlow', notificationDueToday: 'Attività da fare oggi: {task}', notificationOverdue: 'Attività in ritardo: {task}'
    },
    de: {
        appLabel: 'Produktivität', title: 'TaskFlow', subtitle: 'Organisiere Aufgaben mit Kategorien, Prioritäten, Tags, Fristen und Pomodoro.', themeButton: 'Design', languageLabel: 'Sprache',
        dashboardKicker: 'Übersicht', dashboardTitle: 'Dashboard', totalTasks: 'Gesamt', activeTasks: 'Aktiv', completedTasks: 'Erledigt', overdue: 'Überfällig', dueToday: 'Heute', progressTitle: 'Fortschritt', priorityTitle: 'Prioritätenverteilung',
        categoryKicker: 'Organisation', categoryTitle: 'Kategorien', addCategory: 'Hinzufügen', newCategoryPlaceholder: 'Kategoriename...', create: 'Erstellen', cancel: 'Abbrechen', currentCategory: 'Aktuelle Kategorie', selectCategory: 'Kategorie auswählen',
        taskKicker: 'Arbeitsliste', inputTitle: 'Neue Aufgabe', taskPlaceholder: 'Neue Aufgabe hinzufügen...', dueDateLabel: 'Fällig am', tagsPlaceholder: 'Tags: dringend, zuhause, schule, arbeit, projekt...', priorityMedium: 'Priorität B - Mittel', priorityHigh: 'Priorität A - Hoch', priorityLow: 'Priorität C - Niedrig', addTask: 'Hinzufügen',
        all: 'Alle', active: 'Aktiv', completed: 'Erledigt', emptyNoCategory: 'Erstelle oder wähle eine Kategorie aus.', emptyNoTasks: 'Keine Aufgaben in dieser Ansicht.', clearCompleted: 'Erledigte löschen', deleteAll: 'Alle löschen', deleteCategory: 'Kategorie löschen',
        alertsKicker: 'Erinnerungen', alertsTitle: 'Benachrichtigungen', alertsHelp: 'Benachrichtigungen funktionieren, wenn die App im Browser geöffnet ist.', enableAlerts: 'Benachrichtigungen aktivieren', alertsEnabled: 'Benachrichtigungen aktiviert', alertsDenied: 'Benachrichtigungen sind vom Browser blockiert.', alertsUnavailable: 'Benachrichtigungen sind in diesem Browser nicht verfügbar.',
        pomodoroKicker: 'Fokus', pomodoroTitle: 'Pomodoro', pomodoroHelp: 'Arbeite 25 Minuten an einer Aufgabe und mache dann eine Pause.', start: 'Start', pause: 'Pause', reset: 'Reset', pomodoroFinished: 'Pomodoro beendet. Mach eine Pause!',
        priorityModalTitle: 'Priorität ändern', priorityModalText: 'Diese Aufgabe hat Priorität B. Soll sie wichtiger oder weniger wichtig werden?', moreImportant: 'Wichtiger → A', lessImportant: 'Weniger wichtig → C', close: 'Schließen',
        changePriority: 'Ändern', deleteTask: 'Löschen', created: 'Erstellt am', due: 'Fällig', noDueDate: 'Keine Frist', today: 'Heute', overdueLabel: 'Überfällig', tomorrow: 'Morgen', tags: 'Tags', categoryEmpty: 'Noch keine Kategorie.',
        categoryExists: 'Diese Kategorie existiert bereits.', enterCategory: 'Bitte gib einen Kategorienamen ein.', selectCategoryAlert: 'Bitte wähle eine Kategorie aus.', enterTask: 'Bitte gib eine Aufgabe ein.', deleteCategoryConfirm: 'Kategorie "{name}" und alle Aufgaben löschen?', deleteCompletedConfirm: 'Alle erledigten Aufgaben dieser Kategorie löschen?', deleteAllConfirm: 'Alle Aufgaben dieser Kategorie löschen?', noCompletedTasks: 'Keine erledigte Aufgabe zum Löschen.', noTasksToDelete: 'Keine Aufgabe zum Löschen.',
        taskAdded: 'Aufgabe hinzugefügt', taskDeleted: 'Aufgabe gelöscht', priorityUpdated: 'Priorität aktualisiert', progressText: '{done} von {total} Aufgaben erledigt.', noProgress: 'Noch keine Aufgaben.', categoryStats: '{active} aktiv • {completed} erledigt', notificationTitle: 'TaskFlow', notificationDueToday: 'Aufgabe heute fällig: {task}', notificationOverdue: 'Überfällige Aufgabe: {task}'
    },
    es: {
        appLabel: 'Productividad', title: 'TaskFlow', subtitle: 'Organiza tus tareas con categorías, prioridades, etiquetas, fechas límite y Pomodoro.', themeButton: 'Tema', languageLabel: 'Idioma',
        dashboardKicker: 'Vista general', dashboardTitle: 'Dashboard', totalTasks: 'Total', activeTasks: 'Activas', completedTasks: 'Completadas', overdue: 'Atrasadas', dueToday: 'Hoy', progressTitle: 'Progreso', priorityTitle: 'Distribución de prioridades',
        categoryKicker: 'Organización', categoryTitle: 'Categorías', addCategory: 'Añadir', newCategoryPlaceholder: 'Nombre de categoría...', create: 'Crear', cancel: 'Cancelar', currentCategory: 'Categoría actual', selectCategory: 'Selecciona una categoría',
        taskKicker: 'Lista de trabajo', inputTitle: 'Nueva tarea', taskPlaceholder: 'Añadir una nueva tarea...', dueDateLabel: 'Fecha límite', tagsPlaceholder: 'Etiquetas: urgente, casa, escuela, trabajo, proyecto...', priorityMedium: 'Prioridad B - Media', priorityHigh: 'Prioridad A - Alta', priorityLow: 'Prioridad C - Baja', addTask: 'Añadir',
        all: 'Todas', active: 'Activas', completed: 'Completadas', emptyNoCategory: 'Crea o selecciona una categoría para empezar.', emptyNoTasks: 'No hay tareas en esta vista.', clearCompleted: 'Eliminar completadas', deleteAll: 'Eliminar todo', deleteCategory: 'Eliminar categoría',
        alertsKicker: 'Recordatorios', alertsTitle: 'Notificaciones', alertsHelp: 'Las alertas funcionan cuando la app está abierta en el navegador.', enableAlerts: 'Activar alertas', alertsEnabled: 'Alertas activadas', alertsDenied: 'Las notificaciones están bloqueadas por el navegador.', alertsUnavailable: 'Las notificaciones no están disponibles en este navegador.',
        pomodoroKicker: 'Concentración', pomodoroTitle: 'Pomodoro', pomodoroHelp: 'Trabaja 25 minutos en una tarea y luego descansa.', start: 'Iniciar', pause: 'Pausa', reset: 'Reset', pomodoroFinished: 'Pomodoro terminado. ¡Toma un descanso!',
        priorityModalTitle: 'Cambiar prioridad', priorityModalText: 'Esta tarea tiene prioridad B. ¿Quieres hacerla más o menos importante?', moreImportant: 'Más importante → A', lessImportant: 'Menos importante → C', close: 'Cerrar',
        changePriority: 'Cambiar', deleteTask: 'Eliminar', created: 'Creada el', due: 'Límite', noDueDate: 'Sin fecha límite', today: 'Hoy', overdueLabel: 'Atrasada', tomorrow: 'Mañana', tags: 'Etiquetas', categoryEmpty: 'Todavía no hay categorías.',
        categoryExists: 'Esta categoría ya existe.', enterCategory: 'Introduce un nombre de categoría.', selectCategoryAlert: 'Selecciona una categoría.', enterTask: 'Introduce una tarea.', deleteCategoryConfirm: '¿Eliminar la categoría "{name}" y todas sus tareas?', deleteCompletedConfirm: '¿Eliminar todas las tareas completadas de esta categoría?', deleteAllConfirm: '¿Eliminar todas las tareas de esta categoría?', noCompletedTasks: 'No hay tareas completadas para eliminar.', noTasksToDelete: 'No hay tareas para eliminar.',
        taskAdded: 'Tarea añadida', taskDeleted: 'Tarea eliminada', priorityUpdated: 'Prioridad actualizada', progressText: '{done} de {total} tareas completadas.', noProgress: 'Todavía no hay tareas.', categoryStats: '{active} activas • {completed} completadas', notificationTitle: 'TaskFlow', notificationDueToday: 'Tarea para hoy: {task}', notificationOverdue: 'Tarea atrasada: {task}'
    },
    pt: {
        appLabel: 'Produtividade', title: 'TaskFlow', subtitle: 'Organize tarefas com categorias, prioridades, tags, prazos e Pomodoro.', themeButton: 'Tema', languageLabel: 'Idioma',
        dashboardKicker: 'Visão geral', dashboardTitle: 'Dashboard', totalTasks: 'Total', activeTasks: 'Ativas', completedTasks: 'Concluídas', overdue: 'Atrasadas', dueToday: 'Hoje', progressTitle: 'Progresso', priorityTitle: 'Distribuição de prioridades',
        categoryKicker: 'Organização', categoryTitle: 'Categorias', addCategory: 'Adicionar', newCategoryPlaceholder: 'Nome da categoria...', create: 'Criar', cancel: 'Cancelar', currentCategory: 'Categoria atual', selectCategory: 'Selecione uma categoria',
        taskKicker: 'Lista de trabalho', inputTitle: 'Nova tarefa', taskPlaceholder: 'Adicionar uma nova tarefa...', dueDateLabel: 'Prazo', tagsPlaceholder: 'Tags: urgente, casa, escola, trabalho, projeto...', priorityMedium: 'Prioridade B - Média', priorityHigh: 'Prioridade A - Alta', priorityLow: 'Prioridade C - Baixa', addTask: 'Adicionar',
        all: 'Todas', active: 'Ativas', completed: 'Concluídas', emptyNoCategory: 'Crie ou selecione uma categoria para começar.', emptyNoTasks: 'Nenhuma tarefa nesta vista.', clearCompleted: 'Excluir concluídas', deleteAll: 'Excluir tudo', deleteCategory: 'Excluir categoria',
        alertsKicker: 'Lembretes', alertsTitle: 'Notificações', alertsHelp: 'Os alertas funcionam quando o app está aberto no navegador.', enableAlerts: 'Ativar alertas', alertsEnabled: 'Alertas ativados', alertsDenied: 'As notificações estão bloqueadas pelo navegador.', alertsUnavailable: 'As notificações não estão disponíveis neste navegador.',
        pomodoroKicker: 'Foco', pomodoroTitle: 'Pomodoro', pomodoroHelp: 'Trabalhe 25 minutos numa tarefa e depois faça uma pausa.', start: 'Iniciar', pause: 'Pausa', reset: 'Reset', pomodoroFinished: 'Pomodoro terminado. Faça uma pausa!',
        priorityModalTitle: 'Alterar prioridade', priorityModalText: 'Esta tarefa está em prioridade B. Quer torná-la mais ou menos importante?', moreImportant: 'Mais importante → A', lessImportant: 'Menos importante → C', close: 'Fechar',
        changePriority: 'Alterar', deleteTask: 'Excluir', created: 'Criada em', due: 'Prazo', noDueDate: 'Sem prazo', today: 'Hoje', overdueLabel: 'Atrasada', tomorrow: 'Amanhã', tags: 'Tags', categoryEmpty: 'Ainda não há categorias.',
        categoryExists: 'Esta categoria já existe.', enterCategory: 'Digite um nome de categoria.', selectCategoryAlert: 'Selecione uma categoria.', enterTask: 'Digite uma tarefa.', deleteCategoryConfirm: 'Excluir a categoria "{name}" e todas as suas tarefas?', deleteCompletedConfirm: 'Excluir todas as tarefas concluídas desta categoria?', deleteAllConfirm: 'Excluir todas as tarefas desta categoria?', noCompletedTasks: 'Nenhuma tarefa concluída para excluir.', noTasksToDelete: 'Nenhuma tarefa para excluir.',
        taskAdded: 'Tarefa adicionada', taskDeleted: 'Tarefa excluída', priorityUpdated: 'Prioridade atualizada', progressText: '{done} de {total} tarefas concluídas.', noProgress: 'Ainda não há tarefas.', categoryStats: '{active} ativas • {completed} concluídas', notificationTitle: 'TaskFlow', notificationDueToday: 'Tarefa para hoje: {task}', notificationOverdue: 'Tarefa atrasada: {task}'
    },
    pl: {
        appLabel: 'Produktywność', title: 'TaskFlow', subtitle: 'Organizuj zadania z kategoriami, priorytetami, tagami, terminami i Pomodoro.', themeButton: 'Motyw', languageLabel: 'Język',
        dashboardKicker: 'Przegląd', dashboardTitle: 'Dashboard', totalTasks: 'Razem', activeTasks: 'Aktywne', completedTasks: 'Ukończone', overdue: 'Po terminie', dueToday: 'Dzisiaj', progressTitle: 'Postęp', priorityTitle: 'Podział priorytetów',
        categoryKicker: 'Organizacja', categoryTitle: 'Kategorie', addCategory: 'Dodaj', newCategoryPlaceholder: 'Nazwa kategorii...', create: 'Utwórz', cancel: 'Anuluj', currentCategory: 'Aktualna kategoria', selectCategory: 'Wybierz kategorię',
        taskKicker: 'Lista pracy', inputTitle: 'Nowe zadanie', taskPlaceholder: 'Dodaj nowe zadanie...', dueDateLabel: 'Termin', tagsPlaceholder: 'Tagi: pilne, dom, szkoła, praca, projekt...', priorityMedium: 'Priorytet B - Średni', priorityHigh: 'Priorytet A - Wysoki', priorityLow: 'Priorytet C - Niski', addTask: 'Dodaj',
        all: 'Wszystkie', active: 'Aktywne', completed: 'Ukończone', emptyNoCategory: 'Utwórz lub wybierz kategorię, aby zacząć.', emptyNoTasks: 'Brak zadań w tym widoku.', clearCompleted: 'Usuń ukończone', deleteAll: 'Usuń wszystko', deleteCategory: 'Usuń kategorię',
        alertsKicker: 'Przypomnienia', alertsTitle: 'Powiadomienia', alertsHelp: 'Alerty działają, gdy aplikacja jest otwarta w przeglądarce.', enableAlerts: 'Włącz alerty', alertsEnabled: 'Alerty włączone', alertsDenied: 'Powiadomienia są zablokowane przez przeglądarkę.', alertsUnavailable: 'Powiadomienia nie są dostępne w tej przeglądarce.',
        pomodoroKicker: 'Skupienie', pomodoroTitle: 'Pomodoro', pomodoroHelp: 'Pracuj 25 minut nad zadaniem, potem zrób przerwę.', start: 'Start', pause: 'Pauza', reset: 'Reset', pomodoroFinished: 'Pomodoro zakończone. Zrób przerwę!',
        priorityModalTitle: 'Zmień priorytet', priorityModalText: 'To zadanie ma priorytet B. Chcesz zrobić je ważniejszym czy mniej ważnym?', moreImportant: 'Ważniejsze → A', lessImportant: 'Mniej ważne → C', close: 'Zamknij',
        changePriority: 'Zmień', deleteTask: 'Usuń', created: 'Utworzono', due: 'Termin', noDueDate: 'Bez terminu', today: 'Dzisiaj', overdueLabel: 'Po terminie', tomorrow: 'Jutro', tags: 'Tagi', categoryEmpty: 'Nie ma jeszcze kategorii.',
        categoryExists: 'Ta kategoria już istnieje.', enterCategory: 'Wpisz nazwę kategorii.', selectCategoryAlert: 'Wybierz kategorię.', enterTask: 'Wpisz zadanie.', deleteCategoryConfirm: 'Usunąć kategorię "{name}" i wszystkie jej zadania?', deleteCompletedConfirm: 'Usunąć wszystkie ukończone zadania w tej kategorii?', deleteAllConfirm: 'Usunąć wszystkie zadania w tej kategorii?', noCompletedTasks: 'Brak ukończonych zadań do usunięcia.', noTasksToDelete: 'Brak zadań do usunięcia.',
        taskAdded: 'Zadanie dodane', taskDeleted: 'Zadanie usunięte', priorityUpdated: 'Priorytet zaktualizowany', progressText: 'Ukończono {done} z {total} zadań.', noProgress: 'Brak zadań.', categoryStats: '{active} aktywne • {completed} ukończone', notificationTitle: 'TaskFlow', notificationDueToday: 'Zadanie na dziś: {task}', notificationOverdue: 'Zadanie po terminie: {task}'
    }
};

Object.assign(translations.fr, {
    accountKicker: 'Compte', authTitle: 'Connexion cloud ou mode invité', guestModeText: 'Vous utilisez le mode invité. Les tâches restent dans ce navigateur.', guestMode: 'Invité', cloudMode: 'Cloud', usernameLabel: 'Utilisateur', usernamePlaceholder: 'exemple: jean', passwordLabel: 'Mot de passe', passwordPlaceholder: 'Mot de passe', login: 'Se connecter', signup: 'Créer un compte', continueGuest: 'Continuer en invité', logout: 'Se déconnecter', importGuest: 'Importer les tâches invitées', welcome: 'Bienvenue, {username}', cloudModeText: 'Connecté en mode cloud avec Supabase.', accountCreated: 'Compte créé et connecté.', loginSuccess: 'Connexion réussie.', logoutSuccess: 'Déconnexion réussie.', guestReady: 'Mode invité activé.', invalidUsername: 'Utilisateur invalide : 3 à 24 caractères, lettres, chiffres ou underscore uniquement.', invalidPassword: 'Le mot de passe doit contenir au moins 6 caractères.', authError: 'Erreur de connexion : {message}', cloudLoadError: 'Impossible de charger les données cloud.', cloudSaveError: 'Erreur lors de la sauvegarde cloud.', importDone: 'Tâches invitées importées dans le compte cloud.', importEmpty: 'Aucune tâche invitée à importer.', categorySuggestion: 'Exemples : Personnel / Travail / Projets', dueTimeLabel: 'Heure', noTime: 'Sans heure', dueDateInPast: 'Impossible de créer une tâche avec une échéance passée.', dueTodayNeedsTime: "Pour aujourd'hui, ajoutez une heure future.", dueTimeInPast: "L'heure choisie est déjà passée.", dueAt: 'Échéance', loading: 'Chargement...', deleteAccount: 'Supprimer mon compte', deleteAccountConfirm: 'Voulez-vous vraiment supprimer votre compte ? Cette action supprimera définitivement vos tâches cloud.', deleteAccountSuccess: 'Compte supprimé avec succès.', deleteAccountError: 'Erreur lors de la suppression du compte : {message}', guestImportSuccess: 'Tâches invitées importées automatiquement dans le compte cloud.', guestImportError: 'Erreur lors de l’import automatique : {message}'
});
Object.assign(translations.en, {
    accountKicker: 'Account', authTitle: 'Cloud login or guest mode', guestModeText: 'You are using guest mode. Tasks stay in this browser.', guestMode: 'Guest', cloudMode: 'Cloud', usernameLabel: 'Username', usernamePlaceholder: 'example: arthur', passwordLabel: 'Password', passwordPlaceholder: 'Password', login: 'Log in', signup: 'Create account', continueGuest: 'Continue as guest', logout: 'Log out', importGuest: 'Import guest tasks', welcome: 'Welcome, {username}', cloudModeText: 'Connected in cloud mode with Supabase.', accountCreated: 'Account created and connected.', loginSuccess: 'Logged in successfully.', logoutSuccess: 'Logged out successfully.', guestReady: 'Guest mode enabled.', invalidUsername: 'Invalid username: 3 to 24 characters, letters, numbers or underscore only.', invalidPassword: 'Password must contain at least 6 characters.', authError: 'Auth error: {message}', cloudLoadError: 'Unable to load cloud data.', cloudSaveError: 'Cloud save error.', importDone: 'Guest tasks imported into the cloud account.', importEmpty: 'No guest task to import.', categorySuggestion: 'Examples: Personal / Work / Projects', dueTimeLabel: 'Time', noTime: 'No time', dueDateInPast: 'You cannot create a task with a past deadline.', dueTodayNeedsTime: 'For today, add a future time.', dueTimeInPast: 'The selected time has already passed.', dueAt: 'Due', loading: 'Loading...', deleteAccount: 'Delete my account', deleteAccountConfirm: 'Do you really want to delete your account? This will permanently delete your cloud tasks.', deleteAccountSuccess: 'Account deleted successfully.', deleteAccountError: 'Error while deleting account: {message}', guestImportSuccess: 'Guest tasks imported automatically into your cloud account.', guestImportError: 'Automatic import error: {message}'
});
Object.assign(translations.it, {
    accountKicker: 'Account', authTitle: 'Accesso cloud o modalità ospite', guestModeText: 'Stai usando la modalità ospite. Le attività restano in questo browser.', guestMode: 'Ospite', cloudMode: 'Cloud', usernameLabel: 'Utente', usernamePlaceholder: 'esempio: giulia', passwordLabel: 'Password', passwordPlaceholder: 'Password', login: 'Accedi', signup: 'Crea account', continueGuest: 'Continua come ospite', logout: 'Esci', importGuest: 'Importa attività ospite', welcome: 'Benvenuto/a, {username}', cloudModeText: 'Connesso in modalità cloud con Supabase.', accountCreated: 'Account creato e connesso.', loginSuccess: 'Accesso riuscito.', logoutSuccess: 'Disconnessione riuscita.', guestReady: 'Modalità ospite attivata.', invalidUsername: 'Nome utente non valido: 3-24 caratteri, solo lettere, numeri o underscore.', invalidPassword: 'La password deve contenere almeno 6 caratteri.', authError: 'Errore di accesso: {message}', cloudLoadError: 'Impossibile caricare i dati cloud.', cloudSaveError: 'Errore durante il salvataggio cloud.', importDone: 'Attività ospite importate nell’account cloud.', importEmpty: 'Nessuna attività ospite da importare.', categorySuggestion: 'Esempi: Personale / Lavoro / Progetti', dueTimeLabel: 'Ora', noTime: 'Senza ora', dueDateInPast: 'Non puoi creare un’attività con scadenza passata.', dueTodayNeedsTime: 'Per oggi, aggiungi un orario futuro.', dueTimeInPast: 'L’orario scelto è già passato.', dueAt: 'Scadenza', loading: 'Caricamento...', deleteAccount: 'Elimina il mio account', deleteAccountConfirm: 'Vuoi davvero eliminare il tuo account? Questa azione eliminerà definitivamente le attività cloud.', deleteAccountSuccess: 'Account eliminato con successo.', deleteAccountError: 'Errore durante l’eliminazione dell’account: {message}', guestImportSuccess: 'Attività ospite importate automaticamente nell’account cloud.', guestImportError: 'Errore di importazione automatica: {message}'
});
Object.assign(translations.de, {
    accountKicker: 'Konto', authTitle: 'Cloud-Login oder Gastmodus', guestModeText: 'Du nutzt den Gastmodus. Aufgaben bleiben in diesem Browser.', guestMode: 'Gast', cloudMode: 'Cloud', usernameLabel: 'Benutzername', usernamePlaceholder: 'Beispiel: max', passwordLabel: 'Passwort', passwordPlaceholder: 'Passwort', login: 'Anmelden', signup: 'Konto erstellen', continueGuest: 'Als Gast fortfahren', logout: 'Abmelden', importGuest: 'Gastaufgaben importieren', welcome: 'Willkommen, {username}', cloudModeText: 'Verbunden im Cloud-Modus mit Supabase.', accountCreated: 'Konto erstellt und verbunden.', loginSuccess: 'Erfolgreich angemeldet.', logoutSuccess: 'Erfolgreich abgemeldet.', guestReady: 'Gastmodus aktiviert.', invalidUsername: 'Ungültiger Benutzername: 3 bis 24 Zeichen, nur Buchstaben, Zahlen oder Unterstrich.', invalidPassword: 'Das Passwort muss mindestens 6 Zeichen haben.', authError: 'Anmeldefehler: {message}', cloudLoadError: 'Cloud-Daten konnten nicht geladen werden.', cloudSaveError: 'Fehler beim Speichern in der Cloud.', importDone: 'Gastaufgaben wurden in das Cloud-Konto importiert.', importEmpty: 'Keine Gastaufgaben zum Importieren.', categorySuggestion: 'Beispiele: Persönlich / Arbeit / Projekte', dueTimeLabel: 'Uhrzeit', noTime: 'Ohne Uhrzeit', dueDateInPast: 'Du kannst keine Aufgabe mit vergangener Frist erstellen.', dueTodayNeedsTime: 'Für heute bitte eine zukünftige Uhrzeit hinzufügen.', dueTimeInPast: 'Die gewählte Uhrzeit ist bereits vorbei.', dueAt: 'Fällig', loading: 'Laden...', deleteAccount: 'Mein Konto löschen', deleteAccountConfirm: 'Möchtest du dein Konto wirklich löschen? Dadurch werden deine Cloud-Aufgaben dauerhaft gelöscht.', deleteAccountSuccess: 'Konto erfolgreich gelöscht.', deleteAccountError: 'Fehler beim Löschen des Kontos: {message}', guestImportSuccess: 'Gastaufgaben wurden automatisch in das Cloud-Konto importiert.', guestImportError: 'Fehler beim automatischen Import: {message}'
});
Object.assign(translations.es, {
    accountKicker: 'Cuenta', authTitle: 'Inicio cloud o modo invitado', guestModeText: 'Usas el modo invitado. Las tareas quedan en este navegador.', guestMode: 'Invitado', cloudMode: 'Cloud', usernameLabel: 'Usuario', usernamePlaceholder: 'ejemplo: lucia', passwordLabel: 'Contraseña', passwordPlaceholder: 'Contraseña', login: 'Iniciar sesión', signup: 'Crear cuenta', continueGuest: 'Continuar como invitado', logout: 'Cerrar sesión', importGuest: 'Importar tareas invitadas', welcome: 'Bienvenido/a, {username}', cloudModeText: 'Conectado en modo cloud con Supabase.', accountCreated: 'Cuenta creada y conectada.', loginSuccess: 'Sesión iniciada.', logoutSuccess: 'Sesión cerrada.', guestReady: 'Modo invitado activado.', invalidUsername: 'Usuario inválido: 3 a 24 caracteres, solo letras, números o guion bajo.', invalidPassword: 'La contraseña debe tener al menos 6 caracteres.', authError: 'Error de autenticación: {message}', cloudLoadError: 'No se pueden cargar los datos cloud.', cloudSaveError: 'Error al guardar en cloud.', importDone: 'Tareas invitadas importadas a la cuenta cloud.', importEmpty: 'No hay tareas invitadas para importar.', categorySuggestion: 'Ejemplos: Personal / Trabajo / Proyectos', dueTimeLabel: 'Hora', noTime: 'Sin hora', dueDateInPast: 'No puedes crear una tarea con fecha pasada.', dueTodayNeedsTime: 'Para hoy, añade una hora futura.', dueTimeInPast: 'La hora elegida ya pasó.', dueAt: 'Vence', loading: 'Cargando...', deleteAccount: 'Eliminar mi cuenta', deleteAccountConfirm: '¿Seguro que quieres eliminar tu cuenta? Esto eliminará definitivamente tus tareas cloud.', deleteAccountSuccess: 'Cuenta eliminada correctamente.', deleteAccountError: 'Error al eliminar la cuenta: {message}', guestImportSuccess: 'Tareas invitadas importadas automáticamente a la cuenta cloud.', guestImportError: 'Error de importación automática: {message}'
});
Object.assign(translations.pt, {
    accountKicker: 'Conta', authTitle: 'Login cloud ou modo convidado', guestModeText: 'Você está no modo convidado. As tarefas ficam neste navegador.', guestMode: 'Convidado', cloudMode: 'Cloud', usernameLabel: 'Usuário', usernamePlaceholder: 'exemplo: pedro', passwordLabel: 'Senha', passwordPlaceholder: 'Senha', login: 'Entrar', signup: 'Criar conta', continueGuest: 'Continuar como convidado', logout: 'Sair', importGuest: 'Importar tarefas convidadas', welcome: 'Bem-vindo/a, {username}', cloudModeText: 'Conectado em modo cloud com Supabase.', accountCreated: 'Conta criada e conectada.', loginSuccess: 'Login realizado.', logoutSuccess: 'Sessão encerrada.', guestReady: 'Modo convidado ativado.', invalidUsername: 'Usuário inválido: 3 a 24 caracteres, apenas letras, números ou underscore.', invalidPassword: 'A senha deve ter pelo menos 6 caracteres.', authError: 'Erro de autenticação: {message}', cloudLoadError: 'Não foi possível carregar dados cloud.', cloudSaveError: 'Erro ao salvar no cloud.', importDone: 'Tarefas convidadas importadas para a conta cloud.', importEmpty: 'Nenhuma tarefa convidada para importar.', categorySuggestion: 'Exemplos: Pessoal / Trabalho / Projetos', dueTimeLabel: 'Hora', noTime: 'Sem hora', dueDateInPast: 'Não é possível criar uma tarefa com prazo passado.', dueTodayNeedsTime: 'Para hoje, adicione uma hora futura.', dueTimeInPast: 'A hora escolhida já passou.', dueAt: 'Prazo', loading: 'Carregando...', deleteAccount: 'Excluir minha conta', deleteAccountConfirm: 'Tem certeza de que deseja excluir sua conta? Isso excluirá permanentemente suas tarefas cloud.', deleteAccountSuccess: 'Conta excluída com sucesso.', deleteAccountError: 'Erro ao excluir a conta: {message}', guestImportSuccess: 'Tarefas convidadas importadas automaticamente para a conta cloud.', guestImportError: 'Erro de importação automática: {message}'
});
Object.assign(translations.pl, {
    accountKicker: 'Konto', authTitle: 'Logowanie cloud albo tryb gościa', guestModeText: 'Używasz trybu gościa. Zadania zostają w tej przeglądarce.', guestMode: 'Gość', cloudMode: 'Cloud', usernameLabel: 'Użytkownik', usernamePlaceholder: 'przykład: adam', passwordLabel: 'Hasło', passwordPlaceholder: 'Hasło', login: 'Zaloguj', signup: 'Utwórz konto', continueGuest: 'Kontynuuj jako gość', logout: 'Wyloguj', importGuest: 'Importuj zadania gościa', welcome: 'Witaj, {username}', cloudModeText: 'Połączono w trybie cloud z Supabase.', accountCreated: 'Konto utworzone i połączone.', loginSuccess: 'Zalogowano pomyślnie.', logoutSuccess: 'Wylogowano pomyślnie.', guestReady: 'Tryb gościa włączony.', invalidUsername: 'Nieprawidłowy użytkownik: 3-24 znaki, tylko litery, cyfry lub podkreślenie.', invalidPassword: 'Hasło musi mieć co najmniej 6 znaków.', authError: 'Błąd logowania: {message}', cloudLoadError: 'Nie można załadować danych cloud.', cloudSaveError: 'Błąd zapisu w cloud.', importDone: 'Zadania gościa zaimportowane do konta cloud.', importEmpty: 'Brak zadań gościa do importu.', categorySuggestion: 'Przykłady: Osobiste / Praca / Projekty', dueTimeLabel: 'Godzina', noTime: 'Bez godziny', dueDateInPast: 'Nie można utworzyć zadania z minionym terminem.', dueTodayNeedsTime: 'Dla dzisiaj dodaj przyszłą godzinę.', dueTimeInPast: 'Wybrana godzina już minęła.', dueAt: 'Termin', loading: 'Ładowanie...', deleteAccount: 'Usuń moje konto', deleteAccountConfirm: 'Czy na pewno chcesz usunąć konto? To trwale usunie twoje zadania w chmurze.', deleteAccountSuccess: 'Konto usunięte pomyślnie.', deleteAccountError: 'Błąd podczas usuwania konta: {message}', guestImportSuccess: 'Zadania gościa automatycznie zaimportowane do konta cloud.', guestImportError: 'Błąd automatycznego importu: {message}'
});

const storageKeys = {
    categories: 'todo-categories',
    tasks: 'todo-tasks',
    language: 'todo-language',
    theme: 'todo-theme',
    notifications: 'todo-notifications-enabled',
    notified: 'todo-notified-keys'
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

const authElements = {
    card: document.getElementById('authCard'),
    forms: document.getElementById('authForms'),
    userPanel: document.getElementById('userPanel'),
    status: document.getElementById('authStatus'),
    storageBadge: document.getElementById('storageBadge'),
    usernameInput: document.getElementById('usernameInput'),
    passwordInput: document.getElementById('passwordInput'),
    loginBtn: document.getElementById('loginBtn'),
    signupBtn: document.getElementById('signupBtn'),
    guestBtn: document.getElementById('guestBtn'),
    logoutBtn: document.getElementById('logoutBtn'),
    deleteAccountBtn: document.getElementById('deleteAccountBtn'),
    welcomeText: document.getElementById('welcomeText')
};

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
let categoryMap = new Map();
let currentCategory = null;
let currentFilter = 'all';
let currentLanguage = 'fr';
let currentTheme = 'dark';
let taskWaitingPriorityChoice = null;
let notificationsEnabled = false;
let timerSeconds = 25 * 60;
let timerInterval = null;
let supabaseClient = null;
let currentUser = null;
let currentProfile = null;
let currentMode = 'guest';
let authInitialized = false;

document.addEventListener('DOMContentLoaded', async () => {
    loadSettings();
    initializeSupabaseClient();
    populateDueTimes();
    translateUI();
    bindEvents();
    updateTimerDisplay();
    await initializeAuth();
    checkDueNotifications();
    setInterval(checkDueNotifications, 60 * 1000);
});

function initializeSupabaseClient() {
    const config = window.TODO_APP_SUPABASE_CONFIG;
    const libraryAvailable = window.supabase && typeof window.supabase.createClient === 'function';

    if (!config || !config.url || !config.publishableKey || !libraryAvailable) {
        supabaseClient = null;
        return;
    }

    supabaseClient = window.supabase.createClient(config.url, config.publishableKey, {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: false
        }
    });
}

async function initializeAuth() {
    authInitialized = true;

    if (!supabaseClient) {
        currentMode = 'guest';
        loadLocalData();
        showAuthGate();
        updateAuthUI();
        renderAll();
        return;
    }

    const { data, error } = await supabaseClient.auth.getSession();
    if (error) console.warn('Session error', error);

    if (data && data.session && data.session.user) {
        await setCloudUser(data.session.user);
    } else {
        currentMode = 'guest';
        loadLocalData();
        showAuthGate();
        updateAuthUI();
        renderAll();
    }

    supabaseClient.auth.onAuthStateChange(async (event, session) => {
        if (!authInitialized) return;
        if (event === 'SIGNED_IN' && session && session.user) {
            await setCloudUser(session.user);
        }
        if (event === 'SIGNED_OUT') {
            currentUser = null;
            currentProfile = null;
            currentMode = 'guest';
            loadLocalData();
            showAuthGate();
            updateAuthUI();
            renderAll();
        }
    });
}

async function setCloudUser(user) {
    currentUser = user;
    currentMode = 'cloud';
    await loadProfile();
    await autoImportGuestData();
    await loadCloudData();
    showMainApp();
    updateAuthUI();
    renderAll();
}

function showMainApp() {
    document.body.classList.remove('auth-gate');
}

function showAuthGate() {
    document.body.classList.add('auth-gate');
}

function bindEvents() {
    categoryBtnAdd.addEventListener('click', () => {
        newCategoryForm.hidden = false;
        newCategoryInput.focus();
    });

    saveCategoryBtn.addEventListener('click', () => addCategory());
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

    addBtn.addEventListener('click', () => addTask());
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

    clearBtn.addEventListener('click', () => clearCompleted());
    deleteAllBtn.addEventListener('click', () => deleteAll());
    deleteCategoryBtn.addEventListener('click', () => deleteCurrentCategory());

    languageSelect.addEventListener('change', (event) => {
        currentLanguage = event.target.value;
        localStorage.setItem(storageKeys.language, currentLanguage);
        document.documentElement.lang = currentLanguage;
        translateUI();
        updateAuthUI();
        populateDueTimes();
        renderAll();
    });

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem(storageKeys.theme, currentTheme);
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

    authElements.loginBtn.addEventListener('click', () => loginWithUsername());
    authElements.signupBtn.addEventListener('click', () => signUpWithUsername());
    authElements.guestBtn.addEventListener('click', useGuestMode);
    authElements.logoutBtn.addEventListener('click', logout);
    authElements.deleteAccountBtn.addEventListener('click', deleteAccount);
    authElements.passwordInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') loginWithUsername();
    });
}

function t(key, values = {}) {
    const dictionary = translations[currentLanguage] || translations.fr;
    let text = dictionary[key] || translations.fr[key] || key;
    Object.entries(values).forEach(([name, value]) => {
        text = text.replaceAll(`{${name}}`, String(value));
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
    currentLanguage = localStorage.getItem(storageKeys.language) || 'fr';
    currentTheme = localStorage.getItem(storageKeys.theme) || 'dark';
    notificationsEnabled = localStorage.getItem(storageKeys.notifications) === 'true';
    applyTheme();
}

function applyTheme() {
    document.documentElement.dataset.theme = currentTheme;
    themeIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
}

function sanitizeUsername(rawValue) {
    return rawValue.trim().toLowerCase();
}

function isValidUsername(username) {
    return /^[a-zA-Z0-9_]{3,24}$/.test(username);
}

function usernameToEmail(username) {
    return `${username}@taskflow.local`;
}

async function signUpWithUsername() {
    if (!supabaseClient) {
        showToast(t('cloudLoadError'));
        return;
    }

    const username = sanitizeUsername(authElements.usernameInput.value);
    const password = authElements.passwordInput.value;

    if (!isValidUsername(username)) {
        showToast(t('invalidUsername'));
        return;
    }
    if (password.length < 6) {
        showToast(t('invalidPassword'));
        return;
    }

    setAuthLoading(true);
    const { data, error } = await supabaseClient.auth.signUp({
        email: usernameToEmail(username),
        password,
        options: {
            data: {
                username,
                display_name: username
            }
        }
    });
    setAuthLoading(false);

    if (error) {
        showToast(t('authError', { message: error.message }));
        return;
    }

    authElements.passwordInput.value = '';
    if (data && data.user) {
        await setCloudUser(data.user);
    }
    showToast(t('accountCreated'));
}

async function loginWithUsername() {
    if (!supabaseClient) {
        showToast(t('cloudLoadError'));
        return;
    }

    const username = sanitizeUsername(authElements.usernameInput.value);
    const password = authElements.passwordInput.value;

    if (!isValidUsername(username)) {
        showToast(t('invalidUsername'));
        return;
    }
    if (password.length < 6) {
        showToast(t('invalidPassword'));
        return;
    }

    setAuthLoading(true);
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: usernameToEmail(username),
        password
    });
    setAuthLoading(false);

    if (error) {
        showToast(t('authError', { message: error.message }));
        return;
    }

    authElements.passwordInput.value = '';
    if (data && data.user) {
        await setCloudUser(data.user);
    }
    showToast(t('loginSuccess'));
}

async function logout() {
    if (supabaseClient) {
        await supabaseClient.auth.signOut();
    }

    currentUser = null;
    currentProfile = null;
    currentMode = 'guest';

    loadLocalData();
    showAuthGate();
    updateAuthUI();
    renderAll();
    showToast(t('logoutSuccess'));
}

function useGuestMode() {
    currentMode = 'guest';
    currentUser = null;
    currentProfile = null;
    loadLocalData();
    showMainApp();
    updateAuthUI();
    renderAll();
    showToast(t('guestReady'));
}

function setAuthLoading(isLoading) {
    [authElements.loginBtn, authElements.signupBtn, authElements.guestBtn].forEach((button) => {
        button.disabled = isLoading;
    });
    if (isLoading) showToast(t('loading'));
}

async function loadProfile() {
    if (!isCloudMode()) return;

    const { data, error } = await supabaseClient
        .from('profiles')
        .select('username, display_name')
        .eq('id', currentUser.id)
        .maybeSingle();

    if (error) {
        console.warn('Profile load error', error);
    }

    currentProfile = data || {
        username: currentUser.user_metadata?.username || currentUser.email?.split('@')[0] || 'user',
        display_name: currentUser.user_metadata?.display_name || currentUser.user_metadata?.username || 'user'
    };
}

function updateAuthUI() {
    const connected = isCloudMode();
    authElements.forms.hidden = connected;
    authElements.userPanel.hidden = !connected;
    authElements.storageBadge.classList.toggle('guest', !connected);
    authElements.storageBadge.classList.toggle('cloud', connected);
    authElements.storageBadge.textContent = connected ? t('cloudMode') : t('guestMode');

    if (connected) {
        const username = currentProfile?.display_name || currentProfile?.username || currentUser?.email?.split('@')[0] || 'user';
        authElements.status.textContent = t('cloudModeText');
        authElements.welcomeText.textContent = t('welcome', { username });
    } else {
        authElements.status.textContent = t('guestModeText');
    }
}

function isCloudMode() {
    return currentMode === 'cloud' && Boolean(currentUser) && Boolean(supabaseClient);
}

function loadLocalData() {
    categoryMap = new Map();
    categories = readJson(storageKeys.categories, []).map(sanitizeText).filter(Boolean).slice(0, 100);
    tasks = readJson(storageKeys.tasks, []).map(normalizeTask);
}

async function loadCloudData() {
    if (!isCloudMode()) return;

    const { data: categoryRows, error: categoryError } = await supabaseClient
        .from('categories')
        .select('id, name, created_at')
        .order('created_at', { ascending: true });

    if (categoryError) {
        showToast(t('cloudLoadError'));
        console.error(categoryError);
        categories = [];
        tasks = [];
        return;
    }

    categoryMap = new Map();
    categories = (categoryRows || []).map((row) => {
        categoryMap.set(row.name, row.id);
        return row.name;
    });

    const { data: taskRows, error: taskError } = await supabaseClient
        .from('tasks')
        .select('id, text, priority, completed, tags, due_date, due_time, created_at, category_id')
        .order('created_at', { ascending: false });

    if (taskError) {
        showToast(t('cloudLoadError'));
        console.error(taskError);
        tasks = [];
        return;
    }

    const categoryNameById = new Map((categoryRows || []).map((row) => [row.id, row.name]));
    tasks = (taskRows || []).map((row) => normalizeTask({
        id: row.id,
        text: row.text,
        priority: row.priority,
        completed: row.completed,
        category: categoryNameById.get(row.category_id) || '',
        tags: row.tags || [],
        dueDate: row.due_date || '',
        dueTime: normalizeTimeValue(row.due_time),
        createdAt: row.created_at ? new Date(row.created_at).toLocaleDateString('fr-FR') : new Date().toLocaleDateString('fr-FR')
    })).filter((task) => task.category);
}

function saveLocalData() {
    localStorage.setItem(storageKeys.categories, JSON.stringify(categories));
    localStorage.setItem(storageKeys.tasks, JSON.stringify(tasks));
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
        text: sanitizeText(task.text || '').slice(0, 160),
        priority: ['A', 'B', 'C'].includes(task.priority) ? task.priority : 'B',
        completed: Boolean(task.completed),
        category: sanitizeText(task.category || '').slice(0, 40),
        createdAt: task.createdAt || new Date().toLocaleDateString('fr-FR'),
        dueDate: task.dueDate || '',
        dueTime: normalizeTimeValue(task.dueTime || task.due_time || ''),
        tags: Array.isArray(task.tags) ? task.tags.map(sanitizeText).filter(Boolean).slice(0, 10) : []
    };
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
    updateAuthUI();
}

async function addCategory() {
    const categoryName = sanitizeText(newCategoryInput.value.trim()).slice(0, 40);

    if (!categoryName) {
        showToast(t('enterCategory'));
        return;
    }

    const exists = categories.some((category) => category.toLowerCase() === categoryName.toLowerCase());
    if (exists) {
        showToast(t('categoryExists'));
        return;
    }

    if (isCloudMode()) {
        const { data, error } = await supabaseClient
            .from('categories')
            .insert({ user_id: currentUser.id, name: categoryName })
            .select('id, name')
            .single();

        if (error) {
            showToast(t('cloudSaveError'));
            console.error(error);
            return;
        }

        categoryMap.set(data.name, data.id);
    }

    categories.push(categoryName);
    currentCategory = categoryName;
    newCategoryInput.value = '';
    newCategoryForm.hidden = true;
    if (!isCloudMode()) saveLocalData();
    renderAll();
}

async function deleteCategory(categoryName) {
    if (!confirm(t('deleteCategoryConfirm', { name: categoryName }))) return;

    if (isCloudMode()) {
        const categoryId = categoryMap.get(categoryName);
        if (categoryId) {
            const deleteTasks = await supabaseClient.from('tasks').delete().eq('category_id', categoryId).eq('user_id', currentUser.id);
            if (deleteTasks.error) {
                showToast(t('cloudSaveError'));
                console.error(deleteTasks.error);
                return;
            }
            const deleteCategoryResult = await supabaseClient.from('categories').delete().eq('id', categoryId).eq('user_id', currentUser.id);
            if (deleteCategoryResult.error) {
                showToast(t('cloudSaveError'));
                console.error(deleteCategoryResult.error);
                return;
            }
        }
    }

    categories = categories.filter((category) => category !== categoryName);
    tasks = tasks.filter((task) => task.category !== categoryName);
    categoryMap.delete(categoryName);

    if (currentCategory === categoryName) currentCategory = null;
    if (!isCloudMode()) saveLocalData();
    renderAll();
}

function renderCategories() {
    categoriesList.innerHTML = '';

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

    categoryDropdown.innerHTML = '';
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

async function addTask() {
    if (!currentCategory) {
        showToast(t('selectCategoryAlert'));
        return;
    }

    const taskText = sanitizeText(taskInput.value.trim()).slice(0, 160);
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

    const task = {
        id: createId(),
        text: taskText,
        priority: prioritySelect.value,
        completed: false,
        category: currentCategory,
        createdAt: new Date().toLocaleDateString('fr-FR'),
        dueDate,
        dueTime,
        tags: parseTags(tagsInput.value)
    };

    if (isCloudMode()) {
        const categoryId = categoryMap.get(currentCategory);
        if (!categoryId) {
            showToast(t('selectCategoryAlert'));
            return;
        }

        const { data, error } = await supabaseClient
            .from('tasks')
            .insert({
                user_id: currentUser.id,
                category_id: categoryId,
                text: task.text,
                priority: task.priority,
                completed: task.completed,
                tags: task.tags,
                due_date: task.dueDate || null,
                due_time: task.dueTime || null
            })
            .select('id, created_at')
            .single();

        if (error) {
            showToast(t('cloudSaveError'));
            console.error(error);
            return;
        }

        task.id = data.id;
        task.createdAt = data.created_at ? new Date(data.created_at).toLocaleDateString('fr-FR') : task.createdAt;
    }

    tasks.unshift(task);
    taskInput.value = '';
    dueDateInput.value = '';
    dueTimeInput.value = '';
    tagsInput.value = '';
    prioritySelect.value = 'B';
    taskInput.focus();

    if (!isCloudMode()) saveLocalData();
    renderAll();
    showToast(t('taskAdded'));
    checkDueNotifications();
}

function parseTags(value) {
    return value
        .split(',')
        .map((tag) => sanitizeText(tag.trim()).slice(0, 24))
        .filter(Boolean)
        .slice(0, 10);
}

async function deleteTask(id) {
    const task = tasks.find((item) => item.id === id);
    if (!task) return;

    if (isCloudMode()) {
        const { error } = await supabaseClient.from('tasks').delete().eq('id', id).eq('user_id', currentUser.id);
        if (error) {
            showToast(t('cloudSaveError'));
            console.error(error);
            return;
        }
    }

    tasks = tasks.filter((item) => item.id !== id);
    if (!isCloudMode()) saveLocalData();
    renderAll();
    showToast(t('taskDeleted'));
}

async function toggleTask(id) {
    const task = tasks.find((item) => item.id === id);
    if (!task) return;

    const nextCompleted = !task.completed;
    if (isCloudMode()) {
        const { error } = await supabaseClient.from('tasks').update({ completed: nextCompleted }).eq('id', id).eq('user_id', currentUser.id);
        if (error) {
            showToast(t('cloudSaveError'));
            console.error(error);
            return;
        }
    }

    task.completed = nextCompleted;
    if (!isCloudMode()) saveLocalData();
    renderAll();
}

async function changePriority(id) {
    const task = tasks.find((item) => item.id === id);
    if (!task) return;

    if (task.priority === 'C') {
        await updateTaskPriority(task, 'B');
        return;
    }

    if (task.priority === 'A') {
        await updateTaskPriority(task, 'B');
        return;
    }

    taskWaitingPriorityChoice = id;
    openPriorityChoiceModal();
}

async function updateTaskPriority(task, priority) {
    if (isCloudMode()) {
        const { error } = await supabaseClient.from('tasks').update({ priority }).eq('id', task.id).eq('user_id', currentUser.id);
        if (error) {
            showToast(t('cloudSaveError'));
            console.error(error);
            return;
        }
    }

    task.priority = priority;
    if (!isCloudMode()) saveLocalData();
    renderAll();
    showToast(t('priorityUpdated'));
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

async function setPriorityFromModal(priority) {
    if (!taskWaitingPriorityChoice) return;
    const task = tasks.find((item) => item.id === taskWaitingPriorityChoice);
    if (task) await updateTaskPriority(task, priority);
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
    taskList.innerHTML = '';

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

    const aDue = getDueComparable(a);
    const bDue = getDueComparable(b);
    if (aDue && bDue) return aDue.localeCompare(bDue);
    if (aDue) return -1;
    if (bDue) return 1;
    return 0;
}

function getDueComparable(task) {
    if (!task.dueDate) return '';
    return `${task.dueDate}T${task.dueTime || '23:59'}`;
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
    const formatted = formatDateTime(dueDate, dueTime);

    if (!completed && isDeadlinePast(dueDate, dueTime)) return { label: `${t('overdueLabel')} · ${formatted}`, className: 'due-overdue' };
    if (!completed && dueDate === today) return { label: `${t('today')} · ${formatted}`, className: 'due-today' };
    if (dueDate === tomorrow) return { label: `${t('tomorrow')} · ${formatted}`, className: '' };
    return { label: `${t('dueAt')} · ${formatted}`, className: '' };
}

function formatDateTime(isoDate, time = '') {
    if (!isoDate) return '';
    const formattedDate = new Date(`${isoDate}T00:00:00`).toLocaleDateString(currentLanguage, {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
    return time ? `${formattedDate} ${time}` : formattedDate;
}

function validateDueDateTime(dueDate, dueTime) {
    if (!dueDate) return { valid: true };

    const today = getTodayIso();
    if (dueDate < today) return { valid: false, messageKey: 'dueDateInPast' };
    if (dueDate > today) return { valid: true };
    if (!dueTime) return { valid: false, messageKey: 'dueTodayNeedsTime' };
    if (isDeadlinePast(dueDate, dueTime)) return { valid: false, messageKey: 'dueTimeInPast' };
    return { valid: true };
}

function isDeadlinePast(dueDate, dueTime) {
    if (!dueDate) return false;
    if (!dueTime) return dueDate < getTodayIso();
    const deadline = new Date(`${dueDate}T${dueTime}:00`);
    return deadline.getTime() <= Date.now();
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

function populateDueTimes() {
    const previousValue = dueTimeInput.value;
    dueTimeInput.innerHTML = '';

    const emptyOption = document.createElement('option');
    emptyOption.value = '';
    emptyOption.textContent = t('noTime');
    dueTimeInput.appendChild(emptyOption);

    for (let hour = 0; hour < 24; hour += 1) {
        for (let minute = 0; minute < 60; minute += 15) {
            const value = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            dueTimeInput.appendChild(option);
        }
    }

    dueTimeInput.value = previousValue || '';
}

async function clearCompleted() {
    if (!currentCategory) return;

    const categoryId = categoryMap.get(currentCategory);
    const hasCompleted = tasks.some((task) => task.category === currentCategory && task.completed);
    if (!hasCompleted) {
        showToast(t('noCompletedTasks'));
        return;
    }
    if (!confirm(t('deleteCompletedConfirm'))) return;

    if (isCloudMode() && categoryId) {
        const { error } = await supabaseClient.from('tasks').delete().eq('user_id', currentUser.id).eq('category_id', categoryId).eq('completed', true);
        if (error) {
            showToast(t('cloudSaveError'));
            console.error(error);
            return;
        }
    }

    tasks = tasks.filter((task) => !(task.category === currentCategory && task.completed));
    if (!isCloudMode()) saveLocalData();
    renderAll();
}

async function deleteAll() {
    if (!currentCategory) return;

    const categoryId = categoryMap.get(currentCategory);
    const hasTasks = tasks.some((task) => task.category === currentCategory);
    if (!hasTasks) {
        showToast(t('noTasksToDelete'));
        return;
    }
    if (!confirm(t('deleteAllConfirm'))) return;

    if (isCloudMode() && categoryId) {
        const { error } = await supabaseClient.from('tasks').delete().eq('user_id', currentUser.id).eq('category_id', categoryId);
        if (error) {
            showToast(t('cloudSaveError'));
            console.error(error);
            return;
        }
    }

    tasks = tasks.filter((task) => task.category !== currentCategory);
    if (!isCloudMode()) saveLocalData();
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
    const overdue = tasks.filter((task) => task.dueDate && isDeadlinePast(task.dueDate, task.dueTime) && !task.completed).length;
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

    // La répartition A/B/C ne compte que les tâches actives.
    // Une tâche terminée reste dans Total et Terminées, mais disparaît des priorités.
    const activeTasks = tasks.filter((task) => !task.completed);
    const priorityCounts = {
        A: activeTasks.filter((task) => task.priority === 'A').length,
        B: activeTasks.filter((task) => task.priority === 'B').length,
        C: activeTasks.filter((task) => task.priority === 'C').length
    };

    dashboardElements.priorityACount.textContent = priorityCounts.A;
    dashboardElements.priorityBCount.textContent = priorityCounts.B;
    dashboardElements.priorityCCount.textContent = priorityCounts.C;
    dashboardElements.priorityABar.style.width = `${getBarWidth(priorityCounts.A, active)}%`;
    dashboardElements.priorityBBar.style.width = `${getBarWidth(priorityCounts.B, active)}%`;
    dashboardElements.priorityCBar.style.width = `${getBarWidth(priorityCounts.C, active)}%`;
}

function getBarWidth(value, total) {
    if (total === 0) return 0;
    return Math.max(8, Math.round((value / total) * 100));
}

async function autoImportGuestData() {
    if (!isCloudMode()) return;

    const guestCategories = readJson(storageKeys.categories, []).map(sanitizeText).filter(Boolean);
    const guestTasks = readJson(storageKeys.tasks, []).map(normalizeTask).filter((task) => task.text && task.category);

    if (guestCategories.length === 0 && guestTasks.length === 0) return;

    try {
        const { data: existingCategories, error: loadCategoriesError } = await supabaseClient
            .from('categories')
            .select('id, name')
            .eq('user_id', currentUser.id);

        if (loadCategoriesError) throw loadCategoriesError;

        const nextCategoryMap = new Map();
        (existingCategories || []).forEach((category) => {
            nextCategoryMap.set(category.name.toLowerCase(), category);
        });

        const categoryNames = [...new Set([...guestCategories, ...guestTasks.map((task) => task.category)].filter(Boolean))];

        for (const name of categoryNames) {
            const cleanName = sanitizeText(name).slice(0, 40);
            if (!cleanName) continue;

            const key = cleanName.toLowerCase();
            if (nextCategoryMap.has(key)) continue;

            const { data, error } = await supabaseClient
                .from('categories')
                .insert({ user_id: currentUser.id, name: cleanName })
                .select('id, name')
                .single();

            if (error) throw error;
            nextCategoryMap.set(data.name.toLowerCase(), data);
        }

        const rows = guestTasks
            .map((task) => {
                const category = nextCategoryMap.get(task.category.toLowerCase());
                if (!category) return null;

                return {
                    user_id: currentUser.id,
                    category_id: category.id,
                    text: sanitizeText(task.text).slice(0, 160),
                    priority: ['A', 'B', 'C'].includes(task.priority) ? task.priority : 'B',
                    completed: Boolean(task.completed),
                    tags: Array.isArray(task.tags)
                        ? task.tags.map((tag) => sanitizeText(tag).slice(0, 24)).filter(Boolean).slice(0, 10)
                        : [],
                    due_date: task.dueDate || null,
                    due_time: task.dueTime || null
                };
            })
            .filter(Boolean);

        if (rows.length) {
            const { error } = await supabaseClient.from('tasks').insert(rows);
            if (error) throw error;
        }

        localStorage.removeItem(storageKeys.categories);
        localStorage.removeItem(storageKeys.tasks);
        showToast(t('guestImportSuccess'));
    } catch (error) {
        console.error(error);
        showToast(t('guestImportError', { message: error.message }));
    }
}

async function deleteAccount() {
    if (!isCloudMode()) return;

    const confirmed = confirm(t('deleteAccountConfirm'));
    if (!confirmed) return;

    try {
        const { error } = await supabaseClient.rpc('delete_my_account');
        if (error) throw error;

        currentUser = null;
        currentProfile = null;
        currentMode = 'guest';
        categories = [];
        tasks = [];
        categoryMap = new Map();
        currentCategory = null;
        currentFilter = 'all';

        localStorage.removeItem(storageKeys.categories);
        localStorage.removeItem(storageKeys.tasks);

        if (supabaseClient) {
            await supabaseClient.auth.signOut();
        }

        showAuthGate();
        updateAuthUI();
        renderAll();
        showToast(t('deleteAccountSuccess'));
    } catch (error) {
        console.error(error);
        showToast(t('deleteAccountError', { message: error.message }));
    }
}

async function enableNotifications() {
    if (!('Notification' in window)) {
        showToast(t('alertsUnavailable'));
        return;
    }

    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
        notificationsEnabled = true;
        localStorage.setItem(storageKeys.notifications, 'true');
        showToast(t('alertsEnabled'));
        checkDueNotifications(true);
    } else {
        showToast(t('alertsDenied'));
    }
}

function checkDueNotifications(force = false) {
    if (!notificationsEnabled || !('Notification' in window) || Notification.permission !== 'granted') return;

    const today = getTodayIso();
    const notifiedKeys = readJson(storageKeys.notified, []);
    const nextKeys = [...notifiedKeys];

    tasks.forEach((task) => {
        if (task.completed || !task.dueDate) return;

        let message = '';
        let status = '';
        if (isDeadlinePast(task.dueDate, task.dueTime)) {
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

    localStorage.setItem(storageKeys.notified, JSON.stringify(nextKeys.slice(-300)));
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
    setTimeout(() => toast.remove(), 3200);
}

function sanitizeText(value) {
    return String(value || '')
        .replace(/[\u0000-\u001F\u007F]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function normalizeTimeValue(value) {
    if (!value) return '';
    const match = String(value).match(/^(\d{2}:\d{2})/);
    return match ? match[1] : '';
}
