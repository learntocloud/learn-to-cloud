# Tema 2: Protección de Datos y Gestión de Secretos

Los datos son el activo más valioso en tu entorno en la nube. Antes de asegurar los datos de tu **Journal API**, necesitas comprender los fundamentos del cifrado, la gestión de claves y la gestión de secretos.

---

## Objetivos de Aprendizaje

Al finalizar este tema, comprenderás:

- Cifrado en reposo vs cifrado en tránsito  
- Cifrado simétrico vs asimétrico  
- Mejores prácticas de gestión de claves  
- Gestión de secretos y por qué es importante  
- Clasificación de datos y niveles de sensibilidad  
- Errores comunes en la seguridad de datos y cómo evitarlos  

---

## Recursos Fundamentales de Aprendizaje

### 1. Lectura: Fundamentos del Cifrado
Comienza con estos recursos básicos:

- [Cifrado en Reposo vs en Tránsito](https://cloud.google.com/security/encryption) — Guía de Google Cloud  
- [Conceptos de AWS Key Management Service (KMS)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html)  
- [Descripción General de Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview)  

### 2. Videos: Protección de Datos en la Nube
- [Cifrado en la Nube Explicado](https://www.youtube.com/watch?v=plv7EnY5QSo) (20 minutos)  
- [Profundización en AWS KMS](https://www.youtube.com/watch?v=8Z0wsE2HoSo) (45 minutos)  
- [Mejores Prácticas de Gestión de Secretos](https://www.youtube.com/watch?v=pK1h7Leh_yI) (30 minutos)  

### 3. Aprende: Mejores Prácticas de Seguridad de Datos
- [OWASP Top 10 para APIs](https://owasp.org/API-Security/editions/2023/en/0x11-t10/) — Enfócate en los problemas de exposición de datos  
- [Marco de Ciberseguridad de NIST - Protect](https://www.nist.gov/cyberframework/protect)  

---

## Conceptos Clave para Dominar

### Tipos de Cifrado

**Cifrado en Reposo**:
- Protege los datos almacenados en bases de datos, sistemas de archivos o almacenamiento de objetos  
- Usa cifrado simétrico (la misma clave para cifrar/descifrar)  
- Generalmente gestionado automáticamente por los proveedores de nube  

**Cifrado en Tránsito**:
- Protege los datos en movimiento entre sistemas (llamadas API, conexiones a bases de datos)  
- Usa protocolos TLS/SSL  
- Es esencial para cualquier aplicación web  

---

### Gestión de Claves

**Claves Gestionadas por el Cliente vs Gestionadas por el Proveedor**:
- **Gestionadas por el proveedor**: el proveedor de la nube maneja todas las operaciones de clave (más fácil)  
- **Gestionadas por el cliente**: tú controlas la rotación de claves y las políticas de acceso (más control)  

**Rotación de Claves**:
- Cambiar regularmente las claves de cifrado para limitar la exposición  
- Puede automatizarse mediante servicios de gestión de claves en la nube  
- Es fundamental para la seguridad a largo plazo  

---

### Gestión de Secretos

**Qué Son los Secretos**:
- Contraseñas de bases de datos  
- Claves de API  
- Certificados  
- Tokens OAuth  
- Cualquier dato sensible de configuración  

**Por Qué es Importante la Gestión de Secretos**:
- Evita incrustar credenciales en el código  
- Permite la rotación automática  
- Proporciona registros de auditoría del acceso a secretos  
- Centraliza la configuración sensible  

---

### Clasificación de Datos

| Nivel | Descripción | Riesgo si se divulga |
|-------|--------------|----------------------|
| **Público** | Información sin riesgo (material de marketing) | Bajo |
| **Interno** | Documentación interna | Bajo |
| **Confidencial** | Datos de clientes u operaciones | Moderado |
| **Restringido** | Información de pagos o datos personales | Alto |

---

## Pon a Prueba tus Conocimientos

Usa un asistente de IA para poner a prueba tu comprensión. Ejemplos de indicaciones:

1. "Hazme un quiz sobre la diferencia entre cifrado en reposo y cifrado en tránsito"  
2. "Pídeme que explique el cifrado simétrico vs asimétrico con ejemplos"  
3. "Evalúa mi conocimiento sobre cuándo usar claves gestionadas por el cliente vs el proveedor"  
4. "Hazme un quiz sobre las mejores prácticas de gestión de secretos"  
5. "Pregúntame sobre los niveles de clasificación de datos y cómo aplicarlos"  
6. "Evalúa mi comprensión sobre la rotación de claves y por qué es importante"  
7. "Hazme un quiz sobre errores comunes de seguridad de datos en aplicaciones en la nube"  
8. "Pregúntame sobre la diferencia entre hashing y cifrado"  

---

## Recursos Adicionales (Opcional)

### Documentación de los Proveedores de Nube
- [AWS Encryption SDK](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/)  
- [Protección de Información de Azure](https://learn.microsoft.com/en-us/azure/information-protection/)  
- [Prevención de Pérdida de Datos de Google Cloud (DLP)](https://cloud.google.com/dlp/docs)  

### Herramientas y Servicios de Seguridad
- [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/)  
- [Azure Key Vault](https://docs.aws.amazon.com/secretsmanager/)  
- [Google Secret Manager](https://cloud.google.com/secret-manager/docs)  
- [HashiCorp Vault](https://www.vaultproject.io/) *(opción de código abierto)*  

### Recursos de Práctica
- [CryptoHack](https://cryptohack.org/) — Aprende criptografía a través de desafíos  
- [Over The Wire: Krypton](https://overthewire.org/wargames/krypton/) — Juegos de guerra sobre criptografía  

---

## Próximos Pasos

Una vez que te sientas seguro con los conceptos de **protección de datos**, avanza al **Tema 3**.
