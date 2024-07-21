# DocCalculatrice

## Description

Cette application est une calculatrice web basique développée en HTML, CSS, et JavaScript. Elle permet aux utilisateurs d'effectuer des opérations arithmétiques simples telles que l'addition, la soustraction, la multiplication et la division. Les utilisateurs peuvent également effacer le dernier caractère ou réinitialiser l'affichage.

Fonctionnalités

    Affichage des chiffres et des résultats des opérations
    Opérations de base: addition, soustraction, multiplication, division
    Effacement de l'affichage
    Suppression du dernier caractère
    Gestion des erreurs pour les expressions invalides

Structure du Projet

    index.html: Le fichier HTML principal de l'application
    style.css: Le fichier CSS pour le style de l'application
    script.js: Le fichier JavaScript contenant la logique de la calculatrice
    calculator.test.js: Le fichier de tests unitaires pour les fonctions de la calculatrice
    Dockerfile: Le fichier de configuration Docker pour construire l'image de l'application
    ci-cd.yaml: Le fichier de configuration GitHub Actions pour l'intégration et le déploiement continus

Prérequis

    Node.js v14.x ou supérieur
    Docker
    Un compte Docker Hub pour pousser l'image Docker

## Installation et Exécution

## Cloner le dépôt

```bash

git clone https://github.com/Cabo1005/DocCalculatrice.git
cd calculatrice
```

## Installer les dépendances

```bash
npm install
```

## Exécuter les tests

```bash
npm test
```

## Construire l'image Docker

```bash

docker build -t your-username/calculatrice:latest .
```

## Exécuter le conteneur Docker

```bash

docker run -p 3000:3000 your-username/calculatrice:latest
```

## Accéder à l'application

Ouvrez votre navigateur et accédez à http://localhost:3000.

## Déploiement avec GitHub Actions

Ce projet utilise GitHub Actions pour l'intégration et le déploiement continus. La configuration CI/CD est définie dans le fichier ci-cd.yaml.
Workflow CI/CD

Le workflow se déclenche sur chaque push ou pull request vers la branche main. Il comporte deux jobs principaux:

    build-and-test: Ce job installe les dépendances et exécute les tests.
    docker-build: Ce job se déclenche après build-and-test. Il construit et pousse l'image Docker vers Docker Hub.

# Tests Unitaires

Les tests unitaires sont écrits avec Jest. Ils se trouvent dans le fichier calculator.test.js et couvrent les principales fonctionnalités de la calculatrice.

# Exécuter les tests

```bash

npm test
```
