# Tema 6: Prompt Engineering

> ⏱️ **Tiempo estimado:** 2-3 días

Prompt engineering es el arte y la ciencia de escribir instrucciones efectivas para Large Language Models (LLMs). Un buen prompt puede mejorar muchísimo la calidad, precisión y utilidad de las respuestas. Esta habilidad es clave para integrar IA en aplicaciones de forma efectiva.

---

## 📚 Ruta de aprendizaje

## ¿Qué es prompt engineering?

Prompt engineering es diseñar entradas (prompts) que guían a un LLM para producir el resultado que quieres. A diferencia de programación “tradicional” donde escribes lógica explícita, con LLMs describes lo que quieres en lenguaje natural.

**Ejemplo de prompting malo vs bueno:**

❌ **Malo**: "Analyze this"
✅ **Bueno**: "Analyze the sentiment of this student's journal entry. Classify it as positive, negative, or neutral, and explain why in 2 sentences."

## Principios base

### 1. Sé claro/a y específico/a

Prompts vagos producen resultados vagos.

❌ **Vago**: "Tell me about this journal entry"
✅ **Específico**: "Identify 3 key learning topics mentioned in this journal entry"

### 2. Da contexto y rol

Dale al LLM contexto sobre su rol y tarea.

```
System: You are an experienced software engineering mentor analyzing student learning journals.

User: This student wrote: "I spent 4 hours debugging a SQL query today. Finally found the issue - a missing JOIN."

What learning patterns do you observe?
```

### 3. Usa ejemplos (few-shot prompting)

Muéstrale ejemplos de lo que quieres.

```
Analyze these journal entries for sentiment:

Example 1:
Entry: "Python is so frustrating, nothing works!"
Sentiment: negative
Reason: Expresses frustration and defeat

Example 2:
Entry: "Finally got my API working! So satisfying."
Sentiment: positive  
Reason: Expresses accomplishment and satisfaction

Now analyze this entry:
Entry: "Learned about async/await today. Still confused but making progress."
Sentiment: ?
```

### 4. Especifica el formato de salida

Dile exactamente cómo estructurar la respuesta.

```
Analyze this journal entry and respond in this JSON format:
{
  "sentiment": "positive" | "negative" | "neutral",
  "confidence": 0-100,
  "key_topics": ["topic1", "topic2"],
  "summary": "2 sentence summary"
}

Entry: "Today I deployed my first FastAPI app to the cloud!"
```

### 5. Controla creatividad con temperature

- **Temperature baja (0.0 - 0.3)**: determinista, enfocado, consistente
  - Úsalo para: clasificación, extracción estructurada, análisis factual

- **Temperature media (0.4 - 0.7)**: balance entre creatividad y consistencia
  - Úsalo para: resúmenes, explicaciones, tareas generales

- **Temperature alta (0.8 - 1.0)**: creativo, variado, exploratorio
  - Úsalo para: brainstorming, escritura creativa, sugerencias variadas

## Patrones prácticos para la Journal API

### Patrón 1: Análisis de sentimiento

```
System: You are a sentiment analyzer for student learning journals.

User: Classify the sentiment of this journal entry as positive, negative, or neutral. Be objective.

Entry: "{journal_text}"

Respond only with: positive, negative, or neutral
```

### Patrón 2: Generación de resumen

```
System: You are a learning coach who writes concise summaries.

User: Summarize this journal entry in exactly 2 sentences. Focus on what the student learned and any challenges they faced.

Entry: "{journal_text}"
```

### Patrón 3: Extracción de temas

```
System: You are a learning analytics assistant.

User: Extract 3-5 key topics or technologies mentioned in this journal entry. Respond as a JSON array of strings.

Entry: "{journal_text}"

Example format: ["Python", "FastAPI", "databases"]
```

### Patrón 4: Análisis de patrones de aprendizaje

```
System: You are an experienced educator analyzing learning patterns.

User: Based on this journal entry, identify:
1. Primary learning focus
2. Challenges encountered
3. One recommendation for the student

Entry: "{journal_text}"

Format your response as JSON.
```

## Workflow para probar prompts

1. **Empieza en el playground**: prueba prompts en la interfaz web
2. **Itera rápido**: prueba variaciones, ajusta wording, agrega ejemplos
3. **Prueba edge cases**: entradas muy cortas, muy largas, poco claras
4. **Mide calidad**: ¿es consistente? ¿precisa? ¿útil?
5. **Implementa en código**: cuando esté estable, pásalo a Python
6. **Monitorea en producción**: detecta fallas y salidas inesperadas

