# Tema 4: Orquestación de Contenedores - Kubernetes

Ya aprendimos sobre los contenedores al inicio de esta fase, ahora veamos cómo podemos **orquestar los contenedores**. Aquí es donde entra **Kubernetes**, a menudo abreviado como **K8s**, una plataforma de orquestación de contenedores de **código abierto** que automatiza la implementación, el escalado y la gestión de aplicaciones en contenedores.  
Se utiliza ampliamente en entornos modernos **nativos en la nube** para garantizar que las aplicaciones sean altamente disponibles, escalables y resilientes.

---

## ¿Por qué Kubernetes?

A medida que las aplicaciones crecen en complejidad, gestionar contenedores manualmente se vuelve un desafío. Kubernetes ofrece:

- **Implementación y escalado automatizados**: Implementa y escala contenedores automáticamente en función del uso de recursos o métricas personalizadas.  
- **Auto-reparación**: Reinicia contenedores fallidos, reemplaza los que no responden y reprograma contenedores en nodos saludables.  
- **Balanceo de carga**: Distribuye el tráfico entre los contenedores para garantizar alta disponibilidad.  
- **Descubrimiento de servicios**: Asigna automáticamente nombres DNS e IPs a los servicios.  
- **Configuración declarativa**: Utiliza manifiestos YAML o JSON para definir el estado deseado de tu aplicación.

---

## Conceptos Fundamentales

Entender Kubernetes requiere familiarizarse con sus componentes principales:

### 1. **Cluster (Clúster)**
Un clúster de Kubernetes consta de:
- **Nodo Maestro (Master Node)**: Administra el clúster y programa las cargas de trabajo.  
- **Nodos de Trabajo (Worker Nodes)**: Ejecutan las aplicaciones en contenedores.

### 2. **Pods**
- La unidad desplegable más pequeña en Kubernetes.  
- Un pod puede contener uno o más contenedores que comparten almacenamiento, red y una sola dirección IP.

### 3. **Servicios (Services)**
- Exponen tu aplicación a la red.  
- Tipos de servicios incluyen:
  - **ClusterIP**: Acceso interno dentro del clúster.  
  - **NodePort**: Expone el servicio en un puerto específico de cada nodo.  
  - **LoadBalancer**: Se integra con proveedores de la nube para exponer el servicio externamente.

### 4. **Deployments (Despliegues)**
- Gestionan de forma declarativa el estado deseado de tu aplicación.  
- Manejan actualizaciones continuas (rolling updates), retrocesos (rollbacks) y escalado.

### 5. **ConfigMaps y Secrets**
- **ConfigMaps**: Almacenan datos de configuración como pares clave-valor.  
- **Secrets**: Almacenan datos sensibles como contraseñas y claves API de forma segura.

---

## Configuración de Kubernetes

### 1. **Configuración Local**
Para desarrollo local, puedes usar herramientas como:
- [Minikube](https://minikube.sigs.k8s.io/docs/): Ejecuta un clúster de Kubernetes de un solo nodo localmente.  
- [Kind](https://kind.sigs.k8s.io/): Ejecuta clústeres de Kubernetes dentro de contenedores Docker.

### 2. **Proveedores en la Nube**
La mayoría de los proveedores de nube ofrecen servicios Kubernetes gestionados:
- **AWS**: [Elastic Kubernetes Service (EKS)](https://aws.amazon.com/eks/)  
- **Azure**: [Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/)  
- **Google Cloud**: [Google Kubernetes Engine (GKE)](https://cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview)

Aquí tienes un ejemplo rápido de cómo configurar un [clúster mínimo de Kubernetes en Azure AKS usando Terraform.](https://youtu.be/J_aInEIBzE0?si=vTdvDp-6Id7IzGzx)

---

## Comandos Básicos

Algunos comandos esenciales de Kubernetes son:

```bash
# Ver información del clúster
kubectl cluster-info

# Listar todos los nodos en el clúster
kubectl get nodes

# Desplegar una aplicación
kubectl apply -f deployment.yaml

# Ver pods en ejecución
kubectl get pods

# Ver logs de un pod
kubectl logs <nombre-del-pod>

# Eliminar un recurso
kubectl delete -f deployment.yaml
```

## Ejercicio Práctico

Instala Minikube o Kind en tu máquina local.

Crea un despliegue simple en Kubernetes usando el siguiente archivo YAML:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
```

3. Aplica el despliegue:
`kubectl apply -f deployment.yaml`

4. Verifica que los pods estén en ejecución:
`kubectl get pods`

5. Expón el despliegue como un servicio:
`kubectl expose deployment nginx-deployment --type=NodePort --port=80`

6. Accede a la aplicación en tu navegador usando el NodePort.

## Prueba tus Conocimientos
Usa estas preguntas para evaluar tu comprensión de los conceptos de Kubernetes:

1. ¿Qué es Kubernetes y por qué se utiliza en el desarrollo moderno de aplicaciones?

2. ¿Cuáles son los componentes clave de un clúster de Kubernetes?

3. ¿Qué es un pod en Kubernetes y cómo se diferencia de un contenedor?

4. ¿Cómo permiten los servicios de Kubernetes la comunicación entre pods y clientes externos?

5. ¿Cuál es el propósito de un Deployment en Kubernetes?

6. ¿Cómo maneja Kubernetes la auto-reparación de aplicaciones?

7. ¿Qué son ConfigMaps y Secrets y cómo se usan en Kubernetes?

8. ¿Cuál es la diferencia entre kubectl apply y kubectl create?

9. ¿Cómo puedes escalar un despliegue en Kubernetes?

10. ¿Cuáles son los beneficios de usar servicios gestionados como EKS, AKS o GKE?

Estas preguntas te ayudarán a reforzar tu comprensión de Kubernetes y sus conceptos principales.

## Recursos Adicionales

- [Documentación Oficial de Kubernetes](https://kubernetes.io/docs/concepts/)
- [Kubernetes the Hard Way por Kelsey Hightower](https://github.com/kelseyhightower/kubernetes-the-hard-way)
