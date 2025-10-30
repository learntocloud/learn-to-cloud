# Tema 3: Seguridad de la Red

La seguridad de la red en la nube se trata de construir conexiones seguras, crear separaciones lógicas entre recursos y defenderse de amenazas basadas en la red. Antes de asegurar la red de tu API de Diario, necesitas comprender los fundamentos de la red en la nube.

## Objetivos de Aprendizaje

Al final de este tema, comprenderás:

- Nubes Privadas Virtuales (VPC) y aislamiento de red  
- Grupos de Seguridad vs ACLs de Red y cuándo usar cada uno  
- Balanceadores de carga y gestión segura del tráfico  
- Opciones de conectividad privada y VPN  
- Errores comunes en la seguridad de red y cómo evitarlos  

## Recursos Principales de Aprendizaje

### 1. Leer: Fundamentos de Redes en la Nube

Comienza con la documentación de redes de tu proveedor de nube:

**AWS**: [Guía del Usuario de VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) – Lee las secciones sobre VPC, subredes y grupos de seguridad  
**Azure**: [Descripción General de Redes Virtuales](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) – Lee los conceptos y características de seguridad  
**GCP**: [Descripción General de Redes VPC](https://cloud.google.com/vpc/docs/vpc) – Lee los conceptos y seguridad de VPC  

### 2. Ver: Seguridad de Red en Acción

- [AWS VPC Deep Dive](https://www.youtube.com/watch?v=fnxXNZdf6ew) (45 minutos)  
- [Azure Networking Explained](https://www.youtube.com/watch?v=5NMcM4zJPM4) (35 minutos)  
- [Fundamentos de Redes en GCP](https://www.youtube.com/watch?v=cNb4xzAyTiQ) (40 minutos)  

### 3. Aprender: Mejores Prácticas de Seguridad de Red

- [Guía de Seguridad de Red del NIST](https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final)  
- [Cloud Security Alliance - Seguridad de Red](https://cloudsecurityalliance.org/research/working-groups/network-security/)  

## Conceptos Clave a Dominar

### Nubes Privadas Virtuales (VPC)

- **Aislamiento**: Tu propia red privada en la nube  
- **Subredes**: Divide tu VPC en segmentos de red más pequeños  
- **Tablas de Ruteo**: Controlan hacia dónde puede ir el tráfico de red  
- **Puertas de Enlace a Internet**: Permiten acceso a Internet cuando es necesario  

### Grupos de Seguridad vs ACLs de Red

**Grupos de Seguridad** (con estado):  
- Actúan como cortafuegos para instancias individuales  
- Solo permiten reglas (denegación por defecto)  
- Con estado (el tráfico de retorno se permite automáticamente)  
- Se aplican a nivel de instancia  

**Listas de Control de Acceso de Red (NACLs)** (sin estado):  
- Actúan como cortafuegos para subredes completas  
- Permiten y deniegan reglas  
- Sin estado (se debe permitir explícitamente el tráfico de retorno)  
- Se aplican a nivel de subred  

### Segmentación de Red

- **Subredes Públicas**: Para recursos que necesitan acceso a Internet (balanceadores de carga)  
- **Subredes Privadas**: Para servidores de aplicaciones y bases de datos  
- **Subredes Aisladas**: Para recursos altamente sensibles sin acceso a Internet  

### Balanceadores de Carga y Gestión del Tráfico

- **Balanceadores de Carga de Aplicación**: Manejan tráfico HTTP/HTTPS con funciones de seguridad  
- **Balanceadores de Carga de Red**: Manejan tráfico TCP/UDP con alto rendimiento  
- **Funciones de Seguridad**: Terminación SSL, protección DDoS, registros de acceso  

## Prueba tu Conocimiento

Usa un asistente de IA para evaluar tu comprensión. Aquí algunos ejemplos de indicaciones:

1. "Hazme un quiz sobre la diferencia entre Grupos de Seguridad y ACLs de Red"  
2. "Pídeme que explique conceptos de VPC como subredes y tablas de ruteo"  
3. "Ponme a prueba sobre cuándo usar subredes públicas vs privadas"  
4. "Hazme un quiz sobre tipos de balanceadores de carga y sus características de seguridad"  
5. "Pregúntame sobre mejores prácticas de segmentación de red"  
6. "Evalúa mi comprensión de cortafuegos con estado vs sin estado"  
7. "Hazme un quiz sobre tipos de VPN y cuándo usarlas"  
8. "Pregúntame sobre errores comunes de seguridad de red en la nube"  

## Seguridad de Red Física vs en la Nube

Comprender las diferencias ayuda a cerrar la brecha conceptual:

| Componentes de Red Física | Equivalentes en la Nube | Diferencias Clave |
|----------------------------|--------------------------|--------------------|
| Enrutadores y conmutadores físicos | Enrutadores virtuales, puertas de enlace VPC | Redes definidas por software mediante consola/API |
| Cortafuegos de hardware | Grupos de seguridad, NACLs | Reglas aplicadas mediante interfaces en la nube |
| Segmentación física de red | Subredes, VPCs, Grupos de Seguridad | Límites lógicos reemplazan los físicos |
| Cables de red | Conexiones virtuales, emparejamiento | No hay conexiones físicas que administrar |

## Recursos Adicionales (Opcional)

### Documentación de Proveedores de Nube
- [Mejores Prácticas de Seguridad VPC de AWS](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html)  
- [Mejores Prácticas de Seguridad de Red de Azure](https://learn.microsoft.com/en-us/azure/security/fundamentals/network-best-practices)  
- [Seguridad VPC en GCP](https://cloud.google.com/vpc/docs/using-vpc)  

### Herramientas de Seguridad de Red
- [Cortafuegos de Red de AWS](https://docs.aws.amazon.com/network-firewall/)  
- [Azure Firewall](https://learn.microsoft.com/en-us/azure/firewall/)  
- [Cortafuegos de GCP Cloud](https://cloud.google.com/firewall)  

### Recursos Prácticos
- [Taller de AWS VPC](https://catalog.workshops.aws/networking/en-US)  
- [Taller de Seguridad de Red en Azure](https://github.com/Azure/azure-network-security)  

## Próximos Pasos

Una vez que te sientas seguro con los conceptos de seguridad de red, avanza al Tema 4.
