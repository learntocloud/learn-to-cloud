# Tema 3: Seguridad de red

> ⏱️ **Tiempo estimado:** 2-3 días

Seguridad de red en cloud se trata de construir conexiones seguras, separar recursos de forma lógica y defenderte contra amenazas basadas en red. Antes de asegurar la red de tu Journal API, necesitas entender fundamentos de networking cloud.

---

## 📚 Ruta de aprendizaje

### Objetivos de aprendizaje

Al final de este tema, vas a entender:

- VPC/VNet y aislamiento de red
- Security Groups vs Network ACLs y cuándo usar cada uno
- Load balancers y manejo seguro del tráfico
- VPN y opciones de conectividad privada
- Errores comunes de seguridad de red y cómo evitarlos

## Recursos base

### 1. Lee: fundamentos de networking cloud

Empieza con la documentación de tu proveedor:

**AWS**: [VPC User Guide](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)

**Azure**: [Virtual Network Overview](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview)

**GCP**: [VPC Network Overview](https://cloud.google.com/vpc/docs/vpc)

### 2. Mira: seguridad de red en acción

- [AWS VPC Deep Dive](https://www.youtube.com/watch?v=fnxXNZdf6ew) (45 min)
- [Azure Networking Explained](https://www.youtube.com/watch?v=5NMcM4zJPM4) (35 min)
- [GCP Networking Fundamentals](https://www.youtube.com/watch?v=cNb4xzAyTiQ) (40 min)

### 3. Aprende: buenas prácticas

- [NIST Network Security Guide](https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final)
- [Cloud Security Alliance - Network Security](https://cloudsecurityalliance.org/research/working-groups/network-security/)

## Conceptos clave

### VPC/VNet

- **Aislamiento**: tu red privada en la nube
- **Subnets**: segmentación
- **Route tables**: controlan el tráfico
- **Internet gateways**: habilitan acceso a internet donde corresponde

### Security Groups vs Network ACLs

**Security Groups** (stateful):

- Firewall a nivel instancia
- Solo allow rules (deny por defecto)
- Stateful (return traffic permitido automáticamente)

**Network ACLs** (stateless):

- Firewall a nivel subnet
- Allow y deny rules
- Stateless (debes permitir el tráfico de retorno explícitamente)

### Segmentación

- **Subnets públicas**: recursos que necesitan internet (por ejemplo, load balancer)
- **Subnets privadas**: app servers y bases
- **Subnets aisladas**: recursos muy sensibles sin internet

### Load balancers

- **ALB**: HTTP/HTTPS con features de seguridad
- **NLB**: TCP/UDP alto rendimiento
- Features: TLS termination, DDoS protection, access logging

---

## 🧪 Pon a prueba tu conocimiento

Prompts de ejemplo:

1. “Evalúame sobre Security Groups vs Network ACLs”
2. “Pídeme explicar VPC, subnets y route tables”
3. “Pregúntame cuándo usar subnets públicas vs privadas”
4. “Evalúame sobre tipos de load balancers y seguridad”
5. “Pregúntame sobre segmentación de red”
6. “Evalúame sobre stateful vs stateless firewalls”
7. “Pregúntame sobre tipos de VPN y cuándo usarlos”
8. “Pregúntame errores comunes de seguridad de red en cloud”

## Red física vs red cloud

| Componentes físicos | Equivalentes cloud | Diferencias clave |
|--------------------|--------------------|------------------|
| Routers/switches físicos | Routers virtuales, gateways | SDN via consola/API |
| Firewalls de hardware | Security Groups, NACLs | Reglas via interfaces cloud |
| Segmentación física | VPC/VNet, subnets, SG | Límites lógicos reemplazan físicos |
| Cables | Peering, conexiones virtuales | Sin conexiones físicas que manejar |

## Recursos adicionales (opcional)

- [AWS VPC Security Best Practices](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html)
- [Azure Network Security Best Practices](https://learn.microsoft.com/en-us/azure/security/fundamentals/network-best-practices)
- [GCP VPC Security](https://cloud.google.com/vpc/docs/using-vpc)
- [AWS Network Firewall](https://docs.aws.amazon.com/network-firewall/)
- [Azure Firewall](https://learn.microsoft.com/en-us/azure/firewall/)
- [GCP Cloud Firewall](https://cloud.google.com/firewall)
- [AWS VPC Workshop](https://catalog.workshops.aws/networking/en-US)
- [Azure Network Security Workshop](https://github.com/Azure/azure-network-security)

## Próximos pasos

Cuando te sientas cómodo/a con seguridad de red, sigue al Tema 4.

---

## ✅ Checklist del tema

Antes de seguir, asegúrate de tener:

- [ ] Entendido VPC/VNet y aislamiento
- [ ] Aprendido Security Groups vs Network ACLs
- [ ] Entendido segmentación (pública/privada/aislada)
- [ ] Aprendido load balancers y manejo de tráfico
- [ ] Revisado documentación de networking del proveedor
- [ ] (Opcional) Completado workshops

---
