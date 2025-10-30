# Tema 4: Acceso Remoto Seguro

En el tema anterior aprendiste los fundamentos de redes en la nube, incluyendo las VPCs, subredes y el flujo del tráfico. Ahora, el enfoque está en comprender los mecanismos de acceso remoto seguro que protegen los recursos en la nube contra accesos no autorizados.

- **Estudia**

  - Gestión de acceso basada en sesiones: Uso de servicios nativos de la nube como [AWS Systems Manager Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html), [Azure Bastion](https://learn.microsoft.com/en-us/azure/bastion/) y [GCP IAP](https://www.youtube.com/watch?v=Vfxf2LdsXfs)

## Pon a prueba tus conocimientos

Una vez que hayas terminado con los recursos proporcionados, revisa este artículo [aquí](https://awstip.com/aws-dont-ssh-into-your-public-bastion-use-ssm-session-manager-instead-a5b527f8db41)  
Después de estudiar, pon a prueba tu comprensión con estas preguntas:

- ¿Cuáles son los diferentes métodos de acceso remoto seguro en entornos de nube?
- ¿Cuáles son las ventajas de usar una herramienta de acceso basada en sesiones (por ejemplo, AWS SSM, Azure Bastion o GCP IAP) en lugar de SSH/RDP directo?

## Tarea práctica

- Configura el acceso basado en sesiones para servidores remotos utilizando AWS SSM, Azure Bastion o GCP IAP.
- Aplica políticas de IAM para hacer cumplir el principio de privilegio mínimo para los usuarios remotos.
