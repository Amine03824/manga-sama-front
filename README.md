# Bienvenue sur le Repo Front du projet Manga-Sama 🍣  

🌐 [**VOIR LE SITE EN LIVE**](https://manga-sama.vercel.app/)

## 📖 À propos du projet

**Manga-Sama** est l'interface utilisateur de notre plateforme dédiée à l'univers du manga. Ce front-end a été pensé pour être rapide, fiable et dynamique. Il gère l'affichage, la navigation fluide et communique de manière sécurisée avec notre API pour offrir la meilleure expérience possible aux utilisateurs.

👇 **POUR ALLER PLUS LOIN :** 👇

> ### 🚀 Liens Importants
> 
> ⚙️ [**DÉCOUVRIR LE REPO BACKEND**](https://github.com/Amine03824/manga-sama-back2)
>
> 📁 [**ACCÉDER AU DOSSIER COMPLET DU PROJET**](https://amine.works/download-dossier)
> 
> 📊 [**LA PRÉSENTATION POWERPOINT**](https://amine.works/download-presentation)

---

## 🛠️ Stack Technique & Choix Architecturaux

Nous avons mis en place une stack moderne et robuste, propulsée par le modèle **O’Vite** de notre école :

* ⚛️ **React & TypeScript (TSX) :** Création d'interfaces dynamiques via le Virtual DOM pour des mises à jour rapides. TSX nous permet de détecter les erreurs de typage en amont et d'améliorer la fiabilité globale du code.
* ⚡ **Vite :** Utilisé comme bundler pour automatiser la transpilation et la conversion SASS vers CSS avec des performances optimales.
* 🚏 **React-Router-DOM :** Navigation fluide et type SPA (Single Page Application), associant nos composants aux bonnes routes sans jamais recharger la page.
* 🧠 **Redux Toolkit :** Gestion centralisée des états (state) de l'application. Un choix assumé (malgré sa réputation sur des projets complexes) pour mettre en pratique et consolider notre spécialisation React.
* 🎨 **SASS (BEM) & clsx :** Finalement préféré à Tailwind CSS pour garder un contrôle millimétré sur nos styles via la nomenclature BEM. Couplé au package `clsx`, cela nous permet d'attribuer dynamiquement des classes CSS selon nos variables et conditions.
* 🔌 **Axios & JWT :** Gestion des requêtes HTTP vers notre API. L'authentification est sécurisée par des tokens JWT directement injectés dans les en-têtes (headers) des requêtes.
* 🧹 **ESLint (Airbnb) & Prettier :** Pour garantir la cohérence du code, imposer un style uniforme à toute l'équipe et repérer les erreurs potentielles avant même de lancer le projet.
