# Fase 1: Linux Bash y fundamentos de redes

Author: [GPS](https://twitter.com/madebygps)

## ¿En que aplica esta fase a la Nube?

La nube es un conjunto de servidores linux conectados en red. Aprender los fundamentos de como funcionan las redes y como interactuar con estos servidores mediante comandos, automatizando esos comandos en scripts es el objetivo de esta fase. Si ya sos un ingeniero de red o un administrador Linux, entonces podes aplicar tus conocimientos y habilidades en la nube.

<!--truncate -->
<iframe width="100%" height="315" src="https://www.youtube.com/embed/mxVq2DlPDWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Cómo dividir esta fase

Te sugiero dedicar tiempo a estos dos temas y a este cronograma:

| Orden | Tema                              |
| ----- | --------------------------------- | --- |
| 1     | Introducción a los comandos Bash  |
| 2     | Introducción a los script en Bash |     |
| 3     | Introducción a las redes          |     |

Por supuesto, sientete libre de invertir tanto tiempo como vos quieras, la gente me ha preguntado por un cronograma desglosado, así que acá lo agregué.

## Recursos

| Tema                                                                     | título                                                                                                                                | Notas                                                                                                                                                              | Consejos                                                                                                                                |
| :----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| Linux Bash                                                               | [Linux Basics para Hackers](https://nostarch.com/linuxbasicsforhackers)                                                               | Este libre hace que aprender Linux sea DIVERTIDO! Es facil de seguir y terminar un capítulo día a día.                                                             | No es necesario que lo leas todo, los primeros 9 capítulos cubren la mayoría de los que necesitas saber.                                |
| Linux Bash                                                               | [La línea de comandos de Linux](https://nostarch.com/tlcl2)                                                                           | Yo usé esto más como una referencia para reforzar algunos temas del primer libro.                                                                                  | Opcional, pero de mucha ayuda                                                                                                           |
| Introducción a Bash                                                      | [Curso de Linux Bash por GPS](https://youtu.be/qALScO3E61I)                                                                           | Una introducción a !                                                                                                                                               | Aquí les presento algunos comandos Bash útiles. Miralo y después hacelos por tu cuenta.                                                 |
| ¡Pon a prueba tus habilidades de Bash con OverTheWire! Juego de bandidos | [Bandit](https://overthewire.org/wargames/bandit/)                                                                                    | Un juego que te eseña los fundamentos de los comandos Bash que vas a necesitar en la nube e incluso algo de seguridad.                                             | Esto va a cubrir más que los fundamentos. Similar a Linux Basics para hackers, está enfocado en la seguridad.                           |
| Bash Scripting                                                           | [Introducción aBash scripting](https://youtu.be/_n5ZegzieSQ)                                                                          | Fantastica intro a bash scripting, La voz de Joe Collins es relajante!                                                                                             | Esto te va a introducir conceptos que usaras en la siguiente fase.                                                                      |
| Redes                                                                    | [Conceptos básicos de redes (2020)](https://www.youtube.com/watch?v=_IOZ8_cPgu8)                                                      | Este video de 15 minutos cubrirá lo conceptos básico de las redes a alto nivel.                                                                                    | Invetrí un día mirando esto y buscando en internet cada concepto. Lee más de cada tema por tu cuenta.                                   |
| Redes                                                                    | [Fundamentos de las redes de computadoras](https://learn.microsoft.com/es-es/training/modules/network-fundamentals/)                  | Aprenderas los principios fundamentales de las redes de computadoras para prepararse para las rutas de aprendizaje de administradores y desarrolladores de Azure.. | Lee esto después de ver el video anterior.                                                                                              |
| Redes                                                                    | [Descripción de los servicios de redes de Azure](https://learn.microsoft.com/es-es/azure/networking/fundamentals/networking-overview) | Aprenderas los principios fundamentales de las redes de computadoras para prepararse para las rutas de aprendizaje de administradores y desarrolladores de Azure.  | Opcional, pero creo que es un buen momento para introducirte en los servicios en la nube en la categoría de redes, en este caso Azure.. |

## Proyectos

Acá hay algunos proyectos para reforzar lo que aprendiste en esta fase. Te recomiendo crear videos o un blog con el contenido de tus proyectos.

| Título                                                                               | Recruso                                                                                                           | Notas                                                |
| :----------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------- |
| Instalar Linux en una computadora                                                    | Investigar una distro e instalarla (Nos gusta [Pop!\_OS](https://pop.system76.com/))                              | No hay mejor forma de aprender Linux que usandolo!   |
| Configurar un[Servidor LAMP](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>) | Una tarea bastante popular de un administrador Linux.                                                             |
| Desplegar un servidor NAS                                                            | Mira [FreeNAS](https://www.freenas.org/)                                                                          |
| Desplegar tu propia nube                                                             | Mira [NextCloud](https://nextcloud.com/)                                                                          | Una forma divertida de crear tu propia nube privada. |
| Converir archivos de video                                                           | Mira [ffmpeg](https://ffmpeg.org/ffmpeg.html) Usalo para escribir un script que convierta de archivos .mov a .mp4 | Excelente forma de practicar tus habilidades.        |

## Conceptos que te deberían ser familiar al final de esta fase

### Comandos

- Navegar usando el comando `cd` .
- Cómo listar el contenido de un directorio usando el comando`ls`.
- Crear, copiar, mover y renombrar directorios y archivos usando los comandos `mkdir`, `cp`, `rm`, y `touch`.
- Buscar cosas con los comandos `locate`, `whereis`, `which`, y `find`.
- Comprender como aprender más de los comandos usando `which`, `man`, y `--help`.
- Familiarizarte con encontrar detalles de los registros en `/var/log`.
- Cómo mostrar el contendo de un archivo usando los comandos `cat`, `less`, `more`, `tail`, `head`.
- Filtrar con `grep` y `sed`.
- Redirigir la salida estandar, la entrada y los errores con los operadores `>` y el comando `tee`.
- Cómo usar el pipeline con el operador `|`.
- Manipular archivos con `nano` o `vim`.
- Instalar y desinstalar paquetes. Dpendiendo de la distro, debian se basa en el gestor de paquetes `apt`.
- Controlar los permisos con los comandos `chown`, `chgrp`, `chmod`.
- Crear usuarios con el comando `sudo`.
- Gestion de procesos con `ps`, `top`, `nice`, `kill`.
- Administrar variables de usuarios y de ambiente con los comandos `env`, `set`, `export`.
- Agregar directorios al `PATH`.
- Comprimir y archivar con `tar`, `gzip`, `gunzip`.
- Cómo accedar a un servidor Linux usando `ssh`.

### Redes

Concepts you should be familiar with.

- Modelo OSI
- Dirección IP
- Dirección MAC
- Enrutamiento y conmutación
- TCP/IP
- TCP y UDP
- DNS
- Túneles VPN
- TLS y SSL

### Bash Scripting

- ¿Qué es una shell?
- ¿Qué es Bash?
- ¿Por que mi script tiene que empezar con #!?
- Qué es una variable y como usarla.
- ¿Cómo permitir el ingereso de datos por parte de un usuario?
- ¿Cómo ejecutar un script?

## Certificaciones que te puede interesar mirar

Hay varias certificaciones de Linux y realmente puedes elegir estudiar para cualquiera de ellas, pero muchas de ellas cubren MUCHO más de lo que necesitas saber para tener una base sólida y están más enfocadas en la administración de Linux.

- [LPI essentials](https://www.lpi.org/our-certifications/linux-essentials-overview)
- [RedHat](https://www.redhat.com/en/services/training-and-certification)
- [Linux Foundation](https://training.linuxfoundation.org/certification-catalog/)
- [Oracle](https://education.oracle.com/oracle-certification-path/pFamily_358)
- [LPI](https://www.lpi.org/)
- [Comptia Linux+](https://www.comptia.org/certifications/linux)

También hay TONELADAS de certificaciones de redes y, al igual que las de Linux, están más enfocadas en brindarte una gran cantidad de conocimientos para que puedas convertirte en un ingeniero/especialista en redes; nuevamente, en un nivel introductorio, es un poco excesivo.

. If you did want to get one, take a look at the [Certificaciones Cisco ](https://www.cisco.com/c/en/us/training-events/training-certifications/certifications.html) que son prácticamente estándar de la industria y/o [Comptia Network+](https://www.comptia.org/certifications/network)

Al final del día, si los queres tomar, ve por ellos :)
