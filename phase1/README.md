# Phase 1: Linux and networking fundamentals

## How does this phase apply to Cloud?

These two topics are entire specialties and careers on their own. If you're already a Linux admin or network engineer, you can 100% apply your skills to the cloud. At the end of the day, the Cloud is just a bunch of Linux servers networked together :)

The reason we pair these two topics is because lots of networking tasks are done via command line and Linux management is all about command line.

A best practice for this phase is to lookup the [man pages](https://en.wikipedia.org/wiki/Man_page) for each command you use. You don't need to memorize it. 

## Resources

| Order      | Title    | Notes     |
| :------------- | ---------- | :----------- |
|  1| [Linux Basics for Hackers](https://nostarch.com/linuxbasicsforhackers)   | This book made learning Linux FUN! It's pretty easy to follow and take a chapter day by day. |
| 1   | [The Linux Command Line](https://nostarch.com/tlcl2) | I used this more as a reference to reinforce topics from the first book. |
| 2   | [Introduction to Networking](https://www.youtube.com/watch?v=cNwEVYkx2Kk&list=PLDQaRcbiSnqF5U8ffMgZzS7fq1rHUI3Q8) | Great YouTube playlist of basic networking concepts. |
| 2   | [Introduction to Bash scripting](https://youtu.be/_n5ZegzieSQ) | Fantastic intro to bash scripting, Joe Collins voice is soothing!|
| Optional   | [Computer Networking Course - Network Engineering](https://youtu.be/qiQR5rTSshw) | This full college-level computer networking course will prepare you to configure, manage, and troubleshoot computer networks. |

Once you have gone through this content, I think you would have a solid basic level of Linux and networking knowledge, no you're not a professional, but you shouldn't feel lost or clueless. The two books I mentioned have several projects, DO THEM! Do not just read the theory! If there is a concept you don't understand, look it up, don't limit yourself to the resources I am sharing here.

## Projects

 Title    | Resource     |
 :---------- | :----------- |
 Install Linux on a computer   | Research a distro and install it (We like [Pop!_OS](https://pop.system76.com/)) |
Setup a [LAMP server](https://en.wikipedia.org/wiki/LAMP_(software_bundle)) | A pretty popular Linux admin task. |
 Deploy a NAS server | Checkout [FreeNAS](https://www.freenas.org/) |
 Deploy your own cloud | Checkout [NextCloud](https://nextcloud.com/) |
  Convert video files | Checkout [ffmpeg](https://ffmpeg.org/ffmpeg.html) use it to write a script that converts a .mov file to mp4|
   [Awesome Bash](https://github.com/awesome-lists/awesome-bash) | Lots of Bash resources|

## Things you should be able familiar with at the end of this phase

- Navigate with the `cd` command.
- How to list the contents of a directory and using the `ls` command.
- Create, copy, move, rename, directories and files with `mkdir`, `cp`, `rm`, and `touch` commands.
- Find things with `locate`, `whereis`, `which`, and `find` commands.
- Understand how to work with links with the `ln` command.
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
- Filesystem device management with `fdisk`, `lsblk`, `mount`, `unmount`, `df`,`fsck`.
- How to access a Linux server with `ssh`.
- How to write a simple bash script.
- Understand IP Addressing and what are subnets, subnet masks, DHCP, and DNS.
- Understand what are gateways, route tables, load balancing and VPNs.

## Certifications you might want to look into 

There are several Linux certifications and you can chose to study for any of them really, but a lot of them cover WAY more than what you need to know for a solid foundation and are more focused on Linux administration.

- [LPI essentials](https://www.lpi.org/our-certifications/linux-essentials-overview) - Great overview of many basic Linux commands.

- [RedHat](https://www.redhat.com/en/services/training-and-certification)
- [Linux Foundation](https://training.linuxfoundation.org/certification-catalog/)
- [Oracle](https://education.oracle.com/oracle-certification-path/pFamily_358)
- [LPI](https://www.lpi.org/)
- [Comptia Linux+](https://www.comptia.org/certifications/linux)

 I (GPS) took the [LPI Essentials](https://www.lpi.org/our-certifications/linux-essentials-overview). I had a good time studying for it and learned A LOT. Though it's an introductory certification, it wasn't easy.

There are also TONS of networking certifications out there, and similar to the Linux ones, they are more focused on giving you a lot of knowledge so you can become a networking engineer/specialist, again at an introductory level, it's a little overkill. If you did want to get one, take a look at the [Cisco certifications](https://www.cisco.com/c/en/us/training-events/training-certifications/certifications.html) which are pretty much industry standard and/or [Comptia Network+](https://www.comptia.org/certifications/network)

At the end of the day, if you want to take them, go for it :)
  
## What's next

[Go to Phase 2: Programming fundamentals](../phase2/README.md)