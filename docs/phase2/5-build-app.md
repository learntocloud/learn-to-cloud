# Topic 5: Capstone Project

Now that you've got some Python skills under your belt, we've got an old codebase that needs some love! This Journal API project will test everything you've learned so far, and you'll be deploying it to the cloud in the next phase. Consider this your graduation project from the Python basics - time to put those skills to work!

## Getting Started

1. Fork the [starter repo](https://github.com/learntocloud/journal-starter)
2. Open the project in VS Code with Dev Containers
   - The base Python environment will be set up automatically
3. Enhance the development environment:
   - Set up PostgreSQL database connection
   - Configure required environment variables

## Implementation Tasks

### 1. Core API Development

Implement missing endpoints in `journal_router.py`:

- [ ] GET /entries - List all entries
- [ ] GET /entries/\{id\} - Get single entry
- [ ] DELETE /entries/\{id\} - Delete entry
- [ ] Add request/response validation
- [ ] Add error handling

### 2. Data Model

Enhance Entry model in `models/entry.py`:

| Field       | Type      | Validation                   |
|-------------|-----------|------------------------------|
| id          | string    | Auto-generated UUID          |
| work        | string    | Required, max 256 chars      |
| struggle    | string    | Required, max 256 chars      |
| intention   | string    | Required, max 256 chars      |
| created_at  | datetime  | Auto-generated UTC           |
| updated_at  | datetime  | Auto-updated UTC             |

## Testing the API

Test your implementation using these curl commands:

```bash
# Create a journal entry
curl -X POST http://localhost:8000/entries \
  -H "Content-Type: application/json" \
  -d '{
    "work": "Learned FastAPI basics",
    "struggle": "Understanding async/await",
    "intention": "Practice more with FastAPI"
  }'

# Get all entries
curl http://localhost:8000/entries

# Get single entry (replace {id} with actual UUID)
curl http://localhost:8000/entries/\{id\}

# Update an entry
curl -X PUT http://localhost:8000/entries/\{id\} \
  -H "Content-Type: application/json" \
  -d '{
    "work": "Updated work entry",
    "struggle": "Updated struggle",
    "intention": "Updated intention"
  }'

# Delete an entry
curl -X DELETE http://localhost:8000/entries/\{id\}

# Delete all entries
curl -X DELETE http://localhost:8000/entries
```

## Skills Checklist

### Python

- [ ] Variables & Data Types
- [ ] Functions & OOP
- [ ] Error Handling
- [ ] API Development
- [ ] Database Operations

### Git

- [ ] Repository Management
- [ ] Branching & Merging
- [ ] Documentation

## Next Steps

Complete this capstone before moving to cloud deployment in the next phase. Make sure all API endpoints are working locally before proceeding.
