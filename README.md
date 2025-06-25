# 🧩 SysML-Designer Lite — Éditeur Web de Diagrammes Temps Réel

**SysML-Designer Lite** est une application web pédagogique qui permet de créer des **diagrammes SysML simplifiés**, orientés objets et adaptés à la modélisation **de systèmes temps réel**.

---

## 🎯 Objectif pédagogique

- Initier les étudiants à la **modélisation graphique avec SysML**
- Comprendre les **composants, états et interactions** d’un système embarqué
- Visualiser les **transitions d’état et connexions de blocs**
- Favoriser une approche **interactive et moderne de l’UML/SysML**

---

## 🛠 Stack technique

| Composant     | Technologie       |
|---------------|-------------------|
| Frontend      | React.js          |
| Graphique     | Joint.js (SVG)    |
| Builder       | Vite              |
| Déploiement   | Render (static site) ou GitHub Pages |

---

## ⚙️ Fonctionnalités

✅ Création de blocs, états, transitions  
✅ Interface **drag-and-drop** visuelle  
✅ Éléments colorés et animés  
✅ Export JSON/PNG à venir (📌 en développement)  
✅ Structure prête pour extension collaborative

---

## 📂 Structure du projet

```
sysml-designer-lite/
├── public/               # Fichier HTML d’entrée
├── src/
│   ├── App.jsx           # Composant principal
│   ├── main.jsx          # Entrée React
│   ├── components/       # Sidebar + Canvas
│   ├── engine/           # Initialisation JointJS
├── styles/               # Fichiers CSS
├── package.json          # Dépendances et scripts
├── vite.config.js        # Config Vite
└── render.yaml           # Déploiement Render
```

---

## 🚀 Installation locale

```bash
npm install
npm run dev
```

---

## 🌐 Déploiement Render

Utilise `render.yaml` :
```yaml
services:
  - type: web
    name: sysml-designer-lite
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: dist
```

---

## 🎓 Utilisation recommandée

- **Cours d’informatique temps réel**
- **Modélisation embarquée**
- **Formation UML/SysML rapide**
- **Projets étudiants interactifs**

---

## ✍️ Développé par

**Emman Mlmb 🇨🇩**  
Université de Kinshasa — L3 Informatique  
Module : Systèmes Temps Réel

---

> Ce projet est libre pour usage éducatif.