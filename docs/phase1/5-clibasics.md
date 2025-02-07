# Topic 5: Linux Bash basics

You need to have CLI skills to work with cloud. We recommend you read [Linux Basics for Hackers](https://nostarch.com/linuxbasicsforhackers#content). You could also go through the list of commands below and research them individually, though we recommend the book. 


Foundational Commands
---------------------

Before starting the challenges, familiarize yourself with these essential commands:

-   `pwd`: Print working directory - shows your current location
-   `cd`: Change directory - navigate between folders
-   `ls`: List directory contents
-   `cat`: Display file contents

Challenge 1: Hidden Files
-------------------------

Learn these commands to find hidden files:

-   `ls -a`: List all files, including hidden ones
-   `ls -la`: Detailed listing including hidden files
-   `find . -name ".*"`: Search for hidden files

Key concepts:

-   In Linux, hidden files start with a dot (.)
-   Hidden files are not shown by default
-   Use `-a` flag with `ls` to show hidden files

Challenge 2: File Searching
---------------------------

Master these file search commands:

-   `find /path -name "pattern"`: Search for files by name
-   `find /path -type f`: Search for regular files
-   `locate filename`: Quick file search using database
-   `grep -r "text" /path`: Search file contents recursively


Challenge 3: File Size Analysis
-------------------------------

Commands for analyzing file sizes:

-   `ls -lh`: List files with human-readable sizes
-   `du -h`: Display disk usage
-   `sort -h`: Sort by human-readable sizes
-   `find /path -type f -size +1M`: Find files larger than 1MB

Challenge 4: User Investigation
-------------------------------

Commands for user management:

-   `id username`: Display user ID and groups
-   `cat /etc/passwd`: View user accounts
-   `getent passwd uid`: Get user by UID
-   `ls -l /home/`: List home directories

Understanding user files:

-   `/etc/passwd`: User account information
-   `~/.profile`: User's shell profile
-   `~/.bashrc`: Shell configuration

Challenge 5: Permission Analysis
--------------------------------

Commands for working with permissions:

-   `ls -l`: View file permissions
-   `stat filename`: Detailed file information
-   `find / -perm 777`: Find files with specific permissions
-   `chmod`: Change file permissions


Challenge 6: Network Services
-----------------------------

Network investigation commands:

-   `netstat -tuln`: List listening ports
-   `ss -tuln`: Modern alternative to netstat
-   `lsof -i`: List open network files
-   `curl localhost:port`: Test HTTP service
-   `nc -zv host port`: Test TCP connection


Challenge 7: Encoding/Decoding
------------------------------

Text processing commands:

-   `base64`: Encode/decode base64
-   `echo -n "text"`: Echo without newline
-   `|`: Pipe operator for command chaining



Challenge 8: SSH Configuration
------------------------------

SSH-related commands:

-   `ls -la ~/.ssh/`: List SSH directory contents
-   `find ~/.ssh -type f`: Find SSH-related files
-   `chmod 600`: Set correct SSH key permissions
-   `ssh-keygen`: Generate SSH keys

SSH security best practices:

-   Keep private keys secure
-   Set correct permissions (600 for keys)
-   Check hidden directories
-   Review authorized_keys files

General Tips
------------

1.  Use command combinations 


1.  Navigate efficiently:

    -   Use tab completion
    -   Use `cd -` to go to previous directory
    -   Use `cd ..` to go up one level

1.  Debug your commands:

    -   Add `-v` or `--verbose` for more information
    -   Check command syntax with `man`
    -   Use `which command` to verify command location

Remember: The goal is to learn the commands and understand how they work. Take time to experiment with each command and understand its options and behavior.