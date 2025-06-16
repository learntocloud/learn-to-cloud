# Topic 5: Monitoring and Observability

Monitoring and observability are essential DevOps practices that help you understand the health, performance, and reliability of your applications and infrastructure. In this topic, you'll learn how to set up monitoring using [Prometheus](https://prometheus.io/) and visualize metrics with [Grafana](https://grafana.com/).

---

## Why are monitoring and observability important for cloud-native applications?

Cloud-native applications are typically distributed, dynamic, and run across many services and environments. Monitoring and observability are critical because they:

- Help detect and resolve issues quickly, minimizing downtime.
- Provide visibility into system health, performance, and user experience.
- Enable proactive alerting and troubleshooting in complex, rapidly changing environments.
- Support scalability and reliability by identifying bottlenecks and failures.
- Allow teams to understand dependencies and interactions between microservices.

Without effective monitoring and observability, it becomes difficult to maintain, debug, and optimize cloud-native systems.

---

## Study

- What is [Monitoring](https://www.ibm.com/think/topics/observability-vs-monitoring) and [Observability](https://www.ibm.com/think/topics/observability-vs-monitoring) in DevOps?
- [Prometheus Overview](https://prometheus.io/docs/introduction/overview/)
- [Grafana Overview](https://grafana.com/docs/grafana/latest/getting-started/what-is-grafana/)
- [Prometheus + Grafana Integration](https://grafana.com/docs/grafana/latest/datasources/prometheus/)

---

## Key Concepts

- **Metrics**: Quantitative data about your systems (CPU, memory, requests, etc.)
- **Alerting**: Automated notifications based on metric thresholds
- **Dashboards**: Visual representations of metrics for quick insights
- **Instrumentation**: Adding code or exporters to expose metrics

---

## Hands-on Tasks

### 1. Set Up Prometheus

- Install Prometheus using Docker:
  ```sh
    docker run \
    -p 9090:9090 \
    -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml \
    prom/prometheus
  ```
- Create a minimal `prometheus.yml` config:
  ```yaml
  global:
    scrape_interval: 15s

  scrape_configs:
    - job_name: 'prometheus'
      static_configs:
        - targets: ['localhost:9090']
  ```
- Add your application's metrics endpoint to `static_configs` as needed.

### 2. Set Up Grafana

- Install Grafana using Docker:
  ```sh
  docker run -d --name=grafana -p 3000:3000 grafana/grafana
  ```
- Access Grafana at [http://localhost:3000](http://localhost:3000) (default login: `admin` / `admin`)
- Add Prometheus as a data source (URL: `http://host.docker.internal:9090` or `http://localhost:9090`)
- Add and connect your cloud provider's metrics if applicable (e.g., AWS CloudWatch, Azure Monitor)

### 3. Create Dashboards

- Create a new dashboard and add panels using PromQL queries (e.g., `up`, `http_requests_total`)
- Visualize metrics from your application or infrastructure

### 4. Instrument a Sample App

- For Node.js: Use [prom-client](https://github.com/siimon/prom-client) to expose metrics
- For Python: Use [prometheus_client](https://github.com/prometheus/client_python)
- Add the metrics endpoint to Prometheus config and visualize in Grafana

---

## Test Your Knowledge

Use these prompts to test your understanding:

1. What is the difference between monitoring and observability?
2. How does Prometheus collect metrics from applications?
3. What is PromQL and how is it used in Grafana dashboards?
4. How would you set up alerting for high CPU usage using Prometheus?
5. What are exporters in the context of Prometheus?
6. How do you add a new data source in Grafana?
7. What are some best practices for dashboard design?

---

## Resources

- [Prometheus Documentation](https://prometheus.io/docs/)
- [Grafana Documentation](https://grafana.com/docs/)
- [Monitoring Node.js Apps with Prometheus & Grafana](https://codersociety.com/blog/articles/nodejs-application-monitoring-with-prometheus-and-grafana)
- [Monitoring Python Apps with Prometheus & Grafana](https://dev.to/ken_mwaura1/getting-started-monitoring-a-fastapi-app-with-grafana-and-prometheus-a-step-by-step-guide-3fbn)
- [Awesome Prometheus Alerts](https://samber.github.io/awesome-prometheus-alerts/)
