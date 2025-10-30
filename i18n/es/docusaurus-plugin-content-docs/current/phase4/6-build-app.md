# Tema 6: Proyecto Final de DevOps

Ahora que has aprendido los fundamentos de DevOps, es momento de aplicar estas prácticas al proyecto **Journal API** que creaste en la Fase 2 y desplegaste en la Fase 3. En este proyecto final, vas a **contenedizar la aplicación**, **automatizar su despliegue**, **gestionar la infraestructura como código**, **configurar monitoreo y observabilidad**, y **orquestar contenedores con Kubernetes**, demostrando tus habilidades completas en DevOps.

---

## Pasos del Proyecto Final

### 1. **Contenerizar la Aplicación**

- Escribe un `Dockerfile` para tu aplicación FastAPI.  
- Construye y ejecuta el contenedor localmente para verificar que funcione.  
- Sube tu imagen a un registro de contenedores (DockerHub, AWS ECR, Azure ACR o GCP GCR).  

### 2. **Infraestructura como Código**

- Usa Terraform (u otra herramienta de IaC) para definir y aprovisionar:
  - Recursos de cómputo (servicios de contenedores)  
  - Redes (VPC, subredes, grupos de seguridad)  
  - Base de datos (PostgreSQL, como en fases anteriores)  
- Almacena tu código de IaC en control de versiones.  

### 3. **Canalización CI/CD**

- Configura una canalización CI/CD (por ejemplo, GitHub Actions, Azure DevOps o Jenkins) para:
  - Construir y probar la aplicación en cada commit.  
  - Construir y subir la imagen Docker.  
  - Desplegar la aplicación automáticamente en tu entorno en la nube.  

### 4. **Orquestación de Contenedores con Kubernetes**

- Escribe los manifiestos de Kubernetes (`Deployment`, `Service`, `ConfigMap`/`Secret`) para tu aplicación y base de datos.  
- Despliega la aplicación y la base de datos en un clúster local (Minikube/Kind) o en un servicio gestionado (EKS, AKS, GKE).  
- Expón tu aplicación FastAPI mediante un `Service` de Kubernetes (NodePort o LoadBalancer).  
- (Opcional) Usa Helm para empaquetar y desplegar tu aplicación.  

### 5. **Monitoreo y Observabilidad**

- Despliega Prometheus y Grafana (usando Docker o manifiestos de Kubernetes).  
- Instrumenta tu aplicación FastAPI para exponer métricas (por ejemplo, usando `prometheus_client` para Python).  
- Configura Prometheus para recopilar métricas del endpoint de tu aplicación.  
- Crea un panel en Grafana para visualizar métricas clave (como número de solicitudes, tasa de errores y latencia).  

### 6. **Documentación**

- Documenta tu configuración y proceso de despliegue en un archivo `README.md`.  
- Incluye diagramas o capturas de pantalla de tu canalización CI/CD, configuración de Kubernetes y paneles de monitoreo.  

---

## Ejemplo de Estructura del Proyecto


```
/journal-app
  /infra                # Terraform or IaC configs
  /k8s                  # Kubernetes manifests (deployment, service, etc.)
  /app                  # FastAPI app code
  Dockerfile
  .github/workflows/    # CI/CD pipeline configs
  README.md
```


---

## Pruebas y Validación

- Realiza un cambio en el código y súbelo al repositorio; verifica que el pipeline construya, pruebe y despliegue la aplicación.  
- Accede a tu aplicación desplegada y confirma que funcione con la base de datos.  
- Visita Grafana y confirma que puedes ver métricas en tiempo real de tu aplicación.  
- Usa `kubectl` para verificar que la aplicación y la base de datos estén en ejecución en el clúster.  

---

## Lista de Habilidades

- [ ] Dockerfile y contenerización  
- [ ] Infraestructura como Código (Terraform)  
- [ ] Configuración de pipeline CI/CD  
- [ ] Manifiestos y despliegue en Kubernetes  
- [ ] Monitoreo y observabilidad (Prometheus + Grafana)  
- [ ] Documentación  

---

## Próximos Pasos

Una vez completado este proyecto final, habrás demostrado habilidades prácticas en DevOps al llevar una aplicación desde el código hasta producción con **automatización**, **infraestructura como código**, **orquestación de contenedores** y **monitoreo**.  
Esto te proporciona un proyecto sólido para tu portafolio y un excelente tema para entrevistas técnicas.

