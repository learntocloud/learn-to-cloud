# Phase 4: DevOps fundamentals

## How does this phase apply to Cloud?

DevOps is all about getting your solutions to run efficiently. It's not specific to Cloud, as you can implement DevOps practices on-prem as well.

Read up on what DevOps is. Each cloud platform has a suite of DevOps tools, I've linked a few articles here:

- [Microsoft - What is DevOps](https://azure.microsoft.com/overview/what-is-devops/#overview)
- [AWS - What is DevOps](https://aws.amazon.com/devops/what-is-devops/)
- [IBM - A DevOps complete guide](https://www.ibm.com/cloud/learn/devops-a-complete-guide)

I also think it's worth reading [The Phoenix Project](https://itrevolution.com/the-phoenix-project/) it's a pretty fun read because it's a fictional story but it explains the importance of DevOps. But if you'd prefer something more like a textbook with similar ideas, check out [The DevOps Handbook](https://itrevolution.com/the-devops-handbook/).

## DevOps practices

- Continuous integration and continuous delivery (CI/CD)
- Version Control
- Infrastructure as Code
- Configuration management
- Monitoring (logs, metrics, traces)

## How to break down this phase

I would spend my time on these two practices:

- Continuous integration and continuous delivery (CI/CD)
    - GitHub actions
- Infrastructure as Code
    - Terraform
- Monitoring
    - Prometheus

Every DevOps practice matters, but these are the most used on an entry/junior level. You should already be familiar with Version Control from Phase 2.

## Resources

| Practice                                                            | Tool                                                                                       |
| :------------------------------------------------------------------ | :----------------------------------------------------------------------------------------- |
| [Learn GitHub Actions](https://docs.github.com/en/actions/learn-github-actions)| This guide will help you use GitHub Actions to accelerate your application development workflows.
| [HashiCorp Learn](https://learn.hashicorp.com/terraform)| Build, change, and destroy infrastructure with Terraform. Start here to learn the basics of Terraform with your favorite cloud provider.
| [FreeCodeCamp DevOps Engineering Course](https://youtu.be/j5Zsa_eOXeY) | Learn all about DevOps in this comprehensive course for beginners with three technical tutorials.


## Projects

| Title                                                        | Resource                                                                          |
| :----------------------------------------------------------- | --------------------------------------------------------------------------------- |
[Deploy an App to Azure with ARM](https://github.com/SoniaConti/ContosoFinance-Demo) | ARM is an IaC tool used with Azure
| [DevOps-Exercises](https://github.com/bregman-arie/devops-exercises) | This repo [devops-exercises](https://github.com/bregman-arie/devops-exercises) contains questions and exercises on various technical topics related to DevOps and SRE |


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
