# Fase 1: Fundamentos de Linux, Redes, e Scripts

Author: [GPS](https://twitter.com/madebygps)

## Como essa fase se aplica à Nuvem?

A nuvem é um monte de servidores Linux conectados em rede. Aprender os fundamentos de como a rede funciona e como interagir com esses servidores por meio de comandos e automatizar esses comandos por meio de um script é o objetivo desta fase. Se você já é um administrador Linux ou engenheiro de redes, pode aplicar suas habilidades no cloud.

## Como desmembrar essa fase?

Sugiro dedicar algum tempo a esses três tópicos e a esta linha do tempo:

| Ordem | Topico                           | Comprometimento necessário |
|-------|---------------------------------|-------------------|
| 1 | Introdução aos comandos do Linux | 2 Semanas
| 2 | Introdução a Redes  | 1 Semana          |
| 3 | Introdução aos Scripts bash | 1 Semana           |

Claro, sinta-se à vontade para gastar o tempo que quiser, as pessoas pediram uma linha do tempo e detalhamento, então eu a adicionei.

## Fontes

| Topico      | Titulo    |  Notas     |
| :------------- | ---------- | :----------- |
|  Linux | [Linux Basics for Hackers](https://nostarch.com/linuxbasicsforhackers)   | Este livro tornou o aprendizado do Linux DIVERTIDO! É bem fácil de seguir e fazer um capítulo por dia. Você não precisa ler tudo, os primeiros 9 capítulos cobrem a maior parte do que você precisa saber.  |
| Linux   | [The Linux Command Line](https://nostarch.com/tlcl2) | Usei isso mais como referência para reforçar tópicos do primeiro livro. |
| Linux   | [Linux Journey](https://linuxjourney.com/) | Maneira interativa de aprender Linux e Linux CLI!|
| Networking   | [FreeCodeCamp Computer Networking Course](https://youtu.be/qiQR5rTSshw) | Este curso completo de RedeS de computadores de nível universitário irá prepará-lo para configurar, gerenciar e solucionar problemas de redes de computadores.|
| Introduction to Bash  | [Linux Bash Course by GPS](https://youtu.be/qALScO3E61I) | Uma introdução ao Bash!|
| Bash Scripting   | [Introduction to Bash scripting](https://youtu.be/_n5ZegzieSQ) | Fantástica introdução ao script bash, a voz de Joe Collins é calmante!|
| Bash commands | [Beginner's crash course to Linux Bash](https://youtu.be/qALScO3E61I) | Uma hora de video feito pela Gwyn

## Projetos

 Titulo    | Fonte     |
 :---------- | :----------- |
 Instale o Linux em um computador   | Pesquise uma distro e instale-a (Nós gostamos do [Pop!_OS](https://pop.system76.com/)) |
Configure um [LAMP server](https://en.wikipedia.org/wiki/LAMP_(software_bundle)) | Uma tarefa de administração Linux bastante popular. |
 Deploy um servidor NAS | Confira [FreeNAS](https://www.freenas.org/) |
 Deploy sua própria nuvem | Confira [NextCloud](https://nextcloud.com/) |
 Converter arquivos de vídeo | Confira [ffmpeg](https://ffmpeg.org/ffmpeg.html) use para escrever um script que converte um arquivo .mov para mp4

## Coisas com as quais você vai estar familiarizado no final desta fase

### Comandos

- Navegue com o comando `cd`.
- Como listar o conteúdo de um diretório e usando o comando `ls`.
- Crie, copie, mova, renomeie, diretórios e arquivos com comandos `mkdir`, `cp`, `rm` e `touch`.
- Encontre coisas com os comandos `locate`, `whereis`, `which` e `find`.
- Entenda como aprender mais sobre comandos com os comandos `which`, `man` e `--help`.
- Familiarizado com encontrar detalhes de logs em `/var/log`
- Como exibir o conteúdo de um arquivo com `cat`, `less`, `more`, `tail`, `head`.
- Filtragem com `grep` e `sed`.
- Redirecionamento de entrada, saída e erro padrão com operador `>` e comando `tee`.
- Como usar pipelines com o operador `|`.
- Manipule arquivos com `nano` ou `vim`.
- Instalar e desinstalar pacotes. Depende da distro, uso baseado em debian `apt`.
- Controle de permissões com comandos `chown`, `chgrp`, `chmod`.
- Criando usuários e o comando `sudo`.
- Gerenciamento de processos com `ps`, `top`, `nice`, `kill`
- Gerenciar variáveis ​​definidas pelo usuário do ambiente com comandos `env`, `set`, `export`.
- Adicione diretórios ao seu `PATH`.
- Compressão e arquivamento com `tar`, `gzip`, `gunzip`.
- Como acessar um servidor Linux com `ssh`.

### Redes

Conceitos com os quais você deve estar familiarizado.

- Modelo OSI
- Endereço IP
- Endereço MAC
- Roteamento e comutação
- TCP/IP
- TCP and UDP
- DNS
- VPN tunneling
- TLS and SSL

### Script Bash

- O que é o shell?
- O que é Bash?
- Por que um script tem que começar com #!?
- O que é uma variável e como usá-la
- Como aceitar a entrada do usuário
- Como executar um script

## Certificações que você pode querer dar uma olhada

Existem várias certificações Linux e você pode optar por estudar para qualquer uma delas, mas muitas delas cobrem MUITO mais do que você precisa saber para uma base sólida e são mais focadas em administração Linux.

- [LPI essentials](https://www.lpi.org/our-certifications/linux-essentials-overview)
- [RedHat](https://www.redhat.com/en/services/training-and-certification)
- [Linux Foundation](https://training.linuxfoundation.org/certification-catalog/)
- [Oracle](https://education.oracle.com/oracle-certification-path/pFamily_358)
- [LPI](https://www.lpi.org/)
- [Comptia Linux+](https://www.comptia.org/certifications/linux)

Existem também TONELADAS de certificações de redes por aí e, semelhantes às do Linux, elas são mais focadas em fornecer muito conhecimento para que você possa se tornar um engenheiro / especialista em redes, novamente em um nível introdutório, é um pouco exagerado. Se você quiser obter uma, dê uma olhada nas [Cisco certifications](https://www.cisco.com/c/en/us/training-events/training-certifications/certifications.html) que são praticamente padrão da indústria e/ou as  [Comptia Network+](https://www.comptia.org/certifications/network)

No final do dia, se você quiser fazer elas, vá em frente :D
  