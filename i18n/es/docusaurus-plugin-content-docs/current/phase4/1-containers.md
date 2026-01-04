# Tema 1: Containerización

> ⏱️ **Tiempo estimado:** 3-4 días

La containerización es un enfoque moderno para desplegar y administrar aplicaciones y servicios en distintos entornos. Te permite empaquetar software, herramientas y dependencias en unidades livianas y portables llamadas contenedores.

**Beneficios clave:**

- Consistencia entre desarrollo, testing y producción
- Uso más eficiente de recursos que VMs
- Despliegue y escalado más simples
- Aislamiento entre aplicaciones

Hay muchas herramientas de contenedores como Docker, Podman, Containerd, etc.
En este tema vas a aprender a usar herramientas como Docker para crear estos entornos aislados y explorar cómo AWS, Azure y GCP soportan workloads containerizados.
También vas a aprender cómo aprovechar contenedores para correr servidores MCP (Model Context Protocol), que permiten integrar apps con LLMs y herramientas externas de IA.

---

## 📚 Ruta de aprendizaje

### Estudia

### Conceptos base

- ¿Qué es la [Containerización](https://github.com/resources/articles/devops/containerization)?
- Diferencia entre [Containerización y virtualización](https://kodekloud.com/blog/virtualization-vs-containerization/)
- ¿Qué es [Docker](https://youtu.be/3c-iBn73dDE)?
- ¿Qué es [MCP (Model Context Protocol)](https://modelcontextprotocol.io/docs/getting-started/intro)?

### Registros de contenedores

- ¿Qué es un [Container Registry](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-registry/)?
- Cómo containerizar una app y desplegarla en distintos registries:
  - [DockerHub](https://docs.docker.com/get-started/workshop/04_sharing_app/)
  - [AWS ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html)
  - [Azure Container Registry](https://learn.microsoft.com/en-us/training/modules/deploy-use-azure-container-registry/)
  - [Google Container Registry](https://www.youtube.com/watch?v=D1_FC6pGutQ)

---

## 🛠️ Tareas hands-on

### Proyecto básico de containerización

1. Crea una app simple (o usa una que ya tengas)
2. Escribe un Dockerfile para la app
3. Construye la imagen Docker
4. Corre el contenedor local y verifica que funcione
5. Crea una cuenta en DockerHub (u otro registry)
6. Taggea y pushea tu imagen al registry
7. Pullear y correr tu imagen en otra máquina para validar portabilidad

### Correr el GitHub MCP Server localmente como contenedor

1. Asegúrate de tener [Docker Desktop](https://www.docker.com/products/docker-desktop/) y GitHub Copilot instalado
2. Instala el [GitHub MCP Server oficial](https://github.com/github/github-mcp-server) en Docker Desktop
3. Crea un GitHub Personal Access Token y pásaselo al server
4. Habilita MCP Gateway en VS Code con `docker mcp gateway run` (usa la Command Palette)
5. Habilita Agent mode en GitHub Copilot
6. Explora y prueba: consulta repos y realiza operaciones de GitHub

### Problemas comunes y troubleshooting

- [Docker Common Issues & Solutions](https://docs.docker.com/engine/reference/troubleshoot/)
- [Best Practices for Writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

---

## 🧪 Pon a prueba tu conocimiento

Usa un asistente de IA para evaluarte. Pasos:

1. Abre una conversación nueva con ChatGPT, Claude o Google Gemini
2. Usa este prompt inicial:

   ```txt
   Estoy aprendiendo sobre contenedores y Docker. Quiero que actúes como entrevistador/a:
   - Hazme preguntas una por una sobre conceptos de containerización
   - No me des las respuestas de inmediato
   - Dame feedback sobre mis respuestas
   - Si estoy mal, guíame hacia la respuesta correcta
   - Comparte ejemplos reales después de cada respuesta
   ¿Empezamos?
   ```

3. Intenta responder cada pregunta. Temas clave:
   - Contenedores vs máquinas virtuales
   - Arquitectura de Docker y sus componentes
   - Estructura de Dockerfile y buenas prácticas
   - Registries y manejo de imágenes
   - Networking y storage en contenedores
   - Consideraciones de seguridad

4. Después de cada respuesta:
   - Pide feedback
   - Pide ejemplos reales
   - Pide aclaraciones si lo necesitas

:::tip
Tip pro: comparte tu contexto específico: “Estoy containerizando una app Node.js con Docker. Enfoca las preguntas en ese escenario.”
:::

Recuerda: el objetivo es evaluar tu entendimiento, no acertar todo a la primera.

---

## ✅ Checklist del tema

Antes de seguir, asegúrate de tener:

- [ ] Entendido containerización vs virtualización
- [ ] Aprendido lo básico de Docker y su arquitectura
- [ ] Escrito un Dockerfile para una app
- [ ] Construido y corrido un contenedor local
- [ ] Pusheado una imagen a un registry
- [ ] Configurado y probado el GitHub MCP Server
- [ ] Entendido networking y storage en contenedores

---

