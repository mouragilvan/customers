<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">

                    <h5 v-if="!customer.id" class="modal-title" id="exampleModalLabel">
                        <img src="adicionar.png" class="btn-img" />
                        Cadastro de cliente
                    </h5>
                    <h5 v-if="customer.id" class="modal-title" id="exampleModalLabel">
                        <img src="editar.png" class="btn-img" />
                        Edição de cliente
                    </h5>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="reset"></button>
                </div>
                <div class="modal-body">
                    <div v-if="errorMessages !== null" class="alert alert-warning alert-dismissible fade show" role="alert">
                        <ul>
                            <li v-for="e in errorMessages" :key="e">{{ e }}</li>
                        </ul>
                    </div>
                    <div class="form-group">
                        <label for="nome"> Nome:</label>
                        <input type="text" id="nome" v-model.trim="formCustomer.nome" class="form-control" maxlength="100"
                            minlength="3" />
                    </div>
                    <div class="form-group">
                        <label for="cpf"> CPF:</label>
                        <input type="text" id="cpf" v-model.trim="formCustomer.cpf" class="form-control"
                            v-mask="['###.###.###-##']" minlength="14" />
                    </div>
                    <div class="form-group">
                        <label for="telefone"> Telefone:</label>
                        <input type="text" id="telefone" v-model.trim="formCustomer.telefone" class="form-control"
                            v-mask="['(##) ####-####', '(##) #####-####']" minlength="14" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="reset">Fechar</button>
                    <button type="button" class="btn btn-primary" @click="salvar">Salvar</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        customer: Object,
        errorMessages: Array
    },
    data() {
        return {
            formCustomer: {
                id: null,
                nome: '',
                cpf: '',
                telefone: ''
            }
        }
    },
    mounted() {
        if (this.customer) {
            this.formCustomer = this.customer;

        }
    },
    updated() {
        if (this.customer) {
            this.formCustomer = this.customer;
        }
    },

    methods: {
        closeModal() {
            this.$emit("close");
        },
        salvar() {
            this.$emit("save", this.formCustomer);
        },
        reset() {
            this.$emit("reset");
        },
        resetItem() {
            this.formCustomer = {
                id: null,
                nome: '',
                cpf: '',
                telefone: ''
            }
        }
    },

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-control:invalid {
    border: 1px solid red;
}

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
  