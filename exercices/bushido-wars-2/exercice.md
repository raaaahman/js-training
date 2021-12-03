# Bushido Wars - Niveau 2

## Enoncé

La guerre des clans fait rage depuis de nombreuses années dans le Japon féodal. Les escarmouches on évoluées en batailles rangées.

Vous allez devoir étbalir une stratégie qui vous permet de combattre sur plusieurs fronts à la fois.

Sur chaque front, les troupes gagne toujours selon le schéma suivant (similaire à l'exercice 1):

- samourai > moine
- moine > ninja
- ninja > samourai

## Rendu

Modifier le script la fonction `choisirArmee()` dans le fichier `bushido-wars-2.js`.

Cette fonctione reçoit en paramètre `armeeAdverse`, un tableau contenant d'autres tableaux! Chacun de ces tableaux contient des chaînes de caractères représentant des unités à envoyer eu combat, exemple:

```javascript
[
    [ 'samourai', 'moine' ], 
    [ 'moine', 'ninja' ]
]
```

Vous devez retourner les tableaux contenant les troupes vous permettant de vaincre cette armée. Pour l'exemple précédent:

- 'ninja' suivi de 'samourai' pour battre le premier tableau (`['samourai', 'moine']`)
- 'samourai' suivi de 'moine' pour battre le deuxième tableau (`['moine', 'ninja']`)

Soit:

```javascript
[
    [ 'samourai', 'moine' ], 
    [ 'moine', 'ninja' ]
]
```