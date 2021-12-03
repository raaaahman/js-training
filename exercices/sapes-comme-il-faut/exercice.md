# Sapés comme il faut

## Enoncé

La boîte de nuit *Mistral Gagnant* souhaite placer un robot videur à son entrée pour contrôler que les clients suivent bien le dress code des soirées. Vous devez créer un programme qui laissera passer ou refusera les clients selon les vêtements qu'ils portent.

Il y a deux types de soirées avec des *dress code* différents:

- les soirs de semaines, on veut juste que les clients soient habillés décemment
- les Samedi soirs, on veut que les clients soient habillés chics

## Rendu

Modifier le script `sapes-comme-il-faut.js`, afin que les fonctions `sapesDecemment()` (soirs de semaine) et `sapesClasse()` (Samedi soirs) retournent:

- `true` si le client porte des vêtements adaptés au dress code
- `false` sinon

Tester votre programme en ouvrant la page `test.html` dans votre navigateur. Cette page affichera les résultats de tests ayant été effectués sur votre code, tous les tests doivent être validés (couleur verte).

## Détails

Les fonctions prendront en entrée des objets javascript avec quatre propriétés représentant les parties du corps. Ces propriétés auront comme valeur des cha$ines de caractères décrivant leurs vêtements, ou une chaîne vide.

Les propriétés et leurs valeurs possibles sont:

- `tete`: casquette
- `torse`: t-shirt, chemise, débardeur, tailleur, robe, soutien-gorge
- `jambes`: jean, short, pantalon, jupe, robe, caleçon
- `pieds`: baskets, tennis, mocassins, talons hauts

(Mauvais) exemple:

```javascript
{
    tete: '',
    torse: 'chemise',
    jambes: 'caleçon',
    pieds: 'mocassins'
}
```