# Phase 4: DevOps fundamentals

Author: [GPS](https://twitter.com/madebygps)

## How does this phase apply to Cloud?

DevOps is all about ensuring your solutions run efficiently from development to updates. While not specific to the cloud, DevOps practices can be implemented on-premises and in hybrid environments as well. DevOps roles may vary, with some companies having dedicated DevOps Engineers. This phase will introduce you to DevOps fundamentals, but if you aim to become a DevOps engineer, you'll need to dive deeper on your own.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/YMXwThdwTiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

DevOps is a culture, not a specific tool or service. Read up on what DevOps is through these articles:

- [Microsoft - What is DevOps](https://azure.microsoft.com/overview/what-is-devops/#overview)
- [AWS - What is DevOps](https://aws.amazon.com/devops/what-is-devops/)
- [IBM - A DevOps complete guide](https://www.ibm.com/cloud/learn/devops-a-complete-guide)

For a fun and insightful read, consider [The Phoenix Project](https://itrevolution.com/the-phoenix-project/) which explains the importance of DevOps through a fictional story. If you prefer a textbook approach, [The DevOps Handbook](https://itrevolution.com/the-devops-handbook/). is a great alternative.

You should've completed the [Cloud Resume Challenge](https://cloudresumechallenge.dev/) in the previous phase. That project introduces you to DevOps concepts, if you haven't, go back and do so.

## How to break down this phase

| Order | Concepts                 | Recommended tools | Other tools
|-------|-----------------------|------------------|-------------|
| 1 | CI/CD | GitHub Actions | Jenkins, GitLab, CircleCI
| 2 | IaC  | Terraform | Azure Bicep, AWS CloudFormation, Pulumi
| 3 | Containers  | Docker | 
| 4 | Containers orchestration | Kubernetes |
| 5 | Monitoring | Prometheus and Grafana | Datadog


## Resources

| Resource                                                        | Notes                                                                                       |
| :------------------------------------------------------------------ | :----------------------------------------------------------------------------------------- |
| [The DevOps Guide](https://thedevops.guide/) | Learn all the DevOps Concepts |
| [GitHub Actions Tutorial - Basic Concepts and CI/CD Pipeline with Docker](https://www.youtube.com/watch?v=R8_veQiYBjI)|Nana is the queen of DevOps and creates some of the best DevOps learning content out there. This tutorial will introduce you to GitHub actions.
| [Complete Terraform Course - From BEGINNER to PRO!](https://www.youtube.com/watch?v=7xngnjfIlK4)| Learn how to use Terraform to automate your AWS infrastructure.
| [Docker tutorial for Beginners](https://youtu.be/3c-iBn73dDE) | Complete Docker Hands-on course with a lot of demos and explaining the concepts behind, so that you really understand it.
| [Kubernetes Crash Course for Absolute Beginners](https://youtu.be/s_o8dwzRlu4) | Hands-On Kubernetes Tutorial | Learn Kubernetes in 1 Hour - Kubernetes Course for Beginners
| [Complete Prometheus Monitoring Tutorial](https://youtube.com/playlist?list=PLy7NrYWoggjxCF3av5JKwyG7FFF9eLeL4) | Complete Prometheus Monitoring Tutorial

## Capstone Project: Expanding on the Movies/Shows API

A sample application is available at [rishabkumar7/ltc-devops-project](https://github.com/rishabkumar7/ltc-devops-project). It builds on the [Phase 2 Capstone Project - Serverless Movies API](https://learntocloud.guide/phase2/), shows your favorite TV Shows or movies. It includes the front-end built with React, uses the FastAPI Python framework for the API, and NoSQL for database. Your goal is to apply DevOps practices like containerization, CI/CD, observability, and monitoring.

### Project Components

1. **Front-End Container**: Hosts the website where users can view your movies/shows.
2. **API Container**: Handles fetching of the data from the database.
3. **NoSQL Database**: Stores the movies/shows data.

### Steps

1. **Containerization**: Containerize both the frontend and API by creating Dockerfiles.
2. **CI/CD**: Write a CI/CD pipeline to push the container images to dockerhub or other container registries like ACR or ECR, once your source code is changed. Use tools like GitHub Actions or Azure DevOps.
3. **Kubernetes Infra with IaC**: Set up a Kubernetes service within your cloud provider (Azure AKS, Amazon EKS, or GCP GKE). Use Terraform to provision your infrastructure.
4. **Kubernetes YAML Files**: Create deployment and service YAML files for both the React front-end and the FastAPI backend.
5. **Container Deployment**: Deploy the frontend and API containers to the Kubernetes cluster.
6. **Inter-connectivity**: Ensure the containers are interconnected for seamless data flow.
7. **Monitoring**: Set up monitoring for containers to track key metrics and insights. Use Azure Monitor for AKS, Amazon CloudWatch Container Insights for EKS, or Grafana for advanced monitoring.

## Things you should be familiar with at the end of this phase

-   Explain each DevOps practice:
    -   Why each one matters.
    -   What each one accomplishes.
    -   Most popular tools for each practice.
    
  -   For all your GitHub Projects:
      -   Have a CI/CD pipeline.
      -   Have IaC files.
      -   Have monitoring implemented.
      -   Understand logging and metrics data.

## Certifications you might want to look into

- [AWS Certified DevOps Engineer - Professional](https://aws.amazon.com/certification/certified-devops-engineer-professional/?ch=sec&sec=rmg&d=1)
- [Microsoft Certified: DevOps Engineer Expert](https://docs.microsoft.com/en-us/learn/certifications/devops-engineer/)
- [GCP Professional Cloud DevOps Engineer](https://cloud.google.com/certification/cloud-devops-engineer)
