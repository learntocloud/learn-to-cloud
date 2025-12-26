# Topic 7: Capstone Project

Now that you've got some Python skills under your belt AND learned how to integrate AI, we've got an old codebase that needs some love! This Journal API project will test everything you've learned so far, and you'll be deploying it to the cloud in the next phase. Consider this your graduation project from the Python basics - time to put those skills to work!

## Getting Started

1. Fork the [starter repo](https://github.com/learntocloud/journal-starter)
2. All the instructions are in the README.md file

## AI Integration Requirement

In addition to the base requirements in the starter repo, you must add AI-powered analysis to your Journal API:

### New Endpoint: POST /entries/{id}/analyze

Create a new endpoint that analyzes a journal entry using your chosen LLM API (Azure OpenAI, AWS Bedrock, GCP Vertex AI, OpenAI, or Anthropic).

**Request:**
```http
POST /entries/{id}/analyze
```

**Response:**
```json
{
  "entry_id": "string",
  "sentiment": "positive | negative | neutral",
  "summary": "2 sentence summary of the entry",
  "topics": ["topic1", "topic2", "topic3"],
  "created_at": "timestamp"
}
```

### Requirements

1. **Sentiment Analysis**: Use your LLM API to determine if the entry is positive, negative, or neutral
2. **Summary Generation**: Create a concise 2-sentence summary of what the student learned and any challenges faced
3. **Topic Extraction**: Identify 2-4 key topics or technologies mentioned in the entry
4. **Error Handling**: Handle cases where the LLM API is unavailable or returns errors
5. **Environment Variables**: Store your API key in `.env` file (and add `.env` to `.gitignore`!)
6. **Prompt Engineering**: Use the techniques from Topic 6 to create effective prompts

### Example Usage

```bash
# Create a journal entry
POST /entries
{
  "work": "Built my first FastAPI endpoint today",
  "struggle": "Had trouble understanding async/await",
  "intention": "Learn more about asynchronous Python tomorrow"
}

# Analyze the entry
POST /entries/{id}/analyze

# Response
{
  "entry_id": "abc123",
  "sentiment": "positive",
  "summary": "The student successfully created their first FastAPI endpoint, demonstrating progress in API development. They identified a learning gap in asynchronous Python concepts that they plan to address.",
  "topics": ["FastAPI", "async/await", "API development"],
  "created_at": "2025-12-25T10:30:00Z"
}
```

### Implementation Tips

1. **Start in the playground**: Test your analysis prompt in your provider's playground first
2. **Create a service module**: Make a `llm_service.py` file to separate LLM logic from API logic
3. **Use environment variables**: 
   ```python
   import os
   api_key = os.getenv("OPENAI_API_KEY")  # or your provider's key name
   ```
4. **Add dependencies**: Update `requirements.txt` with your LLM SDK
5. **Test thoroughly**: Try analyzing entries with different sentiments and topics
6. **Handle rate limits**: Add basic error handling for API failures

### Optional Enhancements

If you want to go further:
- Cache analysis results in the database to avoid re-analyzing the same entry
- Add a `GET /entries/{id}/analyze` endpoint to retrieve previous analysis
- Add batch analysis: `POST /entries/analyze` to analyze all entries
- Track learning patterns over time by comparing sentiments across entries
- Add a confidence score to your sentiment analysis

## Cost Estimate

Running the capstone should cost approximately $1-3 in LLM API calls, depending on:
- Number of entries you create for testing
- Size of your journal entries
- Which model you chose (larger models cost more)

## Next Steps

Complete this capstone before moving to cloud deployment in the next phase. 
Make sure all API endpoints are working locally, INCLUDING the new AI analysis endpoint, before proceeding. You will use this same repository for the cloud deployment phase so DO NOT SKIP.

### Before submitting:
- ✅ All CRUD endpoints work
- ✅ Database persists data
- ✅ AI analysis endpoint returns accurate sentiment, summary, and topics
- ✅ Environment variables configured (`.env` in `.gitignore`)
- ✅ No API keys committed to git
- ✅ Requirements.txt updated with all dependencies
- ✅ README documents the new `/analyze` endpoint
