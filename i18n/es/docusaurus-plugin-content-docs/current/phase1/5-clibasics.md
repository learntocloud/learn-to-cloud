# Tema 5: Fundamentos de la CLI de Linux

Necesitas tener habilidades con la CLI de Linux para trabajar en la nube. Recomendamos que leas [Linux Basics for Hackers](https://nostarch.com/linuxbasicsforhackers#content). También puedes revisar la lista de comandos a continuación e investigar cada uno individualmente, aunque recomendamos el libro.

## Comandos Fundamentales

Antes de comenzar los desafíos, familiarízate con estos comandos esenciales:

- `pwd`: Imprime el directorio de trabajo – muestra tu ubicación actual.  
- `cd`: Cambiar de directorio – navegar entre carpetas.  
- `ls`: Listar el contenido del directorio.  
- `cat`: Mostrar el contenido de un archivo.

## Desafío 1: Archivos Ocultos

Aprende estos comandos para encontrar archivos ocultos:

- `ls -a`: Lista todos los archivos, incluidos los ocultos.  
- `ls -la`: Listado detallado incluyendo archivos ocultos.  
- `find . -name ".*"`: Buscar archivos ocultos.

**Conceptos clave:**

- En Linux, los archivos ocultos comienzan con un punto (`.`).  
- Los archivos ocultos no se muestran por defecto.  
- Usa la opción `-a` con `ls` para mostrar archivos ocultos.

## Desafío 2: Búsqueda de Archivos

Domina estos comandos de búsqueda de archivos:

- `find /path -name "pattern"`: Buscar archivos por nombre.  
- `find /path -type f`: Buscar archivos regulares.  
- `locate filename`: Búsqueda rápida de archivos usando una base de datos.  
- `grep -r "text" /path`: Buscar recursivamente dentro del contenido de archivos.

## Desafío 3: Análisis del Tamaño de Archivos

Comandos para analizar tamaños de archivos:

- `ls -lh`: Listar archivos con tamaños legibles para humanos.  
- `du -h`: Mostrar uso de disco.  
- `sort -h`: Ordenar por tamaños legibles para humanos.  
- `find /path -type f -size +1M`: Encontrar archivos mayores a 1MB.

## Desafío 4: Investigación de Usuarios

Comandos para la gestión/investigación de usuarios:

- `id username`: Mostrar ID de usuario y grupos.  
- `cat /etc/passwd`: Ver cuentas de usuario.  
- `getent passwd uid`: Obtener usuario por UID.  
- `ls -l /home/`: Listar directorios home.

**Comprendiendo archivos de usuario:**

- `/etc/passwd`: Información de cuentas de usuario.  
- `~/.profile` y `~/.bashrc`: Archivos de configuración del shell.

## Desafío 5: Análisis de Permisos

Comandos para trabajar con permisos:

- `ls -l`: Ver permisos de archivos.  
- `stat filename`: Información detallada del archivo.  
- `find / -perm 777`: Encontrar archivos con permisos específicos.  
- `chmod`: Cambiar permisos de archivos.

## Desafío 6: Servicios de Red

Comandos para investigar la red:

- `netstat -tuln`: Listar puertos en escucha.  
- `ss -tuln`: Alternativa moderna a netstat.  
- `lsof -i`: Listar archivos de red abiertos.  
- `curl localhost:port`: Probar conectividad HTTP a un servicio.  
- `nc -zv host port`: Probar conexión TCP.

## Desafío 7: Codificación/Decodificación

Comandos para el procesamiento de texto:

- `base64`: Codificar o decodificar texto.  
- `echo -n "text"`: Echo sin nueva línea.  
- El operador pipe (`|`) para encadenar comandos.

## Desafío 8: Configuración SSH

Comandos relacionados con SSH y buenas prácticas:

- `ls -la ~/.ssh/`: Listar el contenido del directorio SSH.  
- `find ~/.ssh -type f`: Encontrar archivos relacionados con SSH.  
- `chmod 600`: Establecer permisos seguros para claves.  
- `ssh-keygen`: Generar claves SSH.

**Buenas prácticas:**

- Mantén tus claves privadas seguras.  
- Asegura permisos correctos en archivos (por ejemplo, 600 para claves).  
- Revisa tu archivo `authorized_keys`.

## Desafío 9: Solución de Problemas DNS

Ahora que los desafíos incluyen problemas de configuración DNS, aprende a comparar y editar archivos de configuración:

- Familiarízate con `/etc/resolv.conf` y sus respaldos.  
- Practica usando herramientas de comparación de archivos para detectar diferencias.  
- Revisa comandos de edición para modificar archivos de forma segura.

## Desafío 10: Carga Remota

En este desafío, activarás una bandera subiendo un archivo:

- Entiende métodos comunes para transferir archivos (por ejemplo, copia segura u utilidades similares).  
- Aprende a trabajar con directorios remotos para detectar archivos nuevos.  
- Experimenta con distintos enfoques de transferencia de archivos.

## Desafío 11: Configuración Web

Este desafío implica identificar un puerto no estándar de un servidor web:

- Aprende a localizar y revisar archivos de configuración (por ejemplo, de `nginx`).  
- Familiarízate con lo básico de gestión de servicios para reiniciar o recargar servicios.  
- Entiende cómo las configuraciones afectan el comportamiento de servidores web.

## Desafío 12: Análisis de Tráfico de Red

En el desafío más reciente, analizarás tráfico de red para descubrir mensajes ocultos:

- Familiarízate con métodos de captura de tráfico de red.  
- Aprende a inspeccionar el contenido de paquetes en busca de datos ocultos.  
- Experimenta con herramientas de análisis de red sin depender de recetas exactas de comandos.

## Consejos Generales

1. Usa las páginas `man` para entender las opciones de los comandos.  
2. Experimenta con distintas combinaciones de comandos y técnicas de piping.  
3. Trabaja cada desafío para construir tu comprensión de forma incremental.

Recuerda: el objetivo es aprender los comandos y comprender cómo funcionan. Tómate tiempo para experimentar con cada comando y explorar sus opciones y comportamientos.
