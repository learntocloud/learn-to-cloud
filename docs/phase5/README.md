# Phase 5: Cloud Security Fundamentals

Author: [Dayspring Johnson](https://twitter.com/daycyberwox)

## How does this phase apply to Cloud?

Security is the biggest challenge to cloud computing. As cloud adoption continues to grow, cloud security incidents and vulnerabilities are equally on the rise.

The individual cloud components you were introduced to in the previous phases all require security in some shape or form. Better yet, security has to be considered from every perspective in order to prevent malicious actors from finding and exploiting vulnerabilities in our cloud environments which could potentially lead to data or infrastructure compromise.

Here's one of my favorite articles by [Christophe Tafani-Dereeper](https://twitter.com/christophetd) that covers Cloud Security Breaches and Vulnerabilities:

- [Cloud Security Breaches and Vulnerabilities: 2021 in Review](https://blog.christophetd.fr/cloud-security-breaches-and-vulnerabilities-2021-in-review/)

I also recommend checking out [Securing DevOps: Security in the Cloud](https://www.manning.com/books/securing-devops) by [Julien Vehent](https://twitter.com/jvehent) which covers several of the core components for protecting cloud infrastructure, logging, detecting threats and so on. It even has practical and visual aids that help in learning these concepts.

Another book recommendation is [Practical Cloud Security: A Guide for Secure Design and Deployment](https://www.oreilly.com/library/view/practical-cloud-security/9781492037507/) by [Chris Dotson](https://www.linkedin.com/in/chris-dotson-6a9b55/). This book is a good complimentary resource to the previous book as it goes in-depth into various concepts, standards, frameworks and principles required for cloud security, and as the name implies, it is practical.

Always remember this, you can not secure what you do not understand, so make sure to understand the architectural and core components of the cloud so that you can properly secure them.

## Resources

| Cloud Platform | Title  | Description  |
|:-------------- | ------ | ------ |
AWS, Azure & GCP | [Hacking The Cloud](https://hackingthe.cloud/)| Hacking the cloud is an encyclopedia of the attacks/tactics/techniques that are common in cloud exploitation. |
AWS | [Flaws.Cloudf](http://flaws.cloud/)| Through a series of levels you'll learn about common mistakes and gotchas when using Amazon Web Services (AWS). |
AWS | [Flaws2.Cloud](http://flaws2.cloud/)| Similar to the original Flaws.Cloud Challenge this tutorial teaches you AWS security concepts but this time from both an offensive and defensive perspective |
AWS | [Cloud Goat](https://github.com/RhinoSecurityLabs/cloudgoat)| CloudGoat is Rhino Security Labs' "Vulnerable by Design" AWS deployment tool that allows you to hone your cloud cybersecurity skills by creating and completing several "capture-the-flag" style scenarios. |
AWS | [Sadcloud](https://github.com/nccgroup/sadcloud)| Sadcloud is a tool for spinning up insecure AWS infrastructure with Terraform. You can test your AWS security knowledge against these infrastructure. |
AWS | [AWS Well-Architected Labs: Security](https://www.wellarchitectedlabs.com/security/)| The security labs are documentation and code in the format of hands-on labs to help you learn, measure, and build using architectural best practices. |
AWS | [Attack Detection Fundamentals](https://labs.f-secure.com/blog/attack-detection-fundamentals-2021-aws-lab-1/)| This three-part series explores an end-to-end kill chain in AWS and log entries for detection & analysis. |
Azure | [Attack Detection Fundamentals](https://labs.f-secure.com/blog/attack-detection-fundamentals-2021-azure-lab-1/)| This three-part series explores an end-to-end kill chain in Azure and log entries for detection & analysis. |
Azure | [CONVEX](https://github.com/Azure/CONVEX)| Cloud Open-source Network Vulnerability Exploitation eXperience (CONVEX) spins up Capture The Flag environments in your Azure tenant for you to play through.  |
Azure | [Securing Azure Infrastructure - Hands on Lab Guide](https://github.com/azurecitadel/azure-security-lab)| A hands on guide to securing azure infrastructure using various azure security controls. |
Azure | [Azure Security Technologies](https://microsoftlearning.github.io/AZ500-AzureSecurityTechnologies/)| Various labs scenarios covering azure security. |
Azure | [Create an Azure Vulnerable Lab](https://0xpwn.wordpress.com/2022/03/05/setting-up-an-azure-pentest-lab-part-1-anonymous-blob-access/)| A four-part series explaining azure vulnerabilities. |
Azure | [Azure Goat](https://github.com/ine-labs/AzureGoat)| AzureGoat : A Damn Vulnerable Azure Infrastructure |
Azure | [Purple Cloud](https://github.com/iknowjason/PurpleCloud)| A little tool to play with Azure Identity - Azure Active Directory lab creation tool |
GCP | [GCP GOAT](https://gcpgoat.joshuajebaraj.com/)| GCP-Goat is intentionally vulnerable GCP environment to learn and practice GCP Security |
GCP | [ThunderCTF](https://thunder-ctf.cloud)| Thunder CTF allows players to practice attacking vulnerable cloud projects on Google Cloud Platform (GCP). In each level, players are tasked with exploiting a cloud deployment to find a "secret" integer stored within it. |
Kubernetes | [Kubernetes Goat](https://madhuakula.com/kubernetes-goat/)| Kubernetes Goat is an interactive Kuberenetes Security Learning Playground |

## Projects

| Cloud Platform | Title  | Description  |
|:-------------- | ------ | ------ |
AWS | [Threat Detection With AWS GuardDuty](https://www.youtube.com/watch?v=lLgqP4cbdWg&t=127s)| A tutorial showing how to use AWS GuardDuty to detect threats. |
AWS | [AWS Threat Simulation & Detection](https://github.com/sbasu7241/AWS-Threat-Simulation-and-Detection/blob/main/aws.credential-access.ec2-get-password-data.md)| This doc shows the use of Stratus Red Team & SumoLogic for attack & detection/analysis. This can replicated using any other SIEM. |
Azure | [Azure Cloud Detection Lab(Blog)](https://cyberwoxacademy.com/azure-cloud-detection-lab-project/), [Azure Cloud Detection Lab(Videos)](https://youtube.com/playlist?list=PLBNtagSCmDWw27ccfeWeiaMcpNIxpGHy4)| A hands-on project showing how to detect threats in an azure environment using Azure Sentinal. |
Azure | [SIEM Tutorial for Beginners Azure Sentinel Tutorial MAP with LIVE CYBER ATTACKS!](https://youtu.be/RoZeVbbZ0o0)| A hands-on project showing how to set up a honey pot and analyzing malicious traffic using Azure Sentinel. |

## Things you should be familiar with at the end of this phase

- An understanding of core IAM concepts (Users, Roles, Policies, Groups, Service Accounts/Principals, etc.)
- An understanding of how authentication works in the cloud.
- An understanding of secure cloud storage, compute, networking, applications and so on .
- Common security vulnerabilities and misconfigurations in the cloud.
- How to investigate cloud logs and determine if a cloud environment has been compromised.
- How to simulate attacks against cloud environments.
- How to deploy vulnerable infrastructure in the cloud for security testing.
- Knowledge and usage various cloud security tools.

## Certifications you might want to look into

- [Certified Cloud Security Professional](https://www.isc2.org/Certifications/CCSP)
- [Microsoft Certified: Security Operations Analyst Associate](https://docs.microsoft.com/en-us/learn/certifications/security-operations-analyst/)
- [Microsoft Certified: Azure Security Engineer Associate](https://docs.microsoft.com/en-us/learn/certifications/azure-security-engineer/)
- [AWS Certified Security - Specialty](https://aws.amazon.com/certification/certified-security-specialty/)
- [Google Professional Cloud Security Engineer](https://cloud.google.com/certification/cloud-security-engineer)

### Practical Certifications (training included)

These are lesser know certifications but they are focused on giving you the training needed as well as hands-on certifications where you put the skills you've learned to use, rather than clicking through multiple choice questions.

- [Certified Az Red Team Professional](https://bootcamps.pentesteracademy.com/course/ad-azure-may-21)
- [Certified Azure Web Application Security Professional](https://bootcamps.pentesteracademy.com/course/azure-appsec-beginner-jul-22)
- [Offensive Azure Security Professional](https://cloudbreach.io/labs/)
