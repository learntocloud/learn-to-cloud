# Phase 1: Linux and networking fundamentals

## How does this phase apply to Cloud?

These two topics are careers on their own. If you're already a Linux admin or network engineer, you can apply your skills to the cloud. At the end of the day, the Cloud is just a bunch of Linux servers networked together :)

The reason we pair these two topics is because lots of networking tasks are done via a command line and Linux management is all about command line.

A best practice for this phase is to lookup the [man pages](https://en.wikipedia.org/wiki/Man_page) for each command you use. You don't need to memorize it.

## How to break down this phase

I would suggest spending time on these three topics and this timeline:

| Order | Topic                           | Time commitment |
|-------|---------------------------------|-------------------|
| 1 | Introduction to Linux  | 2 weeks 
| 2 | Introduction to Networking  | 1 week          |
| 3 | Introduction to Bash Scripting | 1 week           |

Of course feel free to spend as much time as you'd like, people have asked for a timeline and breakdown so I've added it.
## Resources

| Order      | Title    | Notes     |
| :------------- | ---------- | :----------- |
|  1| [Linux Basics for Hackers](https://nostarch.com/linuxbasicsforhackers)   | This book made learning Linux FUN! It's pretty easy to follow and take a chapter day by day. |
| 1   | [The Linux Command Line](https://nostarch.com/tlcl2) | I used this more as a reference to reinforce topics from the first book. |
| 2   | [FreeCodeCamp Computer Networking Course](https://youtu.be/qiQR5rTSshw) | This full college-level computer networking course will prepare you to configure, manage, and troubleshoot computer networks.|
| 3   | [Introduction to Bash scripting](https://youtu.be/_n5ZegzieSQ) | Fantastic intro to bash scripting, Joe Collins voice is soothing!|


The two books I mentioned have several projects, DO THEM! Do not just read the theory! If there is a concept you don't understand, look it up, don't limit yourself to the resources I am sharing here.

## Projects

 Title    | Resource     |
 :---------- | :----------- |
 Install Linux on a computer   | Research a distro and install it (We like [Pop!_OS](https://pop.system76.com/)) |
Setup a [LAMP server](https://en.wikipedia.org/wiki/LAMP_(software_bundle)) | A pretty popular Linux admin task. |
 Deploy a NAS server | Checkout [FreeNAS](https://www.freenas.org/) |
 Deploy your own cloud | Checkout [NextCloud](https://nextcloud.com/) |
  Convert video files | Checkout [ffmpeg](https://ffmpeg.org/ffmpeg.html) use it to write a script that converts a .mov file to mp4
 

## Things you should be able familiar with at the end of this phase


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
- Analyze networks with `ifconfig`, `iwconfig`.
- Control permissions with `chown`, `chgrp`, `chmod` commands.
- Creating users and the `sudo` command.
- Process management with `ps`, `top`, `nice`, `kill`
- Manage environment aud user defined variables with `env`, `set`, `export` commands.
- Add directories to your `PATH`.
- Compression and archiving with `tar`, `gzip`, `gunzip`.
- How to access a Linux server with `ssh`.
- How to write a bash script.
- Understand IP Addressing, subnets, DHCP, DNS, OSI model, ICP/IP model.
- Understand what are gateways, route tables, load balancing and VPNs.
- Understand how to create and read network diagrams.
- The OSI model.
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