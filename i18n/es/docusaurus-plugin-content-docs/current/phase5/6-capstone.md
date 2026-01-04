# Tema 6: Asegura tu Journal API - Capstone

> ⏱️ **Tiempo estimado:** 1 semana

Ahora sí toca implementar todo lo que aprendiste. Este capstone va a transformar tu Journal API de una app básica a un sistema seguro, listo para producción y con controles de nivel enterprise. Vas a aplicar los conceptos de los Temas 1-5 en una implementación real.

---

## 📚 Ruta de aprendizaje

### Resumen del proyecto

Vas a implementar seguridad integral para tu Journal API construyendo cinco capas de protección:

1. **Seguridad IAM**: identidad y controles de acceso (Tema 1)
2. **Protección de datos**: cifrado y manejo de secretos (Tema 2)
3. **Seguridad de red**: conectividad segura y aislamiento (Tema 3)
4. **Monitoreo de seguridad**: detección y alertas (Tema 4)
5. **Incident response**: respuesta automatizada (Tema 5)

**¿No tienes la Journal API?** Puedes usar cualquier app web que tengas (Flask, Node.js, WordPress o incluso un sitio estático). Los principios aplican igual.

## Qué vas a construir

Al final, tu aplicación tendrá:

- **Cero secretos hardcodeados**: credenciales administradas de forma segura
- **Cifrado en todo**: data protegida en reposo y en tránsito
- **Aislamiento de red**: componentes segmentados
- **Monitoreo en tiempo real**: eventos detectados en minutos
- **Respuestas automatizadas**: amenazas comunes manejadas automáticamente
- **Audit trail completo**: todo logueado
- **Playbooks**: procedimientos claros

Esto representa el estándar esperado en entornos de producción.

## Setup antes de empezar

Antes de arrancar, asegúrate de tener:

1. **Tu app corriendo**: Journal API desplegada y accesible
2. **Acceso administrativo**: permisos completos en tu cuenta cloud
3. **Control de costos**: billing alerts (objetivo: menos de $50/mes)
4. **Plantilla de documentación**: carpetas para documentar

## Parte 1: Seguridad base (IAM y red)

### 1.1 Implementa IAM

**Diseña tu estrategia:**

- Crea una service account para tu Journal API
- Crea roles con menor privilegio
- Habilita MFA para tu cuenta admin
- Crea una matriz de acceso (quién accede a qué)

**Checklist de implementación:**

- [ ] Service account de Journal API creada con permisos mínimos
- [ ] Role de acceso a DB separado del role de API
- [ ] Service account de monitoreo para herramientas de seguridad
- [ ] Acceso administrativo requiere MFA
- [ ] Accesos documentados en la matriz

**Prueba IAM:**

- Intenta acceder con la service account incorrecta (debería fallar)
- Verifica que la app funcione con permisos restringidos
- Prueba el requisito de MFA

### 1.2 Asegura la arquitectura de red

**Diseña seguridad de red:**

- Crea VPC con subnets públicas y privadas
- Pon API en subnet privada, load balancer en pública
- Configura security groups con acceso mínimo
- Configura endpoints privados para conexión a DB

**Checklist de implementación:**

- [ ] VPC creada con CIDR correcto
- [ ] Subnet pública solo para load balancer
- [ ] Subnet privada para app y DB
- [ ] Security groups con puertos mínimos necesarios
- [ ] DB accesible solo desde subnet de la app
- [ ] Internet vía NAT Gateway (si aplica)

**Prueba la red:**

- Verifica que la API no sea accesible directamente desde internet
- Confirma que la DB no sea alcanzable desde subnet pública
- Verifica que la app siga funcionando

## Parte 2: Protección de datos y monitoreo

### 2.1 Implementa protección de datos

**Asegura tus datos:**

- Cifrado en reposo para DB y storage
- TLS/SSL para comunicación
- Mueve secretos a un servicio de secrets management
- Configura backups cifrados automáticos

**Checklist:**

- [ ] Cifrado de DB habilitado
- [ ] Cifrado de storage habilitado
- [ ] TLS configurado (certificado)
- [ ] API keys movidas a secrets manager
- [ ] API key del LLM guardada en secrets manager
- [ ] Passwords de DB en secrets manager
- [ ] Backups diarios configurados
- [ ] Backups cifrados verificados

**Prueba protección de datos:**

- Verifica HTTPS (certificado en navegador)
- Confirma que no hay secretos en código/config
- Prueba que la app funciona leyendo secretos del manager
- Verifica que backups estén cifrados

### 2.2 Despliega monitoreo de seguridad

**Configura monitoreo:**

