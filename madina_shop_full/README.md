# Madina Shop

Plateforme e-commerce modulaire pour commerçants guinéens :
- **apps/shop** : application React + Tailwind
- **services/logistics-service** : micro-service pour devis & booking fret
- **project-planning** : context, vision, fonctionnalités, stack tech
- **prompts** : prompts IA pour générer le code brique par brique

## Comment démarrer
1. Cloner le repo
2. Copier `.env.example` → `.env.local`, remplir vos clés Supabase et Freightos
3. Lancer le frontend :
   ```bash
   cd apps/shop && npm ci && npm run dev
   ```
4. Lancer le micro-service logistique (optionnel pour la phase 1) :
   ```bash
   cd services/logistics-service && npm ci && npm run dev
   ```
5. Pour activer la partie logistique dans l’app, passez `SHIPPING_FEATURE_FLAG=true` dans `.env.local`.
