<template>
    <div class="container pt-4">
        <div class="row">
            <div class="col-md-8">
                <h2>Lista de clientes</h2>
            </div>
            <div v-if="successMessage !== null" class="alert alert-success alert-dismissible fade show" role="alert">
                {{ successMessage }}
            </div>
            <div class="col-md-4 mx-auto">
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-primary" @click="modal.show()">
                        Cadastrar
                    </button>
                </div>
            </div>
        </div>
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
    <ModalCustomer @save="createorUpdate" :errorMessage="errorMessage" />
</template>

<script>
import ApiService from "../services/ApiService"
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
    name: 'Inicio',
    data() {
        return {
            service: null,
            customers: [],
            isModalVisible: false,
            modalId: "myModal",
            modalTitle: "Minha Modal",
            modal: null,
            errorMessage: null,
            successMessage: null
        }
    },
    created() {
        this.service = new ApiService();
    },
    mounted() {
        this.setCustomers();
        this.modal = new bootstrap.Modal(document.getElementById('exampleModal'));

    },
    methods: {
        async setCustomers() {

            let request = await this.service.getCustomers();
            this.customers = request.content;
        },
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        async createorUpdate(customer) {
            let response = null;
            if (!customer.id) {
                response = await this.service.createNew(customer);
            } else {
                response = await this.service.updateCustomer(customer);
            }

            if (response.message) {
                this.errorMessage = response.message;
                return;
            }
            this.errorMessage = null;
            this.successMessage = "Dados cadastrados com sucesso!";


        }
    }
}
</script>
  
<style scoped>
.cursor-pointer {
    cursor: pointer;
}
</style>
  