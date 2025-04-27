# Topic 4: Container Orchestration - Kubernetes

So we learned about Containers in the start of this phase, now let's see how we can orchestrate the containers. This is where Kubernetes comes in, often abbreviated as K8s, an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It is widely used in modern cloud-native environments to ensure applications are highly available, scalable, and resilient.

---

## Why Kubernetes?

As applications grow in complexity, managing containers manually becomes challenging. Kubernetes provides:

- **Automated Deployment and Scaling**: Automatically deploy and scale containers based on resource usage or custom metrics.
- **Self-Healing**: Restarts failed containers, replaces unresponsive ones, and reschedules containers on healthy nodes.
- **Load Balancing**: Distributes traffic across containers to ensure high availability.
- **Service Discovery**: Automatically assigns DNS names and IPs to services.
- **Declarative Configuration**: Uses YAML or JSON manifests to define the desired state of your application.

## Core Concepts

Understanding Kubernetes requires familiarity with its core components:

### 1. **Cluster**
A Kubernetes cluster consists of:
- **Master Node**: Manages the cluster and schedules workloads.
- **Worker Nodes**: Run the containerized applications.

### 2. **Pods**
- The smallest deployable unit in Kubernetes.
- A pod can contain one or more containers that share storage, networking, and a single IP address.

### 3. **Services**
- Expose your application to the network.
- Types of services include:
  - **ClusterIP**: Internal access within the cluster.
  - **NodePort**: Exposes the service on a specific port of each node.
  - **LoadBalancer**: Integrates with cloud providers to expose the service externally.

### 4. **Deployments**
- Declaratively manage the desired state of your application.
- Handles rolling updates, rollbacks, and scaling.

### 5. **ConfigMaps and Secrets**
- **ConfigMaps**: Store configuration data as key-value pairs.
- **Secrets**: Store sensitive data like passwords and API keys securely.

## Setting Up Kubernetes

### 1. **Local Setup**
For local development, you can use tools like:
- [Minikube](https://minikube.sigs.k8s.io/docs/): Runs a single-node Kubernetes cluster locally.
- [Kind](https://kind.sigs.k8s.io/): Runs Kubernetes clusters in Docker containers.

### 2. **Cloud Providers**
Most cloud providers offer managed Kubernetes services:
- **AWS**: [Elastic Kubernetes Service (EKS)](https://aws.amazon.com/eks/)
- **Azure**: [Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/)
- **Google Cloud**: [Google Kubernetes Engine (GKE)](https://cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview)

Here is a quick example of setting up a [minimal k8s cluster on Azure AKS using Terraform.](https://youtu.be/J_aInEIBzE0?si=vTdvDp-6Id7IzGzx)

## Basic Commands

Here are some essential Kubernetes commands:

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

## Hands-On Exercise

1. Install Minikube or Kind on your local machine.
2. Create a simple Kubernetes deployment using the following YAML file:

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

3. Apply the deployment:
`kubectl apply -f deployment.yaml`

4. Verify the pods are running:
`kubectl get pods`

5. Expose the deployment as a service:
`kubectl expose deployment nginx-deployment --type=NodePort --port=80`

6. Access the application in your browser using the NodePort.

## Test Your Knowledge

Use these questions to test your understanding of Kubernetes concepts:

1. What is Kubernetes, and why is it used in modern application development?
2. What are the key components of a Kubernetes cluster?
3. What is a pod in Kubernetes, and how does it differ from a container?
4. How do Kubernetes services enable communication between pods and external clients?
5. What is the purpose of a Deployment in Kubernetes?
6. How does Kubernetes handle self-healing for applications?
7. What are ConfigMaps and Secrets, and how are they used in Kubernetes?
8. What is the difference between `kubectl apply` and `kubectl create`?
9. How can you scale a deployment in Kubernetes?
10. What are the benefits of using managed Kubernetes services like EKS, AKS, or GKE?

These questions will help reinforce your understanding of Kubernetes and its core concepts.

## Additional Resources

- [Kubernetes Official Documentation](https://kubernetes.io/docs/concepts/)
- [Kubernetes the Hard Way by Kelsey Hightower](https://github.com/kelseyhightower/kubernetes-the-hard-way)
