<template>
    <div class="container pt-4">
        <div class="row">
            <div class="col-md-8">
                <h2><img src="comprador.png" class="img customer-icon mr" />Lista de clientes</h2>
            </div>
            <div v-if="successMessage !== null" class="alert alert-success alert-dismissible fade show cursor-pointer"
                @click="this.successMessage = null" role="alert">
                {{ successMessage }}
            </div>
            <div class="col-md-4 mx-auto">
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-primary" @click="addCustomer">
                        <img src="adicionar.png" class="btn-img" />
                    </button>
                    <button type="button" class="btn btn-secondary ml-2" @click="exportToPDF">
                        <img src="download.png" class="btn-img" />
                    </button>
                </div>
            </div>
        </div>
        <table class="table table-striped" ref="table">
            <thead>
                <th>Nome</th>
                <th>CPF</th>
                <th>TELEFONE</th>
                <tr></tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" :key="customer.id">
                    <td>{{ customer.nome }}</td>
                    <td>{{ customer.cpf }}</td>
                    <td>{{ customer.telefone }}</td>
                    <td v-if="!isExport">
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-primary" @click="editCustomer(customer)">
                                <img src="editar.png" class="btn-img" />
                            </button>
                            <button class="btn btn-danger ml-2" @click="removeCustomer(customer.id)">
                                <img src="remover.png" class="btn-img" />
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
    <ModalCustomer @save="createorUpdate" :errorMessage="errorMessage" :customer="customer" />
</template>

<script>
import ApiService from "../services/ApiService"
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

import html2pdf from 'html2pdf.js';

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
            successMessage: null,
            customer: {},
            isExport: false
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
        addCustomer() {
            this.customer = {};
            this.modal.show();
        },
        editCustomer(customer) {
            this.customer = customer;
            this.modal.show();
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
            this.successMessage = "Sucesso!";
            this.setCustomers();
            this.modal.hide();
        },
        async removeCustomer(id) {

            let response = await this.service.deleteCustomer(id);

            if (response.message) {
                this.errorMessage = response.message;
                return;
            }
            if (response.successMessage) {
                this.successMessage = "Removido com sucesso!";
                this.errorMessage = null;
                this.setCustomers();
                this.modal.hide();
            }

        },
        exportToPDF() {
            this.isExport = true;
            const content = this.$refs.table; // Substitua 'table' pelo ref da sua tabela

            html2pdf(content, {
                jsPDF: {
                    unit: 'in',
                    format: 'a4',
                    orientation: 'landscape'
                }
            })
                .then((pdf) => {
                    pdf.save('tabela.pdf');
                    this.isExport = false;
                });
        }

    }
}
</script>
  
<style scoped>
.cursor-pointer {
    cursor: pointer;
}

.ml-2 {
    margin-left: 2px;
}

.mr {
    margin-right: 7px;
}

.customer-icon {
    width: 50px
}

.btn-img {
    width: 30px;
}
</style>
  