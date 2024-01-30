<template>
    <div class="container">
        <table class="table table-striped">
            <thead>
                <th>Nome</th>
                <th>CPF</th>
                <th>TELEFONE</th>
            </thead>
            <tbody>
                <tr v-for="customer in customers" :key="customer.id">
                    <td>{{ customer.nome }}</td>
                    <td>{{ customer.cpf }}</td>
                    <td>{{ customer.telefone }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ApiService from "../services/ApiService"

export default {
    name: 'Inicio',
    data() {
        return {
            service: null,
            customers: []
        }
    },
    created() {
        this.service = new ApiService();
    },
    mounted() {
        this.setCustomers();
    },
    methods: {
        async setCustomers() {
            let request = await this.service.getCustomers();
            this.customers = request.content;
        }
    }
}
</script>
  
<style></style>
  