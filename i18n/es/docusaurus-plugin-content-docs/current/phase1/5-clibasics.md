# Tema 5: Fundamentos de la CLI de Linux

> ⏱️ **Tiempo estimado:** 1 semana

Necesitas habilidades de CLI en Linux para trabajar con cloud. Te recomendamos leer y trabajar [Linux Basics for Hackers](https://nostarch.com/linuxbasicsforhackers#content). También podrías ir directo a la lista de comandos de abajo e investigarlos uno por uno, pero en nuestra opinión eso no te da suficiente contexto de cómo funcionan en conjunto.

---

## 📚 Ruta de aprendizaje

Para este tema, te recomendamos avanzar por los **Capítulos 1-8** del libro, que cubren habilidades esenciales para trabajo en cloud:

1. Getting Started with the Basics
2. Text Manipulation
3. Analyzing and Managing Networks
4. Adding and Removing Software
5. Controlling File and Directory Permissions
6. Process Management
7. Managing User Environment Variables
8. Bash Scripting

**Opcional pero útil:** Los capítulos 9-11 (Compressing/Archiving, Filesystem Management y Logging) dan contexto extra.

## Comandos base

Antes de empezar los retos, familiarízate con estos comandos:

- `pwd`: Print working directory – muestra tu ubicación actual.
- `cd`: Change directory – navegar entre carpetas.
- `ls`: listar contenido del directorio.
- `cat`: mostrar contenido de archivos.

## Reto 1: Archivos ocultos

Aprende estos comandos para encontrar archivos ocultos:

- `ls -a`: lista todos los archivos, incluyendo los ocultos.
- `ls -la`: listado detallado incluyendo ocultos.
- `find . -name ".*"`: busca archivos ocultos.

**Conceptos clave:**

- En Linux, los archivos ocultos empiezan con un punto (`.`).
- No se muestran por defecto.
- Usa la opción `-a` con `ls` para verlos.

## Reto 2: Búsqueda de archivos

Domina estos comandos para buscar:

- `find /path -name "pattern"`: busca archivos por nombre.
- `find /path -type f`: busca archivos regulares.
- `locate filename`: búsqueda rápida usando una base de datos.
- `grep -r "text" /path`: busca contenido de forma recursiva.

## Reto 3: Análisis de tamaño

Comandos para analizar tamaños:

- `ls -lh`: lista con tamaños “human-readable”.
- `du -h`: muestra uso de disco.
- `sort -h`: ordena por tamaños “human-readable”.
- `find /path -type f -size +1M`: encuentra archivos mayores a 1MB.

## Reto 4: Investigación de usuarios

Comandos de usuarios:

- `id username`: muestra UID y grupos.
- `cat /etc/passwd`: ver cuentas de usuario.
- `getent passwd uid`: obtener usuario por UID.
- `ls -l /home/`: lista directorios home.

**Entendiendo archivos de usuario:**

- `/etc/passwd`: información de cuentas.
- `~/.profile` y `~/.bashrc`: configuración del shell.

## Reto 5: Análisis de permisos

Comandos para permisos:

- `ls -l`: ver permisos.
- `stat filename`: info detallada.
- `find / -perm 777`: busca permisos específicos.
- `chmod`: cambia permisos.

## Reto 6: Servicios de red

Comandos para investigar red:

- `netstat -tuln`: lista puertos escuchando.
- `ss -tuln`: alternativa moderna a netstat.
- `lsof -i`: lista archivos de red abiertos.
- `curl localhost:port`: prueba conectividad HTTP.
- `nc -zv host port`: prueba conexión TCP.

## Reto 7: Codificar/decodificar

Comandos de procesamiento de texto:

- `base64`: codifica o decodifica texto.
- `echo -n "text"`: imprime sin salto de línea.
- Operador pipe (`|`) para encadenar comandos.

## Reto 8: Configuración de SSH

Comandos y prácticas de SSH:

- `ls -la ~/.ssh/`: lista el directorio SSH.
- `find ~/.ssh -type f`: encuentra archivos relacionados.
- `chmod 600`: permisos seguros para llaves.
- `ssh-keygen`: genera llaves SSH.

**Buenas prácticas:**

- Mantén tus llaves privadas seguras.
- Asegúrate de tener permisos correctos (por ejemplo, 600 para llaves).
- Revisa tu archivo `authorized_keys`.

## Reto 9: Troubleshooting DNS

Ahora que los retos incluyen problemas de DNS, aprende a comparar y editar archivos de configuración:

- Familiarízate con `/etc/resolv.conf` y su backup.
- Practica usando herramientas de comparación para ver diferencias.
- Repasa comandos de edición para modificar archivos de forma segura.

## Reto 10: Subida remota

En este reto vas a activar una flag subiendo un archivo:

- Entiende métodos comunes para transferir archivos (por ejemplo, secure copy u otras utilidades).
- Aprende a trabajar con directorios remotos para detectar archivos nuevos.
- Prueba diferentes enfoques de transferencia.

## Reto 11: Configuración web

Este reto implica identificar un puerto no estándar de un servidor web:

- Aprende a localizar y revisar archivos de configuración (por ejemplo, de `nginx`).
- Familiarízate con lo básico de administración de servicios para reiniciar o recargar.
- Entiende cómo la configuración cambia el comportamiento del servidor.

## Reto 12: Análisis de tráfico de red

En el reto más reciente, vas a analizar tráfico de red para descubrir mensajes ocultos:

- Familiarízate con métodos de captura de tráfico.
- Aprende a inspeccionar paquetes para encontrar datos.
- Experimenta con herramientas de análisis sin depender de “recetas” exactas.

## Tips generales

1. Usa las páginas `man` para entender opciones.
2. Experimenta con combinaciones y pipes.
3. Resuelve cada reto para construir entendimiento paso a paso.

Recuerda: la meta es aprender los comandos y entender cómo funcionan. Date tiempo para probar y explorar opciones y comportamiento.

---

## ✅ Checklist del tema

Antes de seguir, asegúrate de poder responder “sí” a esto:

- [ ] Completé los capítulos 1-8 de Linux Basics for Hackers (o equivalente)
- [ ] Entiendo comandos básicos de navegación (`cd`, `ls`, `pwd`)
- [ ] Puedo manipular archivos y carpetas desde la línea de comandos
- [ ] Entiendo permisos de archivos y cómo cambiarlos
- [ ] Puedo usar pipes y redirects para encadenar comandos
- [ ] Entiendo conceptos básicos de bash scripting

---
