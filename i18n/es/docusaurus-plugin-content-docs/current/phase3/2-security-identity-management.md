# Tema 2: Seguridad y Gestión de Identidad

Esta sección se centra en la **gestión de identidad y acceso (IAM)** para controlar permisos y proteger los recursos en la nube, además de asegurar las instancias mediante **grupos de seguridad y reglas de firewall**.

- **Estudia**
  - Conceptos de IAM: Usuarios, Grupos, Roles y Políticas en [AWS](https://medium.com/%40MadhavPrajapati/getting-started-with-aws-iam-users-groups-policies-and-role-fee140ed1e93), [Azure](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal) y [GCP](https://cloud.google.com/iam/docs/overview)
  - [Grupos de Seguridad en AWS](https://www.youtube.com/watch?v=uYDT2SsHImQ) vs. [Grupos de Seguridad de Red en Azure](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview) vs. [Reglas de Firewall en GCP](https://cloud.google.com/firewall/docs/firewalls)

## Pon a Prueba tus Conocimientos

Después de estudiar, pon a prueba tu conocimiento con estos ejemplos de preguntas para un asistente de IA:

1. ¿Cuál es la diferencia entre Usuarios, Grupos y Roles en IAM?
2. ¿Cómo se diferencia RBAC de ABAC en la gestión de identidad en la nube?
3. ¿Cómo controlan las políticas de IAM el acceso a los recursos en la nube?
4. ¿Qué pasos se pueden seguir para aplicar el Principio de Menor Privilegio en IAM?
5. ¿Cuál es la diferencia entre una regla de entrada y una regla de salida?
6. ¿Cuál es la diferencia entre los grupos de seguridad y los firewalls tradicionales?
7. ¿En qué se diferencian los grupos de seguridad de las ACL de red en la nube?
8. ¿Cuál es la importancia de las reglas con estado (stateful) frente a las sin estado (stateless) en la seguridad en la nube?

## Tareas Prácticas

- Crea usuarios y grupos IAM con permisos específicos en la plataforma de la nube.  
- Implementa roles IAM para una gestión de acceso segura.  
- Define y aplica políticas IAM para restringir el acceso a recursos sensibles.  
- Crea un grupo de seguridad para una instancia de máquina virtual (VM).  
- Define reglas de entrada para permitir tráfico específico (por ejemplo, HTTP, SSH, RDP).  
- Define reglas de salida para controlar la comunicación externa.  
- Aplica las reglas del grupo de seguridad a una VM y verifica las restricciones de acceso.  
- Prueba el flujo de tráfico intentando conectarte desde una dirección IP permitida y otra restringida.  
