# Tema 6: Capstone de DevOps

> ⏱️ **Tiempo estimado:** 1 semana

Ahora que aprendiste fundamentos de DevOps, es momento de aplicar estas prácticas a la app Journal API que construiste en la Fase 2 y desplegaste en la Fase 3. En este capstone vas a containerizar la app, automatizar despliegue, manejar infraestructura como código, configurar monitoreo/observabilidad y orquestar contenedores con Kubernetes, demostrando skills DevOps de punta a punta.

---

## 📚 Ruta de aprendizaje

### Pasos del capstone

1. **Containeriza la aplicación**

    - Escribe un `Dockerfile` para tu app FastAPI.
    - Construye y corre el contenedor local para verificar.
    - Asegúrate de pasar credenciales del LLM por variables de entorno (no dentro de la imagen).
    - Pushea tu imagen a un container registry (DockerHub, AWS ECR, Azure ACR o GCP GCR).

2. **Infrastructure as Code**

    - Usa Terraform (u otra herramienta IaC) para definir y aprovisionar:
        - Recursos de cómputo (servicios de contenedores)
        - Networking (VPC, subnets, security groups)
        - Base de datos (PostgreSQL, como en fases anteriores)
    - Guarda tu código IaC en control de versiones.

3. **Pipeline CI/CD**

    - Configura un pipeline (GitHub Actions, Azure DevOps o Jenkins) para:
        - Construir y testear en cada commit
        - Construir y pushear imagen Docker
        - Desplegar automáticamente en tu entorno cloud

4. **Orquestación con Kubernetes**

    - Escribe manifiestos (`Deployment`, `Service`, `ConfigMap`/`Secret`) para tu app y base.
    - Guarda tu API key del LLM en un `Secret` y móntalo como variable de entorno.
    - Despliega en un cluster local (Minikube/Kind) o administrado (EKS, AKS, GKE).
    - Expón tu app con un `Service` (NodePort o LoadBalancer).
    - (Opcional) Usa Helm.

5. **Monitoreo y observabilidad**

    - Despliega Prometheus y Grafana (Docker o manifiestos K8s).
    - Instrumenta tu app FastAPI para exponer métricas (por ejemplo, `prometheus_client`).
    - Monitorea llamadas al LLM: latencia, error rate y uso de tokens del endpoint `/analyze`.
    - Configura Prometheus para scrapear el endpoint de métricas.
    - Crea un dashboard en Grafana con request count, error rate, latencia y desempeño del LLM.

6. **Documentación**

    - Documenta el setup y despliegue en un `README.md`.
    - Incluye diagramas o screenshots del pipeline, Kubernetes y dashboards.

---

## Ejemplo de estructura

```
/journal-app
  /infra                # Terraform o configs IaC
  /k8s                  # Manifiestos Kubernetes
  /app                  # Código FastAPI
  Dockerfile
  .github/workflows/    # Configs del pipeline CI/CD
  README.md
```

---

## Testing y validación

- Haz un cambio en código y pushea al repo: verifica que el pipeline construya, testee y despliegue.
- Accede a tu app desplegada y confirma que funcione con la base.
- Entra a Grafana y confirma que ves métricas en vivo.
- Usa `kubectl` para verificar que app y base corren.

---

## Checklist de skills

- [ ] Dockerfile y containerización
- [ ] Infrastructure as Code (Terraform)
- [ ] Configuración de CI/CD
- [ ] Manifiestos y despliegue en Kubernetes
- [ ] Monitoreo y observabilidad (Prometheus + Grafana)
- [ ] Documentación

---

## Próximos pasos

Cuando completes este capstone, habrás demostrado skills DevOps reales llevando una app de código a producción con automatización, infraestructura como código, orquestación y monitoreo. Esto te deja un proyecto fuerte para tu portafolio y para hablar en entrevistas.

---

