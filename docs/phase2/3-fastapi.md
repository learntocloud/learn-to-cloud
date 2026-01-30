# Topic 3: FastAPI

> ⏱️ **Estimated time:** 3-4 days

FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.6+ based on standard Python type hints. It is the framework we use to build the L2C Journal application and what you will use as well.

---

## 📚 Learning Path

**Study:** [FastAPI official tutorial](https://fastapi.tiangolo.com/tutorial/) by FastAPI

---

## 🧪 Testing FastAPI Applications

You learned pytest basics in Python Crash Course—now let's apply that to testing APIs! In the capstone project, you'll run a comprehensive test suite to verify your implementation works correctly.

**Study:** [FastAPI Testing Tutorial](https://fastapi.tiangolo.com/tutorial/testing/) - Learn the basics of testing FastAPI applications.

**Study:** [httpx AsyncClient docs](https://www.python-httpx.org/async/) - The capstone uses async tests with `httpx.AsyncClient` for better performance.

Key concepts to understand:
- Using `httpx.AsyncClient` to test async API endpoints
- **Fixtures in `conftest.py`** - Shared test setup (test client, sample data, database cleanup)
- Testing different HTTP methods (GET, POST, PATCH, DELETE)
- Checking response status codes and JSON content
- Testing Pydantic model validation (e.g., using `pytest.raises(ValidationError)`)
- Using `pytest.skip()` to skip tests for unimplemented features

### Running Tests

In the capstone project, you'll run tests with:
```bash
pytest
```

To run specific test files:
```bash
pytest tests/test_api.py
pytest tests/test_models.py
```

---

## 🧪 Test Your Knowledge

Test your knowledge with an AI assistant using these prompts:

1. Can you ask me to explain what FastAPI is and how it works?
2. Can you quiz me on how to create a FastAPI application and define endpoints?
3. Can you ask me to explain how to handle request and response models in FastAPI?
4. Can you ask me to explain how to use path parameters and query parameters in FastAPI?
5. Can you quiz me on how to use dependency injection in FastAPI?
6. Can you ask me to explain how to use Pydantic models in FastAPI?
7. Can you ask me to explain how to use FastAPI with asynchronous code?
8. Can you quiz me on how pytest fixtures work and what `conftest.py` is for?
9. Can you ask me how to test that a Pydantic model raises a ValidationError for invalid data?

---

## ✅ Topic Checklist

Before moving on, make sure you can answer "yes" to these:

- [ ] I can create a FastAPI application with basic endpoints
- [ ] I understand path and query parameters
- [ ] I can use Pydantic models for request/response validation
- [ ] I understand FastAPI's automatic documentation (Swagger UI)
- [ ] I understand how pytest fixtures and `conftest.py` work
- [ ] I can run tests with `pytest` and interpret the results