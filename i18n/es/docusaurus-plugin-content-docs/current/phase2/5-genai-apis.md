# Tema 5: APIs de IA generativa

> ⏱️ **Tiempo estimado:** 4-5 días

La IA generativa y los Large Language Models (LLMs) están cambiando cómo construimos aplicaciones. En este tema vas a aprender a integrar APIs de LLMs en tus aplicaciones en Python. Estas habilidades son clave para cloud engineering moderno porque los servicios de IA se están volviendo componentes centrales de las plataformas cloud.

---

## 📚 Ruta de aprendizaje

### Entender lo básico de una API de LLM

Antes de programar, entiende estos conceptos:

1. **Formato de mensajes**: los LLMs trabajan con entradas estilo conversación
   - Mensaje system: define comportamiento/personalidad
   - Mensaje user: tu prompt/pregunta
   - Mensaje assistant: la respuesta de la IA

2. **Completions**: la API genera texto basado en tu input

3. **Parámetros**:
   - `temperature`: controla aleatoriedad (0 = determinista, 1 = creativo)
   - `max_tokens`: limita la longitud de la respuesta
   - `model`: qué versión/modelo usar

4. **Structured outputs**: obtener JSON en vez de texto libre

## Aprendizaje práctico: Python OpenAI Demos

Antes de configurar recursos cloud, empieza con práctica gratis usando GitHub Models:

