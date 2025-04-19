## Cloud Security Fundamentals Resources

### Beginner Resources for Junior Engineers

| Resource Type | Title | Description | Link |
| ------------- | ----- | ----------- | ---- |
| Videos | Cloud Security Concepts | Free YouTube playlist covering cloud security basics | [YouTube - Cloud Security Concepts](https://www.youtube.com/playlist?list=PLhr1KZpdzukf_Dfg4AaXdQkC_JJX9-Gk8) |
| Reading | Cloud Security Best Practices | Free eBook covering security fundamentals | [Snyk - Cloud Security 101](https://snyk.io/learn/cloud-security/) |
| Interactive | TryHackMe | Cloud security rooms with step-by-step learning | [TryHackMe - Cloud Security](https://tryhackme.com/module/cloud-security) |
| Reference | Cloud Security Alliance | Fundamentals and reference documentation | [CSA - Guidance](https://cloudsecurityalliance.org/research/guidance/) |
| Workshop | AWS Well-Architected Security | Practical security guidance from AWS | [AWS Well-Architected Security Workshop](https://catalog.workshops.aws/well-architected-security/) |
| Workshop | Azure Security Lab | Hands-on Azure security workshop | [Azure Security Lab](https://github.com/azurecitadel/azure-security-lab) |
| Guide | A Guide to Cloud | Study guides for cloud platforms | [A Guide to Cloud](https://www.aguidetocloud.com/study-guides/azurestudyguide) |

### General Resources

| Cloud Platform             | Title                                                                                                                                  | Description                                                                                                                                                                         |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS, Azure & GCP           | [Hacking The Cloud](https://hackingthe.cloud/)                                                                                         | Hacking the cloud is an encyclopedia of the attacks/tactics/techniques that are common in cloud exploitation.                                                                       |
| AWS, Azure, GCP, IBM, & DO | [HackTricks Cloud](https://cloud.hacktricks.xyz/)                                                                                      | A resource for hacking CI/CD pipelines and cloud environments. Useful for both red and blue teams.                                                                                  |
| AWS                        | [Cloud Goat](https://github.com/RhinoSecurityLabs/cloudgoat)                                                                           | CloudGoat is Rhino Security Labs' "Vulnerable by Design" AWS deployment tool that lets you hone your cloud cybersecurity skills through several "capture-the-flag" style scenarios. |
| AWS                        | [Sadcloud](https://github.com/nccgroup/sadcloud)                                                                                       | Sadcloud is a tool for spinning up insecure AWS infrastructure with Terraform, allowing you to test your AWS security knowledge.                                                    |
| AWS                        | [AWS Well-Architected Labs: Security](https://www.wellarchitectedlabs.com/security/)                                                   | Documentation and hands-on labs that help you learn, measure, and build using best architectural security practices.                                                                |
| AWS                        | [Attack Detection Fundamentals](https://labs.withsecure.com/publications/attack-detection-fundamentals-2021-aws-lab-1)                 | A three-part series exploring an end-to-end kill chain in AWS and its log entries for detection & analysis.                                                                         |
| Azure                      | [Attack Detection Fundamentals](https://labs.withsecure.com/publications/attack-detection-fundamentals-2021-azure-lab-1)               | A three-part series exploring an end-to-end kill chain in Azure and its log entries for detection & analysis.                                                                       |
| Azure                      | [CONVEX](https://github.com/Azure/CONVEX)                                                                                              | Cloud Open-source Network Vulnerability Exploitation eXperience (CONVEX) spins up Capture The Flag environments in your Azure tenant for you to explore.                            |
| Azure                      | [Securing Azure Infrastructure - Hands on Lab Guide](https://github.com/azurecitadel/azure-security-lab)                               | A hands-on guide to securing Azure infrastructure using various Azure security controls.                                                                                            |
| Azure                      | [Azure Security Technologies](https://microsoftlearning.github.io/AZ500-AzureSecurityTechnologies/)                                    | Various lab scenarios covering Azure security.                                                                                                                                      |
| Azure                      | [Create an Azure Vulnerable Lab](https://0xpwn.wordpress.com/2022/03/05/setting-up-an-azure-pentest-lab-part-1-anonymous-blob-access/) | A four-part series explaining Azure vulnerabilities.                                                                                                                                |
| Azure                      | [Azure Goat](https://github.com/ine-labs/AzureGoat)                                                                                    | AzureGoat: A Damn Vulnerable Azure Infrastructure.                                                                                                                                  |
| Azure                      | [Purple Cloud](https://github.com/iknowjason/PurpleCloud)                                                                              | A tool to experiment with Azure Identity and create an Azure Active Directory lab environment.                                                                                      |

## Guided Learning Paths

| Provider | Title | Description | Link |
| -------- | ----- | ----------- | ---- |
| AWS | Security Learning Path | Free official security learning path | [AWS Skill Builder - Security](https://explore.skillbuilder.aws/learn/public/learning_plan/view/96/security-learning-plan) |
| Azure | Microsoft Learn - Security | Free structured learning modules | [Microsoft Learn - Security](https://learn.microsoft.com/en-us/training/browse/?products=azure&subject=security) |
| GCP | Google Cloud Security | Free security path by Google | [Google Cloud Skills Boost](https://www.cloudskillsboost.google/paths/16) |


## Online CTFs & Labs

### AWS

| Cloud Platform | Title                                | Description                                                                                                                                      |
| -------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| AWS            | [Flaws.Cloud](http://flaws.cloud/)   | Through a series of levels you'll learn about common mistakes and gotchas when using Amazon Web Services (AWS).                                  |
| AWS            | [Flaws2.Cloud](http://flaws2.cloud/) | Similar to the original Flaws.Cloud Challenge, this tutorial teaches you AWS security concepts from both an offensive and defensive perspective. |
| AWS            | [Identify AWS Account ID from Public S3 Bucket](https://pwnedlabs.io/labs/identify-the-aws-account-id-from-a-public-s3-bucket) | Learn how to find the AWS account ID from any public S3 bucket - essential for understanding S3 security. |
| AWS            | [Loot Public EBS Snapshots](https://pwnedlabs.io/labs/loot-public-ebs-snapshots) | Identify sensitive resources that a company has accidentally shared publicly - demonstrates EBS security issues. |
| AWS            | [AWS IAM Enumeration Intro](https://pwnedlabs.io/labs/intro-to-aws-iam-enumeration) | Learn to enumerate permissions in AWS IAM - fundamental skill for cloud security assessment. |
| AWS            | [AWS S3 Enumeration Basics](https://pwnedlabs.io/labs/aws-s3-enumeration-basics) | Explore misconfigurations and overly permissive settings in S3 - common source of cloud breaches. |
| AWS            | [SSRF to Pwned (EC2 Metadata)](https://pwnedlabs.io/labs/ssrf-to-pwned) | Replicate a real-world breach involving EC2 instance metadata - critical for understanding IMDS vulnerabilities. |
| AWS            | [Identify IAM Breaches with CloudTrail and Athena](https://pwnedlabs.io/labs/identify-iam-breaches-with-cloudtrail-and-athena) | Detect malicious behavior and potential IAM breaches - essential for cloud security monitoring. |
| AWS            | [Pillage Exposed RDS Instances](https://pwnedlabs.io/labs/pillage-exposed-rds-instances) | Highlight risks of leaving an RDS database exposed to the internet - demonstrates database security best practices. |
### Azure
| Cloud Platform | Title                                                             | Description                                            |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------------ |
| Azure          | [Microsoft Security Best Practices](https://learn.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns) | Comprehensive guide for securing Azure workloads |
| Azure          | [Microsoft Learn: Security Module](https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-identity-access-security/) | Free learning path for Azure security fundamentals |
| Azure          | [Microsoft Azure Security Engineer Learning Path](https://learn.microsoft.com/en-us/certifications/azure-security-engineer/) | Free resources for learning Azure security engineering |
| Azure          | [Azure Security Documentation](https://learn.microsoft.com/en-us/azure/security/) | Official documentation with security guidance |
| Azure          | [Microsoft Security Response Center Blog](https://msrc-blog.microsoft.com/) | Security updates and guidance from Microsoft |
| Azure          | [Microsoft Azure Security Benchmark](https://learn.microsoft.com/en-us/security/benchmark/azure/) | Framework for Azure security best practices |

### GCP
| Cloud Platform | Title                                                             | Description                                            |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------------ |
| GCP            | [Google Cloud Skills Boost](https://www.cloudskillsboost.google/) | The official cloud training resource from Google Cloud |
| GCP            | [GCP Security Best Practices](https://cloud.google.com/docs/enterprise/best-practices-for-enterprise-organizations/security) | Free documentation on enterprise security best practices |
| GCP            | [Security Blueprint](https://cloud.google.com/architecture/security-foundations) | Comprehensive guide for GCP security architecture |
| GCP            | [Google Cloud Security Podcast](https://cloud.withgoogle.com/cloudsecurity/podcast/) | Regular episodes on cloud security topics |
| GCP            | [Google Cloud Security Documentation](https://cloud.google.com/security/) | Official security documentation with walkthroughs |
| GCP            | [Google Cloud Security Whitepaper](https://services.google.com/fh/files/misc/google-cloud-security-foundations-guide.pdf) | Free detailed whitepaper on security foundations |
| GCP            | [Cloud Security Command Center Tutorials](https://cloud.google.com/security-command-center/docs/quickstart-security-command-center) | Self-guided setup for GCP security monitoring |


## Self-Hosted CTFs & Labs
### AWS
### Azure
### GCP

| Cloud Platform | Title                                          | Description                                                                                                                                                 |
| -------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GCP            | [GCP GOAT](https://gcpgoat.joshuajebaraj.com/) | GCP-Goat is an intentionally vulnerable GCP environment to learn and practice GCP security.                                                                 |
| GCP            | [ThunderCTF](https://thunder-ctf.cloud)        | Thunder CTF allows players to practice attacking vulnerable cloud projects on Google Cloud Platform by exploiting deployments to reveal a "secret" integer. |