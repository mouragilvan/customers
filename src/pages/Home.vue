<template>
    <div class="container mt-5">

        <h2 class="text-link" @click="irParaLista">Veja a lista de clientes clicando aqui</h2>

        <img src="imagem-home.jpg" class="imagem" />
    </div>
</template>
<script>
import router from '@/router';
export default {
    methods: {
        irParaLista() {
            router.push({ name: "inicio" })
        }
    }
}
</script>
<style scoped>
.imagem {
    width: 100%;
    height: 700px;
    border-radius: 5px;
}

.text-link {
    font-weight: bold;
    padding: 10px;
    border-radius: 20px;
    border: 2px solid black;
    cursor: pointer;
}
</style>