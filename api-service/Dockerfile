FROM node:14

# Establecer directorio de trabajo
WORKDIR /usr/src/app/api-service

# Copiar archivos de dependencias
COPY api-service/package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY api-service/ .

# Variables de entorno
ENV PORT=8080
ENV NODE_ENV=production

# Exponer puerto
EXPOSE 8080

# Asegurarse de que estamos en el directorio correcto al iniciar
CMD cd /usr/src/app/api-service && node server.js
