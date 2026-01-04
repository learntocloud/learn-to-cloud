# Tema 2: Integración continua y despliegue continuo (CI/CD)

> ⏱️ **Tiempo estimado:** 3-4 días

Un reto típico después de la fase anterior es tener que correr manualmente comandos de build y push por cada cambio en tu código. Eso se vuelve tedioso y propenso a errores.

En este tema vas a automatizar ese proceso con pipelines de Continuous Integration (CI) y Continuous Deployment (CD). Estos pipelines construyen, testean y despliegan tu aplicación automáticamente cada vez que hay cambios, asegurando un flujo de trabajo más confiable.

Hay varias herramientas de CI/CD como Jenkins, GitHub Actions y GitLab CI, que ejecutan tareas automáticamente cuando ocurre un trigger (commits, pull requests, schedules, etc.).

---

## 📚 Ruta de aprendizaje

### Estudia

- ¿Qué es [Continuous Integration (CI)](https://www.ibm.com/think/topics/continuous-integration) y [Continuous Delivery (CD)](https://www.ibm.com/think/topics/continuous-delivery)?
- Diferencias entre [Continuous Integration, Continuous Delivery y Continuous Deployment](https://www.jetbrains.com/teamcity/ci-cd-guide/continuous-integration-vs-delivery-vs-deployment/)
- Implementar CI/CD con:
  - [GitHub Actions](https://www.youtube.com/watch?v=R8_veQiYBjI)
  - [AWS CodePipeline](https://www.youtube.com/watch?v=zZt-LTY9hAE)
  - [Azure DevOps](https://www.youtube.com/watch?v=4BibQ69MD8c)
  - [GCP Cloud Build](https://www.youtube.com/watch?v=vCt5zMvgV5s)

---

## 🛠️ Tareas hands-on

### Configuración básica de un pipeline CI/CD

1. Configura un pipeline básico para tu app containerizada del tema anterior
2. Usa GitHub Actions o Jenkins para automatizar:
   - Build de la app
   - Ejecutar tests
   - Construir imagen Docker
   - Pushear la imagen a un registry (DockerHub, AWS ECR, GCP GCR, etc.)
3. Configura el trigger en commits a tu rama principal
4. Agrega un sistema simple de notificaciones para avisarte de éxitos o fallos

### Reto avanzado (opcional)

Implementa un pipeline multi-ambiente: despliega primero a staging, corre tests y luego promueve a producción.

---

## 🧪 Pon a prueba tu conocimiento

Usa un asistente de IA para evaluarte. Pasos:

1. Abre una conversación nueva con ChatGPT, Claude o Google Gemini
2. Usa este prompt inicial:

    ```txt
    Estoy aprendiendo sobre pipelines CI/CD. Quiero que actúes como entrevistador/a:
    - Hazme preguntas una por una sobre conceptos de CI/CD
    - No me des las respuestas de inmediato
    - Dame feedback sobre mis respuestas
    - Si estoy mal, guíame hacia la respuesta correcta
    - Comparte ejemplos reales después de cada respuesta
    ¿Empezamos?
    ```

3. Temas clave:
   - Fundamentos y diferencias de CI/CD
   - Componentes y etapas del pipeline
   - Integración con control de versiones
   - Quality gates y testing
   - Estrategias de despliegue
   - Consideraciones de seguridad

4. Después de cada respuesta:
   - Pide feedback
   - Pide ejemplos reales
   - Pide aclaraciones si lo necesitas

:::tip
Tip pro: comparte tu contexto: “Estoy practicando con una app Node.js containerizada usando GitHub Actions. Enfoca las preguntas en ese escenario.”
:::

Recuerda: el objetivo es evaluar tu entendimiento, no acertar todo a la primera.

---

## ✅ Checklist del tema

Antes de seguir, asegúrate de tener:

- [ ] Entendido fundamentos y diferencias de CI/CD
- [ ] Aprendido sobre componentes y etapas del pipeline
- [ ] Configurado un pipeline básico (GitHub Actions u otro)
- [ ] Configurado builds automáticos en commits
- [ ] Implementado build y push de imagen Docker
- [ ] Agregado notificaciones de éxito/fallo
- [ ] (Opcional) Implementado despliegue multi-ambiente

---

