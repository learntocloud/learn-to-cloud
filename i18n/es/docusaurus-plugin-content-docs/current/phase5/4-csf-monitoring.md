# Tema 4: Monitoreo de seguridad

> ⏱️ **Tiempo estimado:** 2-3 días

El monitoreo de seguridad es tu sistema de alerta temprana para detectar amenazas y entender qué está pasando en tu entorno cloud. Antes de implementar monitoreo para tu Journal API, necesitas entender fundamentos de logging, alerting y monitoreo.

---

## 📚 Ruta de aprendizaje

### Objetivos de aprendizaje

Al final de este tema, vas a entender:

- Servicios de logging cloud y qué eventos monitorear
- Conceptos de SIEM (Security Information and Event Management)
- Cómo crear alertas efectivas con pocos falsos positivos
- Métricas de seguridad clave
- Técnicas de análisis de logs y detección

## Recursos base

### 1. Lee: fundamentos de monitoreo

Empieza con la documentación de tu proveedor:

**AWS**: [CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/) y [CloudTrail User Guide](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/)

**Azure**: [Azure Monitor Overview](https://learn.microsoft.com/en-us/azure/azure-monitor/overview) y [Activity Log](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/activity-log)

**GCP**: [Cloud Logging](https://cloud.google.com/logging/docs) y [Cloud Monitoring](https://cloud.google.com/monitoring/docs)

### 2. Mira: monitoreo en práctica

- [AWS Security Monitoring](https://www.youtube.com/watch?v=VhEhcWp-m8s) (35 min)
- [Azure Sentinel Overview](https://www.youtube.com/watch?v=hwahlJy9Ibw) (25 min)
- [SIEM Fundamentals](https://www.youtube.com/watch?v=G8PFCd2OhJ8) (40 min)

### 3. Aprende: buenas prácticas

- [NIST Incident Handling Guide](https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final)
- [SANS Security Monitoring Guide](https://www.sans.org/white-papers/35066/)

## Conceptos clave

### Fuentes de logs esenciales

- **Auth logs**: quién entra, cuándo y desde dónde
- **API call logs**: acciones sobre recursos
- **Network logs**: patrones de tráfico
- **App logs**: eventos relevantes de seguridad
- **Infra logs**: cambios a recursos cloud

### Métricas de seguridad

- Intentos fallidos de login
- Patrones inusuales de API calls
- Anomalías de tráfico
- Cambios de configuración
- Patrones de acceso a datos

### Conceptos SIEM

- **Collect**: recolectar logs
- **Correlate**: correlacionar patrones
- **Alert**: alertar
- **Investigate**: investigar

### Principios de diseño de alertas

- Alto signal-to-noise
- Accionables (tienen procedimiento claro)
- Escalación por severidad
- Contexto suficiente

---

## 🧪 Pon a prueba tu conocimiento

Prompts de ejemplo:

1. “Evalúame sobre tipos de logs que debo monitorear por seguridad”
2. “Pregúntame sobre SIEM y cómo trabajan sus partes”
3. “Evalúame sobre cómo diseñar alertas efectivas”
4. “Pregúntame métricas clave de seguridad en apps cloud”
5. “Explícame logging vs monitoring”
6. “Evalúame sobre correlación y análisis de logs”
7. “Pregúntame errores comunes en monitoreo de seguridad”
8. “Pregúntame sobre flujos de incident response para eventos”

## Próximos pasos

Cuando entiendas monitoreo de seguridad, sigue al Tema 5.

---

## ✅ Checklist del tema

Antes de seguir, asegúrate de tener:

- [ ] Entendido distintos tipos de logs de seguridad
- [ ] Aprendido conceptos SIEM
- [ ] Entendido principios de diseño de alertas
- [ ] Aprendido métricas clave de seguridad
- [ ] Revisado documentación de monitoreo del proveedor

---
