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

## CTF Commands

You will use the following commands in the capstone CTF challenges. Make sure you are familiar with them before proceeding:

- `pwd`: Print working directory – shows your current location.
- `cd`: Change directory – navigate between folders.
- `ls`: List directory contents.
- `cat`: Display file contents.

## Challenge 1: Hidden File Discovery

Learn these commands to find hidden files:

- `ls -a`: List all files, including hidden ones.
- `ls -la`: Detailed listing including hidden files.
- `find . -name ".*"`: Search for hidden files.

**Key concepts:**

- In Linux, hidden files start with a dot (`.`).
- Hidden files are not shown by default.
- Use the `-a` flag with `ls` to show hidden files.

## Challenge 2: Basic File Search

Master these file search commands:

- `find /path -name "pattern"`: Search for files by name.
- `find /path -type f`: Search for regular files.
- `find ~ -name '*.txt' 2>/dev/null`: Search for text files in your home directory.
- `grep -r "text" /path`: Recursively search file contents.

## Challenge 3: Log Analysis

Commands for analyzing log files:

- `ls -lh`: List files with human-readable sizes.
- `du -h`: Display disk usage.
- `tail filename`: View the end of a file.
- `tail -n 100 filename`: View the last 100 lines.
- `find /path -type f -size +1M`: Find files larger than 1MB.

**Key concepts:**

- Large log files can hide secrets at the end.
- Check `/var/log` for system logs.
- Use `tail` to see the end of large files efficiently.

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
- `find / -perm 777 2>/dev/null`: Find files with specific permissions.
- `chmod`: Change file permissions.

**Key concepts:**

- Look for files with unusual permissions (like 777).
- Permission 777 means read, write, and execute for everyone.

## Challenge 6: Service Discovery

Network investigation commands:

- `netstat -tulpn`: List listening ports.
- `ss -tulpn`: Modern alternative to netstat.
- `lsof -i`: List open network files.
- `curl localhost:port`: Test HTTP service connectivity.
- `nc -zv host port`: Test TCP connection.

**Key concepts:**

- Services run on specific ports.
- Use network tools to discover what's listening.

## Challenge 7: Encoding Challenge

Text processing commands:

- `base64`: Encode or decode text.
- `base64 -d`: Decode base64-encoded text.
- `echo -n "text"`: Echo without a newline.
- The pipe operator (`|`) for chaining commands.

**Key concepts:**

- Data can be encoded multiple times.
- Use `base64 -d` to decode, and chain commands for multiple layers.

## Challenge 8: SSH Secrets

SSH-related commands and best practices:

- `ls -la ~/.ssh/`: List SSH directory contents.
- `find ~/.ssh -type f`: Find SSH-related files.
- `chmod 600`: Set secure file permissions for keys.
- `ssh-keygen`: Generate SSH keys.

**Best practices:**

- Keep your private keys secure.
- Ensure correct file permissions (e.g., 600 for keys).
- Explore subdirectories thoroughly - secrets may be hidden in nested folders.
- Review your `authorized_keys` file.

## Challenge 9: DNS Troubleshooting

Learn to work with DNS configuration files:

- Familiarize yourself with `/etc/resolv.conf` and its backup.
- Practice using file comparison tools to spot differences.
- Examine the contents of DNS configuration files carefully.

## Challenge 10: Remote Upload Detection

In this challenge, you'll trigger a flag by creating a file:

- Understand how file monitoring works with tools like `inotifywait`.
- Learn how to create files in specific directories.
- Experiment with different methods of creating files (touch, echo, etc.).

## Challenge 11: Web Configuration

This challenge involves identifying a web server's non-standard port:

- Learn how to locate and review configuration files (for example, those for `nginx`).
- Check `/etc/nginx/sites-available/` for nginx configurations.
- Familiarize yourself with the basics of service management to restart or reload services.
- Understand how configuration settings affect the behavior of web servers.

## Challenge 12: Network Traffic Analysis

Analyze network traffic to discover hidden messages:

- Get familiar with `tcpdump` for network traffic capture.
- Learn to inspect packet contents for hidden data.
- Look at ping patterns - data can be hidden in ICMP packets.
- Experiment with network analysis tools.

## Challenge 13: Cron Job Hunter

Discover scheduled tasks on the system:

- `crontab -l`: List current user's cron jobs.
- `cat /etc/crontab`: View system crontab.
- `ls -la /etc/cron.d/`: List cron job files.
- `ls -la /etc/cron.daily/`: List daily cron jobs.

**Key concepts:**

- Cron jobs run on schedules defined in crontab files.
- System-wide cron jobs can be found in `/etc/cron.d/`.
- Examine cron files carefully - comments can contain secrets.

## Challenge 14: Process Environment

Investigate running processes and their environments:

- `ps aux`: List all running processes.
- `cat /proc/PID/environ`: View environment variables of a process.
- `tr '\0' '\n' < /proc/PID/environ`: Format environ output readably.
- `pgrep processname`: Find process ID by name.

**Key concepts:**

- Process info lives in `/proc`.
- Each process has a directory with its environment in `/proc/PID/environ`.
- Environment variables can contain secrets.

## Challenge 15: Archive Archaeologist

Work with compressed and archived files:

- `tar -xzf archive.tar.gz`: Extract a gzipped tar archive.
- `gunzip file.gz`: Decompress a gzip file.
- `file filename`: Determine file type.
- `tar -tzf archive.tar.gz`: List contents without extracting.

**Key concepts:**

- Archives can be nested (archive within archive).
- Use the `file` command to determine the actual file type.
- Extract layer by layer to find hidden content.

## Challenge 16: Symbolic Sleuth

Follow symbolic links to find hidden files:

- `ls -la`: View symlinks and their targets.
- `readlink filename`: Show where a symlink points.
- `readlink -f filename`: Follow all symlinks to the final target.
- `file filename`: Check if a file is a symlink.

**Key concepts:**

- Symlinks can chain together through multiple levels.
- Use `readlink -f` to find the final destination.
- Follow the chain to discover hidden content.

## Challenge 17: History Mystery

Explore command history files:

- `cat ~/.bash_history`: View your command history.
- `history`: Show command history in current session.
- `ls -la /home/`: Check other users' home directories.

**Key concepts:**

- Bash stores command history in `~/.bash_history`.
- Other users may have readable history files.
- History files can contain sensitive information.

## Challenge 18: Disk Detective

Work with disk images and mount points:

- `file /path/to/image`: Identify disk image files.
- `sudo mount -o loop image.img /mnt/point`: Mount a disk image.
- `sudo umount /mnt/point`: Unmount when done.
- `ls -la /mnt/point`: Explore mounted filesystem.

**Key concepts:**

- Disk images are files that contain entire filesystems.
- Mount them with the loop option to explore their contents.
- Hidden files may exist within the mounted filesystem.

## General Tips

1. Use `man` pages to understand command options.
2. Experiment with various command combinations and piping techniques.
3. Work through each challenge to build your understanding incrementally.
4. Use `verify hint [number]` when stuck on a challenge.
5. Redirect errors with `2>/dev/null` to clean up command output.

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
- [ ] I can work with archives and compressed files
- [ ] I understand how to mount disk images
- [ ] I can investigate processes and their environments