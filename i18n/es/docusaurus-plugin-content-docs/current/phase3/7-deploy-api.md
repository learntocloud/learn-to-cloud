# Tema 7: Proyecto Final de Implementación en la Nube

Despliega tu **Journal API** del Proyecto Final de la Fase 2 en una arquitectura segura de nube de 2 capas. Crearás un entorno listo para producción con la configuración adecuada de red, seguridad y escalabilidad.

## Descripción de la Arquitectura

Implementarás:

- **Capa 1 (Presentación/API):** Servidor de aplicación FastAPI en una subred pública  
- **Capa 2 (Datos):** Servidor de base de datos PostgreSQL en una subred privada  
- **Seguridad:** Controles de acceso y grupos de seguridad configurados correctamente  

## Objetivos de Aprendizaje

Al completar este proyecto final, podrás:

- Diseñar e implementar redes seguras en la nube con subredes públicas y privadas  
- Configurar grupos de seguridad siguiendo el principio de mínimo privilegio  
- Configurar servidores de bases de datos con acceso remoto seguro  
- Implementar y configurar una arquitectura de aplicación multinivel  
- Establecer una configuración de entorno adecuada para despliegues en producción  

## Requisitos Previos

- Haber completado el Proyecto Final de la Fase 2 (**Journal API**)  
- Comprender los conceptos básicos de redes (subredes, grupos de seguridad, gateways)  
- Tener una cuenta en un proveedor de nube (AWS/Azure/GCP) con permisos adecuados  
- Par de claves SSH para acceso seguro al servidor  

---

## Pasos de Implementación

### 1. Planifica tu Infraestructura en la Nube

#### Investigación y Diseño:

- Estudia la documentación de redes de tu proveedor de nube  
- Comprende las diferencias entre subredes públicas y privadas  
- Aprende sobre grupos de seguridad y listas de control de acceso (ACL)  
- Planifica tus rangos de direcciones IP (considera el crecimiento futuro)  

#### Componentes de Infraestructura a Crear:

- Red virtual (**VPC/VNet**) con un bloque CIDR adecuado  
- Subred pública para el servidor API (accesible desde Internet)  
- Subred privada para el servidor de base de datos (acceso interno únicamente)  
- Gateway de Internet para conectividad de la subred pública  
- Gateway NAT o instancia NAT para acceso saliente desde la subred privada  
- Tablas de enrutamiento y configuración de rutas  
- Grupos de seguridad para ambas capas  

#### Consideraciones de Seguridad:

- El servidor API solo debe aceptar tráfico HTTP/HTTPS desde Internet  
- El servidor de base de datos solo debe aceptar conexiones desde el servidor API  
- El acceso SSH debe estar restringido a tu dirección IP  
- Considera usar soluciones de acceso seguro nativas de la nube (AWS SSM, Azure Bastion, etc.)  

---

### 2. Despliega y Configura el Servidor API

#### Configuración del Servidor:

- Inicia una máquina virtual en la subred pública con un tamaño adecuado  
- Configura la autenticación basada en claves SSH  
- Instala las dependencias necesarias (Python, Git, etc.)  
- Configura un gestor de procesos (**systemd**, **supervisor**) para despliegue en producción  

#### Despliegue de la Aplicación:

- Clona tu repositorio **journal-starter**  
- Instala las dependencias de Python desde `requirements.txt`  
- Configura las variables de entorno para producción  
- Prueba la aplicación localmente antes de exponerla públicamente  

##### Configuración del Entorno:

Tu archivo `.env` debe incluir todas las variables necesarias (por ejemplo, credenciales de base de datos, claves secretas, etc.)

#### Red y Accesibilidad:

- Asigna una dirección IP estática o elástica para acceso consistente  
- Configura el grupo de seguridad para permitir tráfico HTTP (puerto 80) y/o HTTPS (puerto 443)  
- Opcionalmente, configura un proxy inverso (**nginx**) para mejores prácticas en producción  

---

### 3. Despliega y Configura el Servidor de Base de Datos

#### Configuración del Servidor:

- Lanza una VM en la subred privada  
- Asegúrate de que el servidor tenga acceso a Internet para instalación de paquetes (a través de NAT)  
- Configura acceso remoto seguro usando herramientas nativas de la nube  

#### Instalación y Configuración de PostgreSQL:

- Instala el servidor PostgreSQL  
- Crea la base de datos y el usuario de la aplicación  
- Configura PostgreSQL para aceptar conexiones remotas  
- Modifica los archivos de configuración (`postgresql.conf`, `pg_hba.conf`)  
- Configura el esquema de la base de datos usando el archivo `database_setup.sql`  

#### Reforzamiento de Seguridad:

- Configura reglas de firewall para permitir conexiones solo desde el servidor API  
- Usa contraseñas seguras o autenticación basada en certificados  
- Mantén el servidor y el software actualizados regularmente  
- Configura copias de seguridad automáticas  

---

### 4. Prueba y Valida tu Despliegue

#### Pruebas de Conectividad:

- Verifica que el servidor API pueda conectarse al servidor de base de datos  
- Confirma que el servidor de base de datos no sea accesible directamente desde Internet  
- Prueba el acceso SSH a ambos servidores  

#### Pruebas de la Aplicación:

Accede a la interfaz de documentación de la API:  
`http://tu-ip-elastica:8000/docs`

Prueba todas las operaciones CRUD:

- Crear nuevas entradas del diario  
- Obtener todas las entradas  
- Obtener una entrada por ID  
- Actualizar entradas existentes  
- Eliminar entradas  

---

## Documenta tu Trabajo

Escribe un blog técnico que incluya:

- Diagrama de arquitectura mostrando tu diseño de red  
- Configuraciones de grupos de seguridad y justificaciones  
- Capturas de pantalla de las pruebas exitosas de la API  
- Breve explicación de tus decisiones de diseño y compensaciones  
- Lista de desafíos enfrentados y cómo los resolviste  

Compártelo en el canal de la fase de nube en **Discord** cuando termines.

---

## Criterios de Éxito

Tu despliegue se considera exitoso cuando:

- ✅ La API es accesible desde Internet mediante una IP elástica  
- ✅ La base de datos solo es accesible desde el servidor API  
- ✅ Todos los endpoints de la API funcionan correctamente  
- ✅ Los datos persisten entre reinicios del servidor  
- ✅ Los grupos de seguridad siguen el principio de mínimo privilegio  
- ✅ Puedes explicar tus decisiones de arquitectura  

---

**Recuerda:** Este proyecto final trata de **comprender los patrones de implementación en la nube**, no solo de seguir instrucciones.  
Investiga, experimenta y aprende de los errores que encuentres en el camino.
