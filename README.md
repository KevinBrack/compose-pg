# Docker Compose Full Stack Application Template

This template provides a docker-compose file that builds the following services in seperate containers.

- Jenkins
- Express (Node)
- NextJS (Node)
- Postgres

---

## PORTS

The following ports are exposed when the containers are built

| PORT | SERVICE  |
| ---- | -------- |
| 8080 | Jenkins  |
| 1337 | Express  |
| 80   | NextJS   |
| 5432 | Postgres |

---

## ENVIRONMENT

This template requires the following postgres ENV to be completed in the file `pg.env` to build properly

### **pg.env**

POSTGRES_PASSWORD

POSTGRES_USER

POSTGRES_DB

## Monitoring with cAdvisor

```
sudo docker run \
  --volume=/:/rootfs:ro \
  --volume=/var/run:/var/run:ro \
  --volume=/sys:/sys:ro \
  --volume=/var/lib/docker/:/var/lib/docker:ro \
  --volume=/dev/disk/:/dev/disk:ro \
  --publish=8081:8080 \
  --detach=true \
  --name=cadvisor \
  google/cadvisor:latest
```
