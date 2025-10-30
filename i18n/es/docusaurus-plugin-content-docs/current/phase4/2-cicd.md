# Tema 2: Integración Continua y Despliegue Continuo

Un desafío que enfrentarás después de la fase anterior es la necesidad de ejecutar comandos de reconstrucción y subida manualmente por cada cambio realizado en tu código, lo cual puede convertirse en un proceso tedioso y propenso a errores. En este tema, explicaremos cómo automatizar todo este proceso utilizando tuberías o *pipelines* de Integración Continua (CI) y Despliegue Continuo (CD). Estas tuberías te permiten construir, probar y desplegar tu aplicación automáticamente cada vez que se realizan cambios, asegurando un flujo de trabajo de desarrollo fluido y confiable.

Hay varias herramientas de CI/CD disponibles, como Jenkins, GitHub Actions y GitLab CI, que simplifican este proceso al ejecutar tareas y desplegar código automáticamente basándose en disparadores como confirmaciones de código, solicitudes de extracción (*pull requests*) o eventos programados.

## Estudio

- ¿Qué es la [Integración Continua (CI)](https://www.ibm.com/think/topics/continuous-integration) y la [Entrega Continua (CD)](https://www.ibm.com/think/topics/continuous-delivery)?
- ¿Cuál es la diferencia entre [Integración Continua, Entrega Continua y Despliegue Continuo?](https://www.jetbrains.com/teamcity/ci-cd-guide/continuous-integration-vs-delivery-vs-deployment/)?
- Implementación de tuberías de CI/CD con:
  - [GitHub Actions](https://www.youtube.com/watch?v=R8_veQiYBjI)
  - [AWS CodePipeline](https://www.youtube.com/watch?v=zZt-LTY9hAE)
  - [Azure DevOps](https://www.youtube.com/watch?v=4BibQ69MD8c)
  - [GCP Cloud Build](https://www.youtube.com/watch?v=vCt5zMvgV5s)

## Pon a prueba tus conocimientos

Utiliza un asistente de IA para poner a prueba tu comprensión de los conceptos de CI/CD. Aquí te explicamos cómo:

1. Inicia una nueva conversación con ChatGPT, Claude o Google Gemini
2. Utiliza esta instrucción inicial:

    ```txt
    Estoy aprendiendo sobre tuberías de CI/CD. Me gustaría que actúes como un entrevistador:
    - Hazme preguntas una a la vez sobre conceptos de CI/CD
    - No me proporciones las respuestas inmediatamente
    - Dame retroalimentación sobre mis respuestas
    - Si me equivoco, guíame hacia la respuesta correcta
    - Comparte ejemplos relevantes del mundo real después de cada respuesta
    ¿Podemos empezar?
    ```

3. Intenta responder a cada pregunta que te haga la IA. Los temas clave que debes estar preparado para discutir son:
   - Fundamentos y diferencias de CI/CD
   - Componentes y etapas de la tubería
   - Integración con control de versiones
   - Puertas de calidad y pruebas
   - Estrategias de despliegue
   - Consideraciones de seguridad

4. Después de cada respuesta:
   - Pide retroalimentación sobre tu respuesta
   - Solicita ejemplos del mundo real
   - Pide una aclaración si es necesario

Consejo profesional: Comparte tu contexto específico: "Estoy practicando con una aplicación Node.js contenerizada usando GitHub Actions. Por favor, centra tus preguntas en torno a ese escenario."

Recuerda: El objetivo es poner a prueba tu comprensión, no obtener respuestas perfectas inmediatamente.

## Tareas Prácticas

### Configuración Básica de la Tubería CI/CD

1. Configura una tubería de CI/CD básica para tu aplicación contenerizada de la fase anterior
2. Utiliza GitHub Actions o Jenkins para automáticamente:
   - Construir tu aplicación
   - Ejecutar pruebas
   - Construir una imagen de Docker
   - Subir la imagen a un registro de contenedores (por ejemplo, DockerHub, AWS ECR, GCP GCR)
3. Configura la tubería para que se active con las confirmaciones de código en tu rama principal
4. Agrega un sistema de notificación simple para alertarte sobre despliegues exitosos o fallos

### Desafío Avanzado (Opcional)

Implementa una tubería de despliegue multi-entorno que despliegue primero en un entorno de ensayo (staging), ejecute pruebas y luego lo promueva a producción.