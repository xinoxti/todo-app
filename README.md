# To-Do List Application 📝

Une application to-do list moderne et responsive avec stockage local (localStorage).

---

## 📋 Table des matières

1. [Fonctionnalités](#-fonctionnalités)
2. [Technologies](#-technologies-utilisées)
3. [Installation](#-installation)
4. [Utilisation](#-utilisation)
5. [Design Responsive](#-responsive-design)
6. [Thème](#-thème)
7. [Stockage](#-stockage)
8. [Structure des fichiers](#-structure-des-fichiers)
9. [Sécurité](#-sécurité)
10. [Licence](#-licence)

---

## ✨ Fonctionnalités

- ✅ **Ajouter des tâches** - Entrez une tâche et appuyez sur Entrée ou cliquez sur Ajouter
- ✅ **Marquer comme complétée** - Cliquez sur la checkbox pour cocher une tâche
- ✅ **Supprimer des tâches** - Supprimez une tâche individuellement
- ✅ **Filtrer les tâches** - Visualisez toutes, actives ou complétées
- ✅ **Statistiques** - Compteur de tâches actives et complétées
- ✅ **Stockage local** - Vos tâches sont sauvegardées automatiquement
- ✅ **Design moderne** - Interface sombre avec gradients et animations
- ✅ **Responsive** - Fonctionne sur mobile, tablette et desktop

---

## 🛠️ Technologies utilisées

- **HTML5** - Structure
- **CSS3** - Styling avec variables CSS et animations
- **JavaScript vanilla** - Logique et gestion du localStorage

---

## 📦 Installation

### Prérequis

- Un navigateur moderne (Chrome, Firefox, Safari, Edge)
- Aucune dépendance externe requise

### Cloner le repository

```bash
# Clone le repository
git clone https://github.com/xinoxti/todo-app.git

# Entre dans le dossier du projet
cd todo-app

# Ouvre l'application dans le navigateur
# (Double-cliquez sur index.html ou utilisez un serveur local)
```

### Alternative : Télécharger directement

1. Allez sur https://github.com/xinoxti/todo-app
2. Cliquez sur **Code** → **Download ZIP**
3. Extrayez les fichiers
4. Ouvrez `index.html` dans votre navigateur

### Avec un serveur local (optionnel)

```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server

# Puis ouvrez http://localhost:8000
```

---

## 🚀 Utilisation

1. **Ouvrez** `index.html` dans votre navigateur
2. **Tapez** une tâche dans le champ d'entrée
3. **Appuyez** sur Entrée ou cliquez sur "Ajouter"
4. **Cliquez** sur la checkbox pour marquer comme complétée
5. **Utilisez** les filtres pour organiser votre vue
6. **Vos tâches** sont automatiquement sauvegardées dans localStorage

### Actions disponibles

| Action | Comment |
|--------|---------|
| Ajouter une tâche | Entrez le texte + Entrée ou cliquez sur "Ajouter" |
| Cocher/Décocher | Cliquez sur la checkbox |
| Supprimer une tâche | Cliquez sur le bouton "Supprimer" |
| Filtrer | Cliquez sur "Toutes", "Actives" ou "Complétées" |
| Supprimer les complétées | Cliquez sur "Supprimer les complétées" |
| Tout supprimer | Cliquez sur "Tout supprimer" |

---

## 📱 Responsive Design

L'application s'adapte parfaitement à tous les appareils:

- **Desktop** (1200px+)
- **Tablette** (768px - 1200px)
- **Mobile** (< 768px)

---

## 🎨 Thème

Le thème sombre utilise les couleurs suivantes:

- **Couleur primaire** : `#6366f1` (Indigo)
- **Couleur primaire foncée** : `#4f46e5`
- **Couleur de succès** : `#10b981` (Vert)
- **Couleur de danger** : `#ef4444` (Rouge)
- **Arrière-plan primaire** : `#0f172a`
- **Arrière-plan secondaire** : `#1e293b`

---

## 💾 Stockage

Les données sont stockées dans le `localStorage` du navigateur avec les caractéristiques suivantes:

- ✅ Stockage persistant (survit à la fermeture du navigateur)
- ✅ Pas de serveur requis
- ✅ Aucune donnée ne quitte votre appareil
- ✅ Limite : ~5-10MB par site

**Format stocké :**
```json
[
  {
    "id": 1717596624000,
    "text": "Ma première tâche",
    "completed": false,
    "createdAt": "05/06/2026"
  }
]
```

---

## 📄 Structure des fichiers

```
todo-app/
├── index.html          # Structure HTML
├── styles.css          # Styles et animations
├── app.js              # Logique JavaScript
├── README.md           # Documentation (ce fichier)
├── LICENSE             # Licence Apache 2.0
└── .gitignore          # Fichiers ignorés par Git
```

---

## 🔐 Sécurité

- ✅ **Protection XSS** - Fonction `escapeHtml()` pour échapper le contenu utilisateur
- ✅ **Validation des entrées** - Vérification des champs vides
- ✅ **Nettoyage** - Gestion sécurisée du localStorage
- ⚠️ **Note** : Pas de connexion utilisateur, donc les données restent locales

---

## 📝 Licence

Ce projet est licencié sous la **Licence Apache 2.0**.

Voir le fichier [LICENSE](LICENSE) pour plus de détails.

### Résumé de la licence Apache 2.0

Vous êtes libre de :
- ✅ Utiliser le code commercialement
- ✅ Modifier le code
- ✅ Distribuer le code
- ✅ Utiliser en privé

À condition de :
- ⚠️ Inclure une copie de la licence
- ⚠️ Documenter les changements majeurs
- ⚠️ Inclure un avis de copyright

**Pas de garantie fournie** - Le logiciel est fourni "tel quel".

---

## 🤝 Contribution

Les contributions sont bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer de nouvelles fonctionnalités
- Améliorer le code

---

## 📞 Support

Si vous avez des questions ou des problèmes :
1. Vérifiez que JavaScript est activé
2. Essayez dans un autre navigateur
3. Videz le cache du navigateur
4. Ouvrez une issue sur GitHub

---

**Créé avec ❤️ par xinoxti**
