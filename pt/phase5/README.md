# Fase 5: Fundamentos de segurança na nuvem

Autor: [Dayspring Johnson](https://twitter.com/daycyberwox)

## Como esta fase se aplica à nuvem?

Segurança é o maior desafio da computação em nuvem. Como a adoção de nuvem continua a crescer, incidentes e vulnerabilidades de segurança neste ambiente também está em ascensão.

Os componentes individuais de nuvem que foram apresentados a você nas fases anteriores requerem segurança de uma forma ou de outra. Melhor ainda, a segurança deve ser considerada em todas as perspectivas para evitar que agentes mal-intencionados encontrem e explorem vulnerabilidades em nossos ambientes de nuvem que podem potencialmente levar ao comprometimento de dados ou da infraestrutura.

Aqui está um dos meus artigos favoritos feito por [Christophe Tafani-Dereeper](https://twitter.com/christophetd) que aborda violações e vulnerabilidades de segurança na nuvem:

- [Violações e vulnerabilidades de segurança na nuvem: 2021 em review](https://blog.christophetd.fr/cloud-security-breaches-and-vulnerabilities-2021-in-review/)

Eu também recomendo dar uma olhada em [Securing DevOps: Security in the Cloud](https://www.manning.com/books/securing-devops) por [Julien Vehent](https://twitter.com/jvehent) que cobre vários dos pincipais componentes para proteger a infraestrutura em nuvem, registro de logs, detecção de ameaças e entre outros. Ele inclusive tem recursos práticos e visuais que ajudam no aprendizado desses conceitos.

Outra recomendação de livro é [Practical Cloud Security: A Guide for Secure Design and Deployment](https://www.oreilly.com/library/view/practical-cloud-security/9781492037507/) escrito por [Chris Dotson](https://www.linkedin.com/in/chris-dotson-6a9b55/). Este é uma ótima fonte complementar dos livros sugeridos anteriormente à medida que vai mais fundo em diversos conceitos, padrões, frameworks e princípios necessários para segurança na nuvem, e como o seu próprio nome incida, é prático.

Sempre se lembre disso, você não pode proteger o uqe você não entende, portanto certifique-se de entender os componentes arquitetônicos e principais da nuvem para que você possa protegê-los adequadamente.


## Fontes

| Plataforma cloud | Título | Descrição |
| :--------------- | :----- | :-------- |
| AWS, Azure & GCP | [Hacking The Cloud](https://hackingthe.cloud/) | Hacking the cloud é uma enciclopédia de técnicas e táticas que são comuns na exploração na nuvem. |
| AWS | [Flaws.Cloud](http://flaws.cloud/) | Através de uma série de níveis você irá aprender sobre os erros e pegadinhas mais comuns quando se está usando a Amazon Web Services (AWS). |
| AWS | [Flaws2.Cloud](http://flaws2.cloud/)| Similar ao Flaws.Cloud Challenge original este tutorial te ensina conceitos de segurança na AWS mas, dessa vez, a partir das perspectivas ofensiva e defensiva. |
| AWS | [Cloud Goat](https://github.com/RhinoSecurityLabs/cloudgoat)| CloudGoat é uma ferramenta de implantação AWS "Vulnerável por Design" da Rhino Security Labs que permite aprimorar suas habilidades de segurança cibernética na nuvem criando e concluindo vários cenários de estilo "capture-the-flag". |
| AWS | [Sadcloud](https://github.com/nccgroup/sadcloud)| Sadcloud é uma ferramenta para ativar a infraestrutura insegura da AWS com Terraform. Você pode testar o seu conhecimento de segurança da AWS em relação a essas infraestruturas. |
| AWS | [AWS Well-Architected Labs: Security](https://www.wellarchitectedlabs.com/security/) | Os laboratórios de segurança são documentações e códigos no formato hands-on para ajudar você aprender, medir e construir usando as melhores práticas arquiteturais. |
| AWS | [Fundamentos de detecção de ataques](https://labs.f-secure.com/blog/attack-detection-fundamentals-2021-aws-lab-1/) | Esta série de três partes explora uma cadeia de eliminação de ponta a ponta na AWS e entradas de log para detecção e análise. |
| Azure | [Fundamentos de detecção de ataques](https://labs.f-secure.com/blog/attack-detection-fundamentals-2021-azure-lab-1/)| Esta série de três partes explora uma cadeia de eliminação de ponta a ponta na Azure e entradas de log para detecção e análise. |
| Azure | [CONVEX](https://github.com/Azure/CONVEX) | Um acrônimo para **C**loud **O**pen-source **N**etwork **V**ulnerability **E**xploitation e**X**perience, **CONVEX** ativa ambientes de captura de flags em seu locatário Azure para você praticar. |
| Azure | [Securing Azure Infrastructure - Guia Laboratório Hands-on](https://github.com/azurecitadel/azure-security-lab) | Um guia prático para proteger a infraestrutura usando vários controles de segurança da Azure. |
| Azure | [Tecnologia de segurança Azure](https://microsoftlearning.github.io/AZ500-AzureSecurityTechnologies/) | Vários laboratórios cobrindo a segurança na Azure. |
| Azure | [Criar um laboratório vulnerável da Azure](https://0xpwn.wordpress.com/2022/03/05/setting-up-an-azure-pentest-lab-part-1-anonymous-blob-access/) | A four-part series explaining azure vulnerabilities. |
| GCP | [GCP GOAT](https://gcpgoat.joshuajebaraj.com/)| GCP-Goat é um ambiente GCP intencionalmente vulverável para aprender e praticar segurança na GCP |
| GCP | [ThunderCTF](https://thunder-ctf.cloud/)| Thunder CTF permite praticar ataques de vulnerabilidade em projetos de nuvem da Google Cloud Platform (GCP). Em cada nível, você é encarregado de explorar uma implementação em nuvem para procurar um "inteiro" secreto armazenado dentro dele. |
| Kubernetes | [Kubernetes Goat](https://madhuakula.com/kubernetes-goat/)| Kubernetes Goat é um playground de aprendizagem sobre segurança Kubernets. |

## Projetos

| Plataforma nuvem | Título  | Descrição  |
| :--------------- | :------ | :--------- |
| AWS | [Threat Detection With AWS GuardDuty](https://www.youtube.com/watch?v=lLgqP4cbdWg&t=127s) | Um tutorial que mostra como usar AWS GuardDuty para detectar ameaças. |
| AWS | [AWS Threat Simulation & Detection](https://github.com/sbasu7241/AWS-Threat-Simulation-and-Detection/blob/main/aws.credential-access.ec2-get-password-data.md)| Esta doc mostra o uso do Stratus Red Team & SumoLogic para ataque & detecção/análise. Isto pode ser replicado usando qualquer outro [SIEM](https://www.gcsec.com.br/o-que-e-siem-e-quais-suas-principais-funcionalidades/index.html). |
| Azure | [Blog: Azure Cloud Detection Lab](https://cyberwoxacademy.com/azure-cloud-detection-lab-project/), [Canal no YouTube: Azure Cloud Detection Lab](https://youtube.com/playlist?list=PLBNtagSCmDWw27ccfeWeiaMcpNIxpGHy4) | Um projeto hands-on mostrando como detectar ameaças em um ambiente Azure usando Azure Sentinal. |
| Azure | [Tutorial SIEM para iniciantes \| Tutorial Azure Sentinel - MAPA com ATAQUES CYBERNÉTICOS AO VIVO!](https://youtu.be/RoZeVbbZ0o0)| Um projeto hands-on mostrando como configurar um [honeypot](https://www.kaspersky.com/resource-center/threats/what-is-a-honeypot) e analisando tráfego malicioso usando Azure Sentinel. |

## Coisas que você deveria estar familiarizado ao final desta fase

- UM entendimento dos principais conceitos IAM(Users, Roles, Policies, Groups, Service Accounts/Principals, etc.)
- Um entendimento de como funciona autenticação na nuvem.
- Um entendimento de armazenamento/computação/redes/aplicações/entre outros seguros em nuvem.
- Vulnerabilidades de segurança comuns e configurações incorretas na nuvem.
- Como investigar os logs de nuvem e determinar se um ambiente nuvem foi comprometido.
- Como simular ataques contra ambientes nuvem.
- Como implementar infraestrutura vulnerável na nuvem para testar segurança.
- Conhecimento e uso de diversas ferramentas de segurança na nuvem.

## Certificações que você pode querer dar uma olhada

- [Certificação Cloud Security Professional](https://www.isc2.org/Certifications/CCSP)
- [Certificação Security Operations Analyst Associate da Microsoft](https://docs.microsoft.com/en-us/learn/certifications/security-operations-analyst/)
- [Certificação Azure Security Engineer Associate da Microsoft](https://docs.microsoft.com/en-us/learn/certifications/azure-security-engineer/)
- [Certificação AWS Security - Specialty](https://aws.amazon.com/certification/certified-security-specialty/)
- [Certificação Google Professional Cloud Security Engineer](https://cloud.google.com/certification/cloud-security-engineer)

### Practical Certifications (training included)
Essas são certificações menos conhecidas. Elas são focadas em fornecer o treinamento necessário, bem como certificações práticas, nas quais você coloca as habilidades que aprendeu em uso, em vez de clicar em perguntas de múltipla escolha.
- [Certificação Az Red Team Professional](https://bootcamps.pentesteracademy.com/course/ad-azure-may-21)
- [Certificação Azure Web Application Security Professional](https://bootcamps.pentesteracademy.com/course/azure-appsec-beginner-jul-22)
- [Certificação Offensive Azure Security Professional](https://cloudbreach.io/labs/)
