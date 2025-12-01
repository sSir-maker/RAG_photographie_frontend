FROM node:18-alpine AS builder

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./
RUN npm ci

# Copier le code source
COPY . .

# Build l'application
# Vérifier que le build fonctionne
RUN npm run build

# Vérifier que dist existe (Vite build dans dist par défaut, ou build selon config)
RUN ls -la /app && \
    if [ -d "dist" ]; then \
        echo "✅ dist trouvé"; \
    elif [ -d "build" ]; then \
        echo "✅ build trouvé (renommage en dist)"; \
        mv build dist; \
    else \
        echo "❌ ERREUR: ni dist ni build trouvé après build"; \
        ls -la /app; \
        exit 1; \
    fi

# Stage de production
FROM nginx:alpine

# Copier les fichiers buildés (vérifier que dist existe)
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier la configuration nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Vérifier que les fichiers sont bien copiés
RUN ls -la /usr/share/nginx/html || (echo "ERREUR: fichiers non copiés" && exit 1)

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