**Recurso:** [Python OpenAI Demos](https://aka.ms/python-openai-demos) ([Video Walkthrough](https://www.youtube.com/watch?v=_daw48A-RZI))

Este repo enseña el SDK de OpenAI para Python con ejemplos de dificultad progresiva—el mismo SDK que se usa con Azure OpenAI. Puedes correrlo **completamente gratis** usando GitHub Models en GitHub Codespaces.

**Acción:** haz estos ejemplos en orden:

1. **Chat Completions** - empieza con `chat.py`, luego prueba `chat_stream.py` y `chat_history.py`
2. **Structured Outputs** - aprende a obtener JSON con `structured_outputs_basic.py`
3. **Function Calling** - mira cómo el LLM puede llamar tu código con `function_calling_basic.py`

**¿Por qué empezar aquí?**
- ✅ Gratis (usa GitHub Models, no necesitas tarjeta)
- ✅ Funciona en el navegador (GitHub Codespaces)
- ✅ Mismo SDK que vas a usar con Azure OpenAI
- ✅ Construye habilidades paso a paso

### Serie de videos: Python + IA

Para aprender más, revisa estos videos de la serie **Python + AI livestream** ([All Resources](https://aka.ms/pythonai/resources)):

| Tema | Slides | Video |
|------|--------|-------|
| LLMs | [Slides](https://aka.ms/pythonai/slides/llms) | [Watch](https://aka.ms/PythonAI107-f) |
| Structured Outputs | [Slides](https://aka.ms/pythonai/slides/structuredoutputs) | [Watch](https://aka.ms/PythonAI1015-f) |

> **Opcional:** la serie completa cubre 9 temas incluyendo RAG, AI Agents y más. Míralos todos si quieres un entendimiento profundo de Python + IA.

## Elige tu proveedor cloud

Cuando completes los demos, aplica tus habilidades al servicio de IA de tu proveedor. Esto te enseña skills cloud específicos como IAM, administración de recursos y billing.

- **Azure OpenAI** - si te enfocas en Azure (se accede vía Azure AI Foundry)
- **AWS Bedrock** - si te enfocas en AWS (soporta Claude, Llama y otros)
- **GCP Vertex AI** - si te enfocas en Google Cloud (soporta Gemini y otros)

**Acción:** elige el proveedor que vaya con tu enfoque.

## Práctica en el playground del proveedor

**IMPORTANTE:** prueba en el playground ANTES de escribir código.

### Azure OpenAI
- Estudia: [Azure OpenAI Chat Completions Quickstart](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/chatgpt-quickstart)
- Acción: [Crea un recurso de Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/create-resource)
- Acción: [Usa el playground de chat de Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/chatgpt-quickstart?pivots=programming-language-studio)

### AWS Bedrock
- Estudia: [AWS Bedrock Getting Started](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html)
- Acción: [Usa el playground de AWS Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/playgrounds.html)
- Acción: habilita acceso a modelos (Claude o Llama) en tu región

### GCP Vertex AI
- Estudia: [Vertex AI Generative AI Overview](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview)
- Acción: [Usa Vertex AI Studio](https://cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-text)
- Acción: prueba prompts en la interfaz de texto

## Ejercicios en el playground

En el playground del proveedor que elegiste, prueba estos prompts:

1. **Completado simple**:
   ```
   Analyze the sentiment of this text: "I learned so much about Python today!"
   ```

2. **Salida estructurada**:
   ```
   Analyze the sentiment of this journal entry and respond in JSON format with fields: sentiment (positive/negative/neutral) and summary (2 sentences max).
   
   Journal entry: "Today I struggled with async Python but finally got it working after 3 hours."
   ```

3. **Prueba con system message**: agrega un system message:
   ```
   System: You are a helpful learning coach who analyzes student journal entries.
   User: Analyze this entry: "I'm frustrated with databases but making progress."
   ```

Toma screenshots de respuestas exitosas. Luego vas a replicar esto en código.

## Integración con SDK de Python

Ahora implementa los mismos prompts en Python.

### Azure OpenAI SDK
- Acción: [Azure OpenAI Python Quickstart](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/chatgpt-quickstart?pivots=programming-language-python)
- Instala: `pip install openai`

### AWS Bedrock SDK
- Acción: [AWS Bedrock Python SDK Examples](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started-api.html)
- Instala: `pip install boto3`

### GCP Vertex AI SDK
- Acción: [Vertex AI Python SDK Quickstart](https://cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal)
- Instala: `pip install google-cloud-aiplatform`

## Conceptos clave que debes dominar

Recorre la documentación de Python del proveedor que elegiste y asegúrate de entender:

1. **Autenticación**: API keys, service principals o IAM roles
2. **Hacer requests**: enviar mensajes al LLM
3. **Manejar respuestas**: parsear el texto de salida
4. **Manejo de errores**: rate limits, timeouts, requests inválidos
5. **Variables de entorno**: guardar keys de forma segura (¡NUNCA subas keys a git!)
6. **Soporte async**: usar async/await con APIs de LLM

## Ejercicio de práctica

Crea un script `llm_test.py` que:

1. Cargue credenciales desde variables de entorno
2. Envíe el texto de una entrada de journal al LLM
3. Pida análisis de sentimiento (positivo/negativo/neutral)
4. Pida un resumen de 2 oraciones
5. Imprima los resultados de forma clara

Ejemplo de entrada para probar:
```
"Today I learned about FastAPI and built my first endpoint. The automatic documentation is amazing! I struggled a bit with async functions but the official tutorial helped. Tomorrow I'll tackle database integration."
```

## Conciencia de costos

Las APIs de LLM se cobran por uso. Costos típicos para esta fase:
- ~$0.50 - $3.00 para pruebas y completar el capstone
- Se cobran tokens tanto de entrada (prompt) como de salida (respuesta)
- Prompts más largos = más costo
- Modelos más grandes (GPT-4o, Claude Sonnet) = más costosos que modelos pequeños (GPT-4o-mini, Claude Haiku)

**Tip:** usa modelos más pequeños y rápidos para desarrollo y pruebas. Cambia a modelos grandes solo cuando lo necesites.

---

## 🧪 Pon a prueba tu conocimiento

Cuando termines los tutoriales, usa un asistente de IA para evaluar tu entendimiento. Ejemplos de prompts:

1. ¿Puedes explicar qué es una API de un LLM y cómo se diferencia de una REST API tradicional?
2. ¿Puedes explicar el rol de system messages, user messages y assistant messages?
3. ¿Puedes evaluarme sobre qué controla el parámetro temperature?
4. ¿Puedes explicar cómo guardar API keys de forma segura en una app de Python?
5. ¿Puedes pedirme que explique la diferencia entre llamadas síncronas y asíncronas a una API de LLM?
6. ¿Puedes evaluarme sobre cómo manejar errores y rate limits al llamar APIs de LLM?
7. ¿Puedes explicar cómo obtener salida estructurada JSON en vez de texto libre?

---

## ✅ Checklist del tema

Antes de seguir, asegúrate de tener:

- [ ] Completado los ejercicios de Python OpenAI Demos
- [ ] Probado prompts en el playground del proveedor (Azure AI Foundry, AWS Bedrock o Vertex AI)
- [ ] Entendido el formato de mensajes (system, user, assistant)
- [ ] Practicado salidas estructuradas (respuestas JSON)
- [ ] Creado un script en Python que llama una API de LLM
- [ ] Guardado API keys de forma segura en variables de entorno
- [ ] Entendido lo básico de costos y tokens

---