- Audit logging para servicios
- Dashboard de seguridad
- Alertas para actividades sospechosas
- Agregación/análisis de logs

**Checklist:**

- [ ] CloudTrail/audit logging habilitado
- [ ] Dashboard de seguridad desplegado
- [ ] Alertas de failed login configuradas
- [ ] Alertas por patrones inusuales de API access
- [ ] Monitoreo de acceso a DB
- [ ] Alertas por cambios de security groups
- [ ] Notificaciones por modificaciones de recursos

**Prueba monitoreo:**

- Genera un failed login (alerta debería disparar)
- Genera patrón inusual de API calls
- Modifica un security group (debería notificar)
- Revisa logs y confirma que se capturan

## Parte 3: Seguridad avanzada y respuesta

### 3.1 Implementa detección de amenazas

**Construye detección:**

- Habilita servicio de seguridad del proveedor (GuardDuty/Security Center/etc.)
- Configura behavioral analysis
- Configura threat intelligence feeds
- Crea reglas de detección específicas

**Checklist:**

- [ ] Servicio de threat detection habilitado
- [ ] Baseline de comportamiento normal definido
- [ ] Integración con threat intelligence configurada
- [ ] Reglas custom para patrones de tu app
- [ ] Integración con dashboard

### 3.2 Crea sistema de incident response

**Construye respuesta automatizada:**

- Workflows de respuesta
- Remediación automática para amenazas comunes
- Runbooks para respuesta manual
- Canales de comunicación

**Checklist:**

- [ ] Respuesta automática a credenciales comprometidas
- [ ] Aislamiento automático de actividad sospechosa
- [ ] Workflows de escalación definidos
- [ ] Runbooks por tipo de incidente
- [ ] Plan de comunicación
- [ ] Calendario de pruebas regulares

## Parte 4: Validación y documentación

### 4.1 Pruebas de seguridad

**Auth:**

- Intenta acceso sin credenciales
- Intenta funciones admin sin autorización
- Prueba bypass de MFA

**Red:**

- Intenta conectar a DB desde internet
- Intenta acceder a app servers directamente
- Prueba enforcement de reglas

**Datos:**

- Verifica cifrado en reposo
- Confirma TLS bien configurado
- Prueba integración de secrets management

**Monitoreo:**

- Genera eventos y valida alertas
- Prueba automatización de respuesta
- Valida recolección/análisis de logs

### 4.2 Documentación

**Arquitectura:**

- Diagrama de seguridad
- Topología de red con zonas
- Data flows con puntos de cifrado
- Estructura IAM y accesos

**Operación:**

- Runbooks
- Guía del dashboard
- Procedimientos de backup/recovery
- Gestión de configuración

**Compliance:**

- Matriz de controles
- Evaluación de riesgos y mitigaciones
- Auditoría/logging
- Análisis de costos

## Criterios de éxito

Tu capstone está completo cuando puedes demostrar:

- ✅ **Cero secretos en código**
- ✅ **Aislamiento de red** (DB no accesible desde internet)
- ✅ **Cifrado en todo** (reposo y tránsito)
- ✅ **Monitoreo funcional** (detección < 5 min)
- ✅ **Respuestas automatizadas**
- ✅ **Documentación completa**
- ✅ **Costos controlados** (< $50/mes usando free tiers)
- ✅ **Pruebas validadas**

## Entregables

1. Diagrama de arquitectura de seguridad
2. Guía de implementación
3. Runbooks de incident response
4. Resultados de pruebas
5. Análisis de costos
6. Lecciones aprendidas

## Resultados

Después de este capstone, vas a tener:

- Seguridad lista para producción
- Experiencia hands-on real
- Un proyecto fuerte para tu portafolio
- Skills de detección/response
- Documentación profesional

## Próximos pasos

Este capstone demuestra que puedes implementar seguridad integral en cloud. Ya tienes skills para:

- Asegurar cualquier app cloud con controles enterprise
- Implementar monitoreo en tiempo real
- Crear procedimientos de respuesta que reduzcan impacto

---

## ✅ Checklist del tema

Antes de terminar, asegúrate de tener:

- [ ] Diseñado e implementado IAM con menor privilegio
- [ ] Asegurado la arquitectura de red
- [ ] Habilitado cifrado en reposo y tránsito
- [ ] Movido secretos a un servicio de secrets management
- [ ] Desplegado dashboard de monitoreo
- [ ] Creado alertas de actividades sospechosas
- [ ] Habilitado servicio de detección de amenazas
- [ ] Creado runbooks
- [ ] Probado controles
- [ ] Documentado con diagramas
- [ ] Completado análisis de costos

---
