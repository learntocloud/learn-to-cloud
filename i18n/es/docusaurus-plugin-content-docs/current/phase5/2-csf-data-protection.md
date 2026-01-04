# Tema 2: Protección de datos y manejo de secretos

> ⏱️ **Tiempo estimado:** 2-3 días

Los datos suelen ser el activo más valioso de tu entorno cloud. Antes de asegurar los datos de tu Journal API, necesitas entender cifrado, key management y fundamentos de secrets management.

---

## 📚 Ruta de aprendizaje

### Objetivos de aprendizaje

Al final de este tema, vas a entender:

- Cifrado en reposo vs cifrado en tránsito
- Cifrado simétrico vs asimétrico
- Buenas prácticas de key management
- Secrets management y por qué importa
- Clasificación de datos y niveles de sensibilidad
- Errores comunes de seguridad de datos y cómo evitarlos

## Recursos base

### 1. Lee: fundamentos de cifrado

- [Encryption at Rest vs In Transit](https://cloud.google.com/security/encryption) (Google Cloud)
- [AWS KMS Concepts](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html)
- [Azure Key Vault Overview](https://learn.microsoft.com/en-us/azure/key-vault/general/overview)

### 2. Mira: protección de datos en cloud

- [Encryption in the Cloud Explained](https://www.youtube.com/watch?v=plv7EnY5QSo) (20 min)
- [AWS KMS Deep Dive](https://www.youtube.com/watch?v=8Z0wsE2HoSo) (45 min)
- [Secrets Management Best Practices](https://www.youtube.com/watch?v=pK1h7Leh_yI) (30 min)

### 3. Aprende: buenas prácticas

- [OWASP Top 10 for APIs](https://owasp.org/API-Security/editions/2023/en/0x11-t10/) (enfócate en data exposure)
- [NIST Cybersecurity Framework - Protect](https://www.nist.gov/cyberframework/protect)

## Conceptos clave

### Tipos de cifrado

**Cifrado en reposo (at rest)**:

- Protege data almacenada (bases, filesystems, object storage)
- Usualmente cifrado simétrico
- En muchos casos el proveedor lo maneja automáticamente

**Cifrado en tránsito (in transit)**:

- Protege data en movimiento (API calls, conexiones a DB)
- Usa TLS/SSL
- Es esencial para cualquier app web

### Key management

**Customer-managed keys vs provider-managed keys**:

- **Provider-managed**: el proveedor maneja operaciones de keys (más simple)
- **Customer-managed**: tú controlas rotación, políticas de acceso (más control)

**Rotación de keys**:

- Cambiar keys regularmente para limitar exposición
- Se puede automatizar
- Es crítico para seguridad a largo plazo

### Secrets management

**Qué son secretos**:

- Passwords de DB
- API keys
- Certificados
- OAuth tokens
- Cualquier config sensible

**Por qué importa**:

- Evita hardcodear credenciales en código
- Permite rotación automática
- Da auditoría de accesos
- Centraliza configuración sensible

### Clasificación de datos

- **Público**: sin riesgo si se filtra
- **Interno**: bajo riesgo
- **Confidencial**: riesgo moderado
- **Restringido**: riesgo alto

---

## 🧪 Pon a prueba tu conocimiento

Prompts de ejemplo:

1. “Evalúame sobre cifrado en reposo vs en tránsito”
2. “Pídeme explicar cifrado simétrico vs asimétrico con ejemplos”
3. “Pregúntame cuándo usar customer-managed vs provider-managed keys”
4. “Evalúame sobre buenas prácticas de secrets management”
5. “Pregúntame sobre clasificación de datos y cómo aplicarla”
6. “Evalúame sobre rotación de keys y por qué importa”
7. “Pregúntame errores comunes de seguridad de datos en cloud”
8. “Explícame hashing vs encryption”

## Recursos adicionales (opcional)

### Documentación del proveedor

- [AWS Encryption SDK](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/)
- [Azure Information Protection](https://learn.microsoft.com/en-us/azure/information-protection/)
- [Google Cloud DLP](https://cloud.google.com/dlp/docs)

### Servicios/herramientas

- [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/)
- [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview)
- [Google Secret Manager](https://cloud.google.com/secret-manager/docs)
- [HashiCorp Vault](https://www.vaultproject.io/)

### Práctica

- [CryptoHack](https://cryptohack.org/)
- [Over The Wire - Krypton](https://overthewire.org/wargames/krypton/)

## Próximos pasos

Cuando te sientas cómodo/a con protección de datos, sigue al Tema 3.

---

## ✅ Checklist del tema

Antes de seguir, asegúrate de tener:

- [ ] Entendido cifrado en reposo vs en tránsito
- [ ] Aprendido cifrado simétrico vs asimétrico
- [ ] Entendido buenas prácticas de key management
- [ ] Aprendido fundamentos de secrets management
- [ ] Entendido niveles de clasificación de datos
- [ ] Revisado documentación de cifrado del proveedor

---
