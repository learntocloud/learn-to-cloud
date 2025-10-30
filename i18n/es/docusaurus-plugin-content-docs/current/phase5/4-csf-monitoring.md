# Tema 4: Monitoreo de Seguridad

El monitoreo de seguridad es tu sistema de alerta temprana para detectar amenazas y comprender lo que sucede en tu entorno en la nube. Antes de implementar el monitoreo para tu API de Diario, necesitas comprender los fundamentos del registro, las alertas y el monitoreo.

## Objetivos de Aprendizaje

Al final de este tema, comprenderás:

- Servicios de registro en la nube y qué eventos monitorear  
- Conceptos de Gestión de Información y Eventos de Seguridad (SIEM)  
- Cómo crear alertas efectivas que minimicen falsos positivos  
- Métricas clave de seguridad que debes rastrear  
- Técnicas de análisis de registros y detección de amenazas  

## Recursos Principales de Aprendizaje

### 1. Leer: Fundamentos del Monitoreo en la Nube

Comienza con la documentación de monitoreo de tu proveedor de nube:

**AWS**: [Guía del Usuario de CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/) y [Guía del Usuario de CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/)  
**Azure**: [Descripción General de Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/overview) y [Registro de Actividad](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/activity-log)  
**GCP**: [Cloud Logging](https://cloud.google.com/logging/docs) y [Cloud Monitoring](https://cloud.google.com/monitoring/docs)  

### 2. Ver: Monitoreo de Seguridad en la Práctica

- [Monitoreo de Seguridad en AWS](https://www.youtube.com/watch?v=VhEhcWp-m8s) (35 minutos)  
- [Descripción General de Azure Sentinel](https://www.youtube.com/watch?v=hwahlJy9Ibw) (25 minutos)  
- [Fundamentos de SIEM](https://www.youtube.com/watch?v=G8PFCd2OhJ8) (40 minutos)  

### 3. Aprender: Mejores Prácticas de Monitoreo de Seguridad

- [Guía del NIST para el Manejo de Incidentes de Seguridad Informática](https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final)  
- [Guía de Monitoreo de Seguridad de SANS](https://www.sans.org/white-papers/35066/)  

## Conceptos Clave a Dominar

### Fuentes de Registro Esenciales

- **Registros de Autenticación**: Quién inicia sesión, cuándo y desde dónde  
- **Registros de Llamadas a API**: Qué acciones se realizan sobre tus recursos  
- **Registros de Red**: Patrones de tráfico e intrusiones potenciales  
- **Registros de Aplicación**: Eventos relevantes de seguridad de tu aplicación  
- **Registros de Infraestructura**: Cambios en tus recursos en la nube  

### Métricas de Seguridad a Rastrear

- Intentos fallidos de autenticación  
- Patrones inusuales de llamadas a API  
- Anomalías en el tráfico de red  
- Cambios en la configuración de recursos  
- Patrones de acceso a datos  

### Conceptos de SIEM

**Gestión de Información y Eventos de Seguridad (SIEM):**

- **Recolectar**: Reunir registros de múltiples fuentes  
- **Correlacionar**: Encontrar patrones entre diferentes fuentes de registro  
- **Alertar**: Notificar cuando se detectan patrones sospechosos  
- **Investigar**: Proporcionar herramientas para analizar eventos de seguridad  

### Principios de Diseño de Alertas

- **Alta Relación Señal-Ruido**: Las alertas deben indicar problemas reales  
- **Accionables**: Cada alerta debe tener un procedimiento de respuesta claro  
- **Escalamiento**: Diferentes niveles de severidad con tiempos de respuesta adecuados  
- **Contexto**: Proporcionar suficiente información para entender el problema  

## Prueba tu Conocimiento

Usa un asistente de IA para evaluar tu comprensión. Aquí algunos ejemplos de indicaciones:

1. "Hazme un quiz sobre los diferentes tipos de registros que debo monitorear para seguridad"  
2. "Pregúntame sobre los conceptos de SIEM y cómo funcionan juntos"  
3. "Ponme a prueba sobre cómo crear alertas de seguridad efectivas"  
4. "Hazme un quiz sobre las métricas clave de seguridad en aplicaciones en la nube"  
5. "Pregúntame sobre la diferencia entre registro y monitoreo"  
6. "Evalúa mi comprensión sobre correlación y análisis de registros"  
7. "Hazme un quiz sobre errores comunes en el monitoreo de seguridad"  
8. "Pregúntame sobre los flujos de trabajo de respuesta a incidentes en eventos de seguridad"  

## Próximos Pasos

Una vez que comprendas los conceptos de monitoreo de seguridad, avanza al Tema 5.
