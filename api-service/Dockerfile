FROM node:14

# Establecer directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY . .

# Verificar la estructura
RUN ls -la && \
    echo "Verificando archivo server.js:" && \
    cat server.js

# Variables de entorno
ENV PORT=8080
ENV NODE_ENV=production

# Exponer puerto
EXPOSE 8080

# Comando para iniciar la aplicación
CMD [ "node", "server.js" ]
