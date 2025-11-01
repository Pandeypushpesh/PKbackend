FROM ubuntu:latest

# Step 1: Update system
RUN apt-get update -y

# Step 2: Install curl and prerequisites
RUN apt-get install -y curl

# Step 3: Setup Node.js 22 (Run the setup script)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash -

# Step 4: Install Node.js (includes npm)
RUN apt-get install -y nodejs

# Step 5: Set working directory
WORKDIR /app

# Step 6: Copy package files first for caching
COPY package*.json ./

# Step 7: Install dependencies
RUN npm install

# Step 8: Copy rest of the project
COPY . .

# Step 8: Expose application port
ENV PORT=8000
EXPOSE 8000


# Step 9: Set default command
ENTRYPOINT ["node", "src/app.js"]
