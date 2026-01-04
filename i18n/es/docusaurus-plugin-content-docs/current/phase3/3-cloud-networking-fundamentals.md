# Tema 3: Fundamentos de networking en cloud

> ⏱️ **Tiempo estimado:** 3-4 días

En el tema anterior desplegaste una VM en cloud usando configuraciones por defecto como VPC/VNet, security groups, etc. En este tema el objetivo es profundizar tu entendimiento de networking cloud, que es clave para despliegues seguros.

---

## 📚 Ruta de aprendizaje

- Estudia

  - Entiende [AWS VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html), [Azure VNet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) y [GCP VPC](https://cloud.google.com/vpc/docs/overview)
  - ¿Qué es [Subnetting](https://audrey01.hashnode.dev/subnets-ip-addresses-ip-address-classes-cidr-blocks)?: subnets públicas vs privadas, bloques CIDR
  - Gateways (IGW, NAT, VPN) para acceso seguro a internet en [AWS](https://docs.aws.amazon.com/vpc/latest/userguide/extend-intro.html), [Azure](https://learn.microsoft.com/en-us/azure/nat-gateway/nat-overview?source=recommendations) y [GCP](https://cloud.google.com/nat/docs/overview)

---

## 🧪 Pon a prueba tu conocimiento

Cuando termines los recursos, mira [What is an IP Address](https://www.youtube.com/watch?v=5WfiTHiU4x8). Todo debería hacerte sentido; si no, todavía no estás listo/a para avanzar.

Pon a prueba tu conocimiento con un asistente de IA. Aquí tienes prompts de ejemplo:

1. ¿Cuál es el propósito de las route tables y cómo impactan el tráfico?
2. ¿Cómo controla una route table el flujo de tráfico en una red cloud?
3. ¿Cómo define CIDR rangos de IP en redes cloud?
4. ¿En qué se diferencian subnets públicas y privadas y cuándo usarías cada una?
5. ¿Cómo fluye el tráfico entre subnets públicas y privadas dentro de una VPC?
6. ¿Qué significa la ruta 0.0.0.0/0 en una route table?
7. Explica la diferencia entre NAT Gateway e Internet Gateway.

---

## 🛠️ Tarea hands-on

- Crea una red cloud en cualquier proveedor.
- Crea dos subnets (una pública y una privada) dentro de la red.
- Configura acceso a internet con enrutamiento correcto.
- Asocia subnets con route tables apropiadas para controlar tráfico.
- Configura el security group.
- Despliega una VM en la subnet pública y otra en la subnet privada.

---

## ✅ Checklist del tema

Antes de seguir, asegúrate de tener:

- [ ] Entendido conceptos de VPC/VNet (AWS VPC, Azure VNet, GCP VPC)
- [ ] Aprendido subnetting y bloques CIDR
- [ ] Entendido la diferencia entre subnets públicas y privadas
- [ ] Aprendido sobre gateways (Internet Gateway, NAT Gateway)
- [ ] Creado una VPC/VNet con subnets pública y privada
- [ ] Configurado route tables correctamente
- [ ] Desplegado VMs en ambas subnets

---
