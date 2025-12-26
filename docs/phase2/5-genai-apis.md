# Topic 5: Generative AI APIs

Generative AI and Large Language Models (LLMs) are transforming how we build applications. In this topic, you'll learn how to integrate LLM APIs into your Python applications. These skills are essential for modern cloud engineering as AI services are becoming core components of cloud platforms.

## Choosing Your Provider

You can choose any of the following providers. Each has its own strengths:

- **Azure OpenAI Service** - Best if you're focusing on Azure cloud
- **AWS Bedrock** - Best if you're focusing on AWS cloud
- **GCP Vertex AI** - Best if you're focusing on Google Cloud
- **OpenAI** - Cloud-agnostic, well-documented, widely used
- **Anthropic (Claude)** - Cloud-agnostic, strong reasoning capabilities

**Action:** Choose one provider for this phase. You can explore others later.

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

## Provider Playground Practice

**IMPORTANT:** Test in the playground BEFORE writing code.

### Azure OpenAI
- Study: [Azure OpenAI Quickstart](https://learn.microsoft.com/en-us/azure/ai-services/openai/quickstart)
- Action: [Create an Azure OpenAI resource](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource)
- Action: [Use the Azure OpenAI Studio playground](https://learn.microsoft.com/en-us/azure/ai-services/openai/quickstart?tabs=command-line%2Cpython&pivots=programming-language-studio)

### AWS Bedrock
- Study: [AWS Bedrock Getting Started](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html)
- Action: [Use the AWS Bedrock Playground](https://docs.aws.amazon.com/bedrock/latest/userguide/playgrounds.html)
- Action: Enable model access for Claude or Llama models in your region

### GCP Vertex AI
- Study: [Vertex AI Generative AI Overview](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview)
- Action: [Use Vertex AI Studio](https://cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-text)
- Action: Test prompts in the Vertex AI Studio text prompt interface

### OpenAI
- Study: [OpenAI API Quickstart](https://platform.openai.com/docs/quickstart)
- Action: [Create an OpenAI account and get API key](https://platform.openai.com/signup)
- Action: [Use the OpenAI Playground](https://platform.openai.com/playground)

### Anthropic (Claude)
- Study: [Anthropic API Documentation](https://docs.anthropic.com/en/docs/intro-to-claude)
- Action: [Create an Anthropic account and get API key](https://console.anthropic.com/)
- Action: [Use the Anthropic Console Workbench](https://console.anthropic.com/workbench)

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
- Action: [Azure OpenAI Python Quickstart](https://learn.microsoft.com/en-us/azure/ai-services/openai/quickstart?tabs=command-line%2Cpython&pivots=programming-language-python)
- Install: `pip install openai`

### AWS Bedrock SDK
- Action: [AWS Bedrock Python SDK Examples](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started-api.html)
- Install: `pip install boto3`

### GCP Vertex AI SDK
- Action: [Vertex AI Python SDK Quickstart](https://cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal)
- Install: `pip install google-cloud-aiplatform`

### OpenAI SDK
- Action: [OpenAI Python Library](https://platform.openai.com/docs/guides/text-generation)
- Install: `pip install openai`

### Anthropic SDK
- Action: [Anthropic Python SDK](https://docs.anthropic.com/en/docs/quickstart)
- Install: `pip install anthropic`

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
- Bigger models (GPT-4, Claude Opus) = higher cost than smaller models (GPT-3.5, Claude Haiku)

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
