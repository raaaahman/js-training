# Alcotest

## Enoncé

La Gendaremerie nationale souhaite rééquiper ses agents par des ethylomètres de production 100% française. Vous devez créer le programme qui va permettre de déterminer si une personne peut ou non reprendre le volant selon son degré d'alcoolémie.

## Rendu

Modifier le script `alcotest.js`, afin que la fonction `jeuneConducteur()` retourne:

- `true` si l'année d'obtention du permis de la personne date d'au moins trois ans (nous sommes en 2021)
- `true` si l'année d'obtention du permis de la personne date d'au moins deux (nous sommes en 2021) et que la personne a été en *conduite accompagnée*
- `false` dans les autres cas

Modifier le script `alcotest.js` afin que la fonction `peutConduire()` retourne:

- `true` si le taux d'alcoolémie de la personne est **strictement** inférieur à 0.2 (en grammes par litre de sang)
- `true` si le taux d'alcoolémie de la personne est **strictement** inférieur à 0.5 (en grammes par litre de sang) mais que la personne n'est pas un jeune conducteur

## Détails

La fonction `jeuneConducteur()` prend en paramètres:

- `anneeObtentionPermis`: un nombre qui correspond à l'année d'obtention du permis de la personne
- `conduiteAccompagnee`: un booléen qui indique si la personne a été en *conduite accompagnée* (`true`), ou non (`false`).

L'année actuelle est 2021, elle peut être écrite en dur dans votre code.

La fonction `peutConduire()` prend en paramètres:

- `tauxAlcoolemie`: un chiffre décimal représentant le taux d'alcoolémie de la personne (en grammes par litre de sang).
- `jeuneConducteur`: un booléen qui indique si la personne est considérée comme jeune conducteur(trice) (`true`) ou non (`false`).