## Ejercicio: desarrolla tu prompt de análisis

En el playground de tu proveedor, crea un prompt que:

1. Reciba una entrada de journal
2. Regrese JSON con:
   - `sentiment`: positive/negative/neutral
   - `summary`: resumen de 2 oraciones
   - `topics`: arreglo de 2-4 temas
   - `struggle_detected`: boolean (true si la persona expresó dificultad)

Prueba con estos ejemplos:

**Entrada 1:**
```
"Today was amazing! I built my first REST API with FastAPI and all the endpoints work. The automatic documentation feature is so cool. Can't wait to deploy this to the cloud tomorrow."
```

**Entrada 2:**
```
"Spent 5 hours trying to fix a bug in my database connection. Turns out I had the wrong port number in my .env file. Feeling frustrated but at least I learned about environment variables."
```

**Entrada 3:**
```
"Continued learning Python today. Worked through the functions chapter."
```

Tu prompt debería manejar bien los tres casos.

## Técnicas avanzadas

### Chain of Thought

Pídele al modelo que explique su razonamiento:

```
Analyze this journal entry step by step:

1. First, identify the main topic
2. Then, determine the sentiment
3. Finally, assess if the student is making progress

Entry: "{journal_text}"
```

### Restricciones

Pon límites explícitos:

```
Summarize this journal entry. Rules:
- Maximum 2 sentences
- Use simple language
- Focus only on what was learned, not emotions
- Do not make assumptions beyond what's written

Entry: "{journal_text}"
```

### Usa delimitadores

Separa claramente partes del prompt (triple backticks, tags XML, separadores). Esto es especialmente importante con input de usuario:

```
Analyze the sentiment of the journal entry below.

---BEGIN ENTRY---
{journal_text}
---END ENTRY---

Respond with: positive, negative, or neutral
```

Los delimitadores ayudan a prevenir **prompt injection**.

### Dale una salida si no puede

Da un fallback para reducir alucinaciones:

```
Extract the programming language mentioned in this journal entry.
If no specific programming language is mentioned, respond with "none detected".

Entry: "{journal_text}"
```

### El orden importa (recency bias)

Pon instrucciones críticas al inicio y al final:

```
IMPORTANT: Respond only in JSON format.

Analyze this journal entry for learning topics:
"{journal_text}"

Remember: Your response must be valid JSON only.
```

### Output priming

Empieza la respuesta para guiar el formato:

```
Analyze this journal entry and list the key topics.

Entry: "Today I learned about Docker containers and wrote my first Dockerfile."

Key topics:
1.
```

## Errores comunes

❌ **Over-prompting**: demasiada instrucción puede confundir
❌ **Muy poco específico**: produce respuestas inconsistentes
❌ **Ignorar longitud de contexto**: prompts largos cuestan más y pueden truncarse
❌ **No probar variaciones**: rara vez el primer intento es el mejor
❌ **Riesgo de alucinación**: el modelo puede inventar cosas

## Recursos

- Estudia: [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- Estudia: [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- Estudia: [Azure OpenAI Prompt Engineering](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/prompt-engineering)

---

## 🧪 Pon a prueba tu conocimiento

Cuando termines los tutoriales, usa un asistente de IA. Ejemplos:

1. ¿Puedes explicar qué es prompt engineering y por qué importa?
2. ¿Puedes evaluarme sobre la diferencia entre zero-shot, one-shot y few-shot?
3. ¿Puedes explicar cómo temperature afecta las salidas y cuándo usar diferentes valores?
4. ¿Puedes pedirme que explique qué es un system message y en qué se diferencia de un user message?
5. ¿Puedes evaluarme sobre técnicas para obtener JSON estructurado?
6. ¿Puedes explicar el concepto de “chain of thought” prompting?
7. ¿Puedes pedirme que explique errores comunes en prompt engineering y cómo evitarlos?

---

## ✅ Checklist del tema

Antes de seguir, asegúrate de tener:

- [ ] Entendido principios base (claridad, especificidad, contexto)
- [ ] Practicado few-shot prompting con ejemplos
- [ ] Creado prompts que regresan JSON estructurado
- [ ] Probado prompts para sentimiento, resumen y extracción de temas
- [ ] Experimentado con temperature
- [ ] Usado chain of thought prompting
- [ ] Entendido errores comunes a evitar

---

