# Tema 5: Monitoreo y Observabilidad

El **monitoreo** y la **observabilidad** son prácticas esenciales de **DevOps** que te ayudan a comprender la **salud**, el **rendimiento** y la **confiabilidad** de tus aplicaciones e infraestructura.  
En este tema, aprenderás a configurar el monitoreo utilizando [Prometheus](https://prometheus.io/) y a visualizar métricas con [Grafana](https://grafana.com/).

---

## ¿Por qué son importantes el monitoreo y la observabilidad para las aplicaciones nativas en la nube?

Las aplicaciones nativas en la nube suelen ser **distribuidas**, **dinámicas** y se ejecutan en **múltiples servicios y entornos**.  
El monitoreo y la observabilidad son críticos porque:

- Ayudan a detectar y resolver problemas rápidamente, minimizando el tiempo de inactividad.  
- Proporcionan visibilidad sobre la salud del sistema, el rendimiento y la experiencia del usuario.  
- Permiten alertas proactivas y resolución de problemas en entornos complejos y de cambios rápidos.  
- Favorecen la escalabilidad y confiabilidad al identificar cuellos de botella y fallos.  
- Ayudan a comprender las dependencias e interacciones entre microservicios.

Sin un monitoreo y observabilidad efectivos, es difícil mantener, depurar y optimizar sistemas nativos en la nube.

---

## Estudio

- ¿Qué es el [Monitoreo](https://www.ibm.com/think/topics/observability-vs-monitoring) y la [Observabilidad](https://www.ibm.com/think/topics/observability-vs-monitoring) en DevOps?  
- [Descripción general de Prometheus](https://prometheus.io/docs/introduction/overview/)  
- [Descripción general de Grafana](https://grafana.com/docs/grafana/latest/getting-started/what-is-grafana/)  
- [Integración de Prometheus + Grafana](https://grafana.com/docs/grafana/latest/datasources/prometheus/)  

---

## Conceptos Clave

- **Métricas**: Datos cuantitativos sobre tus sistemas (CPU, memoria, solicitudes, etc.)  
- **Alertas**: Notificaciones automáticas basadas en umbrales de métricas  
- **Paneles (Dashboards)**: Representaciones visuales de métricas para obtener información rápida  
- **Instrumentación**: Añadir código o *exporters* para exponer métricas  

---

## Tareas Prácticas

### 1. Configurar Prometheus

- Crea una configuración mínima `prometheus.yml`:
  ```yaml
  global:
    scrape_interval: 15s

  scrape_configs:
    - job_name: 'prometheus'
      static_configs:
        - targets: ['localhost:9090']

  ```
  
- Instala Prometheus usando Docker:
  ```sh
    docker run \
    -p 9090:9090 \
    -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml \
    prom/prometheus
  ```

- Agrega el endpoint de métricas de tu aplicación en `static_configs` según sea necesario.

### 2. Configurar Grafana

- Instala Grafana usando Docker:
  ```sh
  docker run -d --name=grafana -p 3000:3000 grafana/grafana
  ```
- Access Grafana at [http://localhost:3000](http://localhost:3000) (default login: `admin` / `admin`)
- Agrega Prometheus como fuente de datos (URL: `http://host.docker.internal:9090` or `http://localhost:9090`)
- Si es aplicable, agrega y conecta las métricas de tu proveedor de nube (por ejemplo, AWS CloudWatch, Azure Monitor)

### 3. Crear Paneles (Dashboards)

- Crea un nuevo panel y añade gráficos usando consultas PromQL (por ejemplo, up, http_requests_total)
- Visualiza métricas de tu aplicación o infraestructura

### 4. Instrument a Sample App

- Para Node.js: usa [prom-client](https://github.com/siimon/prom-client) para exponer métricas
- Para Python: usa [prometheus_client](https://github.com/prometheus/client_python)
- Agrega el endpoint de métricas en la configuración de Prometheus y visualízalas en Grafana
---

## Prueba tus Conocimientos

Usa estas preguntas para evaluar tu comprensión:

1. ¿Cuál es la diferencia entre monitoreo y observabilidad?
2. ¿Cómo recopila Prometheus las métricas de las aplicaciones?
3. ¿Qué es PromQL y cómo se utiliza en los paneles de Grafana?
4. ¿Cómo configurarías una alerta por alto uso de CPU en Prometheus?
5. ¿Qué son los exporters en el contexto de Prometheus?
6. ¿Cómo agregas una nueva fuente de datos en Grafana?
7. ¿Cuáles son algunas buenas prácticas para el diseño de paneles?

---

## Recursos

- [Prometheus Documentation](https://prometheus.io/docs/)
- [Grafana Documentation](https://grafana.com/docs/)
- [Monitoring Node.js Apps with Prometheus & Grafana](https://codersociety.com/blog/articles/nodejs-application-monitoring-with-prometheus-and-grafana)
- [Monitoring Python Apps with Prometheus & Grafana](https://dev.to/ken_mwaura1/getting-started-monitoring-a-fastapi-app-with-grafana-and-prometheus-a-step-by-step-guide-3fbn)
- [Awesome Prometheus Alerts](https://samber.github.io/awesome-prometheus-alerts/)
