# Alcotest - Niveau 2

## Enoncé

Les nouveaux éthylomètres fonctionnent bien, les gendarmes veulent maintenant installer des bornes de contrôles automatique à la sortie des parking.

Chaque voiture pouvant contenir plusieurs passagers, il suffit qu'un seul des passagers soit en mesure de conduire pour que le véhicule puisse repartir.

## Rendu

Modifier le script `alcotest-2.js`, afin que la fonction `immobiliserVehicule()` retourne:

- `false` si un des passager peut conduire:
    - ce passager doit disposer d'un permis de conduire valide
    - ce passager doit avoir un taux d'alcoolémie inférieur à 0.5g/l
    - si ce passager est jeune conducteur, il doit avoir un taux d'alcoolémie inférieur à 0.2g/l
        - le passager est jeune conducteur s'il a obtenu son permis de conduire depuis moins deux ans s'il a été en conduite accompagnée
        - le passager est jeune conducteur s'il a obtenu son permis de conduire depuis moins de trois ans s'il n'a pas été en conduite accompagnée
    - si ce passager est jeune conducteur, la voiture doit être munie d'un disque "A" signalant que le conducteur est en période probatoire ("jeune conducteur")
- `true` si **aucun** des passagers ne peut conduire.

Considérez que nous sommes en 2021.

Vous pouvez réutiliser du code du niveau 1!

## Détails

La fonction `immobiliserVehicule()` reçoit en paramètres:

- `passagers` un tableau d'objets avec les propriétés suivantes:
    - `tauxAlcoolemie`: un nombre décimal indiquant le taux d'alcoolémie du passager (en grammes par litre de sang).
    - `permis`: un objet représentant le permis de conduire de ce passager, ayant pour propriétés:
        - `anneeObtention`: un nombre entier représentant l'année durant laquelle ce permis de conduire a été obtenu
        - `conduiteAccompagnee`: si ce permis de conduire a été obtenu suite à une conduite accompagnée
- `disqueA`: un booléen indiquant la présence d'un disque "A" dans le véhicule (`true`), ou son absence (`false`)