FROM node:22-alpine

# Instalar dependencias necesarias para algunos paquetes de node
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Abrir el puerto de Vite
EXPOSE 5173

# Mantener el contenedor vivo
CMD ["/bin/sh"]
