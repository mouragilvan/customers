# Use a imagem Node.js como base
FROM node:18-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie o arquivo `package.json` e `package-lock.json` para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Exponha a porta 8080 (ou a porta que seu aplicativo Vue.js está configurado para usar)
EXPOSE 8080

# Comando para iniciar o aplicativo quando o contêiner for iniciado
CMD ["npm", "run", "serve"]


#docker run -p 8081:8080 -d --name=vue --network=basic customers 