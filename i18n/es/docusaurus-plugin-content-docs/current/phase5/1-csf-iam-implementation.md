# Tema 1: Gestión de Identidad y Acceso (IAM)

La **Gestión de Identidad y Acceso (IAM)** es tu primera línea de defensa para controlar quién puede acceder a tu entorno en la nube y qué pueden hacer una vez dentro.  
Antes de asegurar tu **Journal API**, necesitas comprender los fundamentos de IAM.

---

## Objetivos de Aprendizaje

Al finalizar este tema, comprenderás:

- Los conceptos de IAM: usuarios, grupos, roles y políticas  
- El principio de privilegio mínimo y cómo aplicarlo  
- Cuentas de servicio e identidad de cargas de trabajo  
- Autenticación multifactor (MFA) y cuándo usarla  
- Errores comunes de seguridad en IAM y cómo evitarlos  

---

## Recursos Fundamentales de Aprendizaje

### 1. Lectura: Fundamentos de IAM
Comienza con la documentación de IAM de tu proveedor de nube:

- **AWS**: [Guía del Usuario de IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html) — Lee las secciones 1–3  
- **Azure**: [Documentación de Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview) — Lee la introducción y los conceptos  
- **GCP**: [Descripción General de IAM](https://cloud.google.com/iam/docs/overview) — Lee conceptos y mejores prácticas  

### 2. Videos: IAM en Acción
- [Tutorial de AWS IAM](https://www.youtube.com/watch?v=Ul6FW4UANGc) (30 minutos)  
- [Azure RBAC Explicado](https://www.youtube.com/watch?v=C7hJ3oGHrhM) (25 minutos)  
- [Profundización en GCP IAM](https://www.youtube.com/watch?v=96HlT4f2AUU) (40 minutos)  

### 3. Aprende: Mejores Prácticas de Seguridad
Lee estas guías esenciales de seguridad:  
- [Hoja de Trucos de Seguridad en la Nube de OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cloud_Security_Cheat_Sheet.html)  
- [Controles de Seguridad en la Nube del CIS](https://www.cisecurity.org/controls/cloud-security-controls)  

---

## Conceptos Clave para Dominar

### Componentes de IAM
- **Usuarios**: Personas o aplicaciones individuales  
- **Grupos**: Colecciones de usuarios con permisos similares  
- **Roles**: Conjunto de permisos que pueden ser asumidos  
- **Políticas**: Documentos que definen permisos  

### Principio del Privilegio Mínimo
Otorga a los usuarios y servicios solo los permisos mínimos necesarios para realizar su trabajo.  
Esto reduce el impacto si las credenciales se ven comprometidas.

### Cuentas de Servicio vs Cuentas de Usuario
- **Cuentas de usuario**: Para personas que necesitan acceder a los recursos  
- **Cuentas de servicio**: Para aplicaciones y servicios que necesitan acceder a los recursos  

### Autenticación vs Autorización
- **Autenticación**: ¿Quién eres tú? (inicio de sesión, MFA)  
- **Autorización**: ¿Qué puedes hacer? (permisos, políticas)  

---

## Pon a Prueba tus Conocimientos

Usa un asistente de IA para comprobar tu comprensión. Aquí tienes ejemplos de indicaciones:

1. "Hazme un quiz sobre la diferencia entre usuarios, grupos y roles de IAM"  
2. "Pídeme que explique el principio de privilegio mínimo con ejemplos"  
3. "Evalúa mi conocimiento sobre cuándo usar cuentas de servicio frente a cuentas de usuario"  
4. "Hazme un quiz sobre la diferencia entre autenticación y autorización"  
5. "Pregúntame sobre errores comunes de seguridad en IAM y cómo prevenirlos"  
6. "Evalúa mi comprensión de las políticas IAM y cómo funcionan"  
7. "Hazme un quiz sobre cuándo y por qué usar autenticación multifactor"  
8. "Pregúntame sobre identidad de carga de trabajo y por qué es mejor que las claves de larga duración"  

---

## Recursos Adicionales (Opcional)

### Práctica Práctica
- [Taller de AWS IAM](https://catalog.workshops.aws/general-immersionday/en-US/basic-modules/30-iam)  
- [Tutorial de Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/tutorial-role-assignments-user-powershell)  
- [Tutorial de GCP IAM](https://cloud.google.com/iam/docs/quickstart)  

### Laboratorios de Seguridad
- [PwnedLabs - Enumeración de AWS IAM](https://pwnedlabs.io/labs/intro-to-aws-iam-enumeration)  
- [PwnedLabs - Brechas IAM con CloudTrail](https://pwnedlabs.io/labs/identify-iam-breaches-with-cloudtrail-and-athena)  

### Documentación de Referencia
- [Mejores Prácticas de AWS IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)  
- [Mejores Prácticas de Seguridad en Azure](https://learn.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns)  
- [Mejores Prácticas de Seguridad en GCP](https://cloud.google.com/security/best-practices)  

---

## Próximos Pasos

Una vez que te sientas seguro con los conceptos de IAM, avanza al **Tema 2**.  
Aplicarás todo este conocimiento cuando asegures tu **Journal API** en el proyecto final.
