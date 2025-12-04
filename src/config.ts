/**
 * Configuration de l'application frontend
 */

// URL de l'API backend depuis les variables d'environnement
// DEBUG: Log pour vérifier la configuration
const envApiUrl = import.meta.env.VITE_API_URL;
console.log('🔧 API Configuration - VITE_API_URL:', envApiUrl);
export const API_URL = envApiUrl || 'http://localhost:8001';
console.log('🔧 API Configuration - Final API_URL:', API_URL);

// Configuration de l'API
export const API_CONFIG = {
  baseURL: API_URL,
  timeout: 30000, // 30 secondes
  headers: {
    'Content-Type': 'application/json',
  },
};

// Endpoints de l'API
export const API_ENDPOINTS = {
  auth: {
    login: `${API_URL}/auth/login`,
    signup: `${API_URL}/auth/signup`,
    me: `${API_URL}/auth/me`,
  },
  conversations: {
    list: `${API_URL}/conversations`,
    create: `${API_URL}/conversations`,
    get: (id: number | string) => `${API_URL}/conversations/${id}`,
    messages: (id: number | string) => `${API_URL}/conversations/${id}/messages`,
    delete: (id: number | string) => `${API_URL}/conversations/${id}`,
    export: (id: number | string, format: string = 'json') => 
      `${API_URL}/conversations/${id}/export?format=${format}`,
    share: (id: number | string) => `${API_URL}/conversations/${id}/share`,
    statistics: (id: number | string) => `${API_URL}/conversations/${id}/statistics`,
  },
  ask: {
    stream: `${API_URL}/ask/stream`,
    normal: `${API_URL}/ask`,
  },
  search: {
    messages: `${API_URL}/search/messages`,
    conversations: `${API_URL}/search/conversations`,
  },
  health: {
    basic: `${API_URL}/health`,
    detailed: `${API_URL}/health/detailed`,
  },
  metrics: `${API_URL}/metrics`,
  alerts: `${API_URL}/alerts`,
  llms: {
    list: `${API_URL}/llms`,
    get: (name: string) => `${API_URL}/llms/${name}`,
  },
};

