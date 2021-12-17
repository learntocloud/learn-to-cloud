# Phase 3: Cloud Platform fundamentals

## How does this phase apply to Cloud?

Sometimes people are surprised to see that this phase isn't number 1, though it is the longest and for good reason. As a Cloud professional, you will live in a platform, or multiple. Everything you build, support, develop, etc, will be on a platform.

## Which cloud to learn?

See [FAQ](../more-topics/FAQ.md)

## A note on paid cloud learning platforms

See [FAQ](../more-topics/FAQ.md)

## Certifications you might want to look into

We like cloud certifications, they give you a nice outline to follow in terms of learning. However we don't think you need to have every single certification out there. 

One or two, plus the Linux, networking, programming, knowledge is plenty and already quite impressive when you're starting off.

As you grow and want to specialize, certifications are great for up-skilling! 

You have two options here:

- Entry level certification: Like the [AWS Certified cloud practitioner](https://aws.amazon.com/certification/certified-cloud-practitioner/) or the [Azure Fundamentals AZ-900](https://docs.microsoft.com/learn/certifications/exams/az-900).
- Skip the entry level and go for an associate level: AWS has [three](https://aws.amazon.com/certification/) associate level certifications and Azure has I believe [four now](https://docs.microsoft.com/learn/certifications/browse/?resource_type=certification&products=azure&terms=associate).

You can skip the entry level one and take more time studying for the associate, or take them both. Up to you. All certifications have an outline available and you can leverage them to decide if you want to take them.

For the associate level AWS, I would go with any of them, I've heard the [SysOps](https://aws.amazon.com/certification/certified-sysops-admin-associate/) one is the hardest. Personally I have the [AWS certified developer associate](https://aws.amazon.com/certification/certified-developer-associate/) (it expired, but hey I still studied for it so I'm counting it!) it was a fun certification to study for. For Azure I would go for the [AZ-104](https://docs.microsoft.com/learn/certifications/azure-administrator/) or [AZ-204](https://docs.microsoft.com/learn/certifications/azure-developer/). The other associate level ones are a little more specificized. You can of course take them later on :)

## How to approach learning cloud computing

Regardless of which learning material you choose, it'll have some sort of demo/hands-on aspect to it. Do it. Don't just watch/read. This isn't a Netflix show you're consuming, this is learning time. If the instructor is doing something on screen, watch it, and then try it on your own.

When you are first getting started with cloud, you'll be doing everything via the UI, and that is fine for getting started, however once you're in a job, you'll be using a CLI to manage your environments. My advice here is, for every exercise you do via the UI, look up the CLI command and do it that way too. By now you should be familiar with using a command line. (Which is a big reason Linux phase and programming comes before this one)

Eventually you'll learn these commands and it'll become easier to remember which one to use, but this is also a great time to introduce yourself to the official documentation, [AWS](https://docs.aws.amazon.com/index.html) and [Azure](https://docs.microsoft.com/azure/?product=featured)

If there is something you don't understand about a service or command, your go to should be the documentation. After that you can look up articles, tutorials, etc.

## Resources


| Title                                                                                                 | Notes                                                                                                                                                                                         |
 :---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
[Microsoft learn](https://docs.microsoft.com/learn/certifications/browse/)                       | Microsoft Learn has free content for many tech topics including all Azure certifications realted                                                                                                         |
 [Rishab's Cloud Notes](https://notes.rishab.cloud/)| Notes on LPI Essentials, Terraform, AWS, Azure, and more. 
 [Cloud Computing on FreeCodeCamp](https://www.freecodecamp.org/news/tag/cloud-computing/) | Free courses on AWS, Azure, GCP, and more.
 | [GCP](https://cloud.google.com/certification) | GCP has plenty of free certification content
| [Microsoft Azure Well-Architected Framework](https://docs.microsoft.com/en-us/azure/architecture/framework/) | Azure recommendations and describes best practices
| [AWS Well-Architected](https://aws.amazon.com/architecture/well-architected/?wa-lens-whitepapers.sort-by=item.additionalFields.sortDate&wa-lens-whitepapers.sort-order=desc) | AWS recommendations and describes best practices
| [GCP Architecture](https://cloud.google.com/architecture/framework) | GCP recommendations and describes best practices

## Projects

 | Title                                                                   | Resources                                                                                                   |
 | :---------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
 | [Cloud Resume Challenge](https://cloudresumechallenge.dev/)             | Build your resume with AWS services.                                                                        |
 | [Azure Cloud Resume Challenge](https://youtu.be/ieYrBWmkfno)            | Similar to the previous project, except using Azure.                                                        |
 | [100DaysOfCloud](https://github.com/100DaysOfCloud/100DaysOfCloudIdeas) | A list of many projects to do                                                                               |
 | [Deploy a ghost blog](https://ghost.org/docs/install/)                  | Blogs are great for you to document your learning |


## Things you should be familiar with at the end of this phase

- An understanding of best practices for cloud infrastructure (reliability, performance efficiency, security, etc.)
- How to grant and revoke access and permissions to users and applications in your cloud of choice.
- How to setup billing alerts/alarms, budgets, and how to use the billing tools of your cloud platform of choice.
- How to use the object storage service of your cloud of choice and and overall understanding of other storage options that cloud offers.
- How to deploy scalable virtual machines in the service of you cloud of choice and and overall understanding of other compute services that cloud offers.
- How networking works for the virtual machine service of your cloud of choice (Vnets/VPCs, subnets, route tables, public and private IP addresses, vpns, gateways, etc.)
- How to create a simple HTTP API with the serverless offering of your cloud of choice and an overall understanding of what that offering is capable of doing.
- Deploy 2 VNets (VPCs) and a virtual machine in each one. The virtual machines must not have a public IP and must not be accessible via the internet. You must be able to ssh into one of them and  and ping the other from it.
- How to use the CLI of your cloud of choice to accomplish all of the above.

## What's next

[Go to Phase 4: DevOps fundamentals](../phase4/README.md)
