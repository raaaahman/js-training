# Bushido Wars

## Enoncé

La guerre est déclarée entre les clans du Japon féodal. En tant que seigneur de guerre, vous devez élaborer une stratégie vous permettant de vaincre chacun de vous adversaires.

Vous comme vos ennemis avez à votre disposition trois types de troupes d'élite:

- les samurais sont de braves guerriers en armure lourde
- les moines sont des experts en arts martiaux
- les ninjas sont des assassins discrets

Chacune de ses troupes est forte contre un autre type de troupe

- samurai > moine: l'armure du samourai le protège des coups de bâton du moine
- moine > ninja: les sens aiguisé du moine empêche le ninja de le prendre par surprise
- ninja > samurai: le code d'honneur du samourai le rend particulièrement sensible aux attaques traîtres du ninja

## Rendu

Modifier le script la fonction `choisirTroupes()` dans le fichier `bushido-wars.js`.

Cette fonctione reçoit en paramètre `armeeAdverse`, un tableau de chaînes de caractères, exemple:

```javascript
[ 'samurai', 'moine', 'moine', 'ninja' ]
```

Vous devez retourner le tableau contenant les troupes vous permettant de vaincre cette armée. Pour l'exemple précédent:

- 'ninja' pour battre le premier samurai
- 'samurai' pour battre le moine qui le suit
- 'samurai' pour battre le second moine
- 'moine' pour battre le 'ninja' qui fini le tableau

Soit:

```javascript
[ 'ninja', 'samurai', 'samurai', 'moine' ]
```