# Tema 1: Identity and Access Management (IAM)

> ⏱️ **Tiempo estimado:** 3-4 días

Identity and Access Management (IAM) es tu primera línea de defensa para controlar quién puede acceder a tu entorno cloud y qué puede hacer una vez dentro. Antes de asegurar tu Journal API, necesitas entender fundamentos de IAM.

---

## 📚 Ruta de aprendizaje

### Objetivos de aprendizaje

Al final de este tema, vas a entender:

- Conceptos IAM: users, groups, roles y policies
- El principio de menor privilegio y cómo aplicarlo
- Service accounts y workload identity
- Multi-factor authentication (MFA) y cuándo usarlo
- Errores comunes de seguridad en IAM y cómo evitarlos

## Recursos base

### 1. Lee: fundamentos de IAM

Empieza con la documentación de tu proveedor:

**AWS**: [IAM User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html) (lee secciones 1-3)

**Azure**: [Azure RBAC Documentation](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview) (lee overview y conceptos)

**GCP**: [IAM Overview](https://cloud.google.com/iam/docs/overview) (lee conceptos y best practices)

### 2. Mira: IAM en acción

- [AWS IAM Tutorial](https://www.youtube.com/watch?v=Ul6FW4UANGc) (30 min)
- [Azure RBAC Explained](https://www.youtube.com/watch?v=C7hJ3oGHrhM) (25 min)
- [GCP IAM Deep Dive](https://www.youtube.com/watch?v=96HlT4f2AUU) (40 min)

### 3. Aprende: buenas prácticas

- [OWASP Cloud Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cloud_Security_Cheat_Sheet.html)
- [CIS Cloud Security Controls](https://www.cisecurity.org/controls/cloud-security-controls)

## Conceptos clave

### Componentes IAM

- **Users**: personas o apps
- **Groups**: colecciones de users con permisos similares
- **Roles**: set de permisos que se pueden asumir
- **Policies**: documentos que definen permisos

### Principio de menor privilegio

Da solo los permisos mínimos necesarios. Esto reduce el impacto si se comprometen credenciales.

### Service accounts vs user accounts

- **User accounts**: para personas
- **Service accounts**: para apps/servicios

### Autenticación vs autorización

- **Autenticación**: ¿quién eres? (login, MFA)
- **Autorización**: ¿qué puedes hacer? (permisos, policies)

---

## 🧪 Pon a prueba tu conocimiento

Usa un asistente de IA. Prompts de ejemplo:

1. “Evalúame sobre la diferencia entre users, groups y roles en IAM”
2. “Pídeme explicar el principio de menor privilegio con ejemplos”
3. “Pregúntame cuándo usar service accounts vs user accounts”
4. “Evalúame sobre autenticación vs autorización”
5. “Pregúntame errores comunes de seguridad en IAM y cómo prevenirlos”
6. “Evalúame sobre cómo funcionan las policies de IAM”
7. “Pregúntame cuándo y por qué usar MFA”
8. “Explícame workload identity y por qué es mejor que keys de larga duración”

## Recursos adicionales (opcional)

### Práctica hands-on

- [AWS IAM Workshop](https://catalog.workshops.aws/general-immersionday/en-US/basic-modules/30-iam)
- [Azure RBAC Tutorial](https://learn.microsoft.com/en-us/azure/role-based-access-control/tutorial-role-assignments-user-powershell)
- [GCP IAM Tutorial](https://cloud.google.com/iam/docs/quickstart)

### Security labs

- [PwnedLabs - AWS IAM Enumeration](https://pwnedlabs.io/labs/intro-to-aws-iam-enumeration)
- [PwnedLabs - IAM Breaches with CloudTrail](https://pwnedlabs.io/labs/identify-iam-breaches-with-cloudtrail-and-athena)

### Documentación de referencia

- [AWS IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [Azure Security Best Practices](https://learn.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns)
- [GCP Security Best Practices](https://cloud.google.com/security/best-practices)

## Próximos pasos

Cuando te sientas cómodo/a con IAM, sigue al Tema 2. Vas a implementar estos conceptos cuando asegures tu Journal API en el capstone.

---

## ✅ Checklist del tema

Antes de seguir, asegúrate de tener:

- [ ] Entendido conceptos IAM (users, groups, roles, policies)
- [ ] Aprendido el principio de menor privilegio
- [ ] Entendido service accounts vs user accounts
- [ ] Aprendido sobre MFA y cuándo usarlo
- [ ] Revisado documentación IAM del proveedor
- [ ] (Opcional) Completado workshops de IAM

---
