## Instruções para rodar o projeto no Docker
##### Enquanto eu crio o docker-compose.yml você pode rodar o projeto usando os passos a seguir

### Crie a imagem 
##### Note que uso como nome da imagem o mesmo nome do projeto "customers"
```
docker build -t customers . 
```

### Suba o container
#### Note que estou usando a network criada lá no nosso backend Java (java-basic) que está aqui no nosso Gitub
```
docker run -p 8081:8080 -d --name=vue --network=basic customers
```

### Se tudo ocorreu conforme o esperado, pode acessar o projeto no endereço a seguir
```
http://localhost:8081/
```