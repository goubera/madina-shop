# Tests — Logistics Service

- tests/unit/      (mock Freightos, calcul marge, quotas)
- tests/integration/ (sandbox Freightos → /quote & /booking)
- tests/e2e/       (k6 ou Supertest pour montée en charge)

## Exécution des tests

Depuis le dossier `services/logistics-service`, lancez :

```bash
npm test
```

Cette commande exécute l'ensemble des tests Jest.
