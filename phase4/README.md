# Phase 4: DevOps fundamentals

## How does this phase apply to Cloud?

DevOps is all about getting your solutions to run efficiently. It's not specific to Cloud, as you can implement DevOps practices on-prem as well.

DevOps is a model, where development and operations teams are no longer isolated. These two groups are converged into a single group where the engineers work across the whole application lifecycle, from development and test to deployment to operations, and foster a scope of abilities not restricted to a single function.

Read up on what DevOps is. Each cloud platform has a suite of DevOps tools, I've linked a few articles here:

- [Microsoft - What is DevOps](https://azure.microsoft.com/overview/what-is-devops/#overview)
- [AWS - What is DevOps](https://aws.amazon.com/devops/what-is-devops/)
- [IBM - A DevOps complete guide](https://www.ibm.com/cloud/learn/devops-a-complete-guide)

I also think it's worth reading [The Phoenix Project](https://itrevolution.com/the-phoenix-project/) it's a pretty fun read because it's a fictional story but it explains the importance of DevOps. But if you'd prefer something more like a textbook with similar ideas, check out [The DevOps Handbook](https://itrevolution.com/the-devops-handbook/).

## How to break down this phase

- Continuous integration and continuous delivery (CI/CD)
- Version Control System (VCS)
- Infrastructure as Code (IaC)
- Configuration management
- Monitoring (logs, metrics, traces)
I would suggest spending time on these topics and this timeline:

| Order | Topic                 | Time commitment |
|-------|-----------------------|-------------------|
| 1 | CI/CD with GitHub Actions | 2 weeks 
| 2 | IaC with Terraform | 2 weeks          |
| 3 | Monitoring with Prometheus | 2 weeks     |
| 4 | Containers with Docker | 1 week          |
| 5 | Containers orchestration with Kubernetes | 1 week          |

Of course feel free to spend as much time as you'd like, people have asked for a timeline and breakdown so I've added it. Every DevOps practice matters, but these are the most used on an entry/junior level. You should already be familiar with Version Control from Phase 2.

## Resources

| Practice                                                            | Tool                                                                                       |
| :------------------------------------------------------------------ | :----------------------------------------------------------------------------------------- |
| [Learn GitHub Actions](https://docs.github.com/en/actions/learn-github-actions)| This guide will help you use GitHub Actions to accelerate your application development workflows.
| [HashiCorp Learn](https://learn.hashicorp.com/terraform)| Build, change, and destroy infrastructure with Terraform. Start here to learn the basics of Terraform with your favorite cloud provider.
| [FreeCodeCamp DevOps Engineering Course](https://youtu.be/j5Zsa_eOXeY) | Learn all about DevOps in this comprehensive course for beginners with three technical tutorials.
| [Docker](https://youtu.be/3c-iBn73dDE) | Complete Docker Hands-on course with a lot of demos and explaining the concepts behind, so that you really understand it.
| [Docker and Kubernetes](https://youtu.be/Wf2eSG3owoA) | Learn the fundamentals of Docker and Kubernetes in this complete hand-on course. 
| [Prometheus](https://youtube.com/playlist?list=PLy7NrYWoggjxCF3av5JKwyG7FFF9eLeL4) | Complete Prometheus Monitoring Tutorial


## Projects

| Title                                                        | Resource                                                                          |
| :----------------------------------------------------------- | --------------------------------------------------------------------------------- |
[Deploy an App to Azure with ARM](https://github.com/SoniaConti/ContosoFinance-Demo) | ARM is an IaC tool used with Azure
|[Crypto-dot-net Ticket Dockerized](https://github.com/rishabkumar7/crypto-ticker-dotnet) | We Dockerize the crypto-dot-net ticker project that we built in Phase 3
| [DevOps-Exercises](https://github.com/bregman-arie/devops-exercises) | This repo [devops-exercises](https://github.com/bregman-arie/devops-exercises) contains questions and exercises on various technical topics related to DevOps and SRE |
| [DevOps Journey Using Azure DevOps](https://github.com/thomast1906/DevOps-Journey-Using-Azure-DevOps) | This tutorial/lab setup is going to take you through a DevOps journey using Azure DevOps. From setting up your pipeline to deploying an application to your Azure Kubernetes cluster! |
| [DevOps the Hardway - Azure](https://github.com/thomast1906/DevOps-The-Hard-Way-Azure) | This tutorial contains a full, real-world solution for setting up an environment that is using DevOps technologies and practices for deploying apps and cloud services/cloud infrastructure to Azure. | 
| [DevOps the Hardway - AWS](https://github.com/AdminTurnedDevOps/DevOps-The-Hard-Way-AWS) | This tutorial contains a full, real-world solution for setting up an environment that is using DevOps technologies and practices for deploying apps and cloud services/cloud infrastructure to AWS. |


## Things you should be familiar with at the end of this phase

- Working knowledge of at least one continuous integration tool (Github Actions, Jenkins, etc)
- An understanding of infrastructure as code (why you'd use it, etc). 
- An understanding of containerization (why/when you'd need it / use containers)
- An understanding of the practice of Continuous Integration (why it's needed) and have at least one project in your github deployed with a pipeline.
- An appreciation for the ideas behind: "immutable infrastructure"
- An appreciation for monitoring and the basic ideas of logs, metrics, traces
- An appreciation for "declarative and imperative infrastructure as code"
- Be able to explain each DevOps practice
    - What each one accomplishes
    - Why each one matters
- Hands on experience with
    - CI/CD
    - IaC


## Certifications you might want to look into

- [AWS Certified DevOps Engineer - Profession](https://aws.amazon.com/certification/certified-devops-engineer-professional/?ch=sec&sec=rmg&d=1)
- [Microsoft Certified: DevOps Engineer Expert](https://docs.microsoft.com/en-us/learn/certifications/devops-engineer/)
