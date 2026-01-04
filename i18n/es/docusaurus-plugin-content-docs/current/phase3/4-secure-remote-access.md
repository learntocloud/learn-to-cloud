# Tema 4: Acceso remoto seguro

> ⏱️ **Tiempo estimado:** 1-2 días

En el tema anterior aprendiste fundamentos de networking cloud, incluyendo VPC/VNet, subnets y flujo de tráfico. Ahora el enfoque es entender mecanismos de acceso remoto seguro que protegen recursos cloud contra accesos no autorizados.

---

## 📚 Ruta de aprendizaje

- Estudia

  - Acceso basado en sesiones: servicios nativos como [AWS Systems Manager Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html), [Azure Bastion](https://learn.microsoft.com/en-us/azure/bastion/) y [GCP IAP](https://www.youtube.com/watch?v=Vfxf2LdsXfs)

---

## 🧪 Pon a prueba tu conocimiento

Cuando termines los recursos, revisa esto: https://awstip.com/aws-dont-ssh-into-your-public-bastion-use-ssm-session-manager-instead-a5b527f8db41

Después de estudiar, prueba tu entendimiento con estos prompts:

- ¿Cuáles son los métodos de acceso remoto seguro en entornos cloud?
- ¿Qué ventajas tiene usar herramientas de acceso por sesión (AWS SSM, Azure Bastion o GCP IAP) en lugar de SSH/RDP directo?

---

## 🛠️ Tarea hands-on

- Configura acceso por sesión para servidores remotos usando AWS SSM, Azure Bastion o GCP IAP
- Aplica policies de IAM para reforzar el principio de menor privilegio para usuarios remotos

---

## ✅ Checklist del tema

Antes de seguir, asegúrate de tener:

- [ ] Entendido conceptos de acceso por sesión
- [ ] Aprendido sobre AWS SSM, Azure Bastion y GCP IAP
- [ ] Entendido los beneficios de seguridad frente a SSH/RDP directo
- [ ] Configurado acceso por sesión en tu proveedor cloud
- [ ] Aplicado policies de menor privilegio para acceso remoto

---
