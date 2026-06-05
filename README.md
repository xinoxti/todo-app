# To-Do List Application 📝

Une application to-do list moderne et responsive avec stockage local (localStorage).

## ✨ Fonctionnalités

- ✅ **Ajouter des tâches** - Entrez une tâche et appuyez sur Entrée ou cliquez sur Ajouter
- ✅ **Marquer comme complétée** - Cliquez sur la checkbox pour cocher une tâche
- ✅ **Supprimer des tâches** - Supprimez une tâche individuellement
- ✅ **Filtrer les tâches** - Visualisez toutes, actives ou complétées
- ✅ **Statistiques** - Compteur de tâches actives et complétées
- ✅ **Stockage local** - Vos tâches sont sauvegardées automatiquement
- ✅ **Design moderne** - Interface sombre avec gradients et animations
- ✅ **Responsive** - Fonctionne sur mobile, tablette et desktop

## 🛠️ Technologies utilisées

- **HTML5** - Structure
- **CSS3** - Styling avec variables CSS et animations
- **JavaScript vanilla** - Logique et gestion du localStorage

## 🚀 Utilisation

1. Ouvrez `index.html` dans votre navigateur
2. Tapez une tâche dans le champ d'entrée
3. Appuyez sur Entrée ou cliquez sur "Ajouter"
4. Cliquez sur la checkbox pour marquer comme complétée
5. Utilisez les filtres pour organiser votre vue
6. Vos tâches sont automatiquement sauvegardées

## 📱 Responsive Design

L'application s'adapte parfaitement à tous les appareils:
- Desktop (1200px+)
- Tablette (768px - 1200px)
- Mobile (< 768px)

## 🎨 Thème

Le thème sombre utilise:
- Couleur primaire: `#6366f1` (Indigo)
- Couleur de succès: `#10b981` (Vert)
- Couleur de danger: `#ef4444` (Rouge)

## 💾 Stockage

Les données sont stockées dans le `localStorage` du navigateur. Elles persistent même après la fermeture du navigateur.

## 📄 Structure des fichiers

```
├── index.html     # Structure HTML
├── styles.css     # Styles et animations
├── app.js         # Logique JavaScript
└── README.md      # Documentation
```

## 🔐 Sécurité

- Protection contre les injections XSS via `escapeHtml()`
- Validation des entrées utilisateur
- Nettoyage du localStorage sécurisé

## 📝 Licence

MIT License - Libre d'utilisation
