# Fase 4: Fundamentos de DevOps

Author: [GPS](https://twitter.com/madebygps)

## ¿Cómo aplica esta fase a la Nube?

DevOps es todo acerca de hacer que tu solución se ejecute eficientemente desde el desarrollo hasta las actualizaciones.
No es específico de la Nube, ya podes implementar las prácticas de DevOps on-prem y en ambientes híbridos. Las prácticas de Devops son generalmente administradas por muchos roles y algunas companías tiene Ingenieros DevOps dedicados a esto. Si te queres convertir en un ingeniero DevOps, esta etapa te ayudara a comenzar, pero deberas ir más a fondo por tu cuenta para lograrlo.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/YMXwThdwTiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Devops es un concepto cultural y no una herramienta o servicio. Te recomiendo leer sobre DevOps. Cada plataforma de Nuve tiene su conjunto de herramientas de DevOps, acá hay alguns links a algunos artículos:

- [Microsoft - Qué es DevOps](https://azure.microsoft.com/overview/what-is-devops/#overview)
- [AWS - Qué es DevOps](https://aws.amazon.com/devops/what-is-devops/)
- [IBM - Una guía completa sobre DevOps](https://www.ibm.com/cloud/learn/devops-a-complete-guide)

También creo que vale la pena leer [El Proyecto Phoenix ](https://itrevolution.com/the-phoenix-project/), es una lectura divertida ya que cuenta una historia ficticia pero que explica la importancia de DevOps. Pero si tu prefieres algo más libro de texto con ideas similares, fijate [El manual de DevOps](https://itrevolution.com/the-devops-handbook/).

Debes haber completado El [Desafío del currículum de Nube](https://cloudresumechallenge.dev/) en la fase anterior. Ese proyecto te introduce en los conceptos de DevOps, si no lo has hecho, vuelve atras y hazlo.

## Cómo dividir esta fase

| Orden | Concepto                     | Herramientas recomendadas | otras herramientas                      |
| ----- | ---------------------------- | ------------------------- | --------------------------------------- |
| 1     | CI/CD                        | GitHub Actions            | Jenkins, GitLab, CircleCI               |
| 2     | IaC                          | Terraform                 | Azure Bicep, AWS CloudFormation, Pulumi |
| 3     | Contenedores                 | Docker                    |
| 4     | Orquestación de Contenedores | Kubernetes                |
| 5     | Monitoreo                    | Prometheus y Grafana      | Datadog                                 |

## Recursos

| Recursos                                                                                                                 | Noas                                                                                                                                       |
| :----------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [La guía DevOps](https://thedevops.guide/)                                                                               | Aprendé todos los conceptos de DevOps                                                                                                      |
| [Tutorial de GitHub Actions -Conceptos básicos y CI/CD Pipeline con Docker](https://www.youtube.com/watch?v=R8_veQiYBjI) | Nana es la reina de DevOps y creó algunos de los mejores contenidos para aprender Devops. Este tutorial the introducirá en GitHub actions. |
| [Curso completo de Terraform - De PRINCIPIANTE A PRO!](https://www.youtube.com/watch?v=7xngnjfIlK4)                      | Aprendé como usar Terraform para automatizar tu infraestructura en AWS.                                                                    |
| [Tutorial de Docker para principiantes](https://youtu.be/3c-iBn73dDE)                                                    | Curso práctico y completo de Docker con muchos ejemplos y explicaciones de los conceptos detras, para que realmente lo entiedas.           |
| [Curso intensivo de Kubernetes para principiantes](https://youtu.be/s_o8dwzRlu4)                                         | Tutorial práctico de Kubernetes                                                                                                            | Aprendé Kubernetes en 1 hora - Curso de Kubernetes para principiantes |
| [Tutorial completo de monitoreo con Prometheus](https://youtube.com/playlist?list=PLy7NrYWoggjxCF3av5JKwyG7FFF9eLeL4)    | Tutorial completo de monitoreo con Prometheus                                                                                              |

## Projectos

| Título                                                                                                  | Recursos                                                                                                                                                                                            |
| :------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [El viaje DevOps usando Azure DevOps](https://github.com/thomast1906/DevOps-Journey-Using-Azure-DevOps) | En este tutorial/laboratorio vas a hacer un viaje por DevOps usando Azure DevOps. Dese configurar tu pipeline hasta desplegar una aplicación en tu Azure Kubernetes cluster!                        |
| [DevOps the Hardway - Azure](https://github.com/thomast1906/DevOps-The-Hard-Way-Azure)                  | Este tutorial contiene una solución completa y real para configurar un entorno que usa las tecnologías y prácticas DevOps para desplegar aplicaciones y servicios/infraestrcutura en la nube Azure. |
| [DevOps the Hardway - AWS](https://github.com/AdminTurnedDevOps/DevOps-The-Hard-Way-AWS)                | Este tutorial contiene una solución completa y real para configurar un entorno que usa las tecnologías y prácticas DevOps para desplegar aplicaciones y servicios/infraestrcutura en la nube AWS.   |

## Cosas que deberias estar familiarizado al final de esta fase

- Tener la capacidad de explicar cada práctica DevOps

  - Por que importa cada una.
  - Qué logra cada una.
  - Herramientas más populares para cada práctica.

- Tener proyectos personales en tu GitHub con al menos 2 proyectos:
  - Tenér un pipeline CI/CD.
  - Tener archivos para IaC para cada proyecto.
  - Haber implementado el monitoreo para cada uno de ellos.
    - Estar seguro de que puedes entender los datos de las métricas y los registros.
  - Si algo sale mal, entender como solucionarlo.

## Certificaciones que te puede interesar mirar

- [Certificación AWS Certified DevOps Engineer - Professional](https://aws.amazon.com/certification/certified-devops-engineer-professional/?ch=sec&sec=rmg&d=1)
- [Microsoft Certified: DevOps Engineer Expert](https://docs.microsoft.com/en-us/learn/certifications/devops-engineer/)
- [GCP Professional Cloud DevOps Engineer](https://cloud.google.com/certification/cloud-devops-engineer)
