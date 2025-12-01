# 🌐 Variables d'environnement Frontend sur Railway

## 📍 Où les configurer

1. Va sur https://railway.app
2. Sélectionne ton projet
3. Clique sur le service **frontend**
4. Va dans l'onglet **Variables**
5. Clique sur **New Variable**

## 🔑 Variable obligatoire

### VITE_API_URL

**Description** : URL du backend API Railway

**Valeur** : L'URL publique de ton backend Railway

**Exemple** :
```
https://rag-photographie-backend-production.up.railway.app
```

**Comment trouver l'URL du backend** :
1. Va dans ton service **backend** sur Railway
2. Clique sur **Settings**
3. Copie l'URL sous **Public Domain** ou **Custom Domain**
4. Colle-la dans `VITE_API_URL` du frontend

## ⚠️ Important

- ✅ Utilise **HTTPS** (pas HTTP)
- ✅ Pas de slash (`/`) à la fin
- ✅ Remplace par **TON URL Railway réelle**
- ✅ Pas besoin de `/api` à la fin (le frontend l'ajoute automatiquement)

## 📝 Exemple complet

Dans Railway → Frontend → Variables :

| Nom | Valeur |
|-----|--------|
| `VITE_API_URL` | `https://rag-photographie-backend-production.up.railway.app` |

## ✅ C'est tout !

Le frontend n'a besoin que d'**une seule variable** : `VITE_API_URL`

## 🔄 Après configuration

1. Railway redéploiera automatiquement le frontend
2. Le frontend pourra communiquer avec le backend
3. Vérifie que tout fonctionne en ouvrant l'URL du frontend

## 🐛 Dépannage

Si le frontend ne peut pas joindre le backend :

1. Vérifie que `VITE_API_URL` est correcte
2. Vérifie que le backend est bien déployé et accessible
3. Vérifie les logs Railway pour voir les erreurs
4. Assure-toi que le backend autorise les requêtes CORS depuis le frontend

