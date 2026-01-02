# Topic 5: Linux CLI Basics

> ⏱️ **Estimated time:** 1 week

You need to have Linux CLI skills to work with cloud. We recommend you read and work through [Linux Basics for Hackers](https://nostarch.com/linuxbasicsforhackers#content). You could also go through the list of commands below and research them individually, though in our opinion that will not provide you enough context as to how these commands work.

---

## 📚 Learning Path

For this topic, we recommend working through **Chapters 1-8** of the book, which cover the essential skills for cloud work:

1. Getting Started with the Basics
2. Text Manipulation
3. Analyzing and Managing Networks
4. Adding and Removing Software
5. Controlling File and Directory Permissions
6. Process Management
7. Managing User Environment Variables
8. Bash Scripting

**Optional but useful:** Chapters 9-11 (Compressing/Archiving, Filesystem Management, and Logging) provide helpful additional context.

## Foundational Commands

Before starting the challenges, familiarize yourself with these essential commands:

- `pwd`: Print working directory – shows your current location.
- `cd`: Change directory – navigate between folders.
- `ls`: List directory contents.
- `cat`: Display file contents.

## Challenge 1: Hidden Files

Learn these commands to find hidden files:

- `ls -a`: List all files, including hidden ones.
- `ls -la`: Detailed listing including hidden files.
- `find . -name ".*"`: Search for hidden files.

**Key concepts:**

- In Linux, hidden files start with a dot (`.`).
- Hidden files are not shown by default.
- Use the `-a` flag with `ls` to show hidden files.

## Challenge 2: File Searching

Master these file search commands:

- `find /path -name "pattern"`: Search for files by name.
- `find /path -type f`: Search for regular files.
- `locate filename`: Quick file search using a database.
- `grep -r "text" /path`: Recursively search file contents.

## Challenge 3: File Size Analysis

Commands for analyzing file sizes:

- `ls -lh`: List files with human-readable sizes.
- `du -h`: Display disk usage.
- `sort -h`: Sort by human-readable sizes.
- `find /path -type f -size +1M`: Find files larger than 1MB.

## Challenge 4: User Investigation

Commands for user management:

- `id username`: Display user ID and groups.
- `cat /etc/passwd`: View user accounts.
- `getent passwd uid`: Get user by UID.
- `ls -l /home/`: List home directories.

**Understanding user files:**

- `/etc/passwd`: User account information.
- `~/.profile` and `~/.bashrc`: Shell configuration files.

## Challenge 5: Permission Analysis

Commands for working with permissions:

- `ls -l`: View file permissions.
- `stat filename`: Detailed file information.
- `find / -perm 777`: Find files with specific permissions.
- `chmod`: Change file permissions.

## Challenge 6: Network Services

Network investigation commands:

- `netstat -tuln`: List listening ports.
- `ss -tuln`: Modern alternative to netstat.
- `lsof -i`: List open network files.
- `curl localhost:port`: Test HTTP service connectivity.
- `nc -zv host port`: Test TCP connection.

## Challenge 7: Encoding/Decoding

Text processing commands:

- `base64`: Encode or decode text.
- `echo -n "text"`: Echo without a newline.
- The pipe operator (`|`) for chaining commands.

## Challenge 8: SSH Configuration

SSH-related commands and best practices:

- `ls -la ~/.ssh/`: List SSH directory contents.
- `find ~/.ssh -type f`: Find SSH-related files.
- `chmod 600`: Set secure file permissions for keys.
- `ssh-keygen`: Generate SSH keys.

**Best practices:**

- Keep your private keys secure.
- Ensure correct file permissions (e.g., 600 for keys).
- Review your `authorized_keys` file.

## Challenge 9: DNS Troubleshooting

Now that the challenges include DNS configuration issues, learn to compare and edit configuration files:

- Familiarize yourself with `/etc/resolv.conf` and its backup.
- Practice using file comparison tools to spot differences.
- Review editing commands to modify files safely.

## Challenge 10: Remote Upload

In this challenge, you'll trigger a flag by uploading a file:

- Understand common methods to transfer files (such as using secure copy or similar utilities).
- Learn how to work with remote directories to detect new files.
- Experiment with different file transfer approaches.

## Challenge 11: Web Configuration

This challenge involves identifying a web server's non-standard port:

- Learn how to locate and review configuration files (for example, those for `nginx`).
- Familiarize yourself with the basics of service management to restart or reload services.
- Understand how configuration settings affect the behavior of web servers.

## Challenge 12: Network Traffic Analysis

In the latest challenge, you will analyze network traffic to discover hidden messages:

- Get familiar with network traffic capture methods.
- Learn to inspect packet contents for hidden data.
- Experiment with network analysis tools without relying on exact command recipes.

## General Tips

1. Use `man` pages to understand command options.
2. Experiment with various command combinations and piping techniques.
3. Work through each challenge to build your understanding incrementally.

Remember: The goal is to learn the commands and understand how they work. Take time to experiment with each command and explore its options and behaviors.

---

## ✅ Topic Checklist

Before moving on, make sure you can answer "yes" to these:

- [ ] I completed Chapters 1-8 of Linux Basics for Hackers (or equivalent)
- [ ] I understand basic navigation commands (cd, ls, pwd)
- [ ] I can manipulate files and directories from the command line
- [ ] I understand file permissions and how to change them
- [ ] I can use pipes and redirects to chain commands
- [ ] I understand basic bash scripting concepts

---

