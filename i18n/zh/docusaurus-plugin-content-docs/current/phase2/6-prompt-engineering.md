# Topic 6: Prompt Engineering

> ⏱️ **Estimated time:** 2-3 days

Prompt engineering is the art and science of crafting effective instructions for Large Language Models (LLMs). A well-engineered prompt can dramatically improve the quality, accuracy, and usefulness of LLM outputs. This skill is essential for integrating AI into applications effectively.

---

## 📚 Learning Path

### What is Prompt Engineering?

Prompt engineering is designing inputs (prompts) that guide LLMs to produce desired outputs. Unlike traditional programming where you write explicit logic, with LLMs you describe what you want in natural language.

**Example of bad vs good prompting:**

❌ **Bad**: "Analyze this"
✅ **Good**: "Analyze the sentiment of this student's journal entry. Classify it as positive, negative, or neutral, and explain why in 2 sentences."

## Core Principles

### 1. Be Clear and Specific

Vague prompts produce vague results.

❌ **Vague**: "Tell me about this journal entry"
✅ **Specific**: "Identify 3 key learning topics mentioned in this journal entry"

### 2. Provide Context and Role

Give the LLM context about its role and task.

```
System: You are an experienced software engineering mentor analyzing student learning journals.

User: This student wrote: "I spent 4 hours debugging a SQL query today. Finally found the issue - a missing JOIN."

What learning patterns do you observe?
```

### 3. Use Examples (Few-Shot Prompting)

Show the LLM examples of what you want.

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

### 4. Specify Output Format

Tell the LLM exactly how to structure its response.

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

### 5. Control Creativity with Temperature

- **Low temperature (0.0 - 0.3)**: Deterministic, focused, consistent
  - Use for: Classification, structured data extraction, factual analysis
  
- **Medium temperature (0.4 - 0.7)**: Balanced creativity and consistency
  - Use for: Summaries, explanations, general tasks

- **High temperature (0.8 - 1.0)**: Creative, varied, exploratory
  - Use for: Brainstorming, creative writing, diverse suggestions

## Practical Patterns for the Journal API

### Pattern 1: Sentiment Analysis

```
System: You are a sentiment analyzer for student learning journals.

User: Classify the sentiment of this journal entry as positive, negative, or neutral. Be objective.

Entry: "{journal_text}"

Respond only with: positive, negative, or neutral
```

### Pattern 2: Summary Generation

```
System: You are a learning coach who writes concise summaries.

User: Summarize this journal entry in exactly 2 sentences. Focus on what the student learned and any challenges they faced.

Entry: "{journal_text}"
```

### Pattern 3: Key Topics Extraction

```
System: You are a learning analytics assistant.

User: Extract 3-5 key topics or technologies mentioned in this journal entry. Respond as a JSON array of strings.

Entry: "{journal_text}"

Example format: ["Python", "FastAPI", "databases"]
```

### Pattern 4: Learning Pattern Analysis

```
System: You are an experienced educator analyzing learning patterns.

User: Based on this journal entry, identify:
1. Primary learning focus
2. Challenges encountered
3. One recommendation for the student

Entry: "{journal_text}"

Format your response as JSON.
```

## Prompt Testing Workflow

Use this workflow when developing prompts:

1. **Start in the playground**: Test prompts in your provider's web interface
2. **Iterate rapidly**: Try variations, adjust wording, add examples
3. **Test edge cases**: Very short entries, very long entries, unclear entries
4. **Measure quality**: Is the output consistent? Accurate? Useful?
5. **Implement in code**: Once stable, move to Python
6. **Monitor in production**: Track failures and unexpected outputs

## Exercise: Develop Your Analysis Prompt

In your chosen provider's playground, create a prompt that:

1. Takes a journal entry as input
2. Returns JSON with these fields:
   - `sentiment`: positive/negative/neutral
   - `summary`: 2 sentence summary
   - `topics`: array of 2-4 key topics mentioned
   - `struggle_detected`: boolean (true if student expressed difficulty)

Test with these sample entries:

**Entry 1:**
```
"Today was amazing! I built my first REST API with FastAPI and all the endpoints work. The automatic documentation feature is so cool. Can't wait to deploy this to the cloud tomorrow."
```

**Entry 2:**
```
"Spent 5 hours trying to fix a bug in my database connection. Turns out I had the wrong port number in my .env file. Feeling frustrated but at least I learned about environment variables."
```

**Entry 3:**
```
"Continued learning Python today. Worked through the functions chapter."
```

Your prompt should handle all three cases well.

## Advanced Techniques

### Chain of Thought

Ask the LLM to explain its reasoning:

```
Analyze this journal entry step by step:

1. First, identify the main topic
2. Then, determine the sentiment
3. Finally, assess if the student is making progress

Entry: "{journal_text}"
```

### Constraint Setting

Set explicit boundaries:

```
Summarize this journal entry. Rules:
- Maximum 2 sentences
- Use simple language
- Focus only on what was learned, not emotions
- Do not make assumptions beyond what's written

Entry: "{journal_text}"
```

### Use Delimiters

Clearly separate different parts of your prompt using delimiters like triple backticks, XML tags, or dashes. This is especially important when handling user input:

```
Analyze the sentiment of the journal entry below.

---BEGIN ENTRY---
{journal_text}
---END ENTRY---

Respond with: positive, negative, or neutral
```

Delimiters help prevent **prompt injection** where malicious user input could override your instructions.

### Give the Model an "Out"

Provide a fallback when the model can't complete a task. This reduces hallucinations:

```
Extract the programming language mentioned in this journal entry.
If no specific programming language is mentioned, respond with "none detected".

Entry: "{journal_text}"
```

### Order Matters (Recency Bias)

Models pay more attention to content at the beginning and end of prompts. Place critical instructions in both locations:

```
IMPORTANT: Respond only in JSON format.

Analyze this journal entry for learning topics:
"{journal_text}"

Remember: Your response must be valid JSON only.
```

### Output Priming

Start the response for the model to guide its format:

```
Analyze this journal entry and list the key topics.

Entry: "Today I learned about Docker containers and wrote my first Dockerfile."

Key topics:
1.
```

The model will continue from where you left off, ensuring the correct format.

## Common Pitfalls

❌ **Over-prompting**: Too much instruction can confuse the model
❌ **Under-specifying**: Too vague leads to inconsistent results
❌ **Ignoring context length**: Very long prompts cost more and may be truncated
❌ **Not testing variations**: First prompt attempt rarely optimal
❌ **Hallucination risk**: LLMs might invent details not in the input

## Resources

- Study: [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- Study: [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- Study: [Azure OpenAI Prompt Engineering](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/prompt-engineering)

---

## 🧪 Test Your Knowledge

Once you are done with the tutorials, test your knowledge with an AI assistant. Here are some example prompts:

1. Can you explain what prompt engineering is and why it matters?
2. Can you quiz me on the difference between zero-shot, one-shot, and few-shot prompting?
3. Can you explain how temperature affects LLM outputs and when to use different values?
4. Can you ask me to explain what a system message is and how it differs from a user message?
5. Can you quiz me on techniques for getting structured JSON output from an LLM?
6. Can you explain the concept of "chain of thought" prompting?
7. Can you ask me to explain common pitfalls in prompt engineering and how to avoid them?

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Understood the core principles (clear, specific, provide context)
- [ ] Practiced few-shot prompting with examples
- [ ] Created prompts that output structured JSON
- [ ] Tested prompts for sentiment analysis, summarization, and topic extraction
- [ ] Experimented with temperature settings
- [ ] Used chain of thought prompting
- [ ] Understood common pitfalls to avoid

---

