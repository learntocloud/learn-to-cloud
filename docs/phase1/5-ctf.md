# Linux Command Line CTF Challenge

Welcome, CTF participants! This guide will walk you through the seven challenges you'll face in this Linux Command Line Capture The Flag. Each challenge is designed to test a different aspect of your Linux skills.

## IMPORTANT NOTE

As you complete each challenge, we encourage you to take note of any concepts or commands you find challenging and to revisit them later for further study. Additionally, we kindly ask that you **DO NOT SHARE SOLUTIONS** in social media posts. We aim to discourage copying and pasting and request your support in this effort. Instead, share your reflections and unique perspectives along with the announcement that you’ve completed the labs.


## How to access

This CTF challenge requires you to deploy a lab environment from your local machine to your preferred cloud provider, everything is automated via files we provide. We opted for this instead of hosted labs because it will give you the closest to real world experience. 

Start by going to the [repo](https://github.com/learntocloud/ltc-linux-challenge) as further instructions there.

## Linux concepts you should know

### 1\. **File Listing and Navigation**

-   **`ls`**: List files in a directory. Know how to use options like `-la` to show hidden files and detailed information.
-   **`cd`**: Change directories.
-   **`cat`**: Concatenate and display file contents.

### 2\. **Finding Files and Directories**

-   **`find`**: Search for files and directories by name, type, size, etc.
-   **`du`**: Estimate file space usage. Often used with `sort` to find large files.
-   **`grep`**: Search inside files for specific text patterns (often used with regular expressions).

### 3\. **Viewing and Manipulating File Content**

-   **`cat`**: View file contents.
-   **`tail`**: View the last few lines of a file, commonly used with logs.
-   **`base64`**: Encode/decode data in base64 format.

### 4\. **File Permissions and Ownership**

-   **`find` with `-perm`**: Find files with specific permissions.
-   **`chmod`**: Change file permissions.
-   **`chown`**: Change file ownership.

### 5\. **Network and Services**

-   **`netstat`**: Display active network connections, listening ports, and routing tables.
-   **`curl`**: Transfer data from or to a server. Useful for interacting with web services.
-   **`nc` (Netcat)**: A networking utility used for reading and writing data across network connections.

### 6\. **System Process and Job Control**

-   **`ps`**: Display currently running processes.
-   **`kill`**: Terminate a process by PID.
-   **`top`**: Monitor system resources and processes in real-time.
-   **`bg`, `fg`, `jobs`**: Manage background and foreground processes.

### 7\. **Working with SSH and Remote Access**

-   **`find ~/.ssh`**: Find SSH keys or configurations.
-   **`cat`**: Read SSH keys or authorized key files.

### 8\. **Redirecting Output and Error Handling**

-   **`2>/dev/null`**: Redirect error messages to null (useful to suppress unnecessary output).

### 9\. **File Management and Cleanup**

-   **`rm`**: Remove files or directories.
-   **`sort`**: Sort lines of text files.

### 10\. **Environment Variables and Shell Commands**

-   **`export`**: Set environment variables.
-   **`echo`**: Print text or the value of an environment variable.

Great job! When you're ready, move on