# Tema 3: Fundamentos de Redes en la Nube

En el tema anterior trabajaste en el despliegue de una máquina virtual (VM) en la nube, utilizando configuraciones predeterminadas como la VPC, los Grupos de Seguridad, etc. El enfoque de esta fase es profundizar en tu comprensión de los conceptos de redes en la nube esenciales para implementaciones seguras.

- **Estudia**

  - Comprensión de [AWS VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html), [Azure VNet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) y [GCP Virtual Private Network](https://cloud.google.com/vpc/docs/overview)
  - Qué es el [Subnetting](https://audrey01.hashnode.dev/subnets-ip-addresses-ip-address-classes-cidr-blocks): subredes públicas vs. privadas, bloques CIDR.
  - Puertas de enlace (IGW, NAT, VPN) para el acceso seguro a Internet en [AWS](https://docs.aws.amazon.com/vpc/latest/userguide/extend-intro.html), [Azure](https://learn.microsoft.com/en-us/azure/nat-gateway/nat-overview?source=recommendations) y [GCP](https://cloud.google.com/nat/docs/overview)

## Pon a prueba tus conocimientos

Una vez que hayas terminado con los recursos proporcionados, mira el video [¿Qué es una dirección IP?](https://www.youtube.com/watch?v=5WfiTHiU4x8). Todo lo que se muestra allí debería tener sentido para ti; de lo contrario, aún no estás listo para avanzar.

Prueba tus conocimientos con un asistente de IA. Aquí tienes algunos ejemplos de preguntas para poner a prueba tus conceptos de redes en la nube:

1. ¿Cuál es el propósito de las tablas de enrutamiento y cómo impactan el tráfico de red?
2. ¿Cómo controla una tabla de enrutamiento el flujo del tráfico en una red en la nube?
3. ¿Cómo define la notación CIDR los rangos de direcciones IP en las redes en la nube?
4. ¿En qué se diferencian las subredes públicas y privadas, y cuándo debe usarse cada una?
5. ¿Cómo fluye el tráfico entre las subredes públicas y privadas dentro de una VPC?
6. ¿Cuál es la importancia de la ruta 0.0.0.0/0 en una tabla de enrutamiento?
7. Explica la diferencia entre un NAT Gateway y un Internet Gateway.

## Tarea práctica

- Configura una red en la nube en cualquier proveedor de servicios cloud.
- Crea dos subredes (Privada y Pública) dentro de la red configurada.
- Configura el acceso a Internet para un enrutamiento adecuado.
- Asocia las subredes con las tablas de enrutamiento apropiadas para controlar el flujo del tráfico.
- Configura el grupo de seguridad.
- Implementa una VM en cada una de las subredes (Pública y Privada) de la red creada.
