# 主题 5：Linux 命令行 (CLI) 基础

> ⏱️ **预计时间：** 1 周

从事“云”相关的工作，扎实的 Linux 命令行 (CLI) 技能是必不可少的。我们建议你阅读并完成 [Linux Basics for Hackers](https://nostarch.com/linuxbasicsforhackers#content)（黑客 Linux 基础）一书。虽然你也可以参考下方的命令列表并逐一研究，但我们认为，如果不结合实际场景，你很难深入理解这些命令的运行逻辑。

---

## 📚 学习路径

针对这一主题，我们建议完成该书的 **第 1-8 章**，这些内容涵盖了云端工作的核心技能：

1. 基础入门 (Getting Started with the Basics)
2. 文本操作 (Text Manipulation)
3. 网络分析与管理 (Analyzing and Managing Networks)
4. 软件的添加与删除 (Adding and Removing Software)
5. 控制文件和目录权限 (Controlling File and Directory Permissions)
6. 进程管理 (Process Management)
7. 管理用户环境变量 (Managing User Environment Variables)
8. Bash 脚本编写 (Bash Scripting)

**可选但推荐：** 第 9-11 章（压缩/归档、文件系统管理以及日志记录）提供了非常有价值的补充背景。

## 基础命令 (Foundational Commands)

在开始实验挑战之前，请务必熟悉以下核心命令：

- `pwd`: 打印当前工作目录 (Print working directory) —— 显示你当前所处的位置。
- `cd`: 切换目录 (Change directory) —— 在文件夹之间进行跳转。
- `ls`: 列出目录内容 (List directory contents) —— 查看当前目录下的文件和文件夹。
- `cat`: 显示文件内容 (Display file contents)。

## 挑战 1：隐藏文件 (Challenge 1: Hidden Files)

学习使用这些命令来挖掘隐藏文件：

- `ls -a`: 列出所有文件，包括隐藏文件。
- `ls -la`: 包含隐藏文件的详细列表。
- `find . -name ".*"`: 搜索所有隐藏文件。

**核心概念：**

- 在 Linux 系统中，隐藏文件均以点号 (`.`) 开头。
- 默认情况下，隐藏文件不会直接显示。
- 使用 `ls` 命令时加上 `-a` 选项即可显示隐藏文件。

## 挑战 2：文件搜索 (Challenge 2: File Searching)

熟练掌握这些文件搜索命令：

- `find /path -name "pattern"`: 按名称模式搜索文件。
- `find /path -type f`: 仅搜索普通文件（排除目录）。
- `locate filename`: 利用数据库实现极速文件检索。
- `grep -r "text" /path`: 在指定路径中递归搜索包含特定文本的文件内容。

## 挑战 3：文件大小分析 (Challenge 3: File Size Analysis)

用于分析和筛选文件大小的工具：

- `ls -lh`: 以易读的格式（如 KB, MB, GB）列出文件大小。
- `du -h`: 显示目录或文件的磁盘占用情况。
- `sort -h`: 按易读的大小数值进行逻辑排序。
- `find /path -type f -size +1M`: 查找所有大于 1MB 的文件。

## 挑战 4：用户调查 (Challenge 4: User Investigation)

用于用户和权限审计的命令：

- `id username`: 显示特定用户的 UID (用户 ID) 和所属组。
- `cat /etc/passwd`: 查看系统中所有的本地用户账号信息。
- `getent passwd uid`: 根据 UID 查询特定用户的信息。
- `ls -l /home/`: 列出 `/home` 目录下的家目录以了解用户分布。

**理解核心用户文件：**

- `/etc/passwd`: 存储用户账号基本信息的关键系统文件。
- `~/.profile` 和 `~/.bashrc`: 当前用户的 Shell 配置文件，用于定义环境变量和别名。

## 挑战 5：权限分析 (Challenge 5: Permission Analysis)

权限操作相关命令：

- `ls -l`: 查看文件详细权限（rwx 属性）。
- `stat filename`: 获取文件的详细状态信息。
- `find / -perm 777`: 全盘搜索具有 777（全开）权限的文件。
- `chmod`: 更改文件或目录的访问权限。

## 挑战 6：网络服务 (Challenge 6: Network Services)

网络调查与连通性测试命令：

- `netstat -tuln`: 列出当前系统正在监听的所有端口。
- `ss -tuln`: `netstat` 的现代、高效替代工具。
- `lsof -i`: 列出所有打开了网络连接的文件/进程。
- `curl localhost:port`: 测试本地特定端口的 HTTP 服务响应。
- `nc -zv host port`: 测试远程主机特定端口的 TCP 连通性。

## 挑战 7：编码与解码 (Challenge 7: Encoding/Decoding)

文本处理与格式转换命令：

- `base64`: 对文本或文件进行 Base64 格式的编码与解码。
- `echo -n "text"`: 输出文本且不追加末尾换行符。
- 管道操作符 (`|`): 用于将一个命令的输出传递给下一个命令作为输入。

## 挑战 8：SSH 配置 (Challenge 8: SSH Configuration)

SSH 相关命令与安全最佳实践：

- `ls -la ~/.ssh/`: 列出 SSH 配置文件夹的内容。
- `find ~/.ssh -type f`: 查找所有与 SSH 相关的私钥、公钥或配置文件。
- `chmod 600`: 为私钥文件设置严格的安全权限（仅限所有者读写）。
- `ssh-keygen`: 生成用于身份验证的 SSH 密钥对。

**安全最佳实践：**

- 妥善保管你的**私钥**，切勿泄露或上传到公共仓库。
- 确保密钥文件的权限设置正确（例如，私钥应设为 600）。
- 定期检查 `authorized_keys` 文件，确认信任的访问来源。

## 挑战 9：DNS 故障排除 (Challenge 9: DNS Troubleshooting)

挑战中包含 DNS 配置问题，你需要学习如何对比和修改配置文件：

- 彻底熟悉 `/etc/resolv.conf` 及其备份文件的结构。
- 练习使用文件对比工具（如 `diff`）来快速定位配置差异。
- 掌握文本编辑命令（如 `vim` 或 `nano`），以便安全高效地修改配置。

## 挑战 10：远程上传 (Challenge 10: Remote Upload)

在此挑战中，你将通过文件上传动作触发 flag：

- 了解常见的文件传输协议和方法（如 `scp` (Secure Copy) 或类似工具）。
- 学习如何监控远程目录以检测新产生的文件。
- 尝试不同的文件传输方案，找到最适合当前环境的路径。

## 挑战 11：Web 配置 (Challenge 11: Web Configuration)

此项挑战涉及识别 Web 服务器的非标准端口配置：

- 学习如何定位并审查配置文件（例如 `nginx` 的配置目录）。
- 熟悉服务管理 (Service Management) 的基础操作，学会如何重启 (restart) 或重载 (reload) 服务。
- 理解配置参数的变化如何直接影响 Web 服务器的运行行为。

## 挑战 12：网络流量分析 (Challenge 12: Network Traffic Analysis)

在最后一项挑战中，你需要分析网络流量以挖掘隐藏信息：

- 熟悉网络流量捕获 (Capture) 的基本方法。
- 学习如何检查数据包 (Packet) 内容，揭开隐藏的数据。
- 尝试使用各种网络分析工具，不建议死记硬背固定的操作流程，而应通过实验来建立直觉。

## 通用建议 (General Tips)

1. 充分利用 `man` 帮助页面来深入理解命令的可选参数。
2. 勇于尝试不同的命令组合，练习使用管道 (Piping) 技术构建复杂指令。
3. 按部就班地完成每一个挑战，循序渐进地巩固你的知识体系。

请记住：我们的最终目标是让你掌握命令的核心逻辑及其在实际场景中的应用方式。请投入充足的时间去实验，探索每一个命令的边界和行为表现。

---

## ✅ 阶段检查清单 (Phase Checklist)

在继续下一阶段之前，请确保你可以对以下内容回答“是”：

- [ ] 我已经完成了《黑客 Linux 基础》(Linux Basics for Hackers) 的第 1-8 章（或具备同等水平的内容）
- [ ] 我熟练掌握了基础导航命令 (cd, ls, pwd)
- [ ] 我可以熟练地在命令行中操作文件和目录
- [ ] 我理解文件权限的运作机制及其更改方法
- [ ] 我能灵活使用管道和重定向 (Redirects) 链接命令
- [ ] 我理解基础的 Bash 脚本编写概念

---