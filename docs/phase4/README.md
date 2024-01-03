# Phase 4: DevOps fundamentals

Author: [GPS](https://twitter.com/madebygps)

## How does this phase apply to Cloud?

DevOps is all about getting your solutions to run efficiently from development to updates.
It's not specific to Cloud, as you can implement DevOps practices on-prem and in hybrid environments as well. DevOps practices are often handled by many roles and some companies have dedicated DevOps Engineers. If your aim is to become a DevOps engineer, this phase will get you started but you'll have to go deeper on your own.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/YMXwThdwTiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

DevOps is a culture, and not a specific tool or service. Read up on what DevOps is. Each cloud platform has a suite of DevOps tools, I've linked a few articles here:

- [Microsoft - What is DevOps](https://azure.microsoft.com/overview/what-is-devops/#overview)
- [AWS - What is DevOps](https://aws.amazon.com/devops/what-is-devops/)
- [IBM - A DevOps complete guide](https://www.ibm.com/cloud/learn/devops-a-complete-guide)

I also think it's worth reading [The Phoenix Project](https://itrevolution.com/the-phoenix-project/) it's a pretty fun read because it's a fictional story but it explains the importance of DevOps. But if you'd prefer something more like a textbook with similar ideas, check out [The DevOps Handbook](https://itrevolution.com/the-devops-handbook/).

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

## Capstone Project: QR Code Generator

An app that converts a URL to a QR Code. The app has three components: Front-end, API and Storage. All 3 components should be hosted in containers utilizing the cloud provider of your choice. The sample application code is provided, your goals is to apply DevOps practices like containerization, CI/CD, observability and monitoring for the application.

- **Front-End Container**: Hosts the website where users can input URLs.
- **API Container**: Handles the QR code generation for given URLs.
- **Storage Container**: Stores the generated QR codes.

### Details:

#### 1. Application:

  Front-End:
   - A web application where users can submit URLs.

  API:
   - An API that receives URLs and generates QR codes.
   - The API can store the QR codes in cloud storage(S3 Bucket, Azure Blob Storage, GCP Cloud Buckets).
   
  Storage:
   - A storage solution (like Azure Blob Storage, AWS S3 or Google Cloud Storage) to hold the QR codes.
   - Ensure security and accessibility for the stored data.

#### 2. Programming:

  A sample application is available here [rishabkumar7/devops-qr-code](https://github.com/rishabkumar7/devops-qr-code). It has the front-end built in NextJS, uses FastAPI Python framework for the API and AWS S3 for storage.
  
  ##### Required:

    Containerization: Containerize both the front-end and API by creating a `Dockerfile`.
    CI/CD: Write CI/CD pipeline to automate deployment of the containers, once your source code is changed.
    Kubernetes YAML Files: Create deployment and service YAML files for both the Next.js front-end and the FastAPI backend.

  ##### Optional:

    Optionally you can customize the already provided app.
    - Front-end: You can use any language of your choice or JavaScript frameworks like React, Vue or NextJS to build the front-end.
    - API/Backend: Build an API for your QR Code generation, frameworks like [Flask](https://flask.palletsprojects.com/en/3.0.x/) or [FastAPI](https://fastapi.tiangolo.com/) will help you to create your Rest API.
    - Storage: Sample app uses AWS S3. You can utilize cloud SDKs/modules (e.g., `boto3` for AWS, `google-cloud` for GCP, `azure` for Azure) to interact with cloud storage service from respective cloud providers.

#### 3. Deployment:

 - Setup Kubernetes service within your cloud provider (Azure AKS, Amazon EKS or GCP GKE).
 - Containerize the front-end, API, and storage using Docker.
 - Deploy these containers to the cluster.
 - Ensure containers are interconnected for seamless data flow.
 - Setup CI/CD pipeline to deploy the containers after source is changed.

#### 4. Implementation:

 1. Web-app: Users are able to access the front-end, make sure the web-app is publicly accessible via a URL and has an input field to enter URLs.
 2. API: Once the URL is entered by a user, the web-app makes the request to the API container to convert the URL into a QR Code.
 3. Storage: The generated QR Code is stored and also displayed on the web-app for user.
 4. CI/CD: Setup CI/CD pipeline to deploy the containers and application after the source is changed. You can utilize tools like [GitHub Actions](https://github.com/features/actions) or [Azure DevOps](https://azure.microsoft.com/en-ca/products/devops).
 5. Monitoring: Setup monitoring for containers for key metrics and insights. You have [Azure Monitor for AKS](https://learn.microsoft.com/en-us/azure/aks/monitor-aks), [Amazon CloudWatch Container Insights for EKS](https://docs.aws.amazon.com/eks/latest/userguide/eks-observe.html), or take it a step further by setting up [Grafana](https://grafana.com/).


## Things you should be familiar with at the end of this phase

- Be able to explain each DevOps practice
  - Why each one matters.
  - What each one accomplishes.
  - Most popular tools for each practice.

- Have personal projects in your GitHub. For at least 2 of your projects:
  - Have a CI/CD pipeline.
  - Have IaC files for each project.
  - Have monitoring implemented for each one.
    - Make sure you can understand the logging and metrics data.
  - If something were to go wrong with your project, understand how to troubleshoot.

## Certifications you might want to look into

- [AWS Certified DevOps Engineer - Professional](https://aws.amazon.com/certification/certified-devops-engineer-professional/?ch=sec&sec=rmg&d=1)
- [Microsoft Certified: DevOps Engineer Expert](https://docs.microsoft.com/en-us/learn/certifications/devops-engineer/)
- [GCP Professional Cloud DevOps Engineer](https://cloud.google.com/certification/cloud-devops-engineer)
