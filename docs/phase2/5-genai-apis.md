# Topic 5: Generative AI APIs

Generative AI and Large Language Models (LLMs) are transforming how we build applications. In this topic, you'll learn how to integrate LLM APIs into your Python applications. These skills are essential for modern cloud engineering as AI services are becoming core components of cloud platforms.

## Understanding LLM API Basics

Before coding, understand these core concepts:

1. **Messages format**: LLMs work with conversation-style inputs
   - System message: Sets behavior/personality
   - User message: Your prompt/question
   - Assistant message: The AI response

2. **Completions**: The API generates text based on your input

3. **Parameters**:
   - `temperature`: Controls randomness (0 = deterministic, 1 = creative)
   - `max_tokens`: Limits response length
   - `model`: Which LLM version to use

4. **Structured outputs**: Getting JSON instead of free text

## Hands-On Learning: Python OpenAI Demos

Before setting up cloud resources, start with this free hands-on practice using GitHub Models:

**Resource:** [Python OpenAI Demos](https://aka.ms/python-openai-demos) ([Video Walkthrough](https://www.youtube.com/watch?v=_daw48A-RZI))

This repository teaches you the OpenAI Python SDK through progressively complex examples—the same SDK used by Azure OpenAI. You can run it **completely free** using GitHub Models in GitHub Codespaces.

**Action:** Work through these examples in order:

1. **Chat Completions** - Start with `chat.py`, then try `chat_stream.py` and `chat_history.py`
2. **Structured Outputs** - Learn to get JSON responses with `structured_outputs_basic.py`
3. **Function Calling** - See how LLMs can call your code with `function_calling_basic.py`

**Why start here?**
- ✅ Free (uses GitHub Models, no credit card needed)
- ✅ Works in browser (GitHub Codespaces)
- ✅ Same SDK you'll use with Azure OpenAI
- ✅ Builds skills progressively

### Video Series: Python + AI

For deeper learning, check out these videos from the **Python + AI livestream series** ([All Resources](https://aka.ms/pythonai/resources)):

| Topic | Slides | Video |
|-------|--------|-------|
| LLMs | [Slides](https://aka.ms/pythonai/slides/llms) | [Watch](https://aka.ms/PythonAI107-f) |
| Structured Outputs | [Slides](https://aka.ms/pythonai/slides/structuredoutputs) | [Watch](https://aka.ms/PythonAI1015-f) |

> **Optional:** The full series covers 9 topics including RAG, AI Agents, and more. Watch them all if you want a deep understanding of Python + AI.

## Choosing Your Cloud Provider

Once you've completed the demos above, apply your skills to your cloud provider's AI service. This teaches you cloud-specific skills like IAM, resource management, and billing.

- **Azure OpenAI** - If you're focusing on Azure (accessed via Azure AI Foundry)
- **AWS Bedrock** - If you're focusing on AWS (supports Claude, Llama, and other models)
- **GCP Vertex AI** - If you're focusing on Google Cloud (supports Gemini and other models)

**Action:** Choose the provider that matches your cloud focus.

## Provider Playground Practice

**IMPORTANT:** Test in the playground BEFORE writing code.

### Azure OpenAI
- Study: [Azure OpenAI Chat Completions Quickstart](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/chatgpt-quickstart)
- Action: [Create an Azure OpenAI resource](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/create-resource)
- Action: [Use the Azure AI Foundry Chat playground](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/chatgpt-quickstart?pivots=programming-language-studio)

### AWS Bedrock
- Study: [AWS Bedrock Getting Started](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html)
- Action: [Use the AWS Bedrock Playground](https://docs.aws.amazon.com/bedrock/latest/userguide/playgrounds.html)
- Action: Enable model access for Claude or Llama models in your region

### GCP Vertex AI
- Study: [Vertex AI Generative AI Overview](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview)
- Action: [Use Vertex AI Studio](https://cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-text)
- Action: Test prompts in the Vertex AI Studio text prompt interface

## Playground Exercises

In your chosen provider's playground, test these prompts:

1. **Simple completion**: 
   ```
   Analyze the sentiment of this text: "I learned so much about Python today!"
   ```

2. **Structured output**:
   ```
   Analyze the sentiment of this journal entry and respond in JSON format with fields: sentiment (positive/negative/neutral) and summary (2 sentences max).
   
   Journal entry: "Today I struggled with async Python but finally got it working after 3 hours."
   ```

3. **System message test**: Add a system message:
   ```
   System: You are a helpful learning coach who analyzes student journal entries.
   User: Analyze this entry: "I'm frustrated with databases but making progress."
   ```

Take screenshots of successful responses. You'll replicate these in code next.

## Python SDK Integration

Now implement the same prompts in Python.

### Azure OpenAI SDK
- Action: [Azure OpenAI Python Quickstart](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/chatgpt-quickstart?pivots=programming-language-python)
- Install: `pip install openai`

### AWS Bedrock SDK
- Action: [AWS Bedrock Python SDK Examples](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started-api.html)
- Install: `pip install boto3`

### GCP Vertex AI SDK
- Action: [Vertex AI Python SDK Quickstart](https://cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal)
- Install: `pip install google-cloud-aiplatform`

## Key Concepts to Learn

Work through your chosen provider's Python documentation and ensure you understand:

1. **Authentication**: API keys, service principals, or IAM roles
2. **Making requests**: Sending messages to the LLM
3. **Handling responses**: Parsing the completion text
4. **Error handling**: Rate limits, timeouts, invalid requests
5. **Environment variables**: Storing API keys securely (NEVER commit keys to git!)
6. **Async support**: Using async/await with LLM APIs

## Practice Exercise

Create a simple Python script `llm_test.py` that:

1. Loads API credentials from environment variables
2. Sends a journal entry text to your chosen LLM
3. Requests sentiment analysis (positive/negative/neutral)
4. Requests a 2-sentence summary
5. Prints the results in a clean format

Example journal entry to test:
```
"Today I learned about FastAPI and built my first endpoint. The automatic documentation is amazing! I struggled a bit with async functions but the official tutorial helped. Tomorrow I'll tackle database integration."
```

## Cost Awareness

LLM APIs are pay-per-use. Typical costs for this phase:
- ~$0.50 - $3.00 for testing and completing the capstone
- Tokens are charged for both input (prompt) and output (response)
- Longer prompts = higher cost
- Larger models (GPT-4o, Claude Sonnet) = higher cost than smaller models (GPT-4o-mini, Claude Haiku)

**Tip:** Use smaller, faster models for development and testing. Switch to larger models only when needed.

## Test your knowledge

Once you are done with the tutorials, test your knowledge with an AI assistant. Here are some example prompts:

1. Can you explain what an LLM API is and how it differs from a traditional REST API?
2. Can you explain the role of system messages, user messages, and assistant messages?
3. Can you quiz me on what the temperature parameter controls in LLM APIs?
4. Can you explain how to securely store API keys in a Python application?
5. Can you ask me to explain the difference between synchronous and asynchronous LLM API calls?
6. Can you quiz me on how to handle errors and rate limits when calling LLM APIs?
7. Can you explain how to get structured JSON output from an LLM instead of plain text?
