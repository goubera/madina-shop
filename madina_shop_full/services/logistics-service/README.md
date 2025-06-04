# Logistics-Service Template

Ce micro-service expose les endpoints :
- GET /quote  – obtenir un tarif Freightos (sandbox d’abord)
- POST /booking – réserver un fret
- POST /tracking/webhook – mettre à jour le statut colis

Développé en Fastify + TypeScript, se déploie indépendamment de la boutique.
