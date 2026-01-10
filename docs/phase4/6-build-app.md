# Topic 6: DevOps Capstone Project

> ⏱️ **Estimated time:** 1 week

Now that you've learned the fundamentals of DevOps, it's time to apply these practices to the Journal API app you built in Phase 2 and deployed in Phase 3. In this capstone, you'll containerize the app, automate its deployment, manage infrastructure as code, set up monitoring and observability, and orchestrate containers with Kubernetes—demonstrating your end-to-end DevOps skills.

---

## 📚 Learning Path

### Capstone Steps

1. **Containerize the Application**

    - Write a `Dockerfile` for your FastAPI app.
    - Build and run the container locally to verify it works.
    - Ensure LLM API credentials are passed via environment variables (not baked into the image).
    - Push your image to a container registry (DockerHub, AWS ECR, Azure ACR, or GCP GCR).

2. **Infrastructure as Code**

    - Use Terraform (or another IaC tool) to define and provision:
        - Compute resources (container services)
        - Networking (VPC, subnets, security groups)
        - Database (PostgreSQL, as in previous phases)
    - Store your IaC code in version control.

3. **CI/CD Pipeline**

    - Set up a CI/CD pipeline (e.g., GitHub Actions, Azure DevOps, or Jenkins) to:
        - Build and test your app on every commit
        - Build and push your Docker image
        - Deploy your app automatically to your cloud environment

4. **Container Orchestration with Kubernetes**

    - Write Kubernetes manifests (`Deployment`, `Service`, `ConfigMap`/`Secret`) for your app and database.
    - Store your LLM API key in a Kubernetes `Secret` and mount it as an environment variable.
    - Deploy your app and database to a local Kubernetes cluster (Minikube/Kind) or a managed service (EKS, AKS, GKE).
    - Expose your FastAPI app using a Kubernetes `Service` (NodePort or LoadBalancer).
    - (Optional) Use Helm to package and deploy your app.

5. **Monitoring & Observability**

    - Deploy Prometheus and Grafana (using Docker or Kubernetes manifests).
    - Instrument your FastAPI app to expose metrics (e.g., using `prometheus_client` for Python).
    - Track LLM API calls: latency, error rate, and token usage for the `/analyze` endpoint.
    - Configure Prometheus to scrape your app's metrics endpoint.
    - Create a Grafana dashboard to visualize key metrics (e.g., request count, error rate, latency, LLM API performance).

6. **Documentation**

    - Document your setup and deployment process in a `README.md`.
    - Include diagrams or screenshots of your CI/CD pipeline, Kubernetes setup, and monitoring dashboards.

---

## Example Project Structure

```
/journal-app
  /infra                # Terraform or IaC configs
  /k8s                  # Kubernetes manifests (deployment, service, etc.)
  /app                  # FastAPI app code
  Dockerfile
  .github/workflows/    # CI/CD pipeline configs
  README.md
```

---

## Testing & Validation

- Make a code change and push to your repo—verify the pipeline builds, tests, and deploys the app.
- Access your deployed app and confirm it works with the database.
- Visit Grafana and confirm you see live metrics from your app.
- Use `kubectl` to verify your app and database are running in the cluster.

---

## Skills Checklist

- [ ] Dockerfile and containerization
- [ ] Infrastructure as Code (Terraform)
- [ ] CI/CD pipeline setup
- [ ] Kubernetes manifests and deployment
- [ ] Monitoring and observability (Prometheus + Grafana)
- [ ] Documentation

---

## Next Steps

Once you’ve completed this capstone, you’ll have demonstrated practical DevOps skills by taking an app from code to production with automation, infrastructure as code, container orchestration, and monitoring. This gives you a strong project under your portfolio to showcase for job applications and and talk during interviews!