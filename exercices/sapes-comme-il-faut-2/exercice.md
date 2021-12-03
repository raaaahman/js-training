# Sapés comme il faut - Niveau 2

## Enoncé

La boîte de nuit *Mistral Gagnant* souhaite maintenant organiser des soirées à thème:

Lors des "soirées mousses" les clients devront porter des maillots de bain, mais tout en restant décent:

- pas de nudité
- pas de "topless" pour les femmes

Seulement la loi Protection de la Vie Privée (loi PVP) interdit à nos scanners de scanner le corps de nos clients. On considérera alors que les individus sont des hommes ou des femmes selon les vêtements qu'ils portent:

- pour les hommes: `short de bain` ou `boxer de bain` (les `slip de bain` sont interdits)
- pour les femmes: `maillot de bain` (mono-pièce) ou `bikini` (torse et jambes)

Lors des soirées à thème "Pirates", les clients devront proter une majorité de pièces de déguisement. Sont comptés comme déguisements valides:

- tête: bandana, tricorne, bicorne, postiche, perruque
- torse: plastron, chemise, gilet, veste, corset
- jambes: robe flottante, jupons, culotte courte
- pieds: chaussures à boucles, escarpins, mules, bottes

"Majorité" signifie que le client doit porter deux habits à thème pirate s'il porte trois habits ou moins, l'exemple suivant est valide:

```javascript
{
    tete: '',
    torse: 'chemise',
    jambes: 'culotte courte',
    pieds: 'baskets'
}
```

Si le client porte quatre habits en tout, alors il doit avoir au moins trois habits à thème pirate, l'exemple suivant n'est pas valide:

```javascript
{
    tete: 'casquette',
    torse: 'chemise',
    jambes: 'culotte courte',
    pieds: 'baskets'
}
```

## Rendu

Modifier le script `sapes-comme-il-faut-2.js`, afin que les fonctions `sapesMousse()` (soirées mousse) et `sapesPirates()` (soirées pirates) retournent:

- `true` si le client porte des vêtements adaptés au dress code
- `false` sinon

Tester votre programme en ouvrant la page `test.html` dans votre navigateur. Cette page affichera les résultats de tests ayant été effectués sur votre code, tous les tests doivent être validés (couleur verte).

N'hésitez pas à ajouter des `console.log()` dans votre code pour analyser ce qui pose problème!