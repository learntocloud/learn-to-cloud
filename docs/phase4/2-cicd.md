# Topic 2: Continuous Integration and Continuous Deployment

One challenge you'll face after the previous phase is the need to manually run rebuild and push commands for every change made to your code, which can become a tedious and error-prone process. In this topic, we will explain how to automate this entire process using Continuous Integration (CI) and Continuous Deployment (CD) pipelines. These pipelines allow you to automatically build, test, and deploy your application every time changes are made, ensuring a smooth and reliable development workflow.

There are various CI/CD tools available, such as Jenkins, GitHub Actions, and GitLab CI, which streamline this process by automatically executing tasks and deploying code based on triggers like code commits, pull requests, or scheduled events.

## Study

- What is [Continuous Integration (CI)](https://www.ibm.com/think/topics/continuous-integration) and [Continuous Delivery (CD)](https://www.ibm.com/think/topics/continuous-delivery)?
- What is the difference between [Continuous Integration, Continuous Delivery, and Continuous Deployment](https://www.jetbrains.com/teamcity/ci-cd-guide/continuous-integration-vs-delivery-vs-deployment/)?
- Implementing CI/CD pipelines with:
  - [GitHub Actions](https://www.youtube.com/watch?v=R8_veQiYBjI)
  - [AWS CodePipeline](https://www.youtube.com/watch?v=zZt-LTY9hAE)
  - [Azure DevOps](https://www.youtube.com/watch?v=4BibQ69MD8c)
  - [GCP Cloud Build](https://www.youtube.com/watch?v=vCt5zMvgV5s)

## Hands-on Tasks

### Basic CI/CD Pipeline Setup

1. Set up a basic CI/CD pipeline for your containerized application from the previous phase
2. Use GitHub Actions or Jenkins to automatically:
   - Build your application
   - Run tests
   - Build a Docker image
   - Push the image to a container registry (e.g., DockerHub, AWS ECR, GCP GCR)
3. Configure the pipeline to trigger on code commits to your main branch
4. Add a simple notification system to alert you of successful deployments or failures

### Advanced Challenge (Optional)

Implement a multi-environment deployment pipeline that deploys to staging first, runs tests, and then promotes to production.

## Test your knowledge

Use an AI assistant to test your understanding of CI/CD concepts. Here's how:

1. Start a new conversation with ChatGPT, Claude, or Google Gemini
2. Use this initial prompt:

    ```txt
    I'm learning about CI/CD pipelines. I'd like you to act as an interviewer:
    - Ask me questions one at a time about CI/CD concepts
    - Don't provide the answers immediately
    - Give me feedback on my responses
    - If I'm incorrect, guide me toward the right answer
    - Share relevant real-world examples after each answer
    Can we start?
    ```

3. Try to answer each question the AI asks. Key topics you should be ready to discuss:
   - CI/CD fundamentals and differences
   - Pipeline components and stages
   - Version control integration
   - Quality gates and testing
   - Deployment strategies
   - Security considerations

4. After each response:
   - Ask for feedback on your answer
   - Request real-world examples
   - Ask for clarification if needed

:::tip
Pro tip: Share your specific context: "I'm practicing with a containerized Node.js app using GitHub Actions. Please focus your questions around that scenario."
:::

Remember: The goal is to test your understanding, not to get perfect answers immediately.