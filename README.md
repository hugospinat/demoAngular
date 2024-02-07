# DemoAngular


## Description

Le but du projet est de créer un front end pour l'api du Numbering Generator Service.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Explication](#Explicattion)
- [Amelioration](#Amelioration)


## Installation

Il est nécessaire d'avoir installer node afin d'avoir npm, puis d'installer la ligne de commande Angular (npm install -g @angular/cli).
Lancer en entrant la commande "ng serve" à la racine.

## Usage

Une fois le serveur lancé, installer https://github.com/hugospinat/demoSpringBoot pour le backend.

## Explication du code

Le code est structure de maniere assez simple, il y a trois composants disposant chacun d'un ficher css, html, et typescript :
- le composant app qui ne contient uniquement le titre et est le le composant bootstraper.
- le composant userForm qui genere un form pour generer un numero à partir des données utilisateur.
- le composant numbering qui permet la génération d'un Numbering Service, il possede aussi userForm comme composant enfant afin de pouvoir utiliser celui-ci aussi tot.

## Amelioration

Je pourrais simplifier l'organisation du code en utilisant un unique composant standalone à voir.
Un meilleur css / unifié celui-ci ?
Commenter le code ?
Visualisation des Generateurs existant / modification de ces derniers.