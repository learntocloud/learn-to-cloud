# Tema 3: Infraestructura como Código (IaC)

Infraestructura como Código (IaC) es una práctica clave de DevOps que permite administrar y aprovisionar la infraestructura utilizando código, en lugar de procesos manuales, como el uso de la consola. Esto garantiza consistencia, repetibilidad y escalabilidad en la gestión de recursos en la nube.

## Estudio

- ¿Qué es la [Infraestructura como Código?](https://www.hashicorp.com/resources/what-is-infrastructure-as-code)
- Dado que **Terraform** es independiente de la nube (lo que significa que puedes desplegar recursos en cualquier proveedor de nube), es bastante popular. Por lo tanto, te recomendamos [Terraform](https://developer.hashicorp.com/terraform/intro).
- Aprende los conceptos básicos de Terraform:
  - [Terraform init](https://developer.hashicorp.com/terraform/cli/commands/init)
  - [Terraform plan](https://developer.hashicorp.com/terraform/cli/commands/plan)
  - [Terraform apply](https://developer.hashicorp.com/terraform/cli/commands/apply)
  - [Terraform destroy](https://developer.hashicorp.com/terraform/cli/commands/destroy)
- Explora los proveedores de Terraform específicos de cada nube:
  - [Proveedor de AWS](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
  - [Proveedor de Azure](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)
  - [Proveedor de GCP](https://registry.terraform.io/providers/hashicorp/google/latest/docs)

## Tareas Prácticas

### Proyecto Básico de IaC

1. Instala Terraform en tu sistema:
   - [Instalar Terraform](https://developer.hashicorp.com/terraform/install)
2. Escribe un archivo de configuración de Terraform para:
   - Crear una máquina virtual en tu plataforma en la nube preferida.
   - Configurar un grupo de seguridad para permitir el acceso SSH.
   - O desplegar un sitio estático en el proveedor de nube de tu elección.
3. Aprende cómo puedes desplegarlo usando Terraform:
   - Ejecuta `terraform init` para configurar el directorio de trabajo.
   - Ejecuta `terraform plan` para previsualizar los cambios.
   - Ejecuta `terraform apply` para crear los recursos.
5. Verifica los recursos en tu plataforma en la nube.
6. Destruye los recursos:
   - Ejecuta `terraform destroy` para limpiar.

### Proyecto Adicional

- Utiliza Terraform para desplegar una aplicación de múltiples niveles:
  - Crea una VPC con subredes públicas y privadas.
  - Despliega un servidor web en la subred pública y una base de datos en la subred privada.
  - Configura grupos de seguridad para permitir la comunicación entre el servidor web y la base de datos.
  - Configura variables dentro de tu configuración de Terraform.
  - Utiliza un *backend* para la gestión del archivo de estado.

## Pon a Prueba tus Conocimientos

Utiliza un asistente de IA para poner a prueba tu comprensión de los conceptos de IaC. Aquí tienes algunas preguntas de ejemplo:

1. ¿Cuáles son los beneficios de usar Infraestructura como Código?
2. ¿Cómo asegura Terraform la idempotencia en la gestión de recursos?
3. ¿Cuál es el propósito del archivo `terraform state`?
4. ¿Cómo gestionas datos sensibles como claves API en Terraform?
5. ¿Cuál es la diferencia entre `terraform plan` y `terraform apply`?
6. ¿Qué son los módulos de Terraform y por qué/cómo deberías usarlos?
7. ¿Cuáles son las mejores prácticas para Terraform?

## Recursos

- [Documentación de Terraform](https://developer.hashicorp.com/terraform/docs)
- [Mejores Prácticas de Terraform](https://www.terraform-best-practices.com/)
- [Ejemplo de AWS con Terraform](https://youtu.be/P4A62b1dkJE?si=-Lsed7_wyvbXv0RI)
- [Ejemplo de Azure con Terraform](https://youtu.be/HdMB2YCtVr4?si=zRkEGPLy7zhRKPAX)
- [Ejemplo de GCP con Terraform](https://youtu.be/VCayKl82Lt8?si=wWZ5DuabFPaZEDsY)