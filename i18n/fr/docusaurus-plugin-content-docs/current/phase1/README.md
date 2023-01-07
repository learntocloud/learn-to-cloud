# Phase 1: Linux,Réseau,et les Fondamentaux du scripting

## Comment s’applique cette phase au Cloud?

Le cloud est un tas de serveurs Linux mis en réseau ensemble. Apprendre les bases des fonctionnement réseaux, et comment interagir avec ces serveurs via les commandes, et automatiser ces commandes via un script, est l’objet de cette phase. Si vous êtes déjà un administrateur linux ou ingénieur réseau, vous pouvez appliquer vos connaissances dans le cloud.

## Comment décomposer cette phase

 Je suggère de passer du temps sur ces trois sujets et dans cet order:

| Ordre |   sujets                        | Temps à devouer |
|-------|---------------------------------|-------------------|
| 1 | Introduction aux Commandes linux | 2 semaines
| 2 | Introduction au Réseau  | 1 semaine         |
| 3 | Introduction au Scripting bash | 1 semaine           |

Bien sûr, n’hésitez pas à passer autant de temps que vous le souhaitez, les gens ont demandé un calendrier et une décomposition, alors je l’ai ajouté..

## Resources

|   Sujets   | Titre    |  Notes     |
| :------------- | ---------- | :----------- |
|  Linux | [Bases de Linux pour les pirates (Anglais)](https://nostarch.com/linuxbasicsforhackers)   |  Ce livre a rendu l’apprentissage de Linux amusant! C’est assez facile à suivre et à lire un chapitre jour après jour. Vous n’avez pas besoin de lire tout, les 9 premiers chapitres couvrent la plupart de ce que vous devez savoir.  |
| Linux   | [La ligne de commande linux (Anglais)](https://nostarch.com/tlcl2) | Je l’ai utilisé davantage comme référence pour renforcer les sujets du premier livre.. |
| Linux   | [Parcours Linux (Anglais)](https://linuxjourney.com/) | Une manière interactive d’apprendre Linux et la ligne de commande !|
| Reseau  | [Cours de réseautage informatique FreeCodeCamp (Anglais)](https://youtu.be/qiQR5rTSshw) | Ce cours complet de réseau informatique vous préparera à configurer, gérer et dépanner les réseaux informatiques.|
| Introduction à Bash | [Cours de bash linux par GPS (Anglais)](https://youtu.be/qALScO3E61I) | Une introduction à Bash!|
| Scripting Bash   | [Introduction au scripting bash (Anglais)](https://youtu.be/_n5ZegzieSQ) | Fantastique introduction au script bash, la voix de Joe Collins est apaisante!|
| Les commandes Bash | [Cours intensif pour débutants sur Linux Bash (Anglais)](https://youtu.be/qALScO3E61I) | Une vidéo d’une heure réalisée par Gwyneth

## Projets

 Titre  | Resource     |
 :---------- | :----------- |
 Installez linux sur un ordinateur   | Cherchez une distribution et installez la (Nous aimons [Pop!_OS](https://pop.system76.com/)) |
Configurez un [Serveur Lamp](https://en.wikipedia.org/wiki/LAMP_(software_bundle)) | Une tâche d’administration Linux assez populaire. |
 Deployer un serveur NAS | Consultez [FreeNAS](https://www.freenas.org/) |
 Deployer votre propre Cloud | Consultez [NextCloud](https://nextcloud.com/) |
  Convertissez les fichiers Videos | Consultez [ffmpeg](https://ffmpeg.org/ffmpeg.html) utilisez-le pour écrire un script qui convertit un fichier .mov en mp4

## Les choses avec lesquelles vous devez être familier avec à la fin de cette phase

### Commandes

- Naviguer avec la commande `cd`
- Comment lister les contenus d’un repertoire en utilisant la commande `ls`
- Créer, copier, deplacer, renommer, des repertoires et fichiers avec `mkdir`, `cp`, `rm`, et la commande `touch`.
- Trouver les choses avec `locate`, `whereis`, `which`, et la commande `find`
- Comprendre comment apprendre plus sur les commandes avec `which`, `man`, et la commande `--help`
- Capable de trouver les details des logs dans `/var/log`
- Comment afficher le contenu d’un fichier avec `cat`, `less`, `more`, `tail`, `head`.
- Filtrer avec `grep` et `sed`.
- Redirection des entrées standard, sorties et erreurs avec l'operateur `>`  et la commande `tee`
- Comment utiliser les pipelines avec l'operateur `|` .
- Manipuler les fichiers avec `nano` ou `vim`.
- Installer et désinstaller les paquets. Selon la distribution, utilisation basée sur Debian `apt`.
- Controle des permissions avec les commandes `chown`, `chgrp`, `chmod`.
- Créer des utilisateurs et la commande `sudo`
- Gestion des processus avec `ps`, `top`, `nice`, `kill`
- Gérer l’environnement et les variables définies par l’utilisateur avec les commandes `env`, `set`, `export`
- Ajouter vos repertoires à votre chemin `PATH`.
- Compression et archivage avec `tar`, `gzip`, `gunzip`.
- Comment acceder à un serveur linux avec `ssh`.

### Reseau

Les concepts qui devraient vous être familiers.

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

- Qu’est-ce qu’une Shell ?
- Qu’est-ce que Bash ?
- Pourquoi un script doit commencer avec `#!`?
- Que sont les variables et comment les utiliser
- Comment accepter les entrées utilisateurs
- Comment executer un script

## Les Certifications que vous pourriez vouloir voir

Il y a plusieurs certifications et vous pouvez choisir d'étudier pour n'importe lesquelles, mais beaucoup d’entre elles couvrent beaucoup plus que ce que vous devez savoir pour une base solide et sont plus axés sur l’administration Linux.

- [LPI essentials](https://www.lpi.org/our-certifications/linux-essentials-overview)
- [RedHat](https://www.redhat.com/en/services/training-and-certification)
- [Linux Foundation](https://training.linuxfoundation.org/certification-catalog/)
- [Oracle](https://education.oracle.com/oracle-certification-path/pFamily_358)
- [LPI](https://www.lpi.org/)
- [Comptia Linux+](https://www.comptia.org/certifications/linux)

Il existe également des tonnes de certifications réseau, et de même que celles de Linux, elles sont plus axées a vous donner beaucoup de connaissances afin que vous puissiez devenir un ingénieur / spécialiste des réseaux, encore une fois à un niveau d’introduction, c’est un peu exagéré. Si vous voulez en obtenir une, jetez un coup d’œil aux [Cisco certifications](https://www.cisco.com/c/en/us/training-events/training-certifications/certifications.html) qui sont à peu près la norme de l’industrie et/ou [Comptia Network+](https://www.comptia.org/certifications/network).

À la fin de la journée, si vous voulez les prendre, allez-y :)
  