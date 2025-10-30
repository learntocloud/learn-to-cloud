# Tema 1: Contenerización

La contenerización (Containerization) es un enfoque moderno para desplegar y administrar aplicaciones y servicios en diversos entornos. Permite empaquetar software, herramientas y sus dependencias en unidades ligeras y portátiles llamadas contenedores.

**Los beneficios clave incluyen:**

- Consistencia entre los entornos de desarrollo, pruebas y producción
- Utilización eficiente de recursos en comparación con las máquinas virtuales
- Despliegue y escalado simplificados
- Aislamiento entre aplicaciones

Existen muchas herramientas de contenerización disponibles como Docker, Podman, Containerd, etc.
En este tema, aprenderás a utilizar herramientas como Docker para crear estos entornos aislados y explorar cómo las plataformas en la nube como AWS, Azure y GCP soportan las cargas de trabajo contenerizadas.

## Estudio

### Conceptos Centrales

- ¿Qué es la [Contenerización?](https://github.com/resources/articles/devops/containerization)
- ¿Qué es [Docker?](https://youtu.be/3c-iBn73dDE)
- Diferencia entre [Contenerización y Virtualización](https://kodekloud.com/blog/virtualization-vs-containerization/)

### Registros de Contenedores

- ¿Qué es un [Registro de Contenedores?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-registry/)
- Cómo contenerizar una aplicación y desplegarla en diferentes registros de contenedores:
  - [DockerHub](https://docs.docker.com/get-started/workshop/04_sharing_app/)
  - [AWS ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html)
  - [Azure Container Registry](https://learn.microsoft.com/en-us/training/modules/deploy-use-azure-container-registry/)
  - [Google Container Registry](https://www.youtube.com/watch?v=D1_FC6pGutQ)

## Pon a prueba tus conocimientos

Utiliza un asistente de IA para poner a prueba tu comprensión sobre la contenerización. Aquí te explicamos cómo:

1. Inicia una nueva conversación con ChatGPT, Claude o Google Gemini
2. Utiliza esta instrucción inicial:

   ```txt
   Estoy aprendiendo sobre contenedores y Docker. Me gustaría que actúes como un entrevistador:
   - Hazme preguntas una a la vez sobre conceptos de contenerización
   - No me proporciones las respuestas inmediatamente
   - Dame retroalimentación sobre mis respuestas
   - Si me equivoco, guíame hacia la respuesta correcta
   - Comparte ejemplos relevantes del mundo real después de cada respuesta
   ¿Podemos empezar?
   ```

3. Intenta responder a cada pregunta que te haga la IA. Los temas clave que debes estar preparado para discutir son:
   - Contenedores vs Máquinas Virtuales
   - Arquitectura y componentes de Docker
   - Estructura de Dockerfile y mejores prácticas
   - Registros de contenedores y gestión de imágenes
   - Redes y almacenamiento de contenedores
   - Consideraciones de seguridad

4. Después de cada respuesta:
   - Pide retroalimentación sobre tu respuesta
   - Solicita ejemplos del mundo real
   - Pide una aclaración si es necesario

Consejo profesional: Comparte tu contexto específico: "Estoy trabajando con una aplicación Node.js que quiero contenerizar usando Docker. Por favor, centra tus preguntas en torno a ese escenario."

Recuerda: El objetivo es poner a prueba tu comprensión, no obtener respuestas perfectas inmediatamente.

## Tareas Prácticas

### Proyecto Básico de Contenerización

1. Crea una aplicación sencilla (o utiliza una existente)
2. Escribe un Dockerfile para la aplicación
3. Construye la imagen de Docker
4. Ejecuta el contenedor localmente y prueba la funcionalidad
5. Crea una cuenta en DockerHub u otro registro de contenedores
6. Etiqueta y sube tu imagen al registro
7. Descarga y ejecuta tu imagen en una máquina diferente para verificar la portabilidad

### Problemas Comunes y Solución de Problemas

- [Problemas Comunes y Soluciones de Docker](https://docs.docker.com/engine/reference/troubleshoot/)
- [Mejores Prácticas para Escribir Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)