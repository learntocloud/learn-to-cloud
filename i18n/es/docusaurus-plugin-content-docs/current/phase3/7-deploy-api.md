# Tema 7: Capstone de despliegue en cloud

> ⏱️ **Tiempo estimado:** 1 semana

Despliega tu Journal API del capstone de la Fase 2 a una arquitectura cloud segura de 2 capas (2-tier). Este capstone te reta a investigar, diseñar e implementar un entorno “production-ready” con networking y seguridad bien configurados.

---

## 📚 Ruta de aprendizaje

### Resumen del reto

Crea una arquitectura segura de 2 capas:

- **Capa 1**: servidor de aplicación FastAPI (accesible desde internet)
- **Capa 2**: servidor de base de datos PostgreSQL (privado y seguro)

## Objetivos de aprendizaje

- Diseñar networking cloud seguro con subnets públicas/privadas
- Implementar security groups con el principio de menor privilegio
- Configurar acceso remoto a base de datos de forma segura
- Desplegar una aplicación multi-tier lista para producción

## Prerrequisitos

- Completaste el capstone de la Fase 2 (Journal API con análisis de IA funcionando local)
- Cuenta en un proveedor cloud con permisos suficientes
- SSH key pair para acceso a servidores
- API key de LLM de tu proveedor (OpenAI, Anthropic, Azure OpenAI, AWS Bedrock o GCP Vertex AI)

## Tu misión

### 1. Diseña tu arquitectura

Investiga y planea tu infraestructura:

- ¿Cómo vas a separar recursos públicos y privados?
- ¿Qué componentes de red necesitas?
- ¿Cómo vas a asegurar la comunicación entre capas?

### 2. Despliega el servidor de la API

Configura el servidor de aplicación en la capa pública:

- Elige recursos de cómputo apropiados
- Despliega tu aplicación Journal API
- Configura acceso seguro y networking

### 3. Despliega el servidor de base de datos

Configura PostgreSQL en la capa privada:

- Asegúrate de que no sea accesible directamente desde internet
- Configúralo para aceptar conexiones desde el servidor de la API
- Implementa medidas de seguridad apropiadas

### 4. Prueba tu despliegue

Valida tu arquitectura:

- Todos los endpoints de la API funcionan
- La base de datos está protegida correctamente
- Los datos persisten entre reinicios

## Criterios de éxito

Tu despliegue está logrado cuando puedes demostrar:

- ✅ La API es accesible desde internet
- ✅ La base de datos solo es accesible desde el servidor de la API (no desde internet)
- ✅ Todas las operaciones CRUD funcionan vía endpoints
- ✅ El endpoint de análisis con IA devuelve sentimiento y resumen
- ✅ La API key del LLM está guardada de forma segura (variable de entorno, no en el código)
- ✅ Los datos persisten entre reinicios
- ✅ La seguridad sigue el principio de menor privilegio

## Documenta tu aprendizaje

Crea un writeup técnico cubriendo:

- Tu diseño de arquitectura y tu razonamiento
- Decisiones de seguridad y trade-offs
- Retos que encontraste y cómo los resolviste
- Aprendizajes clave sobre despliegue en cloud

¡Comparte tu progreso en el canal de cloud phase en Discord!

## Recuerda

Esto se trata de entender patrones cloud, no de seguir una receta. Investiga, experimenta y aprende en el camino. Cada proveedor tiene herramientas distintas: encuentra lo que mejor funcione para tu plataforma.

---

## ✅ Checklist del tema

Antes de seguir, asegúrate de tener:

- [ ] Diseñado una arquitectura segura de 2 capas
- [ ] Desplegado el servidor de la API en la capa pública
- [ ] Desplegado PostgreSQL en la capa privada
- [ ] Verificado que la base solo sea accesible desde la API
- [ ] Verificado que CRUD funcione vía API
- [ ] Verificado que el endpoint de análisis con IA devuelva resultados
- [ ] Guardado la API key del LLM de forma segura
- [ ] Verificado que los datos persistan entre reinicios
- [ ] Verificado que la seguridad siga menor privilegio
- [ ] Creado documentación técnica del despliegue

---
