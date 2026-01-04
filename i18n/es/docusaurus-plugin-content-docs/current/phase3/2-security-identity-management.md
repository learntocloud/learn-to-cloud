# Tema 2: Seguridad y gestión de identidades (IAM)

> ⏱️ **Tiempo estimado:** 2-3 días

Esta sección se enfoca en Identity and Access Management (IAM) para controlar permisos y proteger recursos cloud, además de asegurar instancias con security groups y reglas de firewall.

---

## 📚 Ruta de aprendizaje

- Estudia

  - Conceptos de IAM: users, groups, roles, policies en [AWS](https://medium.com/%40MadhavPrajapati/getting-started-with-aws-iam-users-groups-policies-and-role-fee140ed1e93), [Azure](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal) y [GCP](https://cloud.google.com/iam/docs/overview)

  - [AWS Security Groups](https://www.youtube.com/watch?v=uYDT2SsHImQ) vs [Azure Network Security Groups](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview) vs [GCP Firewall Rules](https://cloud.google.com/firewall/docs/firewalls)

---

## 🧪 Pon a prueba tu conocimiento

Después de estudiar, prueba tu conocimiento con estos prompts:

1. ¿Cuál es la diferencia entre IAM Users, Groups y Roles?
2. ¿Cómo se diferencia RBAC de ABAC en gestión de identidades?
3. ¿Cómo controlan el acceso las policies de IAM?
4. ¿Qué pasos puedes tomar para aplicar el principio de menor privilegio en IAM?
5. ¿Cuál es la diferencia entre reglas inbound y outbound?
6. ¿Cuál es la diferencia entre security groups y firewalls tradicionales?
7. ¿En qué se diferencian los security groups de las network ACLs en networking cloud?
8. ¿Cuál es la diferencia entre reglas stateful y stateless y por qué importa?

---

## 🛠️ Tarea hands-on

- Crea usuarios y grupos con permisos específicos en tu plataforma cloud
- Implementa roles para acceso seguro
- Define y aplica policies para restringir acceso a recursos sensibles
- Crea un security group para una VM
- Define reglas inbound para permitir tráfico específico (por ejemplo, HTTP, SSH, RDP)
- Define reglas outbound para controlar comunicación hacia afuera
- Aplica reglas del security group a una VM y verifica restricciones
- Prueba el flujo de tráfico intentando conectarte desde una IP permitida y una restringida

---

## ✅ Checklist del tema

Antes de seguir, asegúrate de tener:

- [ ] Entendido conceptos de IAM (Users, Groups, Roles, Policies)
- [ ] Aprendido sobre RBAC y el principio de menor privilegio
- [ ] Creado usuarios y grupos con permisos específicos
- [ ] Implementado roles para acceso seguro
- [ ] Creado y configurado security groups
- [ ] Probado reglas inbound y outbound
- [ ] Verificado que las restricciones funcionen correctamente

---
