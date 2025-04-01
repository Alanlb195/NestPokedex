# Instalar dependencias solo cuando sea necesario
FROM node:18-alpine3.15 AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Construir la aplicación con caché de dependencias
FROM node:18-alpine3.15 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Imagen de producción, copiar archivos y ejecutar
FROM node:18-alpine3.15 AS runner

# Establecer directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos necesarios
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copiar la carpeta de distribución desde la imagen de construcción
COPY --from=builder /app/dist ./dist

# Crear usuario sin privilegios y darle permisos
RUN adduser --disabled-password pokeuser
RUN chown -R pokeuser:pokeuser /usr/src/app
USER pokeuser

# Exponer el puerto 3000
EXPOSE 3000

# Ejecutar la aplicación
CMD ["node", "dist/main"]
