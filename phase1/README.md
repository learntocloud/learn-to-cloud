# Phase 1: Linux,Reseau,et Scripting de base 

## Comment s’applique cette phase au Cloud?

le cloud est un tas des serveurs Linux mise en reseau ensemble. apprendre les bases de comment les reseaux fonctionnent,et comment interagir avec ces serveurs via les commandes, et automatiser ces commandes via un script, est l’objet de cette phase. si vous êtes déjà un administrateur linux ou ingenieur reseau,vous pouvez appliquer vos connaissances dans le cloud.

## Comment decomposer cette phase

 Je suggérerais de passer du temps sur ces trois sujets et cette chronologie:

| Ordre |   sujets                        | Temps à devouer | 
|-------|---------------------------------|-------------------|
| 1 | Introduction aux Commandes linux | 2 semaines
| 2 | Introduction au Reseau  | 1 semaine         |
| 3 | Introduction au Scripting bash | 1 semaine           |

Bien sûr,n’hésitez pas à passer autant de temps que vous le souhaitez, les gens ont demandé un calendrier et une decomposition, alors je l’ai ajouté..

## Resources

|   Sujets   | Titre    |  Notes     |
| :------------- | ---------- | :----------- |
|  Linux | [Linux de base pour les pirates](https://nostarch.com/linuxbasicsforhackers)   |  Ce livre a rendu l’apprentissage de Linux amusant!C’est assez facile à suivre et à prendre un chapitre jour après jour. Vous n’avez pas besoin de lire le tout,les 9 premiers chapitres couvrent la plupart de ce que vous devez savoir.  |
| Linux   | [La ligne de commande linux ](https://nostarch.com/tlcl2) | Je l’ai utilisé davantage comme référence pour renforcer les sujets du premier livre.. |
| Linux   | [Parcours Linux](https://linuxjourney.com/) | Une maniere interactive d’apprendre Linux et la ligne de commande !|
| Reseau  | [Cours de réseautage informatique FreeCodeCamp](https://youtu.be/qiQR5rTSshw) | Ce cours complet de réseau informatique vous préparera à configurer,gérer et dépanner les réseaux informatiques.|
| Introduction à Bash | [Cours de bash linux par GPS](https://youtu.be/qALScO3E61I) | Une introduction à Bash!|
| Scripting Bash   | [Introduction au scripting bash](https://youtu.be/_n5ZegzieSQ) | Fantastique introduction au script bash, la voix de Joe Collins est apaisante!|
| Les commandes Bash | [Cours intensif pour débutants sur Linux Bash](https://youtu.be/qALScO3E61I) | une vidéo d’une heure réalisée par Gwyneth

## Projets

 Titre  | Resource     |
 :---------- | :----------- |
 Installez linux sur un ordinateur   | Cherchez une distribution et installez (Nous aimons [Pop!_OS](https://pop.system76.com/)) |
Configurez un [Serveur Lamp](https://en.wikipedia.org/wiki/LAMP_(software_bundle)) | Une tâche d’administration Linux assez populaire. |
 Deployer un serveur NAS | Consultez [FreeNAS](https://www.freenas.org/) |
 Deployer votre propre Cloud | Consultez [NextCloud](https://nextcloud.com/) |
  Convertissez les fichiers Videos | Consultez [ffmpeg](https://ffmpeg.org/ffmpeg.html) utilisez-le pour écrire un script qui convertit un fichier .mov en mp4

## Les choses dont vous devriez etre familier à la fin de cette phase

### Commandes

- Naviguez avec la commande `cd`
- Comment lister les contenus d’un repertoire en utilisant la commande `ls`
- Creer,copier,deplacer,renommer,repertoires et fichiers avec `mkdir`, `cp`, `rm`, et la commande `touch`.
- Trouver les choses avec `locate`, `whereis`, `which`, et la commande `find` 
- Comprendre comment apprendre plus sur les commandes avec `which`, `man`, et la commande `--help`
- Familier en trouvant les details des logs dans `/var/log`
- Comment afficher le contenu d’un fichier avec `cat`, `less`, `more`, `tail`, `head`.
- Filtrer avec `grep` et `sed`.
- Redirection des entrees standard, sortie et erreur avec `>` operateur et la commande `tee`
- Comment utiliser les pipelines avec `|` operateur.
- Manipuler les fichiers avec `nano` ou `vim`.
- Installer et desinstaller les paquets. Depend de la distribution,utilisation basée sur Debian `apt`.
- Controle des permissions avec les commandes `chown`, `chgrp`, `chmod`.
- Creer des utilisateurs et la commande `sudo`
- Gestion des processus avec `ps`, `top`, `nice`, `kill`
- Gérez l’environnement et les variables définies par l’utilisateur avec les commandes `env`, `set`, `export` 
- Ajoutez vos repertoires à votre chemin `PATH`.
- Compression et archivage avec `tar`, `gzip`, `gunzip`.
- Comment accedez à un serveur linux avec `ssh`.

### Reseau

Les concepts dont vous devriez etre familier.

- Le modèle OSI
- L’addressage IP
- Les addresses MAC 
- Routage et Commutation
- TCP/IP
- TCP et UDP
- Le DNS
- Le VPN tunneling
- TLS et SSL

### Scripting bash

- qu’est-ce qu’un shell ?
- qu’est-ce que bash ?
- Pourquoi un script doit commencer avec #!?
- qu’est ce que les variables et comment les utiliser
- Comment accepter les entrees utilisateurs 
- Comment executer un script

## les certifications que vous pouvez examiner

il y a plusieurs certifications et vous pouvez choisir pour étudier pour l’un d’entre eux vraiment,mais beaucoup d’entre eux couvrent beaucoup plus que ce que vous devez savoir pour une base solide et sont plus axés sur l’administration Linux.

- [LPI essentials](https://www.lpi.org/our-certifications/linux-essentials-overview)
- [RedHat](https://www.redhat.com/en/services/training-and-certification)
- [Linux Foundation](https://training.linuxfoundation.org/certification-catalog/)
- [Oracle](https://education.oracle.com/oracle-certification-path/pFamily_358)
- [LPI](https://www.lpi.org/)
- [Comptia Linux+](https://www.comptia.org/certifications/linux)

Il existe également des tonnes de certifications réseau, et similaires à celles de Linux, elles sont plus axées sur le fait de vous donner beaucoup de connaissances afin que vous puissiez devenir un ingénieur / spécialiste des réseaux, encore une fois à un niveau d’introduction, c’est un peu exagéré. Si vous vouliez en obtenir un, jetez un coup d’œil au [Cisco certifications](https://www.cisco.com/c/en/us/training-events/training-certifications/certifications.html) qui sont à peu près la norme de l’industrie et/ou [Comptia Network+](https://www.comptia.org/certifications/network).

À la fin de la journée, si vous voulez les prendre, allez-y :)
  
## Quelle est la prochaine étape ?

[Allez à Phase 2: Programmation de base](../phase2/README.md)
