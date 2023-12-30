# Phase 4: Les fondamentaux du DevOps

## Comment s'applique cette phase au cloud?

DevOps consiste à faire en sorte que vos solutions fonctionnent efficacement, du déploiement aux mises à jour.
Ce n'est pas spécifique au Cloud, car vous pouvez également mettre en œuvre des pratiques DevOps on-prem.

DevOps est une culture dans laquelle les équipes de développement et d'opérations ne sont plus isolées. Ces deux groupes convergent en un seul groupe où les ingénieurs travaillent sur l'ensemble du cycle de vie des applications, du développement et des tests au déploiement et aux opérations, et favorisent un champ de compétences qui ne se limite pas à une seule fonction.

Renseignez-vous sur ce qu'est DevOps. Chaque plateforme de cloud dispose d'une suite d'outils DevOps. J'ai mis en lien quelques articles ici :

- [Microsoft - Qu'est-ce que DevOps ?](https://azure.microsoft.com/overview/what-is-devops/#overview)
- [AWS - Qu'est-ce que DevOps ?](https://aws.amazon.com/devops/what-is-devops/)
- [IBM - Un guide complet sur le DevOps](https://www.ibm.com/cloud/learn/devops-a-complete-guide)

Je pense aussi que cela vaut la peine de lire [Le projet Phoenix (Anglais)](https://itrevolution.com/the-phoenix-project/) C'est une lecture assez amusante car il s'agit d'une histoire fictive qui explique l'importance de DevOps. Mais si vous préférez quelque chose qui ressemble plus à un manuel avec des idées similaires, jetez un coup d'œil à [Le manuel du DevOps (Anglais)](https://itrevolution.com/the-devops-handbook/).

## Comment décomposer cette phase

- Intégration continue et livraison continue (CI/CD)
- Système de contrôle des versions (VCS)
- Infrastructure as Code (IaC)
- Gestion de la configuration
- Monitoring (logs, métriques, traces)
Je vous suggère de consacrer du temps à ces sujets et à cette chronologie :

| Ordre | Sujet                | Temps à devouer |
|-------|-----------------------|-------------------|
| 1 | CI/CD avec GitHub Actions | 2 semaines
| 2 | IaC avec Terraform | 2 semaines         |
| 3 | Monitoring avec Prometheus | 2 semaines     |
| 4 | Conteneurs avec Docker | 1 semaine          |
| 5 | Orchestration de conteneurs avec Kubernetes | 1 semaine          |

Bien sûr, n'hésitez pas à y consacrer autant de temps que vous le souhaitez. Les gens m'ont demandé une chronologie et une décomposition, je l'ai donc ajoutée. Chaque pratique DevOps est importante, mais celles-ci sont les plus utilisées au niveau débutant/junior. Vous devriez déjà être familier avec le contrôle de version de la phase 2.

## Resources

| Pratique                                                           | Outil                                                                                     |
| :------------------------------------------------------------------ | :----------------------------------------------------------------------------------------- |
| [Les séries DevOps de Rishab (Anglais)](https://youtube.com/playlist?list=PLK_LRl1CH4L9ZI0N6WqmQE-Y_-lflAbqM)| Explication de certains des concepts fondamentaux de DevOps.
| [Apprendre les actions GitHub](https://docs.github.com/en/actions/learn-github-actions)| Ce guide vous aidera à utiliser les actions GitHub pour accélérer les flux de développement de vos applications.
| [HashiCorp Learn](https://learn.hashicorp.com/terraform)| Construisez, modifiez et détruisez votre infrastructure avec Terraform. Commencez ici pour apprendre les bases de Terraform avec votre fournisseur de cloud préféré.
| [Cours d'ingénierie DevOps de FreeCodeCamp (Anglais)](https://youtu.be/j5Zsa_eOXeY) | Apprenez tout sur DevOps dans ce cours complet pour les débutants avec trois tutoriels techniques.
| [Docker (Anglais)](https://youtu.be/3c-iBn73dDE) | Cours pratique complet sur Docker avec de nombreuses démonstrations et explications des concepts derrière, afin que vous le compreniez vraiment.
| [Docker et Kubernetes (Anglais)](https://youtu.be/Wf2eSG3owoA) | Apprenez les principes fondamentaux de Docker et Kubernetes dans ce cours pratique complet.
| [Prometheus (Anglais)](https://youtube.com/playlist?list=PLy7NrYWoggjxCF3av5JKwyG7FFF9eLeL4) | Tutoriel complet sur Prometheus Monitoring

## Projets

| Titre                                                       | Ressource                                                                      |
| :----------------------------------------------------------- | --------------------------------------------------------------------------------- |
[Déployer une application sur Azure avec ARM](https://github.com/SoniaConti/ContosoFinance-Demo) | ARM est un outil IaC utilisé avec Azure
|[Ticket Crypto-dot-net Dockerisé](https://github.com/rishabkumar7/crypto-ticker-dotnet) | Nous Dockerisons le projet de ticker crypto-dot-net que nous avons construit dans la phase 3.
| [Exercices de DevOps](https://github.com/bregman-arie/devops-exercises) | Cette repo [Exercices de DevOps](https://github.com/bregman-arie/devops-exercises) contient des questions et des exercices sur divers sujets techniques liés à DevOps et SRE |
| [Le parcours DevOps avec Azure DevOps](https://github.com/thomast1906/DevOps-Journey-Using-Azure-DevOps) | Ce tutoriel/lab va vous emmener à travers un parcours DevOps en utilisant Azure DevOps. De la mise en place de votre pipeline au déploiement d'une application sur votre cluster Azure Kubernetes ! |
| [DevOps the Hardway - Azure](https://github.com/thomast1906/DevOps-The-Hard-Way-Azure) | Ce tutoriel contient une solution complète et réelle pour la mise en place d'un environnement utilisant les technologies et pratiques DevOps pour le déploiement d'applications et de services/infrastructures cloud sur Azure. |
| [DevOps the Hardway - AWS](https://github.com/AdminTurnedDevOps/DevOps-The-Hard-Way-AWS) | Ce tutoriel contient une solution complète et réelle pour la mise en place d'un environnement utilisant les technologies et pratiques DevOps pour le déploiement d'applications et de services/infrastructures cloud sur AWS. |

## Les choses avec lesquelles vous devez être familier à la fin de cette phase

- Être capable d'expliquer chaque pratique DevOps
  - Pourquoi chacune d'entre elles est importante.
  - Ce que chacune d'entre elles accomplit.
  - Les outils les plus populaires pour chaque pratique.
- Expérience pratique avec
  - CI/CD
  - IaC
  - Contrôle de version
- Une compréhension de la surveillance de l'infrastructure et des applications et les notions de base des journaux, des métriques et des traces.

## Certifications que vous pourriez vouloir voir

- [AWS Certified DevOps Engineer - Profession](https://aws.amazon.com/certification/certified-devops-engineer-professional/?ch=sec&sec=rmg&d=1)
- [Microsoft Certified: DevOps Engineer Expert](https://docs.microsoft.com/en-us/learn/certifications/devops-engineer/)
