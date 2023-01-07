# Fase 4: Fundamentos em DevOps

Autor: [GPS](https://twitter.com/madebygps)

## Como esta fase se aplica à nuvem?

DevOps é tudo que envolve obter a sua solução para rodar com mais eficiência desde a implementação até as atualizações.

Não é específico para Cloud, você também pode implementar as práticas DevOps tanto nos modelos on-premese quanto nos híbridos. DevOps não está limitado a um único cargo. Embora muitas companhias têm cargos dedicados à DevOps. Se o seu objetivo é se tornar um(a) engenheiro(a) DevOps, nesta fase você vai obter uma introdução mas precisará se aprofundar mais depois.

DevOps é uma cultura, e não uma ferramenta ou serviço específicos. Leia sobre o que é DevOps. Cada plataforma de nuvem tem a sua suite de ferramentas DevOps, eu linkei alguns artigos aqui:

- [Microsoft - O que é DevOps?](https://azure.microsoft.com/overview/what-is-devops/#overview)
- [AWS - O que é DevOps?](https://aws.amazon.com/devops/what-is-devops/)
- [IBM - Um gia DevOps completo](https://www.ibm.com/cloud/learn/devops-a-complete-guide)

Eu também acho que vale a pena ler o [Projeto Phoenix](https://itrevolution.com/the-phoenix-project/). É uma leitura bem divertida porque é uma ficção mas que explica a importância da cultura DevOps. Se você preferir algo mais parecido com um livro didático com ideias similares, dê uma olhada no [Manual DevOps](https://itrevolution.com/the-devops-handbook/).

Você deveria ter concluído o [Desafio CUrrículo na Nuvem](https://cloudresumechallenge.dev/) da fase anterior. Esse projeto te apresenta os conceitos de DevOps, se você não os conhece, volte e faça.

## Como desmembrar esta fase?

| Ordem | Tópico | Comprometimento |
| :---- | :----- | :-------------- |
| 1 | CI/CD com GitHub Actions | 1 semana |
| 2 | IaC com Terraform | 1 semana |
| 3 | Containers com Docker | 1 semana |
| 4 | Orquestração de containers com Kubernetes | 1 semanas |
| 5 | Monitoramento com Prometheus | 1 semanas |

Claro, sinta-se livre para gastar o tempo que você quiser. As pessoas pediram uma linha do tempo e detalhamento, então eu os adicionei. Cada prática de DevOps é importante, mas esses são os mais usados para um nível de entrada/júnior. Você já deve estar familiarizado com o controle de versão da [fase 2](../phase2/README.md).

## Fontes

| Fonte | Notes |
| :---- | :---- |
| [Tutorial GitHub Actions - Conceitos básicos e pipeline CI/CD com Docker](https://www.youtube.com/watch?v=R8_veQiYBjI)| Nana é a rainha do DevOpse criou alguns dos melhores conteúdos de aprendizado sobre o assunto que existe por aí. Este tutorial irá lhe introduzir ao GitHub Actions. |
| [Curso completo de Terraform - Do INICIANTE ao PROFISSIONAL!](https://www.youtube.com/watch?v=7xngnjfIlK4)| Aprenda como usar o Terraform para automatizar sua infraestrutura AWS. |
| [Tutorial Docker para iniciantes](https://youtu.be/3c-iBn73dDE) | Um curso completo e "mão na massa" de Docker com muitas demonstrações e explicações de conceitos por detrás para que você realmente entenda-os. |
| [Curso intensivo de Kubernetes para iniciantes absolutos](https://youtu.be/s_o8dwzRlu4) | Tutorial mão na massa sobre Kubernetes | Aprenda Kubernetes em 1 hora - Um intensivão de Kubernetes para iniciantes. |
| [Tutorial completo sobre monitoramento com Prometheus](https://youtube.com/playlist?list=PLy7NrYWoggjxCF3av5JKwyG7FFF9eLeL4) | Um Tutorial completo sobre monitoramento com Prometheus. |

## Projetos

| Título | Resource |
| :----- | :------- |
| [Jornada DevOps usando Azure DevOps](https://github.com/thomast1906/DevOps-Journey-Using-Azure-DevOps) | Este tutorial/laboratório irá guiá-lo através de uma jornada DevOps usando Azure DevOps. Desde a configuração do seu pipeline até a implementação de uma aplicação de um cluster do Azure Kubernets! |
| [DevOps da maneira difícil - Azure](https://github.com/thomast1906/DevOps-The-Hard-Way-Azure) | Este tutorial contém uma solução completa do mundo real para configurar um ambiente que usa tecnologias e práticas de DevOps para implantar aplicativos e serviços de nuvem/infraestrutura de nuvem na Azure. |
| [DevOps da maneira difícil - AWS](https://github.com/AdminTurnedDevOps/DevOps-The-Hard-Way-AWS) | Este tutorial contém uma solução completa do mundo real para configurar um ambiente que usa tecnologias e práticas de DevOps para implantar aplicativos e serviços de nuvem/infraestrutura de nuvem na AWS. |

## Coisas que você deveria estar familiarizado ao final desta fase

- Ser capaz de explicar cada prática DevOps
  - Por que cada uma delas importa
  - O que cada uma delas faz
  - A mais populares ferramentas de cada uma delas

- Ter projetos pessoais no GitHub. Para pelo menos 2 dos projetos:
  - Ter um pipeline CI/CD
  - Ter arquivos IaC para cada projeto
  - Ter monitoramento implementado para cada um
    - Garanta que você pode entender o registro de logs e os dados das métricas
  - Se algo der errado com o seu projeto, saber como solucionar os problemas

## Certificações que você pode querer dar uma olhada

- [Certificação DevOps Engineer da AWS - Professional](https://aws.amazon.com/certification/certified-devops-engineer-professional/?ch=sec&sec=rmg&d=1)
- [Certificação DevOps Engineer Expert da Microsoft](https://docs.microsoft.com/en-us/learn/certifications/devops-engineer/)
