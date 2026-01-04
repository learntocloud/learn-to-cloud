# Tema 5: Monitoreo y observabilidad

> ⏱️ **Tiempo estimado:** 3-4 días

Monitoreo y observabilidad son prácticas esenciales de DevOps para entender salud, rendimiento y confiabilidad de tus aplicaciones e infraestructura. En este tema vas a configurar monitoreo con [Prometheus](https://prometheus.io/) y visualización con [Grafana](https://grafana.com/). Después vas a explorar agentes de IA con n8n y flujos agentic para automatizar respuesta a incidentes.

---

## 📚 Ruta de aprendizaje

## ¿Por qué importan monitoreo y observabilidad en apps cloud-native?

Apps cloud-native suelen ser distribuidas, dinámicas y corren en muchos servicios/entornos. Monitoreo y observabilidad son críticos porque:

- Ayudan a detectar y resolver problemas rápido, reduciendo downtime
- Dan visibilidad del estado del sistema, rendimiento y experiencia del usuario
- Permiten alertas proactivas y troubleshooting en sistemas complejos
- Apoyan escalabilidad y confiabilidad al identificar cuellos de botella
- Ayudan a entender dependencias e interacciones entre servicios

Sin monitoreo/observabilidad, se vuelve muy difícil mantener, depurar y optimizar sistemas cloud-native.

---

## ¿Cómo pueden ayudar agentes de IA?

Los sistemas de monitoreo generan alertas todo el tiempo. Tradicionalmente, un engineer investiga y arregla cada alerta manualmente. Si equipas agentes de IA con la lógica adecuada, puedes:

- Responder instantáneamente a alertas
- Analizar logs/métricas para encontrar root cause automáticamente
- Ejecutar fixes (reiniciar servicios, escalar recursos, rollback) de forma independiente
- Aprender de incidentes para mejorar respuestas futuras
- Liberar al equipo de tareas repetitivas

---

## Estudia

- ¿Qué es [Monitoring](https://www.ibm.com/think/topics/observability-vs-monitoring) y [Observability](https://www.ibm.com/think/topics/observability-vs-monitoring) en DevOps?
- [Prometheus Overview](https://prometheus.io/docs/introduction/overview/)
- [Grafana Overview](https://grafana.com/docs/grafana/latest/getting-started/what-is-grafana/)
- [Prometheus + Grafana Integration](https://grafana.com/docs/grafana/latest/datasources/prometheus/)
- ¿Qué son [AI agents](https://aws.amazon.com/what-is/ai-agents/)?
- ¿Qué son [agentic workflows](https://www.ibm.com/think/topics/agentic-workflows)?
- [n8n Overview](https://n8n.io/features/)

---

## Conceptos clave

- **Métricas**: datos cuantitativos (CPU, memoria, requests, etc.)
- **Alerting**: notificaciones automatizadas por umbrales
- **Dashboards**: visualizaciones rápidas
- **Instrumentación**: código/exporters para exponer métricas

---

## 🛠️ Tareas hands-on

### 1. Configura Prometheus

- Crea un `prometheus.yml` mínimo:

  ```yaml
  global:
    scrape_interval: 15s

  scrape_configs:
    - job_name: 'prometheus'
      static_configs:
        - targets: ['localhost:9090']
  ```

- Instala Prometheus con Docker:

  ```sh
    docker run \
    -p 9090:9090 \
    -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml \
    prom/prometheus
  ```

- Agrega el endpoint de métricas de tu app a `static_configs`.

### 2. Configura Grafana

- Instala Grafana con Docker:

  ```sh
  docker run -d --name=grafana -p 3000:3000 grafana/grafana
  ```

- Abre Grafana en http://localhost:3000 (login default: `admin` / `admin`)
- Agrega Prometheus como data source (URL: `http://host.docker.internal:9090` o `http://localhost:9090`)
- (Opcional) conecta métricas del proveedor (AWS CloudWatch, Azure Monitor)

### 3. Crea dashboards

- Crea un dashboard nuevo y agrega panels con PromQL (por ejemplo: `up`, `http_requests_total`)
- Visualiza métricas de tu app o infraestructura

### 4. Instrumenta una app de ejemplo

- Para Node.js: usa [prom-client](https://github.com/siimon/prom-client)
- Para Python: usa [prometheus_client](https://github.com/prometheus/client_python)
- Agrega el endpoint de métricas en Prometheus y visualiza en Grafana

### 5. Construye un agente de IA con n8n

- Instala n8n con Docker:

```sh
docker run -d -p 5678:5678 --name n8n n8nio/n8n:latest
```

- Abre n8n en http://localhost:5678 y crea tu login.

**Crea tu agente:**

1. Crea un trigger Schedule (cada 1-2 min)
2. Consulta la API de Prometheus por una métrica
3. Agrega un nodo If para detectar umbral
4. Llama a un LLM para analizar anomalías y sugerir remediación ([OpenAI API](https://platform.openai.com/docs/overview))
5. Envía el análisis por email o Slack
6. (Opcional) agrega pasos de remediación automática

**Prueba:**

- Genera tráfico alto o errores en tu app
- Verifica que el agente detecte, analice y actúe

---

## 🧪 Pon a prueba tu conocimiento

1. ¿Cuál es la diferencia entre monitoreo y observabilidad?
2. ¿Cómo recolecta Prometheus métricas de apps?
3. ¿Qué es PromQL y cómo se usa en Grafana?
4. ¿Cómo configurarías alertas de CPU alto con Prometheus?
5. ¿Qué son exporters en Prometheus?
6. ¿Cómo agregas un data source en Grafana?
7. ¿Cuáles son buenas prácticas para dashboards?
8. ¿Cuáles son componentes clave de arquitectura de agentes de IA?
9. ¿Cómo ayuda un LLM a un agente a tomar decisiones?

---

## Recursos

- [Prometheus Documentation](https://prometheus.io/docs/)
- [Grafana Documentation](https://grafana.com/docs/)
- [Monitoring Node.js Apps with Prometheus & Grafana](https://codersociety.com/blog/articles/nodejs-application-monitoring-with-prometheus-and-grafana)
- [Monitoring Python Apps with Prometheus & Grafana](https://dev.to/ken_mwaura1/getting-started-monitoring-a-fastapi-app-with-grafana-and-prometheus-a-step-by-step-guide-3fbn)
- [Awesome Prometheus Alerts](https://samber.github.io/awesome-prometheus-alerts/)
- [n8n Documentation](https://docs.n8n.io/)
- [Self-host n8n](https://docs.n8n.io/hosting/installation/docker/#starting-n8n)

---

## ✅ Checklist del tema

Antes de seguir, asegúrate de tener:

- [ ] Entendido monitoreo vs observabilidad
- [ ] Configurado Prometheus con configuración básica
- [ ] Desplegado Grafana y conectado a Prometheus
- [ ] Creado dashboards con PromQL
- [ ] Instrumentado una app con métricas
- [ ] Construido un agente de IA con n8n
- [ ] Probado detección y alertas

---

