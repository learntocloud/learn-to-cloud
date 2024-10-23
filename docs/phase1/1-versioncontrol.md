# Topic 1: Version Control

Here at L2C we use Git and GitHub for our version control. I need you to spend a few days getting up to speed with them.

- Study: [Intro to Git](https://learn.microsoft.com/training/modules/intro-to-git/)
- Action: Create a [GitHub account](https://docs.github.com/get-started/start-your-journey/creating-an-account-on-github)

Here at L2C we are big fans of GenAI abilities to help with learning. We leverage it a lot to dive deeper and clarify concepts. It's a good time for you to setup an account with any tool you'd like and start using it for your own learning. Try it out first with testing your knowledge on what version control is.

- Action: Use an AI assistant to test your understanding of the concepts. You can use this prompt as a template:

    ``` txt
    I'm studying cloud engineering and recently learned about version control. I will provide you an explanation about it and please ask me any questions if my explanation is not clear. I want to make sure I really understand this concept so please do not correct me, simple ask questions until I get the explanation right. Here is my explanation: version control is 
    ```

We use VS Code for all our programming. It is time for you to install it. 

- Action: [Install VS Code](https://code.visualstudio.com/)
- Action: If you are working on a Windows machine (Mac and Linux users skip ahead), you'll need to setup WSL. All our labs and tools expect a Linux based environment, WSL will provide that. Follow: [Get started using Visual Studio Code with Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode)

By now you should have the basics of git down and a GitHub account. Now I need you to learn about command line commands you will be using a lot.

- Study: [Command Line for Beginners – How to Use the Terminal Like a Pro](https://www.freecodecamp.org/news/command-line-for-beginners/#heading-most-common-and-useful-commands-to-use)
You're ready to get the lab copied locally (cloned) to your computer.
- Action: Using a Terminal, create a folder on your computer where you will store all your labs and projects. Name it `l2c`
Use the `mkdir` and `cd` commands for this.
- Action: Inside your `l2c` folder, clone the lab repository

  ``` sh
  git clone https://github.com/rishabkumar7/ltc-labs 
  ```

We use markdown for our documentation, it's important you know how to work with it.

- Study: [Communicate using markdown](https://learn.microsoft.com/en-us/training/modules/communicate-using-markdown/)
- Action: [Create a GitHub readme for your GitHub](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme#adding-a-profile-readme)
- Action: Clone your README repo to your local machine. Use VS Code to edit it and push changes back to GitHub from the terminal in VS Code.
Here is a [great guide](https://www.freecodecamp.org/news/how-to-use-markdown-in-vscode/) on using markdown with VS Code. Don't feel like you have to make a very fancy README. Write a brief description on who you are and add links to your socials.

## Version Control concepts you should know

- What is version control?
- What is markdown?
- What is a git repository?
- What does it mean to clone a repository?
- git should be installed on your computer
- vs code should be installed on your computer
- WSL should be setup for Windows users
- You created a folder on your computer with the terminal and `mkdir` command
- The lab repo should be cloned locally on your computer
- Your README repo should be cloned locally on your computer

Great, when you're ready, move on to [Cloud CLI](2-cli.md).
