
# Documents Réponse

## git
- Quel est l'intérêt de commiter régulièrement et de manière atomique ?

        Committer régulièrement et de manière atomique permet de sauvegarder des changements cohérents dans l'historique du projet, facilitant la compréhension, le suivi des modifications, et la résolution des problèmes.

- A quoi sert une branche de type feature dans un développement logiciel de type git flow ?

        Une branche de type feature dans Git Flow sert à développer une nouvelle fonctionnalité de manière isolée, permettant d'ajouter des fonctionnalités au projet sans perturber le code principal, et elle peut être fusionnée une fois que la fonctionnalité est complète et testée.

- Quelle est la différence entre une branche main et une branche develop ?

        Une branche main est la branche principale du projet et ne comporte que des éléments propre et fini. 
        Une branche developp elle integre des composants en cours de developpement. Une fois que toutes les fonctionnalités sont testées et prêtes, elles sont fusionnées dans la branche main.

- Quelle est la différence entre git add, git commit et git push ?

        git add prepare les modifications pour le prochain commit en les ajoutant à l'index.
        git commit créer un commit avec les modifications préparées par git add.
        git push pousse les commits locaux vers github, mettant à jour la branche sur github.
## github
- Quel est l'intérêt d'une protection de branche ?

        L'interet d'une protection de branche prévient des modification non autorisé. Cela garantit une stabilité du code

- Quel est l'intérêt d'une pull request ?
        
        L'interet d'une pull request est de fusionner deux branches une foix que les changements sur le code ont été approuvés par tous. C'est utile en mode collaboratif.

## versionning
- Dans quel cas passer d'une version 1.0.0 à 1.0.1 ?

        On passe d'une version 1.0.0 à 1.0.1 quand on résout des bugs et on ajoute des choses mineurs 

- Dans quel cas passer d'une version 1.0.0 à 1.1.0 ?

        On passe d'une version 1.0.0 à 1.1.0 lorsque qu'on ajoute de nouvelles fonctionnalités significatives, sans pour autant changer fondamentalement la structure du projet.

- A quoi sert une version release candidate ?

        Cela sert à tester cette version avant de la mettre en production. Si cette version est validée, nous allons la mettre en production. Si cette version n'est pas validée, nous allons la corriger et créer une nouvelle version.

## test
- Quel est l'intérêt des tests unitaires ?

        Les tests unitaires sont des petites séries de tests  qui vérifient le bon fonctionnement d'un code. L'objectif est de s'assurer que chaque partie du code fonctionne correctement et permet de détecter les erreurs.