# Phase 1: Linux Bash and Networking

Author: [GPS](https://twitter.com/madebygps)

## How does this phase apply to Cloud?

The cloud is essentially a collection of networked Linux servers. Understanding networking fundamentals and how to interact with these servers via commands and automate those commands with scripts is crucial. If you're already a Linux admin or network engineer, you can apply your skills to the cloud directly.

<!--truncate -->
<iframe width="100%" height="315" src="https://www.youtube.com/embed/mxVq2DlPDWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Prerequisites

- **[Create a GitHub account](https://docs.github.com/get-started/start-your-journey/creating-an-account-on-github):** Along side learning to script and later on to to code (though scripting is code), you'll need leverage [Git](https://git-scm.com/), the most popular version control tool and a core DevOps practice. Git is used to manage and share your code, and GitHub is a leading repository hosting service.


## How to break down this phase

| Order | Topic
|-------|---------------------------------
| 1 | Introduction to Bash |
| 2 | Introduction to Networking|          |


## Resources

| Topic      | Title    |  Notes     | Tips |
| :------------- | ---------- | ----------- | :----------- |
|  Bash| [Linux Basics for Hackers](https://nostarch.com/linuxbasicsforhackers)   | This book made learning Linux FUN! It's pretty easy to follow and take a chapter day by day.   | You don't need to read the whole thing, the first 9 chapters cover most of what you need to know.
Bash for Beginners | [YouTube Video Series](https://aka.ms/bashforbeginners) | An introduction to Bash!| A 20 part YouTube series covering the fundamentals of Bash.
Networking | [Computer Networking Course - Network Engineering](https://youtu.be/qiQR5rTSshw?si=hFf17ew05aSmq6q4) | You'll learn the fundamental principles of computer networking to prepare you for cloud. | 

## Capstone Project: CloudUploader CLI

Create a bash-based CLI tool that allows users to quickly upload files to a specified cloud storage solution, providing a seamless upload experience similar to popular storage services.

Your tool should be able to upload a file:
```sh
clouduploader /path/to/file.txt
```

### Steps:

1. **Create a GitHub Repo:**

    - Set up a repository for your project.
    - Use branches and commit your code often.
    - Utilize git commands (git init, git add, git commit, git branch, git push, etc.).

2.  **Setup & Authentication:**

    - Choose a cloud provider (e.g., AWS S3, Google Cloud Storage, Azure Blob Storage).
    - Set up authentication (e.g., az login for Azure).
    - Use secure methods for handling credentials.
        - Avoid hardcoding credentials directly into the script.
        - Store credentials in environment variables or configuration files with restricted access.
        - Utilize cloud provider's secure authentication methods (e.g., IAM roles for AWS, service principals for Azure).

3.  **CLI Argument Parsing:**

    -   Use bash's built-in `$1`, `$2`, etc., to parse command-line arguments.
    -   `$1` could be the filename or path.
    -   Optionally, allow additional arguments like target cloud directory, storage class, or any other cloud-specific attributes.
    - Validate and handle different types of input.\
        - Check if the provided file path is valid and accessible.
        - Ensure that additional arguments meet expected formats and values.
        - Provide meaningful error messages for incorrect or missing inputs
    
4.  **File Check:**

    -   Before uploading, check if the file exists using `[ -f $FILENAME ]`.
    -   Provide feedback if the file is not found.

5.  **File Upload:**

    - Use the cloud provider's CLI to upload the file.
    - Implement error handling to manage potential issues during upload.

6.  **Upload Feedback:**

    -   On successful upload, provide a success message.
    -   If there's an error, capture the error message and display it to the user.

7.  **Advanced Features (Optional but recommended):**

    -   Add a progress bar or percentage upload completion using tools like `pv`.
    -   Provide an option to generate and display a shareable link post-upload.
    -   Enable file synchronization -- if the file already exists in the cloud, prompt the user to overwrite, skip, or rename.
    -   Integrate encryption for added security before the upload.

8.  **Documentation:**

    - Write a README.md file explaining how to set up, use, and troubleshoot the tool.
    - Include a brief overview, prerequisites, usage examples, and common issues.

9.  **Distribution:**

    -   Package the script for easy distribution and installation. You can even provide a simple installation script or instructions to add it to the user's `$PATH`.


## Things you should be able familiar with at the end of this phase

### Commands

- Navigate with the `cd` command.
- How to list the contents of a directory and using the `ls` command.
- Create, copy, move, rename, directories and files with `mkdir`, `cp`, `rm`, and `touch` commands.
- Find things with `locate`, `whereis`, `which`, and `find` commands.
- Understand how to learn more about commands with the `which`, `man`, and `--help` commands.
- Familiar with finding logs details in `/var/log`
- How to display the contents of a file with `cat`, `less`, `more`, `tail`, `head`.
- Filtering with `grep` and `sed`.
- Redirection of standard input, output and error with `>` operator and `tee` command.
- How to use pipelines with the `|` operator.
- Manipulate files with `nano` or `vim`.
- Install and uninstall packages. Depends on distro, debian based use `apt`.
- Control permissions with `chown`, `chgrp`, `chmod` commands.
- Creating users and the `sudo` command.
- Process management with `ps`, `top`, `nice`, `kill`
- Manage environment aud user defined variables with `env`, `set`, `export` commands.
- Add directories to your `PATH`.
- Compression and archiving with `tar`, `gzip`, `gunzip`.
- How to access a Linux server with `ssh`.

### Networking

Concepts you should be familiar with.

- OSI Model
- IP Addresses
- MAC Addresses
- Routing and Switching
- TCP/IP
- TCP and UDP
- DNS
- VPN tunneling
- TLS and SSL

### Bash Scripting

- What is a shell?
- What is Bash?
- Why does a script have to start with #!?
- What is a variable and how to use them
- How to accept user input
- How to execute a script

## Certifications you might want to look into

These certifications provide a comprehensive foundation but are not mandatory for entry-level cloud roles.

### Linux

- [LPI](https://www.lpi.org/our-certifications/linux-essentials-overview)
- [RedHat](https://www.redhat.com/en/services/training-and-certification)
- [Linux Foundation](https://training.linuxfoundation.org/certification-catalog/)
- [Comptia Linux+](https://www.comptia.org/certifications/linux)

### Networking

- [Cisco certifications](https://www.cisco.com/c/en/us/training-events/training-certifications/certifications.html) 
- [Comptia Network+](https://www.comptia.org/certifications/network)
