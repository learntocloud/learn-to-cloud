# Tema 4: Orquestación de contenedores - Kubernetes

> ⏱️ **Tiempo estimado:** 4-5 días

Ya aprendimos sobre contenedores al inicio de esta fase, ahora toca ver cómo orquestarlos. Ahí entra Kubernetes (K8s), una plataforma open source de orquestación de contenedores que automatiza despliegue, escalado y administración de aplicaciones containerizadas. Se usa muchísimo en entornos cloud-native modernos para que las apps sean altamente disponibles, escalables y resilientes.

---

## 📚 Ruta de aprendizaje

### ¿Por qué Kubernetes?

Cuando las apps crecen en complejidad, administrar contenedores manualmente se vuelve difícil. Kubernetes te da:

- **Despliegue y escalado automatizados**: escala basado en recursos o métricas
- **Self-healing**: reinicia contenedores fallidos, reemplaza no-responsivos, reprograma en nodos sanos
- **Load balancing**: distribuye tráfico para alta disponibilidad
- **Service discovery**: asigna nombres DNS e IPs a servicios
- **Configuración declarativa**: defines estado deseado con manifiestos YAML/JSON

## Conceptos clave

### 1. **Cluster**

Un cluster Kubernetes se compone de:

- **Master/Control Plane**: administra el cluster y programa workloads
- **Worker nodes**: corren las apps containerizadas

### 2. **Pods**

- La unidad desplegable más pequeña
- Un pod puede contener uno o más contenedores que comparten storage, networking y una IP

### 3. **Services**

- Exponen tu app a la red
- Tipos:
  - **ClusterIP**: acceso interno
  - **NodePort**: expone el servicio en un puerto de cada nodo
  - **LoadBalancer**: integra con el proveedor cloud para acceso externo

### 4. **Deployments**

- Administra declarativamente el estado deseado
- Maneja rolling updates, rollbacks y escalado

### 5. **ConfigMaps y Secrets**

- **ConfigMaps**: configuración key-value
- **Secrets**: datos sensibles como passwords y API keys

## Configurar Kubernetes

### 1. **Local**

Para desarrollo local puedes usar:

- [Minikube](https://minikube.sigs.k8s.io/docs/)
- [Kind](https://kind.sigs.k8s.io/)

### 2. **Proveedores cloud**

Servicios administrados:

- **AWS**: [EKS](https://aws.amazon.com/eks/)
- **Azure**: [AKS](https://learn.microsoft.com/en-us/azure/aks/)
- **Google Cloud**: [GKE](https://cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview)

Ejemplo rápido: [minimal k8s cluster on Azure AKS using Terraform](https://youtu.be/J_aInEIBzE0?si=vTdvDp-6Id7IzGzx)

## Comandos básicos

```bash
# View cluster information
kubectl cluster-info

# List all nodes in the cluster
kubectl get nodes

# Deploy an application
kubectl apply -f deployment.yaml

# View running pods
kubectl get pods

# View logs of a pod
kubectl logs <pod-name>

# Delete a resource
kubectl delete -f deployment.yaml
```

---

## 🛠️ Ejercicio hands-on

1. Instala Minikube o Kind en tu máquina.
2. Crea un deployment simple con este YAML:

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

3. Aplica el deployment:
`kubectl apply -f deployment.yaml`

4. Verifica pods:
`kubectl get pods`

5. Expón el deployment como service:
`kubectl expose deployment nginx-deployment --type=NodePort --port=80`

6. Accede a la app en tu navegador usando el NodePort.

---

## 🧪 Pon a prueba tu conocimiento

1. ¿Qué es Kubernetes y por qué se usa en desarrollo moderno?
2. ¿Cuáles son los componentes clave de un cluster?
3. ¿Qué es un pod y cómo se diferencia de un contenedor?
4. ¿Cómo permiten los services la comunicación entre pods y clientes externos?
5. ¿Para qué sirve un Deployment?
6. ¿Cómo maneja Kubernetes el self-healing?
7. ¿Qué son ConfigMaps y Secrets y cómo se usan?
8. ¿Cuál es la diferencia entre `kubectl apply` y `kubectl create`?
9. ¿Cómo escalas un deployment?
10. ¿Qué beneficios tienen servicios administrados como EKS, AKS o GKE?

Estas preguntas te ayudan a reforzar conceptos de Kubernetes.

## Recursos adicionales

- [Kubernetes Official Documentation](https://kubernetes.io/docs/concepts/)
- [Kubernetes the Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)

---

## ✅ Checklist del tema

Antes de seguir, asegúrate de tener:

- [ ] Entendido conceptos core (Pods, Services, Deployments)
- [ ] Instalado Minikube o Kind local
- [ ] Creado y desplegado un deployment
- [ ] Expuesto un deployment como service
- [ ] Usado comandos kubectl para administrar el cluster
- [ ] Entendido ConfigMaps y Secrets
- [ ] (Opcional) Explora servicios administrados (EKS, AKS, GKE)

---

