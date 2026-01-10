# Topic 1: Containerization

> ⏱️ **Estimated time:** 3-4 days

Containerization is a modern approach to deploying and managing applications and services across various environments. It allows you to package software, tools, and their dependencies into lightweight, portable units called containers.

**Key benefits include:**

- Consistency across development, testing, and production environments
- Efficient resource utilization compared to virtual machines
- Simplified deployment and scaling
- Isolation between applications

There are many containerization tools available like Docker, Podman, Containerd, etc.
In this topic, you'll learn how to use tools like Docker to create these isolated environments and explore how cloud platforms like AWS, Azure, and GCP support containerized workloads.
You'll also learn how to leverage containers to run MCP servers, which enable applications to integrate with LLMs and external AI tools.

---

## 📚 Learning Path

### Study

### Core Concepts

- What is [Containerization?](https://github.com/resources/articles/devops/containerization)
- Difference between [Containerization and Virtualization.](https://kodekloud.com/blog/virtualization-vs-containerization/)
- What is [Docker?](https://youtu.be/3c-iBn73dDE)
- What is [MCP? (Model Context Protocol)](https://modelcontextprotocol.io/docs/getting-started/intro)?

### Container Registries

- What is a [Container Registry?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-registry/)
- How to containerize an application and deploy on different container registries:
  - [DockerHub](https://docs.docker.com/get-started/workshop/04_sharing_app/)
  - [AWS ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html)
  - [Azure Container Registry](https://learn.microsoft.com/en-us/training/modules/deploy-use-azure-container-registry/)
  - [Google Container Registry](https://www.youtube.com/watch?v=D1_FC6pGutQ)

---

## 🛠️ Hands-on Tasks

### Basic Containerization Project

1. Create a simple application (or use an existing one)
2. Write a Dockerfile for the application
3. Build the Docker image
4. Run the container locally and test functionality
5. Create an account on DockerHub or another container registry
6. Tag and push your image to the registry
7. Pull and run your image on a different machine to verify portability

### Run the GitHub MCP Server Locally as a Container

1. Ensure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) and GitHub CoPilot installed
2. Install the official [GitHub MCP Server](https://github.com/github/github-mcp-server) in Docker Desktop
3. Create a GitHub Personal Access Token and provide it to the server
4. Enable MCP Gateway in VSCode with `docker mcp gateway run` (Use the Command Pallette)
5. Enable Agent mode in GitHub Copilot
6. Explore and Test - Query your repos and perform GitHub operations

### Common Issues & Troubleshooting

- [Docker Common Issues & Solutions](https://docs.docker.com/engine/reference/troubleshoot/)
- [Best Practices for Writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

---

## 🧪 Test Your Knowledge

Use an AI assistant to test your understanding of containerization. Here's how:

1. Start a new conversation with ChatGPT, Claude, or Google Gemini
2. Use this initial prompt:

   ```txt
   I'm learning about containers and Docker. I'd like you to act as an interviewer:
   - Ask me questions one at a time about containerization concepts
   - Don't provide the answers immediately
   - Give me feedback on my responses
   - If I'm incorrect, guide me toward the right answer
   - Share relevant real-world examples after each answer
   Can we start?
   ```

3. Try to answer each question the AI asks. Key topics you should be ready to discuss:
   - Containers vs Virtual Machines
   - Docker architecture and components
   - Dockerfile structure and best practices
   - Container registries and image management
   - Container networking and storage
   - Security considerations

4. After each response:
   - Ask for feedback on your answer
   - Request real-world examples
   - Ask for clarification if needed

:::tip
Pro tip: Share your specific context: "I'm working with a Node.js application that I want to containerize using Docker. Please focus your questions around that scenario."
:::

Remember: The goal is to test your understanding, not to get perfect answers immediately.

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Understood containerization concepts vs virtualization
- [ ] Learned Docker basics and architecture
- [ ] Written a Dockerfile for an application
- [ ] Built and ran a container locally
- [ ] Pushed an image to a container registry
- [ ] Set up and tested the GitHub MCP Server
- [ ] Understood container networking and storage