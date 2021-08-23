# Phase 4: DevOps

Final phase. First off, read some stuff about what DevOps is. Each cloud platform has a suite of DevOps tools, I've linked a few articles here.

- [Microsoft - What is DevOps](https://azure.microsoft.com/overview/what-is-devops/#overview)
- [AWS - What is DevOps](https://aws.amazon.com/devops/what-is-devops/)
- [IBM - A DevOps complete guide](https://www.ibm.com/cloud/learn/devops-a-complete-guide)

I also think it's worth reading [The Phoenix Project](https://itrevolution.com/the-phoenix-project/) it's a pretty fun read because it's a fictional story but it explains the importance of DevOps. But if you'd prefer something more like a textbook with similiar ideas, check out [The DevOps Handbook](https://itrevolution.com/the-devops-handbook/).

## DevOps practices

- Continuous integration and continuous delivery (CI/CD)
- Version Control
- Infrastructure as Code
- Configuration management
- Monitoring (logs, metrics, traces)

You might be thinking that 4 weeks isn't a lot of time to cover all these, and you're right. With DevOps, it's so hard to establish a standard of learning, because every organization implements it differently. However, I think if you spent these 4 weeks learning Version control, CI/CD and Infrastructure as Code, you'll have  good foundation. You'll also be exposed to these practices in the resume projects I listed in the cloud projects table.

## Resources

| Practice                                                            | Tool                                                                                       |
| :------------------------------------------------------------------ | :----------------------------------------------------------------------------------------- |
| Continuous integration and continuous delivery                      | [GitHub actions](https://docs.github.com/en/actions)                                       |
| Version Control (you should've become familiar with Git in phase 2) | [Git and GitHub](https://docs.github.com/en/github/getting-started-with-github/quickstart) |
| Infrastructure as Code                                              | [Terraform](https://www.terraform.io/)                                                     
| [DevOps Engineering Course for Beginners](https://youtu.be/j5Zsa_eOXeY) | General |
| [GitLab Learning Paths](https://about.gitlab.com/learn/) | [GitLab](https://about.gitlab.com/) |

## Projects

| Title                                                        | Resource                                                                          |
| :----------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Deploy a VNet (or VPC) and 2 VMs in the cloud with Terraform | Make sure you can SSH into both VMs and from vm1 you can ping vm2 and vice-versa. |
| Remember that NAS project from Phase 1?                      | Deploy it with Terraform                                                          |
| Remember nextcloud project from Phase 1?                     | [Deploy it with Terraform to an ec2 instance with github actions](https://github.com/abdrrahimelh/terraform-nextcloud)
## Things you should be familiar with at the end of this phase

- Working knowledge of at least one continuous integration tool (Github Actions, Jenkins, etc)
- An understanding of infrastructure as code (why you'd use it, etc). 
- An understanding of containerization (why/when you'd need it / use containers)
- An understanding of the practice of Continuous Integration (why it's needed) and have at least one project in your github deployed with a pipeline.
- An appreciation for the ideas behind: "immutable infrastructure"
- An appreciation for monitoring and the basic ideas of logs, metrics, traces
- An appreciation for "declarative and imperative infrastructure as code"

## Certifications you might want to look into

- [AWS Certified DevOps Engineer - Profession](https://aws.amazon.com/certification/certified-devops-engineer-professional/?ch=sec&sec=rmg&d=1)
- [Microsoft Certified: DevOps Engineer Expert](https://docs.microsoft.com/en-us/learn/certifications/devops-engineer/)
