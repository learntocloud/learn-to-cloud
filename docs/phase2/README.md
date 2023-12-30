# Phase 2: Programming, Git, and Prompt Engineering

Author: [GPS](https://twitter.com/madebygps)

## How does this phase apply to Cloud?

You'll be using code to automate tasks, deploy infrastructure, and work with services. You don't need to know how to build UIs but you need to know how to work with APIs. Plus, knowing how to program will make you more competitive in the hiring market. In the previous step you were introduced to programming basics and wrote your first Bash script. You can now leverage this knowledge and apply it to your choice of programming language.

<!--truncate -->
<iframe width="100%" height="315" src="https://www.youtube.com/embed/WMUAc7bvB7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## What You Need To Learn

There are several programming languages that are popular with Cloud: Go, Rust, .NET, JavaScript. If you know any of these, you can continue using them, if not, since you are a beginner,  I would go with [Python](https://www.python.org/). It's a very popular language and there are many quality free resources out there to learn it.

Along side learning to code, you'll need leverage [Git](https://git-scm.com/). It's the most popular version control tool and one of the DevOps practices. It is used to manage and share your code. GitHub is one of the most popular repository hosting service. 

Take some time now to create a [GitHub](https://github.com/) account if you don't already have one. It'll be your code portfolio and this is how you showcase projects on your resume. 

We also recommend you at this point leverage tools like GitHub Copilot and Prompt Engineering to help you write code more productively.

## How to break down this phase

I would suggest spending time on these two topics and this timeline:

| Order | Topic                           |
|-------|---------------------------------|
| 1 | Learn to Code |
| 2 | Learn Git and GitHub |
| 3 | Learn Prompt Engineering |


## Resources

| Order | Title                                                                        | Notes                                                                                       |
| :---- | :--------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 1     | [Python Crash Course](https://ehmatthes.github.io/pcc/)                      | A great Python book, also there is an Appendix in there on Git which is great!
1 | [Python for Beginners](https://youtu.be/jFCNu1-Xdsw) | A 44 part video series introducing you to Python |
| 2     | [Complete Git and GitHub course](https://www.youtube.com/watch?v=apGV9Kg7ics)    | A video by [Kunal Kushwaha](https://bio.link/kunalk) 
| 3     | [ChatGPT Prompt Engineering for Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)    | A course by [deeplearning.ai](https://www.deeplearning.ai/) |
| 3     | [A Beginner's Guide to Prompt Engineering with GitHub Copilot](https://dev.to/github/a-beginners-guide-to-prompt-engineering-with-github-copilot-3ibp)    | An article by [Rizèl Scarlett](https://twitter.com/blackgirlbytes) on how to get the most out of GitHub Copilot.|
| 3     | [Introduction to GitHub Copilot](https://learn.microsoft.com/training/modules/introduction-to-github-copilot/)    | An Microsoft Learn Module on how to use GitHub Copilot.|

## Capstone Project: PyCloud Deployer

A Python CLI tool that facilitates the deployment of a 2 or 3 tier infrastructure to a cloud provider of the your choice. The tool should provide the option to set up and tear down the infrastructure and return the public IP for SSH access upon successful deployment.

Your tool should be able to run:

-   `pycloud-deployer setup --tier 3 --deployment-name <your-deployment-name>`
-   `pycloud-deployer info --deployment-name <your-deployment-name>`
-   `pycloud-deployer teardown --deployment-name <your-deployment-name>`

### Details:

#### 1\. Infrastructure Overview:

-   2-Tier: Consists of a Web/Application layer and a Database layer.
-   3-Tier: Consists of a Load Balancer, Web/Application layer, and a Database layer.

#### 2\. Functionalities:

-   Setup: Deploy the chosen infrastructure to the specified cloud provider.
-   Tear Down: Remove the entire deployed infrastructure.
-   Get Info: Retrieve information about the deployed infrastructure, especially the public IP for SSH.

#### 3\. Programming:

-   Modules: Utilize cloud SDKs/modules (e.g., `boto3` for AWS, `google-cloud` for GCP, `azure` for Azure) to interact with cloud services.
-   OOP: Design classes representing each tier of the infrastructure. E.g., `LoadBalancer`, `WebServer`, `DatabaseServer`.
-   Control statements: Logic to decide between deploying 2-tier vs 3-tier, checking if infrastructure is already deployed, etc.
-   Exceptions: Handle potential cloud errors, such as quota exceedance, service unavailability, etc.
-   Dictionaries: Store metadata about each tier, like instance IDs, public IPs, status, etc.

#### 4\. Implementation Steps:

1.  Cloud Authentication: Authenticate the CLI tool with the cloud provider using API keys, service account credentials, or equivalent.

2.  User Input:

    -   Take user input to decide on the cloud provider.
    -   Choose between 2-tier and 3-tier deployment.
    -   Optionally, accept specific configurations, like region, machine type, etc.
3.  Deployment:

    -   For 2-Tier:
        -   Deploy a VM or instance for the Web/Application layer.
        -   Deploy a VM or instance for the Database layer.
    -   For 3-Tier:
        -   Deploy a Load Balancer.
        -   Deploy one or more VMs or instances behind the Load Balancer for the Web/Application layer.
        -   Deploy a VM or instance for the Database layer.
4.  Return Information: After successful deployment, return the public IP (and possibly a private key for initial access if generated) for SSH.
        
       
    ```sh
    Infrastructure successfully deployed!
    Public IP for SSH: xx.xx.xx.xx 
    ```
   

5.  Tear Down Option: Allow the user to remove the entire setup using the CLI tool.


## Things you should be familiar with at the end of this phase

### Programming

- Variables
- Data types
- Comments
- Functions
- OOP
- Lists
- Modules
- Dictionaries
- Loops
- Control statements
- Exceptions

### Git

- How to create a Git repo locally
- How to create a GitHub repo and clone it locally.
- How to create a git branch
- How to add changes to a git branch
- How to merge Git changes
- How to document code with a README