# Tema 3: Infrastructure as Code (IaC)

> ⏱️ **Tiempo estimado:** 3-4 días

Infrastructure as Code (IaC) es una práctica clave de DevOps que te permite administrar y aprovisionar infraestructura usando código, en lugar de procesos manuales (como usar la consola). Esto asegura consistencia, repetibilidad y escalabilidad al manejar recursos cloud.

---

## 📚 Ruta de aprendizaje

### Estudia

- ¿Qué es [Infrastructure as Code](https://www.hashicorp.com/resources/what-is-infrastructure-as-code)?
- Como Terraform es agnóstico a la nube (puedes desplegar en cualquier proveedor), es muy popular. Por eso recomendamos [Terraform](https://developer.hashicorp.com/terraform/intro).
- Aprende lo básico de Terraform:
  - [terraform init](https://developer.hashicorp.com/terraform/cli/commands/init)
  - [terraform plan](https://developer.hashicorp.com/terraform/cli/commands/plan)
  - [terraform apply](https://developer.hashicorp.com/terraform/cli/commands/apply)
  - [terraform destroy](https://developer.hashicorp.com/terraform/cli/commands/destroy)
- Explora providers específicos:
  - [AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
  - [Azure Provider](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)
  - [GCP Provider](https://registry.terraform.io/providers/hashicorp/google/latest/docs)

---

## 🛠️ Tareas hands-on

### Proyecto básico de IaC

1. Instala Terraform:
   - [Install Terraform](https://developer.hashicorp.com/terraform/install)
2. Escribe una configuración Terraform para:
   - Crear una máquina virtual en tu proveedor cloud, y/o
   - Configurar un security group que permita SSH, y/o
   - Desplegar un sitio estático en tu proveedor
3. Aprende cómo desplegarlo:
   - Corre `terraform init` para preparar el directorio
   - Corre `terraform plan` para previsualizar cambios
   - Corre `terraform apply` para crear recursos
5. Verifica los recursos en tu proveedor cloud
6. Destruye los recursos:
   - Corre `terraform destroy` para limpiar

### Reto avanzado (opcional): diseño modular con GitHub Copilot

Usa lo que aprendiste en la Fase 2 y colabora con GitHub Copilot para diseñar una configuración modular de Terraform para una app multi-tier:

1. Organiza infraestructura en módulos reutilizables:
   - VPC: subnets públicas/privadas, routing
   - Capa web: cómputo, load balancing
   - Capa DB: base administrada, backups
   - Seguridad: security groups, IAM roles, cifrado
2. Usa variables para parametrizar
3. Crea outputs para comunicación entre módulos
4. Implementa manejo de estado (backend state)
5. Despliega y verifica
6. Destruye al terminar

---

## 🧪 Pon a prueba tu conocimiento

Usa un asistente de IA con prompts como:

1. ¿Cuáles son los beneficios de Infrastructure as Code?
2. ¿Cómo asegura Terraform idempotencia al administrar recursos?
3. ¿Cuál es el propósito del archivo `terraform state`?
4. ¿Cómo administras datos sensibles como API keys en Terraform?
5. ¿Cuál es la diferencia entre `terraform plan` y `terraform apply`?
6. ¿Qué son los módulos de Terraform y por qué/cómo se usan?
7. ¿Cuáles son buenas prácticas para Terraform?
8. ¿Qué beneficios tiene usar asistentes de código para generar plantillas de IaC?
9. ¿Cómo aseguras calidad y seguridad al usar IaC generado por IA?

## Recursos

- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform Best Practices](https://www.terraform-best-practices.com/)
- [AWS Terraform Example](https://youtu.be/P4A62b1dkJE?si=-Lsed7_wyvbXv0RI)
- [Azure Terraform Example](https://youtu.be/HdMB2YCtVr4?si=zRkEGPLy7zhRKPAX)
- [GCP Terraform Example](https://youtu.be/VCayKl82Lt8?si=wWZ5DuabFPaZEDsY)

---

## ✅ Checklist del tema

Antes de seguir, asegúrate de tener:

- [ ] Entendido conceptos de Infrastructure as Code
- [ ] Instalado Terraform
- [ ] Aprendido comandos básicos (init, plan, apply, destroy)
- [ ] Escrito una configuración Terraform para VM o sitio estático
- [ ] Desplegado y verificado recursos en tu proveedor cloud
- [ ] Destruido recursos para limpiar
- [ ] (Opcional) Diseñado infraestructura modular con GitHub Copilot

---
