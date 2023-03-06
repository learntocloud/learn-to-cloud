# Етап 5: Основи безпеки у Хмарі

Автор: [Dayspring Johnson](https://twitter.com/daycyberwox)

## Як цей етап застосовується до Хмарних технологій?

Безпека - найбільший виклик для хмарних обчислень. Оскільки впровадження хмарних технологій продовжує зростати, зростає і кількість інцидентів та вразливостей, пов'язаних з безпекою хмарних технологій.

Окремі компоненти хмарних технологій, з якими ви ознайомилися на попередніх етапах, потребують захисту в тій чи іншій формі. Більше того, безпека повинна розглядатися з усіх точок зору, щоб запобігти зловмисникам у пошуку та використанні вразливостей у наших хмарних середовищах, які потенційно можуть призвести до компрометації даних або інфраструктури.

Ось одна з моїх улюблених статей яка написана [Christophe Tafani-Dereeper](https://twitter.com/christophetd) в якій розглядаються недоліки та вразливості хмарної безпеки:

- [Cloud Security Breaches and Vulnerabilities: 2021 in Review](https://blog.christophetd.fr/cloud-security-breaches-and-vulnerabilities-2021-in-review/)

Також рекомендую ознайомитися з [Securing DevOps: Security in the Cloud](https://www.manning.com/books/securing-devops) яка написана [Julien Vehent](https://twitter.com/jvehent) яка охоплює кілька основних компонентів для захисту хмарної інфраструктури, ведення журналів, виявлення загроз тощо. Вона навіть має практичні та наочні посібники, які допомагають у вивченні цих концепцій.

Ще однією книжковою рекомендацією є [Practical Cloud Security: A Guide for Secure Design and Deployment](https://www.oreilly.com/library/view/practical-cloud-security/9781492037507/) яка написана [Chris Dotson](https://www.linkedin.com/in/chris-dotson-6a9b55/). Ця книга є хорошим доповненням до попередньої книги, оскільки в ній детально розглядаються різні концепції, стандарти, фреймворки та принципи, необхідні для безпеки хмарних технологій, і, як випливає з назви, вона має практичний характер.

Завжди пам'ятайте, що ви не можете захистити те, чого не розумієте, тому переконайтеся, що ви розумієте архітектуру та основні компоненти хмари, щоб ви могли належним чином захистити їх.

## Ресурси

| Хмарна Платформа | Назва  | Опис  |
|:-------------- | ------ | ------ |
AWS, Azure & GCP | [Hacking The Cloud](https://hackingthe.cloud/)| Хакінг хмари - це енциклопедія атак/тактик/технологій, які часто зустрічаються при експлуатації хмар. |
AWS | [Flaws.Cloudf](http://flaws.cloud/)| Пройшовши серію рівнів, ви дізнаєтеся про типові помилки та хитрощі під час використання Amazon Web Services (AWS). |
AWS | [Flaws2.Cloud](http://flaws2.cloud/)| Подібно до оригінального Flaws.Cloud Challenge, цей підручник навчить вас концепціям безпеки AWS, але цього разу з точки зору як наступу, так і захисту. |
AWS | [Cloud Goat](https://github.com/RhinoSecurityLabs/cloudgoat)| CloudGoat - це інструмент розгортання AWS "Vulnerable by Design" від Rhino Security Labs, який дозволяє вам відточити свої навички кібербезпеки в хмарі, створивши і завершивши кілька сценаріїв в стилі "захоплення прапора". |
AWS | [Sadcloud](https://github.com/nccgroup/sadcloud)| Sadcloud - це інструмент для розгортання незахищеної інфраструктури AWS за допомогою Terraform. Ви можете перевірити свої знання з безпеки AWS на цій інфраструктурі. |
AWS | [AWS Well-Architected Labs: Security](https://www.wellarchitectedlabs.com/security/)| The security labs - це документація та код у форматі практичних лабораторних робіт, які допоможуть вам вивчати, вимірювати та будувати, використовуючи найкращі архітектурні практики. |
AWS | [Attack Detection Fundamentals](https://labs.f-secure.com/blog/attack-detection-fundamentals-2021-aws-lab-1/)| У цій серії з трьох частин розглядається end-to-end kill chain у AWS і записи журналів для виявлення та аналізу.|
Azure | [Attack Detection Fundamentals](https://labs.f-secure.com/blog/attack-detection-fundamentals-2021-azure-lab-1/)| У цій серії з трьох частин розглядається end-to-end kill chain у Azure і записи журналів для виявлення та аналізу. |
Azure | [CONVEX](https://github.com/Azure/CONVEX)| Cloud Open-source Network Vulnerability Exploitation eXperience (CONVEX) розгортає середовище Capture The Flag у вашому тенанті Azure, щоб ви могли пограти в нього.  |
Azure | [Securing Azure Infrastructure - Hands on Lab Guide](https://github.com/azurecitadel/azure-security-lab)| Практичний посібник із захисту інфраструктури Azure за допомогою різних засобів контролю безпеки Azure. |
Azure | [Azure Security Technologies](https://microsoftlearning.github.io/AZ500-AzureSecurityTechnologies/)| Різноманітні лабораторні сценарії, що охоплюють безпеку Azure. |
Azure | [Create an Azure Vulnerable Lab](https://0xpwn.wordpress.com/2022/03/05/setting-up-an-azure-pentest-lab-part-1-anonymous-blob-access/)| Серія з чотирьох частин, що пояснює вразливості в Azure. |
Azure | [Azure Goat](https://github.com/ine-labs/AzureGoat)| AzureGoat : До біса вразлива інфраструктура Azure |
Azure | [Purple Cloud](https://github.com/iknowjason/PurpleCloud)| Невеликий інструмент для гри з Azure Identity - інструмент для створення лабораторної роботи з Azure Active Directory |
GCP | [GCP GOAT](https://gcpgoat.joshuajebaraj.com/)| GCP-Goat навмисно вразливе середовище GCP для вивчення та практики безпеки GCP |
GCP | [ThunderCTF](https://thunder-ctf.cloud)| Thunder CTF дозволяє гравцям попрактикуватися в атаках на вразливі хмарні проекти на Google Cloud Platform (GCP). На кожному рівні гравці отримують завдання експлуатувати хмарне розгортання, щоб знайти "секретне" ціле число, яке зберігається в ньому. |
Kubernetes | [Kubernetes Goat](https://madhuakula.com/kubernetes-goat/)| Kubernetes Goat це інтерактивний навчальний майданчик з безпеки Kuberenetes |

## Проекти  

| Хмарна Платформа | Назва  | Опис |
|:-------------- | ------ | ------ |
AWS | [Threat Detection With AWS GuardDuty](https://www.youtube.com/watch?v=lLgqP4cbdWg&t=127s)| Посібник про те, як використовувати AWS GuardDuty для виявлення загроз. |
AWS | [AWS Threat Simulation & Detection](https://github.com/sbasu7241/AWS-Threat-Simulation-and-Detection/blob/main/aws.credential-access.ec2-get-password-data.md)| У цьому документі показано використання Stratus Red Team та SumoLogic для атаки, виявлення та аналізу. Це можна повторити за допомогою будь-якого іншого SIEM. |
Azure | [Azure Cloud Detection Lab(Blog)](https://cyberwoxacademy.com/azure-cloud-detection-lab-project/), [Azure Cloud Detection Lab(Videos)](https://youtube.com/playlist?list=PLBNtagSCmDWw27ccfeWeiaMcpNIxpGHy4)| Практичний проект, який показує, як виявляти загрози в хмарному середовищі за допомогою Azure Sentinal. |
Azure | [SIEM Tutorial for Beginners Azure Sentinel Tutorial MAP with LIVE CYBER ATTACKS!](https://youtu.be/RoZeVbbZ0o0)| Практичний проект, який показує, як налаштувати honey pot і проаналізувати шкідливий трафік за допомогою Azure Sentinel. |

## Теми з якими ви повинні бути знайомі наприкінці цього етапу

- Розуміння основних концепцій IAM (Користувачі, Ролі, Політики, Групи, Service Accounts/Principals тощо)
- Розуміння того, як працює аутентифікація в хмарі.
- Розуміння безпечного хмарного сховища, обчислень, мереж, додатків і так далі.
- Поширені вразливості безпеки та неправильні конфігурації в хмарі.
- Як досліджувати хмарні журнали та визначати, чи було скомпрометоване хмарне середовище.
- Як імітувати атаки на хмарні середовища.
- Як розгортати вразливу інфраструктуру в хмарі для тестування безпеки.
- Знання та використання різних інструментів хмарної безпеки.

## Сертифікати, на які ви можете звернути увагу

- [Certified Cloud Security Professional](https://www.isc2.org/Certifications/CCSP)
- [Microsoft Certified: Security Operations Analyst Associate](https://docs.microsoft.com/en-us/learn/certifications/security-operations-analyst/)
- [Microsoft Certified: Azure Security Engineer Associate](https://docs.microsoft.com/en-us/learn/certifications/azure-security-engineer/)
- [AWS Certified Security - Specialty](https://aws.amazon.com/certification/certified-security-specialty/)
- [Google Professional Cloud Security Engineer](https://cloud.google.com/certification/cloud-security-engineer)

### Сертифікати із практикою (включно з навчанням)

Це менш відомі сертифікати, але вони зосереджені на наданні вам необхідної підготовки, а також сертифікати із практикою, де ви застосовуєте отримані навички на практиці, замість того, щоб відповідати на запитання з декількома варіантами відповідей.

- [Certified Az Red Team Professional](https://bootcamps.pentesteracademy.com/course/ad-azure-may-21)
- [Certified Azure Web Application Security Professional](https://bootcamps.pentesteracademy.com/course/azure-appsec-beginner-jul-22)
- [Offensive Azure Security Professional](https://cloudbreach.io/labs/)
