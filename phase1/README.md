# Phase 1: Linux, Networking, and Scripting fundamentals

## How does this phase apply to Cloud?

The cloud is a bunch of Linux Servers networked together. Learning the fundamentals of how networking works, and how to interact with these servers via commands, and automating those commands via a script, is what this phase is about. If you're already a Linux admin or network engineer, you can apply your skills to the cloud. 


## How to break down this phase

I would suggest spending time on these three topics and this timeline:

| Order | Topic                           | Time commitment |
|-------|---------------------------------|-------------------|
| 1 | Introduction to Linux Commands | 2 weeks 
| 2 | Introduction to Networking  | 1 week          |
| 3 | Introduction to Bash Scripting | 1 week           |

Of course feel free to spend as much time as you'd like, people have asked for a timeline and breakdown so I've added it.
## Resources

| Topic      | Title    |  Notes     |
| :------------- | ---------- | :----------- |
|  Linux | [Linux Basics for Hackers](https://nostarch.com/linuxbasicsforhackers)   | This book made learning Linux FUN! It's pretty easy to follow and take a chapter day by day. You don't need to read the whole thing, the first 9 chapters cover most of what you need to know.  |
| Linux   | [The Linux Command Line](https://nostarch.com/tlcl2) | I used this more as a reference to reinforce topics from the first book. |
| Linux   | [Linux Journey](https://linuxjourney.com/) | Interactive way to learn Linux and Linux CLI!|
| Networking   | [FreeCodeCamp Computer Networking Course](https://youtu.be/qiQR5rTSshw) | This full college-level computer networking course will prepare you to configure, manage, and troubleshoot computer networks.|
| Bash Scripting   | [Introduction to Bash scripting](https://youtu.be/_n5ZegzieSQ) | Fantastic intro to bash scripting, Joe Collins voice is soothing!|


## Projects

 Title    | Resource     |
 :---------- | :----------- |
 Install Linux on a computer   | Research a distro and install it (We like [Pop!_OS](https://pop.system76.com/)) |
Setup a [LAMP server](https://en.wikipedia.org/wiki/LAMP_(software_bundle)) | A pretty popular Linux admin task. |
 Deploy a NAS server | Checkout [FreeNAS](https://www.freenas.org/) |
 Deploy your own cloud | Checkout [NextCloud](https://nextcloud.com/) |
  Convert video files | Checkout [ffmpeg](https://ffmpeg.org/ffmpeg.html) use it to write a script that converts a .mov file to mp4
 

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

There are several Linux certifications and you can chose to study for any of them really, but a lot of them cover WAY more than what you need to know for a solid foundation and are more focused on Linux administration.

- [LPI essentials](https://www.lpi.org/our-certifications/linux-essentials-overview) 
- [RedHat](https://www.redhat.com/en/services/training-and-certification)
- [Linux Foundation](https://training.linuxfoundation.org/certification-catalog/)
- [Oracle](https://education.oracle.com/oracle-certification-path/pFamily_358)
- [LPI](https://www.lpi.org/)
- [Comptia Linux+](https://www.comptia.org/certifications/linux)

There are also TONS of networking certifications out there, and similar to the Linux ones, they are more focused on giving you a lot of knowledge so you can become a networking engineer/specialist, again at an introductory level, it's a little overkill. If you did want to get one, take a look at the [Cisco certifications](https://www.cisco.com/c/en/us/training-events/training-certifications/certifications.html) which are pretty much industry standard and/or [Comptia Network+](https://www.comptia.org/certifications/network)

At the end of the day, if you want to take them, go for it :)
  
## What's next

[Go to Phase 2: Programming fundamentals](../phase2/README.md)