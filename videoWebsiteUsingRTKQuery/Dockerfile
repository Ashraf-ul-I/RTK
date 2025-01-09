FROM node:18 AS build-stage

# Set working directory
WORKDIR /app

# Copy React app files
COPY ./package.json ./package-lock.json ./
RUN npm install

COPY ./src ./src
COPY ./public ./public

# Build the React app
RUN npm run build

# Stage 2: Set up the JSON server and serve the React app
FROM node:18 AS production-stage
WORKDIR /app

# Install JSON server globally
RUN npm install -g json-server

# Copy server files
COPY ./server/package.json ./server/package-lock.json ./server/
COPY ./server/db_videos.json ./server/

# Install server dependencies
RUN cd ./server && npm install

# Copy React build files from the first stage
COPY --from=build-stage /app/build ./build

# Expose ports
EXPOSE 9000
EXPOSE 3000

# Start JSON server and React app
CMD ["sh", "-c", "cd ./server && json-server --watch db_videos.json --port 9000 & npx serve -s ./build -l 3000 && wait"]
