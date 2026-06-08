# TaskFlow 📝

TaskFlow est une application web moderne de gestion de tâches conçue pour améliorer l'organisation personnelle et la productivité. Elle propose des catégories, des priorités, des tags, des échéances, un tableau de bord statistique, un minuteur Pomodoro et une synchronisation cloud sécurisée avec Supabase.

L'application est disponible ici :

👉 [https://xinoxti.github.io/taskflow/](https://xinoxti.github.io/taskflow/)

---

## 📋 Table des matières

1. [Fonctionnalités](#-fonctionnalités)
2. [Utilisation en ligne](#-utilisation-en-ligne)
3. [Installation locale](#-installation-locale)
4. [Mettre le projet à jour](#-mettre-le-projet-à-jour)
5. [Configuration Supabase](#-configuration-supabase)
6. [Sécurité](#-sécurité)
7. [Licence](#-licence)

---

## ✨ Fonctionnalités

- Création de compte avec nom d'utilisateur et mot de passe
- Mode invité avec sauvegarde locale
- Synchronisation cloud avec Supabase pour les utilisateurs connectés
- Import automatique des tâches invitées vers le compte utilisateur
- Catégories personnalisées
- Gestion des priorités A, B et C
- Tags personnalisés
- Dates et heures d'échéance
- Validation des échéances passées
- Dashboard avec statistiques globales
- Répartition des priorités basée uniquement sur les tâches actives
- Filtres : toutes, actives, terminées
- Thème clair et sombre
- Interface multilingue
- Minuteur Pomodoro intégré
- Notifications lorsque l'application est ouverte
- Suppression du compte utilisateur

---

## 🌐 Utilisation en ligne

TaskFlow peut être utilisé directement depuis GitHub Pages :

👉 [https://xinoxti.github.io/taskflow/](https://xinoxti.github.io/taskflow/)

Aucune installation n'est nécessaire.

Les utilisateurs peuvent choisir entre :

- **Mode invité** : les tâches sont enregistrées localement dans le navigateur via `localStorage`
- **Mode connecté** : les tâches sont synchronisées et sauvegardées dans Supabase

Grâce aux règles de sécurité Supabase, chaque utilisateur connecté accède uniquement à ses propres données.

---

## 📦 Installation locale

### 1. Cloner le projet

```bash
git clone https://github.com/xinoxti/taskflow.git
```

### 2. Entrer dans le dossier

```bash
cd taskflow
```

### 3. Ouvrir le projet

Avec VS Code, vous pouvez utiliser l'extension **Live Server** :

```txt
Clic droit sur index.html → Open with Live Server
```

Vous pouvez également ouvrir directement `index.html` dans votre navigateur, mais Live Server est recommandé pour le développement.

---

## 🔄 Mettre le projet à jour

Si vous avez déjà cloné le projet et souhaitez récupérer la dernière version :

```bash
git pull
```

Ensuite, relancez le projet avec Live Server.

Si vous utilisez ce projet comme base pour votre propre application, vous devrez l'héberger sur votre propre plateforme.

---

## ⚙️ Configuration Supabase

Le fichier de configuration Supabase se trouve ici :

```txt
supabase-config.js
```

Vous devez remplacer les valeurs par celles de votre projet Supabase :

```js
const SUPABASE_URL = "VOTRE_SUPABASE_URL";
const SUPABASE_PUBLISHABLE_KEY = "VOTRE_SUPABASE_PUBLISHABLE_KEY";
```

La clé `publishable` est conçue pour être utilisée côté navigateur.

Ne placez jamais dans ce fichier :

```txt
secret key
service_role
database password
JWT secret
```

---

## 🔐 Sécurité

TaskFlow intègre plusieurs mécanismes de sécurité :

- Row Level Security (RLS) activé sur Supabase
- Policies Supabase limitant l'accès aux données de chaque utilisateur
- Aucune utilisation de `eval()`
- Aucune exécution de code fourni par l'utilisateur
- Affichage sécurisé des contenus saisis
- Validation des champs de formulaire
- Validation des échéances
- Données invitées stockées uniquement dans le navigateur

---

## 📝 Licence

Ce projet est distribué sous licence Apache 2.0.

Vous pouvez :

- utiliser le code ;
- modifier le code ;
- distribuer le code ;
- l'utiliser dans un projet privé ou commercial.

Vous devez cependant respecter les conditions de la licence, notamment conserver les mentions de licence et de copyright.

Voir le fichier `LICENSE` pour plus de détails.
